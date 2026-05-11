# Cards

Full API documentation for **Cards** components from `livingston-npm-components`.

---

### InfoCard

**Description:** InfoCard - A versatile card component for displaying information with optional image, title, result, and action button

This component creates a structured card layout perfect for dashboards, summaries, 
or informational displays. It supports an optional image, configurable title sizes, 
result data with colored values, custom content via children, and an action button 
with icon support. The card is fully responsive and follows Bootstrap styling conventions.

**Props:**

- **imagePath** (`string`): URL path to display an image in the card (optional)
- **result** (`object`): Object containing label, value, and valueColor for displaying results (optional)
- **title** (`string`): Title text to display in the card (optional)
- **titleSize** (`string`): Size of the title: 'large' or 'small' (optional, default_value: "large")
- **button** (`object`): Button configuration with label, onClick handler, and optional icon (optional)
- **className** (`string`): Additional CSS classes to apply to the card (optional)
- **children** (`React.ReactNode`): Custom content to display in the card body (optional)

---

### ComponentContainer

**Description:** ComponentContainer - A standardized layout wrapper component with consistent spacing and styling.

This component provides a consistent layout container using Bootstrap's grid system.
It wraps content in a Container, Row, and Col structure for responsive layout management,
and supports various styling options including fluid layout, background colors, border styling,
and padding controls. Use this to create consistent page sections and component layouts.

---

