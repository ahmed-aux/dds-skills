---
name: dds-tool-link-ds
description: Runs the full link-ds workflow — switches to Node 22.11.0, clears Vite cache, reinstalls dependencies, links livingston-npm-components, ensures the optimizeDeps exclude config is active in vite.config.ts, then starts the dev server. Trigger this skill whenever the user says "link-ds", "run link-ds", "link the design system", or asks to set up or relink the livingston-npm-components package. Always use this skill for that workflow rather than running the steps ad hoc.
---

# dds-tool-link-ds

Executes the full clean-link-dev workflow for the design system package. Follow each step in order, waiting for the previous to complete before starting the next.

## Step 1: Run commands sequentially

```bash
nvm use 22.11.0
```

```bash
rm -rf node_modules/.vite
```

```bash
npm install
```

```bash
npm link livingston-npm-components
```

## Step 2: Update vite.config.ts

Navigate to `vite.config.ts` in the project root and ensure the following block is present and **uncommented** inside the config object:

```ts
optimizeDeps: {
    exclude: ['livingston-npm-components'];
}
```

Note, do not simply uncomment the code but check that it actually works. Often when the code is commented out, the prettier script will remove the comma that separates this block from the rest, you may need to add that back if it is missing

Handle these cases:

- **Commented out** (e.g. `// optimizeDeps: ...` or wrapped in `/* ... */`): uncomment it.
- **Missing entirely**: add it inside the exported config object (alongside any existing top-level keys like `plugins`, `resolve`, etc.).
- **Already present and uncommented**: leave it as-is.

## Step 3: Start dev server

Do NOT run `npm run dev` yourself. Instead, tell the user:

> ✅ Setup complete. Now run this in your terminal to start the dev server:
>
> ```
> nvm use 22.11.0 && npm run dev
> ```

The skill is complete once you've delivered this message.
