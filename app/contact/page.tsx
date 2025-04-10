import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Get in Touch
              </h1>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                We'd love to hear from you. Reach out to our team with any questions or inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Company
                  </label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Reach out to us directly using the information below.
                </p>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-base font-medium">Email</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        <a href="mailto:info@lastappstanding.com" className="hover:text-primary">
                          info@lastappstanding.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-base font-medium">Phone</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        <a href="tel:+1-307-555-0123" className="hover:text-primary">
                          +1 (307) 555-0123
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-base font-medium">Address</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        312 W. 2nd St
                        <br />
                        Casper, WY 82601
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Leadership Team</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="relative h-20 w-20 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Furqan Khan"
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-medium">Furqan Khan</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">CEO & Co-Founder</p>
                          <p className="text-sm mt-1">
                            <a href="mailto:furqan@lastappstanding.com" className="text-primary hover:underline">
                              furqan@lastappstanding.com
                            </a>
                          </p>
                          <div className="flex justify-center space-x-2 mt-2">
                            <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                              <Linkedin className="h-4 w-4 text-slate-500 hover:text-primary" />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                              <Twitter className="h-4 w-4 text-slate-500 hover:text-primary" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="relative h-20 w-20 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Eric Choi"
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-medium">Eric Choi</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Co-Founder & CTO</p>
                          <p className="text-sm mt-1">
                            <a href="mailto:eric@lastappstanding.com" className="text-primary hover:underline">
                              eric@lastappstanding.com
                            </a>
                          </p>
                          <div className="flex justify-center space-x-2 mt-2">
                            <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                              <Linkedin className="h-4 w-4 text-slate-500 hover:text-primary" />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                              <Twitter className="h-4 w-4 text-slate-500 hover:text-primary" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Visit Our Office</h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                We're located in the heart of Casper, Wyoming
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border bg-background shadow">
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.1963076428277!2d-106.3255814!3d42.8500697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87606d8f1e2b5b33%3A0x9f9c1a96f5e1e5be!2s312%20W%202nd%20St%2C%20Casper%2C%20WY%2082601!5e0!3m2!1sen!2sus!4v1648675416!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

