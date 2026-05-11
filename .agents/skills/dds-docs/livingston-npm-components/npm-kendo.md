# Kendo Grid

Full API documentation for **Kendo Grid** components from `livingston-npm-components`.

---

### KendoColumnHeaderWithPin

**Description:** KendoPinColumnHeader - A custom Kendo grid column header with pin/unpin functionality

This component replaces the default Kendo grid column header with one that includes a
thumbtack icon button for pinning/unpinning columns, a drag grip icon for reordering,
and a tooltip showing the full column title on hover. The pin button is hidden on mobile
viewports and only renders when an onTogglePinned callback is provided. When pinned, the
thumbtack icon is highlighted in accent color; when unpinned, it is rotated and muted.

**Props:**

- **isPinned** (`boolean`): Whether the column is currently pinned (optional)
- **showGrabHandle** (`boolean`): Whether the column header shows a drag grip icon and grab cursor for reordering (optional)
- **showColumnTooltip** (`boolean`): Whether to show a tooltip with the column title on hover (optional)
- **phrases** (`RequiredPhrases`): Custom labels for the pin/unpin button aria-label and title (optional, default_value: { pinColumnLabel: 'Pin column', unpinColumnLabel: 'Unpin column' })
- **onTogglePinned** (`() => void`): Callback fired when the pin button is clicked; if omitted the pin button is not rendered (optional)

---

### KendoDropdownButton

**Description:** KendoDropdownButton - a compact dropdown action menu using Kendo's DropDownButton
Renders an icon-only drop-down button that shows titles from dropdownItems. Each
DropdownItem can include a FontAwesome icon, an onClick callback invoked when
that entry is selected, and a disabled state to prevent interaction.

**Props:**

- **dropdownItems** (`DropdownItem[]`): Array of menu entries; each entry shape: { id: string; title: string; icon?: IconDefinition | React.ReactNode; disabled?: boolean; onClick: (id: string) => void } (required)
- **dropdownItemIconPosition** (`'left'|'right'`): If you're using icons this will position the icon inside the menu item (optional) (default: 'left')
- **opened** (`boolean`): Controlled state for the dropdown open/closed state (optional)
- **onOpenChange** (`(open: boolean) => void`): Callback function called when the dropdown open state changes (optional)

---

### KendoDropdownList

**Description:** KendoDropdownList - A dropdown list component powered by Kendo UI

This component provides a dropdown selection interface using the Kendo React DropDownList.
It features right-aligned popup positioning and a flat fill mode for a clean appearance.
When a user selects an item from the dropdown, the onChange callback is triggered with
the selected value, enabling integration with form state or other application logic.

**Props:**

- **dropdownItems** (`string[]`): Array of string items to display in the dropdown (required)
- **onChange** (`(data: string) => void`): Callback function triggered when an item is selected (required)

---

### KendoStickyHeaderGridWrapper

**Description:** KendoStickyHeaderGridWrapper - A wrapper that pins a Kendo grid's column header row during scroll

Wraps a Kendo Grid and observes scroll and resize events to detach the grid header and fix it
below the application navbar when the grid body scrolls out of view. A phantom horizontal
scrollbar is also rendered at the bottom of the viewport so users can scroll the grid
horizontally even when the native scrollbar is off-screen.

**Props:**

- **gridId** (`string`): The `id` attribute of the Kendo grid element whose header should be pinned (required)
- **children** (`React.ReactNode`): The grid (and any sibling content) to render inside the wrapper (required)
- **className** (`string`): Additional CSS classes to apply to the outer shell `div` (optional)
- **contentContainerId** (`string`): The `id` of the page's primary scrollable content container (optional, default_value: 'content-container')
- **navbarSelector** (`string`): CSS selector for the navbar element; its bottom edge sets the sticky top offset (optional, default_value: '.navbar')

**Imperative Methods (ref):**

#### `gridId`

The `id` attribute of the Kendo grid element whose header should be pinned.

#### `children`

The grid (and any sibling content) to render inside the wrapper.

#### `className`

Additional CSS classes to apply to the outer shell `div`.

#### `contentContainerId`

The `id` of the page's primary scrollable content container. Used to listen for scroll events that affect header visibility.

#### `navbarSelector`

CSS selector used to locate the navbar element. Its bottom edge defines the top offset at which the header becomes sticky.

---

### useKendoResponsiveColWidths

**Description:** useKendoResponsiveColWidths - React hook for calculating responsive column widths in Kendo Grid components

This hook automatically adjusts Kendo Grid column widths based on available space and window
size changes. It handles minimum width constraints, fixed width columns, and distributes
remaining space among flexible columns. Supports checkbox columns, scrollbar considerations,
and multiple grids on the same page. Particularly useful for creating responsive data grids
that adapt to different screen sizes while maintaining usability.

---

