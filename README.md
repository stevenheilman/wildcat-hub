# Our K-State Hub

A private family planning site for a student's first year at Kansas State University Salina
(B.S. Aviation Maintenance Management, starting Fall 2027). Not affiliated with Kansas State University.

**Live site:** https://stevenheilman.github.io/wildcat-hub/

| File | What it holds |
|---|---|
| `index.html` | Page shell and styles (light/dark, phone-friendly) |
| `app.js` | Pages, calendar, finances, map, lists, auto-update |
| `data.js` | Dates, news and sources: the only file the daily update changes |
| `version.json` | Bumped with each update; open pages reload themselves when it changes |
| `config.js` | The Google Sheet web-app URL for the shared lists |
| `google-apps-script/Code.gs` | Script that connects the lists to the family Google Sheet |
| `SETUP-GOOGLE-SHEET.md` | One-time steps to connect the Google Sheet |

**Privacy:** this repository is public. The to-do and shopping lists live in the family's Google Sheet behind
a family code and are never stored here. The site asks search engines not to index it.
