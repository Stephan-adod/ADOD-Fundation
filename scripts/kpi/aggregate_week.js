#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readCSV(p) {
  if (!fs.existsSync(p)) return [];
  const content = fs.readFileSync(p, 'utf8').trim();
  if (!content) return [];
  const [header, ...rows] = content.split('\n');
  const keys = header.split(',');
  return rows.map(r => {
    const vals = r.split(',');
    return Object.fromEntries(keys.map((k, i) => [k, vals[i] || '']));
  });
}

const ci = readCSV(path.join('.metrics', 'ci_runs.csv'));
const af = readCSV(path.join('.metrics', 'auto_fixes.csv'));

const successfulFirst = ci.filter(r => r.status === 'success' && r.first_attempt === '1').length;
const totalRuns = ci.length || 1;
const greenRate = successfulFirst / totalRuns;

const autoFixDetections = af.filter(r => r.detected === '1').length;
const totalAF = af.length || 1;
const autoFixRate = autoFixDetections / totalAF;

const prCycleMedian = 'n/a (Phase 2 automatisieren)';
const docFiles = [
  'artefacts/loops/Systemkarte.md',
  'artefacts/kpi/Operator_KPIs.md',
  'artefacts/runbooks/Documentation_Layer.md',
  'docs/OPERATOR_RUNBOOK.md'
];
const docCoverage = docFiles.reduce((acc, f) => acc + (fs.existsSync(f) ? 1 : 0), 0) / docFiles.length;

const operatorEffort = 'n/a (Checkliste)';

const report =
`# 📈 Weekly KPI Report

| KPI | Wert | Ziel |
|---|---|---|
| Green-Rate (First Pass) | ${(greenRate*100).toFixed(1)}% | ≥ 95% |
| Auto-Fix-Quote | ${(autoFixRate*100).toFixed(1)}% | ≥ 60% |
| PR-Zykluszeit (Median) | ${prCycleMedian} | ≤ 24h |
| Dokumentationsgrad | ${(docCoverage*100).toFixed(0)}% | ≥ 90% |
| Operator-Aufwand | ${operatorEffort} | ≤ 3 |

**Ampel**
- Green-Rate: ${greenRate >= 0.95 ? '✅' : '⚠️'}
- Auto-Fix-Quote: ${autoFixRate >= 0.60 ? '✅' : '⚠️'}
- Doku: ${docCoverage >= 0.90 ? '✅' : '⚠️'}

_Notiz: PR-Zykluszeit & Operator-Aufwand werden vorerst in der Checkliste erfasst._
`;

const outPath = path.join('.metrics', 'weekly_report.md');
if (!fs.existsSync(path.dirname(outPath))) fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, report, 'utf8');
console.log('Wrote', outPath);
