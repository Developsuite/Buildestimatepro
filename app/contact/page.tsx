import ContactHeroSection from '@/components/sections/contact/ContactHeroSection'
import ContactFormSection from '@/components/sections/contact/ContactFormSection'
import ContactInfoSection from '@/components/sections/contact/ContactInfoSection'
import ContactFAQSection from '@/components/sections/contact/ContactFAQSection'
import FooterSection from '@/components/sections/home/FooterSection'

export default function Contact() {
  return (
    <div className="bg-[#F5F1E6]">
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <ContactFAQSection />
      <FooterSection />
    </div>
  )
}
