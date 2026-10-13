import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

function extractEmailFromPayload(token: string): string | null {
  if (!token || typeof token !== "string") return null;
  // If token is direct email
  if (token.includes("@")) {
    return token.trim().toLowerCase();
  }
  // If signed token with dot
  if (token.includes(".")) {
    try {
      const [payloadB64] = token.split(".");
      const jsonStr = base64UrlDecode(payloadB64);
      const data = JSON.parse(jsonStr);
      if (data.email && typeof data.email === "string" && data.email.includes("@")) {
        return data.email.trim().toLowerCase();
      }
    } catch {}
  }
  return null;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    let email = url.searchParams.get("email") || "";
    let token = url.searchParams.get("token") || "";

    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      try {
        const body = await req.json();
        if (body.email) email = body.email;
        if (body.token) token = body.token;
      } catch {}
    }

    let targetEmail = "";
    if (email && email.includes("@")) {
      targetEmail = email.trim().toLowerCase();
    } else if (token) {
      const extracted = extractEmailFromPayload(token);
      if (extracted) {
        targetEmail = extracted;
      }
    }

    if (!targetEmail || !targetEmail.includes("@")) {
      return new Response(
        JSON.stringify({ success: false, error: "Valid email address is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

      // Record in Supabase email_unsubscribes table (upsert to handle duplicates safely)
      const { error } = await supabase.from("email_unsubscribes").upsert(
        {
          email: targetEmail,
          status: "unsubscribed",
          source: "email_unsubscribe",
          unsubscribed_at: new Date().toISOString(),
        },
        { onConflict: "email" }
      );

      if (error) {
        console.error("Supabase record error:", error);
        return new Response(
          JSON.stringify({ success: false, error: "Failed to record unsubscribe status" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "You have been successfully unsubscribed from Mayaa Solutions emails.",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Unsubscribe error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
