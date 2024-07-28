"use server";

import { Resend } from "resend";
import { validateString, getErrorMessages } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const email = formData.get("senderEmail");

  // simple server side validation
  if (!validateString(email, 500)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "joshuamathew195@gmail.com",
      subject: "New message from portfolio",
      reply_to: email as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessages(error),
    };
  }
};
