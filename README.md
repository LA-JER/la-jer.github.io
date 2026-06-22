# Jordan Avery — Portfolio Site

Plain HTML/CSS/JS portfolio. No build step, no dependencies — just open
`index.html` in a browser to preview locally, or deploy as-is.

## File structure

```
portfolio/
├── index.html              ← homepage (hero, work grid, about, contact)
├── resume.pdf               ← add your real résumé here
├── css/
│   ├── style.css           ← global styles + homepage
│   └── project.css         ← case-study page styles (extends style.css)
├── js/
│   └── main.js              ← nav highlight-on-scroll
├── images/                  ← put real screenshots/GIFs here
└── projects/
    └── project-01.html      ← case study template — duplicate this per project
```

## To make this yours

1. **Replace placeholder copy.** Every name, project, and bio detail
   (Jordan Avery, Riftbound, Tideway, etc.) is a placeholder. Search-and-replace
   your real name across all HTML files, and rewrite the project descriptions
   with your actual work.

2. **Swap in real visuals.** The colored `<div class="visual-placeholder">`
   blocks stand in for screenshots/GIFs. Drop real images into `/images/` and
   replace, e.g.:
   ```html
   <div class="project-visual">
     <img src="images/riftbound-cover.jpg" alt="Riftbound gameplay screenshot" class="visual-img">
   </div>
   ```
   Add this to `style.css` so images fill the same space the placeholders did:
   ```css
   .visual-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 2px; }
   ```

3. **Add more projects.** Copy `projects/project-01.html`, rename it
   (`project-04.html`, etc.), update its content, and add a matching
   `<a class="project-card">` block in `index.html`'s `.project-list`.

4. **Add your résumé.** Drop a real `resume.pdf` in the root folder — the
   nav link already points to it.

5. **Update contact links.** Replace the `#` hrefs in the contact section
   and footer with your real LinkedIn, itch.io, GitHub, and email.

## Deploying for free (GitHub Pages)

1. Create a new repo on GitHub (e.g. `yourname.github.io` for a root domain,
   or any name for a project site).
2. Push this folder's contents to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set the source branch to `main`
   and folder to `/ (root)`, then save.
4. Your site will be live at `https://yourusername.github.io/your-repo/`
   (or `https://yourusername.github.io/` if you named the repo
   `yourname.github.io`).

## Notes

- Fonts (Space Grotesk, Source Serif 4, JetBrains Mono) load from Google
  Fonts via CDN — no local font files needed.
- The grain overlay, focus states, and reduced-motion handling are already
  wired up — no extra setup needed for accessibility basics.
- Mobile layout collapses the project cards to a single column and stacks
  the meta bar to 2 columns — test at 375px width after adding real content,
  since longer real copy may need minor spacing tweaks.
