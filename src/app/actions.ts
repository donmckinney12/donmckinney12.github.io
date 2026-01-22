"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "mckinneydonald321@gmail.com", // Replace with your real email
      subject: `New Transmission from ${name}`,
      text: `Sender: ${email}\n\nMessage: ${message}`,
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}