# JPCodelabs Automation Website

High-converting one-page website for JPCodelabs - helping KMUs automate their business processes with No-Code, AI, and Custom Code.

## 🚀 Quick Start

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

## 🏗️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vue Router** - Official router for Vue.js
- **Lucide Icons** - Beautiful & consistent icons
- **Zod** - TypeScript-first schema validation
- **@vueuse/core** - Collection of Vue Composition Utilities

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections
│   │   ├── HeroSection.vue
│   │   ├── ProblemSection.vue
│   │   ├── SolutionSection.vue
│   │   ├── ProcessSection.vue
│   │   ├── UseCasesSection.vue
│   │   ├── TestimonialsSection.vue
│   │   ├── AboutSection.vue
│   │   └── ContactForm.vue
│   ├── ui/                # Reusable UI components
│   │   ├── Button.vue
│   │   ├── Card.vue
│   │   └── Toast.vue
│   ├── AppFooter.vue
│   └── YouTubeEmbed.vue
├── pages/                 # Route pages
│   ├── Impressum.vue
│   └── Datenschutz.vue
├── composables/           # Vue composables
│   ├── useFormSubmit.ts
│   └── useGoogleAnalytics.ts
├── router/                # Vue Router configuration
│   └── index.ts
├── types/                 # TypeScript type definitions
│   └── index.ts
├── assets/                # Static assets
│   └── illustrations/     # unDraw SVG illustrations
├── App.vue                # Root component
├── main.ts                # Application entry point
└── style.css              # Global styles & Tailwind imports
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```bash
# n8n Webhook URL for contact form submissions
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact

# Google Analytics Measurement ID (optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- Inter font family
- Emerald color palette for primary actions
- Custom spacing and shadows
- Mobile-first responsive design

See `tailwind.config.js` for details.

## 🎨 Design System

### Colors
- **Primary**: Emerald (500, 600, 700)
- **Background**: Slate (50, 100)
- **Text**: Slate (900, 700, 600)
- **Borders**: Slate (200, 300)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Primary (emerald) and Secondary (outline)
- **Cards**: Rounded with subtle shadows
- **Sections**: Consistent padding and max-width

## 📄 Page Sections

1. **Hero** - Main headline, CTAs, and illustration
2. **Problem** - Pain points that resonate with KMUs
3. **Solution** - Benefits of automation services
4. **Process** - 3-step workflow (Analyse → Umsetzung → Übergabe)
5. **Use Cases** - 6 automation examples
6. **Testimonials** - Social proof and success stories
7. **About** - Company profile and tech stack
8. **Contact Form** - Lead generation with n8n integration
9. **Footer** - Legal links and social media

## 🔧 Development

### Adding New Components

```bash
# Create a new section component
touch src/components/sections/NewSection.vue

# Create a new UI component
touch src/components/ui/NewComponent.vue
```

### Form Validation

The contact form uses Zod for validation:

```typescript
const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  firma: z.string().optional(),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  nachricht: z.string().min(20, 'Nachricht muss mindestens 20 Zeichen haben'),
  gdprConsent: z.boolean().refine(val => val === true, 'Zustimmung erforderlich')
})
```

## 🚀 Deployment

### GitHub Pages

The site is configured for GitHub Pages deployment:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### GitHub Actions

Create `.github/workflows/deploy.yml` for automatic deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📊 Analytics

Google Analytics 4 is integrated via the `useGoogleAnalytics` composable. Set `VITE_GA_MEASUREMENT_ID` in your `.env` file to enable tracking.

## 🔒 Legal Pages

- **Impressum** (`/impressum`) - Company information and legal details
- **Datenschutz** (`/datenschutz`) - GDPR-compliant privacy policy

## 🎯 Conversion Optimization

The website is optimized for lead generation with:
- Clear value proposition
- Psychological triggers (urgency, social proof, ROI)
- Benefit-focused copywriting
- Multiple CTAs throughout the page
- Smooth scroll to contact form
- Mobile-first responsive design

## 📝 Content Guidelines

### Writing Style
- Direct and technical, not conversational
- Benefit-focused, not feature-focused
- Clear CTAs throughout
- No fluff or marketing jargon
- Empathetic to KMU pain points

### Psychological Triggers
- **Sicherheit**: "Kein Risiko – kostenlose Analyse"
- **Dringlichkeit**: "Begrenzte Pilotplätze"
- **Kompetenz**: "Über 10 Jahre Entwicklungserfahrung"
- **Einfachheit**: "Keine IT-Abteilung nötig"
- **ROI**: "Spare 5 h pro Woche"

## 🤝 Contributing

This is a private project for JPCodelabs GmbH.

## 📄 License

© 2025 JPCodelabs GmbH. All rights reserved.

## 📞 Contact

- **Website**: https://jpcodelabs.de
- **Email**: contact.me@jpcodelabs.de
- **LinkedIn**: https://www.linkedin.com/company/jp-codelabs/
