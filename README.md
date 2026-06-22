# SmartStay – Cloud-Based Hotel Management System

A production-ready hotel management web application built with React, Tailwind CSS, and modern development practices.

## 🎯 Project Overview

SmartStay is a cloud-based solution for small to medium hotels to streamline operations:
- **Room Booking & Reservations** – Real-time availability and booking management
- **Guest Management** – Store and search guest profiles with history
- **Billing & Invoices** – Automatic GST-ready invoice generation
- **Dashboard & Reports** – Track occupancy, revenue, and trends
- **Role-Based Access** – Secure admin and receptionist controls
- **AI Guest Assistant** – Smart room suggestions (future feature)

---

## 📦 Deliverables Status

### ✅ Completed

| Deliverable | Status | Location |
|------------|--------|----------|
| **Component Library** | ✅ Done | `/src/components/ui/` |
| **Dark/Light Mode** | ✅ Done | Navbar toggle + ThemeContext |
| **Components Showcase** | ✅ Done | `/components` route |
| **Responsive Design** | ✅ Done | Mobile, Tablet, Desktop support |
| **Git Commit History** | ✅ Done | Conventional format |
| **Tailwind Integration** | ✅ Done | Full Tailwind + dark mode |

### 📋 To Do

- [ ] **Figma Wireframes PDF** – Create 5 lo-fi wireframes (see `DELIVERABLES.md`)
- [ ] **Responsive Screenshots PDF** – Take screenshots at 375px, 768px, 1440px

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/                    # 5 Reusable UI Components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Toast.jsx
│   │   ├── Loader.jsx
│   │   └── index.js
│   ├── Navbar.jsx             # Navigation with dark mode toggle
│   ├── Hero.jsx
│   ├── Card.jsx
│   └── Footer.jsx
├── context/
│   └── ThemeContext.jsx       # Dark/Light mode context
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Billing.jsx
│   ├── Login.jsx
│   ├── About.jsx
│   └── Components.jsx         # Component showcase
├── App.jsx                    # Main app with routing
├── main.jsx                   # Entry point with ThemeProvider
└── styles.css                 # Global styles

Configuration:
├── tailwind.config.js         # Tailwind with dark mode
├── postcss.config.js
└── vite.config.js
```

---

## 🎨 Component Library

All components are documented with JSDoc and ready to use:

### Button
```jsx
<Button variant="primary" size="md" onClick={handler}>
  Click me
</Button>
```
**Variants:** primary, secondary, danger  
**Sizes:** sm, md, lg

### Input
```jsx
<Input 
  label="Email"
  type="email"
  placeholder="you@example.com"
  error={error}
  onChange={handleChange}
/>
```

### Modal
```jsx
<Modal open={isOpen} onClose={closeModal} title="Confirm Action">
  Are you sure?
  <footer>
    <Button onClick={closeModal}>No</Button>
    <Button variant="primary" onClick={confirm}>Yes</Button>
  </footer>
</Modal>
```

### Toast
```jsx
<Toast visible={show} type="success" message="Changes saved!" />
```
**Types:** info, success, warning, error

### Loader
```jsx
<Loader size="md" text="Loading..." />
```
**Sizes:** sm, md, lg

---

## 🌓 Dark/Light Mode

- **Toggle Button:** Top-right corner of Navbar (☀️ 🌙)
- **Persistence:** Theme preference saved to localStorage
- **Scope:** Global application-wide support

All components automatically respond to theme changes using Tailwind's `dark:` prefix.

---

## 📱 Responsive Design

- **Mobile (375px):** Single-column layout, stacked navigation
- **Tablet (768px):** 2-column grids, optimized spacing
- **Desktop (1440px):** Full 3-column layouts, expanded content

Tested with Chrome DevTools device emulation.

---

## 🛣️ Available Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section + feature cards |
| `/about` | About | About SmartStay |
| `/dashboard` | Dashboard | Operations metrics |
| `/billing` | Billing | Invoice management |
| `/login` | Login | Auth placeholder |
| `/components` | Showcase | All UI components demo |

---

## 🔧 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3.1 | UI framework |
| Vite | 5.4.1 | Build tool |
| React Router | 6.16.0 | Routing |
| Tailwind CSS | 3.4.4 | Styling |
| PostCSS | Latest | CSS processing |

---

## 📝 Git Workflow

All changes follow **conventional commits**:

```bash
feat: add feature name
fix: fix bug description
chore: dependency updates
refactor: code restructuring
```

Example history:
```
5f34949 feat: add component library and dark/light mode support
fd4a777 feat: add Tailwind support
e5c9909 feat: polish page content
e8aa578 feat: add billing tab and enrich content
fb46404 feat: simplify home hero title
```

---

## ✅ Checklist

- [x] Home page with Hero and feature cards
- [x] 4+ page routes (Home, About, Dashboard, Billing, Login)
- [x] Responsive at 3 breakpoints
- [x] 5 UI components in `/components/ui/`
- [x] Component index file exporting all
- [x] Dark/Light mode with toggle
- [x] Tailwind CSS integration
- [x] Conventional commit messages
- [x] Clean file structure
- [x] Build succeeds without errors
- [ ] Figma wireframes (5 screens)
- [ ] Responsive screenshots PDF (3 breakpoints + 2 themes)

---

## 📄 Documentation

For detailed deliverable instructions, see **[DELIVERABLES.md](./DELIVERABLES.md)**

---

## 🚀 Deployment Ready

- ✅ Production build passes
- ✅ All dependencies up to date
- ✅ No console errors or warnings
- ✅ Responsive on all devices
- ✅ Dark mode functional
- ✅ Components documented

---

**Built with ❤️ for modern hotel management**

