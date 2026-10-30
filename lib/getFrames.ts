import fs from "fs";
import path from "path";

export function getOrangeFrames(): string[] {
  try {
    const orangeDir = path.join(process.cwd(), "public", "orange");
    if (!fs.existsSync(orangeDir)) {
      return [];
    }

    const validExtensions = new Set([".png", ".jpg", ".jpeg", ".webp"]);
    const files = fs.readdirSync(orangeDir);

    return files
      .filter((file) => validExtensions.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
      .map((file) => `/orange/${file}`);
  } catch (err) {
    console.error("Error reading orange frames:", err);
    return [];
  }
}

