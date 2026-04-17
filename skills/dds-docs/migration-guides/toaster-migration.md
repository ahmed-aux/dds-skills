# Toaster Migration Guide (Old `toastState` -> New `ToastQueue`)

This guide explains how to migrate from the old toaster implementation (livingston-npm-components v12.0.0 and less) that relied on a module-level `toastState` singleton to the new `ToastQueue`-based API (livingston-npm-components v13.0.0 or higher).

## What changed (breaking changes)

1. livingston-npm-components upgraded from version 12.0.0 to 13.0.0
2. `toastState` is replaced with `ToastQueue`.
3. `Toaster` is now designed to receive a `toastQueue` prop.
4. Toast type now includes `info` in addition to `success`, `warning`, and `error`.
5. Toast timeout behavior is now first-class in the model:
    - default timeout is 3000ms
    - set `timeout: null` for a persistent toast
6. The new queue API (`addToast`) returns a close function for the specific toast.

## Old vs New imports

### Old

```tsx
import { Toaster, toastState } from 'livingston-npm-components';
```

### New

```tsx
import { Toaster, ToastQueue } from 'livingston-npm-components';
```

## Step-by-step migration

### 1. Create a shared queue instance

Create one queue instance and reuse it wherever you need to push toasts.

```tsx
// toastQueue.ts
import { ToastQueue } from 'livingston-npm-components';

export const toastQueue = new ToastQueue();
```

### 2. Mount `Toaster` with that queue

Replace old root wiring:

```tsx
// old
import { Toaster } from 'livingston-npm-components';
<App>
    <Toaster />
    <Routes />
</App>;
```

With:

```tsx
// new
import { Toaster } from 'livingston-npm-components';
import { toastQueue } from './toastQueue';

<App>
    <Toaster toastQueue={toastQueue} />
    <Routes />
</App>;
```

### 3. Replace toast calls

### Old

```tsx
toastState.addToast({
    type: 'success',
    message: 'Saved successfully'
});
```

### New

```tsx
toastQueue.addToast({
    type: 'success',
    message: 'Saved successfully'
});
```

### 4. Update timeout usage (if needed)

```tsx
// auto-dismiss after 5s
toastQueue.addToast({
    type: 'warning',
    message: 'Session will expire soon',
    timeout: 5000
});

// persistent until closed manually
toastQueue.addToast({
    type: 'error',
    message: 'Upload failed',
    timeout: null
});
```

### 5. Optional: use returned close handler

```tsx
const closeToast = toastQueue.addToast({
    type: 'info',
    message: 'Sync in progress...'
});

// later
closeToast();
```

## New `Toaster` customization options

The new component supports additional props:

1. `limit?: number` - max visible toasts (default `5`)
2. `position?: ToastPosition` - container position (default `top-center`)
3. `className?: string` - custom container classes
4. `children?: (toast) => React.ReactNode` - custom toast renderer

Example:

```tsx
<Toaster toastQueue={toastQueue} limit={3} position='bottom-end' className='my-toast-stack' />
```
