# 📊 Operator KPIs

Ziel: Klare Messpunkte, ob das Arbeiten im System funktioniert und für den Operator einfach bleibt.  
Die KPIs sind so formuliert, dass sie ohne technisches Fachwissen überprüfbar sind.

---

| KPI                | Definition                                                | Messmethode                                    | Zielwert |
|---------------------|-----------------------------------------------------------|------------------------------------------------|----------|
| **Green-Rate**      | Anteil der Pull Requests, die beim ersten Durchlauf ohne Fehler durchlaufen | CI-Status prüfen (grün beim ersten Lauf)       | ≥ 95 %   |
| **PR-Zykluszeit**   | Zeit vom Erstellen eines Tickets bis zum Merge in den Hauptzweig | Zeitstempel „Ticket erstellt“ → „Merge erfolgt“ | ≤ 24 h   |
| **Auto-Fix-Quote**  | Anteil der Fehler, die automatisch behoben werden (Lint, Format, Security) | Zählen von Auto-Fix-Commits im PR              | ≥ 60 %   |
| **Dokumentationsgrad** | Anteil der Artefakte (Loops, KPIs, Runbooks), die aktuell gepflegt sind | Checklisten-Review einmal pro Woche            | ≥ 90 %   |
| **Operator-Aufwand** | Anzahl der manuellen Schritte, die ein Operator pro Ticket erledigen muss | Zählen der Operator-Aktionen (DoR, DoD, Merge) | ≤ 3      |

---
