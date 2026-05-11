# Miscellaneous

Full API documentation for **Miscellaneous** components from `livingston-npm-components`.

---

### CopyToClipboard

**Description:** CopyToClipboard - A button component that copies text content to the user's clipboard

This component provides a simple, accessible way to copy text to the clipboard with 
visual feedback. It displays a clipboard icon button that shows a tooltip indicating 
the copy status. When clicked, it copies the specified text and temporarily changes 
the tooltip to show confirmation. Ideal for code snippets, URLs, reference numbers, 
or any text content users might want to copy for reuse.

**Props:**

- **textToCopy** (`string`): Text content to be copied to the clipboard (required)
- **phrases** (`RequiredPhrases`): Custom phrases for copy/copied tooltip states (optional, default_value: { copied: 'Copied', copy: 'Copy' })
- **className** (`string`): Additional CSS classes to apply to the button (optional)

---

### ExpandingText

**Description:** ExpandingText - A collapsible text component with expandable content

This component provides a simple text expand/collapse functionality with a toggle button.
It displays a clickable toggle button that expands or collapses to reveal additional content.
The component uses Bootstrap's Collapse component with custom styling for seamless integration.
Perfect for displaying additional text, details, or information that can be hidden to save space.

**Props:**

- **children** (`React.ReactNode`): The content to be displayed inside the collapsible section (required)
- **id** (`string`): Unique identifier for the expanding text component (required)

---

### SmallSpinner

**Description:** SmallSpinner - A compact loading indicator for inline or small space usage

This component provides a small, lightweight spinner ideal for buttons, 
form elements, or any context where space is limited. It includes customizable 
screen reader text for accessibility and supports Bootstrap color variants.
Perfect for indicating loading states without taking up significant visual space.

**Props:**

- **className** (`string`): Additional CSS classes to apply to the spinner (optional, default_value: "")
- **screenReaderText** (`string`): Text for screen readers (optional, default_value: "loading")
- **color** (`string`): Bootstrap color variant for the spinner (optional, default_value: "primary")

---

### Spinner

**Description:** Spinner - A loading indicator component for displaying loading states

This component provides a flexible spinner to indicate loading states within
your application. It supports different color variants, optional text labels,
and can be displayed as a full-screen overlay for page-level loading states.
The spinner automatically includes screen reader text for accessibility.

**Props:**

- **className** (`string`): Additional CSS classes to apply to the spinner (optional)
- **text** (`string`): Optional text to display below the spinner (optional)
- **color** (`string`): Bootstrap color variant for the spinner (optional, default_value: "primary")
- **fullScreenLoading** (`boolean`): Whether to display as full-screen loading overlay (optional, default_value: false)
- **overlay** (`boolean`): Whether to display as an overlay with semi-transparent background (optional)

---

