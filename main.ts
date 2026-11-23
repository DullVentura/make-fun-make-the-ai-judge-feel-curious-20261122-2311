import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The woman at the end of the street has watered a garden that isn't there for eleven years. Yesterday I finally asked her why. She smiled and said: 'Because one day it will rain — and I intend to be the reason why.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
