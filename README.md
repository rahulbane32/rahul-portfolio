# Rahul Bane — Portfolio

A responsive, funky static developer portfolio built with plain HTML, CSS, and JavaScript. No build step or backend is required, so it works with GitHub Pages.

## Run locally

Open this folder in VS Code. Open `index.html` directly in your browser, or install the VS Code **Live Server** extension and click **Go Live**.

## Publish with GitHub Pages

1. Create a GitHub repository. For a personal site at `https://YOUR-USERNAME.github.io/`, name it `YOUR-USERNAME.github.io`. Otherwise, any repository name works and the URL will be `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
2. Put `index.html`, `styles.css`, `script.js`, and `README.md` in the repository root.
3. Open the VS Code terminal in this folder and run:

```bash
git init
git add index.html styles.css script.js README.md
git commit -m "Build portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the placeholders with your actual GitHub username and repository. If the folder already uses Git, skip `git init`. If a remote already exists, inspect it with `git remote -v`; update it with `git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git` if needed.

4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then click **Save**.
7. Wait for deployment. GitHub will show your public URL in **Settings → Pages**.

## Before publishing

- Confirm the contact email `rahulbane0505@gmail.com` is correct.
- The project cards are high-level summaries, not claims that every item is a finished public repository. Add real project links and verified outcomes as you publish them.
- Google Fonts loads externally; system fallback fonts are used if the font service is unavailable.
