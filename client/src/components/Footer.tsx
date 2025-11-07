import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import lekkerLogo from "@assets/lekkerlogo_1762414896249.png";
import verifiedBadge from "@assets/Level 1_1762414886970.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              About Us
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Dawu Msendo Trading and Projects specializes in construction,
              infrastructure, and civil engineering across South Africa.
            </p>
            <p className="text-sm font-semibold text-primary">
              Adding Value, Always
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-services"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-faq"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Construction & Housing</li>
              <li>Infrastructure Development</li>
              <li>Roadworks & Paving</li>
              <li>Electrification</li>
              <li>Property Development</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  667/389 Ramaphos Street
                  <br />
                  Slovo Park, Eldorado Park
                  <br />
                  Johannesburg, 1811
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:0842822378"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => trackEvent("click", "contact", "phone_romeo")}
                  data-testid="link-footer-phone-romeo"
                >
                  084 282 2378 (Romeo)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:0681061936"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() =>
                    trackEvent("click", "contact", "phone_lindokuhle")
                  }
                  data-testid="link-footer-phone-lindokuhle"
                >
                  068 106 1936 (Lindokuhle)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card-border pt-8 pb-8">
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://lekker.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover-elevate rounded-md p-4 transition-all"
              data-testid="link-lekker-network"
            >
              <img
                src={lekkerLogo}
                alt="Lekker Network Logo"
                className="h-8 w-auto"
              />
              <span className="text-sm text-muted-foreground">
                Powered by Lekker Network
              </span>
            </a>

            <a
              href="https://lekker.network/the-lekker-network-verified"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover-elevate rounded-md p-4 transition-all"
              data-testid={`link-verified-badge-verified`}
            >
              <img
                src={verifiedBadge}
                alt="Lekker Network Verified Badge"
                className="w-full h-auto max-w-[120px]"
              />
              <span className="text-xs text-center text-muted-foreground">
                Lekker Network Verified
              </span>
            </a>
          </div>
        </div>

        <div className="border-t border-card-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Dawu Msendo Trading and Projects (Pty) Ltd. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-foreground transition-colors"
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-foreground transition-colors"
                data-testid="link-footer-terms"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
