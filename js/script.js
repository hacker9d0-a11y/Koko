const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const form = document.getElementById('loginForm');

openBtn.addEventListener('click', () => overlay.classList.add('is-open'));
closeBtn.addEventListener('click', () => overlay.classList.remove('is-open'));

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) overlay.classList.remove('is-open');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Formulario enviado (conecta aquí tu lógica real de autenticación).');
  overlay.classList.remove('is-open');
  form.reset();
});
