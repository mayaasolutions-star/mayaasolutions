import pg from 'pg';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const DATABASE_URL = process.env.SUPABASE_DATABASE_URL;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const email = (req.body?.email || '').trim().toLowerCase();

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
  }

  try {
    if (!DATABASE_URL) {
      throw new Error('SUPABASE_DATABASE_URL is required');
    }

    const client = new pg.Client({
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });

    await client.connect();
    await client.query(
      `INSERT INTO public.email_unsubscribes (email, status, unsubscribed_at)
       VALUES ($1, 'unsubscribed', NOW())
       ON CONFLICT (email) DO UPDATE SET status = 'unsubscribed', unsubscribed_at = NOW()`,
      [email]
    );
    await client.end();

    return res.status(200).json({
      success: true,
      message: 'You have been successfully unsubscribed from Mayaa Solutions emails.',
    });
  } catch (err) {
    console.error('Serverless Unsubscribe Error:', err);
    return res.status(500).json({
      success: false,
      error: 'Unable to process your request. Please try again.',
    });
  }
}
