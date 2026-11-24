import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "We took your money but lost your order. Don't pay twice — contact support before your bank statement makes this worse.";

function assertValidLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`LINE must be 1-200 characters, got ${line.length}`);
  }
  if (line !== line.trim()) {
    throw new Error("LINE must not have leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("LINE must be a single line");
  }
}

assertValidLine(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
