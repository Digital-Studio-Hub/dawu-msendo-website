import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/send-mail", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);

      if (data.honeypot) {
        return res.status(400).json({
          success: false,
          message: "Invalid submission",
        });
      }

      const ZEPTOMAIL_API_KEY = process.env.ZEPTOMAIL_API_KEY;
      const ZEPTOMAIL_FROM = process.env.ZEPTOMAIL_FROM;
      const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

      if (!ZEPTOMAIL_API_KEY || !ZEPTOMAIL_FROM || !ADMIN_EMAIL) {
        console.error("Missing required environment variables for email");
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

      const zeptomailPayload = {
        from: {
          address: ZEPTOMAIL_FROM,
          name: "Dawu Msendo Trading",
        },
        to: [
          {
            email_address: {
              address: ADMIN_EMAIL,
              name: "Admin",
            },
          },
        ],
        subject: `New Contact Form Submission from ${data.name}`,
        htmlbody: adminEmailContent,
      };

      const userConfirmationPayload = {
        from: {
          address: ZEPTOMAIL_FROM,
          name: "Dawu Msendo Trading",
        },
        to: [
          {
            email_address: {
              address: data.email,
              name: data.name,
            },
          },
        ],
        subject: "Thank You for Contacting Dawu Msendo Trading",
        htmlbody: userConfirmationContent,
      };

      const [adminResponse, userResponse] = await Promise.all([
        fetch("https://api.zeptomail.com/v1.1/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Zoho-enczapikey ${ZEPTOMAIL_API_KEY}`,
          },
          body: JSON.stringify(zeptomailPayload),
        }),
        fetch("https://api.zeptomail.com/v1.1/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Zoho-enczapikey ${ZEPTOMAIL_API_KEY}`,
          },
          body: JSON.stringify(userConfirmationPayload),
        }),
      ]);

      if (!adminResponse.ok || !userResponse.ok) {
        console.error(
          "ZeptoMail API error:",
          await adminResponse.text(),
          await userResponse.text()
        );
        return res.status(500).json({
          success: false,
          message: "Failed to send email",
        });
      }

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
