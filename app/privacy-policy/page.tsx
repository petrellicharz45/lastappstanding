export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Privacy Policy
              </h1>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                Last updated: March 31, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Introduction</h2>
            <p>
              LastAppStanding ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website or use
              our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the site or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, information we obtain automatically when you use
              our services, and information from third-party sources.
            </p>

            <h3>Information You Provide to Us</h3>
            <p>We may collect information that you provide to us when you:</p>
            <ul>
              <li>Create an account or register for our services</li>
              <li>Fill out a form on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact our customer support</li>
              <li>Participate in surveys or promotions</li>
              <li>Make payments or purchases</li>
            </ul>
            <p>
              This information may include your name, email address, postal address, phone number, payment information,
              and any other information you choose to provide.
            </p>

            <h3>Information We Collect Automatically</h3>
            <p>
              When you use our services, we may automatically collect certain information about your device and usage,
              including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Device type and operating system</li>
              <li>Browser type and settings</li>
              <li>Usage data and browsing history</li>
              <li>Cookies and similar tracking technologies</li>
              <li>API usage patterns and metrics</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Sharing of Information</h2>
            <p>We may share your information with the following categories of third parties:</p>
            <ul>
              <li>Service providers who perform services on our behalf</li>
              <li>Business partners with whom we jointly offer products or services</li>
              <li>Affiliates and subsidiaries</li>
              <li>In connection with a business transaction (e.g., merger, acquisition, or sale)</li>
              <li>When required by law or to protect rights and safety</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information. However, please be aware that no method of transmission over the Internet or electronic
              storage is 100% secure.
            </p>

            <h2>Your Choices</h2>
            <p>You have certain choices regarding the information we collect and how it is used:</p>
            <ul>
              <li>
                Account Information: You can update or correct your account information at any time by logging into your
                account
              </li>
              <li>
                Marketing Communications: You can opt out of receiving promotional emails by following the instructions
                in those emails
              </li>
              <li>
                Cookies: Most web browsers are set to accept cookies by default. You can usually choose to set your
                browser to remove or reject cookies
              </li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to children under 16, and we do not knowingly collect personal information
              from children under 16. If we learn we have collected personal information from a child under 16, we will
              delete that information.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to, and maintained on, computers located outside of your state,
              province, country, or other governmental jurisdiction where the data protection laws may differ.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              LastAppStanding
              <br />
              312 W. 2nd St
              <br />
              Casper, WY 82601
              <br />
              Email: privacy@lastappstanding.com
              <br />
              Phone: +1 (307) 555-0123
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

