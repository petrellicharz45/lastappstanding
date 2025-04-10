import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Book, FileText, Code, ArrowRight } from "lucide-react"

export default function DocumentationPage() {
  const guides = [
    {
      title: "Getting Started",
      description: "Learn the basics and set up your first project",
      icon: Book,
      link: "/api-services/documentation/getting-started",
    },
    {
      title: "Authentication",
      description: "Secure your API requests with proper authentication",
      icon: FileText,
      link: "/api-services/documentation/authentication",
    },
    {
      title: "API Reference",
      description: "Detailed documentation of all available endpoints",
      icon: Code,
      link: "/api-services/reference",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Documentation</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comprehensive guides and references to help you integrate and use our API services.
          </p>
        </div>
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search documentation..." className="w-full bg-background pl-8" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {guides.map((guide, index) => {
          const Icon = guide.icon
          return (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <Icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-end">
                <Button variant="outline" asChild className="w-full">
                  <Link href={guide.link}>
                    View Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Documentation Topics</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            Browse our documentation by category to find the information you need.
          </p>
        </div>
        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="guides" className="p-6 border rounded-lg mt-6">
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  Introduction to our API
                </Link>
                <p className="text-muted-foreground mt-1">Learn about the core concepts and architecture of our API.</p>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  Authentication and Authorization
                </Link>
                <p className="text-muted-foreground mt-1">
                  Understand how to secure your API requests and manage access.
                </p>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  Error Handling
                </Link>
                <p className="text-muted-foreground mt-1">Learn how to handle and troubleshoot common API errors.</p>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  Rate Limiting and Quotas
                </Link>
                <p className="text-muted-foreground mt-1">
                  Understand our rate limits and how to optimize your API usage.
                </p>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="tutorials" className="p-6 border rounded-lg mt-6">
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  Building Your First Integration
                </Link>
                <p className="text-muted-foreground mt-1">
                  Step-by-step tutorial for creating your first API integration.
                </p>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  Real-time Data Processing
                </Link>
                <p className="text-muted-foreground mt-1">
                  Learn how to process and analyze data in real-time using our API.
                </p>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  Implementing Webhooks
                </Link>
                <p className="text-muted-foreground mt-1">
                  Tutorial on setting up and managing webhooks for event notifications.
                </p>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="examples" className="p-6 border rounded-lg mt-6">
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  JavaScript SDK Examples
                </Link>
                <p className="text-muted-foreground mt-1">
                  Code examples for using our JavaScript SDK in various scenarios.
                </p>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  Python Client Examples
                </Link>
                <p className="text-muted-foreground mt-1">Sample code for integrating with our API using Python.</p>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline font-medium">
                  REST API Examples
                </Link>
                <p className="text-muted-foreground mt-1">
                  Examples of direct REST API calls using curl and other tools.
                </p>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="faq" className="p-6 border rounded-lg mt-6">
            <ul className="space-y-4">
              <li>
                <h3 className="font-medium">How do I get an API key?</h3>
                <p className="text-muted-foreground mt-1">
                  You can generate an API key from your account dashboard after signing up for an account.
                </p>
              </li>
              <li>
                <h3 className="font-medium">What are the rate limits for the API?</h3>
                <p className="text-muted-foreground mt-1">
                  Rate limits vary by plan. Basic plans include 1,000 requests per day, while higher tiers offer
                  increased limits.
                </p>
              </li>
              <li>
                <h3 className="font-medium">Is there a sandbox environment for testing?</h3>
                <p className="text-muted-foreground mt-1">
                  Yes, we provide a sandbox environment for all accounts to test your integrations before going live.
                </p>
              </li>
              <li>
                <h3 className="font-medium">How do I report a bug or issue?</h3>
                <p className="text-muted-foreground mt-1">
                  You can report bugs through our support portal or by contacting our support team directly.
                </p>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-muted/40 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Need help with integration?</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">
          Our team of experts is ready to assist you with your implementation and answer any questions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link href="/resources/support">Contact Support</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/company/contact">Request Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

