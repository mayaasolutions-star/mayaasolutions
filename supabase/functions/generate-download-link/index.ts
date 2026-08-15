import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const FULFILLMENT_MAP: Record<
  string,
  { name: string; type: "service" | "digital"; downloadUrl?: string; deliveryMessage?: string }
> = {
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
  "make-brand-premium": {
    name: "Make Brand Premium",
    type: "service",
    deliveryMessage: "Thank you for ordering Make Brand Premium! We will reach out to analyze your existing visual touchpoints and deliver your brand upgrade plan.",
  },
  "name-my-business": {
    name: "Name My Business",
    type: "service",
    deliveryMessage: "Thank you for ordering Name My Business! Our branding team will review your business brief and send 5 trademark-ready business names within 48 hours.",
  },
  "before-you-publish": {
    name: "Before You Publish",
    type: "digital",
    downloadUrl: "/downloads/before-you-publish-guide.pdf",
  },
  "before-you-design-guide": {
    name: "Before You Design Guide",
    type: "digital",
    downloadUrl: "/downloads/before-you-design-guide.pdf",
  },
  "before-you-ask-ai": {
    name: "Before You Ask AI",
    type: "digital",
    downloadUrl: "/downloads/before-you-ask-ai-framework.pdf",
  },
  "before-you-build-a-brand-guide": {
    name: "Before You Build a Brand Guide",
    type: "digital",
    downloadUrl: "/downloads/before-you-build-a-brand-guide.pdf",
  },
  "before-you-launch": {
    name: "Before You Launch",
    type: "digital",
    downloadUrl: "/downloads/before-you-launch-playbook.pdf",
  },
  "pm-resume-cover-templates": {
    name: "PM Resume & Cover Letter Templates",
    type: "digital",
    downloadUrl: "/downloads/pm-resume-cover-templates.pdf",
  },
  "pm-career-advancement": {
    name: "PM Career Advancement",
    type: "digital",
    downloadUrl: "/downloads/pm-career-advancement-guide.pdf",
  },
  "pm-behind-the-interview-scenes": {
    name: "PM Behind the Interview Scenes",
    type: "digital",
    downloadUrl: "/downloads/pm-behind-the-interview-scenes.pdf",
  },
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { slug, order_id } = await req.json();

    const product = FULFILLMENT_MAP[slug];
    if (!product) {
      return new Response(JSON.stringify({ error: "Invalid product slug" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        productName: product.name,
        type: product.type,
        downloadUrl: product.downloadUrl,
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
