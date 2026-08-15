import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  try {
    const rawBody = await req.text();
    const payload = JSON.parse(rawBody);

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Event checking
    const eventType = payload.type || payload.event;
    const orderData = payload.data?.order || payload.order;
    const paymentData = payload.data?.payment || payload.payment;

    if (orderData && orderData.order_id) {
      const orderId = orderData.order_id;
      const paymentStatus = paymentData?.payment_status === "SUCCESS" ? "PAID" : "FAILED";

      // Idempotent Update
      await supabase
        .from("orders")
        .update({
          payment_status: paymentStatus,
          fulfillment_status: paymentStatus === "PAID" ? "PROCESSING" : "FAILED",
          paid_at: paymentStatus === "PAID" ? new Date().toISOString() : null,
          cf_payment_id: paymentData?.cf_payment_id || null,
          transaction_ref: paymentData?.bank_reference || null,
          webhook_payload: payload,
        })
        .eq("order_id", orderId);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("Webhook processing error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
});
