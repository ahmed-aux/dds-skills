# Kendo React v14 Migration Guide (v13.x -> v14.0.0)

This guide documents the steps required to upgrade Kendo React from v13.x to v14.0.0 in this project.

## What changed (breaking changes)

1. All `@progress/kendo-react-*` packages moved from `13.x.x` to `14.0.0`.
2. `@progress/kendo-theme-bootstrap` major version bumped to align with the suite (`^12.x` -> `^14.0.0`).
3. `@progress/kendo-svg-icons` minimum version raised to `^4.8.0` (previously `4.5.0` was acceptable).
4. `@progress/kendo-licensing` must be pinned to `1.7.2` — `livingston-npm-components@14.0.0` requires this exact version.
5. `@progress/kendo-react-grid@14.0.0` has two undeclared dependencies that must be added manually:
    - `@progress/kendo-csv` — used by `BaseCSVExport.mjs`
    - `@progress/kendo-file-saver` — used by `BaseCSVExport.mjs`
6. `livingston-npm-components@14.0.0` no longer bundles the Kendo theme CSS. The app must now import it directly.

## Step-by-step migration

### 1. Update all Kendo React suite packages

Bump every `@progress/kendo-react-*` package to `14.0.0`:

```json
"@progress/kendo-react-animation": "14.0.0",
"@progress/kendo-react-buttons": "14.0.0",
"@progress/kendo-react-data-tools": "14.0.0",
"@progress/kendo-react-dateinputs": "14.0.0",
"@progress/kendo-react-dropdowns": "14.0.0",
"@progress/kendo-react-grid": "14.0.0",
"@progress/kendo-react-inputs": "14.0.0",
"@progress/kendo-react-intl": "14.0.0",
"@progress/kendo-react-popup": "14.0.0",
"@progress/kendo-react-treeview": "14.0.0"
```

### 2. Update the theme

```json
"@progress/kendo-theme-bootstrap": "^14.0.0"
```

### 3. Update `kendo-svg-icons`

v14 suite packages require at least `4.8.0`:

```json
"@progress/kendo-svg-icons": "^4.8.0"
```

### 4. Pin `kendo-licensing` to `1.7.2`

`livingston-npm-components@14.0.0` declares a strict peer on `1.7.2`. Using `1.8.0` causes an `ERESOLVE` error:

```json
"@progress/kendo-licensing": "1.7.2"
```

### 5. Add missing `kendo-react-grid` dependencies

`@progress/kendo-react-grid@14.0.0` imports these two packages at runtime but omits them from its `peerDependencies` (a bug in the Kendo package). Without them the build fails with:

> Rolldown failed to resolve import "@progress/kendo-csv" / "@progress/kendo-file-saver"

Add them explicitly:

```json
"@progress/kendo-csv": "^1.0.0",
"@progress/kendo-file-saver": "^1.1.2"
```

### 6. Update `livingston-npm-components`

The Livingston component library follows the same versioning as the Kendo suite:

```json
"livingston-npm-components": "^14.0.0"
```

### 7. Import the Kendo theme CSS directly

`livingston-npm-components@14` no longer bundles the Kendo theme CSS on behalf of the consuming app (it did in v11.x). Without this import, all Kendo components lose their styles entirely (no padding, colors, borders, etc.).

Add this as the **first import** in `src/main.tsx`:

```tsx
import '@progress/kendo-theme-bootstrap/dist/all.css';
```

It must come before any other CSS imports so its variables are available to everything else.

### 8. Run install

```bash
npm install
```

## Final package.json diff (Kendo-related entries only)

| Package | Before | After |
|---|---|---|
| `kendo-react-*` (all suite packages) | `13.2.0` | `14.0.0` |
| `kendo-theme-bootstrap` | `^12.2.3` | `^14.0.0` |
| `kendo-svg-icons` | `4.5.0` | `^4.8.0` |
| `kendo-licensing` | `1.8.0` | `1.7.2` |
| `kendo-csv` | _(not present)_ | `^1.0.0` |
| `kendo-file-saver` | _(not present)_ | `^1.1.2` |
| `livingston-npm-components` | `^11.9.1` | `^14.0.0` |

## Known issues in `kendo-react-grid@14.0.0`

`@progress/kendo-csv` and `@progress/kendo-file-saver` are imported by `BaseCSVExport.mjs` but not declared as peer dependencies. This is a bug in the upstream Kendo package. Both packages must be added to the consuming app's `dependencies` as a workaround until Kendo ships a fix.
