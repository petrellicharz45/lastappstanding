import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-16">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Our Company</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Learn about our mission, vision, and the team behind our success.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2023, our company began with a simple mission: to create innovative solutions that empower
            businesses to thrive in the digital age. What started as a small team of passionate technologists has grown
            into a global organization serving clients across industries.
          </p>
          <p className="text-muted-foreground">
            Through years of dedication and continuous innovation, we've established ourselves as a leader in our field,
            known for our commitment to excellence, customer satisfaction, and cutting-edge technology.
          </p>
        </div>
        <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=600&width=800" alt="Company office" fill className="object-cover" />
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            These core principles guide everything we do and shape our company culture.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries and explore new ideas to deliver cutting-edge solutions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with honesty, transparency, and ethical standards in all our interactions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest quality in everything we create and deliver.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and partnership to achieve remarkable results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Leadership Team</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            Meet the experienced professionals guiding our company's vision and growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3">
              <div className="relative h-40 w-40 rounded-full overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=160&width=160&text=Team Member ${i}`}
                  alt={`Team member ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Jane Doe</h3>
                <p className="text-muted-foreground">Chief Executive Officer</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Tabs defaultValue="mission" className="w-full max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="vision">Vision</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>
        <TabsContent value="mission" className="p-6 border rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-muted-foreground">
            To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive
            advantage in an ever-evolving digital landscape.
          </p>
        </TabsContent>
        <TabsContent value="vision" className="p-6 border rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p className="text-muted-foreground">
            To be the global leader in transformative technology solutions, recognized for our innovation, excellence,
            and positive impact on businesses and communities worldwide.
          </p>
        </TabsContent>
        <TabsContent value="goals" className="p-6 border rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-2">Strategic Goals</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Expand our global presence to serve clients in new markets</li>
            <li>Continuously innovate our product offerings to meet evolving needs</li>
            <li>Foster a diverse and inclusive workplace that attracts top talent</li>
            <li>Maintain the highest standards of security and compliance</li>
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )
}

