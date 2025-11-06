import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { staticProjectsData } from "@shared/schema";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "housing", label: "Housing" },
  { id: "roadworks", label: "Roadworks" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "electrification", label: "Electrification" },
  { id: "property", label: "Property" },
  { id: "construction", label: "Construction" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? staticProjectsData
      : staticProjectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            A portfolio of successful construction and infrastructure projects
            across Gauteng
          </p>
        </div>
      </section>

      <section className="py-12 bg-card border-b border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                data-testid={`button-filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-elevate transition-all"
                data-testid={`card-project-${project.id}`}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={`/attached_assets/stock_images/${project.image}`}
                    alt={`${project.title} ${project.location} construction project`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge variant="secondary" className="mb-2">
                      {categories.find((c) => c.id === project.category)?.label}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      {project.location}
                    </p>
                  </div>
                  <p className="text-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12">
            <CardContent className="p-0">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">
                Project Highlights
              </h2>
              <div className="space-y-6 text-lg text-foreground">
                <p>
                  Since 2018, we've successfully completed over 500 projects
                  across Gauteng and broader South Africa. Our portfolio includes
                  affordable housing developments, infrastructure installations,
                  road construction and rehabilitation, electrification projects,
                  and commercial property development.
                </p>
                <p>
                  Each project demonstrates our commitment to quality
                  workmanship, competitive pricing, and on-time delivery. We work
                  with both public and private sector clients, delivering
                  turnkey solutions that make a lasting contribution to the
                  communities we serve.
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>All projects completed on time and within budget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Strong focus on quality, safety, and community impact
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Full regulatory compliance and certified processes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Experienced project management and field supervision
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
