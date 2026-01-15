'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function FooterSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <footer ref={ref} className={`w-full bg-[#121212] text-white scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {/* Company Info */}
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-figtree mb-4 sm:mb-6">
                Construct Estimates
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-figtree">
                Professional construction estimating services to help you bid confidently and manage project costs effectively.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:space-y-5">
              <h4 className="text-base sm:text-lg font-bold font-figtree mb-4 sm:mb-6">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                  { name: 'Services', href: '/services' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-white/70 hover:text-[#E8481C] transition-colors duration-300 font-figtree"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4 sm:space-y-5">
              <h4 className="text-base sm:text-lg font-bold font-figtree mb-4 sm:mb-6">
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Cost Estimating',
                  'Material Takeoff',
                  'MEP Estimating',
                  'Concrete Estimating',
                  'Electrical Estimating',
                ].map((service) => (
                  <li key={service}>
                    <span className="text-xs sm:text-sm text-white/70 font-figtree">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-5">
              <h4 className="text-base sm:text-lg font-bold font-figtree mb-4 sm:mb-6">
                Contact Us
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8481C] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@constructestimates.com" className="text-xs sm:text-sm text-white/70 hover:text-[#E8481C] transition-colors duration-300 font-figtree">
                    info@constructestimates.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8481C] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xs sm:text-sm text-white/70 font-figtree">
                    Available 24/7
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-white/60 font-figtree text-center sm:text-left">
              © {new Date().getFullYear()} Construct Estimates. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/privacy" className="text-xs sm:text-sm text-white/60 hover:text-[#E8481C] transition-colors duration-300 font-figtree">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs sm:text-sm text-white/60 hover:text-[#E8481C] transition-colors duration-300 font-figtree">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


