import { createFileRoute } from '@tanstack/react-router'
import {
  Navbar,
  Hero,
  Services,
  About,
  Portfolio,
  Testimonials,
  Contact,
  Footer,
} from '@/components/landing'

export const Route = createFileRoute('/_public/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
