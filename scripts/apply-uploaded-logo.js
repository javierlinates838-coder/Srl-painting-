const fs = require("fs");
const path = require("path");

const root = process.cwd();
const candidates = ["LOGO.png", "logo-upload.png", "user-logo.png", "srl-logo.png"];

for (const name of candidates) {
  const src = path.join(root, name);
  if (!fs.existsSync(src)) continue;

  fs.copyFileSync(src, path.join(root, "public/logo.png"));
  fs.copyFileSync(src, path.join(root, "src/assets/srl-logo.png"));
  console.log(`Applied logo from ${name}`);
  process.exit(0);
}
