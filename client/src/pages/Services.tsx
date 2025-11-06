import { Building2, Home, Droplets, Construction, Zap, Building, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { services } from "@shared/schema";

const iconMap = {
  Building2,
  Home,
  Droplets,
  Construction,
  Zap,
  Building,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Comprehensive construction and infrastructure solutions across South
            Africa
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card key={service.id} className="hover-elevate transition-all" data-testid={`card-service-${service.id}`}>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-heading font-bold text-2xl mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12">
            <CardContent className="p-0">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">
                Our Expertise
              </h2>
              <div className="space-y-6 text-lg text-foreground">
                <p>
                  Our expertise spans urban planning, project design, turnkey
                  construction, infrastructure development, and civil
                  engineering. We celebrate the past and build for the future,
                  looking to history for guidance and to tomorrow for challenge,
                  opportunity, and growth.
                </p>
                <p>
                  We believe that our commitment to project management,
                  construction planning, and strong field supervision is critical
                  to making our projects successful. This approach, combined with
                  competitive pricing and quality workmanship, has enabled us to
                  grow progressively through both minor and major projects.
                </p>
                <p className="font-semibold text-primary">
                  We deliver projects on time, within budget, and to the highest
                  quality standards for both public and private sector clients
                  across Gauteng and South Africa.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's work together to bring your construction and infrastructure
            vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-contact-us">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" data-testid="button-view-projects">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
