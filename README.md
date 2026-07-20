# Login Screen

Pantalla en blanco con un botón que abre un formulario de inicio de sesión
(modal con correo y contraseña). Proyecto estático (HTML/CSS/JS puro), listo
para subir a GitHub y desplegar en Netlify.

## Estructura

```
login-proyecto/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── netlify.toml
├── .gitignore
└── README.md
```

## Ver en local

Abre `index.html` directamente en el navegador, o levanta un servidor simple:

```bash
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Subir a GitHub

```bash
git init
git add .
git commit -m "Primer commit: pantalla de login"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

## Desplegar en Netlify

1. Entra a [app.netlify.com](https://app.netlify.com) e inicia sesión.
2. **"Add new site" → "Import an existing project"**.
3. Selecciona GitHub y elige este repositorio.
4. Deja el *build command* vacío y el *publish directory* como `.`.
5. Haz clic en **Deploy site**.

Cada `git push` a `main` desplegará la última versión automáticamente.

### Alternativa sin GitHub
Entra a [app.netlify.com/drop](https://app.netlify.com/drop) y arrastra la
carpeta completa del proyecto.

## Nota

El envío del formulario actualmente solo muestra una alerta de confirmación.
Para autenticación real, conecta este formulario a tu backend, a
[Netlify Forms](https://docs.netlify.com/manage/forms/setup/), o a un
servicio de auth como Firebase, Supabase o Auth0.
