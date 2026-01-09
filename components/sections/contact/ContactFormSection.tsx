'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'

export default function ContactFormSection() {
  const [ref, isVisible] = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section ref={ref} className={`relative w-full bg-[#F5F1E6] py-12 sm:py-16 md:py-20 lg:py-24 scroll-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto pl-4 sm:pl-6 md:pl-6 lg:pl-8 xl:pl-10 2xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20 3xl:pr-24">
        {/* Title Section */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="text-xs sm:text-sm text-[#121212]/80 mb-2 sm:mb-3 font-figtree">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 sm:mb-6 font-figtree">
            Contact us
          </h2>
        </div>

        {/* Form and Image Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Form Section */}
          <div>
            <p className="text-sm sm:text-base text-[#121212] leading-relaxed font-figtree mb-8 sm:mb-10 md:mb-12">
              We'd love to hear from you! Whether you have a new project in mind, need expert consultation, or just want to learn more about our work, our team is ready to assist. Fill the below form to resolve any queries or to ask for estimation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Name and Company Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#121212] mb-2 sm:mb-3 font-figtree">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#121212]/[0.03] border border-[#121212]/[0.05] text-[#121212] placeholder:text-[#121212]/30 focus:outline-none focus:border-[#E8481C] transition-colors duration-300 font-figtree text-sm sm:text-base"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#121212] mb-2 sm:mb-3 font-figtree">
                    Your Company*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name here.."
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#121212]/[0.03] border border-[#121212]/[0.05] text-[#121212] placeholder:text-[#121212]/30 focus:outline-none focus:border-[#E8481C] transition-colors duration-300 font-figtree text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#121212] mb-2 sm:mb-3 font-figtree">
                    Your Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email..."
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#121212]/[0.03] border border-[#121212]/[0.05] text-[#121212] placeholder:text-[#121212]/30 focus:outline-none focus:border-[#E8481C] transition-colors duration-300 font-figtree text-sm sm:text-base"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#121212] mb-2 sm:mb-3 font-figtree">
                    Your Cell*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Cell..."
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#121212]/[0.03] border border-[#121212]/[0.05] text-[#121212] placeholder:text-[#121212]/30 focus:outline-none focus:border-[#E8481C] transition-colors duration-300 font-figtree text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#121212] mb-2 sm:mb-3 font-figtree">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject..."
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#121212]/[0.03] border border-[#121212]/[0.05] text-[#121212] placeholder:text-[#121212]/30 focus:outline-none focus:border-[#E8481C] transition-colors duration-300 font-figtree text-sm sm:text-base"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#121212] mb-2 sm:mb-3 font-figtree">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Message here.."
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#121212]/[0.03] border border-[#121212]/[0.05] text-[#121212] placeholder:text-[#121212]/30 focus:outline-none focus:border-[#E8481C] transition-colors duration-300 resize-none font-figtree text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full sm:w-auto px-12 sm:px-16 py-3 sm:py-3.5 bg-[#121212] text-white font-figtree font-semibold rounded-sm overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 text-sm sm:text-base group-hover:tracking-wide transition-all duration-300">Submit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8481C] to-[#ff6b47] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block relative h-[500px] xl:h-[600px]">
            <Image
              src="/images/contact/images/image1.png"
              alt="Contact Us"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

