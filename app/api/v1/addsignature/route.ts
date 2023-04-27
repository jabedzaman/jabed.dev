import { NextResponse } from "next/server";
import type { signature } from "@/app/guestbook/page";
import * as utils from "@/utils";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(
  utils.isDev
    ? {
        log: ["query", "info", "warn"],
      }
    : {
        log: ["warn"],
      }
);

export async function POST(request: Request) {
  const isSession = await fetch(utils.URL + "/api/session", {
    cache: "no-cache",
  });
  const session = await isSession.json();
  const body = (await request.json()) as signature;
  if (!session.authenticated && body.name && body.email && body.message) {
    const signatures = await prisma.signature.create({
      data: {
        name: body.name,
        email: body.email,
        message: body.message,
      },
    });
    return NextResponse.json({
      data: "Signature by : " + signatures.name + " added",
    });
  } else {
    return NextResponse.json({
      data: "Either you are not logged in or you are missing some fields",
    });
  }
}
