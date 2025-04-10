"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"

const mainNavItems = [
  {
    title: "Company",
    href: "/company",
    children: [
      { title: "About Us", href: "/company/about" },
      { title: "Careers", href: "/company/careers" },
      { title: "Contact", href: "/company/contact" },
    ],
  },
  {
    title: "Products",
    href: "/products",
    children: [],
  },
  {
    title: "API Services",
    href: "/api-services",
    children: [
      { title: "Documentation", href: "/api-services/documentation" },
      { title: "API Reference", href: "/api-services/reference" },
      { title: "Integrations", href: "/api-services/integrations" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Guides", href: "/resources/guides" },
      { title: "Support", href: "/resources/support" },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
    children: [],
  },
]

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Company</span>
          </Link>
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.children.length > 0 ? (
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.children.map((child) => (
                              <li key={child.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                      pathname === child.href && "bg-accent text-accent-foreground",
                                    )}
                                  >
                                    <div className="text-sm font-medium leading-none">{child.title}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="default" size="sm" asChild className="hidden md:flex">
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="secondary" size="sm" asChild className="hidden md:flex">
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <MobileNav items={mainNavItems} setMobileNavOpen={setMobileNavOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileNav({
  items,
  setMobileNavOpen,
}: {
  items: typeof mainNavItems
  setMobileNavOpen: (open: boolean) => void
}) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-6 px-6 pb-8 pt-6">
      <Link href="/" className="flex items-center" onClick={() => setMobileNavOpen(false)}>
        <span className="font-bold text-xl">Company</span>
      </Link>
      <div className="flex flex-col space-y-3">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col space-y-2">
            <Link
              href={item.href}
              className={cn(
                "text-lg font-medium transition-colors",
                pathname === item.href && "text-foreground font-bold",
                pathname !== item.href && "text-muted-foreground",
              )}
              onClick={() => setMobileNavOpen(false)}
            >
              {item.title}
            </Link>
            {item.children.length > 0 && (
              <div className="ml-4 flex flex-col space-y-2">
                {item.children.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    className={cn(
                      "text-sm transition-colors",
                      pathname === child.href && "text-foreground font-medium",
                      pathname !== child.href && "text-muted-foreground",
                    )}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <Button variant="default" size="sm" asChild>
          <Link href="/login" onClick={() => setMobileNavOpen(false)}>
            Login
          </Link>
        </Button>
        <Button variant="secondary" size="sm" asChild>
          <Link href="/signup" onClick={() => setMobileNavOpen(false)}>
            Sign Up
          </Link>
        </Button>
      </div>
    </div>
  )
}

