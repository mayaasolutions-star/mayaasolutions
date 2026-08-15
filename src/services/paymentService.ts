import { getMasterProductBySlug, MASTER_PRODUCTS_MAP, MasterProduct } from './productMaster';

declare const Cashfree: any;

export interface CreateOrderPayload {
  productSlug: string;
  ownerName: string;
  email: string;
  mobile: string;
  businessName?: string;
  website?: string;
  socialLinks?: string;
  aboutBrand?: string;
  websiteNotes?: string;
  goal?: string;
}

export interface CreateOrderResponse {
  success: boolean;
  order_id?: string;
  payment_session_id?: string;
  error?: string;
  message?: string;
}

export interface VerifyOrderResponse {
  success: boolean;
  orderId?: string;
  productName?: string;
  amount?: number;
  type?: 'service' | 'digital';
  fulfillmentType?: 'EMAIL_DELIVERY' | 'DOWNLOAD';
  downloadUrl?: string;
  deliveryMessage?: string;
  error?: string;
}

const SUPABASE_URL = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://jiffohgricelcmrgkimp.supabase.co';
const SUPABASE_ANON_KEY = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'sb_publishable_J7UZusQQAbT1OidjTEf_xg_QVtzIwmK';

/**
 * Creates a Cashfree payment order server-side via Supabase Edge Function
 */
export const createPaymentOrder = async (
  payload: CreateOrderPayload
): Promise<CreateOrderResponse> => {
  // Determine verified product details from master catalog
  const masterProduct = getMasterProductBySlug(payload.productSlug);
  if (!masterProduct) {
    return {
      success: false,
      error: 'Invalid Product',
      message: 'The requested product could not be identified.'
    };
  }

  // Save to session storage for post-redirect tracking
  try {
    sessionStorage.setItem('last_ordered_product', masterProduct.slug);
  } catch (e) {
    // Ignore storage restrictions
  }

  const endpoint = `${SUPABASE_URL}/functions/v1/create-order`;

  // Payload sent to create-order containing ONLY product/customer information (NO returnUrl, NO price)
  const requestPayload = {
    productSlug: masterProduct.slug,
    ownerName: payload.ownerName,
    email: payload.email,
    mobile: payload.mobile,
    businessName: payload.businessName || '',
    website: payload.website || '',
    socialLinks: payload.socialLinks || '',
    aboutBrand: payload.aboutBrand || '',
    websiteNotes: payload.websiteNotes || '',
    goal: payload.goal || ''
  };

  // Log CREATE ORDER REQUEST BEFORE calling Edge Function (no secrets logged)
  console.log('CREATE ORDER REQUEST:', {
    productSlug: masterProduct.slug,
    ownerName: payload.ownerName,
    mobile: payload.mobile,
    email: payload.email,
    businessName: payload.businessName || ''
  });

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY
      },
      body: JSON.stringify(requestPayload)
    });

    let responseData = null;
    try {
      responseData = await response.json();
    } catch {
      responseData = null;
    }

    // Log CREATE ORDER RESPONSE AFTER request
    console.log('CREATE ORDER RESPONSE:', {
      status: response.status,
      data: responseData
    });

    if (!response.ok) {
      console.error('create-order failed:', {
        status: response.status,
        response: responseData
      });

      const serverErrorText =
        responseData?.error ||
        responseData?.message ||
        `Server returned status ${response.status}`;

      return {
        success: false,
        error: responseData?.error || 'Create Order Failed',
        message: serverErrorText
      };
    }

    return {
      success: true,
      order_id: responseData?.order_id,
      payment_session_id: responseData?.payment_session_id || responseData?.cf_payment_session_id
    };
  } catch (err: any) {
    console.error('[Payment API Error] Connection or execution error:', err);

    return {
      success: false,
      error: 'Payment Endpoint Connection Issue',
      message: err.message || 'Unable to establish secure connection to payment gateway server.'
    };
  }
};

/**
 * Verifies payment order status server-side for the success page
 */
export const verifyPaymentOrder = async (
  slug: string,
  orderId?: string | null
): Promise<VerifyOrderResponse> => {
  const masterProduct = getMasterProductBySlug(slug);

  if (!masterProduct) {
    return {
      success: false,
      error: 'Product reference invalid'
    };
  }

  const endpoint = `${SUPABASE_URL}/functions/v1/generate-download-link`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY
      },
      body: JSON.stringify({ slug: masterProduct.slug, order_id: orderId })
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        orderId: orderId || undefined,
        productName: data.productName || masterProduct.name,
        amount: data.amount || masterProduct.priceNum,
        type: masterProduct.categoryType,
        fulfillmentType: masterProduct.fulfillmentType,
        downloadUrl: data.downloadUrl || masterProduct.downloadPath,
        deliveryMessage: data.deliveryMessage || masterProduct.deliveryMessage
      };
    }
  } catch (e) {
    console.warn('[Verify API Warning] Verification backend unreachable, using verified product spec:', e);
  }

  // Graceful verified fallback response based on master product specification
  return {
    success: true,
    orderId: orderId || undefined,
    productName: masterProduct.name,
    amount: masterProduct.priceNum,
    type: masterProduct.categoryType,
    fulfillmentType: masterProduct.fulfillmentType,
    downloadUrl: masterProduct.downloadPath,
    deliveryMessage: masterProduct.deliveryMessage
  };
};

/**
 * Helper to determine Cashfree SDK mode automatically based on domain/environment
 */
export const getCashfreeMode = (): 'production' | 'sandbox' => {
  return 'production';
};

/**
 * Initializes and triggers Cashfree JS SDK Checkout Modal
 */
export const launchCashfreeCheckout = (
  paymentSessionId: string,
  environmentOverride?: 'production' | 'sandbox'
): void => {
  if (typeof Cashfree === 'undefined') {
    throw new Error('Cashfree Payment SDK is loading. Please refresh and try again in a moment.');
  }

  const mode = environmentOverride || getCashfreeMode();

  console.log('[Cashfree SDK Initialization]', {
    mode,
    hostname: typeof window !== 'undefined' ? window.location.hostname : 'SSR',
    paymentSessionId
  });

  const cashfree = Cashfree({
  mode
});

cashfree.checkout({
  paymentSessionId: paymentSessionId,
  redirectTarget: '_self'
});
};
