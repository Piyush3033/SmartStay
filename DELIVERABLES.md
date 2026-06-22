# SmartStay – Cloud-Based Hotel Management System

A responsive web application for managing hotel operations including room booking, guest management, billing, and reporting. Built with React, Vite, and Tailwind CSS with full dark/light mode support.

## 📦 Deliverable Status

### ✅ Deliverable 1: Component Library in GitHub Repo
**Location:** `/src/components/ui/`

5 production-ready components with full JSDoc documentation:

- **Button.jsx** - Customizable button with variants (primary, secondary, danger) and sizes (sm, md, lg)
  - Props: `variant`, `size`, `disabled`, `loading`, `onClick`
- **Input.jsx** - Form input with validation, labels, and error handling
  - Props: `type`, `placeholder`, `value`, `onChange`, `disabled`, `error`, `label`
- **Modal.jsx** - Dialog component with customizable header, content, and footer
  - Props: `open`, `onClose`, `title`, `children`, `footer`
- **Toast.jsx** - Notification component with 4 types (info, success, warning, error)
  - Props: `type`, `message`, `visible`, `autoCloseDuration`
- **Loader.jsx** - Animated loading spinner with optional text
  - Props: `size`, `text`

**Export:** All components exported from `/src/components/ui/index.js`

**Usage Example:**
```jsx
import { Button, Input, Modal, Toast, Loader } from '../components/ui'

export default function MyPage() {
  return (
    <>
      <Button variant="primary" onClick={handleClick}>Submit</Button>
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Loader size="md" text="Loading..." />
    </>
  )
}
```

**Showcase:** Visit `/components` route in the running app to see all components in action.

---

### ✅ Deliverable 2: Dark/Light Mode Support
- Working toggle in Navbar (sun ☀️ / moon 🌙 button)
- Persistent preference saved to `localStorage`
- Global dark mode support using Tailwind's `class` strategy
- All components and pages respond to theme changes

**Toggle Button:** Located in top-right corner of Navbar

---

### 📋 Deliverable 3: Figma Wireframes PDF

Create 5 wireframes in Figma with lo-fi style (grey boxes, no colour):

#### Required Wireframe Screens:

1. **Home Page**
   - Navbar with logo and navigation links
   - Hero section with title and CTA
   - Feature cards grid (3 cards showing key features)
   - Footer

2. **Dashboard**
   - Header with title
   - Metric cards (Occupancy %, Daily Revenue)
   - Table/list showing recent reservations
   - Charts placeholder for trends
   - Footer

3. **Billing / List View**
   - Header with filters/search
   - Table with invoice list (columns: ID, Guest Name, Amount, Date, Status)
   - Action buttons (View, Download, Delete)
   - Pagination controls
   - Footer

4. **Login / Signup**
   - Form with email and password inputs
   - Submit button
   - Link to signup/forgot password
   - Optional: Social login placeholders
   - Footer

5. **AI Feature Screen** (Guest Assistant)
   - Chat interface mockup
   - Input field for guest queries
   - Chat message bubbles
   - AI suggestion cards (room recommendations)
   - Footer

#### Export Instructions:
1. Create all 5 frames in Figma
2. Select all frames
3. Go to: File → Export frames to PDF
4. Save as: `W3_Wireframes_[YourInternID].pdf`
5. Share Figma link with view access

---

### 📸 Deliverable 4: Responsive Screenshots PDF

#### Steps to Generate Screenshots:

1. **Start Dev Server:**
   ```bash
   npm run dev
   ```
   App runs at `http://localhost:5173`

2. **Take Screenshots at 3 Breakpoints** (e.g., Dashboard page):

   **Mobile (375px):**
   - Open Chrome DevTools (F12)
   - Toggle device toolbar (Ctrl+Shift+M)
   - Select "iPhone 12" or set width to 375px
   - Navigate to `/dashboard`
   - Take full-page screenshot: Right-click → Capture → Capture full page
   - Save as: `dashboard-mobile-375px.png`

   **Tablet (768px):**
   - DevTools → Device toolbar
   - Set width to 768px (or select iPad)
   - Same page URL
   - Capture full-page screenshot
   - Save as: `dashboard-tablet-768px.png`

   **Desktop (1440px):**
   - DevTools → Device toolbar
   - Set width to 1440px (or disable toolbar)
   - Same page URL
   - Capture full-page screenshot
   - Save as: `dashboard-desktop-1440px.png`

3. **Add Dark/Light Mode Screenshots:**
   - Toggle theme using the 🌙 button in navbar
   - Repeat screenshots at Desktop (1440px) in dark mode
   - Save as: `dashboard-desktop-1440px-dark.png`
   - Also take light mode: `dashboard-desktop-1440px-light.png`

4. **Combine into Single PDF:**
   - Use online tool (e.g., ilovepdf.com) or:
   - Print to PDF: Open each screenshot, Ctrl+P → Save as PDF
   - Use PDF merger to combine all 5 screenshots
   - Save as: `W3_ResponsiveScreenshots_[YourInternID].pdf`

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

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

### Project Structure

```
src/
├── components/
│   ├── ui/                    # 5 reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Toast.jsx
│   │   ├── Loader.jsx
│   │   └── index.js
│   ├── Navbar.jsx             # Main navigation with dark mode toggle
│   ├── Hero.jsx               # Hero section
│   ├── Card.jsx               # Feature card
│   └── Footer.jsx             # Footer
├── context/
│   └── ThemeContext.jsx       # Dark/light mode context
├── pages/
│   ├── Home.jsx               # Home page with feature cards
│   ├── About.jsx              # About SmartStay
│   ├── Dashboard.jsx          # Hotel operations dashboard
│   ├── Billing.jsx            # Billing management
│   ├── Login.jsx              # Authentication page
│   └── Components.jsx         # Component showcase/demo page
├── App.jsx                    # Main app with routing
├── main.jsx                   # App entry point with ThemeProvider
└── styles.css                 # Global styles + Tailwind directives

tailwind.config.js            # Tailwind configuration (dark mode enabled)
postcss.config.js             # PostCSS configuration
package.json                  # Dependencies & scripts
```

---

## 🎨 Tailwind + Dark Mode

- Tailwind CSS 3.4.4 configured with class-based dark mode
- All components support light/dark themes via `dark:` prefix
- Theme preference persists in localStorage
- Toggle in Navbar applies theme globally

**Example:**
```jsx
<div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
  Responsive to theme changes
</div>
```

---

## 📱 Responsive Design

- Mobile-first approach using Tailwind breakpoints
- Tested at 375px, 768px, and 1440px viewports
- Navbar adapts with hamburger menu simulation
- Feature cards stack on mobile, 2-column on tablet, 3-column on desktop
- All images and text scale appropriately

---

## ✨ Features Implemented

✅ Home page with Hero section and feature cards  
✅ Navigation with active route highlighting  
✅ Dashboard with metrics and insights  
✅ Billing management interface  
✅ Login/Auth placeholder  
✅ 5 Reusable UI Components with JSDoc  
✅ Dark/Light mode toggle with persistence  
✅ Components showcase page  
✅ Fully responsive at all breakpoints  
✅ Tailwind CSS integration  
✅ Semantic HTML & accessibility  
✅ Git commit history with conventional messages  

---

## 🔗 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with feature cards |
| `/about` | About SmartStay |
| `/dashboard` | Hotel operations dashboard |
| `/billing` | Billing & invoices management |
| `/login` | Login page |
| `/components` | Component showcase page |

---

## 🛠 Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.1
- **Routing:** React Router DOM 6.16.0
- **Styling:** Tailwind CSS 3.4.4
- **CSS Processing:** PostCSS + Autoprefixer
- **Package Manager:** npm

---

## 📝 Git Commits

All changes follow conventional commit format:
- `feat:` – New features
- `fix:` – Bug fixes
- `chore:` – Build/dependency updates
- `refactor:` – Code restructuring

Recent commits:
- `feat: simplify home hero title to SmartStay`
- `feat: add billing tab and enrich About/Dashboard content`
- `feat: polish page content and improve app structure`
- `feat: add Tailwind support and apply Tailwind utilities to UI components`
- `feat: add component library and dark/light mode support`

---

## 📄 File Checklist for Submission

- [ ] GitHub repository with clean commit history
- [ ] `/src/components/ui/` folder with 5 components + index.js
- [ ] Dark mode toggle working in Navbar
- [ ] `/components` route showing all components
- [ ] `npm run build` completes without errors
- [ ] `W3_Wireframes_[InternID].pdf` (5 lo-fi wireframes)
- [ ] `W3_ResponsiveScreenshots_[InternID].pdf` (5 screenshots: 3 breakpoints + 2 theme modes)
- [ ] Figma link shared with view access
- [ ] README documenting all components

---

## ❓ FAQ

**Q: Where do I find the dark mode toggle?**  
A: Top-right corner of the Navbar (sun ☀️ / moon 🌙 button)

**Q: How do I use the components in my own page?**  
A: Import from `/src/components/ui/index.js` and use like any React component

**Q: How do I run the app locally?**  
A: `npm install` → `npm run dev` → Open http://localhost:5173

**Q: How do I generate responsive screenshots?**  
A: Use Chrome DevTools device toolbar to simulate different screen sizes, then take full-page screenshots

---

## 📧 Contact

For questions or issues, refer to the component documentation in `/src/components/ui/` folder.

---

**Last Updated:** June 22, 2026  
**Status:** Deliverables 1, 2, & partial 4 completed ✅  
**Ready for PoC Review:** Yes ✅
