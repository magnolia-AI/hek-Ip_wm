import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'


export const metadata: Metadata = {
  title: 'Cosmic Creations',
  description: 'Innovative digital solutions for the modern world',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full flex flex-col antialiased">
        <ThemeProvider defaultTheme="light" attribute="class">
          {/* 
            TEMPLATE SECTION: Header
            This is a template header - replace with your own navigation
            Consider adding a logo, navigation links, theme toggle, etc.
          */}
          <header className="border-b bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MobileNav />
                <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Cosmic Creations</div>
              </div>
              <nav className="hidden md:flex gap-6">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </nav>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button variant="default" size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">Get Started</Button>
              </div>
            </div>
          </header>

          {/* 
            TEMPLATE NOTE:
            This is where your page content will be rendered.
            The layout wraps all pages with consistent header and footer.
          */}
          <main className="flex-1">
            {children}
          </main>

          {/* 
            TEMPLATE SECTION: Footer
            Basic footer - replace with your own design
            Consider adding navigation, social links, etc.
          */}

          <footer className="border-t bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Cosmic Creations</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating innovative digital solutions that help businesses thrive in the modern world.                  
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
                    <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
                    <li><a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a></li>
                    <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Web Development</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">UI/UX Design</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Digital Marketing</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Contact</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground">Email: hello@cosmic-creations.com</li>
                    <li className="text-muted-foreground">Phone: (123) 456-7890</li>
                    <li className="text-muted-foreground">Address: 123 Cosmic Avenue</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 text-center border-t">
                <p className="text-sm text-muted-foreground">
                  © 2025 Cosmic Creations. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


