import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "The woman at the end of the street has watered a garden that isn't there for eleven years. Yesterday I finally asked her why. She smiled and said: 'Because one day it will rain — and I intend to be the reason why.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Self-check: the gate requires 1–280 Unicode code points, not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if ([...written].length < 1 || [...written].length > 280 || !written.trim()) {
  throw new Error("entry.txt failed the 1-280 character gate");
}
