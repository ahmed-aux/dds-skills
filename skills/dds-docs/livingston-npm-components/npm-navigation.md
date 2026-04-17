# Navigation

Full API documentation for **Navigation** components from `livingston-npm-components`.

---

### LanguageSelector

**Description:** LanguageSelector - A dropdown component for selecting application language

This component provides a user-friendly interface for language selection with
a Bootstrap dropdown menu. It displays the current language and allows users
to switch between available languages. The component supports responsive design
by showing full language names on larger screens and language codes on mobile.
It manages its own state for the current selection and provides callbacks for
language changes. Perfect for multi-language applications requiring language switching.

**Props:**

- **className** (`string`): Additional CSS classes to apply to the dropdown container (optional)
- **languages** (`LanguageType[]`): Array of available language options (required)
- **selectedLanguage** (`LanguageType`): Currently selected language object (optional)
- **setLanguage** (`function`): Callback function triggered when language is selected (required)
- **dropDownButton** (`object`): Configuration object for dropdown button styling (optional)

---

### MultiSelectComponent

**Description:** MultiSelectComponent - A versatile dropdown component for multi-selection interfaces

This component provides a Bootstrap-based dropdown interface that can contain
any child content for multi-selection scenarios. It features a configurable
toggle button that can display selected items or static text, and supports
various styling and behavioral options. The component wraps content in a
dropdown menu structure while maintaining accessibility and responsive design.
Perfect for country selectors, filter interfaces, and other multi-choice scenarios.

**Props:**

- **id** (`string`): Unique identifier for the component (required)
- **dropdownButtonText** (`string`): Default text for the dropdown button (required)
- **selectedItems** (`any`): Text representation of selected items (required)
- **children** (`React.ReactNode`): Content to be displayed inside the dropdown menu (optional)
- **className** (`string`): Additional CSS classes to apply (optional)
- **size** (`'sm' | 'lg'`): Size variant for the dropdown button (optional)
- **disabled** (`boolean`): Whether the dropdown is disabled (optional, default_value: false)
- **onClick** (`function`): Click handler for the dropdown button (optional)
- **showSelectedItemsInsideButton** (`boolean`): Whether to show selected items in button text (optional, default_value: true)
- **showNumberOfSelectedItemsInsideButton** (`boolean`): Whether to show count of selected items in button text (optional)
- **showSelectedItemsUnderneath** (`boolean`): Whether to show selected items below the dropdown (optional)
- **dropdownTitle** (`string`): Title for the dropdown (optional)
- **showDropdown** (`boolean`): Whether to show the dropdown (optional)
- **isInvalid** (`boolean`): Whether the component has validation errors (optional, default_value: false)

---

### HistoryDropdown

**Description:** HistoryDropdown - A dropdown component for displaying and managing search history

This component provides a dropdown interface for viewing and interacting with
search history items. It supports bookmarking frequently used searches, removing
items from history, and selecting items to repeat searches. The component displays
items with timestamps, bookmark status, and provides interactive controls for
management. Perfect for enhancing search experiences with persistent history
and quick access to previous searches.

**Props:**

- **phrases** (`object`): Localized text phrases for UI elements (required)
- **onSelectEntry** (`function`): Callback function triggered when a history item is selected (required)
- **historyKey** (`string`): Unique key to categorize search history items (required)
- **locale** (`LocaleString`): Locale string for date formatting (optional)

---

### SearchBar

**Description:** SearchBar - A simple search input component with search and clear functionality

This component provides a basic search interface with a text input field, optional search button,
and clear button. The clear button appears automatically when text is entered.
It manages its own internal state for the search value and provides callbacks
for search and clear actions. The component is responsive, showing only a search icon
on mobile devices and the full button text on larger screens when the search button is enabled.

**Props:**

- **phrases** (`SearchBarRequiredPhrases`): Localized text phrases for UI elements with properties: buttonLabel (required), placeholder (optional) (required)
- **showSearchButton** (`boolean`): Whether to display the search button. When false, only shows the search icon in the input field (optional, default_value: true)
- **className** (`string`): Additional CSS classes to apply to the InputGroup container (optional)
- **onSearch** (`function`): Callback function triggered when search button is clicked, receives the current search value as a string (optional)
- **onClear** (`function`): Callback function triggered when clear button is clicked (optional)

---

### SearchBarWithHistory

**Description:** SearchBarWithHistory - A search input component with optional tags and integrated search history

This React component renders a search bar that supports typing search queries, adding/removing
search tags (chip-style), autocompleting from recent search history, handling paste events for
multiple tags, clearing the search field, and executing searches via button click or Enter key.
It supports localization via phrases, is keyboard-accessible, and integrates with a persistent
search history service for enhanced user experience.

**Props:**

- **phrases** (`Object`): Localized UI strings for all text elements (required)
- **defaultValue** (`string`): Initial search input value (optional, default_value: "")
- **onSearch** (`Function`): Callback fired with the search string or tags when search is executed (required)
- **onClear** (`Function`): Callback fired when the input or tags are cleared (optional)
- **category** (`string`): Key used for grouping search history entries (optional)
- **locale** (`string`): Locale used for formatting and translations (optional)
- **isLoading** (`boolean`): Indicates if a search operation is in progress (optional, default_value: false)
- **className** (`string`): Additional CSS classes for custom styling (optional)
- **searchTags** (`Object`): Tagging behavior configuration with allow flag and paste function (optional, default_value: { allow: false })
- **allowSearchWhenEmpty** (`boolean`): Whether to allow search when input and tags are empty (optional, default_value: false)

---

### Sidebar

**Description:** Sidebar - A comprehensive navigation sidebar component with accordion functionality

This component provides a full-featured sidebar navigation with support for both
single-level and multi-level menu items. It features accordion behavior for nested
navigation, automatic active state detection based on the current URL path, and
responsive visibility controls. The component integrates configurable header and
footer components and uses React Router for navigation. Perfect for complex
applications requiring hierarchical navigation structures.

**Props:**

- **entries** (`SidebarEntry[]`): Array of sidebar navigation entries (required)
- **sidebarVisible** (`boolean`): Whether the sidebar is currently visible (required)
- **setSidebarVisible** (`React.Dispatch<React.SetStateAction<boolean>>`): Function to control sidebar visibility (required)
- **sidebarItemSelected** (`function`): Callback function triggered when any sidebar item is selected (required)
- **NavLink** (`React.ComponentType`): Navigation link component (typically from React Router) (required)
- **SidebarHeader** (`React.ComponentType`): Header component for the sidebar (required)
- **SidebarFooter** (`React.ComponentType`): Footer component for the sidebar (required)

---

### SidebarAccordionItem

**Description:** SidebarAccordionItem - An accordion-style navigation item for nested sidebar menus

This component renders a collapsible navigation item that can contain multiple
sub-navigation links. It uses Bootstrap's Accordion component to provide expand/collapse
functionality for hierarchical navigation structures. The component displays a parent
label with an optional icon and manages the visibility of child navigation items.
Perfect for organizing complex navigation menus with multiple levels of hierarchy.

**Props:**

- **sidebarParentId** (`string`): Unique identifier for the parent accordion item (required)
- **label** (`string`): Display text for the accordion header (required)
- **isActive** (`boolean`): Whether this accordion item is currently active/highlighted (required)
- **setActiveSection** (`function`): Callback function to set the active section (required)
- **icon** (`IconDefinition`): FontAwesome icon to display next to the label (optional)
- **subItems** (`Array<SidebarEntry>`): Array of child navigation items (required)
- **NavLink** (`React.ComponentType`): Navigation link component (typically from React Router) (required)
- **activeSection** (`string | undefined`): Currently active section identifier (required)
- **busy** (`boolean`): When true, shows a loading spinner next to the label in the accordion header (optional)

---

### SidebarItem

**Description:** SidebarItem - A navigation item component for sidebar menus

This component renders a single navigation item within a sidebar, featuring
optional icons, label text, and navigation functionality. It integrates with
React Router through a configurable NavLink component and provides visual
feedback for active states. The component handles click events to update
the active section and applies appropriate styling based on the current
navigation state. Optionally supports custom onClick handlers and can open
external URLs in new tabs.

**Props:**

- **id** (`string`): Unique identifier for the sidebar item (required)
- **icon** (`IconDefinition`): FontAwesome icon to display on the left (optional)
- **farRightIcon** (`IconDefinition`): FontAwesome icon to display on the far right (optional)
- **label** (`string`): Text label for the navigation item (required)
- **path** (`string`): URL path for navigation (required)
- **setActiveSection** (`Function`): Callback function to set the active section (required)
- **NavLink** (`React.ComponentType`): Navigation link component (typically from React Router) (required)
- **url** (`string`): External URL to open in a new tab when clicked (optional)
- **activeSection** (`string`): Currently active section identifier (optional)
- **busyItem** (`string`): Identifier of the item that should show a loading indicator (optional)

---

