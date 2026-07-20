const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const form = document.getElementById('loginForm');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submitBtn');

openBtn.addEventListener('click', () => overlay.classList.add('is-open'));
closeBtn.addEventListener('click', () => overlay.classList.remove('is-open'));

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) overlay.classList.remove('is-open');
});

codeInput.addEventListener('input', () => {
  codeInput.value = codeInput.value.replace(/\D/g, '').slice(0, 6);
  submitBtn.disabled = codeInput.value.length !== 6;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString(),
  })
    .then(() => {
      alert('¡Listo! Recibirás el correo con los datos enviados.');
      overlay.classList.remove('is-open');
      form.reset();
    })
    .catch(() => {
      alert('Hubo un problema al enviar el formulario. Intenta de nuevo.');
    });
});
