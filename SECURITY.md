# Credential Rotation & History Cleanup

## Current status

| Item | Status |
|------|--------|
| `main` branch history | ✅ Cleaned — `git filter-repo` was run and force-pushed |
| `src/components/supabase.js` | ✅ Uses `process.env` — no hardcoded key |
| `.env` | ✅ Listed in `.gitignore` — will not be committed again |
| `.env.example` | ✅ Added with placeholder values |
| Dangling commits (see below) | ⚠️ Still accessible via direct SHA — requires GitHub Support |
| Supabase anon key | ⚠️ **Must be rotated** — the old key is still visible in dangling commits |

## What happened

A Supabase anon key was accidentally committed in plaintext. It appeared in both
`src/components/supabase.js` and a committed `.env` file across these commits
(now removed from all branches):

| Old SHA | New SHA (rewritten) | Commit message |
|---------|---------------------|----------------|
| `0a3e88b` / `cc2a943` | `cfa32ae` | "moved data to database in supabase…" |
| `2430563` / `3c00809` | `3e49b18` | "Completed sign up from application page" |

The "Old SHAs" no longer appear in any branch's history. However, they are still
present as **dangling objects** in GitHub's repository storage. GitHub's secret
scanning flagged them because they remain reachable via direct URL.

## ⚠️ Required actions

### Step 1 — Rotate the Supabase anon key (**do this now, if not already done**)

Even though the key has been scrubbed from active branch history, the old commits
(`0a3e88b`, `cc2a943`, `2430563`, `3c00809`) are still accessible in GitHub's
object store. **Treat the exposed key as compromised and regenerate it.**

1. Open [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Select project **blrlevxupfhqzfmanjla**
3. Go to **Settings → API**
4. Click **Regenerate** next to the `anon` key
5. Update your local `.env` file with the new key

### Step 2 — Contact GitHub Support to remove the dangling commits

The 4 dangling commit SHAs below are **not on any branch** and cannot be removed
by any `git push`, force-push, or `git filter-repo` run. Only GitHub can delete
objects from their server-side storage.

1. Go to [https://support.github.com/contact](https://support.github.com/contact)
2. Choose **"Report a security vulnerability"** or **"Remove sensitive data"**
3. Provide this repository URL: `https://github.com/Ameya-bit/FBLA_WCD_Project`
4. Request removal of these specific dangling commit objects:
   - `0a3e88bde72f12080527afdc704eda3ec63c2e76`
   - `cc2a943b5614dbf20d2a76dc86e3c8ada3411e5c`
   - `2430563c5d14cd3befd863fd751e4f5a92a89ef4`
   - `3c0080973b9633ca1cc6c964d2923913bb07a7f0`

> **Note:** GitHub may indicate that some commits "may belong to a fork outside of
> the repository." If that is the case, they cannot be deleted until all forks
> that reference them are also deleted. GitHub Support can advise on next steps.

### Step 3 — Merge this PR

After contacting GitHub Support and rotating the key, merge this PR. This ensures
the PR branch also reflects the cleaned history in all GitHub diff views.

---

## How `main` was cleaned (reference)

The following steps were used to rewrite `main` history and are recorded here for
reference. **You do not need to run these again.**

> The key-extraction step (`git log --all -p | grep …`) was run against the
> **original, uncleaned clone** before the rewrite. Running it now would return
> nothing because the key is no longer present in any branch history.

#### macOS / Linux (bash/zsh)

```bash
git clone https://github.com/Ameya-bit/FBLA_WCD_Project.git
cd FBLA_WCD_Project
pip install git-filter-repo
# replacements.txt was created with the exposed key before history was rewritten:
# echo "<exposed-key>==>SUPABASE_KEY_REDACTED" > /tmp/replacements.txt
git filter-repo --replace-text /tmp/replacements.txt --force
git remote add origin https://github.com/Ameya-bit/FBLA_WCD_Project.git
git push --force origin main
```

#### 🪟 Windows (PowerShell)

```powershell
git clone https://github.com/Ameya-bit/FBLA_WCD_Project.git
cd FBLA_WCD_Project
pip install git-filter-repo
# replacements.txt was created with the exposed key before history was rewritten:
# "<exposed-key>==>SUPABASE_KEY_REDACTED" | Out-File -FilePath "$env:TEMP\replacements.txt" -Encoding ascii
git filter-repo --replace-text "$env:TEMP\replacements.txt" --force
git remote add origin https://github.com/Ameya-bit/FBLA_WCD_Project.git
git push --force origin main
```
