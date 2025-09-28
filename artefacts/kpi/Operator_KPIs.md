# 📊 Operator KPIs

Ziel: Messen, ob Arbeit im System leicht, schnell und stabil ist.

| KPI | Definition | Messmethode | Zielwert |
|---|---|---|---|
| Green-Rate (First Pass) | Anteil PRs, die beim ersten Lauf grün sind | `.metrics/ci_runs.csv` → status==success & first_attempt==1 | ≥ 95 % |
| PR-Zykluszeit (Median) | Zeit von Ticket-Erstellung bis Merge | manuell in `Operator_KPI_Checklist.md` (vorerst) | ≤ 24 h |
| Auto-Fix-Quote | Anteil PRs mit erkanntem Auto-Fix (`[auto-fix]`) | `.metrics/auto_fixes.csv` | ≥ 60 % |
| Dokumentationsgrad | Anteil Kern-Artefakte mit aktueller Version | File-Existenz + Änderungsdatum | ≥ 90 % |
| Operator-Aufwand | Manuelle Schritte pro Ticket | `Operator_KPI_Checklist.md` | ≤ 3 |

Weitere Automatisierung: Siehe `.github/workflows/kpi-metrics.yml`.
