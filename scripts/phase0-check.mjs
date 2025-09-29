#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOTS = ["artefacts/loops", "artefacts/logs"];
const REQUIRED_SECTIONS = [
  /^# /m                   // H1
];
const OPTIONAL_SECTIONS = [
  /^## Purpose/m, /^## Input/m, /^## Output/m, /^## Operator-Rolle/m, /^## KPI/m
];

let issues = [];

function checkFile(fp) {
  const raw = fs.readFileSync(fp, "utf8");
  // 1) H1 in Zeile 1
  if (!raw.startsWith("# ")) issues.push(`${fp}: H1 fehlt in Zeile 1 (MD041).`);
  // 2) Doppelte Leerzeilen vermeiden
  if (/\n{3,}/.test(raw)) issues.push(`${fp}: Mehr als 1 Leerzeile am Stück (MD012).`);
  // 3) Optional: Loop-Standardblöcke (nur Warnungen)
  OPTIONAL_SECTIONS.forEach((re) => {
    if (!re.test(raw)) issues.push(`${fp}: Hinweis – Abschnitt ${re.source} fehlt (Loop-Standard).`);
  });
}

for (const root of ROOTS) {
  if (!fs.existsSync(root)) continue;
  for (const f of fs.readdirSync(root)) {
    if (f.endsWith(".md")) checkFile(path.join(root, f));
  }
}

if (issues.length) {
  console.log("Phase0-Check: WARNUNGEN/ANKERPUNKTE:");
  issues.forEach((i) => console.log(" - " + i));
  process.exitCode = 0; // WARN ONLY
} else {
  console.log("Phase0-Check: OK");
}
