# Jake Alford — IT Project Portfolio Website

A static, responsive portfolio website for [Jake Alford](https://github.com/JakeAlford). It is based on his verified home-lab projects, with the same dark navy, teal and warm-cream palette as his current application PDF.

**Status:** Published at https://jakealford.github.io/it-portfolio/. GitHub Actions deploys changes from `main`.

## What's included

- `index.html`: mobile-friendly overview, verified outcomes, filterable project cards, technical skills, work approach, and contact (with mailto and a copy-email fallback).
- `projects/`: 11 individual project case-study pages.
- `content/projects.json`: editable source of truth for project descriptions and status.
- `scripts/build_site.py`: builds the homepage and case-study pages from `content/projects.json` (Python standard library only).
- `assets/`: CSS, filter script and a simple vector favicon.
- `portfolio.pdf`: application PDF, current to **19 November 2026**.
- `.nojekyll`: allows GitHub Pages to publish static assets directly.

No passwords, private IPs, access tokens or live infrastructure endpoints are included.

## Publish to GitHub Pages (one-time account setup)

1. Sign in to GitHub as `JakeAlford`. Create a **public** repository named **`it-portfolio`** at <https://github.com/new>. Choose **Add a README file** so the `main` branch exists. Do not create an empty repository and stop before making a first commit.
2. Once it exists, allow ChatGPT's connected GitHub app to access that repository if GitHub asks you to select repositories. Tell ChatGPT you've created `JakeAlford/it-portfolio`; ChatGPT can then upload the site files through its connected repository write tools.
3. In the repository, choose **Settings → Pages → Build and deployment → Source: Deploy from a branch**, then select **Branch: `main`** and **Folder: `/(root)`**, and save. GitHub will deploy automatically on updates committed to `main`.
4. After GitHub displays **Visit site**, verify <https://jakealford.github.io/it-portfolio/> works. Only then use it in the CV.

**Alternative manual upload:** Open the repo, choose **Add file → Upload files**, and upload the *contents* of this extracted folder (including subfolders), **not the ZIP archive**. Uploading the ZIP itself won't publish a website. If GitHub's browser file picker can't preserve folder structure, use GitHub Desktop and commit the extracted folder contents.

## Ongoing updates

1. Keep `content/projects.json` accurate and up to date using Jake-owned IT project evidence only.
2. Run `python scripts/build_site.py` to regenerate `index.html` and the project pages.
3. Replace `portfolio.pdf` with the newly exported application portfolio copy.
4. Verify the generated pages locally and commit changed files (or open a PR for review). GitHub Pages will deploy from `main` after merging.

The scheduled Jake IT Portfolio review should handle source updates when available and should never claim publishing succeeded without confirming a GitHub commit/deployment. Personal and sensitive material from other users of the shared ChatGPT account must not be included.

## Editorial rules

- Jake's independent IT/homelab projects only; **exclude** university projects/qualifications belonging to the account's other user.
- Natural, straightforward UK English in the first person.
- Separate **operational**, **in development**, **locally tested**, **prototype**, **experiment** and **planned** status.
- Never invent evidence, benchmarks, successful external access or completed features.
- Remove IPs, internal hostnames, credentials, secrets, personal files and other security-sensitive information from publicly hosted material.
- Avoid publishing private source code or automation tokens in this public repository.

### Local preview

You can open `index.html` in your browser or run `python -m http.server 8000` from this folder and visit <http://localhost:8000/>.
