import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    data: {
      pkgName: process.env.npm_package_name,
      pkgVersion: process.env.npm_package_version,
      uptime: process.uptime(),
      timestamp: Date.now(),
    },
  });
}
