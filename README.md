# Artist Portfolio - Vue 3 + TypeScript + Vite

A minimalist, elegant portfolio website for artists built with Vue 3, TypeScript, and Vite.

## Features

- **Minimalist Design** - Clean, sophisticated aesthetic with focus on artwork
- **Responsive** - Mobile-first approach with adaptive layouts
- **Fast** - Static site with no backend required
- **Vue Router** - Smooth page transitions and navigation
- **TypeScript** - Type-safe codebase for maintainability

## Pages

1. **Home** - Fullscreen hero with automatic image rotation
2. **Works** - Grid of all artworks with detail pages
3. **Series** - Collections of related works
4. **About** - Artist biography and statement
5. **Contact** - Email and social links

## Project Structure

```
src/
├── components/
│   ├── ImageRotator.vue   # Hero image slider
│   ├── SeriesCard.vue      # Series preview card
│   ├── SiteHeader.vue      # Navigation header
│   └── WorkCard.vue        # Work preview card
├── data/
│   ├── series.ts           # Series data and types
│   ├── site.ts             # Site configuration
│   └── works.ts            # Works data and types
├── layouts/
│   └── DefaultLayout.vue   # Main layout wrapper
├── router/
│   └── index.ts            # Vue Router configuration
├── styles/
│   └── main.css            # Global styles
├── views/
│   ├── AboutView.vue
│   ├── ContactView.vue
│   ├── HomeView.vue
│   ├── SeriesDetailView.vue
│   ├── SeriesView.vue
│   ├── WorkDetailView.vue
│   └── WorksView.vue
├── App.vue
└── main.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The development server runs at `http://localhost:5173` by default.

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

This creates a `dist` folder with optimized static files.

## Customization

### 1. Update Site Information

Edit [`src/data/site.ts`](src/data/site.ts) to change:
- Artist name
- Email address
- Instagram link
- Biography text
- Artist statement
- Hero images

### 2. Add Your Artworks

Edit [`src/data/works.ts`](src/data/works.ts) to add works:

```typescript
{
  slug: 'my-artwork',
  title: 'My Artwork Title',
  year: 2024,
  size: '80 × 100 cm',
  medium: 'Oil on canvas',
  image: '/images/works/my-artwork.jpg',
  description: 'Optional description...',
  status: 'available' // or 'sold'
}
```

### 3. Add Series

Edit [`src/data/series.ts`](src/data/series.ts) to create collections:

```typescript
{
  slug: 'my-series',
  title: 'My Series Name',
  description: 'Series description...',
  coverImage: '/images/series/my-series-1.jpg',
  works: [
    '/images/series/my-series-1.jpg',
    '/images/series/my-series-2.jpg',
    // More images...
  ]
}
```

### 4. Replace Placeholder Images

Place your actual images in:
- `public/images/works/` - Artwork images
- `public/images/series/` - Series images
- `public/images/about/` - Artist photo

**Recommended image formats**: JPG, PNG, or WebP
**Recommended resolutions**: 
- Works: 1600px on the longer side
- About: 800px × 1000px (portrait)

## Deployment

### Static Hosting (Vercel, Netlify, GitHub Pages)

1. Build the project: `npm run build`
2. Upload the `dist` folder contents

### VPS Deployment with Nginx

1. Build the project:
```bash
npm run build
```

2. Copy the `dist` folder to your server:
```bash
scp -r dist/* user@your-server:/var/www/your-site/
```

3. Configure Nginx:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/your-site;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

4. Enable and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/your-site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### SSL/HTTPS with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Technologies

- [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Vite](https://vitejs.dev/) - Next-generation build tool
- [Vue Router](https://router.vuejs.org/) - Official router for Vue

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - Feel free to use this template for your portfolio.
