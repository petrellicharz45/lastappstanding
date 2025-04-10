import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Shield } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Powering the Future with Generative AI
                </h1>
                <p className="max-w-[600px] text-slate-500 md:text-xl dark:text-slate-400">
                  Unlock the potential of AI with our cutting-edge generative API solutions. Build smarter applications
                  with LastAppStanding.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button className="px-8">
                    Explore APIs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                <Image
                  src="/images/logo-large.png"
                  alt="LastAppStanding Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose LastAppStanding
              </h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Our AI solutions are designed to help businesses innovate and scale with confidence.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">High Performance</h3>
              <p className="text-center text-slate-500 dark:text-slate-400">
                Lightning-fast API responses with enterprise-grade reliability and uptime.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Developer Friendly</h3>
              <p className="text-center text-slate-500 dark:text-slate-400">
                Comprehensive documentation and SDKs for seamless integration.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secure & Compliant</h3>
              <p className="text-center text-slate-500 dark:text-slate-400">
                Enterprise-grade security with data privacy at the core of our infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of companies using LastAppStanding to power their AI solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/pricing">
                <Button variant="secondary" className="px-8">
                  View Pricing
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-transparent border-white hover:bg-white hover:text-primary px-8"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

