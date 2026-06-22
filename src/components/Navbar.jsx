import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Login', to: '/login' }
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">SmartStay</div>
      <nav className="navbar-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
