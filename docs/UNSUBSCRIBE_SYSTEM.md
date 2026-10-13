# Mayaa Solutions - Email Unsubscribe & Suppression System

Comprehensive technical documentation and operational guide for the email unsubscription, suppression management, and RFC 8058 one-click system.

---

## 1. System Architecture Overview

The system delivers a secure, idempotent, privacy-preserving unsubscribe mechanism for both:
1. **Manual emails sent from `@mayaasolutions.in`** (using unique recipient-specific cryptographically signed tokens in email bodies).
2. **Automated marketing campaigns / transactional emails** (using RFC 8058 `List-Unsubscribe` & `List-Unsubscribe-Post` headers with DKIM alignment).

```
Manual Email / Web Flow:
Recipient clicks link -> GET /unsubscribe?token=... -> Renders Confirmation Page -> User clicks "Unsubscribe" -> POST /functions/v1/unsubscribe -> Suppression List Updated

One-Click Flow (RFC 8058):
Mail Client (Gmail/Yahoo/Apple) -> Direct HTTPS POST /functions/v1/unsubscribe?token=... -> 200 OK -> Suppression List Updated (Zero browser/redirect needed)
```

### Key Security Safeguards
- **Crawler Protection**: `GET` requests never unsubscribe contacts. Automated email security scanners (Microsoft Defender, Barracuda, Google Safe Browsing) that pre-fetch links will not accidentally unsubscribe recipients.
- **Cryptographic Recipient Tokens**: Tokens are HMAC-SHA256 signed with recipient-specific payload (`email`, `iat`, `exp`, `nonce`, `source`). Changing an email in the URL breaks the cryptographic signature immediately, preventing malicious actor tampering.
- **Token Hashing in Database**: When tokens are pre-issued or tracked in the database, only their SHA-256 hash is stored, never plaintext tokens.
- **Privacy & Masking**: The public page only displays masked recipient identifiers (`a***r@domain.com`), never leaking raw email addresses to unauthorized viewers.
- **Idempotency**: Repeated unsubscribe requests are completely safe and idempotent, returning confirmation without generating duplicate suppression records or database errors.
- **SEO Suppression**: Marked with `noindex, nofollow`, excluded from sitemap and main site navigation.

---

## 2. Database Schema (Supabase PostgreSQL)

Migration file: `supabase/migrations/20261013_create_unsubscribe_tables.sql` (also embedded in `supabase/schema.sql`).

### `public.email_unsubscribes` (Suppression List)
| Column | Type | Description |
|---|---|---|
| `id` | UUID PK | Default `gen_random_uuid()` |
| `email` | VARCHAR(255) UNIQUE NOT NULL | Normalized lowercase recipient email |
| `status` | VARCHAR(50) NOT NULL | Default `'unsubscribed'` |
| `source` | VARCHAR(50) NOT NULL | `'web_link'`, `'one_click'`, `'admin_manual'`, `'manual_email'` |
| `reason` | TEXT NULL | Optional exit survey reason |
| `ip_address` | VARCHAR(100) NULL | Client IP for audit logs |
| `user_agent` | TEXT NULL | Client User-Agent |
| `unsubscribed_at`| TIMESTAMPTZ NOT NULL | Timestamp of unsubscription |
| `created_at` | TIMESTAMPTZ NOT NULL | Row creation time |
| `updated_at` | TIMESTAMPTZ NOT NULL | Auto-updated via trigger |

### `public.unsubscribe_tokens` (Issued Token Auditing)
| Column | Type | Description |
|---|---|---|
| `id` | UUID PK | Default `gen_random_uuid()` |
| `email` | VARCHAR(255) NOT NULL | Associated recipient email |
| `token_hash` | VARCHAR(128) UNIQUE NOT NULL | SHA-256 hash of issued token |
| `source` | VARCHAR(100) | Campaign or origin tag |
| `expires_at` | TIMESTAMPTZ NULL | Optional token expiry |
| `used_at` | TIMESTAMPTZ NULL | Timestamp when first used |
| `created_at` | TIMESTAMPTZ NOT NULL | Token issuance time |

---

## 3. Endpoints Created

### 1. Public Unsubscribe Endpoint
**Base URL**: `https://jiffohgricelcmrgkimp.supabase.co/functions/v1/unsubscribe`

- **`GET /functions/v1/unsubscribe?token={TOKEN}`**
  - **Purpose**: Verifies token validity for the frontend UI.
  - **Behavior**: Validates signature and expiry, checks existing suppression status. Does **NOT** modify database.
  - **Response (200 OK)**:
    ```json
    {
      "valid": true,
      "maskedEmail": "c***r@example.com",
      "alreadyUnsubscribed": false
    }
    ```

- **`POST /functions/v1/unsubscribe`**
  - **Purpose**: Executes the unsubscription (for Web UI submission or RFC 8058 One-Click).
  - **Web UI Payload**:
    ```json
    {
      "token": "...",
      "reason": "Emails are too frequent",
      "source": "web_link"
    }
    ```
  - **RFC 8058 Payload**:
    - Query param: `?token={TOKEN}`
    - Header: `List-Unsubscribe-Post: List-Unsubscribe=One-Click`
    - Body: `List-Unsubscribe=One-Click`
  - **Response (200 OK)**:
    ```json
    {
      "success": true,
      "message": "You have been successfully unsubscribed from Mayaa Solutions marketing emails.",
      "maskedEmail": "c***r@example.com",
      "alreadyUnsubscribed": false,
      "source": "one_click"
    }
    ```

### 2. Admin Management Endpoint
**Base URL**: `https://jiffohgricelcmrgkimp.supabase.co/functions/v1/admin-unsubscribes`
**Authorization**: `x-admin-key: {ADMIN_API_KEY}`

- **`GET /functions/v1/admin-unsubscribes`**
  - Returns JSON suppression list.
- **`GET /functions/v1/admin-unsubscribes?format=csv`**
  - Streams standard RFC 4180 CSV export with `Content-Disposition: attachment`.
- **`POST /functions/v1/admin-unsubscribes` (action: `generate_token`)**
  - Generates recipient-specific signed token, web link, and RFC 8058 headers for an email.
- **`POST /functions/v1/admin-unsubscribes` (action: `check_suppression`)**
  - Takes `{ emails: ["a@example.com", "b@example.com"] }` and returns `{ suppressedEmails: [...], activeEmails: [...] }` to filter marketing campaign recipient lists.

---

## 4. Frontend Route

- **Public Unsubscribe Page**: `/unsubscribe`
  - URL: `https://mayaasolutions.in/unsubscribe?token=...`
  - Design: Minimal monochrome design system (`bg-studio-950`, `text-[#171717]`, `Plus Jakarta Sans` & `Manrope`).
  - Heading: **Unsubscribe from emails**
  - Description: "You can unsubscribe from marketing emails sent by Mayaa Solutions below."
  - Optional Question: **Why are you unsubscribing?** with four selectable options:
    - *Emails are too frequent*
    - *Content is not relevant to me*
    - *I never signed up for this*
    - *Other reason*
  - Button: Prominent black **UNSUBSCRIBE** button.
  - Success State: Replaces form with **You're unsubscribed.** and "You have been successfully unsubscribed from Mayaa Solutions marketing emails." (no unnecessary buttons, forms, or surveys).
  - Already Unsubscribed: Displays "You're already unsubscribed from Mayaa Solutions marketing emails."
  - Invalid / Expired: Displays clear notice with support contact ([contact@mayaasolutions.in](mailto:contact@mayaasolutions.in)).
  - Meta tags: `noindex, nofollow` (excluded from sitemap and navigation).

---

## 5. Manual Emails from `@mayaasolutions.in`

### How to Generate Unique Links

When team members send emails manually from `@mayaasolutions.in` (via Google Workspace / Gmail / Outlook / Apple Mail), the sender must include a recipient-specific link.

#### Option A: Terminal / CLI Script
Run from the website repository:
```bash
node scripts/generate-unsubscribe-link.js recipient@clientcompany.com
```

**Output**:
```
  Web Unsubscribe Link:
  https://mayaasolutions.in/unsubscribe?token=eyJlbWFpbCI6...

  Ready-to-Paste HTML Footer:
  <p style="font-size:11px;color:#888;">To unsubscribe from marketing emails sent by Mayaa Solutions, <a href="https://mayaasolutions.in/unsubscribe?token=..." style="color:#555;">click here</a>.</p>
```

#### Option B: Admin Dashboard
1. Navigate to `https://mayaasolutions.in/admin/unsubscribes`
2. Enter your admin key.
3. In the **Manual Email Tool** section, enter the recipient email and click **Generate Link**.
4. Click **Copy** and paste it into the email signature or footer.

> [!IMPORTANT]
> Never use a generic link like `.../unsubscribe?email=client@test.com`. Anyone altering that parameter could unsubscribe third parties. The tokens generated here are cryptographically signed with HMAC-SHA256 and cannot be forged.

---

## 6. RFC 8058 One-Click Header Specification & Provider Config

### Headers Syntax
When sending marketing emails through automated email providers or SMTP servers, include these headers:

```http
List-Unsubscribe: <https://jiffohgricelcmrgkimp.supabase.co/functions/v1/unsubscribe?token=UNIQUE_RECIPIENT_TOKEN>, <mailto:unsubscribe@mayaasolutions.in?subject=unsubscribe>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

### Important Webmail Distinction
> [!NOTE]
> Webmail interfaces (such as typing an email in gmail.com or Outlook webmail) **do not** allow custom MIME headers to be attached to outgoing messages. RFC 8058 headers can only be set via automated SMTP gateways, sending libraries (Nodemailer), or transactional/marketing email APIs (Resend, AWS SES, Postmark, SendGrid). For manual emails, use the unique link in the email body.

### DKIM Requirement
Per RFC 8058 and Google/Yahoo sender requirements:
The email's DKIM signature **must sign both `List-Unsubscribe` and `List-Unsubscribe-Post`**.
Ensure your sending provider's DKIM header list (`h=...`) covers:
`h=from:to:subject:date:message-id:list-unsubscribe:list-unsubscribe-post:...`

### Provider Configuration Examples

#### 1. Nodemailer (Node.js)
```javascript
const transporter = nodemailer.createTransport({ ... });

await transporter.sendMail({
  from: '"Mayaa Solutions" <contact@mayaasolutions.in>',
  to: recipientEmail,
  subject: "...",
  headers: {
    'List-Unsubscribe': `<https://jiffohgricelcmrgkimp.supabase.co/functions/v1/unsubscribe?token=${token}>, <mailto:unsubscribe@mayaasolutions.in?subject=unsubscribe>`,
    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
  },
  html: `... <p><a href="https://mayaasolutions.in/unsubscribe?token=${token}">Unsubscribe</a></p>`
});
```

#### 2. Resend API
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Mayaa Solutions <contact@mayaasolutions.in>',
  to: recipientEmail,
  subject: '...',
  headers: {
    'List-Unsubscribe': `<https://jiffohgricelcmrgkimp.supabase.co/functions/v1/unsubscribe?token=${token}>`,
    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
  },
  html: '...'
});
```

#### 3. AWS SES (SendRawEmail / v2 SendEmail)
Include in `EmailTags` or raw MIME headers:
```
List-Unsubscribe: <https://jiffohgricelcmrgkimp.supabase.co/functions/v1/unsubscribe?token=${token}>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

---

## 7. Deployment Environment Variables

Configure the following variables in your Supabase Project Settings (**Edge Functions Secrets**) or host environment:

| Variable | Description | Default / Example |
|---|---|---|
| `UNSUBSCRIBE_SECRET` | Secret key used to sign and verify HMAC tokens | (Configured securely in Supabase secrets) |
| `ADMIN_API_KEY` | Admin authorization key for suppression review & CSV exports | (Configured in Supabase secrets) |
| `SUPABASE_URL` | Supabase project URL | `https://jiffohgricelcmrgkimp.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key for database suppression access | Set in Supabase Edge Function environment |
| `VITE_SUPABASE_URL` | Frontend Supabase URL | Set in Vite / Cloudflare Pages build |
| `VITE_SUPABASE_ANON_KEY` | Frontend Supabase publishable key | Set in Vite / Cloudflare Pages build |

---

## 8. Database Migration Execution

To apply the suppression schema to your Supabase project:
1. Open the [Supabase Dashboard](https://supabase.com/dashboard).
2. Navigate to **SQL Editor**.
3. Open `supabase/migrations/20261013_create_unsubscribe_tables.sql`.
4. Click **Run**.
