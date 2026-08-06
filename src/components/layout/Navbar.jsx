import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Clock3, Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'
import Button from '../ui/Button'
import { navLinks, serviceCategories, services, siteConfig } from '../../data/siteData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileSection, setMobileSection] = useState(null)
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
    setOpenDropdown(null)
    setMobileSection(null)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-navy-dark border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center sm:justify-between gap-3 h-9 text-[11px] sm:text-xs text-white/75">
            <div className="flex items-center gap-2">
              <Clock3 className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>
                Office hours: <span className="text-white/90">{siteConfig.hours}</span>
              </span>
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-gold transition"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
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

            <nav className="hidden xl:flex items-center gap-0.5">
              {serviceCategories.map((cat) => {
                const items = services.filter((s) => s.category === cat.id)
                const isOpen = openDropdown === cat.id
                return (
                  <div
                    key={cat.id}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(cat.id)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 px-2.5 py-2 text-[13px] font-medium text-white/85 hover:text-gold transition whitespace-nowrap"
                    >
                      {cat.shortLabel}
                      <ChevronDown className={`w-3.5 h-3.5 transition ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute left-0 top-full pt-3 w-[320px]"
                        >
                          <div className="rounded-2xl p-3 border border-gold/25 bg-navy-dark shadow-2xl shadow-black/40">
                            <div className="px-3 py-2 mb-1 border-b border-white/10">
                              <p className="text-xs font-semibold tracking-wide uppercase text-gold">{cat.label}</p>
                            </div>
                            {items.map((s) => {
                              const Icon = s.icon
                              return (
                                <Link
                                  key={s.slug}
                                  to={`/services/${s.slug}`}
                                  className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-white/10 transition"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                                    <Icon className="w-3.5 h-3.5 text-gold" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-white leading-snug">{s.title}</div>
                                    <div className="text-xs text-white/50 mt-0.5">{s.short}</div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}

              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `px-2.5 py-2 text-[13px] font-medium transition whitespace-nowrap ${
                      isActive ? 'text-gold' : 'text-white/85 hover:text-gold'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-3">
              <Button to="/consultation" size="sm">
                Book Consultation
              </Button>
            </div>

            <button
              type="button"
              className="xl:hidden p-2 text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-t border-white/10 bg-navy"
            >
              <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {serviceCategories.map((cat) => {
                  const items = services.filter((s) => s.category === cat.id)
                  const open = mobileSection === cat.id
                  return (
                    <div key={cat.id} className="border-b border-white/5 pb-1">
                      <button
                        type="button"
                        onClick={() => setMobileSection(open ? null : cat.id)}
                        className="w-full flex items-center justify-between px-3 py-3 text-white/90 font-medium"
                      >
                        {cat.label}
                        <ChevronDown className={`w-4 h-4 transition ${open ? 'rotate-180' : ''}`} />
                      </button>
                      {open && (
                        <div className="pb-2 pl-2 space-y-0.5">
                          {items.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="block px-3 py-2 text-sm text-white/70 hover:text-gold rounded-lg"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
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
      </div>
    </header>
  )
}
