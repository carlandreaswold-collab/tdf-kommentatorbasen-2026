#!/usr/bin/env node
// Kjør: node sjekk.js
// Validerer at alle TdF-ryttere har fullstendig informasjon i data.js

const fs = require('fs');

// Last inn data.js og evaluer
const src = fs.readFileSync(__dirname + '/data.js', 'utf8')
  + '\nmodule.exports = { TDF_DATA };';
const tmp = require('os').tmpdir() + '/tdf_validate.js';
fs.writeFileSync(tmp, src);
const { TDF_DATA } = require(tmp);

const lag = TDF_DATA.lag;
const ryttere = TDF_DATA.ryttere;

let feil = 0;
let advarsler = 0;

function feil_(melding) { console.log('  ❌ FEIL:    ' + melding); feil++; }
function advarsel(melding) { console.log('  ⚠️  ADVARSEL: ' + melding); advarsler++; }
function ok(melding) { /* stille */ }

// ─── 1. RYTTERKORT-SJEKK ───────────────────────────────────────────────────
console.log('\n══════════════════════════════════════════');
console.log('  TdF-KOMMENTATORBASEN — VALIDERINGSSJEKK');
console.log('══════════════════════════════════════════\n');
console.log(`Sjekker ${ryttere.length} rytterkort...\n`);

const PAAKREVDE_FELT = ['navn', 'lag', 'land', 'rolle'];
const VIKTIGE_FELT   = ['meritter', 'form', 'historie'];

for (const r of ryttere) {
  const navn = r.navn || '(ukjent)';

  // Påkrevde felt — må finnes og ikke være tomme
  for (const felt of PAAKREVDE_FELT) {
    if (!r[felt] || String(r[felt]).trim() === '') {
      feil_(`${navn}: mangler «${felt}»`);
    }
  }

  // Viktige felt — bør finnes, men kan mangle for hjelpere
  for (const felt of VIKTIGE_FELT) {
    if (!r[felt] || String(r[felt]).trim() === '') {
      advarsel(`${navn}: tomt felt «${felt}»`);
    } else if (String(r[felt]).trim().length < 15) {
      advarsel(`${navn}: svært kort «${felt}» (${String(r[felt]).trim().length} tegn) — kan mangle innhold`);
    }
  }

  // Norske ryttere må ha norsk:true
  if (r.land === 'Norge' && !r.norsk) {
    feil_(`${navn}: land=Norge men mangler norsk:true — vises ikke i norsk-filteret!`);
  }

  // Skade-felt: sjekk for kjente dårlige oversettelser
  const skadeProblemer = [
    ['Hårsprekk', 'bruk "hairline fracture" eller "stressfraktur"'],
    ['beinmølje', 'bruk "multiple beinbrudd" eller "knusningsskade"'],
    ['magejinfeksjon', 'skrivefeil — skal være "mageinfeksjon"'],
    [/albu\//, 'bruk "albue og ..." i stedet for skråstrek'],
  ];
  const skadeTekst = r.skade || '';
  for (const [mønster, tips] of skadeProblemer) {
    const treffer = typeof mønster === 'string'
      ? skadeTekst.includes(mønster)
      : mønster.test(skadeTekst);
    if (treffer) {
      advarsel(`${navn}: skade-felt inneholder «${mønster}» — ${tips}`);
    }
  }
}

// ─── 2. LAG-SJEKK ──────────────────────────────────────────────────────────
console.log(`\nSjekker ${lag.length} lag...\n`);

// Bygg opp et sett med lagnavn (kort-koder) som har rytterkort
const kortMedKort = new Set(ryttere.map(r => r.lag));

for (const l of lag) {
  const navn = l.navn || l.kort;

  // Antall ryttere i lag.ryttere-strengen
  if (!l.ryttere || l.ryttere.trim() === '') {
    feil_(`${navn}: mangler rytterliste`);
  } else {
    const antall = l.ryttere.split(',').map(s => s.trim()).filter(Boolean).length;
    if (antall < 8) {
      advarsel(`${navn}: bare ${antall} ryttere oppført i troppen (forventer 8)`);
    }
  }

  // Minst én rytter med dette lag-kortet skal ha rytterkort
  if (!kortMedKort.has(l.kort)) {
    advarsel(`${navn} (${l.kort}): ingen rytterkort peker på dette laget`);
  }
}

// ─── 3. NORSKE RYTTERE ─────────────────────────────────────────────────────
console.log('\nNorske ryttere i databasen:');
const norske = ryttere.filter(r => r.norsk);
for (const r of norske) {
  console.log(`  ✓ ${r.navn} (${r.lag})`);
}

// ─── OPPSUMMERING ──────────────────────────────────────────────────────────
console.log('\n══════════════════════════════════════════');
console.log(`  RESULTAT: ${feil} feil, ${advarsler} advarsler`);
if (feil === 0 && advarsler === 0) {
  console.log('  Alt ser bra ut! 🟢');
} else if (feil === 0) {
  console.log('  Ingen kritiske feil, men sjekk advarslene. 🟡');
} else {
  console.log('  Kritiske feil må fikses! 🔴');
}
console.log('══════════════════════════════════════════\n');
