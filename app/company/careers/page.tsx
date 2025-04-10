import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight } from "lucide-react"

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "We are looking for a Senior Software Engineer to join our team and help build innovative solutions for our clients.",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      description: "Join our product team to help define and execute our product strategy and roadmap.",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description:
        "We are seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our products.",
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Help us grow our brand and reach new customers through innovative marketing campaigns.",
    },
    {
      id: 5,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Work directly with our customers to ensure they get the most value from our products.",
    },
    {
      id: 6,
      title: "Sales Representative",
      department: "Sales",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Join our sales team to help businesses discover how our solutions can solve their challenges.",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover exciting career opportunities and be part of our mission to innovate and transform.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild>
            <Link href="#openings">View Open Positions</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#benefits">Employee Benefits</Link>
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Why Work With Us</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            Join a team of passionate professionals dedicated to innovation and excellence.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Innovation-Driven Culture</h3>
              <p className="text-muted-foreground">
                We foster creativity and encourage new ideas to solve complex challenges.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Professional Growth</h3>
              <p className="text-muted-foreground">
                We invest in your development with mentorship, training, and advancement opportunities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                We value your well-being and offer flexible work arrangements to support your lifestyle.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div id="benefits" className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Employee Benefits</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            We offer a comprehensive benefits package to support our team members.
          </p>
        </div>
        <Tabs defaultValue="health" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="health">Health</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="time-off">Time Off</TabsTrigger>
            <TabsTrigger value="perks">Perks</TabsTrigger>
          </TabsList>
          <TabsContent value="health" className="p-6 border rounded-lg mt-6">
            <ul className="space-y-2">
              <li>Comprehensive medical, dental, and vision insurance</li>
              <li>Mental health resources and support</li>
              <li>Wellness programs and fitness reimbursements</li>
              <li>Health savings and flexible spending accounts</li>
            </ul>
          </TabsContent>
          <TabsContent value="financial" className="p-6 border rounded-lg mt-6">
            <ul className="space-y-2">
              <li>Competitive salary and performance bonuses</li>
              <li>401(k) retirement plan with company match</li>
              <li>Stock options and equity grants</li>
              <li>Financial planning resources</li>
            </ul>
          </TabsContent>
          <TabsContent value="time-off" className="p-6 border rounded-lg mt-6">
            <ul className="space-y-2">
              <li>Generous paid time off and holidays</li>
              <li>Parental leave for all parents</li>
              <li>Sabbatical program for long-term employees</li>
              <li>Volunteer time off</li>
            </ul>
          </TabsContent>
          <TabsContent value="perks" className="p-6 border rounded-lg mt-6">
            <ul className="space-y-2">
              <li>Flexible and remote work options</li>
              <li>Professional development budget</li>
              <li>Company-sponsored events and team building</li>
              <li>Employee discount programs</li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>

      <div id="openings" className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Current Openings</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            Explore our current job opportunities and find your next career move.
          </p>
        </div>
        <div className="grid gap-6">
          {jobOpenings.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.department}</CardDescription>
                  </div>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{job.description}</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {job.location}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/company/careers/${job.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted/40 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Don't see the right fit?</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">
          We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind
          for future opportunities.
        </p>
        <Button asChild>
          <Link href="/company/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}

