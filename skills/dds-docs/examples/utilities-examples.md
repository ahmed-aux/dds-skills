# Utilities - Code Examples

This file contains code examples for utilities components from the Livingston Design System.

## Use Debounce

**Description:** React hook that delays updating a value until after a specified wait period. It is used to prevent excessive API calls, search queries, or other expensive operations by waiting for user input to stabilize before returning the updated value. It's particularly useful for search inputs, form validation, and auto-save functionality where you want to wait for the user to finish typing before triggering an action

**Usages:** 'npm utility'

**File:** `src/ds-layout-components/foundations/utilities/hooks/UseDebounceExample.tsx`

```tsx
import { useDebounce, FormTextInput } from 'livingston-npm-components';
import { useState } from 'react';

const UseDebounceExample = () => {
    const [input, setInput] = useState<string>('');
    const debouncedInput = useDebounce(input, 700);

    return (
        <div className='d-flex justify-content-between '>
            <FormTextInput value={input} setValue={setInput} label='Enter text' name='Input' />

            <FormTextInput value={debouncedInput} setValue={() => {}} label='Output' readOnly={true} name='Input' />
        </div>
    );
};

export default UseDebounceExample;

```

---

## Use Kendo Responsive Width

**Description:** This hook automatically adjusts Kendo Grid column widths based on available space and window size changes. It handles minimum width constraints, fixed width columns, and distributes remaining space among flexible columns. Supports checkbox columns, scrollbar considerations, and multiple grids on the same page. Particularly useful for creating responsive data grids that adapt to different screen sizes while maintaining usability.

**Usages:** 'npm utility'

**File:** `src/ds-layout-components/foundations/utilities/hooks/UseKendoResponsiveWidthExample.tsx`

```tsx
import { NavLink } from 'react-router';

const UseKendoResponsiveWidthExample = () => {
    return (
        <div className='d-flex justify-content-between '>
            <h5>
                To view an example of this hook in action, visit the{' '}
                <NavLink to='/foundations/components/cards#foundations_components_cards_Card_with_Kendo_table_(example_1)'>
                    Card with Kendo table
                </NavLink>{' '}
                example
            </h5>
        </div>
    );
};

export default UseKendoResponsiveWidthExample;

```

---

## Use Window Size

**Description:** This hook provides responsive window size information including width, height, and boolean flags for different device categories (mobile, tablet, desktop, extra large). It automatically updates when the window is resized, using debouncing to optimize performance. Perfect for implementing responsive layouts, conditional rendering based on screen size, and adaptive user interfaces that need to respond to viewport changes.

**Usages:** 'npm utility'

**File:** `src/ds-layout-components/foundations/utilities/hooks/UseWindowSizeExample.tsx`

```tsx
import { FormTextInput, useWindowSize } from 'livingston-npm-components';

const UseWindowSizeExample = () => {
    const { width, height, isMobile, isDesktop, isXSmall, isSmall, isMedium, isLarge, isXLarge, isXXLarge } = useWindowSize();
    return (
        <div className='d-flex flex-column'>
            <h5>Resize the window to see the changes reflect below</h5>

            <div className='row'>
                <div className='col-6'>
                    <FormTextInput value={width.toString()} setValue={() => {}} label='Width' readOnly={true} name='Input' />
                </div>
                <div className='col-6'>
                    <FormTextInput value={height.toString()} setValue={() => {}} label='Height' readOnly={true} name='Input' />
                </div>
            </div>

            <div className='row mt-2'>
                <div className='col-6'>
                    <FormTextInput value={isDesktop.toString()} setValue={() => {}} label='isDesktop' readOnly={true} name='Input' />
                </div>
                <div className='col-6 '>
                    <FormTextInput value={isMobile.toString()} setValue={() => {}} label='isMobile' readOnly={true} name='Input' />
                </div>
            </div>

            <h5 className='mt-2'>Breakpoint sizes</h5>

            <div className='row'>
                <div className='col-6'>
                    <FormTextInput value={isXSmall.toString()} setValue={() => {}} label='isXSmall' readOnly={true} name='Input' />
                </div>
                <div className='col-6'>
                    <FormTextInput value={isSmall.toString()} setValue={() => {}} label='isSmall' readOnly={true} name='Input' />
                </div>
                <div className='col-6 mt-2'>
                    <FormTextInput value={isMedium.toString()} setValue={() => {}} label='isMedium' readOnly={true} name='Input' />
                </div>
                <div className='col-6 mt-2'>
                    <FormTextInput value={isLarge.toString()} setValue={() => {}} label='isLarge' readOnly={true} name='Input' />
                </div>
                <div className='col-6 mt-2'>
                    <FormTextInput value={isXLarge.toString()} setValue={() => {}} label='isXLarge' readOnly={true} name='Input' />
                </div>
                <div className='col-6 mt-2'>
                    <FormTextInput value={isXXLarge.toString()} setValue={() => {}} label='isXXLarge' readOnly={true} name='Input' />
                </div>
            </div>
        </div>
    );
};

export default UseWindowSizeExample;

```

---

## Calculate end date

**Description:** Calculates the end date for a predefined date range type.

**Usages:** 'npm utility'

**Search Terms:** 'utility'

**File:** `src/ds-layout-components/foundations/utilities/date/CalculateEndDateExample.tsx`

```tsx
import { calculateEndDate, FormSelect, FormTextInput, PredefinedDateRangeType } from 'livingston-npm-components';
import { useState } from 'react';

const CalculateEndDateExample = () => {
    const [dateRange, setDateRange] = useState<PredefinedDateRangeType>();

    return (
        <div className='d-flex justify-content-between '>
            <FormSelect
                label='Date range'
                name='selectExample'
                placeholder='Select date range'
                required={false}
                value={dateRange}
                setValue={setDateRange}
                options={[
                    { value: 'yesterday', label: 'yesterday' },
                    { value: 'today', label: 'today' },
                    { value: 'tomorrow', label: 'tomorrow' },
                    { value: 'next-7-days', label: 'next-7-days' },
                    { value: 'next-30-days', label: 'next-30-days' },
                    { value: 'this-month', label: 'this-month' },
                    { value: 'last-7-days', label: 'last-7-days' },
                    { value: 'last-30-days', label: 'last-30-days' },
                    { value: 'last-60-days', label: 'last-60-days' },
                    { value: 'last-90-days', label: 'last-90-days' },
                    { value: 'this-year', label: 'this-year' },
                    { value: 'last-year', label: 'last-year' },
                    { value: 'all-time', label: 'all-time' },
                    { value: 'custom-date', label: 'custom-date' },
                    { value: 'custom-date-range', label: 'custom-date-range' }
                ]}
            />
            <FormTextInput
                value={calculateEndDate(dateRange ?? 'today')?.toString() ?? ''}
                setValue={() => {}}
                label='Output'
                readOnly={true}
                name='Input'
            />
        </div>
    );
};

export default CalculateEndDateExample;

```

---

## Calculate filter date range

**Description:** Calculates both start and end dates for a predefined date range type.

**Usages:** 'npm utility'

**Search Terms:** 'utility'

**File:** `src/ds-layout-components/foundations/utilities/date/CalculateFilterDateRangeExample.tsx`

```tsx
import { calculateFilterDateRange, FormSelect, FormTextInput, PredefinedDateRangeType } from 'livingston-npm-components';
import { useState } from 'react';

const CalculateFilterDateRangeExample = () => {
    const [dateRange, setDateRange] = useState<PredefinedDateRangeType>();

    return (
        <div className='d-flex justify-content-between '>
            <FormSelect
                label='Date range'
                name='selectExample'
                placeholder='Select date range'
                required={false}
                value={dateRange}
                setValue={setDateRange}
                options={[
                    { value: 'yesterday', label: 'yesterday' },
                    { value: 'today', label: 'today' },
                    { value: 'tomorrow', label: 'tomorrow' },
                    { value: 'next-7-days', label: 'next-7-days' },
                    { value: 'next-30-days', label: 'next-30-days' },
                    { value: 'this-month', label: 'this-month' },
                    { value: 'last-7-days', label: 'last-7-days' },
                    { value: 'last-30-days', label: 'last-30-days' },
                    { value: 'last-60-days', label: 'last-60-days' },
                    { value: 'last-90-days', label: 'last-90-days' },
                    { value: 'this-year', label: 'this-year' },
                    { value: 'last-year', label: 'last-year' },
                    { value: 'all-time', label: 'all-time' },
                    { value: 'custom-date', label: 'custom-date' },
                    { value: 'custom-date-range', label: 'custom-date-range' }
                ]}
            />
            <div className='d-flex flex-column'>
                <FormTextInput
                    value={(() => {
                        const range = calculateFilterDateRange(dateRange ?? 'today');
                        return range ? `Start: ${range.startDate?.toLocaleDateString() ?? ''}` : '';
                    })()}
                    setValue={() => {}}
                    label='Output'
                    readOnly={true}
                    name='Input'
                />
                <FormTextInput
                    value={(() => {
                        const range = calculateFilterDateRange(dateRange ?? 'today');
                        return range ? `End: ${range.endDate?.toLocaleDateString() ?? ''}` : '';
                    })()}
                    setValue={() => {}}
                    readOnly={true}
                    name='Input'
                />
            </div>
        </div>
    );
};

export default CalculateFilterDateRangeExample;

```

---

## Calculate start date

**Description:** Calculates the start date for a predefined date range type.

**Usages:** 'npm utility'

**Search Terms:** 'utility'

**File:** `src/ds-layout-components/foundations/utilities/date/CalculateStartDateExample.tsx`

```tsx
import { calculateStartDate, FormSelect, FormTextInput, PredefinedDateRangeType } from 'livingston-npm-components';
import { useState } from 'react';

const CalculateStartDateExample = () => {
    const [dateRange, setDateRange] = useState<PredefinedDateRangeType>();

    return (
        <div className='d-flex justify-content-between '>
            <FormSelect
                label='Date range'
                name='selectExample'
                placeholder='Select date range'
                required={false}
                value={dateRange}
                setValue={setDateRange}
                options={[
                    { value: 'yesterday', label: 'yesterday' },
                    { value: 'today', label: 'today' },
                    { value: 'tomorrow', label: 'tomorrow' },
                    { value: 'next-7-days', label: 'next-7-days' },
                    { value: 'next-30-days', label: 'next-30-days' },
                    { value: 'this-month', label: 'this-month' },
                    { value: 'last-7-days', label: 'last-7-days' },
                    { value: 'last-30-days', label: 'last-30-days' },
                    { value: 'last-60-days', label: 'last-60-days' },
                    { value: 'last-90-days', label: 'last-90-days' },
                    { value: 'this-year', label: 'this-year' },
                    { value: 'last-year', label: 'last-year' },
                    { value: 'all-time', label: 'all-time' },
                    { value: 'custom-date', label: 'custom-date' },
                    { value: 'custom-date-range', label: 'custom-date-range' }
                ]}
            />
            <FormTextInput
                value={calculateStartDate(dateRange ?? 'today')?.toString() ?? ''}
                setValue={() => {}}
                label='Output'
                readOnly={true}
                name='Input'
            />
        </div>
    );
};

export default CalculateStartDateExample;

```

---

## Format date

**Description:** Converts string or Date input to a formatted date string in MM/DD/YYYY format.

**Usages:** 'npm utility'

**Search Terms:** 'utility'

**File:** `src/ds-layout-components/foundations/utilities/date/FormatDateExample.tsx`

```tsx
import { formatDate, FormSelect, FormTextInput } from 'livingston-npm-components';
import { useState } from 'react';

const FormatDateExample = () => {
    const [date, setDate] = useState<string>();

    return (
        <div className='d-flex justify-content-between '>
            <FormSelect
                label='Date'
                name='selectExample'
                placeholder='Select a date'
                required={false}
                value={date}
                setValue={setDate}
                options={[
                    { value: '2027-11-03', label: '2027-11-03' },
                    { value: '2023-12-15T14:30:00', label: '2023-12-15T14:30:00' },
                    { value: '2048', label: '2048' }
                ]}
            />
            <FormTextInput value={formatDate(date ?? '')} setValue={() => {}} label='Output' readOnly={true} name='Input' />
        </div>
    );
};

export default FormatDateExample;

```

---

## Format date for filter

**Description:** Formats a date for filter display in MM/DD/YYYY format.

**Usages:** 'npm utility'

**Search Terms:** 'utility'

**File:** `src/ds-layout-components/foundations/utilities/date/FormatDateForFilterExample.tsx`

```tsx
import { formatDateForFilter, FormSelect, FormTextInput } from 'livingston-npm-components';
import { useState } from 'react';

const FormatDateForFilterExample = () => {
    const [date, setDate] = useState<string>('000');

    return (
        <div className='d-flex justify-content-between '>
            <FormSelect
                label='Date'
                name='selectExample'
                placeholder='Select a date'
                required={false}
                value={date}
                setValue={setDate}
                options={[
                    { value: '2027-11-03', label: '2027-11-03' },
                    { value: '2023-12-15T14:30:00', label: '2023-12-15T14:30:00' },
                    { value: '2048', label: '2048' }
                ]}
            />
            <FormTextInput value={formatDateForFilter(new Date(date))} setValue={() => {}} label='Output' readOnly={true} name='Input' />
        </div>
    );
};

export default FormatDateForFilterExample;

```

---

## Format DateTime

**Description:** Converts string or Date input to a formatted date-time string in MM/DD/YYYY HH:MM AM/PM format.

**Usages:** 'npm utility'

**Search Terms:** 'utility'

**File:** `src/ds-layout-components/foundations/utilities/date/FormatDateTimeExample.tsx`

```tsx
import { formatDateTime, FormSelect, FormTextInput } from 'livingston-npm-components';
import { useState } from 'react';

const FormatDateTimeExample = () => {
    const [date, setDate] = useState<string>();

    return (
        <div className='d-flex justify-content-between '>
            <FormSelect
                label='Date'
                name='selectExample'
                placeholder='Select a date'
                required={false}
                value={date}
                setValue={setDate}
                options={[
                    { value: '2027-11-03', label: '2027-11-03' },
                    { value: '2023-12-15T14:30:00', label: '2023-12-15T14:30:00' },
                    { value: '2048', label: '2048' }
                ]}
            />
            <FormTextInput value={formatDateTime(date ?? '')} setValue={() => {}} label='Output' readOnly={true} name='Input' />
        </div>
    );
};

export default FormatDateTimeExample;

```

---

## Format DateTime in UTC

**Description:** Formats a date and time in UTC timezone as DD/MM/YYYY HH:MM:SS.

**Usages:** 'npm utility'

**Search Terms:** 'utility'

**File:** `src/ds-layout-components/foundations/utilities/date/FormatDateTimeInUTCExample.tsx`

```tsx
import { formatDateTimeInUTC, FormSelect, FormTextInput } from 'livingston-npm-components';
import { useState } from 'react';

const FormatDateTimeInUTCExample = () => {
    const [date, setDate] = useState<string>('2023-12-15 00:00:00');

    return (
        <div className='d-flex justify-content-between '>
            <FormSelect
                label='Date'
                name='selectExample'
                placeholder='Select a date'
                required={false}
                value={date}
                setValue={setDate}
                options={[
                    { value: '2027-11-03', label: '2027-11-03' },
                    { value: '2023-12-15T14:30:00', label: '2023-12-15T14:30:00' },
                    { value: '2048', label: '2048' }
                ]}
            />
            <FormTextInput value={formatDateTimeInUTC(new Date(date))} setValue={() => {}} label='Output' readOnly={true} name='Input' />
        </div>
    );
};

export default FormatDateTimeInUTCExample;

```

---

## Format relative DateTime

**Description:**  Formats a date as a relative time string with localization support, providing human-readable relative date formatting such as "Today, 9pm

**Usages:** 'npm utility'

**Search Terms:** 'utility'

**File:** `src/ds-layout-components/foundations/utilities/date/FormatRelativeDateTimeExample.tsx`

```tsx
import { formatRelativeDateTime, FormSelect, FormTextInput } from 'livingston-npm-components';
import { useState } from 'react';

const FormatRelativeDateTimeExample = () => {
    const [date, setDate] = useState<string>('000');
    const [locale, setLocale] = useState<'en' | 'fr' | 'es'>();

    return (
        <div className='d-flex justify-content-between '>
            <div className='d-flex flex-column'>
                <FormSelect
                    label='Date'
                    name='selectExample'
                    placeholder='Select an date'
                    required={false}
                    value={date}
                    setValue={setDate}
                    options={[
                        { value: '2027-11-03', label: '2027-11-03' },
                        { value: '2023-12-15T14:30:00', label: '2023-12-15T14:30:00' },
                        { value: '2048', label: '2048' }
                    ]}
                />
                <FormSelect
                    label='Locale'
                    className='mt-2'
                    name='selectExample'
                    placeholder='Select a locale'
                    required={false}
                    value={locale}
                    setValue={setLocale}
                    options={[
                        { value: 'en', label: 'English' },
                        { value: 'fr', label: 'French' },
                        { value: 'es', label: 'Spanish' }
                    ]}
                />
            </div>
            <FormTextInput
                value={formatRelativeDateTime(new Date(date), locale)}
                setValue={() => {}}
                label='Output'
                readOnly={true}
                name='Input'
            />
        </div>
    );
};

export default FormatRelativeDateTimeExample;

```

---

## Format amount

**Description:** Advanced currency formatter with language and cent precision options.

**Usages:** 'npm utility'

**File:** `src/ds-layout-components/foundations/utilities/number/FormatAmountExample.tsx`

```tsx
import { formatAmount, FormSelect, FormTextInput } from 'livingston-npm-components';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const FormatAmountExample = () => {
    const [language, setLanguage] = useState<string>('');
    const [currency, setCurrency] = useState<string>('USD');

    const [amount, setAmount] = useState<number>();

    const [checkbox1, setCheckbox1] = useState(false);
    return (
        <div className='d-flex justify-content-between '>
            <div className='d-flex flex-column'>
                <FormSelect
                    label='Language'
                    name='selectExample'
                    placeholder='Select a language'
                    required={false}
                    value={language}
                    setValue={setLanguage}
                    options={[
                        { value: 'en', label: 'English' },
                        { value: 'fr', label: 'French' },
                        { value: 'es', label: 'Spanish' }
                    ]}
                />
                <FormSelect
                    label='Currency'
                    className='mt-2'
                    name='selectExample'
                    placeholder='Select a currency'
                    required={false}
                    value={currency}
                    setValue={setCurrency}
                    options={[
                        { value: 'USD', label: 'USD' },
                        { value: 'CAD', label: 'CAD' }
                    ]}
                />
                <FormSelect
                    label='Amount'
                    className='mt-2'
                    name='selectExample'
                    placeholder='Select an amount'
                    required={false}
                    value={amount}
                    setValue={setAmount}
                    options={[
                        { value: 1234.56, label: '1234.56' },
                        { value: 999, label: '999' },
                        { value: 23.03, label: '23.03' }
                    ]}
                />

                <Form.Check
                    className='mt-3'
                    type='checkbox'
                    label='Show decimal place'
                    disabled={false}
                    checked={checkbox1}
                    onChange={(e) => setCheckbox1(e.target.checked)}
                />
            </div>
            <FormTextInput
                value={formatAmount(language, currency ?? 'USD', amount ?? 0, checkbox1)}
                setValue={() => {}}
                label='Output'
                readOnly={true}
                name='Input'
            />
        </div>
    );
};

export default FormatAmountExample;

```

---

## Format currency

**Description:** Formats a number as currency with the specified currency symbol.

**Usages:** 'npm utility'

**File:** `src/ds-layout-components/foundations/utilities/number/FormatCurrencyExample.tsx`

```tsx
import { FormTextInput, FormSelect, formatCurrency } from 'livingston-npm-components';
import { useState } from 'react';

const FormatCurrencyExample = () => {
    const [currency, setCurrency] = useState<string>('USD');
    const [amount, setAmount] = useState<number>();

    return (
        <div className='d-flex justify-content-between '>
            <div className='d-flex flex-column'>
                <FormSelect
                    label='Currency'
                    name='selectExample'
                    placeholder='Select a currency'
                    required={false}
                    value={currency}
                    setValue={setCurrency}
                    options={[
                        { value: 'USD', label: 'USD' },
                        { value: 'CAD', label: 'CAD' }
                    ]}
                />
                <FormSelect
                    label='Amount'
                    className='mt-2'
                    name='selectExample'
                    placeholder='Select an amount'
                    required={false}
                    value={amount}
                    setValue={setAmount}
                    options={[
                        { value: 1234.56, label: '1234.56' },
                        { value: 999, label: '999' },
                        { value: 23.03, label: '23.03' }
                    ]}
                />
            </div>
            <FormTextInput
                value={formatCurrency(amount ?? 0, currency ?? 'USD')}
                setValue={() => {}}
                label='Output'
                readOnly={true}
                name='Input'
            />
        </div>
    );
};

export default FormatCurrencyExample;

```

---

## Format number

**Description:** Formats a number with locale-specific thousand separators and decimal places.

**Usages:** 'npm utility'

**File:** `src/ds-layout-components/foundations/utilities/number/FormatNumberExample.tsx`

```tsx
import { formatNumber, FormSelect, FormTextInput } from 'livingston-npm-components';
import { useState } from 'react';

const FormatNumberExample = () => {
    const [amount, setAmount] = useState<number>();

    return (
        <div className='d-flex justify-content-between '>
            <FormSelect
                label='Amount'
                name='selectExample'
                placeholder='Select an amount'
                required={false}
                value={amount}
                setValue={setAmount}
                options={[
                    { value: 1234.56, label: '1234.56' },
                    { value: 999, label: '999' },
                    { value: 5274223.03, label: '5274223.03' }
                ]}
            />
            <FormTextInput value={formatNumber(amount ?? 0)} setValue={() => {}} label='Output' readOnly={true} name='Input' />
        </div>
    );
};

export default FormatNumberExample;

```

---

## Format file size

**Description:** Converts byte size numbers into human-readable file size strings.

**Usages:** 'npm utility'

**Search Terms:** 'utility'

**File:** `src/ds-layout-components/foundations/utilities/format-file-size/FormatFileSizeExample.tsx`

```tsx
import { formatFileSize, FormSelect, FormTextInput } from 'livingston-npm-components';
import { useState } from 'react';

const FormatFileSizeExample = () => {
    const [size, setSize] = useState<number>();

    return (
        <div className='d-flex justify-content-between '>
            <FormSelect
                label='File size (in bytes)'
                name='selectExample'
                placeholder='Select an amount'
                required={false}
                value={size}
                setValue={setSize}
                options={[
                    { value: 0, label: '0' },
                    { value: 1024, label: '1024' },
                    { value: 1536, label: '1536' },
                    { value: 1048576, label: '1048576' },
                    { value: 3516321554, label: '3516321554' }
                ]}
            />
            <FormTextInput value={formatFileSize(size ?? 0)} setValue={() => {}} label='Output' readOnly={true} name='Input' />
        </div>
    );
};

export default FormatFileSizeExample;

```

---

## Format place name

**Description:** Formats place names with proper title case while preserving common articles

**Usages:** 'npm utility'

**Search Terms:** 'utility'

**File:** `src/ds-layout-components/foundations/utilities/name-validation/FormatPlaceNameExample.tsx`

```tsx
import { useState } from 'react';
import { FormSelect, FormTextInput, formatPlaceName } from 'livingston-npm-components';
const FormatPlaceNameExample = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>('');

    return (
        <>
            <div className='d-flex justify-content-between '>
                <FormSelect
                    label='Country name'
                    name='selectExample'
                    placeholder='Select a country'
                    required={false}
                    value={selectedCountry}
                    setValue={setSelectedCountry}
                    options={[
                        { value: 'united states of america', label: 'united states of america' },
                        { value: 'republic and canton of geneva', label: 'republic and canton of geneva' }
                    ]}
                />
                <FormTextInput value={formatPlaceName(selectedCountry)} setValue={() => {}} label='Output' readOnly={true} name='Input' />
            </div>
        </>
    );
};

export default FormatPlaceNameExample;

```

---

## Name validation

**Description:** Validates if a string contains only valid name characters and patterns

**Usages:** 'npm utility'

**Search Terms:** 'utility'

**File:** `src/ds-layout-components/foundations/utilities/name-validation/NameValidationExample.tsx`

```tsx
import { FormSelect, FormTextInput, nameValidation } from 'livingston-npm-components';
import { useState } from 'react';

const NameValidationExample = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>('');

    return (
        <div className='d-flex justify-content-between '>
            <FormSelect
                label='Name'
                name='selectExample'
                placeholder='Select a name'
                required={false}
                value={selectedCountry}
                setValue={setSelectedCountry}
                options={[
                    { value: 'Cornèl Erasmus', label: 'Cornèl Erasmus' },
                    { value: 'John123', label: 'John123' },
                    { value: 'jason', label: 'jason' }
                ]}
            />
            <FormTextInput
                value={nameValidation(selectedCountry).toString()}
                setValue={() => {}}
                label='Output'
                readOnly={true}
                name='Input'
            />
        </div>
    );
};

export default NameValidationExample;

```

---

