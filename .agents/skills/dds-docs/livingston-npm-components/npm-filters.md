# Filters

Full API documentation for **Filters** components from `livingston-npm-components`.

---

### SearchableCheckboxDropdown

**Description:** SearchableCheckboxDropdown - A comprehensive dropdown component with multi-select, search, and drag-and-drop capabilities

This component combines a dropdown interface with checkbox-based multi-selection and drag-and-drop
reordering functionality. It features a built-in search bar for filtering items, select all/deselect all options,
visual feedback during drag operations, and customizable text phrases for internationalization.
The component manages both selection state and item ordering simultaneously, providing a complete solution for
complex list management scenarios. Includes drop indicators, drag overlays, and maintains selection state
during reordering operations. Perfect for scenarios requiring user-configurable lists with custom ordering.

The component exposes imperative methods via ref:
- `validateField()`: Returns true if validation passes (i.e., at least one item is selected when required=true), false otherwise
- `isInvalid()`: Returns the current error state (boolean)
- `getValue()`: Returns an array of currently selected DragAndDropItem objects in their current drag-and-drop order

**Props:**

- **title** (`string`): The title displayed in the dropdown header and optionally on the toggle button if btnLabel is not provided (optional)
- **items** (`DragAndDropItem[]`): Array of items to display in the dropdown with id (string), label (string), and checked (boolean) properties. The checked property determines initial selection state (required)
- **size** (`'sm' | 'lg'`): Size variant for the dropdown toggle button (optional)
- **variant** (`string`): Bootstrap variant for the dropdown button styling (optional, default: 'tertiary')
- **width** (`'full' | 'auto'`): Width behavior of the dropdown toggle. 'full' makes it 100% width, 'auto' limits to 13rem max-width (optional, default: 'auto')
- **btnLabel** (`string`): Custom label text for the dropdown button, overrides title on the button (optional)
- **draggable** (`boolean`): Enable drag-and-drop reordering of items with visual drag handles (optional, default: false)
- **searchable** (`boolean`): Show search input for filtering items by label (optional, default: false)
- **strictValidation** (`boolean`): Enable strict validation mode. When true, validation errors are only shown when dropdown is closed (optional, default: false)
- **onApply** (`function`): Callback function called with selected items array when apply button is clicked. Items are returned in their current drag-and-drop order (optional)
- **onClear** (`function`): Callback function called when clear button is clicked (optional)
- **phrases** (`RequiredPhrases`): Text phrases for internationalization with properties:\n - itemsSelected\n -  selectAll\n -  deselectAll,\n -  apply\n - clear\n -  search.\nAll phrases are optional, default to English phrases: { itemsSelected: 'Items selected', selectAll: 'Select all', deselectAll: 'Deselect all', apply: 'Apply', clear: 'Clear', search: 'Search' }
- **className** (`string`): Additional CSS classes to apply to the dropdown container (optional)
- **required** (`boolean`): Whether at least one item must be selected for validation. Works with validateField() method (optional, default: false)

---

### CheckboxFilter

**Description:** CheckboxFilter - A comprehensive multi-select filter component with dropdown interface

This component provides a powerful filtering interface using checkboxes within a dropdown.
It supports multiple selection, search functionality, and exposes methods through refs
for programmatic control. The component manages its own state and provides callbacks
for parent components to respond to filter changes. Features include clear all functionality,
applied state tracking, and customizable styling for active filters.

**Props:**

- **id** (`string`): Unique identifier for the filter component (required)
- **phrases** (`CheckboxFilterRequiredPhrases`): Localized text phrases for UI elements with properties: buttonTitle, clearButtonLabel, applyButtonLabel, noneSelected, selectedItem, selectedItems (all required), searchPlaceholder, selectAll and deselectAll (optional) (required)
- **availableFilters** (`CheckboxFilterOption[]`): Array of filter options with value (any type), label (string), and optional checked (boolean) properties. Each option's checked property defaults to false if not provided (required)
- **onApplyFilter** (`function`): Callback function triggered when filters are applied, receives array of selected CheckboxFilterOption objects. Also called when using ref methods to update filter state (required)
- **allowSearch** (`boolean`): Whether to enable search functionality within the dropdown (optional)
- **className** (`string`): Additional CSS classes to apply to the dropdown toggle button (optional, default_value: "")
- **size** (`'sm' | 'lg'`): Size variant for the dropdown button (optional)
- **width** (`'full' | 'auto'`): Width style of the dropdown button (optional)
- **activeFilterStyling** (`boolean`): Whether to apply special styling (items-selected class) when filters are selected (optional, default_value: true)

**Imperative Methods (ref):**

#### `resetToDefault`

Resets all filter options to their unchecked state and triggers the onApplyFilter callback.

This method clears all selections and immediately applies the empty filter state,
useful for "Reset" or "Clear All" functionality in parent components.

#### `setOption`

Programmatically sets the checked state of a single filter option by its value.

Updates the specified option and triggers the onApplyFilter callback with the new state.
If the value doesn't match any existing option, no changes are made.

#### `setOptions`

Programmatically sets the checked state of multiple filter options at once.

Updates all specified options and triggers a single onApplyFilter callback.
Only options with matching values are updated; unspecified options retain their current state.

---

### CheckboxFilterDropdown

**Description:** CheckboxFilterDropdown - A versatile dropdown component with checkbox-based multi-selection and search functionality

This component provides a comprehensive dropdown interface for multi-select filtering using checkboxes.
It features an optional search bar for filtering options, select all/deselect all functionality, and apply/cancel actions.
The component displays a count of selected items and supports active styling when filters are applied.
Changes to checkboxes are temporary and only applied when the Apply button is clicked. If the dropdown is closed
without clicking Apply, all changes are reverted to the last applied state.
Perfect for creating sophisticated filter interfaces with multiple selection capabilities and user-friendly
search functionality to handle large lists of options efficiently.

**Props:**

- **id** (`string`): Unique identifier for the dropdown component (required)
- **phrases** (`CheckboxFilterRequiredPhrases`): Localized text phrases for UI elements with properties: buttonTitle, clearButtonLabel, applyButtonLabel, noneSelected, selectedItem, selectedItems (all required), and searchPlaceholder (optional) (required)
- **checkboxOptions** (`CheckboxFilterOption[]`): Array of checkbox options with value (any type), label (string), and optional checked (boolean) properties (required)
- **onCheckboxChange** (`function`): Callback function triggered when a checkbox state changes and Apply is clicked, receives (value: string, isChecked: boolean) (required)
- **onApply** (`function`): Callback function triggered when apply button is clicked, receives array of selected CheckboxFilterOption objects (required)
- **isApplied** (`boolean`): Whether any filters are currently applied (required)
- **className** (`string`): Additional CSS classes to apply to the dropdown container (optional, default_value: "")
- **dropdownButtonSize** (`'sm' | 'lg'`): Size variant of the dropdown toggle button (optional)
- **buttonType** (`string`): Bootstrap button variant for the dropdown toggle (optional, default_value: 'tertiary')
- **allowSearch** (`boolean`): Whether to enable search functionality within the dropdown (optional)
- **activeFilterStyling** (`boolean`): Whether to apply special styling (items-selected class) when filters are active (optional, default_value: true)
- **onClearFilters** (`function`): Callback function triggered when clear filters button is clicked (optional)
- **width** (`'full' | 'auto'`): Width style of the dropdown button (optional)

---

### DateFilter

**Description:** DateFilter - A comprehensive date filtering component with predefined and custom options

This component provides a flexible date filtering interface that supports both
predefined date ranges (like "Last 7 days", "This month") and custom date selection.
It features a dropdown menu with multiple filtering options, custom date range
selection, and single date picking capabilities. The component manages its own
state and provides callbacks for filter application with programmatic control
through refs for resetting and retrieving filter states.

**Props:**

- **onApplyFilter** (`function`): Callback function triggered when filter is applied, receives (selectedOption: PredefinedDateRangeType | undefined, startDate: Date | undefined, endDate: Date | undefined) (required)
- **options** (`DateFilterOption[]`): Array of predefined date filter options with value and label properties (required)
- **phrases** (`DateFilterRequiredPhrases`): Localized text phrases for UI elements with properties: buttonTitle, customDateRange, selectCustomDateRange, selectStartDate, customDateRangeStartDate, selectEndDate, customDateRangeEndDate, cancelButtonLabel, applyButtonLabel, requiredErrorMessage, invalidDateErrorMessage (required)
- **width** (`'full' | 'auto'`): Width style of the dropdown button (optional, default_value: 'auto')
- **defaultOption** (`PredefinedDateRangeType`): Default option to select on mount (optional)
- **includeCustomDateRange** (`boolean`): Whether to include custom date range option in the dropdown (optional)
- **requireBothDatesToApply** (`boolean`): Whether both start and end dates are required to apply the custom date range filter (optional, default_value: true)
- **includeCustomDate** (`boolean`): Whether to include custom single date picker option in the dropdown (optional)
- **customDate** (`Date`): Initial custom date value when includeCustomDate is true (optional)
- **customStartDate** (`Date`): Initial custom start date value when includeCustomDateRange is true (optional)
- **customEndDate** (`Date`): Initial custom end date value when includeCustomDateRange is true (optional)
- **includeLabel** (`boolean`): Whether to show the button title label before the selected value (optional, default_value: true)
- **size** (`SizeClass`): Size variant for the dropdown button ('sm' or 'lg') (optional)
- **locale** (`LocaleString`): Locale for date formatting and translations (optional)
- **className** (`string`): Additional CSS classes to apply to the dropdown toggle button (optional)
- **activeFilterStyling** (`boolean`): Whether to apply special styling (items-selected class) when a filter is selected (optional, default_value: true)

**Imperative Methods (ref):**

#### `resetToDefault`

Resets the filter to its default state and triggers the onApplyFilter callback.

This method clears any custom date selections and reverts to the defaultOption
if one was provided in the component props. If no defaultOption exists, it clears
all selections. The onApplyFilter callback is triggered with the default state.

#### `getDateRange`

Retrieves the currently selected date range without triggering any callbacks.

This method returns the current start and end dates of the filter. Useful for
reading the current filter state without modifying it. Both dates may be undefined
if no date range has been selected.

#### `getSelectedOption`

Retrieves the currently selected filter option without triggering any callbacks.

This method returns the current selected predefined date range option of the filter.
Useful for reading the current filter state without modifying it. The value may be
undefined if no option has been selected or if a custom date range is in use.

---

### DateRangeFilter

**Description:** DateRangeFilter - A dropdown component for selecting custom date ranges

This component provides a date range filtering interface with a calendar dropdown
that allows users to select start and end dates. It features a responsive design
that shows selected dates in the button text and provides programmatic control
through ref methods. The component integrates with CustomDateRange for the
actual date selection interface and supports resetting and retrieving date ranges.

**Props:**

- **onApplyFilter** (`function`): Callback function triggered when date range is applied (required)
- **startDateValue** (`Date | undefined`): Initial start date value (optional)
- **endDateValue** (`Date | undefined`): Initial end date value (optional)
- **size** (`string`): Size variant for the dropdown button (optional, default_value: 'sm')
- **locale** (`string`): Locale string for date formatting (optional)
- **phrases** (`object`): Localized text phrases for UI elements (required)
- **className** (`string`): Additional CSS classes to apply (optional)
- **requireBothDatesToApply** (`boolean`): Whether both start and end dates are required to apply the filter (optional, default_value: false)

**Imperative Methods (ref):**

#### `resetToDefault`

Resets the date range filter to its default empty state and triggers the onApplyFilter callback.

This method clears both start and end date selections and immediately applies the
empty state, calling onApplyFilter with undefined values. Useful for "Clear" or
"Reset" functionality in parent components.

#### `getDateRange`

Retrieves the currently selected date range without triggering any callbacks.

This method returns the current start and end dates of the custom date range filter.
Useful for reading the current filter state without modifying it or triggering callbacks.
Both dates may be undefined if no date range has been selected.

---

