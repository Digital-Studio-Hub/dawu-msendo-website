import { z } from "zod";
import { pgTable, serial, varchar, text, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

export const services = [
  {
    id: "construction",
    title: "Urban Planning & Construction",
    icon: "Building2",
    description: "Comprehensive turnkey construction solutions from planning to completion",
    details: [
      "Affordable social housing developments",
      "Private sector housing (Lower to Upmarket)",
      "Shopping complexes and retail spaces",
      "Parks, clinics, and community centers",
      "Public and private property development",
    ],
  },
  {
    id: "housing",
    title: "Housing Development",
    icon: "Home",
    description: "Quality, affordable homes that enrich communities",
    details: [
      "Affordable social housing projects",
      "Private residential developments",
      "Multi-unit housing complexes",
      "Upmarket residential estates",
      "Community housing initiatives",
    ],
  },
  {
    id: "infrastructure",
    title: "Services Infrastructure",
    icon: "Droplets",
    description: "Essential infrastructure for sustainable communities",
    details: [
      "Stormwater management systems",
      "Water reticulation networks",
      "Sewer and sanitation systems",
      "Underground infrastructure installation",
      "Infrastructure maintenance and upgrades",
    ],
  },
  {
    id: "roadworks",
    title: "Roadworks & Paving",
    icon: "Construction",
    description: "Professional road construction and rehabilitation services",
    details: [
      "Urban roads and highways",
      "Bridges and over/under passes",
      "Brick and tar road construction",
      "Road rehabilitation and resurfacing",
      "Road markings and signage installation",
      "Pedestrian walkways and street scaping",
    ],
  },
  {
    id: "electrification",
    title: "Electrification Services",
    icon: "Zap",
    description: "Comprehensive electrical infrastructure solutions",
    details: [
      "Housing unit electrification",
      "Street lighting installation",
      "Electrical reticulation networks",
      "Power distribution systems",
      "Electrical maintenance services",
    ],
  },
  {
    id: "property",
    title: "Property Development",
    icon: "Building",
    description: "End-to-end property development and management",
    details: [
      "Public sector property projects",
      "Private property development",
      "Mixed-use developments",
      "Commercial property projects",
      "Investment property development",
    ],
  },
] as const;

export const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Gauteng, Johannesburg, and surrounding areas including Eldorado Park, Soweto, and broader South Africa. Our projects span both public and private sector developments across the region.",
  },
  {
    question: "How long has Dawu Msendo been in business?",
    answer:
      "Dawu Msendo Trading and Projects (Pty) Ltd was established in 2018 (Registration Number: 2018/446189/07). Since inception, we've grown progressively through minor and major projects, building a strong reputation for quality work delivered on time and within budget.",
  },
  {
    question: "What types of projects do you specialize in?",
    answer:
      "We specialize in construction, infrastructure, and civil engineering projects including affordable housing, urban roads, water and sewer reticulation, electrification, property development, and community facilities such as clinics, parks, and shopping complexes.",
  },
  {
    question: "Do you work with both public and private sector clients?",
    answer:
      "Yes, we work with both public and private sector clients. Our portfolio includes government infrastructure projects, private property developments, and public-private partnerships that deliver value to communities.",
  },
  {
    question: "How do I request a quote for my project?",
    answer:
      "You can request a quote by filling out our contact form, calling us directly at 084 282 2378 (Romeo) or 068 106 1936 (Lindokuhle), or sending us a WhatsApp message. We'll respond promptly to discuss your project requirements.",
  },
  {
    question: "What is your approach to social responsibility?",
    answer:
      "We're committed to enriching communities through skills development, training programs, employment opportunities, and initiatives like 'Ladies of Hope.' Our projects aim to make lasting contributions to the communities we serve through sustainable development and social upliftment.",
  },
  {
    question: "Are you certified and compliant with industry regulations?",
    answer:
      "Yes, we operate in full compliance with South African construction and safety regulations. Our experienced board of directors ensures we maintain high standards of business ethics, quality, and regulatory compliance across all projects.",
  },
  {
    question: "What sets Dawu Msendo apart from other construction companies?",
    answer:
      "Our competitive pricing, commitment to quality, on-time delivery, community focus, and comprehensive expertise in urban planning, infrastructure, and construction set us apart. We deliver turnkey solutions with integrity and social responsibility at the core of everything we do.",
  },
] as const;

export const staticProjectsData = [
  {
    id: 1,
    title: "Affordable Housing Development",
    location: "Eldorado Park, Johannesburg",
    category: "housing",
    description: "120-unit social housing project with full infrastructure",
    image: "modern_affordable_ho_cfbb5ef0.jpg",
  },
  {
    id: 2,
    title: "Urban Road Rehabilitation",
    location: "Soweto, Gauteng",
    category: "roadworks",
    description: "5km road resurfacing with markings and street lighting",
    image: "road_construction_as_742cfffb.jpg",
  },
  {
    id: 3,
    title: "Water Reticulation Network",
    location: "Orange Farm, Gauteng",
    category: "infrastructure",
    description: "Comprehensive water and sewer infrastructure installation",
    image: "water_pipes_infrastr_2ee87061.jpg",
  },
  {
    id: 4,
    title: "Community Electrification",
    location: "Alexandra Township",
    category: "electrification",
    description: "200+ housing units electrified with street lighting",
    image: "electrical_wiring_el_c36fcb6c.jpg",
  },
  {
    id: 5,
    title: "Shopping Complex Construction",
    location: "Johannesburg CBD",
    category: "property",
    description: "Mixed-use development with retail and office space",
    image: "commercial_property__3809128d.jpg",
  },
  {
    id: 6,
    title: "Infrastructure Development",
    location: "Centurion, Gauteng",
    category: "construction",
    description: "Large-scale urban planning and infrastructure project",
    image: "aerial_view_urban_de_d1441df6.jpg",
  },
] as const;

// Database Tables

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  description: text("description").notNull(),
  image: varchar("image", { length: 500 }).notNull(),
  completionDate: timestamp("completion_date"),
  client: varchar("client", { length: 255 }),
  projectValue: varchar("project_value", { length: 100 }),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
});
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  author: varchar("author", { length: 100 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  image: varchar("image", { length: 500 }),
  published: boolean("published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  bio: text("bio").notNull(),
  photo: varchar("photo", { length: 500 }),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  linkedin: varchar("linkedin", { length: 500 }),
  order: integer("order").default(0),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers).omit({
  id: true,
  createdAt: true,
});
export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;

export const quoteRequests = pgTable("quote_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  company: varchar("company", { length: 255 }),
  projectType: varchar("project_type", { length: 100 }).notNull(),
  projectDescription: text("project_description").notNull(),
  location: varchar("location", { length: 255 }),
  budget: varchar("budget", { length: 100 }),
  timeline: varchar("timeline", { length: 100 }),
  files: text("files"),
  status: varchar("status", { length: 50 }).default("pending"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests).omit({
  id: true,
  createdAt: true,
  status: true,
  notes: true,
});
export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;
