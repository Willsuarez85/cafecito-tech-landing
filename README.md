# Cafecito Tech Landing Page

El primer networking de tecnología para latinos en Charlotte.

## Quick Start

Este es un sitio estático puro (HTML/CSS/JS). Para desarrollar localmente:

```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Usar un servidor local (recomendado)
npx serve .
# o
python -m http.server 8000
```

## Estructura

```
├── index.html           # Página principal
├── css/
│   ├── variables.css    # Design tokens
│   ├── reset.css        # CSS reset
│   ├── components.css   # Botones, cards, etc.
│   ├── sections.css     # Estilos por sección
│   └── responsive.css   # Media queries
├── js/
│   └── main.js          # Interactividad
├── assets/images/       # Imágenes
├── vercel.json          # Config de deploy
└── cloud.md             # Documentación completa
```

## Actualizar Eventos

Edita los event cards en `index.html` sección `#eventos`, o actualiza el array `EVENTS` en `js/main.js`.

Ver `cloud.md` para instrucciones detalladas.

## Deploy

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

O conecta el repositorio a [Vercel](https://vercel.com) para deploys automáticos.

## Stack

- HTML5 semántico
- CSS3 (custom properties, flexbox, grid)
- JavaScript vanilla (ES6+)
- Google Fonts (Space Grotesk, Inter, IBM Plex Mono)

## Links

- [Luma Events](https://lu.ma/cafecitotech)
- [Link Foundation](https://linkfoundation.org)

---

Hecho con ☕ y 💚 en Charlotte, NC
