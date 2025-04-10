import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function IntegrationsPage() {
  const integrationCategories = [
    {
      name: "CRM Systems",
      integrations: [
        { name: "Salesforce", image: "/placeholder.svg?height=60&width=120&text=Salesforce" },
        { name: "HubSpot", image: "/placeholder.svg?height=60&width=120&text=HubSpot" },
        { name: "Zoho CRM", image: "/placeholder.svg?height=60&width=120&text=Zoho" },
      ],
    },
    {
      name: "Marketing Platforms",
      integrations: [
        { name: "Mailchimp", image: "/placeholder.svg?height=60&width=120&text=Mailchimp" },
        { name: "Marketo", image: "/placeholder.svg?height=60&width=120&text=Marketo" },
        { name: "HubSpot Marketing", image: "/placeholder.svg?height=60&width=120&text=HubSpot" },
      ],
    },
    {
      name: "E-commerce",
      integrations: [
        { name: "Shopify", image: "/placeholder.svg?height=60&width=120&text=Shopify" },
        { name: "WooCommerce", image: "/placeholder.svg?height=60&width=120&text=WooCommerce" },
        { name: "Magento", image: "/placeholder.svg?height=60&width=120&text=Magento" },
      ],
    },
    {
      name: "Productivity Tools",
      integrations: [
        { name: "Slack", image: "/placeholder.svg?height=60&width=120&text=Slack" },
        { name: "Microsoft Teams", image: "/placeholder.svg?height=60&width=120&text=Teams" },
        { name: "Google Workspace", image: "/placeholder.svg?height=60&width=120&text=Google" },
      ],
    },
  ]

  const featuredIntegrations = [
    {
      name: "Salesforce",
      description: "Sync customer data, automate workflows, and enhance your CRM capabilities.",
      image: "/placeholder.svg?height=80&width=160&text=Salesforce",
      features: ["Two-way data sync", "Custom field mapping", "Automated workflows"],
    },
    {
      name: "Slack",
      description: "Get real-time notifications and collaborate with your team directly from our platform.",
      image: "/placeholder.svg?height=80&width=160&text=Slack",
      features: ["Real-time alerts", "Command integration", "Channel management"],
    },
    {
      name: "Shopify",
      description: "Streamline your e-commerce operations with our seamless Shopify integration.",
      image: "/placeholder.svg?height=80&width=160&text=Shopify",
      features: ["Order synchronization", "Inventory management", "Customer data import"],
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Integrations</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Connect our platform with your favorite tools and services to streamline your workflow.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild>
            <Link href="/api-services/documentation">View Documentation</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/company/contact">Request Integration</Link>
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Featured Integrations</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            Our most popular integrations that help businesses streamline their operations.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredIntegrations.map((integration, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="relative h-12 w-24">
                    <Image
                      src={integration.image || "/placeholder.svg"}
                      alt={integration.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <Badge variant="outline">Popular</Badge>
                </div>
                <CardTitle className="mt-4">{integration.name}</CardTitle>
                <CardDescription>{integration.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {integration.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/api-services/integrations/${integration.name.toLowerCase()}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">All Integrations</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            Browse our complete catalog of integrations by category.
          </p>
        </div>
        <Tabs defaultValue={integrationCategories[0].name} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {integrationCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {integrationCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.integrations.map((integration, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <div className="relative h-12 w-24 mb-4">
                        <Image
                          src={integration.image || "/placeholder.svg"}
                          alt={integration.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <CardTitle>{integration.name}</CardTitle>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href={`/api-services/integrations/${integration.name.toLowerCase()}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="bg-muted/40 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Don't see the integration you need?</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">
          We're constantly adding new integrations. Let us know what you need, and we'll work on making it available.
        </p>
        <Button asChild>
          <Link href="/company/contact">Request Integration</Link>
        </Button>
      </div>
    </div>
  )
}

