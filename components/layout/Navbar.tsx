'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

interface Trade {
  id: string
  title: string
  slug: string
  category?: string
}

const services = [
  {
    title: 'Cost Estimating Services',
    href: '/services/cost-estimating',
    image: '/images/home/cost.png'
  },
  {
    title: 'Material Takeoff Services',
    href: '/services/material-takeoff',
    image: '/images/home/material.png'
  },
  {
    title: 'Residential Estimating Services',
    href: '/services/residential',
    image: '/images/home/residental.png'
  },
  {
    title: 'Commercial Estimating Services',
    href: '/services/commercial',
    image: '/images/home/commercial.png'
  },
  {
    title: 'Industrial Estimating Services',
    href: '/services/industrial',
    image: '/images/home/industrial.png'
  },
  {
    title: 'Preliminary Estimate Services',
    href: '/services/preliminary',
    image: '/images/home/premilinary.png'
  },
  {
    title: 'Virtual Bid Management',
    href: '/services/virtual-bid-management',
    image: '/images/home/cost.png'
  },
  {
    title: 'Construction Estimating Consultant',
    href: '/services/construction-estimating-consultant',
    image: '/images/home/cost.png'
  },
  {
    title: 'Construction Takeoff Services',
    href: '/services/construction-takeoff',
    image: '/images/home/material.png'
  },
  {
    title: 'CAD Services',
    href: '/services/cad-services',
    image: '/images/home/cost.png',
    isHighlighted: true
  }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const [isTradesHovered, setIsTradesHovered] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileTradesOpen, setMobileTradesOpen] = useState(false)
  const [trades, setTrades] = useState<Trade[]>([])
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const tradesHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Function to fetch trades
    const fetchTrades = () => {
      fetch('/api/trades')
        .then(res => res.json())
        .then(data => setTrades(data))
        .catch(err => console.error('Error fetching trades:', err))
    }

    // Fetch trades on mount
    fetchTrades()

    // Refetch trades when window regains focus (user returns from admin panel)
    const handleFocus = () => {
      fetchTrades()
    }

    // Listen for custom trades update event
    const handleTradesUpdate = () => {
      fetchTrades()
    }

    window.addEventListener('focus', handleFocus)
    window.addEventListener('tradesUpdated', handleTradesUpdate)

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
      if (tradesHoverTimeoutRef.current) {
        clearTimeout(tradesHoverTimeoutRef.current)
      }
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('tradesUpdated', handleTradesUpdate)
    }
  }, [])

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setIsServicesHovered(true)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false)
    }, 300) // 300ms delay before closing
  }

  const handleTradesMouseEnter = () => {
    if (tradesHoverTimeoutRef.current) {
      clearTimeout(tradesHoverTimeoutRef.current)
    }
    setIsTradesHovered(true)
  }

  const handleTradesMouseLeave = () => {
    tradesHoverTimeoutRef.current = setTimeout(() => {
      setIsTradesHovered(false)
    }, 300) // 300ms delay before closing
  }

  const navLinks = [
    { name: 'Home', href: '/', active: true },
    { name: 'Services', href: '/services', active: false, hasDropdown: true, isServices: true },
    { name: 'Trades', href: '/trades', active: false, hasDropdown: true, isTrades: true },
    { name: 'Samples', href: '/samples', active: false },
    { name: 'Blog', href: '/blog', active: false },
    { name: 'Pricing', href: '/pricing', active: false },
    { name: 'About Us', href: '/about', active: false },
    { name: 'Contact Us', href: '/contact', active: false },
  ]

  return (
    <nav className="w-full bg-[#F5F1E6] relative">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-[50px]">
        <div className="flex items-center justify-between h-[94px] py-[30px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/loho/logolarge.png" 
                alt="Company Logo" 
                className="h-[80px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <div className="flex items-center justify-center gap-6 xl:gap-8 relative">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.isServices) handleMouseEnter()
                    if (link.isTrades) handleTradesMouseEnter()
                  }}
                  onMouseLeave={() => {
                    if (link.isServices) handleMouseLeave()
                    if (link.isTrades) handleTradesMouseLeave()
                  }}
                >
                <Link
                  href={link.href}
                    className={`text-sm leading-[16.4px] font-normal transition-colors flex items-center gap-1 ${
                    link.active
                      ? 'text-[#E8481C]'
                      : 'text-[#121212] hover:text-[#E8481C]'
                  }`}
                >
                  {link.name}
                    {link.hasDropdown && (
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${
                          (link.isServices && isServicesHovered) || (link.isTrades && isTradesHovered) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Services Dropdown Menu */}
                  {link.isServices && isServicesHovered && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-[600px] bg-[#F5F1E6] shadow-2xl rounded-lg border border-gray-200 overflow-hidden z-50 animate-fade-in-up"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="grid grid-cols-2">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className={`group relative flex items-center justify-between gap-4 p-4 hover:bg-white/50 transition-colors duration-200 ${
                              index % 2 === 0 ? 'border-r border-gray-200' : ''
                            } ${
                              index < services.length - 2 ? 'border-b border-gray-200' : ''
                            }`}
                          >
                            {/* Text */}
                            <div className="flex-1 min-w-0">
                              <h3 className={`text-sm transition-colors duration-200 font-figtree ${
                                service.isHighlighted 
                                  ? 'font-bold text-[#E8481C] group-hover:text-[#121212]' 
                                  : 'font-semibold text-[#121212] group-hover:text-[#E8481C]'
                              }`}>
                                {service.title}
                              </h3>
                            </div>

                            {/* Arrow Icon */}
                            <svg
                              className="w-4 h-4 text-[#121212] group-hover:text-[#E8481C] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trades Dropdown Menu */}
                  {link.isTrades && isTradesHovered && trades.length > 0 && (
                    <div 
                      className={`absolute top-full left-0 mt-2 ${trades.length === 1 ? 'w-[300px]' : 'w-[600px]'} bg-[#F5F1E6] shadow-2xl rounded-lg border border-gray-200 overflow-hidden z-50 animate-fade-in-up`}
                      onMouseEnter={handleTradesMouseEnter}
                      onMouseLeave={handleTradesMouseLeave}
                    >
                      <div className={`${trades.length === 1 ? 'grid-cols-1' : 'grid grid-cols-2'} max-h-[400px] overflow-y-auto`}>
                        {trades.map((trade, index) => (
                          <Link
                            key={trade.id}
                            href={`/trades/${trade.slug}`}
                            className={`group relative flex items-center justify-between gap-4 p-4 hover:bg-white/50 transition-colors duration-200 ${
                              trades.length > 1 && index % 2 === 0 ? 'border-r border-gray-200' : ''
                            } ${
                              index < trades.length - (trades.length > 1 ? 2 : 1) ? 'border-b border-gray-200' : ''
                            }`}
                            onClick={() => setIsTradesHovered(false)}
                          >
                            {/* Text */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-semibold text-[#121212] group-hover:text-[#E8481C] transition-colors duration-200 font-figtree">
                                {trade.title}
                              </h3>
                              {trade.category && (
                                <p className="text-xs text-gray-600 mt-1">{trade.category}</p>
                              )}
                            </div>

                            {/* Arrow Icon */}
                            <svg
                              className="w-4 h-4 text-[#121212] group-hover:text-[#E8481C] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-[24px]">
            {/* Get Estimate Button */}
            <Link
              href="/contact"
              className="group relative h-[33px] px-5 flex items-center justify-center bg-white text-[#121212] text-sm font-normal overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Get Estimate
              </span>
            </Link>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="group relative h-[33px] px-5 flex items-center justify-center bg-[#121212] text-white text-sm font-normal overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[#E8481C] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="relative z-10 transition-colors duration-300">Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button - Animated Hamburger to X */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              {/* Top line */}
              <span 
                className={`block h-0.5 w-6 bg-[#121212] rounded-full transform transition-all duration-300 ease-in-out origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              />
              {/* Middle line */}
              <span 
                className={`block h-0.5 w-6 bg-[#121212] rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              {/* Bottom line */}
              <span 
                className={`block h-0.5 w-6 bg-[#121212] rounded-full transform transition-all duration-300 ease-in-out origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Positioned below navbar */}
        <div 
          className={`lg:hidden absolute left-0 right-0 top-full z-40 transition-all duration-300 ease-out ${
            isMenuOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          {/* Menu Panel */}
          <div className={`bg-[#F5F1E6] shadow-xl border-t border-[#E8481C]/10 transition-all duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-2'
          }`}>
            {/* Menu Items */}
            <div className="px-4 py-4 max-h-[70vh] overflow-y-auto">
              <nav className="space-y-0">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => {
                            if (link.isServices) setMobileServicesOpen(!mobileServicesOpen)
                            if (link.isTrades) setMobileTradesOpen(!mobileTradesOpen)
                          }}
                          className="w-full flex items-center justify-between py-3 text-[#121212] hover:text-[#E8481C] transition-colors border-b border-[#121212]/10"
                        >
                          <span className="text-sm font-medium">{link.name}</span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${
                              (link.isServices && mobileServicesOpen) || (link.isTrades && mobileTradesOpen)
                                ? 'rotate-180 text-[#E8481C]'
                                : 'text-[#121212]/50'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Services Submenu */}
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-out ${
                            link.isServices && mobileServicesOpen 
                              ? 'max-h-[400px] opacity-100' 
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="pl-4 py-2 space-y-0 border-l-2 border-[#E8481C]/30 ml-2 bg-white/30">
                            {services.map((service, idx) => (
                              <Link
                                key={idx}
                                href={service.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block py-2 text-xs transition-colors ${
                                  service.isHighlighted 
                                    ? 'text-[#E8481C] font-medium' 
                                    : 'text-[#121212]/70 hover:text-[#E8481C]'
                                }`}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Trades Submenu */}
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-out ${
                            link.isTrades && mobileTradesOpen && trades.length > 0
                              ? 'max-h-[400px] opacity-100' 
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="pl-4 py-2 space-y-0 border-l-2 border-[#E8481C]/30 ml-2 bg-white/30">
                            {trades.map((trade) => (
                              <Link
                                key={trade.id}
                                href={`/trades/${trade.slug}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 text-xs text-[#121212]/70 hover:text-[#E8481C] transition-colors"
                              >
                                {trade.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-3 text-sm font-medium transition-colors border-b border-[#121212]/10 ${
                          link.active ? 'text-[#E8481C]' : 'text-[#121212] hover:text-[#E8481C]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* CTA Button */}
              <div className="mt-4 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-3 px-4 text-center text-white text-sm font-medium rounded-lg bg-[#E8481C] hover:bg-[#d63d14] transition-all duration-300 shadow-md"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Free Estimate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Backdrop for mobile menu */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 top-full bg-black/20 z-30"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}

