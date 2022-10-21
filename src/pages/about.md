---
layout: 'layouts/Layout.astro'
page: About
---

# About

> Dashboard built with Astro with the framework setup for React.JS, Vue and Svelte.

![Meme](https://user-images.githubusercontent.com/3399429/197223784-05878981-08b2-498c-a333-7dcd7d636807.jpeg)

## [Github repository](https://github.com/EmaSuriano/astro-multi-framework-dashboard)

## Features

- Support for React, Vue and Svelte.
- Setup with [Tailwind CSS](https://tailwindcss.com/)
- State management with [nanostores](https://github.com/nanostores/nanostores) for cross platform data flow.
- Libraries per framework:
  - React: [recharts](https://recharts.org/), [MUI Core](https://mui.com/core/)
  - Svelte: [svelthree](https://svelthree.dev/)
  - Vue: [Vuetify](https://vuetifyjs.com/en/)
- Framework highlighter for demo purposes, showcasing which components are rendered by which framework.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |
