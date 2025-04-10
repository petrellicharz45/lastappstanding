"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <Image src="/images/logo.png" alt="LastAppStanding Logo" fill className="object-contain" />
            </div>
            <span className="hidden font-bold sm:inline-block text-xl">LastAppStanding</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button>Get Started</Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button variant="ghost" className="h-10 w-10 p-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-background">
            <div className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background p-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="relative h-8 w-8">
                    <Image src="/images/logo.png" alt="LastAppStanding Logo" fill className="object-contain" />
                  </div>
                  <span className="font-bold text-xl">LastAppStanding</span>
                </Link>
                <Button variant="ghost" className="h-10 w-10 p-0" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <nav className="fixed top-16 left-0 right-0 bottom-0 mt-2 grid gap-2 overflow-y-auto pb-24 pt-2 md:pb-0">
              <div className="flex flex-col space-y-3 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

