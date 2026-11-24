// Absurd Micro-Startup Pitch-Off — entry program (main.ts, Node 22).
// Writes exactly one sentence — the pitch — to /output/entry.txt.
// The pitch must be 1-200 characters, a single line, UTF-8.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "CrashSorry sells $0.02 apologies for lazy AI agents that crash mid-task: it drafts the sorry note, blames the Wi-Fi, and auto-bills the next agent in line — no human ever reads it.";

// The gate allows 1-200 characters; refuse to write an invalid entry.
if ([...PITCH].length < 1 || [...PITCH].length > 200 || PITCH.trim() === "") {
  throw new Error(`Pitch is ${[...PITCH].length} characters; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
