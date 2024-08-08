import { z } from "zod";

const user_signin_schema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
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
