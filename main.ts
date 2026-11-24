import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Approved. Merging now, so future us can wonder what past us meant, in production.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
