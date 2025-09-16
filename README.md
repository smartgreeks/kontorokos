# Kontorokos Restaurant Website

Μοντέρνος ιστότοπος για το εστιατόριο Kontorokos στη Σαλαμίνα, χτισμένος με Next.js 15, TypeScript, και Tailwind CSS.

## 🚀 Χαρακτηριστικά

- **Modern Stack**: Next.js 15 με App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Πλήρως responsive σχεδιασμός για όλες τις συσκευές
- **Bilingual Support**: Υποστήριξη Ελληνικών και Αγγλικών
- **SEO Optimized**: Structured data, meta tags, sitemap
- **Performance**: Optimized images, lazy loading, code splitting
- **Animations**: Smooth animations με Framer Motion
- **Accessibility**: WCAG compliant

## 📋 Προαπαιτούμενα

- Node.js 18+ 
- npm ή yarn ή pnpm

## 🛠️ Εγκατάσταση

1. **Clone το repository**
   ```bash
   git clone <repository-url>
   cd kontorokos-nextjs
   ```

2. **Εγκατάσταση dependencies**
   ```bash
   npm install
   # ή
   yarn install
   # ή
   pnpm install
   ```

3. **Δημιουργία environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Συμπληρώστε τις απαραίτητες μεταβλητές:
   ```env
   NEXT_PUBLIC_SITE_URL=https://kontorokos.gr
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
   ```

4. **Εκκίνηση development server**
   ```bash
   npm run dev
   # ή
   yarn dev
   # ή
   pnpm dev
   ```

   Ανοίξτε [http://localhost:3000](http://localhost:3000) στον browser σας.

## 📁 Δομή Project

```
kontorokos-nextjs/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── gallery/           # Gallery page
│   └── contact/           # Contact page
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── hero.tsx      # Hero section
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   └── ...
│   ├── data/             # Static data
│   │   └── business.json # Business information
│   ├── lib/              # Utilities
│   └── styles/           # Global styles
├── public/               # Static assets
│   ├── images/          # Images
│   ├── robots.txt       # SEO robots file
│   └── ...
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json
```

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Custom design tokens
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Ready για dark mode implementation

## 🌐 Internationalization

Το site υποστηρίζει δύο γλώσσες:
- **Ελληνικά (el)**: Προεπιλεγμένη γλώσσα
- **English (en)**: Δευτερεύουσα γλώσσα

Οι μεταφράσεις βρίσκονται στο `src/components/language-provider.tsx`.

## 📊 SEO & Analytics

- **Meta Tags**: Dynamic meta tags για κάθε σελίδα
- **Structured Data**: JSON-LD schema για restaurant
- **Sitemap**: Αυτόματη δημιουργία sitemap
- **Robots.txt**: SEO-friendly robots file
- **Google Analytics**: Ready για integration

## 🚀 Deployment

### Vercel (Recommended)

1. **Push στο GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy στο Vercel**
   - Συνδέστε το GitHub repository στο Vercel
   - Προσθέστε τις environment variables
   - Deploy αυτόματα

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Environment variables**: Προσθέστε τις απαραίτητες μεταβλητές

### Docker

```dockerfile
# Dockerfile example
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
npm run type-check   # TypeScript check
npm run sitemap      # Generate sitemap
```

## 🔧 Customization

### Business Information
Επεξεργαστείτε το `src/data/business.json` για να ενημερώσετε:
- Στοιχεία επικοινωνίας
- Ώρες λειτουργίας
- Υπηρεσίες
- Social media links

### Styling
Προσαρμόστε τα χρώματα και το styling στο `tailwind.config.js` και `src/styles/globals.css`.

### Components
Όλα τα components βρίσκονται στο `src/components/` και είναι πλήρως customizable.

## 🐛 Troubleshooting

### Common Issues

1. **Build errors**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. **TypeScript errors**
   ```bash
   npm run type-check
   ```

3. **Styling issues**
   - Ελέγξτε το Tailwind configuration
   - Βεβαιωθείτε ότι τα CSS imports είναι σωστά

## 📞 Support

Για τεχνική υποστήριξη ή ερωτήσεις:
- Email: support@kontorokos.gr
- Phone: +30 210 123 4567

## 📄 License

Αυτό το project είναι licensed υπό την MIT License - δείτε το [LICENSE](LICENSE) αρχείο για λεπτομέρειες.

---

**Kontorokos Restaurant** - Αυθεντική Ελληνική Γεύση από το 1998 🇬🇷