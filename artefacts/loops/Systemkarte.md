# 🗺️ Systemkarte Phase 1 (v0.4)

## Ziele
- Klare Architektur für Micro-SaaS schaffen
- Operator-UX einfach und verlässlich gestalten
- Fehler reduzieren durch Self-Healing & Governance
- Geschwindigkeit in Ticket → Code → Merge erhöhen
- Kontinuierliche kleine Verbesserungen sichern (Iteration Loop)

---

## Loops (mit Foundation-KPIs)

### [Strategy Loop](Strategy_Loop.md) → Vision, Ziele, Priorisierung
- **KPI:** Anzahl klar dokumentierter Ziele pro Quartal  

### [Execution Loop](Execution_Loop.md) → Ticket → Code → PR
- **KPI:** % PRs grün beim ersten Durchlauf  

### [Feedback Loop](Feedback_Loop.md) → Tests, Reviews, Auto-Fix
- **KPI:** Anzahl dokumentierter Lessons Learned  

### [Growth Loop](Growth_Loop.md) → Lernen, Metriken, Verbesserung
- **KPI:** % Loops mit dokumentierten Verbesserungen  

### [Governance Loop](Governance_Loop.md) → DoR/DoD, Runbooks, Regeln
- **KPI:** % PRs mit erfüllter DoR/DoD-Checkliste  

### [Documentation Loop](Documentation_Loop.md) → Auto/Manuell, Wissensbasis
- **KPI:** Dokumentationsgrad (Aktualität Artefakte)  

### [Safety Net Loop](SafetyNet_Loop.md) → Security, Dependencies, Compliance
- **KPI:** % Dependency-Updates gemerged  

### [Operator Loop](Operator_Loop.md) → Daily/Weekly Routinen
- **KPI:** Erfüllungsquote Weekly-Review  

### [Iteration Loop](Iteration_Loop.md) → Kleine Verbesserungen dokumentieren & umsetzen
- **KPI:** ≥ 1 Iteration pro Woche im `Iteration_Log.md`  

---

## Artefakte
- `artefacts/loops/*_Loop.md` (9 Dateien inkl. Iteration Loop)
- `artefacts/kpi/Operator_KPIs.md`
- `artefacts/runbooks/Documentation_Layer.md`
- `docs/OPERATOR_RUNBOOK.md`
- `artefacts/Operator_Proof.md`
- `artefacts/logs/Iteration_Log.md` (neu)

---

## Globale KPIs (aus allen Loops)
- **Green-Rate**: % PRs, die beim ersten Durchlauf grün sind  
- **PR-Zykluszeit**: Zeit von Ticket bis Merge  
- **Dokumentationsgrad**: Anteil Artefakte mit aktuellem Inhalt  
- **Operator-Zeitaufwand**: Stunden pro Woche für Meta-Aufgaben  
- **Iteration-Frequenz**: ≥ 1 Iteration pro Woche im Log
