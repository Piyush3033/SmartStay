import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Billing', to: '/billing' },
  { label: 'Login', to: '/login' },
  { label: 'Components', to: '/components' }
]

function Navbar() {
  return (
    <header className="navbar flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-slate-950 text-white shadow-lg dark:bg-slate-900 transition-colors">
      <NavLink to="/" className="navbar-brand text-lg font-semibold tracking-[0.12em]">
        SmartStay
      </NavLink>
      <nav className="navbar-links flex flex-wrap gap-3 items-center" aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? 'nav-link active text-sky-300 font-medium' : 'nav-link text-slate-300 hover:text-white transition-colors'}
          >
            {link.label}
          </NavLink>
        ))}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Navbar

