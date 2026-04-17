# Badges

Full API documentation for **Badges** components from `livingston-npm-components`.

---

### CircularBadge

**Description:** CircularBadge - A circular badge component for displaying status, counts, or labels

This component renders a circular badge using React Bootstrap's Badge component with
customizable colors, sizes, and styling. It's ideal for displaying notification counts,
status indicators, or small labels in a compact circular format. The dark prop allows
for inverted color schemes by swapping background and text colors.

**Props:**

- **variant** (`'info' | 'primary' | 'success' | 'danger' | 'warning' | 'dark'`): Bootstrap color variant (optional, default_value: 'info')
- **children** (`React.ReactNode`): Content to display inside the badge (required)
- **size** (`'xs' | 'sm' | 'lg' | 'xl'`): Size of the circular badge (optional)
- **dark** (`boolean`): When true, swaps background and text colors for inverted appearance (optional, default_value: false)
- **className** (`string`): Additional CSS classes for custom styling (optional)

---

### PillBadge

**Description:** PillBadge - A pill-shaped badge component for displaying status, counts, or labels.

This component renders a pill-shaped badge using React Bootstrap's Badge component with
customizable colors and styling. The pill shape provides a modern, rounded appearance
ideal for tags, labels, status indicators, or notification counts.

**Props:**

- **variant** (`'info' | 'primary' | 'success' | 'danger' | 'warning' | 'dark'`): Bootstrap color variant (optional)
- **children** (`React.ReactNode`): Content to display inside the badge (required)
- **className** (`string`): Additional CSS classes for custom styling (optional)

---

### CircularBadgeList

**Description:** CircularBadgeList - A list component that displays items with circular badge indicators

This component renders a list of items, each prefixed with a circular badge containing
either a sequential number or a custom icon. Items can be displayed with different
color variants and optionally wrapped in an Alert component. Use CircularBadgeListItem
components as children for proper structure.

**Props:**

- **children** (`ReactNode`): CircularBadgeListItem components to display (required)
- **className** (`string`): Additional CSS classes to apply to the list container (optional)
- **icon** (`IconDefinition`): FontAwesome icon to display in badges instead of numbers (optional)
- **variant** (`'danger' | 'warning' | 'info' | 'success' | 'dark'`): Color variant for badges and optional alert wrapper (optional, default_value: 'info')
- **useAlertWrapper** (`boolean`): Whether to wrap the list in an Alert component (optional, default_value: false)

---

### CircularBadgeListItem

**Description:** CircularBadgeListItem - A list item component for use within CircularBadgeList

This component wraps content to be displayed as an item in a CircularBadgeList.
It should only be used as a direct child of CircularBadgeList. The component
doesn't render any wrapper elements itself - the parent CircularBadgeList
handles the rendering of badges and layout.

**Props:**

- **children** (`ReactNode`): The content to display in the list item (required)

---

