'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { Testimonial } from '@/components/testimonial'

export default function Home() {
  const { toast } = useToast()

  const showContactToast = () => {
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Cosmic Creations
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
              We build innovative cool digital solutions that help businesses reach for the stars.
            </p>
            <div className="mt-12 flex gap-4 justify-center">
              <Button size="lg" className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">Get Started</Button>
              <Button size="lg" variant="outline" className="px-8 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            We offer a range of digital services to help your business succeed in the digital world.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/30">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                We create beautiful, responsive websites that engage your audience and drive conversions.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50 dark:from-gray-950 dark:to-purple-950/30">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                We design intuitive user interfaces and experiences that delight your users and keep them coming back.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-950 dark:to-indigo-950/30">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We help you reach your target audience and grow your business with effective digital marketing strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Portfolio
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Check out some of our recent projects that showcase our expertise and creativity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">E-Commerce Platform</h3>
                    <p className="text-gray-300 text-sm">Web Development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Mobile App Design</h3>
                    <p className="text-gray-300 text-sm">UI/UX Design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Marketing Campaign</h3>
                    <p className="text-gray-300 text-sm">Digital Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Testimonial 
            quote="Cosmic Creations transformed our online presence. Their team was professional, creative, and delivered beyond our expectations."
            author="Sarah Johnson"
            role="CEO, TechStart"
          />
          <Testimonial 
            quote="Working with Cosmic Creations was a game-changer for our business. They understood our vision and brought it to life beautifully."
            author="Michael Chen"
            role="Marketing Director, Innovate Inc"
          />
          <Testimonial 
            quote="The team at Cosmic Creations is exceptional. They're responsive, talented, and truly care about the success of their clients."
            author="Jessica Williams"
            role="Founder, Creative Solutions"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Ready to start your next project? Contact us today and let's create something amazing together.
          </p>
          <Card className="max-w-[500px] mx-auto border-none shadow-lg bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-950 dark:to-blue-950/30">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background"></textarea>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={showContactToast}>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}


