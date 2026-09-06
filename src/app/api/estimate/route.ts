import { NextResponse } from "next/server";

type EstimatePayload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  service?: string;
  contactMethod?: string;
  details?: string;
};

function formatEmailBody(data: EstimatePayload) {
  return [
    "New estimate request — SRL Painting website",
    "",
    `Name: ${data.name ?? ""}`,
    `Email: ${data.email || "Not provided"}`,
    `Phone: ${data.phone || "Not provided"}`,
    `City: ${data.city ?? ""}`,
    `Service: ${data.service ?? ""}`,
    `Preferred contact: ${data.contactMethod ?? ""}`,
    "",
    "Project details:",
    data.details ?? "",
  ].join("\n");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ESTIMATE_TO_EMAIL;
  const fromEmail = process.env.ESTIMATE_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      {
        ok: false,
        fallback: true,
        message: "Email delivery is not configured. Use client-side fallback.",
      },
      { status: 503 },
    );
  }

  let data: EstimatePayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!data.name?.trim() || !data.city?.trim() || !data.service?.trim() || !data.details?.trim()) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const subject = `Estimate request — ${data.name} (${data.city})`;
  const text = formatEmailBody(data);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: data.email?.trim() || undefined,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, fallback: true }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
