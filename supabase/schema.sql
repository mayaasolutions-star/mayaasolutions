-- ================================================================
-- MAYAA SOLUTIONS - ORDERS DATABASE TABLE SCHEMA
-- ================================================================

CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id VARCHAR(100) UNIQUE NOT NULL, -- Internal order ID (e.g. MAYAA_ORD_1700000000_1234)
  product_id VARCHAR(100) NOT NULL,       -- Product slug / ID (e.g. build-my-brand, before-you-publish)
  product_name VARCHAR(255) NOT NULL,     -- Full product name
  customer_name VARCHAR(255) NOT NULL,    -- Customer name
  customer_email VARCHAR(255) NOT NULL,   -- Customer email
  customer_mobile VARCHAR(50) NOT NULL,   -- Customer WhatsApp / mobile number
  business_name VARCHAR(255),             -- Business name (if applicable)
  amount DECIMAL(10, 2) NOT NULL,         -- Verified server price in INR
  currency VARCHAR(10) DEFAULT 'INR',     -- Currency code
  cf_order_id VARCHAR(100),              -- Cashfree Order ID
  cf_payment_session_id TEXT,             -- Cashfree Payment Session ID
  cf_payment_id VARCHAR(100),            -- Cashfree Payment ID
  payment_status VARCHAR(50) DEFAULT 'PENDING', -- PENDING, PAID, FAILED, CANCELLED
  fulfillment_status VARCHAR(50) DEFAULT 'PENDING', -- PENDING, PROCESSING, FULFILLED, FAILED
  payment_method VARCHAR(50),
  transaction_ref VARCHAR(255),
  metadata JSONB,                         -- Customer brief, website notes, goals
  created_at TIMESTAMPTZ DEFAULT NOW(),
  paid_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Indexes for Fast Lookup
CREATE INDEX IF NOT EXISTS idx_orders_order_id ON public.orders(order_id);
CREATE INDEX IF NOT EXISTS idx_orders_cf_order_id ON public.orders(cf_order_id);
CREATE INDEX IF NOT EXISTS idx_orders_product_id ON public.orders(product_id);
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON public.orders(payment_status);

-- Automatic Updated_At Trigger Function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_orders_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
