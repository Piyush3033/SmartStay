import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Billing', to: '/billing' },
  { label: 'Login', to: '/login' }
]

function Navbar() {
  return (
    <header className="navbar flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-slate-950 text-white shadow-lg">
      <NavLink to="/" className="navbar-brand text-lg font-semibold tracking-[0.12em]">
        SmartStay
      </NavLink>
      <nav className="navbar-links flex flex-wrap gap-4" aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? 'nav-link active text-sky-300' : 'nav-link text-slate-200 hover:text-white'}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
