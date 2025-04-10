import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Copy, ExternalLink } from "lucide-react"

export default function ApiReferencePage() {
  const endpoints = [
    {
      category: "Authentication",
      items: [
        { method: "POST", path: "/auth/token", description: "Generate an access token" },
        { method: "POST", path: "/auth/refresh", description: "Refresh an expired token" },
        { method: "POST", path: "/auth/revoke", description: "Revoke an active token" },
      ],
    },
    {
      category: "Users",
      items: [
        { method: "GET", path: "/users", description: "List all users" },
        { method: "GET", path: "/users/{id}", description: "Get a specific user" },
        { method: "POST", path: "/users", description: "Create a new user" },
        { method: "PUT", path: "/users/{id}", description: "Update a user" },
        { method: "DELETE", path: "/users/{id}", description: "Delete a user" },
      ],
    },
    {
      category: "Products",
      items: [
        { method: "GET", path: "/products", description: "List all products" },
        { method: "GET", path: "/products/{id}", description: "Get a specific product" },
        { method: "POST", path: "/products", description: "Create a new product" },
        { method: "PUT", path: "/products/{id}", description: "Update a product" },
        { method: "DELETE", path: "/products/{id}", description: "Delete a product" },
      ],
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">API Reference</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Complete reference documentation for our API endpoints, parameters, and responses.
          </p>
        </div>
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search API endpoints..." className="w-full bg-background pl-8" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-[250px_1fr] gap-8">
        <div className="space-y-4">
          <div className="font-medium">API Sections</div>
          <nav className="space-y-1">
            {endpoints.map((category) => (
              <Link
                key={category.category}
                href={`#${category.category.toLowerCase()}`}
                className="block px-3 py-2 rounded-md hover:bg-muted"
              >
                {category.category}
              </Link>
            ))}
          </nav>
          <div className="pt-4">
            <Button variant="outline" asChild className="w-full">
              <Link href="/api-services/documentation">Back to Documentation</Link>
            </Button>
          </div>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>API Base URL</CardTitle>
              <CardDescription>Use this as the base URL for all API requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-3 bg-muted rounded-md font-mono text-sm">
                <code>https://api.company.com/v1</code>
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {endpoints.map((category) => (
            <div key={category.category} id={category.category.toLowerCase()} className="space-y-4">
              <h2 className="text-2xl font-bold">{category.category}</h2>
              <div className="space-y-4">
                {category.items.map((endpoint, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`inline-block px-2 py-1 text-xs font-medium rounded-md ${
                              endpoint.method === "GET"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : endpoint.method === "POST"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                  : endpoint.method === "PUT"
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            }`}
                          >
                            {endpoint.method}
                          </span>
                          <code className="font-mono text-sm">{endpoint.path}</code>
                        </div>
                        <Button variant="ghost" size="icon" asChild>
                          <Link
                            href={`/api-services/reference/${category.category.toLowerCase()}/${endpoint.path.split("/").pop()}`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{endpoint.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted/40 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Need more information?</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">
          Check out our detailed documentation guides or contact our support team for assistance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link href="/api-services/documentation">View Documentation</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resources/support">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

