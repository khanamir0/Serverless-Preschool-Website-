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
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
AOS.init({ duration: 800, once: true, offset: 60 });

document.getElementById("btn1").onclick = function(){ document.getElementById("contact").scrollIntoView({behavior:"smooth"}); };
document.getElementById("btn2").onclick = function(){ document.getElementById("contact").scrollIntoView({behavior:"smooth"}); };

function updateCountry(s) {
  const [code, flag] = s.value.split('|');
  document.getElementById('selectedCode').textContent = code;
  document.getElementById('selectedFlag').textContent = flag;
  const p = document.getElementById('phone');
  if(code==='+1'){p.maxLength=10;p.placeholder='(555) 000-0000';}
  else if(code==='+44'){p.maxLength=11;p.placeholder='07700 000000';}
  else if(code==='+91'){p.maxLength=10;p.placeholder='98765 43210';}
  else{p.maxLength=15;p.placeholder='Phone number';}
  p.value=''; p.focus();
}
document.getElementById('phone').addEventListener('input', function(){ this.value = this.value.replace(/\D/g,''); });

function showToast() {
  const t = document.getElementById('toast');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4500);
}

async function submitForm(e) {
  e.preventDefault();
  const data = {
    parentName: document.getElementById("parent").value,
    childName:  document.getElementById("child").value,
    childAge:   document.getElementById("age").value,
    phone:      document.getElementById('selectedCode').textContent + document.getElementById('phone').value,
    email:      document.getElementById("email").value,
    program:    document.getElementById("program").value,
    message:    document.getElementById("message").value
  };
  try {
    await fetch("API_GATEWAY_URL", {
      method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(data)
    });
    showToast(); e.target.reset();
    document.getElementById('selectedCode').textContent='+91';
    document.getElementById('selectedFlag').textContent='🇮🇳';
  } catch(err) {
    alert("Error submitting form. Please try again."); console.error(err);
  }
}
</script>

<script type="application/ld+json">
{"@context":"https://schema.org",
"@type":"Preschool",
"name":"AFK School",
"description":"AFK Preschool is Lucknow's first preschool with pediatric therapist guidance.",
"url":"https://afkschool.com",
"telephone":"+91-9278078663",
"email":"afkpreschool@gmail.com",
"address":{"@type":"PostalAddress",
"streetAddress":"1/20, Vibhav Khand-1, Gomti Nagar",
"addressLocality":"Lucknow",
"addressRegion":"Uttar Pradesh",
"postalCode":"226010",
"addressCountry":"IN"}}
</script>
