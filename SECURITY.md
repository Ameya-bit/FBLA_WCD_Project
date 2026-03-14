# Credential Rotation & History Cleanup

## What happened

A Supabase anon key was accidentally committed in plaintext across several commits.
It appeared in both `src/components/supabase.js` **and** a committed `.env` file.

This PR has already:
- Replaced the exposed key with `SUPABASE_KEY_REDACTED` in the **PR branch** history
  using `git filter-repo`
- Updated `src/components/supabase.js` and `src/pages/apply.js` / `src/pages/profile.js`
  to read credentials from environment variables
- Added `.env.example` with placeholder values
- Ensured `.env` is in `.gitignore`

## ⚠️ Required: clean `main` and rotate the key

### Step 1 — Rotate the Supabase anon key (do this first)

1. Open [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Select project **blrlevxupfhqzfmanjla**
3. Go to **Settings → API**
4. Click **Regenerate** next to the `anon` key
5. Update your `.env` file with the new key

### Step 2 — Rewrite `main` history locally

> **Can this be done from the GitHub web UI?**
> **No.** GitHub's web interface cannot rewrite git history. You must run
> `git filter-repo` locally and then force-push.

Pick the tab that matches your operating system.

---

#### 🪟 Windows (PowerShell)

Open **PowerShell** (not CMD), then run each block one at a time:

```powershell
# 1. Clone a fresh copy of the current main
git clone https://github.com/Ameya-bit/FBLA_WCD_Project.git
cd FBLA_WCD_Project
```

```powershell
# 2. Install git-filter-repo (Python 3.6+ required)
pip install git-filter-repo
```

```powershell
# 3. Extract the key from git history and write the replacements file
$key = git log --all -p |
    Select-String -Pattern 'eyJhbGci[A-Za-z0-9._-]+' -AllMatches |
    ForEach-Object { $_.Matches } |
    ForEach-Object { $_.Value } |
    Sort-Object -Unique |
    Select-Object -First 1
"${key}==>SUPABASE_KEY_REDACTED" | Out-File -FilePath "$env:TEMP\replacements.txt" -Encoding ascii
```

```powershell
# 4. Verify the file looks right (should start with eyJhbGci...==>SUPABASE_KEY_REDACTED)
Get-Content "$env:TEMP\replacements.txt"
```

```powershell
# 5. Rewrite all history on main
git filter-repo --replace-text "$env:TEMP\replacements.txt" --force
```

```powershell
# 6. Re-add origin (filter-repo removes it) and force-push
git remote add origin https://github.com/Ameya-bit/FBLA_WCD_Project.git
git push --force origin main
```

---

#### 🍎 macOS / Linux (bash/zsh)

```bash
# 1. Clone a fresh copy of the current main
git clone https://github.com/Ameya-bit/FBLA_WCD_Project.git
cd FBLA_WCD_Project

# 2. Install git-filter-repo (Python 3.6+ required)
pip install git-filter-repo

# 3. Extract the key from git history and write the replacements file
KEY=$(git log --all -p | grep -oE 'eyJhbGci[A-Za-z0-9._-]+' | sort -u | head -1)
echo "${KEY}==>SUPABASE_KEY_REDACTED" > /tmp/replacements.txt

# 4. Verify the file looks right
cat /tmp/replacements.txt
# Expected: eyJhbGci...==>SUPABASE_KEY_REDACTED

# 5. Rewrite all history on main
git filter-repo --replace-text /tmp/replacements.txt --force

# 6. Re-add origin and force-push
git remote add origin https://github.com/Ameya-bit/FBLA_WCD_Project.git
git push --force origin main
```

---

### Step 3 — Verify the cleanup worked

After force-pushing, run this to confirm zero JWT tokens remain.

**Windows (PowerShell):**
```powershell
(git log --all -p | Select-String -Pattern 'eyJhbGci').Count
# Must output: 0
```

**macOS / Linux:**
```bash
git log --all -p | grep -cE 'eyJhbGci'
# Must output: 0
```

### Step 4 — Tell GitHub to remove cached views

After force-pushing, GitHub may still show old commit diffs in its cache.
Contact GitHub Support at [https://support.github.com/contact](https://support.github.com/contact)
and request removal of cached objects for repository `Ameya-bit/FBLA_WCD_Project`
that contain the exposed key.

### Step 5 — Merge this PR

After `main` is force-pushed and verified clean, merge this PR so the PR branch
also reflects the cleaned history in all views.
