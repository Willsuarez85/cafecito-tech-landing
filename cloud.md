# Cafecito Tech - Documentación del Proyecto

## Resumen

**Proyecto:** Landing page oficial de Cafecito Tech
**Versión:** 1.0
**Stack:** HTML5, CSS3 (vanilla), JavaScript (vanilla)
**Hosting:** Vercel
**Owner:** Link Foundation

---

## Visión del Producto

Cafecito Tech es el primer networking de tecnología para latinos en Charlotte. Este landing page sirve como el hub oficial donde los usuarios pueden:

1. Entender qué es Cafecito Tech y su misión
2. Ver próximos eventos y sus detalles
3. Registrarse fácilmente vía Luma
4. Conectar con la visión de Link Foundation

---

## Estructura de Archivos

```
/Landing Cafecito/
├── index.html                 # Página principal
├── cloud.md                   # Esta documentación
├── vercel.json                # Configuración de Vercel
├── README.md                  # Documentación técnica
├── css/
│   ├── variables.css          # Design tokens
│   ├── reset.css              # CSS reset
│   ├── components.css         # Componentes reutilizables
│   ├── sections.css           # Estilos por sección
│   └── responsive.css         # Media queries
├── js/
│   └── main.js                # Interactividad
└── assets/
    └── images/
        └── Flyer.png          # Flyer original (referencia de diseño)
```

---

## Design System

### Paleta de Colores

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-cream` | `#F4EEE1` | Fondo principal cálido |
| `--color-cream-dark` | `#E6DFD0` | Fondo secciones alternas |
| `--color-brown` | `#5C4A3A` | Títulos, badges, acentos |
| `--color-brown-dark` | `#3D3129` | Texto oscuro, footer |
| `--color-crt-green` | `#33FF33` | Efecto CRT, botones primarios |
| `--color-crt-bg` | `#1A2A1A` | Fondo monitor CRT |

### Tipografía

| Uso | Fuente | Peso |
|-----|--------|------|
| Headings | Space Grotesk | 600-700 |
| Body | Inter | 400-500 |
| Código/Tags | IBM Plex Mono | 400-500 |

### Escala de Espaciado

Usamos una escala de 4px: `4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96`

---

## Secciones del Landing

1. **Navbar** - Navegación sticky con blur
2. **Hero** - Headline + card del próximo evento
3. **Qué es** - 3 features + quote destacada
4. **Por qué ir** - 3 razones numeradas
5. **Qué esperar** - Timeline de la agenda
6. **Es para ti** - Checklist de audiencia
7. **Próximos eventos** - Grid de event cards
8. **Cupos limitados** - CTA final con efecto CRT
9. **Footer** - Links + créditos Link Foundation

---

## Guía de Actualización de Eventos

### Método 1: Editar HTML directamente

En `index.html`, busca la sección `#eventos` y edita los `<article class="event-card">`:

```html
<article class="event-card fade-up">
  <span class="event-card__badge">PRÓXIMO</span>
  <h3 class="event-card__title">Session #2: Nuevo Tema</h3>
  <div class="event-card__meta">
    <div class="event-card__meta-item">
      <span>📅</span>
      <span>Sábado, 1 de Marzo 2025</span>
    </div>
    <!-- ... más detalles -->
  </div>
  <p class="event-card__description">
    Descripción del evento aquí.
  </p>
  <a href="https://lu.ma/NUEVO-LINK" class="btn btn--primary">
    Registrarme →
  </a>
</article>
```

### Método 2: Usar el array de eventos en JS

En `js/main.js`, actualiza el array `EVENTS`:

```javascript
const EVENTS = [
  {
    id: 1,
    title: 'Session #2: Nuevo Tema',
    date: '2025-03-01',
    displayDate: 'Sábado, 1 de Marzo 2025',
    time: '10:00 AM - 12:00 PM',
    location: 'Charlotte, NC',
    description: 'Descripción aquí...',
    lumaUrl: 'https://lu.ma/nuevo-link',
    status: 'upcoming' // 'upcoming', 'soldout', 'past'
  }
];
```

Luego descomenta la función `renderEvents()` al final del archivo.

---

## Estados de Eventos

| Estado | Badge | Botón |
|--------|-------|-------|
| `upcoming` | Verde "PRÓXIMO" | "Registrarme →" |
| `soldout` | Naranja "SOLD OUT" | "Únete al waitlist →" |
| `past` | Gris "PASADO" | (sin botón o link a recap) |

---

## Actualizaciones del Schema.org

En el `<head>` de `index.html`, actualiza el JSON-LD para cada nuevo evento:

```json
{
  "@type": "Event",
  "name": "Cafecito Tech - Session #2",
  "startDate": "2025-03-01T10:00:00-05:00",
  // ... otros campos
}
```

---

## Decisiones de Diseño

### Por qué vanilla (sin frameworks)

- **Performance:** Carga ultra rápida, sin overhead de frameworks
- **Simplicidad:** Fácil de mantener y actualizar sin build tools
- **Durabilidad:** No hay dependencias que se desactualicen

### Estética "Retro Futuro Latino"

Inspirada en el flyer original:
- Computador Macintosh SE vintage
- Taza de barro tradicional
- Cassettes con etiquetas latinas
- Paleta cálida (beige/crema) con acentos de verde CRT

### Mobile-First

Todo el CSS está escrito mobile-first con breakpoints progresivos:
- Base: móvil
- 768px: tablet
- 1024px: desktop
- 1280px: desktop grande

---

## Accesibilidad

- Contraste WCAG AA en todos los textos
- Focus visible para navegación por teclado
- Aria labels en elementos interactivos
- Soporte para `prefers-reduced-motion`
- HTML semántico (`<nav>`, `<main>`, `<article>`, etc.)

---

## Performance Tips

1. Las imágenes deberían convertirse a WebP
2. El CSS crítico podría inlinearse en `<head>`
3. Las fuentes usan `display=swap` para evitar FOIT
4. Los scripts cargan al final del `<body>`

---

## Deploy a Vercel

1. Crear repositorio en GitHub
2. Conectar repo a Vercel
3. Vercel detecta automáticamente que es un sitio estático
4. La configuración en `vercel.json` aplica headers de seguridad y cache

---

## Contacto

- **Proyecto:** Cafecito Tech
- **Organización:** Link Foundation
- **Email:** hola@cafecitotech.com

---

## Changelog

### v1.0 (Enero 2025)
- Lanzamiento inicial
- 9 secciones completas
- Design system implementado
- Responsive mobile-first
- Interactividad JS vanilla
