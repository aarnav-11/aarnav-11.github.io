# Aarnav Choudhary

Personal website with education, work experience, research papers, and contact links.

The application is in `site/`. It uses React and Vinext, with a static build for GitHub Pages and a Worker build for Sites.

```sh
cd site
npm ci
npm run dev
```

`npm run build:pages` generates the GitHub Pages website in `site/dist/client`. The GitHub Actions workflow publishes it after each push to `main`; the repository's Pages source must be set to **GitHub Actions**.

Source assets:

- Headshot: `resumes/Headshot.JPG`, copied without changes.
- JEPA: `Papers/EMNLP_JEPA_2026_preprint.pdf`, the latest saved version (September 7, 2026).
- Asymmetric Collapse: [arXiv:2607.27240](https://arxiv.org/abs/2607.27240).

The website's JEPA summary follows the September preprint.

The home page includes education, honors, activities, and technical skills. Work history is available at `/experience`.
