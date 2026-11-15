import sharp from "sharp";
import fs from "fs";
import path from "path";

async function generate() {
  const publicDir = path.join(process.cwd(), "public");

  const logoSvg = fs.readFileSync(path.join(publicDir, "logo.svg"));
  const miniSvg = fs.readFileSync(path.join(publicDir, "logo-mini.svg"));

  console.log("Generating PNG files...");

  // 1. High-Res Logo PNG (840 x 180 for 2x retina display)
  await sharp(logoSvg)
    .resize(840, 180)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, "logo.png"));
  console.log("✓ Created logo.png (840x180)");

  // 2. Mini Logo PNG (256 x 256)
  await sharp(miniSvg)
    .resize(256, 256)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, "logo-mini.png"));
  console.log("✓ Created logo-mini.png (256x256)");

  // 3. Apple Touch Icon (180 x 180)
  await sharp(miniSvg)
    .resize(180, 180)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("✓ Created apple-touch-icon.png (180x180)");

  // 4. Favicon 64x64
  await sharp(miniSvg)
    .resize(64, 64)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, "favicon.png"));
  console.log("✓ Created favicon.png (64x64)");

  // 5. Favicon 32x32
  await sharp(miniSvg)
    .resize(32, 32)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, "favicon-32x32.png"));
  console.log("✓ Created favicon-32x32.png");

  // 6. Favicon 16x16
  await sharp(miniSvg)
    .resize(16, 16)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, "favicon-16x16.png"));
  console.log("✓ Created favicon-16x16.png");

  console.log("All logo and favicon PNG files generated successfully!");
}

generate().catch(console.error);
