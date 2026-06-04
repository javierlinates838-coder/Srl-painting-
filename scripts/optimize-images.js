const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = process.cwd();

async function optimizeImage(filePath, maxWidth) {
  const ext = path.extname(filePath).toLowerCase();
  const input = await sharp(filePath);
  const meta = await input.metadata();
  const width = meta.width && meta.width > maxWidth ? maxWidth : meta.width;

  let pipeline = input.rotate();
  if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true });

  if (ext === ".png") {
    await pipeline.png({ quality: 85, compressionLevel: 9, palette: true }).toFile(`${filePath}.opt`);
  } else {
    await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(`${filePath}.opt`);
  }

  fs.renameSync(`${filePath}.opt`, filePath);
  const stats = fs.statSync(filePath);
  console.log(`Optimized ${path.relative(root, filePath)} → ${Math.round(stats.size / 1024)} KB`);
}

async function main() {
  const targets = [
    { file: "public/logo.png", maxWidth: 512 },
    { file: "src/assets/srl-logo.png", maxWidth: 512 },
  ];

  const projectDir = path.join(root, "public/projects");
  if (fs.existsSync(projectDir)) {
    for (const name of fs.readdirSync(projectDir)) {
      if (/\.jpe?g$/i.test(name)) {
        targets.push({ file: `public/projects/${name}`, maxWidth: 1400 });
      }
    }
  }

  for (const { file, maxWidth } of targets) {
    const full = path.join(root, file);
    if (fs.existsSync(full)) await optimizeImage(full, maxWidth);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
