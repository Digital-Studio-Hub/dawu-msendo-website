import { db } from "./db";
import { projects, blogPosts, teamMembers } from "@shared/schema";
import { staticProjectsData } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");

  // Seed projects
  console.log("Seeding projects...");
  for (const project of staticProjectsData) {
    await db.insert(projects).values({
      title: project.title,
      location: project.location,
      category: project.category,
      description: project.description,
      image: project.image,
      featured: [1, 2, 3].includes(project.id),
    });
  }

  // Seed blog posts
  console.log("Seeding blog posts...");
  await db.insert(blogPosts).values([
    {
      title: "150 Affordable Homes Completed in Eldorado Park",
      slug: "150-affordable-homes-completed-eldorado-park",
      excerpt:
        "Major milestone achieved as we complete our largest social housing project to date, bringing quality homes to 150 families.",
      content:
        "<p>We are proud to announce the successful completion of our 150-unit social housing development in Eldorado Park. This project represents our commitment to providing quality, affordable housing to South African communities.</p><p>The development includes modern amenities, secure fencing, and full infrastructure including water, electricity, and sewerage systems. Each unit was built to high standards while maintaining affordability for low-income families.</p><p>This project demonstrates our capability to deliver large-scale housing developments on time and within budget, while maintaining our commitment to quality and community development.</p>",
      author: "Romeo Dube",
      category: "Project Updates",
      image: "modern_affordable_ho_cfbb5ef0.jpg",
      published: true,
      publishedAt: new Date("2024-10-15"),
    },
    {
      title: "Ladies of Hope: Empowering Women Through Skills Development",
      slug: "ladies-of-hope-empowering-women-skills-development",
      excerpt:
        "Our flagship CSR initiative continues to transform lives through comprehensive training and employment opportunities for women in construction.",
      content:
        "<p>The Ladies of Hope program remains at the heart of our social responsibility efforts. Since its inception, we have trained over 100 women in various construction skills, with 75% finding sustainable employment in the industry.</p><p>The program offers training in bricklaying, plastering, painting, plumbing, and electrical work. Participants also receive business skills training to help them establish their own enterprises.</p><p>Our commitment to gender equality in construction goes beyond training - we actively employ program graduates on our projects, providing them with real-world experience and income opportunities.</p>",
      author: "Lindokuhle Dube",
      category: "CSR Initiatives",
      image: "professional_constru_92e54d68.jpg",
      published: true,
      publishedAt: new Date("2024-11-01"),
    },
    {
      title: "Road Infrastructure Upgrade Completed in Soweto",
      slug: "road-infrastructure-upgrade-completed-soweto",
      excerpt:
        "5km of urban roads rehabilitated with new surfacing, street lighting, and pedestrian walkways improving community connectivity.",
      content:
        "<p>Our recent road rehabilitation project in Soweto has significantly improved transportation infrastructure for thousands of residents. The project included complete resurfacing of 5km of urban roads, installation of modern street lighting, and construction of safe pedestrian walkways.</p><p>Working closely with the local municipality, we ensured minimal disruption to traffic and businesses during construction. The project was completed two weeks ahead of schedule.</p><p>This infrastructure upgrade will benefit the community for decades to come, improving road safety, reducing vehicle maintenance costs, and enhancing property values in the area.</p>",
      author: "Romeo Dube",
      category: "Project Updates",
      image: "road_construction_as_742cfffb.jpg",
      published: true,
      publishedAt: new Date("2024-09-20"),
    },
  ]);

  // Seed team members
  console.log("Seeding team members...");
  await db.insert(teamMembers).values([
    {
      name: "Romeo Dube",
      role: "Director",
      bio: "Romeo Dube brings extensive experience in construction management and project leadership. With a proven track record in delivering large-scale infrastructure and housing projects, Romeo ensures every project meets the highest standards of quality and safety while maintaining on-time, on-budget delivery.",
      photo: "",
      email: "romeo@dawumsendo.co.za",
      phone: "084 282 2378",
      order: 1,
      featured: true,
    },
    {
      name: "Lindokuhle Dube",
      role: "Director",
      bio: "Lindokuhle Dube specializes in community development and corporate social responsibility initiatives. His leadership of the Ladies of Hope program has transformed the lives of hundreds of women through skills development and employment opportunities. Lindokuhle ensures our projects create lasting positive impact in the communities we serve.",
      photo: "",
      email: "lindokuhle@dawumsendo.co.za",
      phone: "068 106 1936",
      order: 2,
      featured: true,
    },
  ]);

  console.log("Database seeded successfully!");
}

seed()
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
