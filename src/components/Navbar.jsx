import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Billing', to: '/billing' },
  { label: 'Login', to: '/login' },
  { label: 'Components', to: '/components' }
]

function Navbar() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="navbar flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-slate-950 text-white shadow-lg dark:bg-slate-950">
      <NavLink to="/" className="navbar-brand text-lg font-semibold tracking-[0.12em]">
        SmartStay
      </NavLink>
      <nav className="navbar-links flex flex-wrap gap-4 items-center" aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? 'nav-link active text-sky-300' : 'nav-link text-slate-200 hover:text-white'}
          >
            {link.label}
          </NavLink>
        ))}
        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
          aria-label="Toggle dark mode"
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
