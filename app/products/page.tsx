import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BrainCircuit, FileText, Code } from "lucide-react"

export default function ProductsPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our AI API Services
              </h1>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                Powerful, flexible, and easy-to-integrate generative AI solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="text" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="text">Text</TabsTrigger>
                <TabsTrigger value="image">Image</TabsTrigger>
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="text" className="mt-4">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Text Generation API</h2>
                    <p className="text-slate-500 dark:text-slate-400">
                      Our Text Generation API allows you to create human-quality text for a wide range of applications,
                      from content creation to summarization and more.
                    </p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>Advanced language models with state-of-the-art performance</p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>Customizable outputs with fine-tuning capabilities</p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>Multi-language support for global applications</p>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/documentation">
                      <Button className="px-8">View Documentation</Button>
                    </Link>
                    <Link href="/pricing">
                      <Button variant="outline" className="px-8">
                        See Pricing
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Card className="w-full max-w-md border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle>Example: Text Generation</CardTitle>
                      <CardDescription>Generate creative content with a simple API call</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`// Request
fetch('https://api.lastappstanding.com/v1/text/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    prompt: 'Write a short story about a robot learning to paint',
    max_tokens: 150,
    temperature: 0.7
  })
})`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="image" className="mt-4">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Image Generation API</h2>
                    <p className="text-slate-500 dark:text-slate-400">
                      Create stunning, realistic images from text descriptions with our powerful Image Generation API.
                    </p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>High-resolution image generation from text prompts</p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>Style customization and artistic control</p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>Fast processing for real-time applications</p>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/documentation">
                      <Button className="px-8">View Documentation</Button>
                    </Link>
                    <Link href="/pricing">
                      <Button variant="outline" className="px-8">
                        See Pricing
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Card className="w-full max-w-md border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle>Example: Image Generation</CardTitle>
                      <CardDescription>Create images from text descriptions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`// Request
fetch('https://api.lastappstanding.com/v1/image/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    prompt: 'A futuristic city with flying cars and neon lights',
    size: '1024x1024',
    style: 'realistic'
  })
})`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="chat" className="mt-4">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Conversational AI API</h2>
                    <p className="text-slate-500 dark:text-slate-400">
                      Build engaging, context-aware chatbots and virtual assistants with our Conversational AI API.
                    </p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>Natural, human-like conversations with memory</p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>Customizable personality and tone</p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>Integration with knowledge bases and external data</p>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/documentation">
                      <Button className="px-8">View Documentation</Button>
                    </Link>
                    <Link href="/pricing">
                      <Button variant="outline" className="px-8">
                        See Pricing
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Card className="w-full max-w-md border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle>Example: Chat Completion</CardTitle>
                      <CardDescription>Create interactive conversational experiences</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`// Request
fetch('https://api.lastappstanding.com/v1/chat/complete', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'How do I implement a recommendation system?' }
    ],
    temperature: 0.7
  })
})`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="code" className="mt-4">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Code Generation API</h2>
                    <p className="text-slate-500 dark:text-slate-400">
                      Accelerate development with our Code Generation API that can write, explain, and debug code across
                      multiple programming languages.
                    </p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>Support for over 20 programming languages</p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>Code completion and suggestion capabilities</p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                        <p>Bug detection and automated fixes</p>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/documentation">
                      <Button className="px-8">View Documentation</Button>
                    </Link>
                    <Link href="/pricing">
                      <Button variant="outline" className="px-8">
                        See Pricing
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Card className="w-full max-w-md border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle>Example: Code Generation</CardTitle>
                      <CardDescription>Generate code from natural language descriptions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`// Request
fetch('https://api.lastappstanding.com/v1/code/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    prompt: 'Create a React component that displays a list of items with pagination',
    language: 'javascript',
    comments: true
  })
})`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our API Services</h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                Built for developers, by developers
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 w-fit">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">State-of-the-Art Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 dark:text-slate-400">
                  Access the most advanced AI models with continuous improvements and updates.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 w-fit">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Developer-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 dark:text-slate-400">
                  Comprehensive documentation, SDKs for popular languages, and responsive support.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 w-fit">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Flexible Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 dark:text-slate-400">
                  Easy integration with your existing applications and workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up today and get access to our powerful AI APIs.
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

