import fs from "fs";
import path from "path";

const exists = (p) => fs.existsSync(p);
const read = (p) => fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";

function glob(dir, filterFn, out=[]) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === ".git" || e.name === "node_modules") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) glob(p, filterFn, out);
    else if (!filterFn || filterFn(p)) out.push(p);
  }
  return out;
}

function hasWorkflowJobs(yml) {
  // Minimalprüfung: enthält "jobs:" irgendwo
  return /(^|\n)\s*jobs\s*:/m.test(yml);
}

function check() {
  const findings = [];

  // A) Systemkarte
  findings.push({
    key: "Systemkarte",
    soll: "artefacts/systemkarte.md vorhanden (Stub 4 Ebenen)",
    ist: exists("artefacts/systemkarte.md") ? "vorhanden" : "fehlt",
    gap: exists("artefacts/systemkarte.md") ? "" : "Datei anlegen",
  });

  // B) 8 Loops
  const loops = glob("artefacts/loops", (p) => p.endsWith("_Loop.md"));
  findings.push({
    key: "Loops (8x Charta)",
    soll: "artefacts/loops/*_Loop.md (>= 8 Dateien, Template ok)",
    ist: loops.length ? `${loops.length} gefunden` : "keine gefunden",
    gap: loops.length >= 8 ? "" : `es fehlen ${Math.max(0, 8 - loops.length)} Dateien`,
  });

  // C) Iteration Log
  findings.push({
    key: "Iteration Log",
    soll: "artefacts/iteration_log.md vorhanden (append-only)",
    ist: exists("artefacts/iteration_log.md") ? "vorhanden" : "fehlt",
    gap: exists("artefacts/iteration_log.md") ? "" : "Datei anlegen",
  });

  // D) Runbook Skeleton
  findings.push({
    key: "Runbook Skeleton",
    soll: "artefacts/runbook_skeleton.md vorhanden",
    ist: exists("artefacts/runbook_skeleton.md") ? "vorhanden" : "fehlt",
    gap: exists("artefacts/runbook_skeleton.md") ? "" : "Datei anlegen",
  });

  // E) markdownlint config
  findings.push({
    key: "Docs-Layer (.markdownlint.yml)",
    soll: ".markdownlint.yml vorhanden",
    ist: exists(".markdownlint.yml") ? "vorhanden" : "fehlt",
    gap: exists(".markdownlint.yml") ? "" : "Datei anlegen",
  });

  // F) .gitattributes LF-Regeln
  const ga = read(".gitattributes");
  const lfOk = /\*\.md\s+text\s+eol=lf/.test(ga);
  findings.push({
    key: "EOL-Normalisierung",
    soll: ".gitattributes enthält '*.md text eol=lf'",
    ist: exists(".gitattributes") ? (lfOk ? "OK" : "fehlt Regel") : "fehlt",
    gap: exists(".gitattributes") ? (lfOk ? "" : "Regel ergänzen") : "Datei anlegen",
  });

  // G) fix-md tool
  findings.push({
    key: "tools/fix-md.mjs",
    soll: "Auto-Fix Script vorhanden",
    ist: exists("tools/fix-md.mjs") ? "vorhanden" : "fehlt",
    gap: exists("tools/fix-md.mjs") ? "" : "Datei anlegen",
  });

  // H) CI Basis
  const ciYml = read(".github/workflows/ci.yml");
  findings.push({
    key: "CI-Basis",
    soll: ".github/workflows/ci.yml mit mind. 1 Job",
    ist: exists(".github/workflows/ci.yml") ? (hasWorkflowJobs(ciYml) ? "OK" : "Datei ohne jobs") : "fehlt",
    gap: exists(".github/workflows/ci.yml") ? (hasWorkflowJobs(ciYml) ? "" : "jobs hinzufügen") : "Datei anlegen",
  });

  // I) Execution Prompt
  findings.push({
    key: "Execution Prompt",
    soll: "artefacts/prompts/execution_prompt.md vorhanden",
    ist: exists("artefacts/prompts/execution_prompt.md") ? "vorhanden" : "fehlt",
    gap: exists("artefacts/prompts/execution_prompt.md") ? "" : "Datei anlegen",
  });

  // J) PR-Checks generell
  const workflows = exists(".github/workflows") ? glob(".github/workflows", (p)=>p.endsWith(".yml") || p.endsWith(".yaml")) : [];
  findings.push({
    key: "PR-Checks vorhanden",
    soll: "mind. 1 Workflow-Datei in .github/workflows",
    ist: workflows.length ? `${workflows.length} Workflows` : "keine",
    gap: workflows.length ? "" : "mind. 1 PR-Workflow anlegen",
  });

  // K) Branch Protection – Hinweis
  findings.push({
    key: "Branch Protection",
    soll: "main geschützt (Required Checks) – manuell in GitHub",
    ist: "Script kann das nicht prüfen",
    gap: "Bitte in GitHub Settings prüfen/setzen",
  });

  const table = [
    "| Dimension | Phase-0 Soll | Ist-Zustand | Gap / Kommentar |",
    "|---|---|---|---|",
    ...findings.map(f => `| **${f.key}** | ${f.soll} | ${f.ist} | ${f.gap} |`)
  ].join("\n");

  const md = `# Repo Gap-Analyse – Stand vs. Phase-0 Soll

## Ziel
Automatisches Audit des Repos gegen Phase-0-Soll (Fundation, keine Drift).

## Checkliste & Bewertung

${table}

## Nächste Schritte
- Behebe „Gap“-Einträge mit zielgerichteten Prompts/Commits.
- Führe danach \`npm run audit:phase0\` erneut aus, bis alle Gaps leer sind.
`;

  fs.mkdirSync("artefacts", { recursive: true });
  fs.writeFileSync("artefacts/repo_gap_analysis.md", md, "utf8");
  console.log("✅ artefacts/repo_gap_analysis.md aktualisiert.");
}

check();
