import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 15, 2025"

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-[250px_1fr] gap-8">
        <div className="space-y-4">
          <div className="font-medium">On This Page</div>
          <nav className="space-y-1">
            {[
              { title: "Introduction", href: "#introduction" },
              { title: "Information We Collect", href: "#information-we-collect" },
              { title: "How We Use Your Information", href: "#how-we-use-your-information" },
              { title: "Information Sharing", href: "#information-sharing" },
              { title: "Your Rights and Choices", href: "#your-rights-and-choices" },
              { title: "Data Security", href: "#data-security" },
              { title: "International Data Transfers", href: "#international-data-transfers" },
              { title: "Children's Privacy", href: "#childrens-privacy" },
              { title: "Changes to This Policy", href: "#changes-to-this-policy" },
              { title: "Contact Us", href: "#contact-us" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="block px-3 py-2 rounded-md hover:bg-muted">
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="pt-4 space-y-4">
            <Button variant="outline" asChild className="w-full">
              <Link href="/legal/terms-of-service">Terms of Service</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/legal/security">Security Policy</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/legal/compliance">Compliance</Link>
            </Button>
          </div>
        </div>
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                This Privacy Policy describes how we collect, use, and disclose your personal information when you use
                our services. By using our services, you agree to the collection and use of information in accordance
                with this policy.
              </p>
            </CardContent>
          </Card>

          <section id="introduction" className="space-y-4">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="text-muted-foreground">
              At Company, we take your privacy seriously. This Privacy Policy explains our practices regarding the
              collection, use, and disclosure of your information through our website, products, and services
              (collectively, the "Services").
            </p>
            <p className="text-muted-foreground">
              We are committed to protecting your personal information and ensuring you have control over how it is
              used. This policy outlines your rights and our obligations under applicable data protection laws.
            </p>
          </section>

          <Separator />

          <section id="information-we-collect" className="space-y-4">
            <h2 className="text-2xl font-bold">Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Information You Provide to Us</h3>
              <p className="text-muted-foreground">We collect information you provide directly to us when you:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Create an account or register for our services</li>
                <li>Fill out forms or surveys</li>
                <li>Communicate with us via email, phone, or other methods</li>
                <li>Subscribe to newsletters or marketing communications</li>
                <li>Make purchases or request services</li>
              </ul>
              <p className="text-muted-foreground">
                This information may include your name, email address, postal address, phone number, payment
                information, and any other information you choose to provide.
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <h3 className="text-xl font-medium">Information We Collect Automatically</h3>
              <p className="text-muted-foreground">
                When you use our Services, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Log information (IP address, browser type, pages visited, etc.)</li>
                <li>Device information (hardware model, operating system, unique device identifiers)</li>
                <li>Usage data (features used, actions taken, time spent)</li>
                <li>Location information (if permitted by your device settings)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          <Separator />

          <section id="how-we-use-your-information" className="space-y-4">
            <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide, maintain, and improve our Services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative messages, updates, and security alerts</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Provide customer service and technical support</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Personalize and improve your experience</li>
              <li>Develop new products and services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <Separator />

          <section id="information-sharing" className="space-y-4">
            <h2 className="text-2xl font-bold">Information Sharing</h2>
            <p className="text-muted-foreground">We may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>
                With vendors, consultants, and service providers who need access to such information to perform services
                on our behalf
              </li>
              <li>
                In response to a request for information if we believe disclosure is in accordance with applicable law
              </li>
              <li>If we believe your actions are inconsistent with our user agreements or policies</li>
              <li>To protect the rights, property, and safety of Company, our users, or the public</li>
              <li>
                In connection with, or during negotiations of, any merger, sale of company assets, financing, or
                acquisition
              </li>
              <li>With your consent or at your direction</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We may also share aggregated or de-identified information, which cannot reasonably be used to identify
              you.
            </p>
          </section>

          <Separator />

          <section id="your-rights-and-choices" className="space-y-4">
            <h2 className="text-2xl font-bold">Your Rights and Choices</h2>
            <p className="text-muted-foreground">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section
              below.
            </p>
          </section>

          <Separator />

          <section id="data-security" className="space-y-4">
            <h2 className="text-2xl font-bold">Data Security</h2>
            <p className="text-muted-foreground">
              We take reasonable measures to help protect your personal information from loss, theft, misuse,
              unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable,
              and we cannot guarantee the security of our systems.
            </p>
          </section>

          <Separator />

          <section id="international-data-transfers" className="space-y-4">
            <h2 className="text-2xl font-bold">International Data Transfers</h2>
            <p className="text-muted-foreground">
              We may transfer your personal information to countries other than the one in which you live. We deploy
              appropriate safeguards to ensure that your personal information receives an adequate level of protection
              in the countries in which we process it.
            </p>
          </section>

          <Separator />

          <section id="childrens-privacy" className="space-y-4">
            <h2 className="text-2xl font-bold">Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our Services are not directed to children under the age of 13, and we do not knowingly collect personal
              information from children under 13. If we learn that we have collected personal information from a child
              under 13, we will promptly delete that information.
            </p>
          </section>

          <Separator />

          <section id="changes-to-this-policy" className="space-y-4">
            <h2 className="text-2xl font-bold">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you by
              email or through our Services, or as otherwise required by applicable law. We encourage you to review the
              Privacy Policy whenever you access our Services.
            </p>
          </section>

          <Separator />

          <section id="contact-us" className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4">
              <p className="text-muted-foreground">Email: privacy@company.com</p>
              <p className="text-muted-foreground">
                Address: 123 Business Avenue, Suite 456, San Francisco, CA 94107, United States
              </p>
              <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-muted/40 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Have questions about our privacy practices?</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">
          Our team is here to help you understand how we protect your data and respect your privacy.
        </p>
        <Button asChild>
          <Link href="/company/contact">
            Contact Our Privacy Team <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

