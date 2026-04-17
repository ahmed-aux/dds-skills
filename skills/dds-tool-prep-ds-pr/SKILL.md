---
name: dds-tool-prep-ds-pr
description: Runs the full PR preparation workflow for the design system — installs the latest livingston-npm-components, comments out the optimizeDeps exclude config in vite.config.ts, runs all doc/bundle extraction scripts, then instructs the developer to run the final build. Trigger this skill whenever the user says "prep-ds-pr", "prep the PR", "prepare the design system PR", or asks to get the code ready for a pull request.
---

# dds-tool-prep-ds-pr

Runs all pre-PR checks and doc generation steps to get the design system ready for a pull request. Follow each step in order.

## Step 1: Install latest package

```bash
npm install livingston-npm-components@latest
```

## Step 2: Update vite.config.ts

Navigate to `vite.config.ts` in the project root and comment out the `optimizeDeps` block:

```ts
// optimizeDeps: {
//     exclude: ['livingston-npm-components']
// }
```

Handle these cases:

- **Present and uncommented**: comment it out.
- **Already commented out**: leave it as-is.
- **Missing entirely**: leave it as-is, nothing to comment out.

## Step 3: Run extraction and generation scripts sequentially

Run each command one at a time, waiting for the previous to complete before starting the next:

```bash
npm run extractBundles
```

```bash
npm run extractProps
```

```bash
npm run extractNpmJsxDocs
```

```bash
npm run extractNpmReleaseNotes
```

```bash
npm run extractSources
```

```bash
npm run generateAIContext
```

## Step 4: Instruct the developer

Do NOT run `npm run build` yourself. Instead, tell the user:

> ✅ PR prep complete. Now run this in your zsh terminal to do a final build check:
>
> ```
> npm run build
> ```

The skill is complete once you've delivered this message.
