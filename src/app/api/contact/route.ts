import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: string;
  phone?: string;
  campus?: string;
  departmentLevel?: string;
  serviceNeeded?: string;
  message?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "fullName",
  "phone",
  "campus",
  "departmentLevel",
  "serviceNeeded",
  "message"
];

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, 1000) : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data = {
    fullName: clean(payload.fullName),
    phone: clean(payload.phone),
    campus: clean(payload.campus),
    departmentLevel: clean(payload.departmentLevel),
    serviceNeeded: clean(payload.serviceNeeded),
    message: clean(payload.message)
  };

  const missingField = requiredFields.find((field) => !data[field]);
  if (missingField) {
    return NextResponse.json({ error: "Please complete all form fields." }, { status: 400 });
  }

  const apiKey = process.env.AIRTABLE_API_KEY || process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Service Requests";

  if (!apiKey || !baseId) {
    return NextResponse.json(
      {
        error:
          "Airtable is not configured yet. Please continue on WhatsApp while the website owner adds Airtable credentials."
      },
      { status: 503 }
    );
  }

  const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  const response = await fetch(airtableUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            "Full Name": data.fullName,
            "Phone Number": data.phone,
            "School/Campus": data.campus,
            "Department/Level": data.departmentLevel,
            "Service Needed": data.serviceNeeded,
            Message: data.message,
            Source: "Website contact form",
            "Submitted At": new Date().toISOString()
          }
        }
      ]
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "We could not save your request right now. Please chat on WhatsApp." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
