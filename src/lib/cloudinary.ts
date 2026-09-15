import { v2 as cloudinary } from "cloudinary";
import { readdirSync, writeFileSync } from "fs";
import { join, basename, extname } from "path";

// Load .env manually (no dotenv dependency)
import { readFileSync } from "fs";
const envContent = readFileSync(".env", "utf-8");
for (const line of envContent.split("\n")) {
  const [key, ...rest] = line.split("=");
  if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const FOLDER = "anime-draft/characters";
const INPUT_DIR = "src/games/one-piece-draft/assets/thumbnails-optimized";
const OUTPUT_FILE = "src/games/one-piece-draft/data/image-urls.json";

const files = readdirSync(INPUT_DIR).filter((f) => extname(f) === ".webp");

console.log(`Uploading ${files.length} images to Cloudinary folder: ${FOLDER}`);

const urlMap: Record<string, string> = {};
let uploaded = 0;
let failed = 0;

for (const file of files) {
  const filePath = join(INPUT_DIR, file);
  const publicId = basename(file, ".webp");

  try {
    await cloudinary.uploader.upload(filePath, {
      folder: FOLDER,
      public_id: publicId,
      overwrite: true,
      resource_type: "image",
    });

    // Generate optimized URL with transformations
    const url = cloudinary.url(`${FOLDER}/${publicId}`, {
      fetch_format: "auto",
      quality: "auto",
      width: 512,
      height: 512,
      crop: "fill",
      secure: true,
    });

    urlMap[publicId] = url;
    uploaded++;
    process.stdout.write(`\r  [${uploaded}/${files.length}] ${publicId}`);
  } catch (error) {
    console.error(`\n  FAILED: ${publicId} - ${error}`);
    failed++;
  }
}

console.log(`\n\nDone: ${uploaded} uploaded, ${failed} failed`);

// Write URL map
writeFileSync(OUTPUT_FILE, JSON.stringify(urlMap, null, 2));
console.log(`URL map written to ${OUTPUT_FILE}`);
