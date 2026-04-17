# Alerts & Toasts

Full API documentation for **Alerts & Toasts** components from `livingston-npm-components`.

---

### Alert

**Description:** Alert - A flexible alert component for displaying important messages and notifications

This component provides contextual feedback messages for typical user actions with
the handful of available and flexible alert messages. It supports different variants
for various message types (success, danger, warning, info, dark) and can be configured
as dismissible with a close button. The component can also be styled as a global alert
that spans the full width of its container.

**Props:**

- **onDismiss** (`() => void`): Callback function to handle alert dismissal (optional)
- **isGlobal** (`boolean`): Whether to style as a global full-width alert (optional, default_value: false)
- **variant** (`AlertVariant`): Alert style variant: 'danger', 'warning', 'info', 'success', or 'dark' (optional)
- **className** (`string`): Additional CSS classes to apply to the alert (optional)
- **children** (`React.ReactNode`): Content to display within the alert (required)

---

### AlertButton

**Description:** AlertButton - A styled button component designed for use within Alert components

This component provides a button styled to match alert variants, with automatic
color coordination based on the alert type. It displays text content without wrapping
and integrates seamlessly with the Alert component's visual design system. Perfect
for action buttons within alerts such as "Learn More", "Dismiss", or "View Details".

**Props:**

- **onClick** (`function`): Callback function triggered when button is clicked (optional)
- **size** (`'sm' | 'lg'`): Size variant for the button (optional)
- **variant** (`'danger' | 'warning' | 'info' | 'success' | 'dark'`): Color variant matching the alert type (optional)
- **children** (`ReactNode`): Button content to display (optional)
- **className** (`string`): Additional CSS classes to apply to the button (optional)

---

### AlertCollapse

**Description:** AlertCollapse - A collapsible alert component with expandable content

This component provides a collapsible alert container that can show/hide content
with a toggle button. It displays an alert with a clickable bottom section that
expands or collapses to reveal additional content. The component uses Bootstrap's
Alert and Collapse components with custom styling for seamless integration.
Perfect for displaying additional information, details, or actions that can be
hidden to save space.

**Props:**

- **alertType** (`string`): The Bootstrap alert variant (primary, secondary, success, danger, warning, info, light, dark) (required)
- **children** (`React.ReactNode`): The content to be displayed inside the collapsible section (required)
- **id** (`string`): Unique identifier for the alert collapse component (required)

---

### TOAST_QUEUE

**Description:** Toaster - A toast notification container component for displaying system messages

This component renders and manages toast notifications using Bootstrap's Toast components.
It subscribes to a ToastQueue and displays notifications with appropriate styling and icons
based on the message type (success, warning, error, info). Toasts auto-dismiss after 3 seconds
by default; individual toasts can override this via their timeout property, or set timeout to
null for persistent toasts that require manual dismissal.

**Props:**

- **toastQueue** (`ToastQueue`): The toast queue instance to subscribe to (optional, default_value: module-level ToastQueue instance)
- **limit** (`number`): Maximum number of visible toasts. When 0 or negative, no toasts are shown (optional, default_value: 5)
- **position** (`ToastPosition`): Position of the toast container (optional, default_value: 'top-center')
- **className** (`string`): Additional CSS classes for the container (optional)
- **children** (`(toast: Toast) => React.ReactNode`): Custom render function for individual toasts, replaces default toast rendering (optional)

---

