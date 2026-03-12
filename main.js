/**
 * AFK Preschool — Main JavaScript
 * Author: Amir Khan
 * 
 * Handles:
 * - AOS scroll animations
 * - Hero button smooth scroll
 * - Country code selector
 * - Registration form submission to AWS API Gateway + Lambda
 * - Toast notification on success
 */

/* ── API CONFIG ──
   Store your actual API Gateway URL in config.js (gitignored).
   This file uses a placeholder — replace with your real endpoint locally.
*/
const API_ENDPOINT = window.APP_CONFIG
  ? window.APP_CONFIG.apiUrl
  : "API_GATEWAY_URL";

/* ── AOS INIT ── */
AOS.init({
  duration: 900,
  once: true,
  offset: 80
});

/* ── HERO BUTTONS ── */
document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

/* ── COUNTRY CODE SELECTOR ── */
function updateCountry(select) {
  const parts = select.value.split("|");
  const code = parts[0];
  const flag = parts[1];

  document.getElementById("selectedCode").textContent = code;
  document.getElementById("selectedFlag").textContent = flag;

  const phoneInput = document.getElementById("phone");

  // Set appropriate maxlength and placeholder per country
  if (code === "+1") {
    phoneInput.maxLength = 10;
    phoneInput.placeholder = "(555) 000-0000";
  } else if (code === "+44") {
    phoneInput.maxLength = 11;
    phoneInput.placeholder = "07700 000000";
  } else if (code === "+91") {
    phoneInput.maxLength = 10;
    phoneInput.placeholder = "98765 43210";
  } else {
    phoneInput.maxLength = 15;
    phoneInput.placeholder = "Phone number";
  }

  phoneInput.value = "";
  phoneInput.focus();
}

/* ── PHONE: DIGITS ONLY ── */
document.getElementById("phone").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

/* ── TOAST ── */
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4500);
}

/* ── FORM SUBMIT ──
   Sends registration data to AWS API Gateway → Lambda → DynamoDB
*/
async function submitForm(e) {
  e.preventDefault();

  const countryCode = document.getElementById("selectedCode").textContent;
  const phoneNum = document.getElementById("phone").value;
  const fullPhone = countryCode + phoneNum;

  const formData = {
    parentName: document.getElementById("parent").value,
    childName:  document.getElementById("child").value,
    childAge:   document.getElementById("age").value,
    phone:      fullPhone,
    email:      document.getElementById("email").value,
    message:    document.getElementById("message").value
  };

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (response.ok || response.status === 200) {
      showToast();
      e.target.reset();
      // Reset country code display back to default
      document.getElementById("selectedCode").textContent = "+91";
      document.getElementById("selectedFlag").textContent = "🇮🇳";
    } else {
      alert("Something went wrong. Please try again.");
    }

  } catch (error) {
    console.error("Submission error:", error);
    alert("Unable to submit. Please check your connection and try again.");
  }
}
