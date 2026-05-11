# Utilities

Full API documentation for **Utilities** components from `livingston-npm-components`.

---

### resetSearchText

**Description:** Reset the search text to an empty string

---

### getSearchText

**Description:** Get the current search text

---

### setItemBusy

**Description:** Set or clear a busy/loading indicator on the item with the given path

---

### calcSizeClass

**Description:** calcSizeClass - Generates CSS class names with size modifiers for Bootstrap components

This utility function creates size-specific CSS class names by combining a base prefix
with size suffixes. It supports both enum and string size values, automatically mapping
them to standard Bootstrap size classes (lg, sm). Useful for dynamically applying size
variants to form controls, buttons, and other components that support multiple sizes.

---

### ExcludedCountries

**Description:** ExcludedCountries - Array of country codes that should be excluded from country selection lists

This constant contains ISO country codes for territories and regions that should not
appear in standard country selection dropdowns. Includes territories like Antarctica (AQ),
disputed regions, and other non-standard political entities that typically aren't
needed for most business applications.

---

### getCountryList

**Description:** getCountryList - Retrieves and formats a complete list of countries with localization and caching support

This function fetches country data from the provided API function and applies intelligent
caching, formatting, and filtering. It handles preferred countries (shown first), excludes
unwanted territories, formats country names properly, and optionally includes dialing codes.
Results are cached globally to improve performance across multiple calls with the same parameters.

---

### startOfDay

**Description:** startOfDay - Sets a date to the start of day (00:00:00.000)

---

### endOfDay

**Description:** endOfDay - Sets a date to the end of day (23:59:59.999)

---

### calculateStartDate

**Description:** calculateStartDate - Calculates the start date for a predefined date range type

---

### calculateEndDate

**Description:** calculateEndDate - Calculates the end date for a predefined date range type

---

### calculateFilterDateRange

**Description:** calculateFilterDateRange - Calculates both start and end dates for a predefined date range type

---

### formatDateForFilter

**Description:** formatDateForFilter - Formats a date for filter display in MM/DD/YYYY format

---

### formatDateTimeInUTC

**Description:** formatDateTimeInUTC - Formats a date and time in UTC timezone as DD/MM/YYYY HH:MM:SS

---

### formatRelativeDateTime

**Description:** formatRelativeDateTime - Formats a date as a relative time string with localization support

Provides human-readable relative date formatting like "Today, 9pm", "Yesterday, 8:30am",
or "Dec 15" for dates within context. Supports multiple locales and handles future dates.

---

### formatDateTime

**Description:** formatDateTime - Formats a date value as a localized date-time string

Converts string or Date input to a formatted date-time string in MM/DD/YYYY HH:MM AM/PM format.
Handles invalid dates gracefully by returning an error message.

---

### formatDate

**Description:** formatDate - Formats a date value as a localized date string

Converts string or Date input to a formatted date string in MM/DD/YYYY format.
Handles invalid dates gracefully by returning an error message.

---

### toLocalDateISOString

**Description:** Converts a local calendar date into a UTC ISO string without shifting the day.

{
  purpose: "Preserve the user's selected calendar date when sending a date-only value to an API",
  input: "A JavaScript Date created in the user's local timezone, usually from a date picker",
  output: "An ISO string normalized to 00:00:00.000Z for the same calendar day",
  useCase: "Date-only fields such as bond effective dates, birthdays, contract start dates",
  important: "This avoids timezone drift caused by Date.prototype.toISOString() on local midnight"
}

Why this exists:
A date picker usually returns a local Date such as `2026-03-20 00:00` in the user's timezone.
Calling `toISOString()` on that value converts it to UTC and can move the date backward or forward.
This helper extracts the local year/month/day and builds a UTC date-only ISO string explicitly.

---

### fromUTCDateString

**Description:** Converts a UTC date-only value from an API into a local Date for the same calendar day.

{
  purpose: "Read a UTC-normalized date-only API value without changing the visible day in the browser",
  input: "A Date or date string representing a UTC date-only value such as 2026-03-20T00:00:00.000Z",
  output: "A local JavaScript Date constructed from the UTC year/month/day components",
  useCase: "Populate date pickers and review screens from API responses",
  important: "This avoids showing the previous day in negative-offset timezones like US Pacific"
}

Why this exists:
`new Date('2026-03-20T00:00:00.000Z')` represents a UTC instant.
In a timezone behind UTC, displaying that Date directly can show March 19 locally.
This helper reads the UTC calendar components and rebuilds a local Date with the same day.

---

### formatFileSize

**Description:** formatFileSize - Converts byte size numbers into human-readable file size strings

This utility function takes a file size in bytes and converts it to a more readable
format using appropriate units (Bytes, KB, MB, GB, TB). It automatically selects
the most suitable unit based on the size magnitude and formats the result with
up to 2 decimal places for clarity. Perfect for displaying file sizes in user
interfaces, upload components, and file management systems.

---

### useDebounce

**Description:** useDebounce - React hook that delays updating a value until after a specified wait period

This hook prevents excessive API calls, search queries, or other expensive operations
by waiting for user input to stabilize before returning the updated value. It's
particularly useful for search inputs, form validation, and auto-save functionality
where you want to wait for the user to finish typing before triggering an action.

---

### useURLSearchParams

**Description:** useURLSearchParams - React hook for accessing URL search parameters from the current page

This hook provides a simple interface to read URL query parameters from the browser's
current location. It creates a URLSearchParams instance from the current window location
and exposes a getParam function to retrieve specific parameter values. Useful for
reading URL-based state, handling deep links, and maintaining bookmarkable URLs.

---

### ScreenWidthXXLarge

**Description:** Screen width breakpoints constants for responsive design based on Bootstrap standards
These constants define the minimum pixel widths for different device categories

---

### debounce

**Description:** debounce - Utility function that delays execution of a function until after wait time has elapsed

---

### useWindowSize

**Description:** useWindowSize - React hook that tracks window dimensions and device breakpoints in real-time

This hook provides responsive window size information including width, height, and boolean
flags for different device categories (mobile, tablet, desktop, extra large). It automatically
updates when the window is resized, using debouncing to optimize performance. Perfect for
implementing responsive layouts, conditional rendering based on screen size, and adaptive
user interfaces that need to respond to viewport changes.

---

### sanitizeHtml

**Description:** Sanitizes user-provided or external HTML content using DOMPurify.

---

### translate

**Description:** translate - Retrieves localized text strings based on translation keys and locale preferences

This function provides internationalization support by looking up translation keys in
the translation data and returning the appropriate localized string. It supports
fallback logic: first trying the exact locale, then the base language, and finally
returning the original key if no translation is found. Handles complex locales with
country codes (e.g., 'en-US', 'fr-CA') by extracting the base language.

---

### nameValidation

**Description:** nameValidation - Validates if a string contains only valid name characters and patterns

This function validates names using a comprehensive regex pattern that supports
international characters, accents, and common name punctuation. It allows letters
from multiple languages including accented characters, apostrophes, hyphens, and
spaces. Rejects empty strings, whitespace-only strings, and invalid characters.
Perfect for form validation where user names need to support international formats.

---

### formatPlaceName

**Description:** formatPlaceName - Formats place names with proper title case while preserving common articles

This function converts place names to proper title case formatting, capitalizing the first
letter of each word while keeping certain common articles and prepositions (and, the, of)
in lowercase when they appear in the middle of the name. The first word is always capitalized
regardless of whether it's an article. Handles hyphenated words by capitalizing each part.
If the name is already properly formatted, it returns the original string unchanged.
Useful for formatting country, city, and region names for consistent display in user interfaces.

---

### formatNumber

**Description:** formatNumber - Formats a number with locale-specific thousand separators and decimal places

This function converts numbers to a human-readable string format using US locale conventions.
It automatically adds comma separators for thousands and limits decimal places to a maximum
of 2 digits. Perfect for displaying numeric data in tables, reports, and user interfaces
where consistent number formatting is important.

---

### formatCurrency

**Description:** formatCurrency - Formats a number as currency with the specified currency symbol

This function converts numeric values to properly formatted currency strings using
standard Intl.NumberFormat with US locale. It includes the appropriate currency symbol,
decimal places, and formatting conventions for the specified currency. Ideal for
displaying prices, costs, and financial amounts in user interfaces.

---

### formatAmount

**Description:** formatAmount - Advanced currency formatter with language and cent precision options

This function provides sophisticated currency formatting with locale-specific formatting
and configurable decimal precision. It supports multiple languages (English/French for
Canada) and allows toggling between whole currency units and precise cent display.
Perfect for international applications that need to display amounts in different
languages and precision levels based on context.

---

### getProvinceList

**Description:** getProvinceList - Retrieves and formats a list of provinces/states for a specific country

This function fetches province data for a given country and language, then formats
the province names using proper title case. It provides localized province names
based on the specified language and ensures consistent formatting across all entries.
Essential for country/province selection components where users need to choose
their state or province after selecting a country.

---

### sanitizeText

**Description:** Sanitizes text input by removing potentially harmful or unwanted characters
while preserving allowed character sets including Latin, accented characters,
currency symbols, and mathematical operators.

---

