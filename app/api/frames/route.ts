import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const orangeDir = path.join(process.cwd(), "public", "orange");

    if (!fs.existsSync(orangeDir)) {
      return NextResponse.json({ frames: [] });
    }

    const validExtensions = new Set([".png", ".jpg", ".jpeg", ".webp"]);
    const files = fs.readdirSync(orangeDir);

    const frameFiles = files
      .filter((file) => validExtensions.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
      .map((file) => `/orange/${file}`);

    return NextResponse.json({
      success: true,
      count: frameFiles.length,
      frames: frameFiles,
    });
  } catch (error) {
    console.error("Failed to read orange sequence frames:", error);
    return NextResponse.json({ success: false, frames: [] }, { status: 500 });
  }
}
