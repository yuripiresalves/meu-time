import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectURL = new URL("/", request.url);

  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `@meu-time:token-1.0.0=; Path=/; max-age=0`,
    },
  });
}
