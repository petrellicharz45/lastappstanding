import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Image src="/images/logo.png" alt="LastAppStanding Logo" fill className="object-contain" />
              </div>
              <span className="font-bold">LastAppStanding</span>
            </Link>
            <p className="text-sm text-muted-foreground">Powering the future with generative AI solutions.</p>
            <div className="flex space-x-4">
              <Link href="#" target="_blank" rel="noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/company/last-app-standing/" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-sm font-medium">Company</div>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Careers
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Blog
              </Link>
            </nav>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-sm font-medium">Products</div>
            <nav className="flex flex-col space-y-2">
              <Link href="/products" className="text-sm text-muted-foreground hover:text-primary">
                API Services
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                Pricing
              </Link>
              <Link href="/documentation" className="text-sm text-muted-foreground hover:text-primary">
                Documentation
              </Link>
              <Link href="/integrations" className="text-sm text-muted-foreground hover:text-primary">
                Integrations
              </Link>
            </nav>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-sm font-medium">Resources</div>
            <nav className="flex flex-col space-y-2">
              <Link href="/documentation" className="text-sm text-muted-foreground hover:text-primary">
                Documentation
              </Link>
              <Link href="/guides" className="text-sm text-muted-foreground hover:text-primary">
                Guides
              </Link>
              <Link href="/api-reference" className="text-sm text-muted-foreground hover:text-primary">
                API Reference
              </Link>
              <Link href="/support" className="text-sm text-muted-foreground hover:text-primary">
                Support
              </Link>
            </nav>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-sm font-medium">Legal</div>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/security" className="text-sm text-muted-foreground hover:text-primary">
                Security
              </Link>
              <Link href="/compliance" className="text-sm text-muted-foreground hover:text-primary">
                Compliance
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; 2017 LastAppStanding. All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground md:text-right">312 W. 2nd St, Casper, WY 82601</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

