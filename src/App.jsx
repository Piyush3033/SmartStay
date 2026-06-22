import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Billing from './pages/Billing.jsx'
import Login from './pages/Login.jsx'
import Components from './pages/Components.jsx'

function App() {
  return (
    <div className="app-shell flex flex-col min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      <main className="page-content flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
