import { NextResponse } from "next/server";

const limits = { name: 100, email: 254, phone: 30, city: 100, service: 100, contactMethod: 100, details: 5000 } as const;
type EstimatePayload = Record<keyof typeof limits, string>;

export async function POST(request: Request) {
  let input: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return NextResponse.json({ ok: false, error: "Request too large" }, { status: 413 });
    input = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const source = input as Record<string, unknown>;
  const data = {} as EstimatePayload;
  for (const key of Object.keys(limits) as (keyof typeof limits)[]) {
    const value = source[key] ?? "";
    if (typeof value !== "string" || value.length > limits[key]) {
      return NextResponse.json({ ok: false, error: "Invalid field" }, { status: 400 });
    }
    data[key] = value.trim();
  }
  if (!data.name || !data.city || !data.service || !data.details || data.phone.replace(/\D/g, "").length < 7 || !data.contactMethod) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ESTIMATE_TO_EMAIL;
  const fromEmail = process.env.ESTIMATE_FROM_EMAIL;
  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json({ ok: false, fallback: true }, { status: 503 });
  }
  const text = [
    "New estimate request — SRL Painting website", "",
    `Name: ${data.name}`, `Email: ${data.email || "Not provided"}`,
    `Phone: ${data.phone}`, `City: ${data.city}`, `Service: ${data.service}`,
    `Preferred contact: ${data.contactMethod}`, "", "Project details:", data.details,
  ].join("\n");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromEmail, to: [toEmail], reply_to: data.email || undefined,
        subject: `Estimate request — ${data.name.replace(/[\r\n]/g, " ")} (${data.city.replace(/[\r\n]/g, " ")})`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return NextResponse.json({ ok: false, fallback: true }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, fallback: true }, { status: 502 });
  }
}
