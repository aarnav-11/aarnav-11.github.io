# aarnav's personal site

A placeholder recreation of the layout at [leerob.com](https://leerob.com/). The application is in `site/` and uses React with Vinext.

```sh
cd site
npm ci
npm run dev
```

The homepage is in `site/app/page.tsx`, the expanded bio is in `site/app/long-bio.tsx`, and the styles are in `site/app/globals.css`. All homepage copy is lorem ipsum, and the image slots use local SVG placeholders in `site/public/images/`.

The layout includes the Default/Long bio toggle, a two-column notes list, dated blog rows, and a sticky image panel on wide screens. It follows the system light/dark theme. Homepage entries have no article destinations. Existing article routes and personal assets remain in the project for later use.
