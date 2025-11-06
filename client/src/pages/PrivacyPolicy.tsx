export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                1. Introduction
              </h2>
              <p className="text-foreground leading-relaxed">
                Dawu Msendo Trading and Projects (Pty) Ltd ("we," "our," or
                "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services,
                in compliance with the Protection of Personal Information Act
                (POPIA) of South Africa.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                2. Information We Collect
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-foreground">
                <li>
                  Personal identification information (name, email address,
                  phone number)
                </li>
                <li>Project details and service inquiries</li>
                <li>
                  Communication records (emails, contact form submissions,
                  calls)
                </li>
                <li>
                  Technical data (IP address, browser type, device information)
                </li>
                <li>Usage data (pages visited, time spent on site)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                We use the collected information for:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-foreground">
                <li>Responding to your inquiries and providing quotes</li>
                <li>Processing and managing project contracts</li>
                <li>Improving our website and services</li>
                <li>
                  Sending relevant updates about projects and services (with
                  consent)
                </li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to
                third parties. We may share information with trusted service
                providers who assist in operating our website and conducting
                business, under strict confidentiality agreements. We may also
                disclose information when required by law or to protect our
                rights and safety.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                5. Data Security
              </h2>
              <p className="text-foreground leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                internet transmission is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                6. Your Rights Under POPIA
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Under POPIA, you have the right to:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-foreground">
                <li>
                  Access your personal information we hold about you
                </li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>
                  Request deletion of your personal information (subject to
                  legal requirements)
                </li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the Information Regulator</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                7. Cookies and Tracking
              </h2>
              <p className="text-foreground leading-relaxed">
                Our website uses cookies and similar tracking technologies to
                enhance user experience and analyze site usage. You can control
                cookie preferences through your browser settings. We use Google
                Analytics to understand how visitors interact with our site.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                8. Data Retention
              </h2>
              <p className="text-foreground leading-relaxed">
                We retain personal information only for as long as necessary to
                fulfill the purposes outlined in this policy, comply with legal
                obligations, resolve disputes, and enforce agreements.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                9. Contact Information
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                For questions about this Privacy Policy or to exercise your
                rights, please contact us:
              </p>
              <div className="bg-card p-6 rounded-md border border-card-border">
                <p className="text-foreground mb-2">
                  <strong>Dawu Msendo Trading and Projects (Pty) Ltd</strong>
                </p>
                <p className="text-muted-foreground">
                  667/389 Ramaphos Street, Slovo Park
                  <br />
                  Eldorado Park, Johannesburg, 1811
                  <br />
                  Email: info@dawumsendo.co.za
                  <br />
                  Phone: 084 282 2378 / 068 106 1936
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
