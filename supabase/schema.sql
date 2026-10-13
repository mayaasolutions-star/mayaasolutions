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

-- ================================================================
-- MAYAA SOLUTIONS - EMAIL UNSUBSCRIBE & SUPPRESSION SYSTEM
-- ================================================================

-- 1. Suppression List Table (Unsubscribed Contacts)
CREATE TABLE IF NOT EXISTS public.email_unsubscribes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,                -- Normalized lowercase recipient email
  status VARCHAR(50) NOT NULL DEFAULT 'unsubscribed', -- 'unsubscribed' or 'resubscribed'
  source VARCHAR(50) NOT NULL DEFAULT 'web_link',     -- 'web_link', 'one_click', 'admin_manual', 'manual_email'
  reason TEXT,                                        -- Optional feedback reason
  ip_address VARCHAR(100),                            -- Masked/anonymized request IP
  user_agent TEXT,                                    -- Request User-Agent for auditing
  unsubscribed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), -- Timestamp when recipient unsubscribed
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for Email Unsubscribes
CREATE INDEX IF NOT EXISTS idx_email_unsubscribes_email ON public.email_unsubscribes(email);
CREATE INDEX IF NOT EXISTS idx_email_unsubscribes_status ON public.email_unsubscribes(status);
CREATE INDEX IF NOT EXISTS idx_email_unsubscribes_created_at ON public.email_unsubscribes(created_at);

-- Trigger to auto-update updated_at for email_unsubscribes
CREATE TRIGGER update_email_unsubscribes_updated_at
BEFORE UPDATE ON public.email_unsubscribes
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- 2. Issued Unsubscribe Tokens Table (Token Hashing Approach)
CREATE TABLE IF NOT EXISTS public.unsubscribe_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  token_hash VARCHAR(128) NOT NULL UNIQUE,            -- SHA-256 hash of the issued token (never store plaintext)
  source VARCHAR(100) DEFAULT 'email_campaign',       -- 'manual_email', 'marketing_campaign', etc.
  expires_at TIMESTAMPTZ,                             -- Optional expiry timestamp
  used_at TIMESTAMPTZ,                                -- Timestamp when token was first submitted
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for Issued Unsubscribe Tokens
CREATE INDEX IF NOT EXISTS idx_unsubscribe_tokens_hash ON public.unsubscribe_tokens(token_hash);
CREATE INDEX IF NOT EXISTS idx_unsubscribe_tokens_email ON public.unsubscribe_tokens(email);

-- Row-Level Security (RLS)
ALTER TABLE public.email_unsubscribes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.unsubscribe_tokens ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service_role full access to email_unsubscribes"
  ON public.email_unsubscribes
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow service_role full access to unsubscribe_tokens"
  ON public.unsubscribe_tokens
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
