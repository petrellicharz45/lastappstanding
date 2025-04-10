import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      id: "analytics",
      name: "Analytics Platform",
      description: "Powerful analytics tools to gain insights from your data and make informed decisions.",
      features: [
        "Real-time data processing",
        "Custom dashboards and reports",
        "Advanced visualization tools",
        "AI-powered insights",
        "Data export and integration",
      ],
      image: "/placeholder.svg?height=300&width=400&text=Analytics",
    },
    {
      id: "automation",
      name: "Workflow Automation",
      description: "Streamline your business processes with our intelligent automation solutions.",
      features: [
        "Visual workflow builder",
        "Pre-built automation templates",
        "Integration with 100+ apps",
        "Conditional logic and branching",
        "Error handling and notifications",
      ],
      image: "/placeholder.svg?height=300&width=400&text=Automation",
    },
    {
      id: "security",
      name: "Enterprise Security",
      description: "Protect your business with our comprehensive security solutions and compliance tools.",
      features: [
        "End-to-end encryption",
        "Advanced threat detection",
        "Compliance management",
        "Identity and access control",
        "Security auditing and reporting",
      ],
      image: "/placeholder.svg?height=300&width=400&text=Security",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Products</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our suite of innovative solutions designed to help your business thrive.
          </p>
        </div>
      </div>

      <Tabs defaultValue={products[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {products.map((product) => (
            <TabsTrigger key={product.id} value={product.id}>
              {product.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {products.map((product) => (
          <TabsContent key={product.id} value={product.id} className="mt-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge className="mb-2">Product</Badge>
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <p className="text-muted-foreground">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/products/${product.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Solutions by Industry</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            Our products are tailored to meet the specific needs of various industries.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Healthcare", "Finance", "Retail", "Manufacturing", "Technology", "Education"].map((industry) => (
            <Card key={industry}>
              <CardHeader>
                <CardTitle>{industry}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized solutions designed for the unique challenges and requirements of the{" "}
                  {industry.toLowerCase()} industry.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/industries/${industry.toLowerCase()}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted/40 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Need a custom solution?</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">
          Our team can work with you to develop tailored solutions that address your specific business challenges.
        </p>
        <Button asChild>
          <Link href="/company/contact">Contact Our Team</Link>
        </Button>
      </div>
    </div>
  )
}

