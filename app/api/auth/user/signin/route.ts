import prisma from "@/db";
import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";

const user_signin_schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req: Request) {
  const signinData = await req.json();

  // if (!uemail) {
  //   return NextResponse.json({ error: "Email is required" }, { status: 400 });
  // }

  const parsed_data = user_signin_schema.safeParse(signinData);

  if (!parsed_data.success) {
    return NextResponse.json({ error: "Enter right email" }, { status: 400 });
  }
  try {
    const userDetails = await prisma.user.findFirst({
      where: {
        email: parsed_data.data.email,
      },
    });
    if (!userDetails) {
      return NextResponse.json({ error: "Not Found!" }, { status: 404 });
    }

    const isPassMatch = await bcrypt.compare(
      parsed_data.data.password,
      userDetails.password
    );

    if (!isPassMatch) {
      return NextResponse.json(
        { error: "Incorrect Password!" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        id: userDetails.id,
        name: userDetails.fullname,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
  }
}
