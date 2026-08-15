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
  "make-brand-premium": { name: "Make Brand Premium", price: 799, type: "service" },
  "name-my-business": { name: "Name My Business", price: 299, type: "service" },
  "before-you-publish": { name: "Before You Publish", price: 399, type: "digital" },
  "before-you-design-guide": { name: "Before You Design Guide", price: 499, type: "digital" },
  "before-you-ask-ai": { name: "Before You Ask AI", price: 299, type: "digital" },
  "before-you-build-a-brand-guide": { name: "Before You Build a Brand Guide", price: 499, type: "digital" },
  "before-you-launch": { name: "Before You Launch", price: 599, type: "digital" },
  "pm-resume-cover-templates": { name: "PM Resume & Cover Letter Templates", price: 399, type: "digital" },
  "pm-career-advancement": { name: "PM Career Advancement", price: 499, type: "digital" },
  "pm-behind-the-interview-scenes": { name: "PM Behind the Interview Scenes", price: 699, type: "digital" },
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
      businessName,
      returnUrl,
    } = payload;

    // 1. Verify Product & Price Server-Side (DO NOT TRUST FRONTEND AMOUNT)
    const product = SERVER_PRODUCTS_MAP[productSlug];
    if (!product) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid product identifier" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const verifiedAmount = product.price;
    const internalOrderId = order_id || `MAYAA_ORD_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

    // 2. Initialize Supabase Admin Client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 3. Create Cashfree Order via Cashfree PG API
    const cfAppId = Deno.env.get("CASHFREE_APP_ID") || "";
    const cfSecret = Deno.env.get("CASHFREE_SECRET_KEY") || "";
    const cfEnv = Deno.env.get("CASHFREE_ENV") || "PRODUCTION"; // PRODUCTION or SANDBOX

    const cfHost = cfEnv.toUpperCase() === "PRODUCTION"
      ? "https://api.cashfree.com/pg"
      : "https://sandbox.cashfree.com/pg";

    const cfRequestBody = {
      order_id: internalOrderId,
      order_amount: verifiedAmount,
      order_currency: "INR",
      customer_details: {
        customer_id: customerEmail.replace(/[^a-zA-Z0-9_-]/g, "_"),
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone.replace(/\D/g, "").slice(-10),
      },
      order_meta: {
        return_url: returnUrl || `https://mayaasolutions.in/payment-success?order_id=${internalOrderId}&product=${productSlug}`,
      },
      order_note: `Mayas Solutions - ${product.name}`,
    };

    const cfRes = await fetch(`${cfHost}/orders`, {
      method: "POST",
      headers: {
        "x-client-id": cfAppId,
        "x-client-secret": cfSecret,
        "x-api-version": "2023-08-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cfRequestBody),
    });

    const cfData = await cfRes.json();

    if (!cfRes.ok) {
      console.error("Cashfree Order API Error:", cfData);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Cashfree Order Creation Failed",
          message: cfData.message || "Failed to initialize payment gateway order.",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 4. Save Order Record into DB
    await supabase.from("orders").insert({
      order_id: internalOrderId,
      product_id: productSlug,
      product_name: product.name,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_mobile: customerPhone,
      business_name: businessName || "",
      amount: verifiedAmount,
      currency: "INR",
      cf_order_id: cfData.cf_order_id,
      cf_payment_session_id: cfData.payment_session_id,
      payment_status: "PENDING",
      fulfillment_status: "PENDING",
    });

    return new Response(
      JSON.stringify({
        success: true,
        order_id: internalOrderId,
        payment_session_id: cfData.payment_session_id,
        cf_order_id: cfData.cf_order_id,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Create Order Function Error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Internal Server Error", message: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
