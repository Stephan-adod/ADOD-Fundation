# 🗺️ Systemkarte Phase 1 (v0.2)

## Ziele
- Klare Architektur für Micro-SaaS schaffen
- Operator-UX einfach und verlässlich gestalten
- Fehler reduzieren durch Self-Healing & Governance
- Geschwindigkeit in Ticket → Code → Merge erhöhen

---

## Loops (mit KPIs)

### Strategy Loop → Vision, Ziele, Priorisierung
- **KPI 1:** Anzahl klar dokumentierter Ziele pro Quartal  
- **KPI 2:** % Tickets, die auf ein Ziel gemappt sind  

### Execution Loop → Ticket → Code → PR
- **KPI 1:** Green-Rate (% PRs grün beim ersten Durchlauf)  
- **KPI 2:** Median PR-Zykluszeit (Ticket bis Merge)  

### Feedback Loop → Tests, Reviews, Auto-Fix
- **KPI 1:** Auto-Fix-Quote (% Fehler automatisch behoben)  
- **KPI 2:** Review-Latenz (Ø Zeit bis erstes Review)  

### Growth Loop → Lernen, Metriken, Verbesserung
- **KPI 1:** Anzahl Lessons Learned pro Monat  
- **KPI 2:** % Loops, die nach Refinement verbessert wurden  

### Governance Loop → DoR/DoD, Runbooks, Regeln
- **KPI 1:** % PRs mit vollständigen DoR/DoD-Checklisten  
- **KPI 2:** Abweichungsrate (PRs ohne erfüllte Governance-Kriterien)  

### Documentation Loop → Auto/Manuell, Wissensbasis
- **KPI 1:** Dokumentationsgrad (% Artefakte aktuell)  
- **KPI 2:** Ø Aktualisierungszeit pro Artefakt  

### Safety Net Loop → Security, Dependencies, Compliance
- **KPI 1:** % Security-PRs merged ohne Delay  
- **KPI 2:** Ø Zeit bis Dependency-Update gemerged  

### Operator Loop → Daily/Weekly/Monthly Routinen
- **KPI 1:** Operator-Zeitaufwand (Std/Woche für Meta)  
- **KPI 2:** Erfüllungsquote der geplanten Routinen (%)  

---

## Artefakte
- `artefacts/loops/*_Loop.md` (8 Dateien, je Loop eine Charta)
- `artefacts/kpi/Operator_KPIs.md`
- `artefacts/runbooks/Documentation_Layer.md`
- `docs/OPERATOR_RUNBOOK.md`
- `artefacts/Operator_Proof.md`

---

## Globale KPIs (aus allen Loops)
- **Green-Rate**: % PRs, die beim ersten Durchlauf grün sind  
- **PR-Zykluszeit**: Zeit von Ticket bis Merge  
- **Auto-Fix-Quote**: % Fehler, die automatisch behoben werden  
- **Dokumentationsgrad**: Anteil Artefakte mit aktuellem Inhalt  
- **Operator-Zeitaufwand**: Stunden pro Woche für Meta-Aufgaben
