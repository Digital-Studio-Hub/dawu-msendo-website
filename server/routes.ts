import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { eq, desc, and } from "drizzle-orm";
import { contactFormSchema, projects, blogPosts, teamMembers } from "@shared/schema";
import { db } from "./db";
import { sendContactEmails } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  const ensureDatabase = (res: any): boolean => {
    if (db) {
      return true;
    }

    res.status(503).json({ error: "Database is not configured" });
    return false;
  };

  // Projects API
  app.get("/api/projects", async (req, res) => {
    try {
      if (!ensureDatabase(res)) {
        return;
      }

      const { category, location } = req.query;
      
      let conditions = [];
      if (category && category !== "all") {
        conditions.push(eq(projects.category, category as string));
      }
      
      const allProjects = conditions.length > 0
        ? await db.select().from(projects).where(and(...conditions)).orderBy(desc(projects.createdAt))
        : await db.select().from(projects).orderBy(desc(projects.createdAt));
      
      // Filter by location if provided (client-side text matching)
      const filteredProjects = location && location !== "all"
        ? allProjects.filter(p => p.location.toLowerCase().includes((location as string).toLowerCase()))
        : allProjects;
      
      return res.json(filteredProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      return res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  // Blog Posts API
  app.get("/api/blog", async (req, res) => {
    try {
      if (!ensureDatabase(res)) {
        return;
      }

      const { category, published } = req.query;
      
      let conditions = [eq(blogPosts.published, true)];
      if (category && category !== "all") {
        conditions.push(eq(blogPosts.category, category as string));
      }
      
      const posts = await db.select().from(blogPosts)
        .where(and(...conditions))
        .orderBy(desc(blogPosts.publishedAt));
      
      return res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      if (!ensureDatabase(res)) {
        return;
      }

      const post = await db.select().from(blogPosts)
        .where(and(
          eq(blogPosts.slug, req.params.slug),
          eq(blogPosts.published, true)
        ))
        .limit(1);
      
      if (post.length === 0) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      return res.json(post[0]);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      return res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  // Team Members API
  app.get("/api/team", async (req, res) => {
    try {
      if (!ensureDatabase(res)) {
        return;
      }

      const members = await db.select().from(teamMembers)
        .orderBy(teamMembers.order);
      
      return res.json(members);
    } catch (error) {
      console.error("Error fetching team members:", error);
      return res.status(500).json({ error: "Failed to fetch team members" });
    }
  });
  
  app.post("/api/send-mail", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);

      if (data.honeypot) {
        return res.status(400).json({
          success: false,
          message: "Invalid submission",
        });
      }

      const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

      if (!ADMIN_EMAIL) {
        console.error("Missing required environment variables for email");
        console.error("ADMIN_EMAIL exists:", !!ADMIN_EMAIL);
        return res.status(500).json({
          success: false,
          message: "Email service configuration error",
        });
      }

      const adminEmailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #F7C600; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #000; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; color: #000;">New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${data.email}</div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${data.phone}</div>
      </div>
      ${data.service ? `
      <div class="field">
        <div class="label">Service Interest:</div>
        <div class="value">${data.service}</div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${data.message}</div>
      </div>
    </div>
  </div>
</body>
</html>
      `;

      const userConfirmationContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #F7C600; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #f9f9f9; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; color: #000;">Thank You for Contacting Us</h1>
    </div>
    <div class="content">
      <p>Dear ${data.name},</p>
      <p>Thank you for reaching out to Dawu Msendo Trading and Projects. We have received your message and will respond within 24 hours.</p>
      <p><strong>Your message:</strong><br>${data.message}</p>
      <p>If you need immediate assistance, please feel free to call us:</p>
      <ul>
        <li>Romeo Dube: 084 282 2378</li>
        <li>Lindokuhle Dube: 068 106 1936</li>
      </ul>
      <p>Best regards,<br><strong>Dawu Msendo Trading and Projects Team</strong></p>
      <p style="font-size: 12px; color: #666; margin-top: 20px;">Adding Value, Always</p>
    </div>
  </div>
</body>
</html>
      `;

      await sendContactEmails({
        adminEmail: ADMIN_EMAIL,
        userEmail: data.email,
        userName: data.name,
        adminEmailContent,
        userConfirmationContent,
      });

      console.log("Emails sent successfully to", ADMIN_EMAIL, "and", data.email);

      return res.json({
        success: true,
        message: "Message sent successfully! Check your email for confirmation.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        });
      }

      console.error("Error sending email:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while sending your message",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
