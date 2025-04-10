import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Clock } from "lucide-react"

export default function GuidesPage() {
  const categories = ["All", "Getting Started", "API Integration", "Best Practices", "Troubleshooting"]

  const guides = [
    {
      title: "Getting Started with Our Platform",
      description: "A comprehensive guide to help you set up your account and start using our platform.",
      image: "/placeholder.svg?height=200&width=400&text=Getting Started",
      category: "Getting Started",
      readTime: "10 min read",
      difficulty: "Beginner",
      slug: "getting-started-guide",
    },
    {
      title: "API Authentication Methods Explained",
      description: "Learn about the different authentication methods available for our API and how to implement them.",
      image: "/placeholder.svg?height=200&width=400&text=API Authentication",
      category: "API Integration",
      readTime: "15 min read",
      difficulty: "Intermediate",
      slug: "api-authentication-methods",
    },
    {
      title: "Optimizing API Performance",
      description: "Best practices and techniques for optimizing the performance of your API integrations.",
      image: "/placeholder.svg?height=200&width=400&text=API Performance",
      category: "Best Practices",
      readTime: "12 min read",
      difficulty: "Advanced",
      slug: "optimizing-api-performance",
    },
    {
      title: "Troubleshooting Common API Errors",
      description: "Solutions for common API errors and issues you might encounter during integration.",
      image: "/placeholder.svg?height=200&width=400&text=Troubleshooting",
      category: "Troubleshooting",
      readTime: "8 min read",
      difficulty: "Intermediate",
      slug: "troubleshooting-api-errors",
    },
    {
      title: "Implementing Webhooks",
      description: "A step-by-step guide to implementing webhooks for real-time event notifications.",
      image: "/placeholder.svg?height=200&width=400&text=Webhooks",
      category: "API Integration",
      readTime: "20 min read",
      difficulty: "Advanced",
      slug: "implementing-webhooks",
    },
    {
      title: "Data Security Best Practices",
      description: "Learn how to secure your data and protect your API integrations from security threats.",
      image: "/placeholder.svg?height=200&width=400&text=Data Security",
      category: "Best Practices",
      readTime: "15 min read",
      difficulty: "Intermediate",
      slug: "data-security-best-practices",
    },
  ]

  const featuredGuides = guides.slice(0, 3)

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Guides & Tutorials</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comprehensive resources to help you get the most out of our platform and services.
          </p>
        </div>
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search guides..." className="w-full bg-background pl-8" />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Featured Guides</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            Our most popular guides to help you get started and make the most of our platform.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredGuides.map((guide, index) => (
            <Card key={index} className="flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src={guide.image || "/placeholder.svg"}
                  alt={guide.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{guide.category}</Badge>
                  <Badge
                    variant={
                      guide.difficulty === "Beginner"
                        ? "secondary"
                        : guide.difficulty === "Intermediate"
                          ? "default"
                          : "destructive"
                    }
                  >
                    {guide.difficulty}
                  </Badge>
                </div>
                <CardTitle className="mt-2">{guide.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{guide.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  {guide.readTime}
                </div>
                <Button asChild>
                  <Link href={`/resources/guides/${guide.slug}`}>Read Guide</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">All Guides</h2>
        </div>
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="flex flex-wrap justify-center">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="All" className="mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <div className="relative h-40">
                    <Image
                      src={guide.image || "/placeholder.svg"}
                      alt={guide.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{guide.category}</Badge>
                      <Badge
                        variant={
                          guide.difficulty === "Beginner"
                            ? "secondary"
                            : guide.difficulty === "Intermediate"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="mt-2 text-lg">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 py-2">
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center pt-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {guide.readTime}
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/resources/guides/${guide.slug}`}>Read Guide</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          {categories.slice(1).map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides
                  .filter((guide) => guide.category === category)
                  .map((guide, index) => (
                    <Card key={index} className="flex flex-col h-full">
                      <div className="relative h-40">
                        <Image
                          src={guide.image || "/placeholder.svg"}
                          alt={guide.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{guide.category}</Badge>
                          <Badge
                            variant={
                              guide.difficulty === "Beginner"
                                ? "secondary"
                                : guide.difficulty === "Intermediate"
                                  ? "default"
                                  : "destructive"
                            }
                          >
                            {guide.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 text-lg">{guide.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 py-2">
                        <p className="text-sm text-muted-foreground">{guide.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center pt-2">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {guide.readTime}
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/resources/guides/${guide.slug}`}>Read Guide</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="flex justify-center">
        <Button variant="outline" size="lg">
          Load More Guides
        </Button>
      </div>

      <div className="bg-muted/40 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Can't find what you're looking for?</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">
          Our support team is here to help. Contact us with your questions or check out our API documentation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link href="/resources/support">Contact Support</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/api-services/documentation">View Documentation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

