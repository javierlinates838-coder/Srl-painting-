// One-off photo finishing for the project gallery: gentle levels, color and
// sharpening so phone shots read crisp on a dark site. Writes to an output
// folder (default: overwrite in place) and keeps the originals in git history.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const src = path.join(process.cwd(), "public/projects");
const out = process.argv[2] ? path.resolve(process.argv[2]) : src;

async function enhance(name) {
  const input = path.join(src, name);
  const buffer = await sharp(input)
    .rotate()
    .normalise({ lower: 1, upper: 99.5 })
    .modulate({ saturation: 1.14, brightness: 1.02 })
    .linear(1.04, -4)
    .sharpen({ sigma: 0.9, m1: 0.6, m2: 2 })
    .jpeg({ quality: 84, mozjpeg: true, progressive: true })
    .toBuffer();
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, name), buffer);
  console.log(`Enhanced ${name} → ${Math.round(buffer.length / 1024)} KB`);
}

(async () => {
  for (const name of fs.readdirSync(src).filter((f) => f.endsWith(".jpg"))) await enhance(name);
})();
