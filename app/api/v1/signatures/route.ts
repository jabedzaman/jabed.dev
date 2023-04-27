import { NextResponse } from "next/server";
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

export async function GET(request: Request) {
  const signatures = await prisma.signature.findMany();
  return NextResponse.json({
    data: signatures,
  });
}
