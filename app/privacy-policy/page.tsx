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
      <div className="container px-4 md:px-6 max-w-4xl py-12 space-y-10">
      {/* Introduction */}
      <section className="prose dark:prose-invert max-w-none">
        <h1 className="text-2xl font-bold">Introduction</h1>
        <p>
          We are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <p>
          Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
          please do not access the site or use our services.
        </p>
      </section>

      {/* Table Content */}
      <section className="overflow-x-auto">
        <table className="table-auto w-full border border-slate-300 dark:border-slate-700">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="border px-4 py-2 text-left">Section</th>
              <th className="border px-4 py-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-900">
            <tr>
              <td className="border px-4 py-2">Information We Collect</td>
              <td className="border px-4 py-2">From direct input, automatic collection, and third-party sources.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Information You Provide to Us</td>
              <td className="border px-4 py-2">
                When you:
                <ul className="list-disc pl-6">
                  <li>Create an account</li>
                  <li>Fill out a form</li>
                  <li>Subscribe to newsletter</li>
                  <li>Contact support</li>
                  <li>Participate in surveys/promotions</li>
                  <li>Make purchases</li>
                </ul>
                Includes name, email, address, phone, payment info, etc.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Information We Collect Automatically</td>
              <td className="border px-4 py-2">
                <ul className="list-disc pl-6">
                  <li>IP address</li>
                  <li>Device type & OS</li>
                  <li>Browser type/settings</li>
                  <li>Usage data & history</li>
                  <li>Cookies & tracking tech</li>
                  <li>API usage patterns/metrics</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">How We Use Your Information</td>
              <td className="border px-4 py-2">
                <ul className="list-disc pl-6">
                  <li>Provide/improve services</li>
                  <li>Process transactions</li>
                  <li>Send updates/support messages</li>
                  <li>Respond to inquiries</li>
                  <li>Communicate offers/events</li>
                  <li>Monitor trends/usage</li>
                  <li>Address technical issues</li>
                  <li>Fulfill legal obligations</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Sharing of Information</td>
              <td className="border px-4 py-2">
                Shared with:
                <ul className="list-disc pl-6">
                  <li>Service providers</li>
                  <li>Business partners</li>
                  <li>Affiliates/subsidiaries</li>
                  <li>In business transactions</li>
                  <li>When legally required</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Data Security</td>
              <td className="border px-4 py-2">
                Uses technical/organizational measures. No method is 100% secure.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Your Choices</td>
              <td className="border px-4 py-2">
                <ul className="list-disc pl-6">
                  <li><strong>Account Info:</strong> Can update via account</li>
                  <li><strong>Marketing:</strong> Opt out via email instructions</li>
                  <li><strong>Cookies:</strong> Disable via browser settings</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Children’s Privacy</td>
              <td className="border px-4 py-2">
                Not for children under 16. Data from minors will be deleted if discovered.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">International Data Transfers</td>
              <td className="border px-4 py-2">
                Data may be stored in locations with different laws.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Changes to Privacy Policy</td>
              <td className="border px-4 py-2">
                May update the policy. Changes posted with a new date.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Contact Us */}
      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <address className="not-italic">
          LastAppStanding<br />
          312 W. 2nd St<br />
          Casper, WY 82601<br />
          Email: <a href="mailto:privacy@lastappstanding.com" className="text-blue-700 hover:underline">privacy@lastappstanding.com</a><br />
          Phone: +1 (307) 555-0123
        </address>
      </section>
    </div>
      </section>
    </main>
  )
}

