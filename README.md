# Beauty and Care

A modern, elegant website for a beauty salon built with Astro framework and Tina CMS. Converted from a wedding photography template to provide a premium aesthetic for beauty and care services.

## Features

- ✨ Modern, elegant design with premium aesthetics
- 🔍 Comprehensive SEO implementation with Schema.org and Open Graph metadata
- 📱 Fully responsive for mobile, tablet, and desktop devices
- 📝 Integrated blog with categories and tags
- 💼 Beauty services presentation section (converted from portfolio)
- 💰 Pricing section with clear formatting
- 📞 Contact page with Google Maps integration
- 🔄 Tina CMS integration for easy content management
- 🌐 Multi-language support (Polish content with English codebase)

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Tina CMS](https://tina.io/) - Headless CMS for content management
- [Schema.org](https://schema.org/) - Structured data implementation
- [Google Maps API](https://developers.google.com/maps) - Map integration

## Quick Start

```bash
# Clone the repository
git clone https://github.com/username/beauty-and-care.git
cd beauty-and-care

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start Tina CMS
npm run tina
```

## Project Structure

```
beauty-and-care/
├── content/            # Tina CMS managed content
│   └── posts/          # Blog posts
├── public/             # Static assets
│   ├── admin/          # Tina CMS admin panel
│   ├── favicons/       # Site icons
│   └── images/         # Static images
├── src/
│   ├── assets/         # Asset files (images, etc.)
│   ├── components/     # Astro components
│   │   ├── About/      # About section components
│   │   ├── Seo/        # SEO components
│   │   └── ...         # Other component directories
│   ├── config/         # Configuration
│   │   ├── navData.json.ts  # Navigation structure
│   │   └── siteData.json.ts # Site metadata & settings
│   ├── data/           # Structured data
│   │   ├── portfolios/ # Service data (renamed from portfolios)
│   │   └── otherPages/ # Additional pages data
│   ├── layouts/        # Page layouts
│   ├── pages/          # Site pages
│   │   ├── blog/       # Blog section
│   │   ├── uslugi/     # Services section (renamed from portfolio)
│   │   └── ...         # Other page routes
│   └── styles/         # Global styles and components
└── tina/               # Tina CMS configuration
```

## SEO Implementation

The site includes a comprehensive SEO layer with:

### Components

- `src/components/Seo/Seo.astro` - General SEO component with:
  - Schema.org WebSite and LocalBusiness data
  - Meta tags, Open Graph, and Twitter Card support
  - Support for keywords, hreflang tags, and canonical URLs

- `src/components/Seo/BlogSeo.astro` - Blog-specific SEO with:
  - Schema.org Article markup
  - BreadcrumbList structured data
  - Article meta tags for social sharing

### Tina CMS Integration

SEO fields in Tina CMS include:
- Custom titles and descriptions
- Author information
- Categories and tags
- Featured images
- Canonical URLs
- noindex/nofollow controls

Usage example:
```astro
<BaseLayout 
  type="blog"
  title={postData.seoTitle || postData.title} 
  description={postData.seoDescription || postData.excerpt}
  date={postData.date}
  authorName={postData.authorName}
  categories={postData.categories}
  tags={postData.tags}
  canonicalUrl={postData.canonicalUrl}
  noindex={postData.noindex || false}
  image={postData.featuredImage}>
  <!-- Page content -->
</BaseLayout>
```

## Content Management

### Tina CMS Setup

1. Run the Tina CMS admin panel:
```bash
npm run tina
```

2. Access the panel at [http://localhost:3000/admin](http://localhost:3000/admin)

### Content Models

- **Blog Posts**: `/tina/config.ts` contains the schema for blog posts with SEO fields
- **Services**: Converted from portfolio collection with beauty service fields
- **Site Settings**: General site information in `src/config/siteData.json.ts`

## Customization

### Styling

- `src/styles/global.css` - Global styles
- `src/styles/tailwind-theme.css` - Tailwind theme config
- Colors and fonts are configured in both files

### Content Structure

- Navigation: `src/config/navData.json.ts`
- Site metadata: `src/config/siteData.json.ts`
- Service pages: `/src/data/portfolios/` or via Tina CMS
- Blog posts: `/content/posts/` or via Tina CMS

## Deployment

The project is set up for easy deployment to Netlify:

```bash
# Build the site
npm run build

# Deploy to Netlify (if you have Netlify CLI installed)
netlify deploy
```

Configuration for Netlify is in `netlify.toml`

## Development Notes

- The codebase was converted from a wedding photography template to a beauty salon website
- Original "Portfolio" section was renamed to "Usługi" (Services) in Polish
- Testimonials section was removed
- New sections added: Blog, Pricing, Contact with map
- All user-visible text is in Polish, but code comments and variables are in English

## License

This project is based on the Horizon template by [Cosmic Themes](https://cosmicthemes.com/) with a GPL-3.0 license.

## Support

For questions or support, please contact:
- Email: kontakt@beautyandcare.pl