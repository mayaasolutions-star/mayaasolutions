export interface UnsubscribeResult {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Saves entered email to Supabase database table `email_unsubscribes`
 */
export async function recordUnsubscribe(email: string): Promise<UnsubscribeResult> {
  const cleanEmail = (email || '').trim().toLowerCase();

  if (!cleanEmail || !cleanEmail.includes('@')) {
    return {
      success: false,
      error: 'Please enter a valid email address.',
    };
  }

  try {
    const response = await fetch('/api/unsubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: cleanEmail }),
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.success) {
      return {
        success: true,
        message: 'You have been successfully unsubscribed from Mayaa Solutions emails.',
      };
    }

    return {
      success: false,
      error: data?.error || 'Unable to process your request. Please try again.',
    };
  } catch (err) {
    return {
      success: false,
      error: 'Unable to process your request. Please try again.',
    };
  }
}
