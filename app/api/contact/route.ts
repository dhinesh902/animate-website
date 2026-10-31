import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Integration point: Forward to CRM, email service (e.g. Resend / SendGrid), or Slack webhook
    // In production, configure environment variables: e.g. process.env.CONTACT_EMAIL_WEBHOOK
    console.log("[JRINK Contact Dispatch]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || "Not provided",
      subject: subject || "General Inquiry",
      messageLength: message.length,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been received by our dispatch desk. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or email us directly." },
      { status: 500 }
    );
  }
}

