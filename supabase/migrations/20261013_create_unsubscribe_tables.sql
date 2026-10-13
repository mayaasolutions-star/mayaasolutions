-- ================================================================
-- MAYAA SOLUTIONS - EMAIL UNSUBSCRIBE & SUPPRESSION SYSTEM MIGRATION
-- Migration Date: 2026-10-13
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
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_email_unsubscribes_updated_at'
  ) THEN
    CREATE TRIGGER update_email_unsubscribes_updated_at
    BEFORE UPDATE ON public.email_unsubscribes
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
  END IF;
END $$;

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

-- Allow service_role key full administrative access
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'email_unsubscribes' AND policyname = 'Allow service_role full access to email_unsubscribes'
  ) THEN
    CREATE POLICY "Allow service_role full access to email_unsubscribes"
      ON public.email_unsubscribes
      FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'unsubscribe_tokens' AND policyname = 'Allow service_role full access to unsubscribe_tokens'
  ) THEN
    CREATE POLICY "Allow service_role full access to unsubscribe_tokens"
      ON public.unsubscribe_tokens
      FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;
