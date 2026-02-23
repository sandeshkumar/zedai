import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema } from "@/lib/validations/enquiry";
import { prisma } from "@/lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, phone, serviceType, budget } = parsed.data;

    const enquiry = await prisma.enquiry.create({
      data: {
        name,
        phone,
        serviceType,
        budget: budget ?? "",
      },
    });

    await resend.emails.send({
      from: "ZED Labs <hello@zedai.tech>",
      to: ["hello@zedai.tech", "sandeshkumard@gmail.com"],
      subject: `New Enquiry: ${serviceType} — ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 520px; margin: 0 auto; background: #080C14; color: #F8FAFC; padding: 32px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.06);">
          <div style="border-bottom: 2px solid #F97316; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 20px; color: #F97316;">New Enquiry Received</h1>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #94A3B8; font-size: 13px; width: 120px;">Name</td>
              <td style="padding: 10px 0; font-size: 15px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94A3B8; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0; font-size: 15px;"><a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="color: #25D366; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94A3B8; font-size: 13px;">Service</td>
              <td style="padding: 10px 0; font-size: 15px; color: #F97316; font-weight: 600;">${serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94A3B8; font-size: 13px;">Budget</td>
              <td style="padding: 10px 0; font-size: 15px;">${budget || "Not specified"}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 12px; color: #64748B;">
            Enquiry ID: ${enquiry.id}<br/>
            Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </div>
        </div>
      `,
    }).catch((err) => {
      console.error("Email send error:", err);
    });

    return NextResponse.json(
      { success: true, id: enquiry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
