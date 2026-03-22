const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "frontend", "public", "media", "images");
fs.mkdirSync(root, { recursive: true });

const png1 = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64"
);
const jpeg1 = Buffer.from(
  "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQAAAAAAA//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwCH/9k=",
  "base64"
);

function svg(label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200">
  <rect fill="#f0f4f8" width="400" height="200"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#666" font-family="sans-serif" font-size="14">${label}</text>
</svg>`;
}

const pngNames = [
  "smallcaseLogo.png",
  "kite.png",
  "console.png",
  "coin.png",
  "kiteconnect.png",
  "varsity.png",
  "ecosystem.png",
  "homeHero.png",
  "pressLogos.png",
];
const jpgNames = ["nithinKamath.jpg"];

const svgMap = {
  "logo.svg": "Logo",
  "googlePlayBadge.svg": "Google Play",
  "appstoreBadge.svg": "App Store",
  "pricingEquity.svg": "Pricing equity",
  "intradayTrades.svg": "Intraday",
  "education.svg": "Education",
  "largestBroker.svg": "Largest broker",
};

for (const f of pngNames) fs.writeFileSync(path.join(root, f), png1);
for (const f of jpgNames) fs.writeFileSync(path.join(root, f), jpeg1);
for (const [file, label] of Object.entries(svgMap)) {
  fs.writeFileSync(path.join(root, file), svg(label), "utf8");
}

console.log("Placeholder media written to", root);
