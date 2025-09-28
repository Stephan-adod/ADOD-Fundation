#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const outDir = path.join('.metrics');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const outFile = path.join(outDir, 'ci_runs.csv');
if (!fs.existsSync(outFile)) {
  fs.writeFileSync(outFile, 'timestamp,run_number,branch,sha,event,workflow,status,first_attempt\n');
}

const now = new Date().toISOString();
const runNumber = process.env.GITHUB_RUN_NUMBER || '';
const ref = process.env.GITHUB_REF || '';
const branch = ref.replace('refs/heads/', '');
const sha = process.env.GITHUB_SHA || '';
const event = process.env.GITHUB_EVENT_NAME || '';
const workflow = process.env.GITHUB_WORKFLOW || '';
const status = process.env.CI_JOB_STATUS || process.env.JOB_STATUS || 'unknown';
const firstAttempt = process.env.GITHUB_RUN_ATTEMPT === '1' ? '1' : '0';

const line = `${now},${runNumber},${branch},${sha},${event},${workflow},${status},${firstAttempt}\n`;
fs.appendFileSync(outFile, line, 'utf8');
console.log('Appended:', line.trim());
