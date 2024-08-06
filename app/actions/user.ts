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

export async function signUp(
  fullname: string,
  email: string,
  password: string
) {
  const body = JSON.parse(JSON.stringify({ fullname, email, password }));
  console.log(body);
  const reqBody = user_signup_schema.safeParse(body);

  if (!reqBody.success) {
    return NextResponse.json(
      { error: reqBody.error.issues[0].message },
      { status: 400 }
    );
  }

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
    return NextResponse.json(
      { error: "Try with other email" },
      { status: 500 }
    );
  }
}

const user_signin_schema = z.object({
  email: z.string().email(),
});

export async function signIn(req: Request) {
  const { searchParams } = new URL(req.url);
  const uemail = searchParams.get("email");

  if (!uemail) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const parsed_email = user_signin_schema.safeParse({ email: uemail });

  if (!parsed_email.success) {
    return NextResponse.json({ error: "Enter right email" }, { status: 400 });
  }

  try {
    const userDetails = await prisma.user.findFirst({
      where: {
        email: parsed_email.data.email,
      },
    });
    if (!userDetails) {
      return NextResponse.json({ error: "Not Found!" }, { status: 404 });
    }
    return NextResponse.json({
      id: userDetails.id,
      FullName: userDetails.fullname,
    });
  } catch (e) {
    console.error(e);
  }
}
