import { Target, Eye, Heart, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import teamImage from "@assets/stock_images/professional_constru_92e54d68.jpg";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We conduct our business with truthfulness, respect, and high standards of business ethics.",
    },
    {
      icon: Target,
      title: "Quality",
      description:
        "Commitment to delivering projects on time, within budget, and to the highest quality standards.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description:
        "We encourage innovative thinking and sustainable solutions that benefit communities.",
    },
  ];

  const team = [
    {
      name: "Lindokuhle Dube",
      role: "Director General",
      phone: "068 106 1936",
      email: "lindokuhle@dawumsendo.co.za",
    },
    {
      name: "Romeo Dube",
      role: "Site Manager",
      phone: "084 282 2378",
      email: "romeo@dawumsendo.co.za",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            About Dawu Msendo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Building South Africa's infrastructure since 2018
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                Company Profile
              </h2>
              <div className="space-y-4 text-lg text-foreground">
                <p>
                  Dawu Msendo Trading and Projects (Pty) Ltd is a South African
                  construction, civil, and infrastructure development company
                  specializing in urban planning, turnkey construction,
                  affordable housing, and community infrastructure.
                </p>
                <p>
                  Our core business focuses on emerging markets including plant
                  hire, transport, mining, and property development. We're
                  governed by a board of directors with the knowledge,
                  experience, and resources to undertake any project.
                </p>
                <p>
                  Since inception in 2018, we've progressively grown through
                  minor and major projects for both private and public sector
                  clients, building a reputation for competitive pricing,
                  quality work, and on-time, on-budget delivery.
                </p>
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-md border border-primary/20">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">
                      Registration Number
                    </p>
                    <p className="font-semibold" data-testid="text-registration">
                      2018/446189/07
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Tax Number</p>
                    <p className="font-semibold" data-testid="text-tax-number">
                      9965703169
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Established</p>
                    <p className="font-semibold">2018</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Location</p>
                    <p className="font-semibold">Eldorado Park, JHB</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src={teamImage}
                alt="Dawu Msendo construction team Johannesburg"
                className="rounded-md w-full h-auto shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-foreground leading-relaxed">
                  Adding value, always — through enriching the lives of all the
                  people of our world, by constructing quality, affordable homes
                  and infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-2xl mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-foreground leading-relaxed">
                  We are passionate about enriching and enhancing the quality of
                  people's lives using social responsibility programs, skills
                  transfer, training, and development while encouraging
                  innovative thinking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} data-testid={`card-value-${index}`}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} data-testid={`card-team-${index}`}>
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-6">
                    {member.role}
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-team-phone-${index}`}
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{member.phone}</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-team-email-${index}`}
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{member.email}</span>
                    </a>
                    <a
                      href={`https://wa.me/27${member.phone.replace(/\s/g, "").substring(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        data-testid={`button-whatsapp-${index}`}
                      >
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">
            Social Responsibility
          </h2>
          <div className="space-y-4 text-lg text-foreground">
            <p>Our commitment to social responsibility includes:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Making the best possible use of society's resources
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Providing maximum employment opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Contributing to the upliftment of weaker sections of society
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Skills development and certified training programs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Community self-help programs including "Ladies of Hope"
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Health and safety excellence</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
