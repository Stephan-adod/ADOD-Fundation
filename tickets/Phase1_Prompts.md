# 🎯 Phase 1 – Prompts Sammeldokument

Dieses Dokument enthält alle Prompts, mit denen die Foundation-Artefakte von Phase 1 erstellt werden.  
Ziel: **Wiederholbarkeit, Governance, Onboarding.**

---

## AT-001 · Systemkarte & Loop-Charta

Erstelle eine Systemkarte in Markdown mit 4 Ebenen:

Ziele

Loops

Artefakte

KPIs

Format: Klarer Markdown-Tree oder Tabelle.
Sprache: einfach, operator-verständlich.

Lege zusätzlich 8 Loop-Charta-Dateien an (artefacts/loops/*_Loop.md), jede mit:

Purpose

Input

Output

Operator-Rolle

KPI
Sprache: klar, operator-verständlich.

yaml
Code kopieren

---

## AT-002 · Operator KPIs

Erstelle eine Markdown-Datei artefacts/kpi/Operator_KPIs.md mit 3–5 klaren Operator-KPIs.
Format: Tabelle mit Spalten (KPI, Definition, Messmethode, Zielwert).
Sprache: operator-verständlich, keine Fachjargon-Abkürzungen.

yaml
Code kopieren

---

## AT-003 · Documentation Layer Matrix

Erstelle die Datei artefacts/runbooks/Documentation_Layer.md.

Inhalt: Eine Markdown-Matrix mit folgenden Spalten:

Artefakt

Quelle

Auto/Manuell

Frequenz

Owner

Ziel: Klarheit für Operator, was dokumentiert werden muss vs. automatisch erzeugt wird.

Nutze folgende Beispiel-Einträge:

Artefakt	Quelle	Auto/Manuell	Frequenz	Owner
Systemkarte (artefacts/loops/Systemkarte.md)	Product Canvas / Operator	Manuell	bei Änderung der Ziele/Loops	Operator
Loop-Chartas (artefacts/loops/*_Loop.md)	Operator, Ticket Loops	Manuell	bei Loop-Definition oder -Update	Operator
Operator KPIs (artefacts/kpi/Operator_KPIs.md)	KPI-Definition, Weekly Reports	Manuell (Definition) + Auto (Report)	initial + wöchentlich	Operator + KPI-Bot
KPI-Report (.metrics/weekly_report.md)	CI/CD Metrics, Scripts	Auto	wöchentlich	KPI-Bot
Documentation Layer (artefacts/runbooks/Documentation_Layer.md)	Operator	Manuell	bei Strukturänderungen	Operator
Operator Runbook (docs/OPERATOR_RUNBOOK.md)	Operator, Governance	Manuell	bei Prozessänderungen	Operator
Changelog (CHANGELOG.md)	PRs, Release-Workflow	Auto	bei jedem Merge/Release	CI/CD
Dependency Updates (dependabot.yml PRs)	Dependabot	Auto	wöchentlich	Bot

yaml
Code kopieren

---

## AT-004 · Operator Runbook Skeleton

Erstelle die Datei docs/OPERATOR_RUNBOOK.md.

Inhalt: Skeleton für das Operator Runbook mit drei Zeitebenen:

Daily

Weekly

Monthly

Jede Ebene soll 3–5 Operator-Aufgaben enthalten, mit Referenzen auf Artefakte (Loops, KPIs, Documentation Layer).
Noch kein detaillierter Inhalt, nur Struktur und Platzhalter.
Sprache: operator-verständlich, kurz, keine Fachbegriffe.

Beispielstruktur:

📘 Operator Runbook (Skeleton)
🎯 Zweck
Dieses Runbook beschreibt, was ein Operator täglich, wöchentlich und monatlich tun muss.
Ziel: Klarheit, Einfachheit, Wiederholbarkeit.

📅 Daily
 Check offenes Ticket-Board (tickets/Phase1_Board.md)

 CI-Status prüfen (Green-Rate im Blick)

 Dokumentations-Layer aktuell? (artefacts/runbooks/Documentation_Layer.md)

📆 Weekly
 Operator KPI Checkliste ausfüllen (artefacts/kpi/Operator_KPI_Checklist.md)

 Weekly KPI Report lesen (.metrics/weekly_report.md)

 Loops/Artefakte-Änderungen reviewen (artefacts/loops/*_Loop.md)

📊 Monthly
 Systemkarte prüfen & ggf. anpassen (artefacts/loops/Systemkarte.md)

 Governance/Standards im PR-Template checken (.github/pull_request_template.md)

 Retrospektive: Welche Regeln/Artefakte müssen verbessert werden?

yaml
Code kopieren

---

## AT-005 · Operator Proof

Erstelle eine Markdown-Datei artefacts/Operator_Proof.md, die dokumentiert:

Welche Artefakte vorhanden sind (Liste mit Pfad)

Ob Operator-Test bestanden (Ja/Nein)

Feedback aus dem Operator-Test (max. 5 Bullet Points)
Ziel: Nachweis, dass Phase 1 vollständig abgeschlossen ist.

yaml
Code kopieren

---
