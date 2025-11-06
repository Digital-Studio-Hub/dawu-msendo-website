# Design Guidelines: Dawu Msendo Trading and Projects

## Design Approach

**Selected Approach**: Professional Corporate System with Visual Project Showcasing
Drawing inspiration from construction industry leaders like Bechtel, Turner Construction, and professional service sites like Stripe and Linear for clean information hierarchy.

**Design Principles**:
- **Trust & Credibility**: Clean, professional layouts that inspire confidence
- **Project Showcase**: Strong visual presentation of completed work
- **Accessibility First**: Clear hierarchy, readable typography, intuitive navigation
- **South African Context**: Professional international standards with local relevance

---

## Typography System

**Font Families** (via Google Fonts CDN):
- **Primary**: Inter (body text, UI elements)
- **Headings**: Poppins (bold, professional impact)

**Type Scale**:
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold
- Page Titles (H1): text-4xl md:text-5xl, font-bold
- Section Headers (H2): text-3xl md:text-4xl, font-semibold
- Subsections (H3): text-2xl md:text-3xl, font-semibold
- Body Large: text-lg md:text-xl
- Body Regular: text-base
- Small/Captions: text-sm
- Line height: 1.6 for body, 1.2 for headings

---

## Layout System

**Spacing Primitives** (Tailwind units):
- Core spacing set: **2, 4, 8, 12, 16, 20, 24**
- Consistent use: p-8, gap-4, space-y-12, mt-16, mb-20, py-24
- Section padding: py-16 md:py-24 lg:py-32
- Container max-widths: max-w-7xl for full sections, max-w-4xl for content

**Grid System**:
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns (md:grid-cols-2) for features, services
- Desktop: 3-4 columns (lg:grid-cols-3, xl:grid-cols-4) for project galleries
- Consistent gap: gap-8 for cards, gap-4 for tight elements

---

## Page-Specific Layouts

### Home Page
**Hero Section** (viewport height: 85vh):
- Large background image showcasing construction site or completed project
- Overlay with company logo, headline, mission statement
- Dual CTA buttons with blurred backgrounds: "Request a Quote" (primary), "View Projects" (secondary)
- Trust indicators below CTAs: "Est. 2018 • 500+ Projects • Gauteng's Trusted Builder"

**Subsequent Sections** (natural height, py-20):
1. **Services Overview**: 3-column grid on desktop, icon + title + brief description cards
2. **Featured Projects**: 2-column asymmetric layout - large image left, 2 smaller stacked right
3. **Mission Statement**: Full-width centered text block, max-w-4xl
4. **Social Proof**: 4-column stats grid (projects completed, communities served, etc.)
5. **Lekker Network Integration**: Centered footer section with logo and 5-column verified badge grid

### About Page
- Company history timeline (vertical on mobile, horizontal on desktop)
- Leadership team: 2-column cards with photos, names, titles, contact
- Values section: 3-column icon cards
- Certifications/credentials grid

### Services Page
- Service category cards: 2-column on tablet, 3-column on desktop
- Each card: Icon, title, bullet points, "Learn More" link
- Expandable sections for detailed service descriptions
- Related project examples within each service category

### Projects (Portfolio) Page
- Masonry grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Project cards: Image thumbnail (16:9), location tag, title, brief description
- Hover state reveals "View Details" overlay
- Filter by category (Construction, Infrastructure, Roadworks, etc.)

### Contact Page
- 2-column split: Form left (60%), Info + Map right (40%)
- Contact form: Full name, email, phone, service interest dropdown, message
- Right sidebar: Address, phone numbers (click-to-call), WhatsApp buttons, Google Maps embed
- Office hours and response time expectation

### FAQ Page
- Accordion-style expandable questions
- Categories for organization (General, Services, Projects, Process)
- Search functionality at top
- Structured data markup (already specified)

---

## Component Library

### Navigation
**Desktop**: Horizontal bar with logo left, menu items center, "Get Quote" CTA button right
**Mobile**: Hamburger menu, slide-in overlay with stacked links

### Cards
- **Service Cards**: Icon top, title, 3-4 bullet points, subtle border
- **Project Cards**: Full-bleed image, overlay gradient, title and location
- **Team Cards**: Circular photo, name, role, contact details centered

### Forms
- Input fields: Consistent padding (p-4), border with focus state
- Labels above inputs, required indicators
- Submit button: Full-width on mobile, auto on desktop
- Validation messages inline below fields

### Footer
**Three-tier structure**:
1. Main footer: 4-column layout (About, Quick Links, Services, Contact)
2. Lekker branding: Centered logo with "Powered by Lekker Network" text
3. Verified badges: 5-column grid, each labeled "Verified Badge" with "Lekker Network Verified" text
4. Legal/Copyright bar at bottom

### Buttons
- **Primary CTA**: Larger padding (px-8 py-4), bold text
- **Secondary**: Outlined style, same padding
- **Buttons on images**: Backdrop blur effect (backdrop-blur-sm), semi-transparent background

---

## Images

### Hero Image
**Yes - Large hero image on homepage**:
- Full-width, 85vh height
- High-quality construction site or completed project photo
- Professional team on-site or aerial view of development
- WebP format, optimized for web
- Dark overlay (opacity-40) for text legibility

### Supporting Images
- **About page**: Leadership team professional headshots (circular crop), company facility photos
- **Services**: Icon-based graphics or construction equipment photos (16:9 ratio)
- **Projects**: Before/after comparisons, completed buildings, infrastructure work (square and landscape ratios)
- **Contact**: Google Maps embed, office exterior photo

**Image Guidelines**:
- All images lazy-loaded
- Alt text: Descriptive with location keywords (e.g., "residential development Eldorado Park Johannesburg")
- Consistent tone: Professional, bright, aspirational
- Company logos: Use provided Black Logo, White Logo, Main Logo variants appropriately

---

## Responsive Behavior

**Breakpoints** (Tailwind defaults):
- Mobile: < 640px (base styles)
- Tablet: 640px - 1024px (md: prefix)
- Desktop: 1024px+ (lg: and xl: prefixes)

**Mobile-First Adjustments**:
- Stack all multi-column layouts on mobile
- Reduce hero height to 70vh on mobile
- Hamburger menu replaces horizontal navigation
- Touch-friendly button sizes (min-height: 44px)
- Simplified footer (accordion-style sections)

---

## Accessibility

- Semantic HTML5 elements (header, nav, main, section, footer)
- ARIA labels for icon-only buttons
- Keyboard navigation throughout
- Focus states clearly visible
- Sufficient contrast ratios (WCAG AA minimum)
- Skip-to-content link
- Alt text for all images including logos

---

## Animations

**Minimal, purposeful animations**:
- Page load: Subtle fade-in for hero content (0.5s)
- Scroll: Intersection observer for card reveals (stagger by 100ms)
- Hover: Subtle scale (1.02) on project cards
- Form: Success checkmark animation on submission
- **Avoid**: Parallax, excessive motion, auto-playing content