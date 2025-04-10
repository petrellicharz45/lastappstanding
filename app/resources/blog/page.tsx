import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "Introducing Our New API Features",
    excerpt:
      "We're excited to announce the launch of our latest API features designed to enhance your development experience and provide more powerful integration options.",
    image: "/placeholder.svg?height=400&width=800&text=Featured Post",
    author: "Jane Smith",
    date: "March 15, 2025",
    category: "Product Updates",
    slug: "introducing-new-api-features",
  }

  const categories = ["All", "Product Updates", "Tutorials", "Case Studies", "Industry Insights"]

  const posts = [
    {
      title: "How to Optimize Your API Usage",
      excerpt: "Learn best practices for optimizing your API usage to improve performance and reduce costs.",
      image: "/placeholder.svg?height=200&width=400&text=API Optimization",
      author: "John Doe",
      date: "March 10, 2025",
      category: "Tutorials",
      slug: "optimize-api-usage",
    },
    {
      title: "Case Study: How Company X Increased Efficiency by 200%",
      excerpt: "Discover how Company X leveraged our platform to dramatically improve their operational efficiency.",
      image: "/placeholder.svg?height=200&width=400&text=Case Study",
      author: "Sarah Johnson",
      date: "March 5, 2025",
      category: "Case Studies",
      slug: "company-x-case-study",
    },
    {
      title: "The Future of API Development",
      excerpt: "Explore emerging trends and technologies that will shape the future of API development.",
      image: "/placeholder.svg?height=200&width=400&text=Future of APIs",
      author: "Michael Brown",
      date: "February 28, 2025",
      category: "Industry Insights",
      slug: "future-of-api-development",
    },
    {
      title: "Security Best Practices for API Integration",
      excerpt: "Implement these security measures to protect your API integrations from common vulnerabilities.",
      image: "/placeholder.svg?height=200&width=400&text=API Security",
      author: "Emily Chen",
      date: "February 20, 2025",
      category: "Tutorials",
      slug: "api-security-best-practices",
    },
    {
      title: "Quarterly Product Update: Q1 2025",
      excerpt: "A comprehensive overview of all the new features and improvements released in Q1 2025.",
      image: "/placeholder.svg?height=200&width=400&text=Q1 Update",
      author: "David Wilson",
      date: "February 15, 2025",
      category: "Product Updates",
      slug: "q1-2025-product-update",
    },
    {
      title: "How to Build a Scalable Architecture with Our API",
      excerpt: "A step-by-step guide to building a scalable and resilient architecture using our API services.",
      image: "/placeholder.svg?height=200&width=400&text=Scalable Architecture",
      author: "Alex Rodriguez",
      date: "February 10, 2025",
      category: "Tutorials",
      slug: "build-scalable-architecture",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Insights, tutorials, and updates from our team to help you get the most out of our products.
          </p>
        </div>
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search articles..." className="w-full bg-background pl-8" />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Featured Post</h2>
        </div>
        <Card className="overflow-hidden">
          <div className="md:grid md:grid-cols-2">
            <div className="relative h-60 md:h-auto">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <Badge>{featuredPost.category}</Badge>
                <CardTitle className="text-2xl md:text-3xl">{featuredPost.title}</CardTitle>
                <CardDescription className="text-base">{featuredPost.excerpt}</CardDescription>
              </div>
              <div className="pt-6 space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="flex items-center mr-4">
                    <Calendar className="mr-1 h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    {featuredPost.author}
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/resources/blog/${featuredPost.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Latest Articles</h2>
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
              {posts.map((post, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle className="mt-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/resources/blog/${post.slug}`}>Read Article</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          {categories.slice(1).map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts
                  .filter((post) => post.category === category)
                  .map((post, index) => (
                    <Card key={index} className="flex flex-col h-full">
                      <div className="relative h-48">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{post.category}</Badge>
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                        </div>
                        <CardTitle className="mt-2">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="outline" asChild className="w-full">
                          <Link href={`/resources/blog/${post.slug}`}>Read Article</Link>
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
          Load More Articles
        </Button>
      </div>

      <div className="bg-muted/40 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">
          Stay up-to-date with our latest articles, tutorials, and product updates delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="flex-1" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </div>
  )
}

