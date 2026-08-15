import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// SERVER-SIDE SOURCE OF TRUTH MASTER PRODUCTS & PRICING
const SERVER_PRODUCTS_MAP: Record<string, { name: string; price: number; type: string }> = {
  "build-my-brand": { name: "Build My Brand", price: 999, type: "service" },
  "build-my-website": { name: "Build My Website", price: 499, type: "service" },
  "design-my-logo": { name: "Design My Logo", price: 499, type: "service" },
  "make-my-brand-premium": { name: "Make My Brand Premium", price: 799, type: "service" },
  "name-my-business": { name: "Name My Business", price: 299, type: "service" },
  "before-you-publish": { name: "Before You Publish", price: 399, type: "digital" },
  "before-you-design": { name: "Before You Design", price: 499, type: "digital" },
  "before-you-prompt": { name: "Before You Prompt", price: 299, type: "digital" },
  "before-you-build-a-brand": { name: "Before You Build a Brand", price: 499, type: "digital" },
  "before-you-launch": { name: "Before You Launch", price: 599, type: "digital" },
  "pm-resume-cover": { name: "Product Manager Resume & Cover Letter Templates", price: 399, type: "digital" },
  "pm-career-advancement": { name: "Tips & Tricks for Career Advancement in Product Management", price: 499, type: "digital" },
  "pm-behind-the-interview": { name: "Behind the Interview Scenes", price: 699, type: "digital" },
};

const SLUG_ALIASES: Record<string, string> = {
  "before-you-build-a-brand-guide": "before-you-build-a-brand",
  "before-you-design-guide": "before-you-design",
  "before-you-ask-ai": "before-you-prompt",
  "pm-behind-the-interview-scenes": "pm-behind-the-interview",
  "pm-resume-cover-templates": "pm-resume-cover",
  "make-brand-premium": "make-my-brand-premium",
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    const {
      order_id,
      productSlug,
      customerName,
      customerEmail,
      customerPhone,
      ownerName,
      email,
      mobile,
      businessName,
      website,
      socialLinks,
      aboutBrand,
      websiteNotes,
      goal,
    } = payload;

    const rawSlug = productSlug || payload.slug;
    const normalizedSlug = SLUG_ALIASES[rawSlug] || rawSlug;
    const targetProduct = SERVER_PRODUCTS_MAP[normalizedSlug];

    if (!targetProduct) {
      return new Response(
        JSON.stringify({ error: `Invalid product slug: ${rawSlug}` }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const finalOrderNumber = order_id || `ORDER_${Date.now()}_${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const finalName = ownerName || customerName || "Customer";
    const finalEmail = email || customerEmail || "";
    const finalMobile = mobile || customerPhone || "";

    // Secure Production Return URL pointing to https://mayaasolutions.in/payment-success
    const returnUrl = `https://mayaasolutions.in/payment-success?order_id=${encodeURIComponent(finalOrderNumber)}&product=${encodeURIComponent(normalizedSlug)}`;

    // Prepare Cashfree API Payload
    const cashfreePayload = {
      order_id: finalOrderNumber,
      order_amount: targetProduct.price,
      order_currency: "INR",
      customer_details: {
        customer_id: `CUST_${Date.now()}`,
        customer_name: finalName,
        customer_email: finalEmail,
        customer_phone: finalMobile,
      },
      order_meta: {
        return_url: returnUrl,
      },
    };

    const CF_APP_ID = Deno.env.get("CASHFREE_APP_ID");
    const CF_SECRET_KEY = Deno.env.get("CASHFREE_SECRET_KEY");
    const CF_ENV = Deno.env.get("CASHFREE_ENV") || "PRODUCTION";

    const cashfreeUrl = CF_ENV.toUpperCase() === "SANDBOX"
      ? "https://sandbox.cashfree.com/pg/orders"
      : "https://api.cashfree.com/pg/orders";

    const cfResponse = await fetch(cashfreeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-version": "2023-08-01",
        "x-client-id": CF_APP_ID || "",
        "x-client-secret": CF_SECRET_KEY || "",
      },
      body: JSON.stringify(cashfreePayload),
    });

    const cfData = await cfResponse.json();

    if (!cfResponse.ok) {
      console.error("Cashfree Order Creation Failed:", cfData);
      return new Response(
        JSON.stringify({ error: cfData.message || "Failed to create Cashfree order", details: cfData }),
        { status: cfResponse.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Record order in Supabase DB if client is configured
    try {
      const supabaseUrl = Deno.env.get("SUPABASE_URL");
      const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        await supabase.from("orders").insert([
          {
            order_id: finalOrderNumber,
            product_slug: normalizedSlug,
            product_name: targetProduct.name,
            amount: targetProduct.price,
            customer_name: finalName,
            customer_email: finalEmail,
            customer_phone: finalMobile,
            business_name: businessName || null,
            status: "PENDING",
          },
        ]);
      }
    } catch (dbErr) {
      console.warn("DB Record Warning:", dbErr);
    }

    return new Response(
      JSON.stringify({
        success: true,
        order_id: finalOrderNumber,
        payment_session_id: cfData.payment_session_id,
        cf_payment_session_id: cfData.payment_session_id,
        productSlug: normalizedSlug,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Edge Function Error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal Server Error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
