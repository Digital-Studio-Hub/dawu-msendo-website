import { Link } from "wouter";
import { Building2, Home, Droplets, Construction, Zap, Building, ArrowRight, CheckCircle2, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import heroImage from "@assets/scopio-144c9384-dbba-4c1c-8af6-1762ec99f820_1763376269401.jpg";
import housingImage from "@assets/stock_images/modern_affordable_ho_cfbb5ef0.jpg";
import roadImage from "@assets/stock_images/road_construction_as_742cfffb.jpg";
import teamImage from "@assets/stock_images/professional_constru_92e54d68.jpg";

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dawu Msendo Trading and Projects (Pty) Ltd",
    "alternateName": "Dawu Msendo Trading",
    "url": "https://dawumsendo.co.za",
    "logo": "https://dawumsendo.co.za/assets/Main Logo_1762415709282.png",
    "description": "South African construction, infrastructure, and civil engineering company specializing in housing, roadworks, and community development",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "667/389 Ramaphos Street, Slovo Park",
      "addressLocality": "Eldorado Park",
      "addressRegion": "Gauteng",
      "postalCode": "1811",
      "addressCountry": "ZA"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+27-84-282-2378",
      "contactType": "customer service",
      "areaServed": "ZA",
      "availableLanguage": ["en"]
    }],
    "sameAs": [],
    "areaServed": ["South Africa", "Gauteng", "Johannesburg", "Eldorado Park"]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dawu Msendo Trading and Projects (Pty) Ltd",
    "image": "https://dawumsendo.co.za/assets/Main Logo_1762415709282.png",
    "@id": "https://dawumsendo.co.za",
    "url": "https://dawumsendo.co.za",
    "telephone": "+27-84-282-2378",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "667/389 Ramaphos Street, Slovo Park",
      "addressLocality": "Eldorado Park",
      "addressRegion": "Gauteng",
      "postalCode": "1811",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.1873,
      "longitude": 27.8931
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }, {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "13:00"
    }],
    "areaServed": ["South Africa", "Gauteng", "Johannesburg", "Eldorado Park"],
    "priceRange": "$$"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dawu Msendo Trading and Projects",
    "url": "https://dawumsendo.co.za",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dawumsendo.co.za/projects?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const services = [
    {
      icon: Building2,
      title: "Urban Planning & Construction",
      description: "Comprehensive turnkey construction solutions from planning to completion",
    },
    {
      icon: Home,
      title: "Housing Development",
      description: "Quality, affordable homes that enrich communities",
    },
    {
      icon: Droplets,
      title: "Services Infrastructure",
      description: "Essential infrastructure for sustainable communities",
    },
    {
      icon: Construction,
      title: "Roadworks & Paving",
      description: "Professional road construction and rehabilitation services",
    },
    {
      icon: Zap,
      title: "Electrification Services",
      description: "Comprehensive electrical infrastructure solutions",
    },
    {
      icon: Building,
      title: "Property Development",
      description: "End-to-end property development and management",
    },
  ];

  const stats = [
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "7+", label: "Years Experience" },
    { icon: Award, value: "100%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "50+", label: "Communities Served" },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Construction & Infrastructure Services in Gauteng, South Africa"
        description="Dawu Msendo Trading offers professional construction, infrastructure, housing development, and civil engineering services across Gauteng. On-time, on-budget delivery. Est. 2018."
        canonical="/"
        jsonLd={[organizationSchema, localBusinessSchema, websiteSchema]}
      />
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 30%' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-black/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6">
            Building South Africa's Future
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
            Quality construction, infrastructure, and civil engineering across Gauteng
          </p>
          <p className="text-lg md:text-xl text-primary font-semibold mb-8">
            Adding Value, Always
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="text-lg px-8 backdrop-blur-sm bg-primary/95 hover:bg-primary"
                data-testid="button-hero-quote"
              >
                Request a Quote
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 backdrop-blur-sm bg-white/10 text-white border-white/30 hover:bg-white/20"
                data-testid="button-hero-projects"
              >
                View Our Projects
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Est. 2018</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>500+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Gauteng's Trusted Builder</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction and infrastructure solutions for public and private sector clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-elevate transition-all" data-testid={`card-service-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Link href="/services">
                      <Button
                        variant="ghost"
                        className="p-0 h-auto hover:translate-x-1 transition-transform"
                        data-testid={`button-learn-more-${index}`}
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="default" data-testid="button-view-all-services">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src={housingImage}
                alt="Affordable housing development Johannesburg South Africa"
                className="rounded-md w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src={roadImage}
                alt="Road construction infrastructure Gauteng"
                className="rounded-md w-full h-64 object-cover sm:mt-8"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We've successfully delivered over 500 projects across Gauteng and broader South Africa, from affordable housing developments to complex infrastructure installations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">120-Unit Housing Development</h4>
                    <p className="text-sm text-muted-foreground">Eldorado Park, Johannesburg</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">5km Road Rehabilitation Project</h4>
                    <p className="text-sm text-muted-foreground">Soweto, Gauteng</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Water Reticulation Network</h4>
                    <p className="text-sm text-muted-foreground">Orange Farm, Gauteng</p>
                  </div>
                </li>
              </ul>
              <Link href="/projects">
                <Button size="lg" data-testid="button-view-portfolio">
                  View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            We are passionate about enriching and enhancing the quality of people's lives through social responsibility programs, skills transfer, training, and development. Our goal is to become a global developer of infrastructure and quality affordable homes.
          </p>
          <p className="text-2xl font-heading font-semibold text-primary">
            Enriching Lives Through Infrastructure
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center" data-testid={`stat-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${teamImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Let's discuss how we can bring your vision to life with quality construction and infrastructure solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="backdrop-blur-sm bg-primary/95 hover:bg-primary"
                data-testid="button-cta-contact"
              >
                Contact Us Today
              </Button>
            </Link>
            <a
              href="https://wa.me/27842822378"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => import("@/lib/analytics").then(m => m.trackEvent("click", "whatsapp", "cta_home"))}
            >
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-sm bg-white/10 text-white border-white/30 hover:bg-white/20"
                data-testid="button-cta-whatsapp"
              >
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
