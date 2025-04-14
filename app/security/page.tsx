export default function SecurityPage() {
    return (
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Terms of Service
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                  Effective Date: April 14, 2025
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Terms Content */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-4xl py-12 space-y-10">
            {/* Introduction */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-1xl font-bold">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website and services, you agree to be bound by these Terms of Service.
                If you do not agree, please do not use our services.
              </p>
  
              <h2 className="text-1xl font-bold">2. Use of Services</h2>
              <p>
                You agree to use the services only for lawful purposes and in accordance with these terms.
                You may not use the services for any illegal or unauthorized purpose.
              </p>
  
              <h2 className="text-1xl font-bold">3. User Accounts</h2>
              <p>
                If you create an account with us, you are responsible for maintaining the confidentiality of your
                account and password and for restricting access to your device.
              </p>
  
              <h2 className="text-1xl font-bold">4. Intellectual Property</h2>
              <p>
                All content, trademarks, and data on this website are the property of LastAppStanding or its licensors.
                You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
  
              <h2 className="text-1xl font-bold">5. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the services at any time, without notice or
                liability, if you breach these terms.
              </p>
  
              <h2 className="text-1xl font-bold">6. Limitation of Liability</h2>
              <p>
                In no event shall LastAppStanding be liable for any indirect, incidental, or consequential damages
                arising out of your use or inability to use the services.
              </p>
  
              <h2 className="text-1xl font-bold">7. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless LastAppStanding, its affiliates, and employees from any claims,
                damages, or expenses arising from your use of the services or your violation of these terms.
              </p>
  
              <h2 className="text-1xl font-bold">8. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the State of Wyoming,
                without regard to its conflict of law principles.
              </p>
  
              <h2 className="text-1xl font-bold">9. Changes to Terms</h2>
              <p>
                We may revise these Terms of Service from time to time. Any changes will be posted on this page
                with an updated effective date. Continued use of the services indicates your acceptance of the revised terms.
              </p>
  
              <h2 className="text-1xl font-bold">10. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
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
  