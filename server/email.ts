import { Inbound } from "inboundemail";

const apiKey = process.env.INBOUND_API_KEY || "";

if (!apiKey) {
  console.warn("INBOUND_API_KEY not found — emails will not be sent");
}

const client = apiKey ? new Inbound(apiKey) : null;
const FROM_ADDRESS = "Cledwyn from Lekker Network <cledwyn@lekker.network>";

type ContactEmailInput = {
  adminEmail: string;
  userEmail: string;
  userName: string;
  adminEmailContent: string;
  userConfirmationContent: string;
};

async function sendAdminNotificationEmail(input: ContactEmailInput) {
  if (!client) {
    console.error("INBOUND_API_KEY not configured; skipping admin notification email");
    return;
  }

  await client.emails.send({
    from: FROM_ADDRESS,
    to: input.adminEmail,
    subject: `New Contact Form Submission from ${input.userName}`,
    html: input.adminEmailContent,
  });
}

async function sendUserConfirmationEmail(input: ContactEmailInput) {
  if (!client) {
    console.error("INBOUND_API_KEY not configured; skipping user confirmation email");
    return;
  }

  await client.emails.send({
    from: FROM_ADDRESS,
    to: input.userEmail,
    subject: "Thank You for Contacting Dawu Msendo Trading",
    html: input.userConfirmationContent,
  });
}

export async function sendContactEmails(input: ContactEmailInput) {
  await Promise.all([
    sendAdminNotificationEmail(input),
    sendUserConfirmationEmail(input),
  ]);
}
