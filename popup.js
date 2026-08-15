/* ===========================================================
   MAYAA SOLUTIONS - SHARED POPUP ENGINE
   Version 1.0
=========================================================== */

"use strict";

/* -----------------------------------------------------------
   PRODUCT CONFIG
   Each page MUST define window.PRODUCT_CONFIG
------------------------------------------------------------*/

if (!window.PRODUCT_CONFIG) {
    console.error("PRODUCT_CONFIG is missing.");
}

/* -----------------------------------------------------------
   GLOBAL VARIABLES
------------------------------------------------------------*/

const productConfig = window.PRODUCT_CONFIG || {};

let currentStep = 1;

let totalSteps = productConfig.steps || 2;

let modal = null;

let pbar = null;

let stepLabel = null;

let stepTitle = null;


/* -----------------------------------------------------------
   INIT
------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {

    modal = document.getElementById("modal");

    pbar = document.getElementById("pbar");

    stepLabel = document.getElementById("stepLabel");

    stepTitle = document.getElementById("stepTitle");

});


/* -----------------------------------------------------------
   OPEN POPUP
------------------------------------------------------------*/

function openForm() {

    if (!modal) return;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

    currentStep = 1;

    showStep(1);

}


/* -----------------------------------------------------------
   CLOSE POPUP
------------------------------------------------------------*/

function closeForm() {

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* -----------------------------------------------------------
   CLOSE ON BACKDROP CLICK
------------------------------------------------------------*/

document.addEventListener("click", function (e) {

    if (!modal) return;

    if (e.target === modal) {

        closeForm();

    }

});


/* -----------------------------------------------------------
   ESC KEY
------------------------------------------------------------*/

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeForm();

    }

});

/* ===========================================================
   STEP NAVIGATION
=========================================================== */

function showStep(step) {

    currentStep = step;

    document.querySelectorAll(".fstep").forEach(el => {
        el.classList.remove("on");
    });

    const current = document.getElementById("fs" + step);

    if (current) {
        current.classList.add("on");
    }

    updateProgress();

}


function nextStep() {

    if (currentStep >= totalSteps) return;

    showStep(currentStep + 1);

}


function prevStep() {

    if (currentStep <= 1) return;

    showStep(currentStep - 1);

}


/* ===========================================================
   PROGRESS BAR
=========================================================== */

function updateProgress() {

    if (!pbar) return;

    const bars = pbar.querySelectorAll("i");

    bars.forEach((bar, index) => {

        bar.classList.remove("on");
        bar.classList.remove("done");

        if (index + 1 < currentStep) {

            bar.classList.add("done");

        } else if (index + 1 === currentStep) {

            bar.classList.add("on");

        }

    });

    if (stepLabel) {

        stepLabel.textContent =
            `Step ${currentStep} of ${totalSteps}`;

    }

}


/* ===========================================================
   BACK BUTTON
=========================================================== */

function backToDetails() {

    prevStep();

}


/* ===========================================================
   GO TO PAYMENT
=========================================================== */

function goPay() {

    if (typeof validateCurrentStep === "function") {

        if (!validateCurrentStep()) {

            return;

        }

    }

    nextStep();

}

/* ===========================================================
   FORM DATA
=========================================================== */

function getFormData() {

    const data = {};

    document.querySelectorAll("#modal input, #modal textarea, #modal select")
        .forEach(field => {

            if (!field.id) return;

            if (field.type === "checkbox") {

                data[field.id] = field.checked;

            } else {

                data[field.id] = field.value.trim();

            }

        });

    return data;

}


/* ===========================================================
   VALIDATION
=========================================================== */

function validateCurrentStep() {

    let valid = true;

    function showError(id, message) {
        const input = document.getElementById(id);
        const error = document.getElementById(id + "-error");

        if (input) input.classList.add("error");

        if (error) {
            error.textContent = message;
            error.classList.add("show");
        }

        valid = false;
    }

    function clearError(id) {
        const input = document.getElementById(id);
        const error = document.getElementById(id + "-error");

        if (input) input.classList.remove("error");

        if (error) {
            error.textContent = "";
            error.classList.remove("show");
        }
    }

    clearError("owner");
    clearError("whatsapp");
    clearError("email");
    clearError("business");

    const owner = document.getElementById("owner")?.value.trim() || "";
    const whatsapp = document.getElementById("whatsapp")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const business = document.getElementById("business")?.value.trim() || "";

    if (owner.length < 2) {
        showError("owner", "Please enter your name.");
    }

    const phone = whatsapp.replace(/\D/g, "");

    if (phone.length < 10) {
        showError("whatsapp", "Please enter a valid WhatsApp number.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        showError("email", "Please enter a valid email address.");
    }

    if (document.getElementById("business") && business.length < 2) {
        showError("business", "Please enter your business name.");
    }

    if (!valid) {
        return false;
    }

    if (typeof window.validatePopup === "function") {
        return window.validatePopup(getFormData());
    }

    return true;
}

/* Remove error while typing */

["owner", "whatsapp", "email", "business"].forEach(function(id) {

    const field = document.getElementById(id);

    if (!field) return;

    field.addEventListener("input", function() {

        field.classList.remove("error");

        const error = document.getElementById(id + "-error");

        if (error) {
            error.textContent = "";
            error.classList.remove("show");
        }

    });

});

/* ===========================================================
   HELPERS
=========================================================== */

function field(id) {

    return document.getElementById(id);

}


function value(id) {

    const el = field(id);

    if (!el) return "";

    return el.value.trim();

}


function required(id, message) {

    const el = field(id);

    if (!el) return true;

    if (!el.value.trim()) {

        alert(message);

        el.focus();

        return false;

    }

    return true;

}


function emailValid(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


function phoneValid(phone) {

    phone = phone.replace(/\s+/g, "");

    return /^\+?[0-9]{8,15}$/.test(phone);

}

/* Payment integration */
fbq('track', 'InitiateCheckout', {
    value: productConfig.amount,
    currency: 'INR',
    content_name: productConfig.name
});

async function startPayment() {

    try {

        const order = getFormData();
        window.mayaaOrder = order;

        if (!order) {
            alert("Order details not found. Please fill the form again.");
            return;
        }

        console.log("window.mayaaOrder", order);

        const payload = {

            productSlug: productConfig.slug,
            orderAmount: productConfig.amount,
            orderCurrency: "INR",

            businessName: order.business || "",
            ownerName: order.owner || "",
            mobile: order.whatsapp || "",
            email: order.email || "",

            website: order.website || "",
            socialLinks: order.social || "",
            aboutBrand: order.about || "",
            websiteNotes: order.notes || "",
            goal: order.goal || "",

            returnUrl: "https://mayaasolutions.in/payment-success.html"
        };

        console.log("Payload being sent:", payload);

        const SUPABASE_ANON_KEY = "sb_publishable_J7UZusQQAbT1OidjTEf_xg_QVtzIwmK";

        const response = await fetch(
            "https://jiffohgricelcmrgkimp.supabase.co/functions/v1/create-order",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                    "apikey": SUPABASE_ANON_KEY
                },
                body: JSON.stringify(payload)
            }
        );

        const data = await response.json();

        console.log("Edge Function Response:", data);

        if (!response.ok || !data.success) {
            alert(data.error || "Failed to create order.");
            return;
        }

        const cashfree = Cashfree({
            mode: "production"
        });

        cashfree.checkout({
            paymentSessionId: data.payment_session_id,
            redirectTarget: "_self"
        });

    } catch (err) {

        console.error(err);
        alert("Something went wrong. Please try again.");

    }

}

function onPaymentSuccess(){
  setPanel('fsThanks');
  document.getElementById('stepTitle').textContent='Thank you';
  document.getElementById('stepLabel').textContent='Design — one last step';
  document.getElementById('pbar').style.display='none';
}