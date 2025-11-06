import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMain from "@assets/Main Logo_1762415709282.png";
import logoWhite from "@assets/White Logo_1762415709283.png";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home-logo">
            <img
              src={logoMain}
              alt="Dawu Msendo Trading and Projects Logo"
              className="h-10 md:h-12 w-auto"
              loading="eager"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`${
                    isActive(item.path)
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button variant="default" data-testid="button-get-quote">
                Get a Quote
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    isActive(item.path)
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                variant="default"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-mobile-get-quote"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
