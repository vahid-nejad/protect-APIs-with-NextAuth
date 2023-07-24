import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession();
  if (session && session.user) return new Response(" Ok You Have Logged In!");

  return new Response("unauthorized", { status: 401 });
}
