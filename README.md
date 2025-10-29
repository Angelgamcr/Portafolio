# Portafolio

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Nombre      | Ángel Jesús Gamboa Cruz                                        |
| Profesión   | Desarrollador Web Fullstack                                    |
| Tecnologías | React, Vite, Node.js, TypeScript, PostgreSQL                   |
| GitHub      | [https://github.com/angelgamcr](https://github.com/angelgamcr) |
| Correo      | angelgamcr@gmail.com                                           |

# Uso de Github Pages

## 1️⃣ Instalar la dependencia gh-pages

```sh
npm install --save-dev gh-pages
```

Esta se encargará de subir tu carpeta dist/ a la rama gh-pages de tu repositorio.

## 2️⃣ Configurar package.json

- **1.** Agrega la URL de tu proyecto a homepage (esto es para que Vite genere rutas correctas):

```JSON
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "homepage": "https://TU_USUARIO.github.io/NOMBRE_DEL_REPO",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

- `predeploy` construye la app.

- `deploy` sube la carpeta `dist/` a la rama `gh-pages`.

## 3️⃣ Configurar Vite para GitHub Pages

En vite.config.js (o .ts si usas TypeScript), asegúrate de definir la base correctamente:

```JS
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NOMBRE_DEL_REPO/' // ¡Importante! Pon el nombre exacto de tu repo
})
```

- Esto asegura que los paths de JS/CSS se resuelvan correctamente en GitHub Pages.

## 4️⃣ Subir y publicar

```sh
git add .
git commit -m "preparar deploy"
git push origin main
npm run deploy

```

- Esto generará la rama `gh-pages` automáticamente y subirá tu `dist/`.

- GitHub Pages se encargará de publicar tu proyecto en:

```cpp
https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/
```

## 5️⃣ Ajustes en GitHub

- Ve a **Settings → Pages → Source.**
- Selecciona `gh-pages` y la carpeta `/root` (si no se selecciona automáticamente).
- Guarda y espera unos minutos.

## 6️⃣ Tips importantes

**1.** Si tu repo es User/Organization site (`username.github.io`), pon `base: '/'`.
**2.** Si tu proyecto usa SPA (React/Vue/solid), para rutas internas tendrás que configurar `404.html` para redirigir todas las rutas a `index.html`. Para React, puedes copiar `dist/index.html` como `dist/404.html`.
**3.** Cada vez que quieras actualizar, solo haces:

```bash
npm run deploy
```
