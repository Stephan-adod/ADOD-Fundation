#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function safeExec(cmd) {
  try { return execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); }
  catch { return ''; }
}

const msg = safeExec('git log -1 --pretty=%B');
let files = safeExec('git diff --name-only HEAD^ HEAD');
if (!files) {
  files = safeExec('git show --pretty="" --name-only HEAD');
}
const autoFixByFiles = files.split('\n').some(name => /lint|format/i.test(name));
const detected = (/\[auto-fix\]/i.test(msg) || autoFixByFiles) ? 1 : 0;

const outDir = path.join('.metrics');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const outFile = path.join(outDir, 'auto_fixes.csv');
if (!fs.existsSync(outFile)) {
  fs.writeFileSync(outFile, 'timestamp,sha,detected\n');
}

const now = new Date().toISOString();
const sha = process.env.GITHUB_SHA || safeExec('git rev-parse HEAD');
fs.appendFileSync(outFile, `${now},${sha},${detected}\n`, 'utf8');
console.log('auto-fix detected:', detected);
