import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import pg from 'pg';

const DATABASE_URL = process.env.SUPABASE_DATABASE_URL;

function unsubscribeApiPlugin(): Plugin {
  const handler = async (req: any, res: any, next: any) => {
    const url = req.url ? req.url.split('?')[0] : '';
    if (req.method === 'POST' && (url === '/api/unsubscribe' || url === '/api/unsubscribe/')) {
      let body = '';
      req.on('data', (chunk: any) => {
        body += chunk;
      });
      req.on('end', async () => {
        res.setHeader('Content-Type', 'application/json');
        try {
          if (!DATABASE_URL) {
            throw new Error('SUPABASE_DATABASE_URL is required');
          }

          const parsed = JSON.parse(body || '{}');
          const email = (parsed.email || '').trim().toLowerCase();

          if (!email || !email.includes('@')) {
            res.statusCode = 400;
            res.end(JSON.stringify({ success: false, error: 'Please enter a valid email address.' }));
            return;
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

          res.statusCode = 200;
          res.end(
            JSON.stringify({
              success: true,
              message: 'You have been successfully unsubscribed from Mayaa Solutions emails.',
            })
          );
        } catch (err: any) {
          console.error('[API Unsubscribe Error]:', err);
          res.statusCode = 500;
          res.end(
            JSON.stringify({
              success: false,
              error: 'Unable to process your request. Please try again.',
            })
          );
        }
      });
      return;
    }
    next();
  };

  return {
    name: 'unsubscribe-api',
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), unsubscribeApiPlugin()],

  base: '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  publicDir: 'public',

  server: {
    port: 3000,
    open: true,
  },
});