// Source-level regression checks only; not a browser, screen-reader, or WCAG audit.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
const read = (p) => fs.readFileSync(p, "utf8");
const source = read("src/components/site-interactions.tsx");
const css = read("src/app/globals.css");
const layout = read("src/app/layout.tsx");
const home = read("src/app/page.tsx");
let controls = 0;
const tree = ts.createSourceFile(
  "interactions.tsx",
  source,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TSX,
);
function walk(node) {
  if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
    const tag = node.tagName.getText(tree);
    if (["input", "select", "textarea"].includes(tag)) {
      controls++;
      const named = node.attributes.properties.some(
        (p) => p.name?.getText(tree) === "aria-label",
      );
      let parent = node.parent,
        labelled = false;
      while (parent) {
        if (
          ts.isJsxElement(parent) &&
          parent.openingElement.tagName.getText(tree) === "label"
        )
          labelled = true;
        parent = parent.parent;
      }
      assert.ok(named || labelled, `${tag} needs an accessible label`);
    }
    for (const attr of node.attributes.properties) {
      if (attr.name?.getText(tree) === "tabIndex")
        assert.ok(
          Number(
            (attr.initializer?.getText(tree) ?? "").replace(/[{}"']/g, ""),
          ) <= 0,
          "No positive tabindex",
        );
    }
  }
  ts.forEachChild(node, walk);
}
walk(tree);
assert.match(source, /const \[playing, setPlaying\] = useState\(false\)/);
assert.doesNotMatch(
  source,
  /setPlaying\(true\)/,
  "No automatic startup rotation",
);
assert.match(source, /onFocusCapture=\{\(\) => setPlaying\(false\)\}/);
assert.match(source, /aria-live="polite"/);
assert.match(source, /role="alert"/);
assert.match(source, /resultHeading\.current\?\.focus\(\)/);
assert.match(source.replace(/\s+/g, " "), /Fields marked \* are required/);
assert.match(layout, /lang="en"/);
assert.match(layout, /href="#main-content"/);
assert.doesNotMatch(layout, /maximumScale|userScalable:\s*false/);
assert.match(css, /prefers-reduced-motion/);
assert.match(css, /:focus-visible/);
assert.match(read("src/components/srl-icon.tsx"), /aria-hidden="true"/);
assert.doesNotMatch(home, /Bonded/);
assert.doesNotMatch(read("src/lib/site.ts"), /Maria G\.|James T\.|David R\./);
assert.match(read("src/components/reviews-section.tsx"), /site.googleReviews/);
function luminance(hex) {
  const rgb = hex
    .match(/[a-f0-9]{2}/gi)
    .map((x) => parseInt(x, 16) / 255)
    .map((x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
}
for (const [fg, bg] of [
  ["656963", "ffffff"],
  ["656963", "f4f4f1"],
  ["ffffff", "8b1a36"],
  ["222522", "ffffff"],
]) {
  const values = [luminance(fg), luminance(bg)].sort((a, b) => b - a);
  assert.ok(
    (values[0] + 0.05) / (values[1] + 0.05) >= 4.5,
    `Contrast ${fg}/${bg}`,
  );
}
console.log(
  `PASS: ${controls} labelled form controls; source checks for focus, motion, feedback, zoom, decorative icons, review links, and four text-color pairs. Not a full accessibility audit.`,
);
