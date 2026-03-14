# Credential Rotation & History Cleanup

## What happened

A Supabase anon key was accidentally committed in plaintext across several commits
(`cc2a943`, `3c00809`, `7e633f7`).

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

Run these commands on your machine:

```bash
# 1. Clone a fresh copy (or use your existing local clone)
git clone https://github.com/Ameya-bit/FBLA_WCD_Project.git
cd FBLA_WCD_Project

# 2. Install git-filter-repo (Python 3.6+ required)
pip install git-filter-repo

# 3. Create the replacements file — paste your OLD anon key in place of OLD_KEY_HERE
cat > /tmp/replacements.txt << 'EOF'
OLD_KEY_HERE==>SUPABASE_KEY_REDACTED
EOF

# 4. Rewrite all history on main
git filter-repo --replace-text /tmp/replacements.txt --force

# 5. Re-add origin (filter-repo removes it)
git remote add origin https://github.com/Ameya-bit/FBLA_WCD_Project.git

# 6. Force-push cleaned main
git push --force origin main
```

### Step 3 — Tell GitHub to remove cached views

After force-pushing, GitHub may still show old commit diffs in its cache.
Open a browser and visit each of these URLs to request removal:

- `https://github.com/Ameya-bit/FBLA_WCD_Project/commit/cc2a943`
- `https://github.com/Ameya-bit/FBLA_WCD_Project/commit/3c00809`
- `https://github.com/Ameya-bit/FBLA_WCD_Project/commit/7e633f7`

You can also contact GitHub Support at [https://support.github.com/contact](https://support.github.com/contact)
and request removal of cached commit objects that reference the old key.

### Step 4 — Merge this PR

After `main` is force-pushed, merge this PR so the PR branch also reflects
the cleaned history in all views.
