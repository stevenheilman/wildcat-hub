# Connect the family Google Sheet (about 10 minutes, one time)

The **To Do's** and **Things I Need** lists on Holden's hub are stored in a Google Sheet that you own.
Everyone in the family sees the same lists on any phone or computer, with no logins. A **family code**
keeps strangers out: the public website never contains your list items.

## 1. Create the Sheet
1. Go to [sheets.new](https://sheets.new) while signed in to your Google account.
2. Name it **Holden K-State Hub**.
3. Leave sharing as **Restricted**. The website reaches it through the script below, so you don't need to share the Sheet.
   (You can still share it with family Google accounts if they'd like to edit it directly in Google Sheets.)

## 2. Add the script
1. In the Sheet, open **Extensions ▸ Apps Script**.
2. Delete everything in the editor and paste the full contents of
   [`google-apps-script/Code.gs`](google-apps-script/Code.gs).
3. On the line `const FAMILY_CODE = 'CHANGE-ME';`, replace `CHANGE-ME` with your family code:
   6+ letters/numbers that are easy to remember (for example `WildcatFamily27`). Only share it with family.
4. Click the **💾 Save** icon.

## 3. Run setup once
1. In the toolbar's function menu, choose **setup**, then click **▶ Run**.
2. Google asks for permission: **Review permissions ▸ your account ▸ Advanced ▸ Go to (project) ▸ Allow**.
   (The script can only use this one spreadsheet; the warning appears because you wrote the script yourself.)
3. Back in the Sheet you'll see tabs **To Dos**, **Things I Need** and **Settings**, plus Holden's starter to-dos.

## 4. Publish it as a web app
1. Click **Deploy ▸ New deployment**.
2. Click the ⚙️ gear next to "Select type" ▸ **Web app**.
3. Set **Execute as: Me** and **Who has access: Anyone**. "Anyone" is needed so family members without
   Google accounts can use it; the family code is what keeps it private.
4. Click **Deploy**, then copy the **Web app URL** (it ends in `/exec`).

## 5. Send the URL to Claude
Paste the Web app URL into the chat. Claude adds it to `config.js` and republishes the site.
(Or edit `config.js` on GitHub yourself: put the URL between the quotes after `sheetsUrl:`.)

## Using it
- The first time each person opens To Do's or Things I Need, they type the family code once on that device.
- Changes appear for everyone within about 30 seconds, without refreshing.
- You can also edit directly in the Google Sheet. Add rows at the bottom; leave the hidden **id** column blank.

## Changing the family code later
Edit `FAMILY_CODE` in Apps Script, save, then **Deploy ▸ Manage deployments ▸ ✏️ Edit ▸ Version: New version ▸ Deploy**.
The Web app URL stays the same. Everyone types the new code on their next visit.
