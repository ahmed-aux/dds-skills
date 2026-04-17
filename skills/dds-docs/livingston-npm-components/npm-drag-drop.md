# Drag & Drop

Full API documentation for **Drag & Drop** components from `livingston-npm-components`.

---

### DragAndDropList

**Description:** DragAndDropList - A flexible drag and drop list component for reordering items

This component provides a sortable list interface where users can drag and drop items
to reorder them. It supports custom rendering for each item through a render prop,
visual feedback during dragging with drop indicators, and an apply button to confirm
changes. The component handles all drag and drop logic internally while allowing
complete customization of item appearance and behavior.

**Props:**

- **items** (`DragAndDropItem[]`): Array of items to display and sort (required)
- **renderItem** (`function`): Function to render each item with drag handle (required)
- **onApply** (`function`): Callback function called when apply button is clicked (optional)
- **phrases** (`RequiredPhrases`): Text phrases for internationalization (optional, default_value: { apply: 'Apply' })

---

### DraggableListItem

**Description:** DraggableItem - A draggable wrapper component for individual items in a sortable list

This component wraps individual items to make them draggable within a sortable context.
It handles all the drag and drop mechanics including touch support, transform animations,
and visual feedback during dragging. The component uses a render prop pattern to allow
complete customization of the item content while providing the necessary drag handle.
It integrates seamlessly with

**Props:**

- **item** (`DragAndDropItem`): The item object containing id, label, and optional entry data (required)
- **renderItem** (`function`): Function to render the item content with drag handle (required)

---

### DropIndicator

**Description:** DropIndicator - A visual indicator component for drag and drop operations

This component displays a horizontal line that appears during drag operations to show
where a dragged item will be dropped. It provides clear visual feedback to users about
the drop target location, enhancing the drag and drop user experience. The indicator
is conditionally rendered based on the show prop and uses consistent styling to match
the design system.

**Props:**

- **show** (`boolean`): Controls whether the drop indicator is visible (required)

---

