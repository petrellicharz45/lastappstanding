import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About LastAppStanding
              </h1>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                Pioneering the future of AI technology since 2017
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                <Image src="/images/logo-large.png" alt="LastAppStanding Logo" fill className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Founded in 2017, LastAppStanding began with a simple mission: to make advanced AI technology
                  accessible to businesses of all sizes. Our founders, Furqan Khan and Eric Choi, recognized the
                  transformative potential of generative AI and set out to build APIs that would empower developers to
                  create innovative applications.
                </p>
                <p className="text-slate-500 dark:text-slate-400 mt-4">
                  What started as a small team working out of a co-working space in Casper, Wyoming has grown into a
                  global company serving thousands of businesses across various industries. Our commitment to
                  innovation, reliability, and customer success has remained unchanged throughout our journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  We constantly push the boundaries of what's possible with AI technology.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Accessibility</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  We believe advanced AI should be accessible to businesses of all sizes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Reliability</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Our customers depend on our APIs, so we prioritize uptime and performance.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  We strive for excellence in everything we do, from code to customer service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Leadership Team</h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                Meet the people driving our vision forward
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Furqan Khan"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Furqan Khan</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">CEO & Co-Founder</p>
                <p className="mt-2 text-sm">furqan@lastappstanding.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Eric Choi"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Eric Choi</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Co-Founder & CTO</p>
                <p className="mt-2 text-sm">eric@lastappstanding.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

