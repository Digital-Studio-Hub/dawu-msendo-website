# Dawu Msendo Trading and Projects - Development Guide

## Overview

Dawu Msendo Trading and Projects (Pty) Ltd is a South African construction and infrastructure development company. This web application serves as their corporate website, showcasing their services, completed projects, and providing contact capabilities. The site emphasizes professional credibility, project showcasing, and community values while maintaining South African regulatory compliance (POPIA).

**Core Purpose**: Professional corporate website for construction/civil engineering company
**Target Audience**: Potential clients, government entities, community stakeholders
**Business Focus**: Construction, housing development, infrastructure projects, community development

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query v5** for server state management and API caching

**UI Component System**
- **shadcn/ui** components based on Radix UI primitives
- **Tailwind CSS** for styling with custom design system
- **Design System**: Professional corporate aesthetic with Poppins (headings) and Inter (body) typography
- Color scheme emphasizes trust and credibility with primary yellow accent (#F7C600)
- Responsive grid system: mobile-first (1 column) → tablet (2 columns) → desktop (3-4 columns)

**State Management**
- React Query for async/server state
- React Hook Form with Zod validation for form handling
- Local component state for UI interactions

**Key Design Principles**
- Professional corporate system inspired by construction industry leaders (Bechtel, Turner Construction)
- Strong visual project showcasing capabilities
- Accessibility-first approach with clear hierarchy
- Mobile-responsive with touch-friendly interactions

### Backend Architecture

**Server Framework**
- **Express.js** on Node.js
- RESTful API design pattern
- Middleware for JSON parsing, logging, and request timing

**Development vs Production**
- Development: Vite middleware integration for HMR
- Production: Static file serving from dist/public
- Environment-based configuration

**API Endpoints**
- `/api/send-mail` - Contact form submission with honeypot spam protection
- Future endpoints can be added via `server/routes.ts`

**Email Service Integration**
- **ZeptoMail API** for transactional emails
- **Dual Email Delivery**: Admin notifications + User confirmations
- HTML email templates with Lekker Network branding
- Concurrent dual-send implementation using Promise.all
- Environment variables for configuration (ZEPTOMAIL_API_KEY, ZEPTOMAIL_FROM, ADMIN_EMAIL)
- Full error handling with frontend feedback

**Session & Storage**
- In-memory storage implementation (`MemStorage`) for user data
- Extensible `IStorage` interface for future database integration
- No authentication currently implemented but infrastructure exists

### Data Layer (Planned)

**ORM Setup**
- **Drizzle ORM** configured for PostgreSQL
- Schema location: `shared/schema.ts`
- Migration system via drizzle-kit
- Currently using in-memory storage; database integration prepared but not active

**Database Provider**
- Configured for **Neon Database** (serverless PostgreSQL)
- Connection via `@neondatabase/serverless`
- Environment variable: `DATABASE_URL`

**Schema Design**
- Contact form validation schema using Zod
- Services, projects, and FAQ data currently stored as static TypeScript objects
- User schema exists for future authentication features

### External Dependencies

**Third-Party Services**
1. **ZeptoMail** - Transactional email delivery
   - API-based integration
   - Requires: ZEPTOMAIL_API_KEY, ZEPTOMAIL_FROM environment variables
   - Used for contact form submissions to admin

2. **Google Analytics 4** - Web analytics and event tracking
   - GA4 implementation with gtag.js
   - Requires: VITE_GA_MEASUREMENT_ID environment variable
   - Custom hooks for automatic page view tracking
   - Event tracking: form_submission, whatsapp_click, phone_click
   - Integrated throughout contact forms and CTA buttons

3. **Neon Database** - PostgreSQL hosting (configured but not actively used)
   - Serverless PostgreSQL
   - Requires: DATABASE_URL environment variable
   - WebSocket-based connection pooling

4. **Google Fonts** - Typography
   - CDN-based font loading (Inter, Poppins)
   - Preconnect optimization in HTML head

**UI Libraries**
- **Radix UI** - Headless component primitives (20+ components)
- **Lucide React** - Icon library
- **Embla Carousel** - Image carousel functionality
- **date-fns** - Date formatting utilities

**Build & Development Tools**
- **Replit-specific plugins**: cartographer, dev-banner, runtime-error-modal
- **esbuild** - Server-side bundling for production
- **PostCSS** with Autoprefixer for CSS processing

**Validation & Forms**
- **Zod** - Runtime type validation and schema definition
- **@hookform/resolvers** - Zod integration with React Hook Form
- **drizzle-zod** - Database schema to Zod validation bridge

**Asset Management**
- Static assets in `attached_assets/` directory
- Vite alias: `@assets` for importing images
- Company logos, stock images for project showcases

**SEO & Metadata**
- Custom SEO component for dynamic meta tag management
- Comprehensive JSON-LD structured data schemas:
  - Organization schema with full company details
  - LocalBusiness schema with geo-coordinates and hours
  - FAQPage schema for FAQ page
  - Website schema with SearchAction
  - BreadcrumbList for navigation
- Open Graph tags for social media sharing
- Twitter Card integration
- Canonical URLs for each page
- robots.txt for crawler management
- sitemap.xml with all pages
- South African localization (Gauteng, Johannesburg, Eldorado Park)

**Environment Variables Required**
```
DATABASE_URL - PostgreSQL connection string
ZEPTOMAIL_API_KEY - Email service authentication
ZEPTOMAIL_FROM - Sender email address
ADMIN_EMAIL - Recipient for contact form submissions
VITE_GA_MEASUREMENT_ID - Google Analytics tracking ID
```

**Deployment Considerations**
- Build output: `dist/public` (frontend), `dist/index.js` (backend)
- Production server runs on compiled Node.js bundle
- Static assets served from dist/public
- Environment variables must be set in hosting platform

## Recent Updates (November 2025)

### Completed Features

1. **Complete Frontend Implementation**
   - All 8 pages built: Home, About, Services, Projects, Contact, FAQ, Privacy Policy, Terms of Service
   - Mobile-first responsive design with professional aesthetics
   - Lekker Network branding integration (logo + 5-column verified badge grid in footer)
   - Navigation component with mobile menu support
   - Professional construction/infrastructure stock images integrated

2. **ZeptoMail Backend Integration**
   - POST `/api/send-mail` endpoint fully functional
   - Dual email delivery system:
     - Admin notification email with form submission details
     - User confirmation email with company contact info
   - Honeypot spam protection
   - Zod validation for all form fields
   - Comprehensive error handling and logging
   - HTML email templates with Lekker yellow branding

3. **Google Analytics 4 Integration**
   - GA4 initialization in App.tsx
   - Automatic page view tracking via useAnalytics hook
   - Custom event tracking:
     - `form_submission` on contact form success
     - `click` events on WhatsApp buttons
     - `click` events on phone number links
   - Analytics library at `client/src/lib/analytics.ts`

4. **SEO Implementation**
   - SEO component with dynamic meta tag injection
   - JSON-LD schema markup on all key pages:
     - Home: Organization, LocalBusiness, Website schemas
     - FAQ: FAQPage schema with all Q&A pairs
   - Open Graph and Twitter Card tags
   - Canonical URLs for all pages
   - South African geo-targeting and localization
   - sitemap.xml and robots.txt

5. **Contact Form Features**
   - Name, email, phone, service selection, message fields
   - Form validation with react-hook-form + Zod
   - Loading states, success toasts, error handling
   - Google Maps embed showing company location
   - WhatsApp contact cards with direct links
   - GA event tracking on successful submission

6. **Footer Branding**
   - Lekker Network logo centered with "Powered by Lekker Network" text
   - 5-column grid of verified badges
   - Company contact information (2 phone numbers, email, address)
   - Quick links to all pages
   - Social media placeholders

### Testing Status

✅ End-to-end testing completed successfully:
- All page navigation verified
- Contact form UI and validation working
- Footer Lekker Network branding displaying correctly
- All 6 service cards, project cards, FAQ accordion functioning
- Responsive design verified across viewport sizes
- Error handling confirmed (ZeptoMail returns proper errors when keys missing)

### Known Limitations

- ZeptoMail API keys required for email delivery in production
- Google Analytics requires VITE_GA_MEASUREMENT_ID for tracking
- Database (Neon PostgreSQL) configured but not actively used (in-memory storage sufficient for MVP)

### Environment Setup Checklist

Before deploying to production, ensure these environment variables are set:

```bash
ZEPTOMAIL_API_KEY=<your-zeptomail-api-key>
ZEPTOMAIL_FROM=<your-verified-sender-email>
ADMIN_EMAIL=<notification-recipient-email>
VITE_GA_MEASUREMENT_ID=<your-ga4-measurement-id>
SESSION_SECRET=<random-secure-string>
```

### Performance Optimization

- Images optimized and served as WebP format
- Tailwind CSS purging for minimal CSS bundle
- React code splitting with lazy loading ready for implementation
- Vite build optimization for production bundles
- Target metrics: LCP <2.5s, FID <100ms, CLS <0.1

### Next Steps (Future Enhancements)

- Set up database for dynamic content management (projects, services)
- Admin dashboard for content updates
- Image optimization with next-gen formats and responsive images
- Performance monitoring and Core Web Vitals tracking
- A/B testing for CTA optimization
- Multi-language support (English/Afrikaans)
- Project case studies with detailed write-ups
- Client testimonials section
- Blog/news section for company updates