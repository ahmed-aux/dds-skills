# Forms

Full API documentation for **Forms** components from `livingston-npm-components`.

---

### CountryFlag

**Description:** CountryFlag - A component for displaying country flags using ISO country codes

This component renders SVG country flags based on ISO 3166-1 alpha-2 country codes. 
It automatically handles flag existence validation, maintains proper aspect ratios, 
and provides fallback behavior for invalid or missing country codes. The component 
supports customizable dimensions and styling while ensuring accessibility.

**Props:**

- **countryCode** (`string`): ISO 3166-1 alpha-2 country code (e.g., 'US', 'CA', 'GB') (required)
- **width** (`number`): Width of the flag in pixels (optional, default_value: 32)
- **height** (`number`): Height of the flag in pixels (optional, auto-calculated to maintain aspect ratio)
- **className** (`string`): Additional CSS classes to apply to the flag (optional, default_value: "")
- **style** (`object`): Inline styles to apply to the flag (optional, default_value: {})

---

### FormCountrySelect

**Description:** FormCountrySelect - A searchable country selection component with flag display

This component provides a comprehensive country selection interface with integrated
search functionality and flag display. It fetches country data dynamically,
supports localization, and includes validation. The component renders country
options with flags for visual identification and provides a searchable dropdown
for easy selection. Perfect for forms requiring country input with enhanced
user experience through visual cues and search capabilities.

**Props:**

- **name** (`string`): Name attribute for the form field (required)
- **label** (`string`): Label text for the country select (optional)
- **size** (`'sm' | 'lg'`): Size variant for the select (optional)
- **placeholder** (`string`): Placeholder text for the select (optional, default_value: "Select country")
- **className** (`string`): Additional CSS classes to apply (optional, default_value: null)
- **disabled** (`boolean`): Whether the select is disabled (optional, default_value: false)
- **required** (`boolean`): Whether the field is required for form submission (optional, default_value: true)
- **strictValidation** (`boolean`): Whether to enforce strict validation rules (optional, default_value: false)
- **defaultValue** (`string`): Default value to pre-select in the dropdown (optional)
- **value** (`string | undefined`): Currently selected country code (required)
- **onChange** (`function`): Callback function triggered when selection changes. Receives selected country code as parameter (required)
- **fetchCountries** (`function`): Function to fetch country data, returns Promise of CountryDetail array (required)
- **language** (`string`): Language code for localized country names (optional, default_value: "en")
- **helpText** (`string`): Help text displayed below the select (optional)
- **tooltip** (`string`): Tooltip text for additional information (optional)
- **preferredCountries** (`string[]`): Array of country codes to show at top of list (optional)
- **onBlur** (`function`): Callback function triggered when field loses focus (optional, default_value: () => {})
- **errorMessage** (`string`): Custom error message to display on validation failure (optional)
- **customValidation** (`function`): Custom validation function that receives the selected value and returns {isValid: boolean, message?: string} (optional)

---

### FormProvinceSelect

**Description:** FormProvinceSelect - A searchable province/state selection component based on country

This component provides a comprehensive province/state selection interface that
dynamically loads provinces based on the selected country. It integrates with
the FormSearchableSelect component to provide search functionality and validation.
The component fetches province data asynchronously, supports localization, and
includes validation. Perfect for address forms requiring province/state input
with country-specific options and enhanced user experience.

**Props:**

- **name** (`string`): Name attribute for the form field (required)
- **label** (`string`): Label text for the province select (optional)
- **size** (`'sm' | 'lg'`): Size variant for the select (optional)
- **placeholder** (`string`): Placeholder text for the select (optional, default_value: "Select province")
- **className** (`string`): Additional CSS classes to apply (optional, default_value: null)
- **disabled** (`boolean`): Whether the select is disabled (optional, default_value: false)
- **strictValidation** (`boolean`): Whether to enforce strict validation rules (optional, default_value: false)
- **countryCode** (`string`): Country code to fetch provinces for (required)
- **defaultValue** (`string`): Default value to pre-select in the dropdown (optional)
- **value** (`string | undefined`): Currently selected province code (required)
- **onChange** (`function`): Callback function triggered when selection changes. Receives selected province code as parameter (required)
- **required** (`boolean`): Whether the field is required for form submission (optional, default_value: true)
- **fetchProvinces** (`function`): Function to fetch province data for a specific country, returns Promise of ProvinceDetail array (required)
- **language** (`string`): Language code for localized province names (optional, default_value: "en")
- **helpText** (`string`): Help text displayed below the select (optional)
- **tooltip** (`string`): Tooltip text for additional information (optional)
- **isInvalid** (`boolean`): Whether the field is in an invalid state (optional)
- **onBlur** (`function`): Callback function triggered when field loses focus (optional, default_value: () => {})
- **errorMessage** (`string`): Custom error message to display on validation failure (optional)

---

### FormDatePicker

**Description:** FormDatePicker - A comprehensive date picker component with internationalization support

This component provides a feature-rich date picker interface using react-datepicker
with extensive customization options. It supports multiple locales, custom validation,
various display formats, and accessibility features. The component includes calendar
icon integration, clear functionality, month/year dropdowns, and error handling.
Perfect for forms requiring date input with consistent styling and validation.

**Props:**

- **id** (`string`): Unique identifier for the date picker input (required)
- **date** (`Date | undefined`): Currently selected date value (required)
- **setDate** (`function`): Callback function to update the selected date, receives Date | undefined (required)
- **errorMessages** (`ErrorMessageStrings`): Custom error messages for validation with properties: invalidDate, required, onlyPastDates, onlyFutureDates (required)
- **placeholder** (`string`): Placeholder text for the input field (optional, default_value: "MM/DD/YYYY")
- **className** (`string`): Additional CSS classes to apply (optional, default_value: "")
- **size** (`'sm' | 'lg'`): Size variant for the input (optional)
- **locale** (`LocaleString`): Locale string for internationalization ('en-US', 'es', 'fr-CA') (optional)
- **helpText** (`string`): Additional help text to display (optional)
- **label** (`string`): Label text for the date picker (optional)
- **tooltip** (`string`): Tooltip text to display (optional)
- **disabled** (`boolean`): Whether the input is disabled (optional, default_value: false)
- **readOnly** (`boolean`): Whether the input is read-only (optional, default_value: false)
- **customValidationFunction** (`function`): Custom validation function for date validation, receives Date and returns string | boolean (optional)
- **required** (`boolean`): Whether the field is required (optional, default_value: true)
- **strictValidation** (`boolean`): Show validation errors even when field is empty (optional, default_value: false)
- **showMonthDropdown** (`boolean`): Whether to show month dropdown (optional, default_value: true)
- **showYearDropdown** (`boolean`): Whether to show year dropdown (optional, default_value: true)
- **onlyAllowPastDates** (`boolean`): Whether to restrict selection to past dates only (optional, default_value: false)
- **onlyAllowFutureDates** (`boolean`): Whether to restrict selection to future dates only (optional, default_value: false)

---

### FormDropdown

**Description:** FormDropdown - A generic dropdown component built on React Bootstrap with validation

This component provides a customizable dropdown select with built-in validation,
error handling, and label support. It wraps React Bootstrap's Dropdown component
to provide a consistent interface matching other form components in the design system.
Perfect for selection inputs where you want a dropdown-style UI rather than a
traditional select element.

**Props:**

- **name** (`string`): Name identifier for the dropdown (optional)
- **label** (`string`): Label text to display above the dropdown (optional)
- **placeholder** (`string`): Placeholder text shown when no option is selected (required)
- **value** (`any`): Currently selected value (optional)
- **options** (`DropdownOption[]`): Array of options with value and label properties (required)
- **required** (`boolean`): Whether the field is required (optional, default_value: true)
- **strictValidation** (`boolean`): Whether to enforce strict validation rules immediately (optional, default_value: false)
- **disabled** (`boolean`): Whether the dropdown is disabled (optional, default_value: false)
- **helpText** (`string`): Helper text displayed below the dropdown (optional)
- **tooltip** (`string`): Tooltip text for the label (optional)
- **className** (`string`): Additional CSS classes for the dropdown container (optional)
- **variant** (`string`): Bootstrap button variant for the dropdown toggle (optional, default_value: "tertiary")
- **size** (`'sm' | 'lg'`): Size variant for the dropdown (optional)
- **width** (`'full' | 'auto'`): Width behavior of the dropdown toggle (optional, default_value: 'auto')
- **errorMessage** (`string`): Custom error message to display on validation failure (optional)
- **onChange** (`function`): Callback function triggered when selection changes (required)
- **customValidation** (`function`): Custom validation function that returns validation result (optional)

---

### FileLink

**Description:** FileLink - A component for displaying file names as clickable links or plain text

This component renders a file name either as a clickable link that opens the file
in a new tab (if a URL can be created) or as plain text if URL creation fails.
It uses the URL.createObjectURL API to generate temporary URLs for file objects.
Perfect for displaying uploaded files in file dropzone components with preview
functionality.

**Props:**

- **selectedFile** (`SelectedFile`): The file object to create a link for (required)
- **className** (`string`): Additional CSS classes to apply to the link element (optional)

---

### FormFileDropzone

**Description:** FormFileDropzone - A comprehensive drag-and-drop file upload component with validation

This component provides a full-featured file upload interface with drag-and-drop functionality,
file validation, document type selection, and error handling. It supports multiple file uploads,
file size validation, type validation, and can optionally require document type categorization.
The component exposes methods through refs for programmatic control and provides detailed
callbacks for tracking upload progress and validation status.

**Props:**

- **name** (`string`): Unique name identifier for the file input (required)
- **labels** (`FileDropzoneLabels`): Localized labels for UI messages (required)
- **validTypes** (`string[]`): Array of accepted MIME types (required)
- **onFileSelectedCount** (`function`): Callback with count of selected valid files (required)
- **limitNumberOfFiles** (`number`): Maximum number of files allowed (required)
- **maximumTotalUploadFileSize** (`number`): Maximum total size for all files in bytes (required)
- **maximumUploadFileSize** (`number`): Maximum size per file in bytes (required)
- **disabled** (`boolean`): Whether the component is disabled (required)
- **allowMultipleDocumentTypes** (`boolean`): Whether multiple document types can be selected per file (optional, default_value: true)
- **onErrorFilesSelectedCount** (`function`): Callback with count of files with errors (required)
- **onFilesSelectedWithDocumentTypeCount** (`function`): Callback with count of files with document types (required)
- **storedFiles** (`SelectedFile[]`): Previously uploaded files to restore (required)
- **documentTypeSelection** (`DocumentTypeSelection`): Configuration for document type selection (optional)
- **documentTypeDropdownPhrases** (`DocumentTypeDropdownPhrases`): Localized phrases for document type dropdown UI (optional)
- **onStateChange** (`function`): Callback triggered when component state changes (optional)

**Internal Render Functions:**

#### `triggerStateChange`

Triggers the onStateChange callback when the component state changes

#### `setSelectedDocumentType`

Sets the document types for a file with the specified filename

#### `renderDocumentTypes`

Renders the document type selection component for a file

#### `renderValidFileWithDocumentType`

Renders a selected file with document type selection interface

#### `renderValidFileWithoutDocumentType`

Renders a selected file without document type selection interface

#### `renderErrorMessage`

Renders an error message for a failed file upload

---

### FormFileDropzoneReview

**Description:** FormFileDropzoneReview - A review component for displaying uploaded files summary

This component provides a read-only summary view of files that have been uploaded
through the FormFileDropzone component. It displays file names as clickable links,
file sizes, and document types when available. The component automatically detects
whether to show document type information based on the presence of document type
data in the selected files. Perfect for confirmation screens and file upload reviews.

**Props:**

- **name** (`string`): Name identifier for the review component (required)
- **selectedFiles** (`SelectedFile[]`): Array of uploaded files to review (required)

---

### FormLabel

**Description:** FormLabel - A standardized form label component with optional tooltip and required indicators

This component provides a consistent way to display form labels with localization support,
optional tooltips, and automatic indication of required/optional fields. It integrates
with the language utility system for translating the "optional" text and includes an
information icon for tooltips. Perfect for maintaining consistent form labeling across
an application with internationalization requirements.
To set a 'global' tooltip behavior (rendering as popover regardless of text length), wrap your form with FormProvider and set the 'tooltipAsPopover' prop to true.

**Props:**

- **label** (`string | undefined`): The text content for the label (required)
- **htmlFor** (`string | undefined`): The id of the form element this label is associated with (optional)
- **required** (`boolean`): Whether the field is required (optional, default_value: true)
- **tooltip** (`string`): Tooltip text to display on hover (optional)
- **tooltipAsPopover** (`boolean`): When true, renders the tooltip as a popover regardless of text length (optional, default_value: false)
- **locale** (`LocaleString`): Locale string for internationalization (optional, default_value: "en")
- **className** (`string`): Additional CSS classes to apply to the label (optional)

---

### FormMonetaryInput

**Description:** FormMonetaryInput - A comprehensive monetary input component with currency selection

This component provides a complete monetary input solution that combines currency
selection with amount entry. It includes a country dropdown for currency selection
and a formatted numeric input for the monetary amount. The component supports
validation, tooltips, help text, and various sizing options. Perfect for
international applications requiring multi-currency support with proper formatting.

**Props:**

- **id** (`string`): Unique identifier for the component (required)
- **onChangeCurrency** (`function`): Callback function triggered when currency changes, receives CurrencyType object with currencyCode, countryCode, and countryName (required)
- **fetchCountries** (`function`): Function to fetch available countries, returns Promise of CountryDetail array (required)
- **label** (`string`): Label text for the input group (optional)
- **placeholder** (`string`): Placeholder text for the input field (optional)
- **size** (`'sm' | 'lg'`): Size variant for the input (optional)
- **language** (`string`): Language code for localized country names (optional, default_value: "en")
- **amount** (`string`): Current monetary amount value (optional, default_value: "")
- **onChangeAmount** (`function`): Callback function triggered when amount changes, receives the new amount as string parameter (optional)
- **onBlur** (`function`): Callback function triggered on input blur (optional)
- **className** (`string`): Additional CSS classes to apply (optional)
- **disabled** (`boolean`): Whether the input is disabled (optional)
- **preferredCountries** (`string[]`): Array of preferred country codes to show at top of list (optional)
- **defaultCountry** (`string`): Default country code to select (optional)
- **required** (`boolean`): Whether the field is required for form submission (optional, default_value: true)
- **strictValidation** (`boolean`): Whether to show validation errors immediately (optional)
- **errorMessage** (`string`): Custom error message for validation (optional, default_value: "Please enter a valid amount")
- **tooltip** (`string`): Tooltip text to display for the label (optional)
- **helpText** (`string`): Additional help text to display below the input (optional)
- **fieldValid** (`function`): Callback function for field validation status, receives boolean indicating validity (optional)
- **showAmount** (`boolean`): Whether to show the amount input field (optional, default_value: true)
- **readOnly** (`boolean`): Whether the input is read-only (optional, default_value: false)
- **menuClassName** (`string`): Additional CSS classes for the dropdown menu (optional, default_value: "")
- **customValidation** (`function`): Custom validation function that receives the value and returns {isValid: boolean, message?: string} (optional)

**Imperative Methods (ref):**

#### `validateField`

Validates the current monetary input field value against validation rules.

This method triggers validation of the monetary amount based on the component's
validation rules (required, strictValidation, customValidation). Returns true
if the field is valid, false otherwise. Validation errors are displayed in the UI.

#### `getValue`

Retrieves the current monetary amount value as a string.

This method returns the current amount value without the currency information.
The value is returned as a formatted string representing the monetary amount.

#### `getCurrency`

Retrieves the currently selected currency information.

This method returns the complete currency details including currency code,
country code, and country name. Returns null if no currency has been selected.

---

### FormMultiCountrySelect

**Description:** FormMultiCountrySelect - A multi-select dropdown component for selecting multiple countries

This component provides an interface for selecting multiple countries from a comprehensive
list with country flags and names. It features a searchable dropdown with checkboxes,
validation support, and localization capabilities. The component loads countries dynamically,
caches them for performance, and provides callbacks for selection changes and validation.
Perfect for forms requiring multiple country selections with visual country identification.

**Props:**

- **name** (`string`): Unique name identifier for the component (required)
- **selectedCodes** (`string`): Comma-delimited string of selected country codes (e.g., "US,CA,ZA") (required)
- **setSelectedCodes** (`function`): React state setter function to update selected country codes (required)
- **fetchCountries** (`function`): Function to fetch country data, returns Promise of CountryDetail array (required)
- **label** (`string`): Label text for the input field (optional)
- **size** (`'sm' | 'lg'`): Size variant for the dropdown (optional)
- **className** (`string`): Additional CSS classes to apply (optional)
- **showNumberOfSelectedItemsInsideButton** (`boolean`): Whether to show count of selected items in button text (optional)
- **showSelectedItemsInsideButton** (`boolean`): Whether to show selected items in button text (optional)
- **showSelectedItemsUnderneath** (`boolean`): Whether to show selected items below the dropdown (optional)
- **disabled** (`boolean`): Whether the component is disabled (optional, default_value: false)
- **required** (`boolean`): Whether selection is required for form submission (optional, default_value: true)
- **strictValidation** (`boolean`): Whether to show validation errors immediately (optional)
- **errorMessage** (`string`): Custom error message for validation (optional, default_value: "Please select at least one country")
- **dropdownTitle** (`string`): Title text for the dropdown (optional)
- **children** (`React.ReactNode`): Custom child components to render in dropdown (optional)
- **onClick** (`function`): Callback function triggered on dropdown click (optional)
- **fieldValid** (`function`): Callback function for field validation status, receives boolean indicating validity (optional)
- **language** (`string`): Language code for localized country names (optional, default_value: "en")
- **placeholder** (`string`): Placeholder text for the dropdown button (optional, default_value: "Select countries")
- **helpText** (`string`): Additional help text to display below the component (optional)
- **tooltip** (`string`): Tooltip text to display for the label (optional)
- **customValidation** (`function`): Custom validation function that receives the value and returns {isValid: boolean, message?: string} (optional)

**Imperative Methods (ref):**

#### `validateField`

Validates the current multi-country selection against validation rules.

This method triggers validation of the country selection based on the component's
validation rules (required, strictValidation, customValidation). Returns true
if the field is valid, false otherwise. Validation errors are displayed in the UI.

#### `getValue`

Retrieves the currently selected country codes as a comma-separated string.

This method returns a string containing all selected country codes separated
by commas (e.g., "US,CA,MX"). Returns an empty string if no countries are selected.

#### `getSelectedCountries`

Retrieves detailed information about all currently selected countries.

This method returns an array of CountryDetail objects containing complete
information (name, dialCode, countryCode) for each selected country.
Returns an empty array if no countries are selected.

---

### FormNumericInput

**Description:** FormNumericInput - A specialized numeric input component with advanced formatting

This component provides a robust numeric input field with built-in validation,
decimal precision control, and formatting capabilities. It supports features like
negative values, prefix text, tooltips, and various sizing options. The component
uses react-currency-input-field under the hood for advanced numeric handling
and formatting. Perfect for financial amounts, quantities, measurements, or any
numeric data requiring precise input control.

**Props:**

- **name** (`string`): Name attribute for the input field (required)
- **label** (`string`): Label text for the input field (optional, default_value: null)
- **placeholder** (`string`): Placeholder text for the input (optional)
- **value** (`string | number`): Current numeric value (required)
- **className** (`string`): Additional CSS classes to apply (optional, default_value: "")
- **size** (`string`): Size variant for the input (sm, lg) (optional, default_value: undefined)
- **required** (`boolean`): Whether the field is required (optional, default_value: true)
- **strictValidation** (`boolean`): Show validation errors even when field is empty (optional, default_value: false)
- **fieldValid** (`function`): Callback function for field validation status (optional, default_value: null)
- **onChange** (`function`): Callback function triggered when value changes (required)
- **onBlur** (`function`): Callback function triggered on input blur (optional, default_value: null)
- **tooltip** (`string`): Tooltip text to display (optional)
- **decimalPoint** (`number`): Number of decimal places allowed (optional, default_value: 2)
- **allowNegativeValue** (`boolean`): Whether negative values are allowed (optional, default_value: false)
- **helpText** (`string`): Additional help text to display (optional, default_value: null)
- **prefix** (`string`): Text prefix to display before the input (optional, default_value: null)
- **disabled** (`boolean`): Whether the input is disabled (optional, default_value: false)
- **readOnly** (`boolean`): Whether the input is read-only (optional, default_value: false)
- **minValue** (`number`): Minimum allowed value (optional)
- **maxValue** (`number`): Maximum allowed value (optional)
- **maxLength** (`number`): Maximum number of digits allowed before the decimal point (optional). Maps to the integer-part precision of a SQL NUMERIC column — e.g. for NUMERIC(6,2) pass maxLength={4} and decimalPoint={2}.
- **errorMessage** (`string`): Custom error message for validation (optional, default_value: "Please enter a valid numeric value")
- **customValidation** (`function`): Custom validation function that returns {isValid: boolean, message?: string} (optional)

---

### FormCountryListDropdown

**Description:** FormCountryListDropdown - A dropdown component for selecting countries with currency or dialing code display

This component provides a country selection dropdown that displays countries with their flags
and either currency codes or dialing codes. It supports preferred countries shown at the top,
localization, and customizable styling. Perfect for phone number inputs or currency selectors
requiring country-specific information with visual flags.

**Props:**

- **id** (`string`): Unique identifier for the dropdown (required)
- **onChangeCountry** (`function`): Callback function triggered when country changes, receives CountryDetail object (required)
- **fetchCountries** (`function`): Function to fetch available countries, returns Promise of CountryDetail array (required)
- **defaultCountry** (`string`): Default country code to select (optional)
- **size** (`'sm' | 'lg'`): Size variant for the dropdown (optional)
- **language** (`string`): Language code for localized country names (optional, default_value: "en")
- **preferredCountries** (`string[]`): Array of preferred country codes to show at top of list (optional)
- **disabled** (`boolean`): Whether the dropdown is disabled (optional)
- **fullWidth** (`boolean`): Whether the dropdown should take full width (optional, default_value: false)
- **placeholder** (`string`): Placeholder text when no country is selected (optional, default_value: "Select Country")
- **postfix** (`Postfix`): Display mode for country info: Postfix.CurrencyCode or Postfix.DialingCode (optional, default_value: Postfix.CurrencyCode)
- **menuClassName** (`string`): Additional CSS classes for the dropdown menu (optional, default_value: "")
- **isInvalid** (`boolean`): Whether the dropdown has validation errors (optional, default_value: false)

---

### FormPhoneNumber

**Description:** FormPhoneNumber - An international phone number input component with country selection

This component provides a comprehensive phone number input solution with integrated
country selection and international formatting. It combines a country dropdown with
dialing codes and a formatted phone input field. The component includes built-in
validation using react-phone-number-input library, automatic country detection from
existing numbers, and support for preferred countries. Perfect for international
applications requiring proper phone number validation and formatting.

**Props:**

- **label** (`string`): Label text for the phone input field (optional)
- **setValue** (`function`): Callback function to update the phone number value (required)
- **value** (`string`): Current phone number value (required)
- **errorMessage** (`string`): Error message to display for required field
- **validationErrorMessage** (`string`): Error message to display for invalid phone number format (optional)
- **preferredCountries** (`string[]`): Array of preferred country codes to show first (optional)
- **defaultCountry** (`string`): Default country code to select (optional)
- **disabled** (`boolean`): Whether the input is disabled (optional, default: false)
- **required** (`boolean`): Whether the field is required (optional, default: true)
- **size** (`string`): Size variant for the input (sm, lg) (optional)
- **placeholder** (`string`): Placeholder text for the phone input (optional)
- **className** (`string`): Additional CSS classes to apply (optional, default: '')
- **fetchCountries** (`function`): Function to fetch country data (required)
- **name** (`string`): Name attribute for the form control (optional)
- **strictValidation** (`boolean`): Whether to enable strict validation mode (optional)
- **readOnly** (`boolean`): Whether the input is read-only (optional)
- **helpText** (`string`): Help text to display below the input (optional)
- **tooltip** (`string`): Tooltip text for the label (optional)
- **customValidation** (`function`): Custom validation function that returns {isValid: boolean, message?: string} (optional)
- **onChange** (`function`): Callback function called when the value changes (optional)
- **onBlur** (`function`): Callback function called when the input loses focus (optional)

**Imperative Methods (ref):**

#### `validateField`

Validates the current phone number field value against validation rules.

This method triggers validation of the phone number based on the component's
validation rules (required, strictValidation, customValidation). Returns true
if the field is valid, false otherwise. Validation errors are displayed in the UI.

#### `getValue`

Retrieves the current phone number value in international format.

This method returns the complete phone number including country code and dial code.
The format includes the dial code prefix (e.g., "+1 234-567-8900").

#### `blur`

Programmatically removes focus from the phone number input field.

This method triggers the blur event on the input field, which may trigger
validation and onBlur callbacks. Useful for programmatically completing
input or managing focus flow.

---

### FormCheckAndRadioGroup

**Description:** FormCheckAndRadioGroup - A flexible form component for creating groups of checkboxes or radio buttons

This component provides a unified interface for handling both checkbox and radio button groups
with comprehensive validation and accessibility features. It supports both single-select (radio)
and multi-select (checkbox) modes with built-in validation, error handling, and customizable styling.
The component uses a responsive grid layout that displays options in columns on medium+ screens and
stacks them on mobile. It is forwardRef enabled for form validation and integrates seamlessly with
React Bootstrap forms.

**Props:**

- **name** (`string`): Unique identifier for the form group (required)
- **label** (`string`): Display label for the group (optional). You can use <FormLabel> for more complex labels.
- **options** (`CheckAndRadioOption[]`): Array of options with value, label, isChecked, and optional disabled/tooltip properties (required)
- **optionsMaxWidth** (`string`): Maximum width for the options container eg 10rem (optional)
- **setSelectedOptions** (`function`): Callback function triggered when option selection changes, receives updated CheckAndRadioOption array (required)
- **type** (`'checkbox' | 'radio'`): Type of input elements to render (required)
- **className** (`string`): Additional CSS classes to apply to the form group (optional)
- **withBorder** (`boolean`): Whether to display a border around the options container (optional, default_value: false)
- **columns** (`1 | 2 | 3`): Number of columns in the responsive grid layout. Options display in specified columns on md+ screens, 2 columns on sm screens, and 1 column on xs screens (optional, default_value: 1)
- **errorMessage** (`string`): Custom error message to display on validation failure (optional)
- **required** (`boolean`): Whether at least one option must be selected for form submission (optional, default_value: true)
- **strictValidation** (`boolean`): Whether to show validation errors immediately on every change (optional, default_value: false)
- **disabled** (`boolean`): Whether all options are disabled and non-interactive (optional, default_value: false)
- **helpText** (`string`): Additional help text to display below the options (optional)
- **tooltip** (`string`): Tooltip text to show on the group label (optional)
- **customValidation** (`function`): Custom validation function that receives the options array and returns {isValid: boolean, message?: string} (optional)

---

### FormSingleCheck

**Description:** FormSingleCheck - A single checkbox form component with validation and accessibility features

This component provides a simple yet powerful interface for handling a single checkbox input
with comprehensive validation, error handling, and customizable styling. It supports required
field validation, custom validation functions, and seamlessly integrates with React Bootstrap
forms. The component is forwardRef enabled for form-level validation and value retrieval.

**Props:**

- **name** (`string`): Unique identifier for the form control (required)
- **label** (`string`): Display label for the checkbox (required)
- **isChecked** (`boolean`): Current checked state of the checkbox (required)
- **setIsChecked** (`(value: boolean) => void`): Callback function to handle checkbox state changes (required)
- **className** (`string`): Additional CSS classes to apply to the form group (optional)
- **withBorder** (`boolean`): Whether to display a border around the checkbox (optional, default_value: false)
- **errorMessage** (`string`): Custom error message to display on validation failure (optional, default_value: 'This field is required')
- **required** (`boolean`): Whether the checkbox must be checked for form submission (optional, default_value: true)
- **strictValidation** (`boolean`): Whether to show errors immediately or only after interaction (optional, default_value: false)
- **disabled** (`boolean`): Whether the checkbox is disabled (optional, default_value: false)
- **helpText** (`string`): Additional help text to display below the checkbox (optional)

---

### FormTagCheckAndRadioGroup

**Description:** FormTagCheckAndRadioGroup - A flexible form component for creating tag-style checkbox and radio groups

This component provides a tag-style checkbox/radio interface with validation and accessibility features.
It displays form controls in a flexible wrap layout, ideal for tag selection interfaces.
The component is forwardRef enabled for form validation and integrates seamlessly with
React Bootstrap forms.

**Props:**

- **name** (`string`): Unique identifier for the form group (required)
- **options** (`FormTagCheckAndRadioGroupOption[]`): Array of options with value, label, isChecked, and optional disabled/tooltip/optionId properties (required)
- **setSelectedOptions** (`(values: FormTagCheckAndRadioGroupOption[]) => void`): Callback function triggered when option selection changes, receives updated options array (required)

---

### FormSearchableSelect

**Description:** FormSearchableSelect - A powerful searchable dropdown component with async data loading and dynamic item creation

This component provides a sophisticated searchable dropdown interface with debounced
search functionality, async data loading, and customizable styling. It supports
dynamic item filtering, keyboard navigation, clear functionality, loading states,
and the ability to add new items on-the-fly. The component includes built-in validation,
tooltip support, flexible rendering options, and Enter key support for selection.
Perfect for scenarios requiring searchable selection from large datasets with
performance optimization through debouncing and async loading, plus dynamic content creation.

**Props:**

- **name** (`string`): Name attribute for the form field (required)
- **items** (`SearchableSelectItem[] | undefined`): Array of selectable items. Use undefined for typeahead-only mode (required)
- **value** (`string | undefined`): Currently selected item value (required)
- **onSelect** (`function`): Callback function triggered when item is selected, receives (selectedItem: string | undefined) (required)
- **getItemNode** (`function`): Function to render custom item content, receives (item: SearchableSelectItem) and returns React.ReactNode (required)
- **className** (`string`): Additional CSS classes for the container (optional)
- **dropdownMenuClassName** (`string`): CSS classes for the dropdown menu (optional)
- **disabled** (`boolean`): Whether the component is disabled (optional, default_value: false)
- **placeholder** (`string`): Placeholder text for the search input (optional)
- **size** (`'sm' | 'lg'`): Size variant for the component (optional)
- **inputFieldClassName** (`string`): CSS classes for the input field (optional)
- **strictValidation** (`boolean`): Whether to enforce strict validation rules (optional)
- **required** (`boolean`): Whether the field is required (optional, default_value: true)
- **phrases** (`RequiredPhrases`): Custom phrases for internationalization with properties: addNewItem, minimumSearchCharacters, noResults (optional)
- **defaultValue** (`string`): Default value for the input field (optional)
- **helpText** (`string`): Help text displayed below the component (optional)
- **label** (`string`): Label text for the searchable select (optional)
- **tooltip** (`string`): Tooltip text for the label (optional)
- **typeaheadCallback** (`SearchableSelectTypeaheadCallback`): Async callback for typeahead search functionality. Object with callbackFunction that takes search string and returns Promise of SearchableSelectItem array (optional)
- **errorMessage** (`string`): Custom error message to display on validation failure (optional)
- **onBlur** (`function`): Callback function triggered when input loses focus, receives (event: React.FocusEvent<HTMLInputElement>) (optional)
- **onAddNew** (`function`): Callback function triggered when "add new" option is selected, receives (searchText: string). When provided, enables dynamic item creation (optional)

**Imperative Methods (ref):**

#### `validateField`

Validates the current searchable select field value against validation rules.

This method triggers validation of the selected value based on the component's
validation rules (required, strictValidation). Returns true if the field is valid,
false otherwise. Validation errors are displayed in the UI.

#### `getValue`

Retrieves the currently selected value from the searchable select.

This method returns the value of the currently selected item. Returns undefined
if no item has been selected.

#### `focus`

Programmatically sets focus to the searchable select input field.

This method triggers focus on the input field, making it active for user interaction
or keyboard navigation. Useful for managing focus flow in forms.

#### `blur`

Programmatically removes focus from the searchable select input field.

This method triggers the blur event on the input field, which may trigger
validation and onBlur callbacks. Useful for programmatically completing
input or managing focus flow.

#### `clearValue`

Programmatically clears the currently selected value.

This method resets the searchable select to its empty state, removing any
current selection. The onSelect callback is triggered with undefined.

#### `setValue`

Programmatically sets the selected value on the searchable select.

This method finds a matching item in the current filtered entries using an exact match, then selects it, updates the input text, triggers
the onSelect callback, and runs validation. If the value is undefined, the
field is cleared. If the value does not match any item in the current list,
nothing happens.

#### `element`

Reference to the underlying HTML input element.

This property provides direct access to the native input element for advanced
use cases. May be null if the component is not mounted.

---

### FormTypeaheadSelect

**Description:** FormTypeaheadSelect - A wrapper component for FormSearchableSelect optimized for typeahead functionality

This component extends FormSearchableSelect specifically for typeahead use cases where
data is loaded asynchronously based on user input. It provides the same powerful searchable
dropdown interface with debounced search functionality, async data loading, customizable
styling, and dynamic item creation capabilities. The component is optimized for scenarios
requiring real-time search from external data sources with performance optimization through
debouncing and async loading. Includes support for keyboard navigation, Enter key selection,
and the ability to add new items when they don't exist in the search results.

**Props:**

- **name** (`string`): Name attribute for the form field (required)
- **className** (`string`): Additional CSS classes for the container (optional)
- **dropdownMenuClassName** (`string`): CSS classes for the dropdown menu (optional)
- **disabled** (`boolean`): Whether the component is disabled (optional, default: false)
- **placeholder** (`string`): Placeholder text for the search input (optional)
- **items** (`SearchableSelectItem[] | undefined`): List of items to display in dropdown. Use undefined for pure typeahead mode where all items come from async search (optional)
- **size** (`'sm' | 'lg'`): Size variant for the component (optional)
- **inputFieldClassName** (`string`): CSS classes for the input field (optional)
- **strictValidation** (`boolean`): Whether to enforce strict validation rules (optional, default: false)
- **required** (`boolean`): Whether the field is required for form submission (optional, default: true)
- **phrases** (`RequiredPhrases`): Custom phrases for internationalization with properties: addNewItem, minimumSearchCharacters, noResults (optional)
- **onSelect** (`function`): Callback function triggered when item is selected. Receives selected item value as parameter (required)
- **getItemNode** (`function`): Function to render custom item content. Receives SearchableSelectItem and returns ReactNode (required)
- **defaultValue** (`string`): Default value to pre-select in the dropdown (optional)
- **value** (`string | undefined`): Currently selected item value (required)
- **helpText** (`string`): Help text displayed below the component (optional)
- **label** (`string`): Label text for the searchable select (optional)
- **tooltip** (`string`): Tooltip text for the label (optional)
- **typeaheadCallback** (`object`): Async callback for typeahead search functionality. Object with callbackFunction that takes search string and returns Promise of SearchableSelectItem array (optional)
- **errorMessage** (`string`): Custom error message to display on validation failure (optional)
- **onBlur** (`function`): Callback function triggered when input loses focus (optional, default: () => {})
- **onAddNew** (`function`): Callback function triggered when "add new" option is selected, receives (searchText: string). Enables dynamic creation of new items when search yields no results (optional)

---

### FormSelect

**Description:** FormSelect - A reusable form select dropdown component with validation

This component provides a comprehensive select dropdown with built-in validation,
error handling, and accessibility features. It supports custom options, validation
rules, and integrates seamlessly with form management systems. The component
includes features like custom error messages, help text, tooltips, and responsive
sizing options for enhanced user experience.

**Props:**

- **name** (`string`): Name attribute for the form field (required)
- **size** (`'sm' | 'lg'`): Size variant for the select (optional)
- **errorMessage** (`string`): Custom error message to display on validation failure (optional, default_value: "Please select an option")
- **label** (`string`): Label text for the select dropdown (optional)
- **placeholder** (`string`): Placeholder text shown when no option is selected (optional)
- **value** (`any`): Currently selected value (optional, default_value: '')
- **options** (`SelectOption[]`): Array of options with value and label properties (required)
- **required** (`boolean`): Whether the field is required for form validation (optional, default_value: true)
- **strictValidation** (`boolean`): Whether to enforce strict validation rules immediately (optional, default_value: false)
- **disabled** (`boolean`): Whether the select is disabled for user interaction (optional, default_value: false)
- **helpText** (`string`): Helper text displayed below the select for guidance (optional)
- **tooltip** (`string`): Tooltip text for additional information on hover/focus (optional)
- **className** (`string`): Additional CSS classes to apply to the form group (optional)
- **style** (`React.CSSProperties`): Inline styles to apply to the form group (optional)
- **setValue** (`function`): Callback function to update the selected value (required)
- **customValidation** (`function`): Custom validation function that returns validation result (optional)
- **onChange** (`function`): Callback function triggered when selection changes (optional)
- **onBlur** (`function`): Callback function triggered when field loses focus (optional)

---

### FormSuperCheckbox

**Description:** FormSuperCheckbox - An enhanced checkbox component with rich labeling and styling options

This component provides a feature-rich checkbox with support for titles, descriptions, 
badges, help text, and disabled states. It's designed for forms that need more than 
basic checkbox functionality, offering flexible styling and comprehensive labeling 
options for better user experience and accessibility.

**Props:**

- **id** (`string`): Unique identifier for the checkbox (required)
- **labelTitle** (`string`): Main title text for the checkbox (optional)
- **titleBold** (`boolean`): Whether to make the title bold (optional, default_value: false)
- **labelDescription** (`React.ReactNode`): Additional description text below the title (optional, default_value: null)
- **checked** (`boolean`): Whether the checkbox is checked (required)
- **onChange** (`function`): Callback function when checkbox state changes (required)
- **className** (`string`): Additional CSS classes (optional, default_value: null)
- **badgeTypeClass** (`string`): CSS class for optional badge styling (optional, default_value: null)
- **badgeText** (`string`): Text content for optional badge (optional, default_value: null)
- **disabled** (`boolean`): Whether the checkbox is disabled (optional, default_value: false)
- **helpText** (`string`): Help text displayed below the checkbox (optional, default_value: null)

---

### FormSuperCheckboxGroup

**Description:** FormSuperCheckboxGroup - A container component for grouping multiple FormSuperCheckbox components

This component provides a wrapper for multiple checkbox controls with common labeling,
validation, and styling. It handles group-level validation feedback, optional field
indicators, and maintains consistent styling across all contained checkboxes. Perfect
for creating checkbox groups with shared validation states.

**Props:**

- **name** (`string`): Name attribute for the checkbox group (optional)
- **className** (`string`): Additional CSS classes to apply to the group (optional)
- **label** (`string`): Label text for the entire group (optional)
- **required** (`boolean`): Whether the group is required (optional, default_value: true)
- **strictValidation** (`boolean`): Whether to show validation errors immediately (optional)
- **errorMessage** (`string`): Custom error message for validation (optional, default_value: "Please select at least one option")
- **disabled** (`boolean`): Whether all checkboxes in the group are disabled (optional)
- **selectedValues** (`any[]`): Array of currently selected checkbox values (optional, default_value: [])
- **customValidation** (`function`): Custom validation function that receives the values array and returns {isValid: boolean, message?: string} (optional)
- **fieldValid** (`function`): Callback function for field validation status, receives boolean indicating validity (optional)
- **children** (`React.ReactNode`): FormSuperCheckbox components to display in the group (required)
- **isInvalid** (`boolean`): Whether the group has validation errors (optional, deprecated - will be overridden by internal validation)
- **invalidFeedback** (`string`): Error message to display when invalid (optional, deprecated - use errorMessage instead)

**Imperative Methods (ref):**

#### `getSelectedValues`

Retrieves all currently selected checkbox values as an array.

This method returns an array containing the values of all checked checkboxes
within the checkbox group. Returns an empty array if no checkboxes are selected.

#### `validateField`

Validates the current checkbox group selection against validation rules.

This method triggers validation of the checkbox group based on the component's
validation rules (required, strictValidation, customValidation). Returns true
if the field is valid, false otherwise. Validation errors are displayed in the UI.

---

### FormSuperRadio

**Description:** FormSuperRadio - An enhanced radio button component with rich labeling and styling options

This component provides a feature-rich radio button with support for titles, descriptions, 
badges, help text, and disabled states. It's designed for forms that need more than 
basic radio functionality, offering flexible styling and comprehensive labeling 
options for better user experience and accessibility.

**Props:**

- **id** (`string`): Unique identifier for the radio button (required)
- **value** (`string`): Value of the radio button (required)
- **labelTitle** (`string`): Main title text for the radio button (optional)
- **titleBold** (`boolean`): Whether to make the title bold (optional, default_value: false)
- **labelDescription** (`React.ReactNode`): Additional description text below the title (optional, default_value: null)
- **isChecked** (`boolean`): Whether the radio button is selected (optional, default_value: false)
- **onChange** (`function`): Callback function when radio button is selected (required)
- **className** (`string`): Additional CSS classes (optional, default_value: null)
- **badgeTypeClass** (`string`): CSS class for optional badge styling (optional, default_value: null)
- **badgeText** (`string`): Text content for optional badge (optional, default_value: null)
- **disabled** (`boolean`): Whether the radio button is disabled (optional, default_value: false)
- **helpText** (`string`): Help text displayed below the radio button (optional, default_value: null)

---

### FormSuperRadioGroup

**Description:** FormSuperRadioGroup - A container component for grouping multiple FormSuperRadio components

This component provides a wrapper for multiple radio button controls with common labeling,
validation, and styling. It handles group-level validation feedback, optional field
indicators, and maintains consistent styling across all contained radio buttons. Essential
for creating radio button groups with shared validation states and proper form structure.

**Props:**

- **className** (`string`): Additional CSS classes to apply to the group (optional)
- **label** (`string`): Label text for the entire radio group (optional)
- **required** (`boolean`): Whether the group is required (optional, default_value: true)
- **strictValidation** (`boolean`): Whether to show validation errors immediately (optional)
- **errorMessage** (`string`): Custom error message for validation (optional, default_value: "Please select an option")
- **disabled** (`boolean`): Whether all radio buttons in the group are disabled (optional)
- **selectedValue** (`string`): The currently selected radio button value (optional, default_value: "")
- **customValidation** (`function`): Custom validation function that receives the value and returns {isValid: boolean, message?: string} (optional)
- **fieldValid** (`function`): Callback function for field validation status, receives boolean indicating validity (optional)
- **children** (`React.ReactNode`): FormSuperRadio components to display in the group (required)
- **isInvalid** (`boolean`): Whether the group has validation errors (optional, deprecated - will be overridden by internal validation)
- **invalidFeedback** (`string`): Error message to display when invalid (optional, deprecated - use errorMessage instead)

**Imperative Methods (ref):**

#### `getSelectedValue`

Retrieves the currently selected radio button value.

This method returns the value of the currently selected radio button option
within the radio group. Returns a string representing the selected value.

#### `validateField`

Validates the current radio group selection against validation rules.

This method triggers validation of the radio group based on the component's
validation rules (required, strictValidation, customValidation). Returns true
if the field is valid, false otherwise. Validation errors are displayed in the UI.

---

### FormEmailInput

**Description:** FormEmailInput - A specialized email input component with built-in email validation

This component provides an email-specific form input solution with built-in email format validation,
error messaging, and accessibility features. It extends the standard text input functionality with
automatic email validation using regex patterns. The component supports custom validation functions
that work in addition to the email format validation, mandatory field validation, and character limits.
Features include help text, tooltips, disabled/readonly states, and responsive error display that
adapts to form submission state.

**Props:**

- **name** (`string`): Unique identifier and control ID for the email input field (required)
- **size** (`'sm' | 'lg'`): Bootstrap size variant for the input (optional)
- **placeholder** (`string`): Placeholder text displayed when input is empty (optional)
- **errorMessage** (`string`): Default error message shown for validation failures (optional, default_value: 'Please enter a valid email')
- **validationErrorMessage** (`string`): Custom error message for email format validation failures (optional)
- **label** (`string`): Label text displayed above the input field (optional)
- **value** (`string`): Current value of the email input field (required)
- **maxLength** (`number`): Maximum number of characters allowed (optional)
- **required** (`boolean`): Whether the field is required for form submission (optional, default_value: true)
- **strictValidation** (`boolean`): Indicates that all form errors should be shown and updated on every keypress (optional)
- **disabled** (`boolean`): Whether the input is disabled and non-interactive (optional, default_value: false)
- **readOnly** (`boolean`): Whether the input is read-only (optional, default_value: false)
- **helpText** (`string`): Additional help text displayed below the input (optional)
- **tooltip** (`string`): Tooltip text for the label (optional)
- **className** (`string`): Additional CSS classes to apply to the form group (optional)
- **setValue** (`function`): Callback function to update the input value (required)
- **customValidation** (`function`): Custom validation function that runs in addition to email format validation, returning isValid and optional error message in the format: {isValid: false, message: 'Custom validation error'} (optional)
- **onChange** (`function`): Optional callback function triggered whenever the input value changes. It is called in addition to the setValue function. Example: onChange={(newValue) => console.info('Email changed to:', newValue)} (optional)
- **onBlur** (`function`): Optional callback function triggered when the input field loses focus (blur event). This function is called after the component's internal blur handling. Example: onBlur={() => validateEmailDomain()} (optional)

---

### FormTextInput

**Description:** FormTextInput - A comprehensive form input component with validation, labeling, and error handling

This component provides a complete form input solution with built-in validation, error messaging,
and accessibility features. It supports custom validation functions, mandatory field validation,
character limits, and various input types. The component exposes validation methods through refs
and automatically sanitizes input values. Features include help text, tooltips, disabled/readonly
states, and responsive error display that adapts to form submission state.

**Props:**

- **name** (`string`): Unique identifier and control ID for the input field (required)
- **type** (`string`): HTML input type attribute. Allows inputs such as: {'text', 'password'} (optional, default_value: 'text')
- **size** (`'sm' | 'lg'`): Bootstrap size variant for the input (optional)
- **placeholder** (`string`): Placeholder text displayed when input is empty (optional)
- **errorMessage** (`string`): Default error message shown for validation failures (optional, default_value: 'Please enter a valid value')
- **label** (`string`): Label text displayed above the input field (optional)
- **value** (`string`): Current value of the input field (required)
- **maxLength** (`number`): Maximum number of characters allowed (optional)
- **required** (`boolean`): Whether the field is required for form submission (optional, default_value: true)
- **strictValidation** (`boolean`): Indicates that all form errors should be shown and updated on every keypress (optional)
- **disabled** (`boolean`): Whether the input is disabled and non-interactive (optional, default_value: false)
- **readOnly** (`boolean`): Whether the input is read-only (optional, default_value: false)
- **helpText** (`string`): Additional help text displayed below the input (optional)
- **tooltip** (`string`): Tooltip text for the label (optional)
- **className** (`string`): Additional CSS classes to apply to the form group (optional)
- **setValue** (`function`): Callback function to update the input value (required)
- **customValidation** (`function`): Custom validation function returning isValid and optional error message in the format: {isValid: false, message: 'Incorrect email'} (optional)
- **onChange** (`function`): Optional callback function triggered whenever the input value changes. It is called in addition to the setValue function. Example: onChange={(newValue) => console.info('Input changed to:', newValue)} (optional)
- **onBlur** (`function`): Optional callback function triggered when the input field loses focus (blur event). This function is called after the component's internal blur handling. Example: onBlur={() => saveDraftData()} (optional)
- **unmaskValue** (`boolean`): If true, the onChange and setValue callbacks will receive the unmasked value instead of the formatted value when using an input mask (optional, default_value: false)

---

### FormTextarea

**Description:** FormTextarea - A textarea component with validation, labeling, and error handling

This component provides a textarea input solution with built-in validation, error messaging,
and accessibility features. It supports custom validation functions, mandatory field validation,
character limits, and character count display. The component exposes validation methods through refs
and automatically sanitizes input values. Features include help text, tooltips, disabled/readonly
states, and responsive error display that adapts to form submission state.

**Props:**

- **name** (`string`): Unique identifier and control ID for the textarea field (required)
- **size** (`'sm' | 'lg'`): Bootstrap size variant for the textarea (optional)
- **rows** (`number`): Number of visible text lines for the textarea (optional, default_value: 3)
- **placeholder** (`string`): Placeholder text displayed when textarea is empty (optional)
- **errorMessage** (`string`): Default error message shown for validation failures (optional, default_value: 'Please enter a valid value')
- **label** (`string`): Label text displayed above the textarea field (optional)
- **value** (`string`): Current value of the textarea field (required)
- **maxLength** (`number`): Maximum number of characters allowed (optional)
- **resizable** (`boolean`): Whether the textarea can be resized vertically (optional, default_value: true)
- **required** (`boolean`): Whether the field is required for form submission (optional, default_value: true)
- **strictValidation** (`boolean`): Indicates that all form errors should be shown and updated on every keypress (optional)
- **disabled** (`boolean`): Whether the textarea is disabled and non-interactive (optional, default_value: false)
- **readOnly** (`boolean`): Whether the textarea is read-only (optional, default_value: false)
- **helpText** (`string`): Additional help text displayed below the textarea (optional)
- **tooltip** (`string`): Tooltip text for the label (optional)
- **className** (`string`): Additional CSS classes to apply to the form group (optional)
- **setValue** (`function`): Callback function to update the textarea value (required)
- **customValidation** (`function`): Custom validation function returning isValid and optional error message in the format: {isValid: false, message: 'Textarea content is invalid'} (optional)
- **onChange** (`function`): Optional callback function triggered whenever the textarea value changes. It is called in addition to the setValue function. Example: onChange={(newValue) => console.info('Textarea changed to:', newValue)} (optional)
- **onBlur** (`function`): Optional callback function triggered when the textarea field loses focus (blur event). This function is called after the component's internal blur handling. Example: onBlur={() => saveAsDraft()} (optional)

---

### TimePicker

**Description:** TimePicker - A time input component with dropdown selection

This component provides a flexible way to input and select times in 12-hour format
(AM/PM). It combines a text input for manual entry with a dropdown menu containing
hourly time options. The component validates time format and provides visual feedback
for invalid entries. Ideal for scheduling, appointment booking, or any form requiring
time input.

**Props:**

- **name** (`string`): Unique identifier for the input field (required)
- **value** (`string`): Current time value in "HH:MM AM/PM" format (required)
- **label** (`string`): Label text displayed above the input (optional)
- **tooltip** (`string`): Tooltip text for additional guidance (optional)
- **onTimeChanged** (`function`): Callback function triggered when time changes (optional)
- **placeholder** (`string`): Placeholder text when input is empty (optional, default_value: '')
- **size** (`string`): Input size variant (optional)
- **disabled** (`boolean`): Whether the input is disabled (optional, default_value: false)
- **helpText** (`string`): Help text displayed below the input (optional)
- **customValidationFunction** (`function`): Custom validation function for time values (optional)
- **readOnly** (`boolean`): Whether the input is read-only (optional, default_value: false)

---

### FormProviderProps

**Description:** FormProviderProps - Props interface for the FormProvider component

**Props:**

- **children** (`React.ReactNode`): Child components that will have access to form context
- **initialValues** (`T`): Initial values for the form fields
- **onSubmit** (`Function`): Optional callback function called when form is submitted (optional)
- **debug** (`boolean`): Enable debug logging for form state changes (optional, default_value: false)

---

### FormProvider

**Description:** FormProvider - Provider component that manages form state and provides context to child components

This component creates a form context that manages form data, field updates, and form reset
functionality. It wraps child components with FormContext.Provider, enabling them to access
and manipulate form state without prop drilling. Supports optional debug logging to monitor
form state changes during development.

**Props:**

- **children** (`React.ReactNode`): Child components that will have access to form context (required)
- **initialValues** (`T`): Initial values for the form fields (required)
- **onSubmit** (`Function`): Optional callback function called when form is submitted (optional)
- **debug** (`boolean`): Enable debug logging for form state changes (optional, default_value: false)

---

### FormContextValue

**Description:** FormContextValue - Interface defining the structure of form context values

This interface provides type safety for form context operations, ensuring
consistent access to form data and manipulation methods across components.
It supports generic typing to maintain type safety for specific form schemas.

**Parameters:**

- **fieldValues** (`FormData<T>`): Current form data values
- **loadFieldValue** (`Function`): Function to load a specific field value without setting dirty flag
- **setFieldValue** (`Function`): Function to update a specific field value (sets dirty flag)
- **resetForm** (`Function`): Function to reset form to initial values
- **isDirty** (`boolean`): Flag indicating if any field has been modified (set to true on any field change)
- **resetDirtyFlag** (`Function`): Function to clear the dirty flag (e.g., after successful save)

---

### FormContext

**Description:** FormContext - React context for managing form state across components

This context provides a centralized way to share form state and operations
throughout the component tree. It enables child components to access and
modify form data without prop drilling. The context uses generic typing
to maintain type safety for different form schemas.

---

### FormData

**Description:** FormData - Type alias for simplified form data structure

This type provides a simplified approach to form data management by directly
storing field values without additional wrapper structures. It maintains type
safety through generic constraints while keeping the data structure flat and
easy to work with. The generic parameter ensures that form data conforms to
the expected shape while remaining flexible for different form schemas.

---

