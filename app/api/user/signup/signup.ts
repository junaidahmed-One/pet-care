"use server";

import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const user_signup_schema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password should be minimum of 6 characters long."),
});

export async function POST(req: NextRequest) {
  const reqBody = user_signup_schema.safeParse(req.json());

  if (!reqBody.success) {
    return NextResponse.json(
      { error: reqBody.error.issues[0].message },
      { status: 400 }
    );
  }

  const { email, password, fullname } = reqBody.data;

  try {
    const userData = await prisma.user.create({
      data: {
        email,
        password,
        fullname,
      },
    });
    return NextResponse.json(
      { message: "User created Successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
