# Repo Gap-Analyse – Stand vs. Phase-0 Soll

## Ziel
Automatisches Audit des Repos gegen Phase-0-Soll (Fundation, keine Drift).

## Checkliste & Bewertung

| Dimension | Phase-0 Soll | Ist-Zustand | Gap / Kommentar |
|---|---|---|---|
| **Systemkarte** | artefacts/systemkarte.md vorhanden (Stub 4 Ebenen) | fehlt | Datei anlegen |
| **Loops (8x Charta)** | artefacts/loops/*_Loop.md (>= 8 Dateien, Template ok) | 9 gefunden |  |
| **Iteration Log** | artefacts/iteration_log.md vorhanden (append-only) | fehlt | Datei anlegen |
| **Runbook Skeleton** | artefacts/runbook_skeleton.md vorhanden | fehlt | Datei anlegen |
| **Docs-Layer (.markdownlint.yml)** | .markdownlint.yml vorhanden | fehlt | Datei anlegen |
| **EOL-Normalisierung** | .gitattributes enthält '*.md text eol=lf' | fehlt | Datei anlegen |
| **tools/fix-md.mjs** | Auto-Fix Script vorhanden | fehlt | Datei anlegen |
| **CI-Basis** | .github/workflows/ci.yml mit mind. 1 Job | fehlt | Datei anlegen |
| **Execution Prompt** | artefacts/prompts/execution_prompt.md vorhanden | fehlt | Datei anlegen |
| **PR-Checks vorhanden** | mind. 1 Workflow-Datei in .github/workflows | 3 Workflows |  |
| **Branch Protection** | main geschützt (Required Checks) – manuell in GitHub | Script kann das nicht prüfen | Bitte in GitHub Settings prüfen/setzen |

## Nächste Schritte
- Behebe „Gap“-Einträge mit zielgerichteten Prompts/Commits.
- Führe danach `npm run audit:phase0` erneut aus, bis alle Gaps leer sind.
