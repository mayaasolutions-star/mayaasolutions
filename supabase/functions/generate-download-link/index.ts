import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const STORAGE_BASE_URL = "https://jiffohgricelcmrgkimp.supabase.co/storage/v1/object/public/products/";

const FULFILLMENT_MAP: Record<
  string,
  { name: string; type: "service" | "digital"; downloadUrl?: string; storageFile?: string; deliveryMessage?: string }
> = {
  // 5 SERVICE PRODUCTS
  "build-my-brand": {
    name: "Build My Brand",
    type: "service",
    deliveryMessage: "Thank you for ordering Build My Brand! Our strategy team will contact you via WhatsApp/Email within 24 hours to begin your 3 brand concepts.",
  },
  "build-my-website": {
    name: "Build My Website",
    type: "service",
    deliveryMessage: "Thank you for ordering Build My Website! Our team will contact you within 24 hours to gather your homepage preferences and build your custom demo.",
  },
  "design-my-logo": {
    name: "Design My Logo",
    type: "service",
    deliveryMessage: "Thank you for ordering Design My Logo! Our design team will contact you within 24 hours to start your logo concepts.",
  },
  "make-my-brand-premium": {
    name: "Make My Brand Premium",
    type: "service",
    deliveryMessage: "Thank you for ordering Make My Brand Premium! We will reach out to analyze your existing visual touchpoints and deliver your brand upgrade plan.",
  },
  "name-my-business": {
    name: "Name My Business",
    type: "service",
    deliveryMessage: "Thank you for ordering Name My Business! Our branding team will review your business brief and send 5 trademark-ready business names within 48 hours.",
  },

  // 8 DIGITAL PRODUCTS & PDF MAPPINGS
  "before-you-build-a-brand": {
    name: "Before You Build a Brand",
    type: "digital",
    storageFile: "beforeyoubuildabrand.pdf",
    downloadUrl: `${STORAGE_BASE_URL}beforeyoubuildabrand.pdf`,
  },
  "before-you-design": {
    name: "Before You Design",
    type: "digital",
    storageFile: "beforeyoudesign.pdf",
    downloadUrl: `${STORAGE_BASE_URL}beforeyoudesign.pdf`,
  },
  "before-you-launch": {
    name: "Before You Launch",
    type: "digital",
    storageFile: "beforeyoulaunch.pdf",
    downloadUrl: `${STORAGE_BASE_URL}beforeyoulaunch.pdf`,
  },
  "before-you-prompt": {
    name: "Before You Prompt",
    type: "digital",
    storageFile: "beforeyouprompt.pdf",
    downloadUrl: `${STORAGE_BASE_URL}beforeyouprompt.pdf`,
  },
  "before-you-publish": {
    name: "Before You Publish",
    type: "digital",
    storageFile: "beforeyoupublish.pdf",
    downloadUrl: `${STORAGE_BASE_URL}beforeyoupublish.pdf`,
  },
  "pm-behind-the-interview": {
    name: "Behind the Interview Scenes",
    type: "digital",
    storageFile: "pm-behindtheinterview.pdf",
    downloadUrl: `${STORAGE_BASE_URL}pm-behindtheinterview.pdf`,
  },
  "pm-career-advancement": {
    name: "Tips & Tricks for Career Advancement in Product Management",
    type: "digital",
    storageFile: "pm-careeradvancement.pdf",
    downloadUrl: `${STORAGE_BASE_URL}pm-careeradvancement.pdf`,
  },
  "pm-resume-cover": {
    name: "Product Manager Resume & Cover Letter Templates",
    type: "digital",
    storageFile: "pm-resumecover.pdf",
    downloadUrl: `${STORAGE_BASE_URL}pm-resumecover.pdf`,
  },
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
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { slug, order_id } = await req.json();

    const normalizedSlug = SLUG_ALIASES[slug] || slug;
    const product = FULFILLMENT_MAP[normalizedSlug] || FULFILLMENT_MAP[slug];

    if (!product) {
      return new Response(JSON.stringify({ error: `Invalid product slug: ${slug}` }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        orderId: order_id || undefined,
        productSlug: normalizedSlug,
        productName: product.name,
        type: product.type,
        downloadUrl: product.downloadUrl,
        storageFile: product.storageFile,
        deliveryMessage: product.deliveryMessage,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
