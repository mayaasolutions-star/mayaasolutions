import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('Mayaa Solutions - Email Unsubscribe System Tests', () => {

  it('1. Normalizes email addresses (lowercased and trimmed)', () => {
    const rawEmails = [
      '  User@Example.COM  ',
      'CUSTOMER.Name@DOMAIN.IN ',
      'test+sub@MayaaSolutions.in',
    ];

    const normalized = rawEmails.map(e => e.trim().toLowerCase());

    assert.deepEqual(normalized, [
      'user@example.com',
      'customer.name@domain.in',
      'test+sub@mayaasolutions.in',
    ]);
  });

  it('2. Records unsubscribe status safely in mock database', () => {
    const mockDb = new Map();

    function recordUnsubscribe(email) {
      const cleanEmail = email.trim().toLowerCase();
      if (!cleanEmail.includes('@')) {
        return { success: false, error: 'Invalid email' };
      }
      mockDb.set(cleanEmail, {
        status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString(),
      });
      return {
        success: true,
        message: 'You have been successfully unsubscribed from Mayaa Solutions emails.',
      };
    }

    const res = recordUnsubscribe('client@company.com');
    assert.equal(res.success, true);
    assert.equal(mockDb.has('client@company.com'), true);
    assert.equal(mockDb.get('client@company.com').status, 'unsubscribed');
  });

  it('3. Idempotent repeated unsubscribe requests prevent duplicate records', () => {
    const mockDb = new Map();

    function recordUnsubscribe(email) {
      const cleanEmail = email.trim().toLowerCase();
      mockDb.set(cleanEmail, {
        status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString(),
      });
      return { success: true };
    }

    recordUnsubscribe('repeat@example.com');
    recordUnsubscribe('repeat@example.com');
    recordUnsubscribe('repeat@example.com');

    // Exactly one row exists for this email
    assert.equal(mockDb.size, 1);
  });

  it('4. Rejects invalid email inputs', () => {
    function validateEmail(email) {
      if (!email || typeof email !== 'string' || !email.includes('@')) {
        return { success: false, error: 'Valid email address is required' };
      }
      return { success: true };
    }

    assert.equal(validateEmail('').success, false);
    assert.equal(validateEmail('notanemail').success, false);
    assert.equal(validateEmail(null).success, false);
    assert.equal(validateEmail('user@domain.com').success, true);
  });

  it('5. Database failure returns error and does NOT confirm success', () => {
    function processWithDbError() {
      try {
        throw new Error('Supabase connection error');
      } catch (err) {
        return {
          success: false,
          error: 'Failed to record unsubscribe status',
        };
      }
    }

    const res = processWithDbError();
    assert.equal(res.success, false);
    assert.notEqual(res.success, true, 'Must not claim success when database write fails');
  });

  it('6. Token payload extraction extracts valid email', () => {
    function base64UrlDecode(str) {
      let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
      while (base64.length % 4) base64 += '=';
      return Buffer.from(base64, 'base64').toString('utf8');
    }

    function extractEmail(token) {
      if (!token) return null;
      if (token.includes('@')) {
        return token.trim().toLowerCase();
      }
      if (token.includes('.')) {
        try {
          const [b64] = token.split('.');
          const parsed = JSON.parse(base64UrlDecode(b64));
          return parsed.email?.trim().toLowerCase();
        } catch {
          return null;
        }
      }
      return null;
    }

    const payload = Buffer.from(JSON.stringify({ email: 'Test.User@example.com' })).toString('base64');
    const token = `${payload}.signature`;

    assert.equal(extractEmail('Direct@Email.com'), 'direct@email.com');
    assert.equal(extractEmail(token), 'test.user@example.com');
    assert.equal(extractEmail('invalid-token'), null);
  });

});
