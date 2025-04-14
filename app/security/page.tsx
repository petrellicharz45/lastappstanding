import { Download } from "lucide-react";
export default function SecurityPolicyPage() {
    return (
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full py-20 px-4 text-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white shadow-md">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">Security Policy</h1>
        <p className="mt-4 text-lg md:text-2xl opacity-90">
          Last Updated: March 31, 2025
        </p>

        {/* PDF Download Button */}
        <a
          href="/SecurityPolicy.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300"
        >
          <Download size={18} />
          Download PDF
        </a>
      </section>
  
        {/* Security Policy Content */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-4xl py-12 space-y-10">
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-1xl font-bold">1. Data Protection</h2>
              <p>
                We implement industry-standard measures to safeguard user data against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
  
              <h2 className="text-1xl font-bold">2. Encryption Practices</h2>
              <p>
                All sensitive information is encrypted in transit and at rest using modern encryption protocols
                such as TLS and AES.
              </p>
  
              <h2 className="text-1xl font-bold">3. Access Control</h2>
              <p>
                Only authorized personnel are granted access to systems and data based on the principle of
                least privilege.
              </p>
  
              <h2 className="text-1xl font-bold">4. Regular Audits</h2>
              <p>
                We conduct regular security audits and vulnerability assessments to identify and address
                potential risks proactively.
              </p>
  
              <h2 className="text-1xl font-bold">5. Incident Response</h2>
              <p>
                In the event of a security breach, we follow a well-defined incident response plan to contain,
                mitigate, and report the issue in a timely manner.
              </p>
  
              <h2 className="text-1xl font-bold">6. Third-Party Services</h2>
              <p>
                We ensure that any third-party services integrated with our platform meet strict security
                and compliance standards.
              </p>
  
              <h2 className="text-1xl font-bold">7. User Responsibility</h2>
              <p>
                Users are responsible for keeping their login credentials confidential and reporting
                suspicious activities immediately.
              </p>
  
              <h2 className="text-1xl font-bold">8. Policy Updates</h2>
              <p>
                We may update this Security Policy from time to time. Any changes will be posted on this page
                with an updated effective date.
              </p>
  
              <h2 className="text-1xl font-bold">9. Contact Us</h2>
              <p>If you have any questions about this Security Policy, please contact us at:</p>
              <address className="not-italic">
                LastAppStanding<br />
                312 W. 2nd St<br />
                Casper, WY 82601<br />
                Email: <a href="mailto:support@lastappstanding.com" className="text-blue-700 hover:underline">support@lastappstanding.com</a><br />
                Phone: +1 (307) 555-0123
              </address>
            </section>
          </div>
        </section>
      </main>
    );
  }
  