# js-pretty-icons documentation site

Vite + React app that powers the GitHub Pages documentation for `js-pretty-icons`.

## Development

```bash
npm ci --prefix page
npm run dev --prefix page
```

## Build

```bash
npm run build
npm run build --prefix page
```

The static output is generated in `page/dist`.

## Deployment

Docs are deployed manually via the `Deploy Docs` GitHub Actions workflow (`workflow_dispatch`).
