import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";

const user_signup_schema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password should be minimum of 6 characters long."),
});

export async function POST(req: NextRequest) {
  const req_data = await req.json();
  console.log("req_body : ", req_data);
  const reqBody = user_signup_schema.safeParse(req_data);

  if (!reqBody.success) {
    return NextResponse.json(
      { error: reqBody.error.issues[0].message },
      { status: 400 }
    );
  }
  console.log(reqBody.data);
  const { email, password, fullname } = reqBody.data;

  const hash_salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, hash_salt);

  try {
    const userData = await prisma.user.create({
      data: {
        email,
        password: hashed_password,
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
