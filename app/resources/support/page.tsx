"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, Mail, Phone, MessageSquare, FileText, ArrowRight } from "lucide-react"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        'You can reset your password by clicking on the "Forgot Password" link on the login page. You will receive an email with instructions to create a new password.',
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For enterprise plans, we also offer invoicing options.",
    },
    {
      question: "How do I upgrade my subscription?",
      answer:
        'You can upgrade your subscription at any time from your account dashboard. Go to "Billing" and select "Change Plan" to see available options.',
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. Your service will continue until the end of your current billing period.",
    },
    {
      question: "How do I generate an API key?",
      answer:
        'API keys can be generated from your account dashboard. Navigate to "API Settings" and click on "Generate New Key". Make sure to store your key securely.',
    },
    {
      question: "What are the rate limits for the API?",
      answer:
        "Rate limits vary by plan. Basic plans include 1,000 requests per day, Professional plans include 10,000 requests per day, and Enterprise plans have customizable limits.",
    },
    {
      question: "How do I contact technical support?",
      answer:
        "You can contact our technical support team through the support form on this page, by emailing support@company.com, or by using the live chat feature in your dashboard.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial for all our plans. No credit card is required to start your trial.",
    },
  ]

  const supportOptions = [
    {
      title: "Email Support",
      description: "Get help via email from our support team.",
      icon: Mail,
      link: "#contact-form",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our support specialists.",
      icon: Phone,
      link: "#contact-info",
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time.",
      icon: MessageSquare,
      link: "/dashboard",
    },
    {
      title: "Documentation",
      description: "Browse our comprehensive documentation.",
      icon: FileText,
      link: "/api-services/documentation",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Support Center</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get the help you need with our comprehensive support resources and dedicated team.
          </p>
        </div>
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for help..."
              className="w-full bg-background pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {supportOptions.map((option, index) => {
          const Icon = option.icon
          return (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <Icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-0">
                <Button variant="outline" asChild className="w-full">
                  <Link href={option.link}>Get Support</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            Find quick answers to common questions about our products and services.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/resources/faq">
              View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Support Resources</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            Explore our self-service resources to find answers and solutions.
          </p>
        </div>
        <Tabs defaultValue="documentation" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
          <TabsContent value="documentation" className="p-6 border rounded-lg mt-6">
            <ul className="space-y-4">
              <li>
                <Link href="/api-services/documentation" className="text-primary hover:underline font-medium">
                  API Documentation
                </Link>
                <p className="text-muted-foreground mt-1">
                  Comprehensive documentation for our API endpoints, parameters, and responses.
                </p>
              </li>
              <li>
                <Link
                  href="/api-services/documentation/getting-started"
                  className="text-primary hover:underline font-medium"
                >
                  Getting Started Guide
                </Link>
                <p className="text-muted-foreground mt-1">
                  Step-by-step instructions for setting up and using our platform.
                </p>
              </li>
              <li>
                <Link href="/resources/guides" className="text-primary hover:underline font-medium">
                  User Guides
                </Link>
                <p className="text-muted-foreground mt-1">
                  Detailed guides for using specific features and functionalities.
                </p>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="tutorials" className="p-6 border rounded-lg mt-6">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/resources/guides/getting-started-guide"
                  className="text-primary hover:underline font-medium"
                >
                  Getting Started Tutorial
                </Link>
                <p className="text-muted-foreground mt-1">
                  A beginner-friendly tutorial to help you get started with our platform.
                </p>
              </li>
              <li>
                <Link
                  href="/resources/guides/api-authentication-methods"
                  className="text-primary hover:underline font-medium"
                >
                  API Authentication Tutorial
                </Link>
                <p className="text-muted-foreground mt-1">Learn how to authenticate your API requests securely.</p>
              </li>
              <li>
                <Link
                  href="/resources/guides/implementing-webhooks"
                  className="text-primary hover:underline font-medium"
                >
                  Webhooks Implementation
                </Link>
                <p className="text-muted-foreground mt-1">
                  A comprehensive guide to implementing webhooks for real-time notifications.
                </p>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="community" className="p-6 border rounded-lg mt-6">
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  Community Forum
                </Link>
                <p className="text-muted-foreground mt-1">
                  Connect with other users, share ideas, and get help from the community.
                </p>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  Developer Blog
                </Link>
                <p className="text-muted-foreground mt-1">
                  Stay updated with the latest news, tips, and best practices from our team.
                </p>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  GitHub Repository
                </Link>
                <p className="text-muted-foreground mt-1">
                  Access open-source tools, examples, and contribute to our projects.
                </p>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>

      <div id="contact-form" className="grid md:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>
              Fill out the form below and our support team will get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="bug">Bug Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your issue or question"
                    required
                    className="min-h-[120px]"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>

        <div id="contact-info" className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-muted-foreground">
              You can reach our support team through any of the following methods.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Email Support</h3>
                <p className="text-muted-foreground">support@company.com</p>
                <p className="text-muted-foreground text-sm">Response time: Within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Phone Support</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-muted-foreground text-sm">Available Monday-Friday, 9AM-5PM EST</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageSquare className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Live Chat</h3>
                <p className="text-muted-foreground">Available in your dashboard</p>
                <p className="text-muted-foreground text-sm">Available 24/7 for Premium and Enterprise plans</p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <Card className="bg-muted/40">
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Support Hours</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Monday - Friday: 9:00 AM - 8:00 PM EST</li>
                  <li>Saturday: 10:00 AM - 6:00 PM EST</li>
                  <li>Sunday: Closed (Email support only)</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Enterprise customers have access to 24/7 priority support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-muted/40 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Need immediate assistance?</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">
          For urgent issues, our premium support options provide faster response times and dedicated assistance.
        </p>
        <Button asChild>
          <Link href="/pricing">Explore Support Plans</Link>
        </Button>
      </div>
    </div>
  )
}

