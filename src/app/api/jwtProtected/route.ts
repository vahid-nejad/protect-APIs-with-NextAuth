import { verifyJwt } from "@/lib/jwt";

export async function GET(request: Request) {
  const accessToken = request.headers.get("Authorization");

  if (accessToken && verifyJwt(accessToken)) return new Response(" Ok You Have Logged In!");

  return new Response("unauthorized", { status: 401 });
}
