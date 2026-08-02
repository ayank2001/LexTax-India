import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import Logo from './Logo'
import Button from '../ui/Button'
import { navLinks, services } from '../../data/siteData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen
  const filtered = services.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.short.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-navy/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-navy/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" aria-label="LEXTAX INDIA Home">
            <Logo light />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.mega ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/85 hover:text-gold transition"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition ${megaOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px]"
                      >
                        <div className="rounded-2xl p-5 grid grid-cols-3 gap-2 border border-gold/25 bg-navy-dark shadow-2xl shadow-black/40">
                          {services.slice(0, 9).map((s) => {
                            const Icon = s.icon
                            return (
                              <Link
                                key={s.slug}
                                to={`/services/${s.slug}`}
                                className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/10 transition"
                              >
                                <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                                  <Icon className="w-4 h-4 text-gold" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-white">{s.title}</div>
                                  <div className="text-xs text-white/55 mt-0.5">{s.short}</div>
                                </div>
                              </Link>
                            )
                          })}
                          <Link
                            to="/services"
                            className="col-span-3 text-center text-sm text-gold font-semibold pt-2 hover:underline"
                          >
                            View all services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition ${
                      isActive ? 'text-gold' : 'text-white/85 hover:text-gold'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className="p-2 rounded-lg text-white/80 hover:text-gold hover:bg-white/10 transition"
              aria-label="Search services"
            >
              <Search className="w-5 h-5" />
            </button>
            <Button to="/consultation" size="sm">
              Book Consultation
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="hidden lg:block pb-4"
            >
              <div className="relative">
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services…"
                  className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 px-4 py-3 outline-none focus:border-gold"
                />
                {query && (
                  <div className="absolute top-full mt-2 w-full rounded-xl overflow-hidden border border-gold/25 bg-navy-dark shadow-2xl shadow-black/40 z-10">
                    {filtered.length === 0 ? (
                      <p className="px-4 py-3 text-sm text-white/60">No services found</p>
                    ) : (
                      filtered.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block px-4 py-3 text-sm text-white hover:bg-white/10"
                        >
                          {s.title}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-navy"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block px-3 py-3 text-white/90 font-medium rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button to="/consultation" className="w-full">
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
