/** @OnlyCurrentDoc */
/**
 * Holden's K-State Hub — Google Sheet connector
 * -------------------------------------------------------------
 * Paste this whole file into Extensions ▸ Apps Script of the family
 * Google Sheet, set FAMILY_CODE below, run setup() once, then
 * Deploy ▸ New deployment ▸ Web app (Execute as: Me, Who has access: Anyone).
 * Full steps: SETUP-GOOGLE-SHEET.md in the GitHub repository.
 *
 * The website only gets data when it sends the right FAMILY_CODE,
 * so the lists stay private even though the website itself is public.
 */

// 1) Choose a family code (share it only with family). Letters & numbers, 6+ characters.
const FAMILY_CODE = 'CHANGE-ME';

const LISTS = {
  todos: { sheet: 'To Dos',        cols: ['id', 'text', 'who', 'due', 'done', 'created', 'updated'] },
  needs: { sheet: 'Things I Need', cols: ['id', 'text', 'cat', 'price', 'got', 'created', 'updated'] }
};
const SETTINGS_SHEET = 'Settings';
const BOOL_COLS = ['done', 'got'];
const MAX_TEXT = 500;

const SEED_TODOS = [
  ['s1', 'Call K-State Salina Admissions to ask about additional scholarships I can still apply for (785-826-2640 · salinaadmissions@k-state.edu)', 'Holden', '2026-11-20'],
  ['s7', 'Ask about the Vanier Family Aviation Maintenance Scholarship (up to $7,500/yr for Aviation Maintenance Management majors who file the FAFSA)', 'Holden', '2026-11-20'],
  ['s2', 'Complete the K-State Scholarship Network (KSN) application', 'Holden', '2027-02-01'],
  ['s3', 'Submit the FAFSA (K-State school code 001928)', 'Parents', '2026-12-15'],
  ['s4', 'Sign up for K-State Salina New Student Onboarding and enroll in Fall 2027 classes', 'Holden', ''],
  ['s5', 'Apply for on-campus housing at K-State Salina (first-year students live on campus)', 'Family', ''],
  ['s6', 'Send final high school transcript to K-State after graduation', 'Holden', '']
];

/** Run once from the Apps Script editor: creates the tabs and starter to-dos. */
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(LISTS).forEach(function (k) {
    const L = LISTS[k];
    let sh = ss.getSheetByName(L.sheet) || ss.insertSheet(L.sheet);
    if (sh.getLastRow() === 0) {
      sh.getRange(1, 1, 1, L.cols.length).setValues([L.cols]).setFontWeight('bold').setBackground('#512888').setFontColor('#ffffff');
      sh.setFrozenRows(1);
    }
    // keep ids/dates as plain text so Sheets doesn't turn "2027-02-01" into a date
    L.cols.forEach(function (c, i) {
      if (c !== 'price' && BOOL_COLS.indexOf(c) < 0) sh.getRange(2, i + 1, 999, 1).setNumberFormat('@');
      // checkbox rule only (no values), so empty rows don't count as filled
      if (BOOL_COLS.indexOf(c) >= 0) sh.getRange(2, i + 1, 999, 1).setDataValidation(SpreadsheetApp.newDataValidation().requireCheckbox().build());
    });
    sh.hideColumns(1); // hide the id column
  });
  let st = ss.getSheetByName(SETTINGS_SHEET) || ss.insertSheet(SETTINGS_SHEET);
  if (st.getLastRow() === 0) st.getRange(1, 1, 1, 2).setValues([['name', 'value']]).setFontWeight('bold');
  const todos = ss.getSheetByName(LISTS.todos.sheet);
  if (todos.getLastRow() < 2) {
    const now = new Date().toISOString();
    todos.getRange(2, 1, SEED_TODOS.length, 7).setValues(SEED_TODOS.map(function (r) { return [r[0], r[1], r[2], r[3], false, now, now]; }));
  }
  const def = ss.getSheetByName('Sheet1');
  if (def && def.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(def);
}

function doGet(e) {
  if (!okKey(e && e.parameter && e.parameter.key)) return out({ ok: false, error: 'bad_key' });
  return out(readAll());
}

function doPost(e) {
  let b;
  try { b = JSON.parse(e.postData.contents); } catch (err) { return out({ ok: false, error: 'bad_request' }); }
  if (!okKey(b.key)) return out({ ok: false, error: 'bad_key' });
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (b.action === 'setting') {
      setSetting(String(b.key2 || '').slice(0, 40), String(b.value == null ? '' : b.value).slice(0, 200));
    } else {
      const L = LISTS[b.list];
      if (!L || !b.item || !b.item.id) return out({ ok: false, error: 'bad_request' });
      const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(L.sheet);
      const row = findRow(sh, String(b.item.id));
      const now = new Date().toISOString();
      if (b.action === 'add' && row < 0) {
        const rec = L.cols.map(function (c) {
          if (c === 'created' || c === 'updated') return now;
          return clean(c, b.item[c]);
        });
        sh.appendRow(rec);
      } else if (b.action === 'update' && row > 0) {
        L.cols.forEach(function (c, i) {
          if (c === 'id' || c === 'created' || !(c in b.item)) return;
          sh.getRange(row, i + 1).setValue(c === 'updated' ? now : clean(c, b.item[c]));
        });
        sh.getRange(row, L.cols.indexOf('updated') + 1).setValue(now);
      } else if (b.action === 'delete' && row > 0) {
        sh.deleteRow(row);
      }
    }
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }
  return out(readAll());
}

/* ---------- helpers ---------- */
function okKey(k) { return FAMILY_CODE !== 'CHANGE-ME' && typeof k === 'string' && k === FAMILY_CODE; }

function clean(c, v) {
  if (BOOL_COLS.indexOf(c) >= 0) return v === true || v === 'true' || v === 'TRUE';
  if (c === 'price') { const n = parseFloat(v); return isNaN(n) ? '' : Math.max(0, Math.round(n * 100) / 100); }
  return String(v == null ? '' : v).slice(0, MAX_TEXT);
}

function findRow(sh, id) {
  const n = sh.getLastRow();
  if (n < 2) return -1;
  const ids = sh.getRange(2, 1, n - 1, 1).getDisplayValues();
  for (let i = 0; i < ids.length; i++) if (ids[i][0] === id) return i + 2;
  return -1;
}

function readList(L) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(L.sheet);
  const n = sh.getLastRow();
  if (n < 2) return [];
  const vals = sh.getRange(2, 1, n - 1, L.cols.length).getValues();
  const tz = Session.getScriptTimeZone();
  return vals.filter(function (r) { return String(r[1]).trim() !== ''; }).map(function (r, i) {
    const o = {};
    L.cols.forEach(function (c, j) {
      let v = r[j];
      if (v instanceof Date) v = (c === 'due') ? Utilities.formatDate(v, tz, 'yyyy-MM-dd') : v.toISOString();
      if (BOOL_COLS.indexOf(c) >= 0) v = (v === true || v === 'TRUE');
      o[c] = v === null ? '' : v;
    });
    if (!o.id) { // a row typed directly into the Sheet: give it an id
      o.id = 'row' + Date.now().toString(36) + i;
      sh.getRange(i + 2, 1).setValue(o.id);
    }
    return o;
  });
}

function readAll() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const todos = readList(LISTS.todos), needs = readList(LISTS.needs);
  // newest first for to-dos (the website re-sorts by due date)
  todos.sort(function (a, b) { return String(b.created).localeCompare(String(a.created)); });
  const settings = {};
  const st = ss.getSheetByName(SETTINGS_SHEET);
  if (st && st.getLastRow() > 1) st.getRange(2, 1, st.getLastRow() - 1, 2).getDisplayValues().forEach(function (r) { if (r[0]) settings[r[0]] = r[1]; });
  let updated = '';
  todos.concat(needs).forEach(function (x) { if (String(x.updated) > updated) updated = String(x.updated); });
  return { ok: true, todos: todos, needs: needs, settings: settings, updated: updated, sheetUrl: ss.getUrl() };
}

function setSetting(name, value) {
  if (!name) return;
  const st = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SETTINGS_SHEET);
  const n = st.getLastRow();
  if (n > 1) {
    const names = st.getRange(2, 1, n - 1, 1).getDisplayValues();
    for (let i = 0; i < names.length; i++) if (names[i][0] === name) { st.getRange(i + 2, 2).setValue(value); return; }
  }
  st.appendRow([name, value]);
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
