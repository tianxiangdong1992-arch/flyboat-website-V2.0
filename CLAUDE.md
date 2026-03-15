# Flyboat Website V2.0

## Company
**Guiyang High-Tech Yige Electronic Co., Ltd** (Brand: FLYBOAT)
- Manufacturer of surge protective devices and metal oxide varistors
- Address: Shawen High-Tech Zone, Chuangji Street, Baiyun District, Guiyang City, Guizhou Province, China
- Email: m18685129425_1@163.com
- Phone: +8618585077202
- Original website: https://www.flyboatmov.com

---

## Requirements

### R1: Comprehensive Product Specs
All product specifications must be captured from the original website https://www.flyboatmov.com/products, including full descriptions, technical parameters, features, certifications, and application details.

### R2: Multi-Image Products
Each product must support and display multiple images (typically 4-7 images per product). Images should be displayed in a gallery/carousel format with thumbnail navigation, matching the original website. Images are stored in `../flyboat-website/images/products/` using the pattern `[product-slug].jpg`, `[product-slug]-2.jpg`, etc.

### R3: Products Page Layout
The products page must maintain the same layout as the original website:
- **3-column grid layout** on desktop (each card ~31.8% width, 2% gap)
- Card-based product display with thumbnail, title, and "Add to Inquiry" checkbox
- Category-based navigation sidebar (330px wide on desktop)
- Pagination (12 products per page, 3 pages total)
- Inquiry cart system (floating panel + modal form)

---

## Product Catalog (26 products, all multi-image)

### Category 1: Metal Oxide Varistor (10 products)
| # | Product | Slug | Images | Key Specs |
|---|---------|------|--------|-----------|
| 1.1 | AC Varistor | ac-varistor | 5 + diagrams | U1MA 80-1800V, UAC 60-1000V, <25ns, UL/C-UL/TUV |
| 1.2 | 34S Metal Oxide Varistor | 34s-metal-oxide-varistor | 6 | 34x34mm square, 40kA, -40 to +125C, RoHS/REACH |
| 1.3 | MOV DC | mov-dc | 5 | 82-1600V, 30-40kA surge, <25ns, UL 1449 Ed 3 |
| 1.4 | Class I MOV | class-i-mov | 4 | 34S model, 40kA peak, >1000J absorption, 145C cutoff |
| 1.5 | Industrial High Energy Varistor | industrial-high-energy-varistor | 5 | -40 to +125C, UL 1449 4th Ed |
| 1.6 | Metal Oxide Square Disc Varistors | metal-oxide-square-disc-varistors | 5 | 25D-C, <20ns response, 2500V insulation |
| 1.7 | High Energy Suppressor Discs | high-energy-suppressor-discs | 5 | 80-100kA Imax, 15-20kA lightning, IP20 |
| 1.8 | MOV Varistor For SPD | mov-varistor-for-spd | 4 | 42x42mm square, 10-20kA, pluggable cartridge |
| 1.9 | Bare Disc Varistors | bare-disc-varistors | 5 | Class I, UL1449 4th Ed, 5x faster than conventional |
| 1.10 | 32D Metal Oxide Varistor | 32d-metal-oxide-varistor | 4 | >1000J absorption, 40kA peak, 145C cutoff |

### Category 2: Surge Protective Device OEM

#### DC SPD OEM (5 products)
| # | Product | Slug | Images | Key Specs |
|---|---------|------|--------|-----------|
| 2.1 | Surge Protectors Signal Systems | surge-protectors-signal-systems | 5 | 1000V DC, 40kA, IEC 61643-11 Type 2, 5yr warranty |
| 2.2 | Power Line SPD | power-line-spd | 5 | 230/400V AC, 40kA, 1-4 poles, $2.50-$10 |
| 2.3 | DC MOV for PV System | dc-mov-for-pv-system | 5 | Type 1+2, 100kA (10/350us), Multi-Varistor tech |
| 2.4 | Solar System 1000V | solar-system-1000v | 5 | 100kA max, impulse counter, pluggable modules |
| 2.5 | 1000V DC SPD | 1000v-dc-spd | 4 | 1500/1200/1000/500V, TUV, 50 surge cycle life |

#### AC SPD OEM (1 product)
| # | Product | Slug | Images | Key Specs |
|---|---------|------|--------|-----------|
| 2.6 | AC Surge Protective Device SPD | ac-surge-protective-device-spd | 2 + 6 diagrams | 230/400V AC, 40kA, IEC 61643-11 Class I+II |

### Category 3: TMOV / Protection Module (5 products)
| # | Product | Slug | Images | Key Specs |
|---|---------|------|--------|-----------|
| 3.1 | Surge Protective Modules | surge-protective-modules | 4 | Type 2, UL 1449 4th Ed, 200kA SCCR, ACI tech |
| 3.2 | Surge Replacement Module | surge-replacement-module | 5 | 34SP1 series, UL/TUV, Model SPD B10K385/21 |
| 3.3 | Onboard Surge Protection Device | onboard-surge-protection-device | 5 | 600-1500V DC, patented, miniaturized, PCB mount |
| 3.4 | SPD Modular | spd-modular | 5 | 275V/420V, 20-40KA, DIN rail, replaceable core |
| 3.5 | Plug-in Surge Arrester | plug-in-surge-arrester | 5 | 500-1000VDC, 2P/3P, 8000+ electrical cycles |

### Category 4: Accessories for SPDs (5 products)
| # | Product | Slug | Images | Key Specs |
|---|---------|------|--------|-----------|
| 4.1 | Surge Protective Components | surge-protective-components | 6 | Replacement cartridges, 10-60kA, tool-free swap |
| 4.2 | Plug-in SPD Block | plug-in-spd-block | 7 | 230/400V AC, 30-60KA, flame-retardant shell |
| 4.3 | Customizable SPD Plastic | customizable-spd-plastic | 5 | DSC07798, 2P/3P/4P, CE, 200K pcs/month |
| 4.4 | Parts Surge Arrestor | parts-surge-arrestor | 6 | White plastic, 10-20KA, CE, 200K pcs/month |
| 4.5 | Green Plastic SPD | green-plastic-spd | 7 | Green, DIN 43880, modular, release button |

---

## Original Website Design Analysis

### Color System

| Role | Hex | Usage |
|------|-----|-------|
| Primary Blue | `#107ed8` | Buttons, links, accents, active states, "Hot" badges |
| Dark | `#111111` | Text, hover states, dark section backgrounds, footer bg |
| Body Text | `#111111` | Primary text and headings |
| Secondary Text | `#555555` | Descriptions, intro text, muted content |
| Footer Text | `#CCCCCC` | Footer links and text |
| Border | `#EEEEEE` | Card borders, dividers, table borders |
| Light BG | `#FAFAFA` | Breadcrumb bar, alternate section backgrounds |
| Near-White BG | `#FDFDFD` | About section background |
| White | `#FFFFFF` | Page background, header, button text on blue |
| Amber/CTA | `#F59E0B` | V2 accent color (not on original) |

### Typography

- **Font family:** `'Lato', 'Open Sans', 'Roboto', 'Poppins', 'Oswald', 'Noto Sans', sans-serif`
- **Google Font loaded:** Lato (weights 300, 400)
- **V2 uses:** `'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif` (system stack)
- **Base size:** 16px, line-height 1.6
- **Scale:** 12/13/14/15/16/17/18/20/22/24/26/28/30px via CSS custom properties
- **Weight scale:** 300 (light), 400 (normal), 500 (medium), 600 (headings), 700 (bold)

### Global Layout

- **Max container width:** 1600px (original), 1200px (V2)
- **Container padding:** 0 20px
- **Header:** Fixed position, 100px height, white bg, shrinks to 70px + shadow on scroll
- **Banner:** 1920x650px hero (homepage), 1920x280px inner page banners
- **Footer:** Dark `#111111` bg, 3 columns (Quick Nav | Categories | Contact) + copyright row
- **Mobile bottom bar:** Fixed bar with Home, Phone, Email, Inquiry icons (original only)

### Navigation

- **Items:** Home, About Us, Products (dropdown), News, Knowledge, Contact Us, Blog, Feedback
- **Products dropdown:** Metal Oxide Varistor, Surge Protective Device OEM (DC SPD, AC SPD sub-items), TMOV, Accessories for SPDs
- **Desktop:** Hover-activated dropdowns
- **Mobile (<=1024px):** Hamburger menu, click-toggled dropdowns
- **Language selector:** 40+ languages via dropdown (original only)
- **Search:** Global keyword search in header (original only)

### Homepage Sections (top to bottom)

1. **Hero Banner** -- Swiper carousel, 1920x650px, full-width linked images
2. **Product Categories Strip** -- 3-column Swiper, "Hot" badge overlay, hover slide-in overlay panel
3. **About/Company Intro** -- 45/50 flex split: text left, 3x2 stats grid right (25+ yrs, 6 lines, 10000+ m2, 200 staff, 24h service, 80 countries)
4. **Highlighted Products** -- Dark `#111111` bg, 50/50 split: image carousel left, step navigator (1-2-3 tabs) right, certification list
5. **Hot Products Grid** -- 23/77 flex split: category tabs sidebar left, 3-col product grid right
6. **Write to Us CTA** -- Blue `#107ed8` bg banner with contact CTA
7. **Latest News** -- 3-column news card grid
8. **Location** -- Background image with right-aligned white info card
9. **Footer**

### Products Page Layout (Original)

```
+------------------------------------------------------------------+
| HEADER (fixed, 100px, white, z-index:999)                        |
+------------------------------------------------------------------+
| BANNER (1920x280px)                                              |
+------------------------------------------------------------------+
| BREADCRUMBS (bg:#FAFAFA, "Home / Products" left, "Products" h1 right) |
+------------------------------------------------------------------+
| SIDEBAR (330px, float:left)  |  PRODUCT GRID (calc(100%-400px))  |
|                              |                                    |
| [Categories]                 |  [Card] [Card] [Card]  (31.8% ea) |
|  - Metal Oxide Varistor      |  [Card] [Card] [Card]             |
|  - SPD OEM                   |  [Card] [Card] [Card]             |
|    - DC SPD                  |  [Card] [Card] [Card]             |
|    - AC SPD                  |                                    |
|  - TMOV                     |  [PAGINATION - centered, 42x42 btns]|
|  - Accessories               |                                    |
|                              |                                    |
| [Recommended Products]       |                                    |
|  120x120 thumb + text         |                                    |
+------------------------------------------------------------------+
| FOOTER (bg:#111111)                                              |
+------------------------------------------------------------------+
```

**Product card design:**
- Border: `1px solid #EEEEEE`, no border-radius (square corners)
- Hover: `box-shadow: 0px 4px 10px #EEEEEE`, image scales 1.05x, title turns blue
- Image: `width:100%, max-height:400px, object-fit:contain, overflow:hidden`
- Title: 18px, weight 600, 2-line clamp, color `#111111`
- "Add to Inquiry": Blue checkbox + text, inline-block, no button bg
- Lazy loading: `data-src` with spinner placeholder
- 12 products per page, 3 pages total

**Category sidebar:**
- Title bar: Blue `#107ed8` bg, white text, 22px, weight 600
- Category items: `border-bottom: 1px solid #EEEEEE`, 16px weight 600
- Subcategories: Hidden by default, 20px left indent, revealed on hover/click
- Active state: Blue text `#107ed8`
- Expand arrow: Rotates from -90deg (right) to 0deg (down) on active
- Mobile (<=1024px): Collapses to toggleable dropdown, recommended section hidden

**Pagination:**
- Centered, `42x42px` inline-block buttons
- Active: Blue bg `#107ed8`, white text
- Default: `border: 1px solid #EEEEEE`
- Shows: First | 1 | 2 | 3 | Last | "1/3" counter

### Product Detail Page Layout

```
+------------------------------------------------------------------+
| BANNER (1920x280px)                                              |
+------------------------------------------------------------------+
| BREADCRUMBS: Home / Products / [Category] / Content              |
+------------------------------------------------------------------+
| IMAGE GALLERY (50-60%)       |  PRODUCT INFO (40-50%)            |
|  [Main Image with prev/next] |  [H1 Product Title]               |
|  [Thumbnail strip - 5 imgs]  |  [Subtitle/Tagline]               |
|  [Service badges row]        |  [Send Inquiry CTA - blue btn]    |
|                              |  [Trust badges: Fast Delivery,     |
|                              |   Quality, 24/7 Service]           |
+------------------------------------------------------------------+
| DESCRIPTION (full-width)                                         |
|  Introduction, Applications (bullet list), Features (numbered)   |
+------------------------------------------------------------------+
| SPECIFICATIONS TABLE(S) (full-width)                             |
|  Light gray header, bordered cells, checkmarks for certs         |
+------------------------------------------------------------------+
| TECHNICAL DIAGRAMS (inline in content flow)                      |
+------------------------------------------------------------------+
| FAQ (flat Q&A list, not accordion - some products only)          |
+------------------------------------------------------------------+
| RELATED PRODUCTS ("You Might Also Like")                         |
|  3-per-row cards with thumbnail + name link                      |
+------------------------------------------------------------------+
| HOT TAGS (inline keyword links separated by /)                   |
+------------------------------------------------------------------+
```

**Image gallery:**
- Main image with prev/next arrow navigation
- Horizontal thumbnail strip below (5 thumbnails typical)
- Click thumbnail to swap main image
- No lightbox or zoom on original
- V2 has thumbnail clicking but no prev/next arrows

**Spec tables:**
- Light gray header row, dark text, standard borders
- Full content width, no alternating row colors
- Some products have multiple spec tables

### Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| 1600px | Container max-width cap |
| 1024px | **Major:** Sidebar full-width, mobile menu activates, grids reflow |
| 768px | Product grids 2-col, sidebar hides recommended, mobile bottom nav |
| 540px | Cards 49% width (2-col), font sizes reduce, padding shrinks |
| 415px | Title font shrinks, breadcrumbs stack vertically |

### Hover & Animation Patterns

- **Card hover:** `box-shadow: 0px 4px 10px #EEEEEE`, image `scale(1.05)`, title color to blue
- **Button hover:** Fill with `#107ed8` bg, text turns white
- **Scroll animations:** `.fadeLeft`, `.fadeRight`, `.fadeUp`, `.scalebig` (staggered delays)
- **Banner:** `@keyframes pagesbanner` fade-in from 20px margin-top + opacity 0
- **All transitions:** 0.2s-0.3s ease-in-out

---

## V2 Current Tech Stack

- **CSS:** Single custom file `css/style.css` (3,530 lines), no framework
- **JS:** Vanilla JS, zero dependencies (no jQuery, no Swiper)
- **Fonts:** System font stack only
- **Icons:** Unicode characters and emoji
- **Data:** Product data in `js/products-data.js` (31 products as global `window.PRODUCTS_DATA`)
- **Content images:** `js/content-images.js` maps technical diagrams per product
- **CSS variables:** Ocean blue `#0077B6` theme (differs from original `#107ed8`)
- **Container:** max-width 1200px (original is 1600px)
- **Breakpoints:** 1024px, 768px (original has 11 breakpoints)

### V2 File Structure

```
flyboat-website-V2.0/
  index.html           # Homepage
  about.html           # About page
  products.html        # Product listing (sidebar + grid + inquiry cart)
  product.html         # Product detail (gallery + specs + related)
  blog.html            # Blog listing
  blog-article.html    # Blog article
  news.html            # News listing
  news-article.html    # News article
  contact.html         # Contact page
  css/
    style.css          # All styles (3,530 lines)
  js/
    main.js            # Nav toggle, scroll effects, form handling (64 lines)
    products-data.js   # Product data store (546 lines, 31 products)
    content-images.js  # Technical diagram mappings (347 lines)
    blog-data.js       # Blog articles (110 lines)
    news-data.js       # News articles (236 lines)
    test-write.js      # Empty test file
```

### Known Gaps (V2 vs Original)

1. **No image carousel/slider** -- V2 has thumbnail clicking only, no prev/next arrows or Swiper
2. **Images not self-contained** -- All reference `../flyboat-website/` sibling directory
3. **No form submission** -- Forms only show `alert()`, no backend/email
4. **No multi-language support** -- Original has 40+ languages
5. **Incomplete spec tables** -- Only 2 of 31 products have populated `specTables`
6. **No search functionality** -- Original has global keyword search
7. **No SEO** -- Missing meta descriptions, Open Graph, JSON-LD, sitemap
8. **No mobile bottom bar** -- Original has fixed Home/Phone/Email/Inquiry bar
9. **No scroll animations** -- Original uses fadeLeft/fadeRight/fadeUp on scroll
10. **Color mismatch** -- V2 uses `#0077B6`, original uses `#107ed8`
11. **Container width** -- V2 is 1200px, original is 1600px
12. **Product count** -- `products-data.js` has 31 entries but CLAUDE.md documents 26 from original
