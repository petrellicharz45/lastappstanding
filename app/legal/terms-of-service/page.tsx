import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"

export default function TermsOfServicePage() {
  const lastUpdated = "March 15, 2025"

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
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
              { title: "Agreement to Terms", href: "#agreement-to-terms" },
              { title: "Intellectual Property Rights", href: "#intellectual-property-rights" },
              { title: "User Accounts", href: "#user-accounts" },
              { title: "Prohibited Activities", href: "#prohibited-activities" },
              { title: "Service Modifications", href: "#service-modifications" },
              { title: "Billing and Payments", href: "#billing-and-payments" },
              { title: "Termination", href: "#termination" },
              { title: "Limitation of Liability", href: "#limitation-of-liability" },
              { title: "Indemnification", href: "#indemnification" },
              { title: "Governing Law", href: "#governing-law" },
              { title: "Dispute Resolution", href: "#dispute-resolution" },
              { title: "Changes to Terms", href: "#changes-to-terms" },
              { title: "Contact Us", href: "#contact-us" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="block px-3 py-2 rounded-md hover:bg-muted">
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="pt-4 space-y-4">
            <Button variant="outline" asChild className="w-full">
              <Link href="/legal/privacy-policy">Privacy Policy</Link>
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
                These Terms of Service ("Terms") govern your access to and use of our website, products, and services
                (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these
                Terms. If you do not agree to these Terms, you may not access or use the Services.
              </p>
            </CardContent>
          </Card>

          <section id="agreement-to-terms" className="space-y-4">
            <h2 className="text-2xl font-bold">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you
              are using our Services on behalf of an organization, you are agreeing to these Terms on behalf of that
              organization, and you represent and warrant that you have the authority to bind that organization to these
              Terms.
            </p>
          </section>

          <Separator />

          <section id="intellectual-property-rights" className="space-y-4">
            <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Our Intellectual Property</h3>
              <p className="text-muted-foreground">
                The Services and all content, features, and functionality thereof, including but not limited to all
                information, software, text, displays, images, video, audio, design, and the design, selection, and
                arrangement thereof, are owned by us, our licensors, or other providers of such material and are
                protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary
                rights laws.
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <h3 className="text-xl font-medium">License to Use</h3>
              <p className="text-muted-foreground">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable,
                and revocable license to access and use the Services for your personal or internal business purposes.
                This license does not include the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained in the Services</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>
          </section>

          <Separator />

          <section id="user-accounts" className="space-y-4">
            <h2 className="text-2xl font-bold">User Accounts</h2>
            <p className="text-muted-foreground">
              To access certain features of the Services, you may be required to create an account. You are responsible
              for maintaining the confidentiality of your account credentials and for all activities that occur under
              your account. You agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide accurate, current, and complete information during the registration process</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorized use of your account or any other breach of security</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We reserve the right to suspend or terminate your account if any information provided during the
              registration process or thereafter proves to be inaccurate, not current, or incomplete.
            </p>
          </section>

          <Separator />

          <section id="prohibited-activities" className="space-y-4">
            <h2 className="text-2xl font-bold">Prohibited Activities</h2>
            <p className="text-muted-foreground">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Violating any applicable laws, regulations, or third-party rights</li>
              <li>Using the Services for any illegal or unauthorized purpose</li>
              <li>
                Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions
                to or from the servers running the Services
              </li>
              <li>Imposing an unreasonable or disproportionately large load on our infrastructure</li>
              <li>Uploading invalid data, viruses, worms, or other software agents through the Services</li>
              <li>Collecting or harvesting any personally identifiable information from the Services</li>
              <li>Using the Services for any commercial solicitation purposes without our prior written consent</li>
              <li>
                Impersonating another person or otherwise misrepresenting your affiliation with a person or entity
              </li>
            </ul>
          </section>

          <Separator />

          <section id="service-modifications" className="space-y-4">
            <h2 className="text-2xl font-bold">Service Modifications</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify, suspend, or discontinue the Services (or any part or content thereof) at
              any time with or without notice. We shall not be liable to you or to any third party for any modification,
              suspension, or discontinuance of the Services.
            </p>
          </section>

          <Separator />

          <section id="billing-and-payments" className="space-y-4">
            <h2 className="text-2xl font-bold">Billing and Payments</h2>
            <p className="text-muted-foreground">
              Certain aspects of the Services may be provided for a fee. You agree to pay all fees associated with the
              Services you purchase or use in accordance with the pricing and payment terms presented to you. You will
              provide us with a valid credit card or other payment method information and authorize us to charge your
              credit card or other payment method for all fees incurred.
            </p>
            <p className="text-muted-foreground mt-4">
              All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you shall be
              responsible for payment of all such taxes, levies, or duties.
            </p>
            <p className="text-muted-foreground mt-4">
              Subscription fees are non-refundable except as expressly set forth in these Terms or as required by
              applicable law.
            </p>
          </section>

          <Separator />

          <section id="termination" className="space-y-4">
            <h2 className="text-2xl font-bold">Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your account and access to the Services immediately, without prior notice or
              liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p className="text-muted-foreground mt-4">
              Upon termination, your right to use the Services will immediately cease. If you wish to terminate your
              account, you may simply discontinue using the Services or contact us to request account deletion.
            </p>
          </section>

          <Separator />

          <section id="limitation-of-liability" className="space-y-4">
            <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall we, our directors, employees, partners, agents, suppliers, or affiliates, be liable for
              any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss
              of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Your access to or use of or inability to access or use the Services</li>
              <li>Any conduct or content of any third party on the Services</li>
              <li>Any content obtained from the Services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <Separator />

          <section id="indemnification" className="space-y-4">
            <h2 className="text-2xl font-bold">Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to defend, indemnify, and hold harmless us, our affiliates, licensors, and service providers,
              and our and their respective officers, directors, employees, contractors, agents, licensors, suppliers,
              successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses,
              costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
              violation of these Terms or your use of the Services.
            </p>
          </section>

          <Separator />

          <section id="governing-law" className="space-y-4">
            <h2 className="text-2xl font-bold">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without
              regard to its conflict of law provisions.
            </p>
          </section>

          <Separator />

          <section id="dispute-resolution" className="space-y-4">
            <h2 className="text-2xl font-bold">Dispute Resolution</h2>
            <p className="text-muted-foreground">
              Any disputes arising out of or related to these Terms or the Services shall be resolved through binding
              arbitration in accordance with the rules of [Arbitration Association] in [Your Jurisdiction]. The
              arbitration shall be conducted by a single arbitrator, and the award of the arbitrator shall be final and
              binding.
            </p>
          </section>

          <Separator />

          <section id="changes-to-terms" className="space-y-4">
            <h2 className="text-2xl font-bold">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-muted-foreground mt-4">
              By continuing to access or use our Services after any revisions become effective, you agree to be bound by
              the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Services.
            </p>
          </section>

          <Separator />

          <section id="contact-us" className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground">If you have any questions about these Terms, please contact us at:</p>
            <div className="mt-4">
              <p className="text-muted-foreground">Email: legal@company.com</p>
              <p className="text-muted-foreground">
                Address: 123 Business Avenue, Suite 456, San Francisco, CA 94107, United States
              </p>
              <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-muted/40 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Have questions about our terms?</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">
          Our legal team is available to help you understand our terms and conditions.
        </p>
        <Button asChild>
          <Link href="/company/contact">
            Contact Our Legal Team <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

