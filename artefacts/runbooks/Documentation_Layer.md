# 📚 Documentation Layer Übersicht

| Artefakt | Quelle | Auto/Manuell | Frequenz | Owner |
|----------|--------|--------------|----------|-------|
| Systemkarte (`artefacts/loops/Systemkarte.md`) | Product Canvas / Operator | Manuell | bei Änderung der Ziele/Loops | Operator |
| Loop-Chartas (`artefacts/loops/*_Loop.md`) | Operator, Ticket Loops | Manuell | bei Loop-Definition oder -Update | Operator |
| Operator KPIs (`artefacts/kpi/Operator_KPIs.md`) | KPI-Definition, Weekly Reports | Manuell (Definition) + Auto (Report) | initial + wöchentlich | Operator + KPI-Bot |
| KPI-Report (`.metrics/weekly_report.md`) | CI/CD Metrics, Scripts | Auto | wöchentlich | KPI-Bot |
| Documentation Layer (`artefacts/runbooks/Documentation_Layer.md`) | Operator | Manuell | bei Strukturänderungen | Operator |
| Operator Runbook (`docs/OPERATOR_RUNBOOK.md`) | Operator, Governance | Manuell | bei Prozessänderungen | Operator |
| Changelog (`CHANGELOG.md`) | PRs, Release-Workflow | Auto | bei jedem Merge/Release | CI/CD |
| Dependency Updates (`dependabot.yml` PRs) | Dependabot | Auto | wöchentlich | Bot |

Hinweis: Diese Matrix zeigt, was du selbst pflegst und was automatisch entsteht.
