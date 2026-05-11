# Forms - Code Examples

This file contains code examples for forms components from the Livingston Design System.

## Input

**Search Terms:** 'text', 'input', 'text input', 'field', 'UK Clearances'

**File:** `src/ds-layout-components/foundations/components/forms/text-input/TextInputExample.tsx`

```tsx
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FormTextInput } from 'livingston-npm-components';

function TextInputExample() {
    const [input, setInput] = useState('');
    const [otp, setOtp] = useState('');

    return (
        <Form>
            <FormTextInput
                value={input}
                setValue={setInput}
                name='Input'
                label='Input field with helper text'
                placeholder='Enter example'
                helpText='Helper text'
                tooltip='This is an input field with helper text'
            />

            <FormTextInput
                value={otp}
                setValue={setOtp}
                name='Input'
                label='Input field with maximum of 6 characters'
                placeholder='Enter example'
                maxLength={6}
            />
        </Form>
    );
}
export default TextInputExample;

```

---

## Email input

**Search Terms:** 'email', 'input', 'field', 'UK Clearances'

**File:** `src/ds-layout-components/foundations/components/forms/email-input/EmailInputExample.tsx`

```tsx
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FormEmailInput } from 'livingston-npm-components';

function EmailInputExample() {
    const [email, setEmail] = useState('');

    return (
        <Form>
            <FormEmailInput
                value={email}
                setValue={setEmail}
                name='emailinput'
                label='Email input label'
                placeholder='Enter email example'
            />
        </Form>
    );
}
export default EmailInputExample;

```

---

## Input group with ghost button

**Usages:** 'uk clearances'

**File:** `src/ds-layout-components/foundations/components/input-group/InputFieldWithDismissButton.tsx`

```tsx
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const InputFieldWithDismissButton = () => {
    return (
        <Form.Group controlId='input-field-with-dismiss-button' className='d-flex align-items-center'>
            <Form.Control type='text' className='rounded-1 me-2' />
            <Button variant='ghost-secondary'>
                <FontAwesomeIcon icon={faXmark} />
            </Button>
        </Form.Group>
    );
};
export default InputFieldWithDismissButton;

```

---

## Monetary input

**Usages:** 'uk clearances'

**Search Terms:** 'npm', 'currency', 'flag', 'UK Clearances'

### Source File 1: `src/ds-layout-components/foundations/components/forms/monetary-input/MonetaryInputExample.tsx`

```tsx
import { useState } from 'react';
import { CurrencyType, FormMonetaryInput } from 'livingston-npm-components';
import { fetchCountries } from '@/utils/countryApi';

function MonetaryInputExample() {
    const [cost, setCost] = useState('');
    const [currency, setCurrency] = useState<CurrencyType>({ currencyCode: 'USD', countryCode: 'US', countryName: 'UNITED STATES' });

    return (
        <section id='currency-selector'>
            <FormMonetaryInput
                label='Currency dropdown with input field'
                id='value-of-product'
                placeholder='Enter value of product'
                amount={cost}
                fetchCountries={fetchCountries}
                preferredCountries={['CA', 'CN']}
                defaultCountry={currency.countryCode}
                onChangeAmount={(value: string) => setCost(value)}
                onChangeCurrency={setCurrency}
                onBlur={() => console.log('onBlur')}
                className='mb-2'
                disabled={false}
                required={false}
                fieldValid={(result: boolean) => console.log('Field valid currency select?: ', result)}
            />
        </section>
    );
}

export default MonetaryInputExample;

```

### Source File 2: `src/utils/countryApi.ts`

```tsx
import { CountryDetail, ProvinceDetail } from 'livingston-npm-components';
import countryData from './country-data.json';

export const fetchCountries = () => {
    return new Promise<CountryDetail[]>((resolve) => {
        console.log('fake api to get country data');
        setTimeout(() => resolve(countryData), 3000);
    });
};

export const fetchProvinces = (countryCode: string): Promise<ProvinceDetail[]> => {
    return new Promise<ProvinceDetail[]>((resolve) => {
        const foundCountry = countryData.find((country) => country.CTRY_CODE === countryCode);
        console.log('fake api to get provinces api', countryCode, foundCountry);
        setTimeout(() => {
            resolve(
                foundCountry && foundCountry.STATES
                    ? foundCountry.STATES.map((state) => ({ name: state.STATE_NAME, code: state.STATE_CODE }))
                    : []
            );
        }, 3000);
    });
};

```

### Source File 3: `src/utils/country-data.json`

```tsx
[
    {
        "CTRY_CODE": "AF",
        "CTRY_NAME": "AFGHANISTAN",
        "LANG_CODE": "PS",
        "ISO_CURR_CODE": "AFN"
    },
    {
        "CTRY_CODE": "AX",
        "CTRY_NAME": "ALAND ISLANDS",
        "LANG_CODE": "FI",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AL",
        "CTRY_NAME": "ALBANIA",
        "LANG_CODE": "SQ",
        "ISO_CURR_CODE": "ALL"
    },
    {
        "CTRY_CODE": "CA",
        "CTRY_NAME": "CANADA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "CAD",
        "STATE_LABEL": "Province",
        "STATES": [
            {
                "STATE_CODE": "AB",
                "STATE_NAME": "ALBERTA"
            },
            {
                "STATE_CODE": "BC",
                "STATE_NAME": "BRITISH COLUMBIA"
            },
            {
                "STATE_CODE": "MB",
                "STATE_NAME": "MANITOBA"
            },
            {
                "STATE_CODE": "NB",
                "STATE_NAME": "NEW BRUNSWICK"
            },
            {
                "STATE_CODE": "NL",
                "STATE_NAME": "NEWFOUNDLAND AND LABRADOR"
            },
            {
                "STATE_CODE": "NT",
                "STATE_NAME": "NORTHWEST TERRITORIES"
            },
            {
                "STATE_CODE": "NS",
                "STATE_NAME": "NOVA SCOTIA"
            },
            {
                "STATE_CODE": "NU",
                "STATE_NAME": "NUNAVUT"
            },
            {
                "STATE_CODE": "ON",
                "STATE_NAME": "ONTARIO"
            },
            {
                "STATE_CODE": "PE",
                "STATE_NAME": "PRINCE EDWARD ISLAND"
            },
            {
                "STATE_CODE": "QC",
                "STATE_NAME": "QUEBEC"
            },
            {
                "STATE_CODE": "SK",
                "STATE_NAME": "SASKATCHEWAN"
            },
            {
                "STATE_CODE": "YT",
                "STATE_NAME": "YUKON TERRITORY"
            }
        ]
    },
    {
        "CTRY_CODE": "DZ",
        "CTRY_NAME": "ALGERIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "DZD"
    },
    {
        "CTRY_CODE": "AS",
        "CTRY_NAME": "AMERICAN SAMOA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "AD",
        "CTRY_NAME": "ANDORRA",
        "LANG_CODE": "CA",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AO",
        "CTRY_NAME": "ANGOLA",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "AOA"
    },
    {
        "CTRY_CODE": "AI",
        "CTRY_NAME": "ANGUILLA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "AQ",
        "CTRY_NAME": "ANTARCTICA"
    },
    {
        "CTRY_CODE": "AG",
        "CTRY_NAME": "ANTIGUA AND BARBUDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "AR",
        "CTRY_NAME": "ARGENTINA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "ARS"
    },
    {
        "CTRY_CODE": "AM",
        "CTRY_NAME": "ARMENIA",
        "LANG_CODE": "HY",
        "ISO_CURR_CODE": "AMD"
    },
    {
        "CTRY_CODE": "AW",
        "CTRY_NAME": "ARUBA",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "AWG"
    },
    {
        "CTRY_CODE": "AU",
        "CTRY_NAME": "AUSTRALIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "AT",
        "CTRY_NAME": "AUSTRIA",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AZ",
        "CTRY_NAME": "AZERBAIJAN",
        "LANG_CODE": "AZ",
        "ISO_CURR_CODE": "AZM"
    },
    {
        "CTRY_CODE": "BS",
        "CTRY_NAME": "BAHAMAS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BSD"
    },
    {
        "CTRY_CODE": "BH",
        "CTRY_NAME": "BAHRAIN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "BHD"
    },
    {
        "CTRY_CODE": "BD",
        "CTRY_NAME": "BANGLADESH",
        "LANG_CODE": "BN",
        "ISO_CURR_CODE": "BDT"
    },
    {
        "CTRY_CODE": "BB",
        "CTRY_NAME": "BARBADOS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BBD"
    },
    {
        "CTRY_CODE": "BY",
        "CTRY_NAME": "BELARUS",
        "LANG_CODE": "BE",
        "ISO_CURR_CODE": "BYR"
    },
    {
        "CTRY_CODE": "BE",
        "CTRY_NAME": "BELGIUM",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "BZ",
        "CTRY_NAME": "BELIZE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BZD"
    },
    {
        "CTRY_CODE": "BJ",
        "CTRY_NAME": "BENIN",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "BM",
        "CTRY_NAME": "BERMUDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BMD"
    },
    {
        "CTRY_CODE": "BT",
        "CTRY_NAME": "BHUTAN",
        "LANG_CODE": "DZ",
        "ISO_CURR_CODE": "BTN"
    },
    {
        "CTRY_CODE": "BO",
        "CTRY_NAME": "BOLIVIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "BOB"
    },
    {
        "CTRY_CODE": "BQ",
        "CTRY_NAME": "BONAIRE, SAINT EUSTATIUS AND SABA",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "BA",
        "CTRY_NAME": "BOSNIA AND HERZEGOVINA",
        "LANG_CODE": "BS",
        "ISO_CURR_CODE": "BAM"
    },
    {
        "CTRY_CODE": "BW",
        "CTRY_NAME": "BOTSWANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BWP"
    },
    {
        "CTRY_CODE": "BV",
        "CTRY_NAME": "BOUVET ISLAND",
        "LANG_CODE": "NO",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "BR",
        "CTRY_NAME": "BRAZIL",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "BRL"
    },
    {
        "CTRY_CODE": "IO",
        "CTRY_NAME": "BRITISH INDIAN OCEAN TERRITORY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "BN",
        "CTRY_NAME": "BRUNEI DARUSSALAM",
        "LANG_CODE": "MS",
        "ISO_CURR_CODE": "BND"
    },
    {
        "CTRY_CODE": "BG",
        "CTRY_NAME": "BULGARIA",
        "LANG_CODE": "BG",
        "ISO_CURR_CODE": "BGN"
    },
    {
        "CTRY_CODE": "BF",
        "CTRY_NAME": "BURKINA FASO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "BI",
        "CTRY_NAME": "BURUNDI",
        "LANG_CODE": "RN",
        "ISO_CURR_CODE": "BIF"
    },
    {
        "CTRY_CODE": "KH",
        "CTRY_NAME": "CAMBODIA",
        "LANG_CODE": "KM",
        "ISO_CURR_CODE": "KHR"
    },
    {
        "CTRY_CODE": "CM",
        "CTRY_NAME": "CAMEROON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CV",
        "CTRY_NAME": "CAPE VERDE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "CVE"
    },
    {
        "CTRY_CODE": "KY",
        "CTRY_NAME": "CAYMAN ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "KYD"
    },
    {
        "CTRY_CODE": "CF",
        "CTRY_NAME": "CENTRAL AFRICAN REPUBLIC",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "EA",
        "CTRY_NAME": "CEUTA AND MELILLA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "TD",
        "CTRY_NAME": "CHAD",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CL",
        "CTRY_NAME": "CHILE",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CLP"
    },
    {
        "CTRY_CODE": "CN",
        "CTRY_NAME": "CHINA",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "CNY"
    },
    {
        "CTRY_CODE": "CX",
        "CTRY_NAME": "CHRISTMAS ISLAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "CC",
        "CTRY_NAME": "COCOS (KEELING) ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "CO",
        "CTRY_NAME": "COLOMBIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "COP"
    },
    {
        "CTRY_CODE": "KM",
        "CTRY_NAME": "COMOROS",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "KMF"
    },
    {
        "CTRY_CODE": "CG",
        "CTRY_NAME": "CONGO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CD",
        "CTRY_NAME": "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "CDF"
    },
    {
        "CTRY_CODE": "CK",
        "CTRY_NAME": "COOK ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "CR",
        "CTRY_NAME": "COSTA RICA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CRC"
    },
    {
        "CTRY_CODE": "CI",
        "CTRY_NAME": "COTE D'IVOIRE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "QU",
        "CTRY_NAME": "COUNTRIES AND TERRITORIES NOT SPECIFIED"
    },
    {
        "CTRY_CODE": "HR",
        "CTRY_NAME": "CROATIA",
        "LANG_CODE": "HR",
        "ISO_CURR_CODE": "HRK"
    },
    {
        "CTRY_CODE": "CU",
        "CTRY_NAME": "CUBA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CUP"
    },
    {
        "CTRY_CODE": "CW",
        "CTRY_NAME": "CURACAO",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "ANG"
    },
    {
        "CTRY_CODE": "CY",
        "CTRY_NAME": "CYPRUS",
        "LANG_CODE": "EL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "CZ",
        "CTRY_NAME": "CZECH REPUBLIC",
        "LANG_CODE": "CS",
        "ISO_CURR_CODE": "CZK"
    },
    {
        "CTRY_CODE": "DK",
        "CTRY_NAME": "DENMARK",
        "LANG_CODE": "DA",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "DJ",
        "CTRY_NAME": "DJIBOUTI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "DJF"
    },
    {
        "CTRY_CODE": "DM",
        "CTRY_NAME": "DOMINICA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "DO",
        "CTRY_NAME": "DOMINICAN REPUBLIC",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "DOP"
    },
    {
        "CTRY_CODE": "EC",
        "CTRY_NAME": "ECUADOR",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "EG",
        "CTRY_NAME": "EGYPT",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "EGP"
    },
    {
        "CTRY_CODE": "SV",
        "CTRY_NAME": "EL SALVADOR",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SVC"
    },
    {
        "CTRY_CODE": "GQ",
        "CTRY_NAME": "EQUATORIAL GUINEA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "ER",
        "CTRY_NAME": "ERITREA",
        "LANG_CODE": "TI",
        "ISO_CURR_CODE": "ERN"
    },
    {
        "CTRY_CODE": "EE",
        "CTRY_NAME": "ESTONIA",
        "LANG_CODE": "ET",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "ET",
        "CTRY_NAME": "ETHIOPIA",
        "LANG_CODE": "AM",
        "ISO_CURR_CODE": "ETB"
    },
    {
        "CTRY_CODE": "FK",
        "CTRY_NAME": "FALKLAND ISLANDS (MALVINAS)",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "FKP"
    },
    {
        "CTRY_CODE": "FO",
        "CTRY_NAME": "FAROE ISLANDS",
        "LANG_CODE": "FO",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "FJ",
        "CTRY_NAME": "FIJI",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "FJD"
    },
    {
        "CTRY_CODE": "FI",
        "CTRY_NAME": "FINLAND",
        "LANG_CODE": "FI",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "FR",
        "CTRY_NAME": "FRANCE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GF",
        "CTRY_NAME": "FRENCH GUIANA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PF",
        "CTRY_NAME": "FRENCH POLYNESIA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "TF",
        "CTRY_NAME": "FRENCH SOUTHERN TERRITORIES",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GA",
        "CTRY_NAME": "GABON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "GM",
        "CTRY_NAME": "GAMBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GMD"
    },
    {
        "CTRY_CODE": "GZ",
        "CTRY_NAME": "GAZA STRIP",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "GE",
        "CTRY_NAME": "GEORGIA",
        "LANG_CODE": "KA",
        "ISO_CURR_CODE": "GEL"
    },
    {
        "CTRY_CODE": "DE",
        "CTRY_NAME": "GERMANY",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GH",
        "CTRY_NAME": "GHANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GHC"
    },
    {
        "CTRY_CODE": "GI",
        "CTRY_NAME": "GIBRALTAR",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GIP"
    },
    {
        "CTRY_CODE": "GR",
        "CTRY_NAME": "GREECE",
        "LANG_CODE": "EL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GL",
        "CTRY_NAME": "GREENLAND",
        "LANG_CODE": "KL",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "GD",
        "CTRY_NAME": "GRENADA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "GP",
        "CTRY_NAME": "GUADELOUPE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GU",
        "CTRY_NAME": "GUAM",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "GT",
        "CTRY_NAME": "GUATEMALA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "GTQ"
    },
    {
        "CTRY_CODE": "GG",
        "CTRY_NAME": "GUERNSEY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "GN",
        "CTRY_NAME": "GUINEA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "GNF"
    },
    {
        "CTRY_CODE": "GW",
        "CTRY_NAME": "GUINEA-BISSAU",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "GY",
        "CTRY_NAME": "GUYANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GYD"
    },
    {
        "CTRY_CODE": "HT",
        "CTRY_NAME": "HAITI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "HTG"
    },
    {
        "CTRY_CODE": "HM",
        "CTRY_NAME": "HEARD ISLAND AND MCDONALD ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "VA",
        "CTRY_NAME": "HOLY SEE (VATICAN CITY STATE)",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "HN",
        "CTRY_NAME": "HONDURAS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "HNL"
    },
    {
        "CTRY_CODE": "HK",
        "CTRY_NAME": "HONG KONG",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "HKD"
    },
    {
        "CTRY_CODE": "HU",
        "CTRY_NAME": "HUNGARY",
        "LANG_CODE": "HU",
        "ISO_CURR_CODE": "HUF"
    },
    {
        "CTRY_CODE": "IS",
        "CTRY_NAME": "ICELAND",
        "LANG_CODE": "IS",
        "ISO_CURR_CODE": "ISK"
    },
    {
        "CTRY_CODE": "IN",
        "CTRY_NAME": "INDIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "INR"
    },
    {
        "CTRY_CODE": "ID",
        "CTRY_NAME": "INDONESIA",
        "LANG_CODE": "ID",
        "ISO_CURR_CODE": "IDR"
    },
    {
        "CTRY_CODE": "IR",
        "CTRY_NAME": "IRAN, ISLAMIC REPUBLIC OF",
        "LANG_CODE": "FA",
        "ISO_CURR_CODE": "IRR"
    },
    {
        "CTRY_CODE": "IQ",
        "CTRY_NAME": "IRAQ",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "IQD"
    },
    {
        "CTRY_CODE": "IE",
        "CTRY_NAME": "IRELAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "IM",
        "CTRY_NAME": "ISLE OF MAN",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "IL",
        "CTRY_NAME": "ISRAEL",
        "LANG_CODE": "HE",
        "ISO_CURR_CODE": "ILS"
    },
    {
        "CTRY_CODE": "IT",
        "CTRY_NAME": "ITALY",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "JM",
        "CTRY_NAME": "JAMAICA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "JMD"
    },
    {
        "CTRY_CODE": "JP",
        "CTRY_NAME": "JAPAN",
        "LANG_CODE": "JA",
        "ISO_CURR_CODE": "JPY"
    },
    {
        "CTRY_CODE": "JE",
        "CTRY_NAME": "JERSEY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "JO",
        "CTRY_NAME": "JORDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "JOD"
    },
    {
        "CTRY_CODE": "KZ",
        "CTRY_NAME": "KAZAKHSTAN",
        "LANG_CODE": "RN",
        "ISO_CURR_CODE": "KZT"
    },
    {
        "CTRY_CODE": "KE",
        "CTRY_NAME": "KENYA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "KES"
    },
    {
        "CTRY_CODE": "KI",
        "CTRY_NAME": "KIRIBATI",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "KP",
        "CTRY_NAME": "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
        "LANG_CODE": "KO",
        "ISO_CURR_CODE": "KPW"
    },
    {
        "CTRY_CODE": "KR",
        "CTRY_NAME": "KOREA, REPUBLIC OF",
        "LANG_CODE": "KO",
        "ISO_CURR_CODE": "KRW"
    },
    {
        "CTRY_CODE": "XK",
        "CTRY_NAME": "KOSOVO",
        "LANG_CODE": "AL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "KW",
        "CTRY_NAME": "KUWAIT",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "KWD"
    },
    {
        "CTRY_CODE": "KG",
        "CTRY_NAME": "KYRGYZSTAN",
        "LANG_CODE": "KY",
        "ISO_CURR_CODE": "KGS"
    },
    {
        "CTRY_CODE": "LA",
        "CTRY_NAME": "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
        "LANG_CODE": "LO",
        "ISO_CURR_CODE": "LAK"
    },
    {
        "CTRY_CODE": "LV",
        "CTRY_NAME": "LATVIA",
        "LANG_CODE": "LV",
        "ISO_CURR_CODE": "LVL"
    },
    {
        "CTRY_CODE": "LB",
        "CTRY_NAME": "LEBANON",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "LBP"
    },
    {
        "CTRY_CODE": "LS",
        "CTRY_NAME": "LESOTHO",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "LSL"
    },
    {
        "CTRY_CODE": "LR",
        "CTRY_NAME": "LIBERIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "LRD"
    },
    {
        "CTRY_CODE": "LY",
        "CTRY_NAME": "LIBYA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "LYD"
    },
    {
        "CTRY_CODE": "LI",
        "CTRY_NAME": "LIECHTENSTEIN",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "CHF"
    },
    {
        "CTRY_CODE": "LT",
        "CTRY_NAME": "LITHUANIA",
        "LANG_CODE": "LT",
        "ISO_CURR_CODE": "LTL"
    },
    {
        "CTRY_CODE": "LU",
        "CTRY_NAME": "LUXEMBOURG",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MO",
        "CTRY_NAME": "MACAO",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "MOP"
    },
    {
        "CTRY_CODE": "MK",
        "CTRY_NAME": "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
        "LANG_CODE": "MK",
        "ISO_CURR_CODE": "MKD"
    },
    {
        "CTRY_CODE": "MG",
        "CTRY_NAME": "MADAGASCAR",
        "LANG_CODE": "MG",
        "ISO_CURR_CODE": "MGF"
    },
    {
        "CTRY_CODE": "MW",
        "CTRY_NAME": "MALAWI",
        "LANG_CODE": "NY",
        "ISO_CURR_CODE": "MWK"
    },
    {
        "CTRY_CODE": "MY",
        "CTRY_NAME": "MALAYSIA",
        "LANG_CODE": "MS",
        "ISO_CURR_CODE": "MYR"
    },
    {
        "CTRY_CODE": "MV",
        "CTRY_NAME": "MALDIVES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "MVR"
    },
    {
        "CTRY_CODE": "ML",
        "CTRY_NAME": "MALI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "MT",
        "CTRY_NAME": "MALTA",
        "LANG_CODE": "MT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MH",
        "CTRY_NAME": "MARSHALL ISLANDS",
        "LANG_CODE": "MH",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "MQ",
        "CTRY_NAME": "MARTINIQUE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MR",
        "CTRY_NAME": "MAURITANIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MRO"
    },
    {
        "CTRY_CODE": "MU",
        "CTRY_NAME": "MAURITIUS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "MUR"
    },
    {
        "CTRY_CODE": "YT",
        "CTRY_NAME": "MAYOTTE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MX",
        "CTRY_NAME": "MEXICO",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "MXN",
        "STATE_LABEL": "State",
        "STATES": [
            {
                "STATE_CODE": "AGU",
                "STATE_NAME": "AGUASCALIENTES"
            },
            {
                "STATE_CODE": "BCN",
                "STATE_NAME": "BAJA CALIFORNIA"
            },
            {
                "STATE_CODE": "BCS",
                "STATE_NAME": "BAJA CALIFORNIA SUR"
            },
            {
                "STATE_CODE": "CAM",
                "STATE_NAME": "CAMPECHE"
            },
            {
                "STATE_CODE": "CHP",
                "STATE_NAME": "CHIAPAS"
            },
            {
                "STATE_CODE": "CHH",
                "STATE_NAME": "CHIHUAHUA"
            },
            {
                "STATE_CODE": "COA",
                "STATE_NAME": "COAHUILA"
            },
            {
                "STATE_CODE": "COL",
                "STATE_NAME": "COLIMA"
            },
            {
                "STATE_CODE": "DIF",
                "STATE_NAME": "DISTRITO FEDERAL"
            },
            {
                "STATE_CODE": "DUR",
                "STATE_NAME": "DURANGO"
            },
            {
                "STATE_CODE": "GUA",
                "STATE_NAME": "GUANAJUATO"
            },
            {
                "STATE_CODE": "GRO",
                "STATE_NAME": "GUERRERO"
            },
            {
                "STATE_CODE": "HID",
                "STATE_NAME": "HIDALGO"
            },
            {
                "STATE_CODE": "JAL",
                "STATE_NAME": "JALISCO"
            },
            {
                "STATE_CODE": "MIC",
                "STATE_NAME": "MICHOACÁN"
            },
            {
                "STATE_CODE": "MOR",
                "STATE_NAME": "MORELOS"
            },
            {
                "STATE_CODE": "MEX",
                "STATE_NAME": "MÉXICO"
            },
            {
                "STATE_CODE": "NAY",
                "STATE_NAME": "NAYARIT"
            },
            {
                "STATE_CODE": "NLE",
                "STATE_NAME": "NUEVO LEÓN"
            },
            {
                "STATE_CODE": "OAX",
                "STATE_NAME": "OAXACA"
            },
            {
                "STATE_CODE": "PUE",
                "STATE_NAME": "PUEBLA"
            },
            {
                "STATE_CODE": "QUE",
                "STATE_NAME": "QUERÉTARO"
            },
            {
                "STATE_CODE": "ROO",
                "STATE_NAME": "QUINTANA ROO"
            },
            {
                "STATE_CODE": "SLP",
                "STATE_NAME": "SAN LUIS POTOSÍ"
            },
            {
                "STATE_CODE": "SIN",
                "STATE_NAME": "SINALOA"
            },
            {
                "STATE_CODE": "SON",
                "STATE_NAME": "SONORA"
            },
            {
                "STATE_CODE": "TAB",
                "STATE_NAME": "TABASCO"
            },
            {
                "STATE_CODE": "TAM",
                "STATE_NAME": "TAMAULIPAS"
            },
            {
                "STATE_CODE": "TLA",
                "STATE_NAME": "TLAXCALA"
            },
            {
                "STATE_CODE": "VER",
                "STATE_NAME": "VERACRUZ"
            },
            {
                "STATE_CODE": "YUC",
                "STATE_NAME": "YUCATÁN"
            },
            {
                "STATE_CODE": "ZAC",
                "STATE_NAME": "ZACATECAS"
            }
        ]
    },
    {
        "CTRY_CODE": "FM",
        "CTRY_NAME": "MICRONESIA, FEDERATED STATES OF",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "MD",
        "CTRY_NAME": "MOLDOVA, REPUBLIC OF",
        "LANG_CODE": "MO",
        "ISO_CURR_CODE": "MDL"
    },
    {
        "CTRY_CODE": "MC",
        "CTRY_NAME": "MONACO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MN",
        "CTRY_NAME": "MONGOLIA",
        "LANG_CODE": "MN",
        "ISO_CURR_CODE": "MNT"
    },
    {
        "CTRY_CODE": "ME",
        "CTRY_NAME": "MONTENEGRO",
        "LANG_CODE": "SR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MS",
        "CTRY_NAME": "MONTSERRAT",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "MA",
        "CTRY_NAME": "MOROCCO",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MAD"
    },
    {
        "CTRY_CODE": "MZ",
        "CTRY_NAME": "MOZAMBIQUE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "MZM"
    },
    {
        "CTRY_CODE": "MM",
        "CTRY_NAME": "MYANMAR",
        "LANG_CODE": "MY",
        "ISO_CURR_CODE": "MMK"
    },
    {
        "CTRY_CODE": "NA",
        "CTRY_NAME": "NAMIBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NAD"
    },
    {
        "CTRY_CODE": "NR",
        "CTRY_NAME": "NAURU",
        "LANG_CODE": "NA",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "NP",
        "CTRY_NAME": "NEPAL",
        "LANG_CODE": "NE",
        "ISO_CURR_CODE": "NPR"
    },
    {
        "CTRY_CODE": "NL",
        "CTRY_NAME": "NETHERLANDS",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "NC",
        "CTRY_NAME": "NEW CALEDONIA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "NZ",
        "CTRY_NAME": "NEW ZEALAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "NI",
        "CTRY_NAME": "NICARAGUA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NIO"
    },
    {
        "CTRY_CODE": "NE",
        "CTRY_NAME": "NIGER",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "NG",
        "CTRY_NAME": "NIGERIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NGN"
    },
    {
        "CTRY_CODE": "NU",
        "CTRY_NAME": "NIUE",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "NF",
        "CTRY_NAME": "NORFOLK ISLAND",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "XI",
        "CTRY_NAME": "NORTHERN IRELAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MP",
        "CTRY_NAME": "NORTHERN MARIANA ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "NO",
        "CTRY_NAME": "NORWAY",
        "LANG_CODE": "NORWAYGIAN",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "OM",
        "CTRY_NAME": "OMAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "OMR"
    },
    {
        "CTRY_CODE": "PK",
        "CTRY_NAME": "PAKISTAN",
        "LANG_CODE": "UR",
        "ISO_CURR_CODE": "PKR"
    },
    {
        "CTRY_CODE": "PW",
        "CTRY_NAME": "PALAU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "PS",
        "CTRY_NAME": "PALESTINE, STATE OF",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "PA",
        "CTRY_NAME": "PANAMA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PAB"
    },
    {
        "CTRY_CODE": "PG",
        "CTRY_NAME": "PAPUA NEW GUINEA",
        "LANG_CODE": "HO",
        "ISO_CURR_CODE": "PGK"
    },
    {
        "CTRY_CODE": "PY",
        "CTRY_NAME": "PARAGUAY",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PYG"
    },
    {
        "CTRY_CODE": "PE",
        "CTRY_NAME": "PERU",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PEN"
    },
    {
        "CTRY_CODE": "PH",
        "CTRY_NAME": "PHILIPPINES",
        "LANG_CODE": "TL",
        "ISO_CURR_CODE": "PHP"
    },
    {
        "CTRY_CODE": "PN",
        "CTRY_NAME": "PITCAIRN",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "PL",
        "CTRY_NAME": "POLAND",
        "LANG_CODE": "PL",
        "ISO_CURR_CODE": "PLN"
    },
    {
        "CTRY_CODE": "PT",
        "CTRY_NAME": "PORTUGAL",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PR",
        "CTRY_NAME": "PUERTO RICO",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "QA",
        "CTRY_NAME": "QATAR",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "QAR"
    },
    {
        "CTRY_CODE": "RE",
        "CTRY_NAME": "REUNION",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "RO",
        "CTRY_NAME": "ROMANIA",
        "LANG_CODE": "RO",
        "ISO_CURR_CODE": "RON"
    },
    {
        "CTRY_CODE": "RU",
        "CTRY_NAME": "RUSSIAN FEDERATION",
        "LANG_CODE": "RU",
        "ISO_CURR_CODE": "RUB"
    },
    {
        "CTRY_CODE": "RW",
        "CTRY_NAME": "RWANDA",
        "LANG_CODE": "RW",
        "ISO_CURR_CODE": "RWF"
    },
    {
        "CTRY_CODE": "BL",
        "CTRY_NAME": "SAINT BARTHELEMY",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SH",
        "CTRY_NAME": "SAINT HELENA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SHP"
    },
    {
        "CTRY_CODE": "KN",
        "CTRY_NAME": "SAINT KITTS AND NEVIS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "LC",
        "CTRY_NAME": "SAINT LUCIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "MF",
        "CTRY_NAME": "SAINT MARTIN",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PM",
        "CTRY_NAME": "SAINT PIERRE AND MIQUELON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "VC",
        "CTRY_NAME": "SAINT VINCENT AND THE GRENADINES",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "WS",
        "CTRY_NAME": "SAMOA",
        "LANG_CODE": "SM",
        "ISO_CURR_CODE": "WST"
    },
    {
        "CTRY_CODE": "SM",
        "CTRY_NAME": "SAN MARINO",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "ST",
        "CTRY_NAME": "SAO TOME AND PRINCIPE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "STD"
    },
    {
        "CTRY_CODE": "SA",
        "CTRY_NAME": "SAUDI ARABIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SAR"
    },
    {
        "CTRY_CODE": "SN",
        "CTRY_NAME": "SENEGAL",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "RS",
        "CTRY_NAME": "SERBIA",
        "LANG_CODE": "SR",
        "ISO_CURR_CODE": "RSD"
    },
    {
        "CTRY_CODE": "SC",
        "CTRY_NAME": "SEYCHELLES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SCR"
    },
    {
        "CTRY_CODE": "SL",
        "CTRY_NAME": "SIERRA LEONE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SLL"
    },
    {
        "CTRY_CODE": "SG",
        "CTRY_NAME": "SINGAPORE",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "SGD"
    },
    {
        "CTRY_CODE": "SX",
        "CTRY_NAME": "SINT MAARTEN (DUTCH PART)",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "ANG"
    },
    {
        "CTRY_CODE": "SK",
        "CTRY_NAME": "SLOVAKIA",
        "LANG_CODE": "SK",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SI",
        "CTRY_NAME": "SLOVENIA",
        "LANG_CODE": "SL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SB",
        "CTRY_NAME": "SOLOMON ISLANDS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SBD"
    },
    {
        "CTRY_CODE": "SO",
        "CTRY_NAME": "SOMALIA",
        "LANG_CODE": "SO",
        "ISO_CURR_CODE": "SOS"
    },
    {
        "CTRY_CODE": "ZA",
        "CTRY_NAME": "SOUTH AFRICA",
        "LANG_CODE": "AF",
        "ISO_CURR_CODE": "ZAR",
        "STATE_LABEL": "Province",
        "STATES": [
            {
                "STATE_CODE": "EC",
                "STATE_NAME": "EASTERN CAPE"
            },
            {
                "STATE_CODE": "FS",
                "STATE_NAME": "FREE STATE"
            },
            {
                "STATE_CODE": "GT",
                "STATE_NAME": "GAUTENG"
            },
            {
                "STATE_CODE": "NL",
                "STATE_NAME": "KWAZULU-NATAL"
            },
            {
                "STATE_CODE": "LP",
                "STATE_NAME": "LIMPOPO"
            },
            {
                "STATE_CODE": "MP",
                "STATE_NAME": "MPUMALANGA"
            },
            {
                "STATE_CODE": "NW",
                "STATE_NAME": "NORTH-WEST"
            },
            {
                "STATE_CODE": "NC",
                "STATE_NAME": "NORTHERN CAPE"
            },
            {
                "STATE_CODE": "WC",
                "STATE_NAME": "WESTERN CAPE"
            }
        ]
    },
    {
        "CTRY_CODE": "GS",
        "CTRY_NAME": "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
        "LANG_CODE": "EN"
    },
    {
        "CTRY_CODE": "SS",
        "CTRY_NAME": "SOUTH SUDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SSP"
    },
    {
        "CTRY_CODE": "ES",
        "CTRY_NAME": "SPAIN",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "LK",
        "CTRY_NAME": "SRI LANKA",
        "LANG_CODE": "SI",
        "ISO_CURR_CODE": "LKR"
    },
    {
        "CTRY_CODE": "SD",
        "CTRY_NAME": "SUDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SDG"
    },
    {
        "CTRY_CODE": "SR",
        "CTRY_NAME": "SURINAME",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "SRD"
    },
    {
        "CTRY_CODE": "SJ",
        "CTRY_NAME": "SVALBARD AND JAN MAYEN",
        "LANG_CODE": "NO",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "SZ",
        "CTRY_NAME": "SWAZILAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SZL"
    },
    {
        "CTRY_CODE": "SE",
        "CTRY_NAME": "SWEDEN",
        "LANG_CODE": "SV",
        "ISO_CURR_CODE": "SEK"
    },
    {
        "CTRY_CODE": "CH",
        "CTRY_NAME": "SWITZERLAND",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "CHF"
    },
    {
        "CTRY_CODE": "SY",
        "CTRY_NAME": "SYRIAN ARAB REPUBLIC",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SYP"
    },
    {
        "CTRY_CODE": "TW",
        "CTRY_NAME": "TAIWAN, PROVINCE OF CHINA",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "TWD"
    },
    {
        "CTRY_CODE": "TJ",
        "CTRY_NAME": "TAJIKISTAN",
        "LANG_CODE": "TG",
        "ISO_CURR_CODE": "TJS"
    },
    {
        "CTRY_CODE": "TZ",
        "CTRY_NAME": "TANZANIA, UNITED REPUBLIC OF",
        "LANG_CODE": "SW",
        "ISO_CURR_CODE": "TZS"
    },
    {
        "CTRY_CODE": "TH",
        "CTRY_NAME": "THAILAND",
        "LANG_CODE": "TH",
        "ISO_CURR_CODE": "THB"
    },
    {
        "CTRY_CODE": "TL",
        "CTRY_NAME": "TIMOR-LESTE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "TG",
        "CTRY_NAME": "TOGO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "TK",
        "CTRY_NAME": "TOKELAU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "TO",
        "CTRY_NAME": "TONGA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "TOP"
    },
    {
        "CTRY_CODE": "TT",
        "CTRY_NAME": "TRINIDAD AND TOBAGO",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "TTD"
    },
    {
        "CTRY_CODE": "TN",
        "CTRY_NAME": "TUNISIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "TND"
    },
    {
        "CTRY_CODE": "TR",
        "CTRY_NAME": "TURKEY",
        "LANG_CODE": "TR",
        "ISO_CURR_CODE": "TRY"
    },
    {
        "CTRY_CODE": "TM",
        "CTRY_NAME": "TURKMENISTAN",
        "LANG_CODE": "TK",
        "ISO_CURR_CODE": "TMM"
    },
    {
        "CTRY_CODE": "TC",
        "CTRY_NAME": "TURKS AND CAICOS ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "TV",
        "CTRY_NAME": "TUVALU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "UG",
        "CTRY_NAME": "UGANDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "UGX"
    },
    {
        "CTRY_CODE": "UA",
        "CTRY_NAME": "UKRAINE",
        "LANG_CODE": "UK",
        "ISO_CURR_CODE": "UAH"
    },
    {
        "CTRY_CODE": "AE",
        "CTRY_NAME": "UNITED ARAB EMIRATES",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "AED"
    },
    {
        "CTRY_CODE": "GB",
        "CTRY_NAME": "UNITED KINGDOM",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "UM",
        "CTRY_NAME": "UNITED STATES MINOR OUTLYING ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "US",
        "CTRY_NAME": "UNITED STATES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD",
        "STATES_LABEL": "State",
        "STATES": [
            {
                "STATE_CODE": "AL",
                "STATE_NAME": "ALABAMA"
            },
            {
                "STATE_CODE": "AK",
                "STATE_NAME": "ALASKA"
            },
            {
                "STATE_CODE": "AS",
                "STATE_NAME": "AMERICAN SAMOA"
            },
            {
                "STATE_CODE": "AZ",
                "STATE_NAME": "ARIZONA"
            },
            {
                "STATE_CODE": "AR",
                "STATE_NAME": "ARKANSAS"
            },
            {
                "STATE_CODE": "CA",
                "STATE_NAME": "CALIFORNIA"
            },
            {
                "STATE_CODE": "CO",
                "STATE_NAME": "COLORADO"
            },
            {
                "STATE_CODE": "CT",
                "STATE_NAME": "CONNECTICUT"
            },
            {
                "STATE_CODE": "DE",
                "STATE_NAME": "DELAWARE"
            },
            {
                "STATE_CODE": "DC",
                "STATE_NAME": "DISTRICT OF COLUMBIA"
            },
            {
                "STATE_CODE": "FL",
                "STATE_NAME": "FLORIDA"
            },
            {
                "STATE_CODE": "GA",
                "STATE_NAME": "GEORGIA"
            },
            {
                "STATE_CODE": "GU",
                "STATE_NAME": "GUAM"
            },
            {
                "STATE_CODE": "HI",
                "STATE_NAME": "HAWAII"
            },
            {
                "STATE_CODE": "ID",
                "STATE_NAME": "IDAHO"
            },
            {
                "STATE_CODE": "IL",
                "STATE_NAME": "ILLINOIS"
            },
            {
                "STATE_CODE": "IN",
                "STATE_NAME": "INDIANA"
            },
            {
                "STATE_CODE": "IA",
                "STATE_NAME": "IOWA"
            },
            {
                "STATE_CODE": "KS",
                "STATE_NAME": "KANSAS"
            },
            {
                "STATE_CODE": "KY",
                "STATE_NAME": "KENTUCKY"
            },
            {
                "STATE_CODE": "LA",
                "STATE_NAME": "LOUISIANA"
            },
            {
                "STATE_CODE": "ME",
                "STATE_NAME": "MAINE"
            },
            {
                "STATE_CODE": "MD",
                "STATE_NAME": "MARYLAND"
            },
            {
                "STATE_CODE": "MA",
                "STATE_NAME": "MASSACHUSETTS"
            },
            {
                "STATE_CODE": "MI",
                "STATE_NAME": "MICHIGAN"
            },
            {
                "STATE_CODE": "MN",
                "STATE_NAME": "MINNESOTA"
            },
            {
                "STATE_CODE": "MS",
                "STATE_NAME": "MISSISSIPPI"
            },
            {
                "STATE_CODE": "MO",
                "STATE_NAME": "MISSOURI"
            },
            {
                "STATE_CODE": "MT",
                "STATE_NAME": "MONTANA"
            },
            {
                "STATE_CODE": "NE",
                "STATE_NAME": "NEBRASKA"
            },
            {
                "STATE_CODE": "NV",
                "STATE_NAME": "NEVADA"
            },
            {
                "STATE_CODE": "NH",
                "STATE_NAME": "NEW HAMPSHIRE"
            },
            {
                "STATE_CODE": "NJ",
                "STATE_NAME": "NEW JERSEY"
            },
            {
                "STATE_CODE": "NM",
                "STATE_NAME": "NEW MEXICO"
            },
            {
                "STATE_CODE": "NY",
                "STATE_NAME": "NEW YORK"
            },
            {
                "STATE_CODE": "NC",
                "STATE_NAME": "NORTH CAROLINA"
            },
            {
                "STATE_CODE": "ND",
                "STATE_NAME": "NORTH DAKOTA"
            },
            {
                "STATE_CODE": "MP",
                "STATE_NAME": "NORTHERN MARIANA ISLANDS"
            },
            {
                "STATE_CODE": "OH",
                "STATE_NAME": "OHIO"
            },
            {
                "STATE_CODE": "OK",
                "STATE_NAME": "OKLAHOMA"
            },
            {
                "STATE_CODE": "OR",
                "STATE_NAME": "OREGON"
            },
            {
                "STATE_CODE": "PA",
                "STATE_NAME": "PENNSYLVANIA"
            },
            {
                "STATE_CODE": "PR",
                "STATE_NAME": "PUERTO RICO"
            },
            {
                "STATE_CODE": "RI",
                "STATE_NAME": "RHODE ISLAND"
            },
            {
                "STATE_CODE": "SC",
                "STATE_NAME": "SOUTH CAROLINA"
            },
            {
                "STATE_CODE": "SD",
                "STATE_NAME": "SOUTH DAKOTA"
            },
            {
                "STATE_CODE": "TN",
                "STATE_NAME": "TENNESSEE"
            },
            {
                "STATE_CODE": "TX",
                "STATE_NAME": "TEXAS"
            },
            {
                "STATE_CODE": "UM",
                "STATE_NAME": "UNITED STATES MINOR OUTLYING ISLANDS"
            },
            {
                "STATE_CODE": "UT",
                "STATE_NAME": "UTAH"
            },
            {
                "STATE_CODE": "VT",
                "STATE_NAME": "VERMONT"
            },
            {
                "STATE_CODE": "VI",
                "STATE_NAME": "VIRGIN ISLANDS, U.S."
            },
            {
                "STATE_CODE": "VA",
                "STATE_NAME": "VIRGINIA"
            },
            {
                "STATE_CODE": "WA",
                "STATE_NAME": "WASHINGTON"
            },
            {
                "STATE_CODE": "WV",
                "STATE_NAME": "WEST VIRGINIA"
            },
            {
                "STATE_CODE": "WI",
                "STATE_NAME": "WISCONSIN"
            },
            {
                "STATE_CODE": "WY",
                "STATE_NAME": "WYOMING"
            }
        ]
    },
    {
        "CTRY_CODE": "UY",
        "CTRY_NAME": "URUGUAY",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "UYU"
    },
    {
        "CTRY_CODE": "UZ",
        "CTRY_NAME": "UZBEKISTAN",
        "LANG_CODE": "UZ",
        "ISO_CURR_CODE": "UZS"
    },
    {
        "CTRY_CODE": "VU",
        "CTRY_NAME": "VANUATU",
        "LANG_CODE": "BI",
        "ISO_CURR_CODE": "VUV"
    },
    {
        "CTRY_CODE": "VE",
        "CTRY_NAME": "VENEZUELA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "VEB"
    },
    {
        "CTRY_CODE": "VN",
        "CTRY_NAME": "VIET NAM",
        "LANG_CODE": "VI",
        "ISO_CURR_CODE": "VND"
    },
    {
        "CTRY_CODE": "VG",
        "CTRY_NAME": "VIRGIN ISLANDS, BRITISH",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "VI",
        "CTRY_NAME": "VIRGIN ISLANDS, U.S.",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "WF",
        "CTRY_NAME": "WALLIS AND FUTUNA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "WE",
        "CTRY_NAME": "WEST BANK",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "EH",
        "CTRY_NAME": "WESTERN SAHARA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MAD"
    },
    {
        "CTRY_CODE": "YE",
        "CTRY_NAME": "YEMEN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "YER"
    },
    {
        "CTRY_CODE": "ZM",
        "CTRY_NAME": "ZAMBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "ZMK"
    },
    {
        "CTRY_CODE": "ZW",
        "CTRY_NAME": "ZIMBABWE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "ZWD"
    }
]

```

---

## Numeric input

**Search Terms:** 'npm', 'integer'

**File:** `src/ds-layout-components/foundations/components/forms/numeric-input/NumericInputExample.tsx`

```tsx
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CheckAndRadioOption, FormCheckAndRadioGroup, FormNumericInput } from 'livingston-npm-components';

type InputState = {
    value: string | number | undefined;
    valid: boolean;
    onBlur: string | number | undefined;
    mandatory: boolean;
};

function NumericInputExample() {
    const [input1, setInput1] = useState<InputState>({
        value: '',
        valid: false,
        onBlur: '',
        mandatory: true
    });

    const availableOptions = [
        { value: 'allow-negative', label: 'Allow negative values' },
        { value: 'allow-zero', label: 'Allow zero value' },
        { value: 'allow-decimal', label: 'Allow decimal values (eg 2)', helpText: 'If enabled, you can specify the number of digits allowed after the decimal point' },
        { value: 'limit-digits-before-decimal', label: 'Limit digits before decimal (eg 4)', helpText: 'If enabled, you can specify the maximum number of digits allowed before the decimal point' },
        { value: 'minimum-value', label: 'Minimum value 10' },
        { value: 'maximum-value', label: 'Maximum value 100' },
        { value: 'show-prefix', label: 'Show prefix "$"' },
        { value: 'disabled', label: 'Disabled' },
        { value: 'readonly', label: 'Readonly' }
    ];

    const [selectedOptions, setSelectedOptions] = useState<CheckAndRadioOption[]>(
        availableOptions.map((option) => ({ label: option.label, value: option.value, isChecked: false }))
    );

    const hasOptionSelected = (optionValue: string) => {
        return selectedOptions.some((option) => option.value === optionValue && option.isChecked);
    };

    return (
        <Row>
            <Col xs={12} md={6} className="mb-4 mb-md-0">
                <h5>Props</h5>
                <FormCheckAndRadioGroup
                    name='checkbox-example'
                    type='checkbox'
                    setSelectedOptions={setSelectedOptions}
                    options={selectedOptions}
                />
            </Col>

            <Col xs={12} md={6}>
                <h5>Preview</h5>
                <FormNumericInput
                    name='numeric-input-example'
                    label='Numeric input label'
                    placeholder='Enter a value'
                    value={input1.value}
                    required={input1.mandatory}
                    onChange={(newValue) => setInput1({ ...input1, value: newValue })}
                    onBlur={(newValue) => setInput1({ ...input1, onBlur: newValue })}
                    tooltip='tooltip here'
                    decimalPoint={hasOptionSelected('allow-decimal') ? 2 : undefined}
                    allowNegativeValue={hasOptionSelected('allow-negative')}
                    allowZeroValue={hasOptionSelected('allow-zero')}
                    maxLength={hasOptionSelected('limit-digits-before-decimal') ? 4 : undefined}
                    prefix={hasOptionSelected('show-prefix') ? '$' : undefined}
                    disabled={hasOptionSelected('disabled')}
                    readOnly={hasOptionSelected('readonly')}
                    minValue={hasOptionSelected('minimum-value') ? 10 : undefined}
                    maxValue={hasOptionSelected('maximum-value') ? 100 : undefined}
                />
            </Col>
        </Row>
    );

}

export default NumericInputExample;

```

---

## Phone number

**Search Terms:** 'npm', 'telephone', 'cell', 'mobile', 'flag'

### Source File 1: `src/components/form/PhoneNumberExample.tsx`

```tsx
import { useRef, useState } from 'react';
import { FormPhoneNumber, FormPhoneNumberRef, FetchCountriesFunction } from 'livingston-npm-components';
import { fetchCountries } from '../../utils/countryApi';

function PhoneNumberExample() {
    // Case where country is known but no value has been supplied yet
    const [phoneNumber, setPhoneNumber] = useState('');
    const phoneRef = useRef<FormPhoneNumberRef>(null);

    return (
        <FormPhoneNumber
            name='phoneNumberExample'
            label='Telephone'
            ref={phoneRef}
            setValue={setPhoneNumber}
            placeholder='Enter phone number'
            value={phoneNumber}
            fetchCountries={fetchCountries as FetchCountriesFunction}
            errorMessage='Please enter valid contact number. E.g. +1 437 123456'
            preferredCountries={['CA', 'US']}
            strictValidation
            defaultCountry={'IN'}
            size='lg'
            helpText='This is a help text'
            tooltip={'In this example, there is a list of test preferred countries'}
        />
    );
}

export default PhoneNumberExample;

```

### Source File 2: `src/utils/countryApi.ts`

```tsx
import { CountryDetail, ProvinceDetail } from 'livingston-npm-components';
import countryData from './country-data.json';

export const fetchCountries = () => {
    return new Promise<CountryDetail[]>((resolve) => {
        console.log('fake api to get country data');
        setTimeout(() => resolve(countryData), 3000);
    });
};

export const fetchProvinces = (countryCode: string): Promise<ProvinceDetail[]> => {
    return new Promise<ProvinceDetail[]>((resolve) => {
        const foundCountry = countryData.find((country) => country.CTRY_CODE === countryCode);
        console.log('fake api to get provinces api', countryCode, foundCountry);
        setTimeout(() => {
            resolve(
                foundCountry && foundCountry.STATES
                    ? foundCountry.STATES.map((state) => ({ name: state.STATE_NAME, code: state.STATE_CODE }))
                    : []
            );
        }, 3000);
    });
};

```

### Source File 3: `src/utils/country-data.json`

```tsx
[
    {
        "CTRY_CODE": "AF",
        "CTRY_NAME": "AFGHANISTAN",
        "LANG_CODE": "PS",
        "ISO_CURR_CODE": "AFN"
    },
    {
        "CTRY_CODE": "AX",
        "CTRY_NAME": "ALAND ISLANDS",
        "LANG_CODE": "FI",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AL",
        "CTRY_NAME": "ALBANIA",
        "LANG_CODE": "SQ",
        "ISO_CURR_CODE": "ALL"
    },
    {
        "CTRY_CODE": "CA",
        "CTRY_NAME": "CANADA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "CAD",
        "STATE_LABEL": "Province",
        "STATES": [
            {
                "STATE_CODE": "AB",
                "STATE_NAME": "ALBERTA"
            },
            {
                "STATE_CODE": "BC",
                "STATE_NAME": "BRITISH COLUMBIA"
            },
            {
                "STATE_CODE": "MB",
                "STATE_NAME": "MANITOBA"
            },
            {
                "STATE_CODE": "NB",
                "STATE_NAME": "NEW BRUNSWICK"
            },
            {
                "STATE_CODE": "NL",
                "STATE_NAME": "NEWFOUNDLAND AND LABRADOR"
            },
            {
                "STATE_CODE": "NT",
                "STATE_NAME": "NORTHWEST TERRITORIES"
            },
            {
                "STATE_CODE": "NS",
                "STATE_NAME": "NOVA SCOTIA"
            },
            {
                "STATE_CODE": "NU",
                "STATE_NAME": "NUNAVUT"
            },
            {
                "STATE_CODE": "ON",
                "STATE_NAME": "ONTARIO"
            },
            {
                "STATE_CODE": "PE",
                "STATE_NAME": "PRINCE EDWARD ISLAND"
            },
            {
                "STATE_CODE": "QC",
                "STATE_NAME": "QUEBEC"
            },
            {
                "STATE_CODE": "SK",
                "STATE_NAME": "SASKATCHEWAN"
            },
            {
                "STATE_CODE": "YT",
                "STATE_NAME": "YUKON TERRITORY"
            }
        ]
    },
    {
        "CTRY_CODE": "DZ",
        "CTRY_NAME": "ALGERIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "DZD"
    },
    {
        "CTRY_CODE": "AS",
        "CTRY_NAME": "AMERICAN SAMOA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "AD",
        "CTRY_NAME": "ANDORRA",
        "LANG_CODE": "CA",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AO",
        "CTRY_NAME": "ANGOLA",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "AOA"
    },
    {
        "CTRY_CODE": "AI",
        "CTRY_NAME": "ANGUILLA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "AQ",
        "CTRY_NAME": "ANTARCTICA"
    },
    {
        "CTRY_CODE": "AG",
        "CTRY_NAME": "ANTIGUA AND BARBUDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "AR",
        "CTRY_NAME": "ARGENTINA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "ARS"
    },
    {
        "CTRY_CODE": "AM",
        "CTRY_NAME": "ARMENIA",
        "LANG_CODE": "HY",
        "ISO_CURR_CODE": "AMD"
    },
    {
        "CTRY_CODE": "AW",
        "CTRY_NAME": "ARUBA",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "AWG"
    },
    {
        "CTRY_CODE": "AU",
        "CTRY_NAME": "AUSTRALIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "AT",
        "CTRY_NAME": "AUSTRIA",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AZ",
        "CTRY_NAME": "AZERBAIJAN",
        "LANG_CODE": "AZ",
        "ISO_CURR_CODE": "AZM"
    },
    {
        "CTRY_CODE": "BS",
        "CTRY_NAME": "BAHAMAS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BSD"
    },
    {
        "CTRY_CODE": "BH",
        "CTRY_NAME": "BAHRAIN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "BHD"
    },
    {
        "CTRY_CODE": "BD",
        "CTRY_NAME": "BANGLADESH",
        "LANG_CODE": "BN",
        "ISO_CURR_CODE": "BDT"
    },
    {
        "CTRY_CODE": "BB",
        "CTRY_NAME": "BARBADOS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BBD"
    },
    {
        "CTRY_CODE": "BY",
        "CTRY_NAME": "BELARUS",
        "LANG_CODE": "BE",
        "ISO_CURR_CODE": "BYR"
    },
    {
        "CTRY_CODE": "BE",
        "CTRY_NAME": "BELGIUM",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "BZ",
        "CTRY_NAME": "BELIZE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BZD"
    },
    {
        "CTRY_CODE": "BJ",
        "CTRY_NAME": "BENIN",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "BM",
        "CTRY_NAME": "BERMUDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BMD"
    },
    {
        "CTRY_CODE": "BT",
        "CTRY_NAME": "BHUTAN",
        "LANG_CODE": "DZ",
        "ISO_CURR_CODE": "BTN"
    },
    {
        "CTRY_CODE": "BO",
        "CTRY_NAME": "BOLIVIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "BOB"
    },
    {
        "CTRY_CODE": "BQ",
        "CTRY_NAME": "BONAIRE, SAINT EUSTATIUS AND SABA",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "BA",
        "CTRY_NAME": "BOSNIA AND HERZEGOVINA",
        "LANG_CODE": "BS",
        "ISO_CURR_CODE": "BAM"
    },
    {
        "CTRY_CODE": "BW",
        "CTRY_NAME": "BOTSWANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BWP"
    },
    {
        "CTRY_CODE": "BV",
        "CTRY_NAME": "BOUVET ISLAND",
        "LANG_CODE": "NO",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "BR",
        "CTRY_NAME": "BRAZIL",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "BRL"
    },
    {
        "CTRY_CODE": "IO",
        "CTRY_NAME": "BRITISH INDIAN OCEAN TERRITORY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "BN",
        "CTRY_NAME": "BRUNEI DARUSSALAM",
        "LANG_CODE": "MS",
        "ISO_CURR_CODE": "BND"
    },
    {
        "CTRY_CODE": "BG",
        "CTRY_NAME": "BULGARIA",
        "LANG_CODE": "BG",
        "ISO_CURR_CODE": "BGN"
    },
    {
        "CTRY_CODE": "BF",
        "CTRY_NAME": "BURKINA FASO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "BI",
        "CTRY_NAME": "BURUNDI",
        "LANG_CODE": "RN",
        "ISO_CURR_CODE": "BIF"
    },
    {
        "CTRY_CODE": "KH",
        "CTRY_NAME": "CAMBODIA",
        "LANG_CODE": "KM",
        "ISO_CURR_CODE": "KHR"
    },
    {
        "CTRY_CODE": "CM",
        "CTRY_NAME": "CAMEROON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CV",
        "CTRY_NAME": "CAPE VERDE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "CVE"
    },
    {
        "CTRY_CODE": "KY",
        "CTRY_NAME": "CAYMAN ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "KYD"
    },
    {
        "CTRY_CODE": "CF",
        "CTRY_NAME": "CENTRAL AFRICAN REPUBLIC",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "EA",
        "CTRY_NAME": "CEUTA AND MELILLA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "TD",
        "CTRY_NAME": "CHAD",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CL",
        "CTRY_NAME": "CHILE",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CLP"
    },
    {
        "CTRY_CODE": "CN",
        "CTRY_NAME": "CHINA",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "CNY"
    },
    {
        "CTRY_CODE": "CX",
        "CTRY_NAME": "CHRISTMAS ISLAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "CC",
        "CTRY_NAME": "COCOS (KEELING) ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "CO",
        "CTRY_NAME": "COLOMBIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "COP"
    },
    {
        "CTRY_CODE": "KM",
        "CTRY_NAME": "COMOROS",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "KMF"
    },
    {
        "CTRY_CODE": "CG",
        "CTRY_NAME": "CONGO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CD",
        "CTRY_NAME": "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "CDF"
    },
    {
        "CTRY_CODE": "CK",
        "CTRY_NAME": "COOK ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "CR",
        "CTRY_NAME": "COSTA RICA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CRC"
    },
    {
        "CTRY_CODE": "CI",
        "CTRY_NAME": "COTE D'IVOIRE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "QU",
        "CTRY_NAME": "COUNTRIES AND TERRITORIES NOT SPECIFIED"
    },
    {
        "CTRY_CODE": "HR",
        "CTRY_NAME": "CROATIA",
        "LANG_CODE": "HR",
        "ISO_CURR_CODE": "HRK"
    },
    {
        "CTRY_CODE": "CU",
        "CTRY_NAME": "CUBA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CUP"
    },
    {
        "CTRY_CODE": "CW",
        "CTRY_NAME": "CURACAO",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "ANG"
    },
    {
        "CTRY_CODE": "CY",
        "CTRY_NAME": "CYPRUS",
        "LANG_CODE": "EL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "CZ",
        "CTRY_NAME": "CZECH REPUBLIC",
        "LANG_CODE": "CS",
        "ISO_CURR_CODE": "CZK"
    },
    {
        "CTRY_CODE": "DK",
        "CTRY_NAME": "DENMARK",
        "LANG_CODE": "DA",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "DJ",
        "CTRY_NAME": "DJIBOUTI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "DJF"
    },
    {
        "CTRY_CODE": "DM",
        "CTRY_NAME": "DOMINICA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "DO",
        "CTRY_NAME": "DOMINICAN REPUBLIC",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "DOP"
    },
    {
        "CTRY_CODE": "EC",
        "CTRY_NAME": "ECUADOR",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "EG",
        "CTRY_NAME": "EGYPT",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "EGP"
    },
    {
        "CTRY_CODE": "SV",
        "CTRY_NAME": "EL SALVADOR",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SVC"
    },
    {
        "CTRY_CODE": "GQ",
        "CTRY_NAME": "EQUATORIAL GUINEA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "ER",
        "CTRY_NAME": "ERITREA",
        "LANG_CODE": "TI",
        "ISO_CURR_CODE": "ERN"
    },
    {
        "CTRY_CODE": "EE",
        "CTRY_NAME": "ESTONIA",
        "LANG_CODE": "ET",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "ET",
        "CTRY_NAME": "ETHIOPIA",
        "LANG_CODE": "AM",
        "ISO_CURR_CODE": "ETB"
    },
    {
        "CTRY_CODE": "FK",
        "CTRY_NAME": "FALKLAND ISLANDS (MALVINAS)",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "FKP"
    },
    {
        "CTRY_CODE": "FO",
        "CTRY_NAME": "FAROE ISLANDS",
        "LANG_CODE": "FO",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "FJ",
        "CTRY_NAME": "FIJI",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "FJD"
    },
    {
        "CTRY_CODE": "FI",
        "CTRY_NAME": "FINLAND",
        "LANG_CODE": "FI",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "FR",
        "CTRY_NAME": "FRANCE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GF",
        "CTRY_NAME": "FRENCH GUIANA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PF",
        "CTRY_NAME": "FRENCH POLYNESIA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "TF",
        "CTRY_NAME": "FRENCH SOUTHERN TERRITORIES",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GA",
        "CTRY_NAME": "GABON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "GM",
        "CTRY_NAME": "GAMBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GMD"
    },
    {
        "CTRY_CODE": "GZ",
        "CTRY_NAME": "GAZA STRIP",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "GE",
        "CTRY_NAME": "GEORGIA",
        "LANG_CODE": "KA",
        "ISO_CURR_CODE": "GEL"
    },
    {
        "CTRY_CODE": "DE",
        "CTRY_NAME": "GERMANY",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GH",
        "CTRY_NAME": "GHANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GHC"
    },
    {
        "CTRY_CODE": "GI",
        "CTRY_NAME": "GIBRALTAR",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GIP"
    },
    {
        "CTRY_CODE": "GR",
        "CTRY_NAME": "GREECE",
        "LANG_CODE": "EL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GL",
        "CTRY_NAME": "GREENLAND",
        "LANG_CODE": "KL",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "GD",
        "CTRY_NAME": "GRENADA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "GP",
        "CTRY_NAME": "GUADELOUPE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GU",
        "CTRY_NAME": "GUAM",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "GT",
        "CTRY_NAME": "GUATEMALA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "GTQ"
    },
    {
        "CTRY_CODE": "GG",
        "CTRY_NAME": "GUERNSEY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "GN",
        "CTRY_NAME": "GUINEA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "GNF"
    },
    {
        "CTRY_CODE": "GW",
        "CTRY_NAME": "GUINEA-BISSAU",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "GY",
        "CTRY_NAME": "GUYANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GYD"
    },
    {
        "CTRY_CODE": "HT",
        "CTRY_NAME": "HAITI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "HTG"
    },
    {
        "CTRY_CODE": "HM",
        "CTRY_NAME": "HEARD ISLAND AND MCDONALD ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "VA",
        "CTRY_NAME": "HOLY SEE (VATICAN CITY STATE)",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "HN",
        "CTRY_NAME": "HONDURAS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "HNL"
    },
    {
        "CTRY_CODE": "HK",
        "CTRY_NAME": "HONG KONG",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "HKD"
    },
    {
        "CTRY_CODE": "HU",
        "CTRY_NAME": "HUNGARY",
        "LANG_CODE": "HU",
        "ISO_CURR_CODE": "HUF"
    },
    {
        "CTRY_CODE": "IS",
        "CTRY_NAME": "ICELAND",
        "LANG_CODE": "IS",
        "ISO_CURR_CODE": "ISK"
    },
    {
        "CTRY_CODE": "IN",
        "CTRY_NAME": "INDIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "INR"
    },
    {
        "CTRY_CODE": "ID",
        "CTRY_NAME": "INDONESIA",
        "LANG_CODE": "ID",
        "ISO_CURR_CODE": "IDR"
    },
    {
        "CTRY_CODE": "IR",
        "CTRY_NAME": "IRAN, ISLAMIC REPUBLIC OF",
        "LANG_CODE": "FA",
        "ISO_CURR_CODE": "IRR"
    },
    {
        "CTRY_CODE": "IQ",
        "CTRY_NAME": "IRAQ",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "IQD"
    },
    {
        "CTRY_CODE": "IE",
        "CTRY_NAME": "IRELAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "IM",
        "CTRY_NAME": "ISLE OF MAN",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "IL",
        "CTRY_NAME": "ISRAEL",
        "LANG_CODE": "HE",
        "ISO_CURR_CODE": "ILS"
    },
    {
        "CTRY_CODE": "IT",
        "CTRY_NAME": "ITALY",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "JM",
        "CTRY_NAME": "JAMAICA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "JMD"
    },
    {
        "CTRY_CODE": "JP",
        "CTRY_NAME": "JAPAN",
        "LANG_CODE": "JA",
        "ISO_CURR_CODE": "JPY"
    },
    {
        "CTRY_CODE": "JE",
        "CTRY_NAME": "JERSEY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "JO",
        "CTRY_NAME": "JORDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "JOD"
    },
    {
        "CTRY_CODE": "KZ",
        "CTRY_NAME": "KAZAKHSTAN",
        "LANG_CODE": "RN",
        "ISO_CURR_CODE": "KZT"
    },
    {
        "CTRY_CODE": "KE",
        "CTRY_NAME": "KENYA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "KES"
    },
    {
        "CTRY_CODE": "KI",
        "CTRY_NAME": "KIRIBATI",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "KP",
        "CTRY_NAME": "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
        "LANG_CODE": "KO",
        "ISO_CURR_CODE": "KPW"
    },
    {
        "CTRY_CODE": "KR",
        "CTRY_NAME": "KOREA, REPUBLIC OF",
        "LANG_CODE": "KO",
        "ISO_CURR_CODE": "KRW"
    },
    {
        "CTRY_CODE": "XK",
        "CTRY_NAME": "KOSOVO",
        "LANG_CODE": "AL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "KW",
        "CTRY_NAME": "KUWAIT",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "KWD"
    },
    {
        "CTRY_CODE": "KG",
        "CTRY_NAME": "KYRGYZSTAN",
        "LANG_CODE": "KY",
        "ISO_CURR_CODE": "KGS"
    },
    {
        "CTRY_CODE": "LA",
        "CTRY_NAME": "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
        "LANG_CODE": "LO",
        "ISO_CURR_CODE": "LAK"
    },
    {
        "CTRY_CODE": "LV",
        "CTRY_NAME": "LATVIA",
        "LANG_CODE": "LV",
        "ISO_CURR_CODE": "LVL"
    },
    {
        "CTRY_CODE": "LB",
        "CTRY_NAME": "LEBANON",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "LBP"
    },
    {
        "CTRY_CODE": "LS",
        "CTRY_NAME": "LESOTHO",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "LSL"
    },
    {
        "CTRY_CODE": "LR",
        "CTRY_NAME": "LIBERIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "LRD"
    },
    {
        "CTRY_CODE": "LY",
        "CTRY_NAME": "LIBYA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "LYD"
    },
    {
        "CTRY_CODE": "LI",
        "CTRY_NAME": "LIECHTENSTEIN",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "CHF"
    },
    {
        "CTRY_CODE": "LT",
        "CTRY_NAME": "LITHUANIA",
        "LANG_CODE": "LT",
        "ISO_CURR_CODE": "LTL"
    },
    {
        "CTRY_CODE": "LU",
        "CTRY_NAME": "LUXEMBOURG",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MO",
        "CTRY_NAME": "MACAO",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "MOP"
    },
    {
        "CTRY_CODE": "MK",
        "CTRY_NAME": "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
        "LANG_CODE": "MK",
        "ISO_CURR_CODE": "MKD"
    },
    {
        "CTRY_CODE": "MG",
        "CTRY_NAME": "MADAGASCAR",
        "LANG_CODE": "MG",
        "ISO_CURR_CODE": "MGF"
    },
    {
        "CTRY_CODE": "MW",
        "CTRY_NAME": "MALAWI",
        "LANG_CODE": "NY",
        "ISO_CURR_CODE": "MWK"
    },
    {
        "CTRY_CODE": "MY",
        "CTRY_NAME": "MALAYSIA",
        "LANG_CODE": "MS",
        "ISO_CURR_CODE": "MYR"
    },
    {
        "CTRY_CODE": "MV",
        "CTRY_NAME": "MALDIVES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "MVR"
    },
    {
        "CTRY_CODE": "ML",
        "CTRY_NAME": "MALI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "MT",
        "CTRY_NAME": "MALTA",
        "LANG_CODE": "MT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MH",
        "CTRY_NAME": "MARSHALL ISLANDS",
        "LANG_CODE": "MH",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "MQ",
        "CTRY_NAME": "MARTINIQUE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MR",
        "CTRY_NAME": "MAURITANIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MRO"
    },
    {
        "CTRY_CODE": "MU",
        "CTRY_NAME": "MAURITIUS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "MUR"
    },
    {
        "CTRY_CODE": "YT",
        "CTRY_NAME": "MAYOTTE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MX",
        "CTRY_NAME": "MEXICO",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "MXN",
        "STATE_LABEL": "State",
        "STATES": [
            {
                "STATE_CODE": "AGU",
                "STATE_NAME": "AGUASCALIENTES"
            },
            {
                "STATE_CODE": "BCN",
                "STATE_NAME": "BAJA CALIFORNIA"
            },
            {
                "STATE_CODE": "BCS",
                "STATE_NAME": "BAJA CALIFORNIA SUR"
            },
            {
                "STATE_CODE": "CAM",
                "STATE_NAME": "CAMPECHE"
            },
            {
                "STATE_CODE": "CHP",
                "STATE_NAME": "CHIAPAS"
            },
            {
                "STATE_CODE": "CHH",
                "STATE_NAME": "CHIHUAHUA"
            },
            {
                "STATE_CODE": "COA",
                "STATE_NAME": "COAHUILA"
            },
            {
                "STATE_CODE": "COL",
                "STATE_NAME": "COLIMA"
            },
            {
                "STATE_CODE": "DIF",
                "STATE_NAME": "DISTRITO FEDERAL"
            },
            {
                "STATE_CODE": "DUR",
                "STATE_NAME": "DURANGO"
            },
            {
                "STATE_CODE": "GUA",
                "STATE_NAME": "GUANAJUATO"
            },
            {
                "STATE_CODE": "GRO",
                "STATE_NAME": "GUERRERO"
            },
            {
                "STATE_CODE": "HID",
                "STATE_NAME": "HIDALGO"
            },
            {
                "STATE_CODE": "JAL",
                "STATE_NAME": "JALISCO"
            },
            {
                "STATE_CODE": "MIC",
                "STATE_NAME": "MICHOACÁN"
            },
            {
                "STATE_CODE": "MOR",
                "STATE_NAME": "MORELOS"
            },
            {
                "STATE_CODE": "MEX",
                "STATE_NAME": "MÉXICO"
            },
            {
                "STATE_CODE": "NAY",
                "STATE_NAME": "NAYARIT"
            },
            {
                "STATE_CODE": "NLE",
                "STATE_NAME": "NUEVO LEÓN"
            },
            {
                "STATE_CODE": "OAX",
                "STATE_NAME": "OAXACA"
            },
            {
                "STATE_CODE": "PUE",
                "STATE_NAME": "PUEBLA"
            },
            {
                "STATE_CODE": "QUE",
                "STATE_NAME": "QUERÉTARO"
            },
            {
                "STATE_CODE": "ROO",
                "STATE_NAME": "QUINTANA ROO"
            },
            {
                "STATE_CODE": "SLP",
                "STATE_NAME": "SAN LUIS POTOSÍ"
            },
            {
                "STATE_CODE": "SIN",
                "STATE_NAME": "SINALOA"
            },
            {
                "STATE_CODE": "SON",
                "STATE_NAME": "SONORA"
            },
            {
                "STATE_CODE": "TAB",
                "STATE_NAME": "TABASCO"
            },
            {
                "STATE_CODE": "TAM",
                "STATE_NAME": "TAMAULIPAS"
            },
            {
                "STATE_CODE": "TLA",
                "STATE_NAME": "TLAXCALA"
            },
            {
                "STATE_CODE": "VER",
                "STATE_NAME": "VERACRUZ"
            },
            {
                "STATE_CODE": "YUC",
                "STATE_NAME": "YUCATÁN"
            },
            {
                "STATE_CODE": "ZAC",
                "STATE_NAME": "ZACATECAS"
            }
        ]
    },
    {
        "CTRY_CODE": "FM",
        "CTRY_NAME": "MICRONESIA, FEDERATED STATES OF",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "MD",
        "CTRY_NAME": "MOLDOVA, REPUBLIC OF",
        "LANG_CODE": "MO",
        "ISO_CURR_CODE": "MDL"
    },
    {
        "CTRY_CODE": "MC",
        "CTRY_NAME": "MONACO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MN",
        "CTRY_NAME": "MONGOLIA",
        "LANG_CODE": "MN",
        "ISO_CURR_CODE": "MNT"
    },
    {
        "CTRY_CODE": "ME",
        "CTRY_NAME": "MONTENEGRO",
        "LANG_CODE": "SR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MS",
        "CTRY_NAME": "MONTSERRAT",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "MA",
        "CTRY_NAME": "MOROCCO",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MAD"
    },
    {
        "CTRY_CODE": "MZ",
        "CTRY_NAME": "MOZAMBIQUE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "MZM"
    },
    {
        "CTRY_CODE": "MM",
        "CTRY_NAME": "MYANMAR",
        "LANG_CODE": "MY",
        "ISO_CURR_CODE": "MMK"
    },
    {
        "CTRY_CODE": "NA",
        "CTRY_NAME": "NAMIBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NAD"
    },
    {
        "CTRY_CODE": "NR",
        "CTRY_NAME": "NAURU",
        "LANG_CODE": "NA",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "NP",
        "CTRY_NAME": "NEPAL",
        "LANG_CODE": "NE",
        "ISO_CURR_CODE": "NPR"
    },
    {
        "CTRY_CODE": "NL",
        "CTRY_NAME": "NETHERLANDS",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "NC",
        "CTRY_NAME": "NEW CALEDONIA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "NZ",
        "CTRY_NAME": "NEW ZEALAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "NI",
        "CTRY_NAME": "NICARAGUA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NIO"
    },
    {
        "CTRY_CODE": "NE",
        "CTRY_NAME": "NIGER",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "NG",
        "CTRY_NAME": "NIGERIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NGN"
    },
    {
        "CTRY_CODE": "NU",
        "CTRY_NAME": "NIUE",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "NF",
        "CTRY_NAME": "NORFOLK ISLAND",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "XI",
        "CTRY_NAME": "NORTHERN IRELAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MP",
        "CTRY_NAME": "NORTHERN MARIANA ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "NO",
        "CTRY_NAME": "NORWAY",
        "LANG_CODE": "NORWAYGIAN",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "OM",
        "CTRY_NAME": "OMAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "OMR"
    },
    {
        "CTRY_CODE": "PK",
        "CTRY_NAME": "PAKISTAN",
        "LANG_CODE": "UR",
        "ISO_CURR_CODE": "PKR"
    },
    {
        "CTRY_CODE": "PW",
        "CTRY_NAME": "PALAU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "PS",
        "CTRY_NAME": "PALESTINE, STATE OF",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "PA",
        "CTRY_NAME": "PANAMA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PAB"
    },
    {
        "CTRY_CODE": "PG",
        "CTRY_NAME": "PAPUA NEW GUINEA",
        "LANG_CODE": "HO",
        "ISO_CURR_CODE": "PGK"
    },
    {
        "CTRY_CODE": "PY",
        "CTRY_NAME": "PARAGUAY",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PYG"
    },
    {
        "CTRY_CODE": "PE",
        "CTRY_NAME": "PERU",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PEN"
    },
    {
        "CTRY_CODE": "PH",
        "CTRY_NAME": "PHILIPPINES",
        "LANG_CODE": "TL",
        "ISO_CURR_CODE": "PHP"
    },
    {
        "CTRY_CODE": "PN",
        "CTRY_NAME": "PITCAIRN",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "PL",
        "CTRY_NAME": "POLAND",
        "LANG_CODE": "PL",
        "ISO_CURR_CODE": "PLN"
    },
    {
        "CTRY_CODE": "PT",
        "CTRY_NAME": "PORTUGAL",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PR",
        "CTRY_NAME": "PUERTO RICO",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "QA",
        "CTRY_NAME": "QATAR",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "QAR"
    },
    {
        "CTRY_CODE": "RE",
        "CTRY_NAME": "REUNION",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "RO",
        "CTRY_NAME": "ROMANIA",
        "LANG_CODE": "RO",
        "ISO_CURR_CODE": "RON"
    },
    {
        "CTRY_CODE": "RU",
        "CTRY_NAME": "RUSSIAN FEDERATION",
        "LANG_CODE": "RU",
        "ISO_CURR_CODE": "RUB"
    },
    {
        "CTRY_CODE": "RW",
        "CTRY_NAME": "RWANDA",
        "LANG_CODE": "RW",
        "ISO_CURR_CODE": "RWF"
    },
    {
        "CTRY_CODE": "BL",
        "CTRY_NAME": "SAINT BARTHELEMY",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SH",
        "CTRY_NAME": "SAINT HELENA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SHP"
    },
    {
        "CTRY_CODE": "KN",
        "CTRY_NAME": "SAINT KITTS AND NEVIS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "LC",
        "CTRY_NAME": "SAINT LUCIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "MF",
        "CTRY_NAME": "SAINT MARTIN",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PM",
        "CTRY_NAME": "SAINT PIERRE AND MIQUELON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "VC",
        "CTRY_NAME": "SAINT VINCENT AND THE GRENADINES",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "WS",
        "CTRY_NAME": "SAMOA",
        "LANG_CODE": "SM",
        "ISO_CURR_CODE": "WST"
    },
    {
        "CTRY_CODE": "SM",
        "CTRY_NAME": "SAN MARINO",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "ST",
        "CTRY_NAME": "SAO TOME AND PRINCIPE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "STD"
    },
    {
        "CTRY_CODE": "SA",
        "CTRY_NAME": "SAUDI ARABIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SAR"
    },
    {
        "CTRY_CODE": "SN",
        "CTRY_NAME": "SENEGAL",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "RS",
        "CTRY_NAME": "SERBIA",
        "LANG_CODE": "SR",
        "ISO_CURR_CODE": "RSD"
    },
    {
        "CTRY_CODE": "SC",
        "CTRY_NAME": "SEYCHELLES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SCR"
    },
    {
        "CTRY_CODE": "SL",
        "CTRY_NAME": "SIERRA LEONE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SLL"
    },
    {
        "CTRY_CODE": "SG",
        "CTRY_NAME": "SINGAPORE",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "SGD"
    },
    {
        "CTRY_CODE": "SX",
        "CTRY_NAME": "SINT MAARTEN (DUTCH PART)",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "ANG"
    },
    {
        "CTRY_CODE": "SK",
        "CTRY_NAME": "SLOVAKIA",
        "LANG_CODE": "SK",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SI",
        "CTRY_NAME": "SLOVENIA",
        "LANG_CODE": "SL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SB",
        "CTRY_NAME": "SOLOMON ISLANDS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SBD"
    },
    {
        "CTRY_CODE": "SO",
        "CTRY_NAME": "SOMALIA",
        "LANG_CODE": "SO",
        "ISO_CURR_CODE": "SOS"
    },
    {
        "CTRY_CODE": "ZA",
        "CTRY_NAME": "SOUTH AFRICA",
        "LANG_CODE": "AF",
        "ISO_CURR_CODE": "ZAR",
        "STATE_LABEL": "Province",
        "STATES": [
            {
                "STATE_CODE": "EC",
                "STATE_NAME": "EASTERN CAPE"
            },
            {
                "STATE_CODE": "FS",
                "STATE_NAME": "FREE STATE"
            },
            {
                "STATE_CODE": "GT",
                "STATE_NAME": "GAUTENG"
            },
            {
                "STATE_CODE": "NL",
                "STATE_NAME": "KWAZULU-NATAL"
            },
            {
                "STATE_CODE": "LP",
                "STATE_NAME": "LIMPOPO"
            },
            {
                "STATE_CODE": "MP",
                "STATE_NAME": "MPUMALANGA"
            },
            {
                "STATE_CODE": "NW",
                "STATE_NAME": "NORTH-WEST"
            },
            {
                "STATE_CODE": "NC",
                "STATE_NAME": "NORTHERN CAPE"
            },
            {
                "STATE_CODE": "WC",
                "STATE_NAME": "WESTERN CAPE"
            }
        ]
    },
    {
        "CTRY_CODE": "GS",
        "CTRY_NAME": "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
        "LANG_CODE": "EN"
    },
    {
        "CTRY_CODE": "SS",
        "CTRY_NAME": "SOUTH SUDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SSP"
    },
    {
        "CTRY_CODE": "ES",
        "CTRY_NAME": "SPAIN",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "LK",
        "CTRY_NAME": "SRI LANKA",
        "LANG_CODE": "SI",
        "ISO_CURR_CODE": "LKR"
    },
    {
        "CTRY_CODE": "SD",
        "CTRY_NAME": "SUDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SDG"
    },
    {
        "CTRY_CODE": "SR",
        "CTRY_NAME": "SURINAME",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "SRD"
    },
    {
        "CTRY_CODE": "SJ",
        "CTRY_NAME": "SVALBARD AND JAN MAYEN",
        "LANG_CODE": "NO",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "SZ",
        "CTRY_NAME": "SWAZILAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SZL"
    },
    {
        "CTRY_CODE": "SE",
        "CTRY_NAME": "SWEDEN",
        "LANG_CODE": "SV",
        "ISO_CURR_CODE": "SEK"
    },
    {
        "CTRY_CODE": "CH",
        "CTRY_NAME": "SWITZERLAND",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "CHF"
    },
    {
        "CTRY_CODE": "SY",
        "CTRY_NAME": "SYRIAN ARAB REPUBLIC",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SYP"
    },
    {
        "CTRY_CODE": "TW",
        "CTRY_NAME": "TAIWAN, PROVINCE OF CHINA",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "TWD"
    },
    {
        "CTRY_CODE": "TJ",
        "CTRY_NAME": "TAJIKISTAN",
        "LANG_CODE": "TG",
        "ISO_CURR_CODE": "TJS"
    },
    {
        "CTRY_CODE": "TZ",
        "CTRY_NAME": "TANZANIA, UNITED REPUBLIC OF",
        "LANG_CODE": "SW",
        "ISO_CURR_CODE": "TZS"
    },
    {
        "CTRY_CODE": "TH",
        "CTRY_NAME": "THAILAND",
        "LANG_CODE": "TH",
        "ISO_CURR_CODE": "THB"
    },
    {
        "CTRY_CODE": "TL",
        "CTRY_NAME": "TIMOR-LESTE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "TG",
        "CTRY_NAME": "TOGO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "TK",
        "CTRY_NAME": "TOKELAU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "TO",
        "CTRY_NAME": "TONGA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "TOP"
    },
    {
        "CTRY_CODE": "TT",
        "CTRY_NAME": "TRINIDAD AND TOBAGO",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "TTD"
    },
    {
        "CTRY_CODE": "TN",
        "CTRY_NAME": "TUNISIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "TND"
    },
    {
        "CTRY_CODE": "TR",
        "CTRY_NAME": "TURKEY",
        "LANG_CODE": "TR",
        "ISO_CURR_CODE": "TRY"
    },
    {
        "CTRY_CODE": "TM",
        "CTRY_NAME": "TURKMENISTAN",
        "LANG_CODE": "TK",
        "ISO_CURR_CODE": "TMM"
    },
    {
        "CTRY_CODE": "TC",
        "CTRY_NAME": "TURKS AND CAICOS ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "TV",
        "CTRY_NAME": "TUVALU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "UG",
        "CTRY_NAME": "UGANDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "UGX"
    },
    {
        "CTRY_CODE": "UA",
        "CTRY_NAME": "UKRAINE",
        "LANG_CODE": "UK",
        "ISO_CURR_CODE": "UAH"
    },
    {
        "CTRY_CODE": "AE",
        "CTRY_NAME": "UNITED ARAB EMIRATES",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "AED"
    },
    {
        "CTRY_CODE": "GB",
        "CTRY_NAME": "UNITED KINGDOM",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "UM",
        "CTRY_NAME": "UNITED STATES MINOR OUTLYING ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "US",
        "CTRY_NAME": "UNITED STATES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD",
        "STATES_LABEL": "State",
        "STATES": [
            {
                "STATE_CODE": "AL",
                "STATE_NAME": "ALABAMA"
            },
            {
                "STATE_CODE": "AK",
                "STATE_NAME": "ALASKA"
            },
            {
                "STATE_CODE": "AS",
                "STATE_NAME": "AMERICAN SAMOA"
            },
            {
                "STATE_CODE": "AZ",
                "STATE_NAME": "ARIZONA"
            },
            {
                "STATE_CODE": "AR",
                "STATE_NAME": "ARKANSAS"
            },
            {
                "STATE_CODE": "CA",
                "STATE_NAME": "CALIFORNIA"
            },
            {
                "STATE_CODE": "CO",
                "STATE_NAME": "COLORADO"
            },
            {
                "STATE_CODE": "CT",
                "STATE_NAME": "CONNECTICUT"
            },
            {
                "STATE_CODE": "DE",
                "STATE_NAME": "DELAWARE"
            },
            {
                "STATE_CODE": "DC",
                "STATE_NAME": "DISTRICT OF COLUMBIA"
            },
            {
                "STATE_CODE": "FL",
                "STATE_NAME": "FLORIDA"
            },
            {
                "STATE_CODE": "GA",
                "STATE_NAME": "GEORGIA"
            },
            {
                "STATE_CODE": "GU",
                "STATE_NAME": "GUAM"
            },
            {
                "STATE_CODE": "HI",
                "STATE_NAME": "HAWAII"
            },
            {
                "STATE_CODE": "ID",
                "STATE_NAME": "IDAHO"
            },
            {
                "STATE_CODE": "IL",
                "STATE_NAME": "ILLINOIS"
            },
            {
                "STATE_CODE": "IN",
                "STATE_NAME": "INDIANA"
            },
            {
                "STATE_CODE": "IA",
                "STATE_NAME": "IOWA"
            },
            {
                "STATE_CODE": "KS",
                "STATE_NAME": "KANSAS"
            },
            {
                "STATE_CODE": "KY",
                "STATE_NAME": "KENTUCKY"
            },
            {
                "STATE_CODE": "LA",
                "STATE_NAME": "LOUISIANA"
            },
            {
                "STATE_CODE": "ME",
                "STATE_NAME": "MAINE"
            },
            {
                "STATE_CODE": "MD",
                "STATE_NAME": "MARYLAND"
            },
            {
                "STATE_CODE": "MA",
                "STATE_NAME": "MASSACHUSETTS"
            },
            {
                "STATE_CODE": "MI",
                "STATE_NAME": "MICHIGAN"
            },
            {
                "STATE_CODE": "MN",
                "STATE_NAME": "MINNESOTA"
            },
            {
                "STATE_CODE": "MS",
                "STATE_NAME": "MISSISSIPPI"
            },
            {
                "STATE_CODE": "MO",
                "STATE_NAME": "MISSOURI"
            },
            {
                "STATE_CODE": "MT",
                "STATE_NAME": "MONTANA"
            },
            {
                "STATE_CODE": "NE",
                "STATE_NAME": "NEBRASKA"
            },
            {
                "STATE_CODE": "NV",
                "STATE_NAME": "NEVADA"
            },
            {
                "STATE_CODE": "NH",
                "STATE_NAME": "NEW HAMPSHIRE"
            },
            {
                "STATE_CODE": "NJ",
                "STATE_NAME": "NEW JERSEY"
            },
            {
                "STATE_CODE": "NM",
                "STATE_NAME": "NEW MEXICO"
            },
            {
                "STATE_CODE": "NY",
                "STATE_NAME": "NEW YORK"
            },
            {
                "STATE_CODE": "NC",
                "STATE_NAME": "NORTH CAROLINA"
            },
            {
                "STATE_CODE": "ND",
                "STATE_NAME": "NORTH DAKOTA"
            },
            {
                "STATE_CODE": "MP",
                "STATE_NAME": "NORTHERN MARIANA ISLANDS"
            },
            {
                "STATE_CODE": "OH",
                "STATE_NAME": "OHIO"
            },
            {
                "STATE_CODE": "OK",
                "STATE_NAME": "OKLAHOMA"
            },
            {
                "STATE_CODE": "OR",
                "STATE_NAME": "OREGON"
            },
            {
                "STATE_CODE": "PA",
                "STATE_NAME": "PENNSYLVANIA"
            },
            {
                "STATE_CODE": "PR",
                "STATE_NAME": "PUERTO RICO"
            },
            {
                "STATE_CODE": "RI",
                "STATE_NAME": "RHODE ISLAND"
            },
            {
                "STATE_CODE": "SC",
                "STATE_NAME": "SOUTH CAROLINA"
            },
            {
                "STATE_CODE": "SD",
                "STATE_NAME": "SOUTH DAKOTA"
            },
            {
                "STATE_CODE": "TN",
                "STATE_NAME": "TENNESSEE"
            },
            {
                "STATE_CODE": "TX",
                "STATE_NAME": "TEXAS"
            },
            {
                "STATE_CODE": "UM",
                "STATE_NAME": "UNITED STATES MINOR OUTLYING ISLANDS"
            },
            {
                "STATE_CODE": "UT",
                "STATE_NAME": "UTAH"
            },
            {
                "STATE_CODE": "VT",
                "STATE_NAME": "VERMONT"
            },
            {
                "STATE_CODE": "VI",
                "STATE_NAME": "VIRGIN ISLANDS, U.S."
            },
            {
                "STATE_CODE": "VA",
                "STATE_NAME": "VIRGINIA"
            },
            {
                "STATE_CODE": "WA",
                "STATE_NAME": "WASHINGTON"
            },
            {
                "STATE_CODE": "WV",
                "STATE_NAME": "WEST VIRGINIA"
            },
            {
                "STATE_CODE": "WI",
                "STATE_NAME": "WISCONSIN"
            },
            {
                "STATE_CODE": "WY",
                "STATE_NAME": "WYOMING"
            }
        ]
    },
    {
        "CTRY_CODE": "UY",
        "CTRY_NAME": "URUGUAY",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "UYU"
    },
    {
        "CTRY_CODE": "UZ",
        "CTRY_NAME": "UZBEKISTAN",
        "LANG_CODE": "UZ",
        "ISO_CURR_CODE": "UZS"
    },
    {
        "CTRY_CODE": "VU",
        "CTRY_NAME": "VANUATU",
        "LANG_CODE": "BI",
        "ISO_CURR_CODE": "VUV"
    },
    {
        "CTRY_CODE": "VE",
        "CTRY_NAME": "VENEZUELA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "VEB"
    },
    {
        "CTRY_CODE": "VN",
        "CTRY_NAME": "VIET NAM",
        "LANG_CODE": "VI",
        "ISO_CURR_CODE": "VND"
    },
    {
        "CTRY_CODE": "VG",
        "CTRY_NAME": "VIRGIN ISLANDS, BRITISH",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "VI",
        "CTRY_NAME": "VIRGIN ISLANDS, U.S.",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "WF",
        "CTRY_NAME": "WALLIS AND FUTUNA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "WE",
        "CTRY_NAME": "WEST BANK",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "EH",
        "CTRY_NAME": "WESTERN SAHARA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MAD"
    },
    {
        "CTRY_CODE": "YE",
        "CTRY_NAME": "YEMEN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "YER"
    },
    {
        "CTRY_CODE": "ZM",
        "CTRY_NAME": "ZAMBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "ZMK"
    },
    {
        "CTRY_CODE": "ZW",
        "CTRY_NAME": "ZIMBABWE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "ZWD"
    }
]

```

---

## Textarea

**Search Terms:** 'textarea', 'text area', 'UK Clearances'

**File:** `src/ds-layout-components/foundations/components/forms/text-area/TextAreaExample.tsx`

```tsx
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FormTextarea } from 'livingston-npm-components';

function TextAreaExample() {
    const [input, setInput] = useState('');

    return (
        <Form>
            <FormTextarea value={input} setValue={setInput} name='textarea' label='Textarea label' placeholder='Enter example' />
        </Form>
    );
}
export default TextAreaExample;

```

---

## Select

**Search Terms:** 'UK Clearances'

**File:** `src/ds-layout-components/foundations/components/forms/select/SelectExample.tsx`

```tsx
import { FormSelect } from 'livingston-npm-components';
import { useState } from 'react';

function SelectExample() {
    const [value, setValue] = useState<string>();
    console.log('Select value:', value);
    return (
        <>
            <FormSelect
                label='Select label'
                tooltip='this is a tooltip for the select component'
                name='selectExample'
                placeholder='Open this select menu'
                required={false}
                value={value}
                setValue={setValue}
                options={[
                    { value: 1, label: 'One' },
                    { value: 2, label: 'Two' },
                    { value: 3, label: 'Three' }
                ]}
                helpText='This is a help text for the select component'
            />
        </>
    );
}
export default SelectExample;

```

---

## Form dropdown

**File:** `src/ds-layout-components/foundations/components/forms/select/FormDropdownExample.tsx`

```tsx
import { FormDropdown } from 'livingston-npm-components';
import { useState } from 'react';

function FormDropdownExample() {
    const [example, setExample] = useState<string>('');

    return (
        <>
            <FormDropdown
                name='form-dropdown'
                label='Form Dropdown'
                helpText='This is a form dropdown help text'
                tooltip='Form dropdown tooltip'
                placeholder='Please select an option'
                options={[
                    { value: '1', label: 'Item 1' },
                    { value: '2', label: 'Item 2' },
                    { value: '3', label: 'Item 3' },
                    { value: '4', label: 'Item 4' }
                ]}
                value={example}
                onChange={(value) => {
                    setExample(value);
                }}
                variant='tertiary'
                width='full'
            />
        </>
    );
}

export default FormDropdownExample;

```

---

## Currency selector

**Search Terms:** 'npm', 'currency', 'flag', 'dropdown', 'monetary'

**File:** `src/components/form/CurrencySelectorExample.tsx`

```tsx
import { useState } from 'react';
import { CountryDetail, CurrencyType, FormMonetaryInput, Size } from 'livingston-npm-components';
import { fetchCountries } from '@/utils/countryApi';
import Form from 'react-bootstrap/Form';

export type Currency = 'USD' | 'CAD';

// Define countries with proper typing
const PREFERRED_COUNTRIES: CurrencyType[] = [
    {
        countryCode: 'US',
        countryName: 'UNITED STATES',
        currencyCode: 'USD'
    },
    {
        countryCode: 'CA',
        countryName: 'CANADA',
        currencyCode: 'CAD'
    }
];

// Pre-map the countries to CountryDetail format for reuse
const COUNTRY_DETAILS: CountryDetail[] = PREFERRED_COUNTRIES.map((country) => ({
    CTRY_CODE: country.countryCode,
    CTRY_NAME: country.countryName,
    ISO_CURR_CODE: country.currencyCode
}));

const fetchOnlyPreferredCountries = () => Promise.resolve(COUNTRY_DETAILS);

function CurrencySelectorExample() {
    const [worldCurrency, setWorldCurrency] = useState<Currency | undefined>();
    const [worldCurrency2, setWorldCurrency2] = useState<Currency | undefined>('CAD');
    const [selectedCurrency, setSelectedCurrency] = useState<Currency | undefined>();
    const [embeddedSelectedCurrency, setEmbeddedSelectedCurrency] = useState<Currency>('USD');

    return (
        <>
            <FormMonetaryInput
                label='Currency dropdown (all countries)'
                id='currency-of-sale-world'
                fetchCountries={() => fetchCountries()}
                defaultCountry={PREFERRED_COUNTRIES.find((country) => country.currencyCode === worldCurrency)?.countryCode}
                onChangeCurrency={(currency: CurrencyType) => {
                    setWorldCurrency(currency.currencyCode as Currency);
                }}
                onBlur={() => console.log('onBlur')}
                disabled={false}
                showAmount={false}
                placeholder='Select world currency'
                tooltip='This selection will be used to calculate the exchange rate for the transaction.'
                className='mb-3'
            />

            <FormMonetaryInput
                label='Currency dropdown with preferred countries (and a default country)'
                id='currency-of-sale'
                placeholder='Select currency of sale'
                fetchCountries={fetchCountries}
                preferredCountries={['CA', 'US']}
                defaultCountry={PREFERRED_COUNTRIES.find((country) => country.currencyCode === worldCurrency2)?.countryCode}
                onChangeCurrency={(currency: CurrencyType) => {
                    setWorldCurrency2(currency.currencyCode as Currency);
                }}
                onBlur={() => console.log('onBlur')}
                disabled={false}
                showAmount={false}
                className='mb-3'
            />

            <FormMonetaryInput
                label='Currency dropdown with limited selection'
                id='currency-selector-limited-countries'
                fetchCountries={fetchOnlyPreferredCountries}
                defaultCountry={PREFERRED_COUNTRIES.find((country) => country.currencyCode === selectedCurrency)?.countryCode}
                onChangeCurrency={(currency: CurrencyType) => {
                    setSelectedCurrency(currency.currencyCode as Currency);
                }}
                onBlur={() => console.log('onBlur')}
                disabled={false}
                showAmount={false}
                className='mb-3'
                placeholder='Select currency of payment method'
                tooltip='This selection will be used to calculate the exchange rate for the transaction.'
            />

            <div>
                <Form.Label className='mb-2'>Example of embedded currency selector</Form.Label>
                <div className='d-flex justify-content-between align-items-center bg-light border p-3'>
                    <div>123456 - Lennox Hearth</div>
                    <FormMonetaryInput
                        id='currency-selector-limited-countries'
                        fetchCountries={fetchOnlyPreferredCountries}
                        defaultCountry={
                            PREFERRED_COUNTRIES.find((country) => country.currencyCode === embeddedSelectedCurrency)?.countryCode
                        }
                        onChangeCurrency={(currency: CurrencyType) => {
                            setEmbeddedSelectedCurrency(currency.currencyCode as Currency);
                        }}
                        onBlur={() => console.log('onBlur')}
                        disabled={false}
                        showAmount={false}
                        size={Size.Small}
                    />
                </div>
            </div>
        </>
    );
}

export default CurrencySelectorExample;

```

---

## Multi country select

**Search Terms:** 'npm', 'selector', 'checkbox', 'multiselect', 'country', 'flag'

### Source File 1: `src/ds-layout-components/foundations/components/forms/multi-country-select/MultiCountrySelectExample.tsx`

```tsx
import { useState } from 'react';
import { FormMultiCountrySelect } from 'livingston-npm-components';
import { fetchCountries } from '@/utils/countryApi';

const MultiCountrySelectExample = () => {
    const [selectedCountryCodes, setSelectedCountryCodes] = useState('');

    return (
        <div className='form-group'>
            <FormMultiCountrySelect
                name='example-multi-select'
                label='Multi country select label'
                placeholder='Select country of origin'
                selectedCodes={selectedCountryCodes}
                setSelectedCodes={setSelectedCountryCodes}
                fetchCountries={fetchCountries}
                tooltip='tooltip'
                helpText='Help text'
            />
        </div>
    );
};
export default MultiCountrySelectExample;

```

### Source File 2: `src/utils/countryApi.ts`

```tsx
import { CountryDetail, ProvinceDetail } from 'livingston-npm-components';
import countryData from './country-data.json';

export const fetchCountries = () => {
    return new Promise<CountryDetail[]>((resolve) => {
        console.log('fake api to get country data');
        setTimeout(() => resolve(countryData), 3000);
    });
};

export const fetchProvinces = (countryCode: string): Promise<ProvinceDetail[]> => {
    return new Promise<ProvinceDetail[]>((resolve) => {
        const foundCountry = countryData.find((country) => country.CTRY_CODE === countryCode);
        console.log('fake api to get provinces api', countryCode, foundCountry);
        setTimeout(() => {
            resolve(
                foundCountry && foundCountry.STATES
                    ? foundCountry.STATES.map((state) => ({ name: state.STATE_NAME, code: state.STATE_CODE }))
                    : []
            );
        }, 3000);
    });
};

```

### Source File 3: `src/utils/country-data.json`

```tsx
[
    {
        "CTRY_CODE": "AF",
        "CTRY_NAME": "AFGHANISTAN",
        "LANG_CODE": "PS",
        "ISO_CURR_CODE": "AFN"
    },
    {
        "CTRY_CODE": "AX",
        "CTRY_NAME": "ALAND ISLANDS",
        "LANG_CODE": "FI",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AL",
        "CTRY_NAME": "ALBANIA",
        "LANG_CODE": "SQ",
        "ISO_CURR_CODE": "ALL"
    },
    {
        "CTRY_CODE": "CA",
        "CTRY_NAME": "CANADA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "CAD",
        "STATE_LABEL": "Province",
        "STATES": [
            {
                "STATE_CODE": "AB",
                "STATE_NAME": "ALBERTA"
            },
            {
                "STATE_CODE": "BC",
                "STATE_NAME": "BRITISH COLUMBIA"
            },
            {
                "STATE_CODE": "MB",
                "STATE_NAME": "MANITOBA"
            },
            {
                "STATE_CODE": "NB",
                "STATE_NAME": "NEW BRUNSWICK"
            },
            {
                "STATE_CODE": "NL",
                "STATE_NAME": "NEWFOUNDLAND AND LABRADOR"
            },
            {
                "STATE_CODE": "NT",
                "STATE_NAME": "NORTHWEST TERRITORIES"
            },
            {
                "STATE_CODE": "NS",
                "STATE_NAME": "NOVA SCOTIA"
            },
            {
                "STATE_CODE": "NU",
                "STATE_NAME": "NUNAVUT"
            },
            {
                "STATE_CODE": "ON",
                "STATE_NAME": "ONTARIO"
            },
            {
                "STATE_CODE": "PE",
                "STATE_NAME": "PRINCE EDWARD ISLAND"
            },
            {
                "STATE_CODE": "QC",
                "STATE_NAME": "QUEBEC"
            },
            {
                "STATE_CODE": "SK",
                "STATE_NAME": "SASKATCHEWAN"
            },
            {
                "STATE_CODE": "YT",
                "STATE_NAME": "YUKON TERRITORY"
            }
        ]
    },
    {
        "CTRY_CODE": "DZ",
        "CTRY_NAME": "ALGERIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "DZD"
    },
    {
        "CTRY_CODE": "AS",
        "CTRY_NAME": "AMERICAN SAMOA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "AD",
        "CTRY_NAME": "ANDORRA",
        "LANG_CODE": "CA",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AO",
        "CTRY_NAME": "ANGOLA",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "AOA"
    },
    {
        "CTRY_CODE": "AI",
        "CTRY_NAME": "ANGUILLA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "AQ",
        "CTRY_NAME": "ANTARCTICA"
    },
    {
        "CTRY_CODE": "AG",
        "CTRY_NAME": "ANTIGUA AND BARBUDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "AR",
        "CTRY_NAME": "ARGENTINA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "ARS"
    },
    {
        "CTRY_CODE": "AM",
        "CTRY_NAME": "ARMENIA",
        "LANG_CODE": "HY",
        "ISO_CURR_CODE": "AMD"
    },
    {
        "CTRY_CODE": "AW",
        "CTRY_NAME": "ARUBA",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "AWG"
    },
    {
        "CTRY_CODE": "AU",
        "CTRY_NAME": "AUSTRALIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "AT",
        "CTRY_NAME": "AUSTRIA",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AZ",
        "CTRY_NAME": "AZERBAIJAN",
        "LANG_CODE": "AZ",
        "ISO_CURR_CODE": "AZM"
    },
    {
        "CTRY_CODE": "BS",
        "CTRY_NAME": "BAHAMAS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BSD"
    },
    {
        "CTRY_CODE": "BH",
        "CTRY_NAME": "BAHRAIN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "BHD"
    },
    {
        "CTRY_CODE": "BD",
        "CTRY_NAME": "BANGLADESH",
        "LANG_CODE": "BN",
        "ISO_CURR_CODE": "BDT"
    },
    {
        "CTRY_CODE": "BB",
        "CTRY_NAME": "BARBADOS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BBD"
    },
    {
        "CTRY_CODE": "BY",
        "CTRY_NAME": "BELARUS",
        "LANG_CODE": "BE",
        "ISO_CURR_CODE": "BYR"
    },
    {
        "CTRY_CODE": "BE",
        "CTRY_NAME": "BELGIUM",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "BZ",
        "CTRY_NAME": "BELIZE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BZD"
    },
    {
        "CTRY_CODE": "BJ",
        "CTRY_NAME": "BENIN",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "BM",
        "CTRY_NAME": "BERMUDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BMD"
    },
    {
        "CTRY_CODE": "BT",
        "CTRY_NAME": "BHUTAN",
        "LANG_CODE": "DZ",
        "ISO_CURR_CODE": "BTN"
    },
    {
        "CTRY_CODE": "BO",
        "CTRY_NAME": "BOLIVIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "BOB"
    },
    {
        "CTRY_CODE": "BQ",
        "CTRY_NAME": "BONAIRE, SAINT EUSTATIUS AND SABA",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "BA",
        "CTRY_NAME": "BOSNIA AND HERZEGOVINA",
        "LANG_CODE": "BS",
        "ISO_CURR_CODE": "BAM"
    },
    {
        "CTRY_CODE": "BW",
        "CTRY_NAME": "BOTSWANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BWP"
    },
    {
        "CTRY_CODE": "BV",
        "CTRY_NAME": "BOUVET ISLAND",
        "LANG_CODE": "NO",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "BR",
        "CTRY_NAME": "BRAZIL",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "BRL"
    },
    {
        "CTRY_CODE": "IO",
        "CTRY_NAME": "BRITISH INDIAN OCEAN TERRITORY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "BN",
        "CTRY_NAME": "BRUNEI DARUSSALAM",
        "LANG_CODE": "MS",
        "ISO_CURR_CODE": "BND"
    },
    {
        "CTRY_CODE": "BG",
        "CTRY_NAME": "BULGARIA",
        "LANG_CODE": "BG",
        "ISO_CURR_CODE": "BGN"
    },
    {
        "CTRY_CODE": "BF",
        "CTRY_NAME": "BURKINA FASO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "BI",
        "CTRY_NAME": "BURUNDI",
        "LANG_CODE": "RN",
        "ISO_CURR_CODE": "BIF"
    },
    {
        "CTRY_CODE": "KH",
        "CTRY_NAME": "CAMBODIA",
        "LANG_CODE": "KM",
        "ISO_CURR_CODE": "KHR"
    },
    {
        "CTRY_CODE": "CM",
        "CTRY_NAME": "CAMEROON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CV",
        "CTRY_NAME": "CAPE VERDE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "CVE"
    },
    {
        "CTRY_CODE": "KY",
        "CTRY_NAME": "CAYMAN ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "KYD"
    },
    {
        "CTRY_CODE": "CF",
        "CTRY_NAME": "CENTRAL AFRICAN REPUBLIC",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "EA",
        "CTRY_NAME": "CEUTA AND MELILLA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "TD",
        "CTRY_NAME": "CHAD",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CL",
        "CTRY_NAME": "CHILE",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CLP"
    },
    {
        "CTRY_CODE": "CN",
        "CTRY_NAME": "CHINA",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "CNY"
    },
    {
        "CTRY_CODE": "CX",
        "CTRY_NAME": "CHRISTMAS ISLAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "CC",
        "CTRY_NAME": "COCOS (KEELING) ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "CO",
        "CTRY_NAME": "COLOMBIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "COP"
    },
    {
        "CTRY_CODE": "KM",
        "CTRY_NAME": "COMOROS",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "KMF"
    },
    {
        "CTRY_CODE": "CG",
        "CTRY_NAME": "CONGO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CD",
        "CTRY_NAME": "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "CDF"
    },
    {
        "CTRY_CODE": "CK",
        "CTRY_NAME": "COOK ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "CR",
        "CTRY_NAME": "COSTA RICA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CRC"
    },
    {
        "CTRY_CODE": "CI",
        "CTRY_NAME": "COTE D'IVOIRE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "QU",
        "CTRY_NAME": "COUNTRIES AND TERRITORIES NOT SPECIFIED"
    },
    {
        "CTRY_CODE": "HR",
        "CTRY_NAME": "CROATIA",
        "LANG_CODE": "HR",
        "ISO_CURR_CODE": "HRK"
    },
    {
        "CTRY_CODE": "CU",
        "CTRY_NAME": "CUBA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CUP"
    },
    {
        "CTRY_CODE": "CW",
        "CTRY_NAME": "CURACAO",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "ANG"
    },
    {
        "CTRY_CODE": "CY",
        "CTRY_NAME": "CYPRUS",
        "LANG_CODE": "EL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "CZ",
        "CTRY_NAME": "CZECH REPUBLIC",
        "LANG_CODE": "CS",
        "ISO_CURR_CODE": "CZK"
    },
    {
        "CTRY_CODE": "DK",
        "CTRY_NAME": "DENMARK",
        "LANG_CODE": "DA",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "DJ",
        "CTRY_NAME": "DJIBOUTI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "DJF"
    },
    {
        "CTRY_CODE": "DM",
        "CTRY_NAME": "DOMINICA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "DO",
        "CTRY_NAME": "DOMINICAN REPUBLIC",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "DOP"
    },
    {
        "CTRY_CODE": "EC",
        "CTRY_NAME": "ECUADOR",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "EG",
        "CTRY_NAME": "EGYPT",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "EGP"
    },
    {
        "CTRY_CODE": "SV",
        "CTRY_NAME": "EL SALVADOR",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SVC"
    },
    {
        "CTRY_CODE": "GQ",
        "CTRY_NAME": "EQUATORIAL GUINEA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "ER",
        "CTRY_NAME": "ERITREA",
        "LANG_CODE": "TI",
        "ISO_CURR_CODE": "ERN"
    },
    {
        "CTRY_CODE": "EE",
        "CTRY_NAME": "ESTONIA",
        "LANG_CODE": "ET",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "ET",
        "CTRY_NAME": "ETHIOPIA",
        "LANG_CODE": "AM",
        "ISO_CURR_CODE": "ETB"
    },
    {
        "CTRY_CODE": "FK",
        "CTRY_NAME": "FALKLAND ISLANDS (MALVINAS)",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "FKP"
    },
    {
        "CTRY_CODE": "FO",
        "CTRY_NAME": "FAROE ISLANDS",
        "LANG_CODE": "FO",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "FJ",
        "CTRY_NAME": "FIJI",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "FJD"
    },
    {
        "CTRY_CODE": "FI",
        "CTRY_NAME": "FINLAND",
        "LANG_CODE": "FI",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "FR",
        "CTRY_NAME": "FRANCE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GF",
        "CTRY_NAME": "FRENCH GUIANA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PF",
        "CTRY_NAME": "FRENCH POLYNESIA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "TF",
        "CTRY_NAME": "FRENCH SOUTHERN TERRITORIES",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GA",
        "CTRY_NAME": "GABON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "GM",
        "CTRY_NAME": "GAMBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GMD"
    },
    {
        "CTRY_CODE": "GZ",
        "CTRY_NAME": "GAZA STRIP",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "GE",
        "CTRY_NAME": "GEORGIA",
        "LANG_CODE": "KA",
        "ISO_CURR_CODE": "GEL"
    },
    {
        "CTRY_CODE": "DE",
        "CTRY_NAME": "GERMANY",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GH",
        "CTRY_NAME": "GHANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GHC"
    },
    {
        "CTRY_CODE": "GI",
        "CTRY_NAME": "GIBRALTAR",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GIP"
    },
    {
        "CTRY_CODE": "GR",
        "CTRY_NAME": "GREECE",
        "LANG_CODE": "EL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GL",
        "CTRY_NAME": "GREENLAND",
        "LANG_CODE": "KL",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "GD",
        "CTRY_NAME": "GRENADA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "GP",
        "CTRY_NAME": "GUADELOUPE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GU",
        "CTRY_NAME": "GUAM",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "GT",
        "CTRY_NAME": "GUATEMALA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "GTQ"
    },
    {
        "CTRY_CODE": "GG",
        "CTRY_NAME": "GUERNSEY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "GN",
        "CTRY_NAME": "GUINEA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "GNF"
    },
    {
        "CTRY_CODE": "GW",
        "CTRY_NAME": "GUINEA-BISSAU",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "GY",
        "CTRY_NAME": "GUYANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GYD"
    },
    {
        "CTRY_CODE": "HT",
        "CTRY_NAME": "HAITI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "HTG"
    },
    {
        "CTRY_CODE": "HM",
        "CTRY_NAME": "HEARD ISLAND AND MCDONALD ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "VA",
        "CTRY_NAME": "HOLY SEE (VATICAN CITY STATE)",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "HN",
        "CTRY_NAME": "HONDURAS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "HNL"
    },
    {
        "CTRY_CODE": "HK",
        "CTRY_NAME": "HONG KONG",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "HKD"
    },
    {
        "CTRY_CODE": "HU",
        "CTRY_NAME": "HUNGARY",
        "LANG_CODE": "HU",
        "ISO_CURR_CODE": "HUF"
    },
    {
        "CTRY_CODE": "IS",
        "CTRY_NAME": "ICELAND",
        "LANG_CODE": "IS",
        "ISO_CURR_CODE": "ISK"
    },
    {
        "CTRY_CODE": "IN",
        "CTRY_NAME": "INDIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "INR"
    },
    {
        "CTRY_CODE": "ID",
        "CTRY_NAME": "INDONESIA",
        "LANG_CODE": "ID",
        "ISO_CURR_CODE": "IDR"
    },
    {
        "CTRY_CODE": "IR",
        "CTRY_NAME": "IRAN, ISLAMIC REPUBLIC OF",
        "LANG_CODE": "FA",
        "ISO_CURR_CODE": "IRR"
    },
    {
        "CTRY_CODE": "IQ",
        "CTRY_NAME": "IRAQ",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "IQD"
    },
    {
        "CTRY_CODE": "IE",
        "CTRY_NAME": "IRELAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "IM",
        "CTRY_NAME": "ISLE OF MAN",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "IL",
        "CTRY_NAME": "ISRAEL",
        "LANG_CODE": "HE",
        "ISO_CURR_CODE": "ILS"
    },
    {
        "CTRY_CODE": "IT",
        "CTRY_NAME": "ITALY",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "JM",
        "CTRY_NAME": "JAMAICA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "JMD"
    },
    {
        "CTRY_CODE": "JP",
        "CTRY_NAME": "JAPAN",
        "LANG_CODE": "JA",
        "ISO_CURR_CODE": "JPY"
    },
    {
        "CTRY_CODE": "JE",
        "CTRY_NAME": "JERSEY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "JO",
        "CTRY_NAME": "JORDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "JOD"
    },
    {
        "CTRY_CODE": "KZ",
        "CTRY_NAME": "KAZAKHSTAN",
        "LANG_CODE": "RN",
        "ISO_CURR_CODE": "KZT"
    },
    {
        "CTRY_CODE": "KE",
        "CTRY_NAME": "KENYA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "KES"
    },
    {
        "CTRY_CODE": "KI",
        "CTRY_NAME": "KIRIBATI",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "KP",
        "CTRY_NAME": "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
        "LANG_CODE": "KO",
        "ISO_CURR_CODE": "KPW"
    },
    {
        "CTRY_CODE": "KR",
        "CTRY_NAME": "KOREA, REPUBLIC OF",
        "LANG_CODE": "KO",
        "ISO_CURR_CODE": "KRW"
    },
    {
        "CTRY_CODE": "XK",
        "CTRY_NAME": "KOSOVO",
        "LANG_CODE": "AL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "KW",
        "CTRY_NAME": "KUWAIT",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "KWD"
    },
    {
        "CTRY_CODE": "KG",
        "CTRY_NAME": "KYRGYZSTAN",
        "LANG_CODE": "KY",
        "ISO_CURR_CODE": "KGS"
    },
    {
        "CTRY_CODE": "LA",
        "CTRY_NAME": "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
        "LANG_CODE": "LO",
        "ISO_CURR_CODE": "LAK"
    },
    {
        "CTRY_CODE": "LV",
        "CTRY_NAME": "LATVIA",
        "LANG_CODE": "LV",
        "ISO_CURR_CODE": "LVL"
    },
    {
        "CTRY_CODE": "LB",
        "CTRY_NAME": "LEBANON",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "LBP"
    },
    {
        "CTRY_CODE": "LS",
        "CTRY_NAME": "LESOTHO",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "LSL"
    },
    {
        "CTRY_CODE": "LR",
        "CTRY_NAME": "LIBERIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "LRD"
    },
    {
        "CTRY_CODE": "LY",
        "CTRY_NAME": "LIBYA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "LYD"
    },
    {
        "CTRY_CODE": "LI",
        "CTRY_NAME": "LIECHTENSTEIN",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "CHF"
    },
    {
        "CTRY_CODE": "LT",
        "CTRY_NAME": "LITHUANIA",
        "LANG_CODE": "LT",
        "ISO_CURR_CODE": "LTL"
    },
    {
        "CTRY_CODE": "LU",
        "CTRY_NAME": "LUXEMBOURG",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MO",
        "CTRY_NAME": "MACAO",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "MOP"
    },
    {
        "CTRY_CODE": "MK",
        "CTRY_NAME": "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
        "LANG_CODE": "MK",
        "ISO_CURR_CODE": "MKD"
    },
    {
        "CTRY_CODE": "MG",
        "CTRY_NAME": "MADAGASCAR",
        "LANG_CODE": "MG",
        "ISO_CURR_CODE": "MGF"
    },
    {
        "CTRY_CODE": "MW",
        "CTRY_NAME": "MALAWI",
        "LANG_CODE": "NY",
        "ISO_CURR_CODE": "MWK"
    },
    {
        "CTRY_CODE": "MY",
        "CTRY_NAME": "MALAYSIA",
        "LANG_CODE": "MS",
        "ISO_CURR_CODE": "MYR"
    },
    {
        "CTRY_CODE": "MV",
        "CTRY_NAME": "MALDIVES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "MVR"
    },
    {
        "CTRY_CODE": "ML",
        "CTRY_NAME": "MALI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "MT",
        "CTRY_NAME": "MALTA",
        "LANG_CODE": "MT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MH",
        "CTRY_NAME": "MARSHALL ISLANDS",
        "LANG_CODE": "MH",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "MQ",
        "CTRY_NAME": "MARTINIQUE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MR",
        "CTRY_NAME": "MAURITANIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MRO"
    },
    {
        "CTRY_CODE": "MU",
        "CTRY_NAME": "MAURITIUS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "MUR"
    },
    {
        "CTRY_CODE": "YT",
        "CTRY_NAME": "MAYOTTE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MX",
        "CTRY_NAME": "MEXICO",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "MXN",
        "STATE_LABEL": "State",
        "STATES": [
            {
                "STATE_CODE": "AGU",
                "STATE_NAME": "AGUASCALIENTES"
            },
            {
                "STATE_CODE": "BCN",
                "STATE_NAME": "BAJA CALIFORNIA"
            },
            {
                "STATE_CODE": "BCS",
                "STATE_NAME": "BAJA CALIFORNIA SUR"
            },
            {
                "STATE_CODE": "CAM",
                "STATE_NAME": "CAMPECHE"
            },
            {
                "STATE_CODE": "CHP",
                "STATE_NAME": "CHIAPAS"
            },
            {
                "STATE_CODE": "CHH",
                "STATE_NAME": "CHIHUAHUA"
            },
            {
                "STATE_CODE": "COA",
                "STATE_NAME": "COAHUILA"
            },
            {
                "STATE_CODE": "COL",
                "STATE_NAME": "COLIMA"
            },
            {
                "STATE_CODE": "DIF",
                "STATE_NAME": "DISTRITO FEDERAL"
            },
            {
                "STATE_CODE": "DUR",
                "STATE_NAME": "DURANGO"
            },
            {
                "STATE_CODE": "GUA",
                "STATE_NAME": "GUANAJUATO"
            },
            {
                "STATE_CODE": "GRO",
                "STATE_NAME": "GUERRERO"
            },
            {
                "STATE_CODE": "HID",
                "STATE_NAME": "HIDALGO"
            },
            {
                "STATE_CODE": "JAL",
                "STATE_NAME": "JALISCO"
            },
            {
                "STATE_CODE": "MIC",
                "STATE_NAME": "MICHOACÁN"
            },
            {
                "STATE_CODE": "MOR",
                "STATE_NAME": "MORELOS"
            },
            {
                "STATE_CODE": "MEX",
                "STATE_NAME": "MÉXICO"
            },
            {
                "STATE_CODE": "NAY",
                "STATE_NAME": "NAYARIT"
            },
            {
                "STATE_CODE": "NLE",
                "STATE_NAME": "NUEVO LEÓN"
            },
            {
                "STATE_CODE": "OAX",
                "STATE_NAME": "OAXACA"
            },
            {
                "STATE_CODE": "PUE",
                "STATE_NAME": "PUEBLA"
            },
            {
                "STATE_CODE": "QUE",
                "STATE_NAME": "QUERÉTARO"
            },
            {
                "STATE_CODE": "ROO",
                "STATE_NAME": "QUINTANA ROO"
            },
            {
                "STATE_CODE": "SLP",
                "STATE_NAME": "SAN LUIS POTOSÍ"
            },
            {
                "STATE_CODE": "SIN",
                "STATE_NAME": "SINALOA"
            },
            {
                "STATE_CODE": "SON",
                "STATE_NAME": "SONORA"
            },
            {
                "STATE_CODE": "TAB",
                "STATE_NAME": "TABASCO"
            },
            {
                "STATE_CODE": "TAM",
                "STATE_NAME": "TAMAULIPAS"
            },
            {
                "STATE_CODE": "TLA",
                "STATE_NAME": "TLAXCALA"
            },
            {
                "STATE_CODE": "VER",
                "STATE_NAME": "VERACRUZ"
            },
            {
                "STATE_CODE": "YUC",
                "STATE_NAME": "YUCATÁN"
            },
            {
                "STATE_CODE": "ZAC",
                "STATE_NAME": "ZACATECAS"
            }
        ]
    },
    {
        "CTRY_CODE": "FM",
        "CTRY_NAME": "MICRONESIA, FEDERATED STATES OF",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "MD",
        "CTRY_NAME": "MOLDOVA, REPUBLIC OF",
        "LANG_CODE": "MO",
        "ISO_CURR_CODE": "MDL"
    },
    {
        "CTRY_CODE": "MC",
        "CTRY_NAME": "MONACO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MN",
        "CTRY_NAME": "MONGOLIA",
        "LANG_CODE": "MN",
        "ISO_CURR_CODE": "MNT"
    },
    {
        "CTRY_CODE": "ME",
        "CTRY_NAME": "MONTENEGRO",
        "LANG_CODE": "SR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MS",
        "CTRY_NAME": "MONTSERRAT",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "MA",
        "CTRY_NAME": "MOROCCO",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MAD"
    },
    {
        "CTRY_CODE": "MZ",
        "CTRY_NAME": "MOZAMBIQUE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "MZM"
    },
    {
        "CTRY_CODE": "MM",
        "CTRY_NAME": "MYANMAR",
        "LANG_CODE": "MY",
        "ISO_CURR_CODE": "MMK"
    },
    {
        "CTRY_CODE": "NA",
        "CTRY_NAME": "NAMIBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NAD"
    },
    {
        "CTRY_CODE": "NR",
        "CTRY_NAME": "NAURU",
        "LANG_CODE": "NA",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "NP",
        "CTRY_NAME": "NEPAL",
        "LANG_CODE": "NE",
        "ISO_CURR_CODE": "NPR"
    },
    {
        "CTRY_CODE": "NL",
        "CTRY_NAME": "NETHERLANDS",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "NC",
        "CTRY_NAME": "NEW CALEDONIA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "NZ",
        "CTRY_NAME": "NEW ZEALAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "NI",
        "CTRY_NAME": "NICARAGUA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NIO"
    },
    {
        "CTRY_CODE": "NE",
        "CTRY_NAME": "NIGER",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "NG",
        "CTRY_NAME": "NIGERIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NGN"
    },
    {
        "CTRY_CODE": "NU",
        "CTRY_NAME": "NIUE",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "NF",
        "CTRY_NAME": "NORFOLK ISLAND",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "XI",
        "CTRY_NAME": "NORTHERN IRELAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MP",
        "CTRY_NAME": "NORTHERN MARIANA ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "NO",
        "CTRY_NAME": "NORWAY",
        "LANG_CODE": "NORWAYGIAN",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "OM",
        "CTRY_NAME": "OMAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "OMR"
    },
    {
        "CTRY_CODE": "PK",
        "CTRY_NAME": "PAKISTAN",
        "LANG_CODE": "UR",
        "ISO_CURR_CODE": "PKR"
    },
    {
        "CTRY_CODE": "PW",
        "CTRY_NAME": "PALAU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "PS",
        "CTRY_NAME": "PALESTINE, STATE OF",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "PA",
        "CTRY_NAME": "PANAMA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PAB"
    },
    {
        "CTRY_CODE": "PG",
        "CTRY_NAME": "PAPUA NEW GUINEA",
        "LANG_CODE": "HO",
        "ISO_CURR_CODE": "PGK"
    },
    {
        "CTRY_CODE": "PY",
        "CTRY_NAME": "PARAGUAY",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PYG"
    },
    {
        "CTRY_CODE": "PE",
        "CTRY_NAME": "PERU",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PEN"
    },
    {
        "CTRY_CODE": "PH",
        "CTRY_NAME": "PHILIPPINES",
        "LANG_CODE": "TL",
        "ISO_CURR_CODE": "PHP"
    },
    {
        "CTRY_CODE": "PN",
        "CTRY_NAME": "PITCAIRN",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "PL",
        "CTRY_NAME": "POLAND",
        "LANG_CODE": "PL",
        "ISO_CURR_CODE": "PLN"
    },
    {
        "CTRY_CODE": "PT",
        "CTRY_NAME": "PORTUGAL",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PR",
        "CTRY_NAME": "PUERTO RICO",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "QA",
        "CTRY_NAME": "QATAR",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "QAR"
    },
    {
        "CTRY_CODE": "RE",
        "CTRY_NAME": "REUNION",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "RO",
        "CTRY_NAME": "ROMANIA",
        "LANG_CODE": "RO",
        "ISO_CURR_CODE": "RON"
    },
    {
        "CTRY_CODE": "RU",
        "CTRY_NAME": "RUSSIAN FEDERATION",
        "LANG_CODE": "RU",
        "ISO_CURR_CODE": "RUB"
    },
    {
        "CTRY_CODE": "RW",
        "CTRY_NAME": "RWANDA",
        "LANG_CODE": "RW",
        "ISO_CURR_CODE": "RWF"
    },
    {
        "CTRY_CODE": "BL",
        "CTRY_NAME": "SAINT BARTHELEMY",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SH",
        "CTRY_NAME": "SAINT HELENA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SHP"
    },
    {
        "CTRY_CODE": "KN",
        "CTRY_NAME": "SAINT KITTS AND NEVIS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "LC",
        "CTRY_NAME": "SAINT LUCIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "MF",
        "CTRY_NAME": "SAINT MARTIN",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PM",
        "CTRY_NAME": "SAINT PIERRE AND MIQUELON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "VC",
        "CTRY_NAME": "SAINT VINCENT AND THE GRENADINES",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "WS",
        "CTRY_NAME": "SAMOA",
        "LANG_CODE": "SM",
        "ISO_CURR_CODE": "WST"
    },
    {
        "CTRY_CODE": "SM",
        "CTRY_NAME": "SAN MARINO",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "ST",
        "CTRY_NAME": "SAO TOME AND PRINCIPE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "STD"
    },
    {
        "CTRY_CODE": "SA",
        "CTRY_NAME": "SAUDI ARABIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SAR"
    },
    {
        "CTRY_CODE": "SN",
        "CTRY_NAME": "SENEGAL",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "RS",
        "CTRY_NAME": "SERBIA",
        "LANG_CODE": "SR",
        "ISO_CURR_CODE": "RSD"
    },
    {
        "CTRY_CODE": "SC",
        "CTRY_NAME": "SEYCHELLES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SCR"
    },
    {
        "CTRY_CODE": "SL",
        "CTRY_NAME": "SIERRA LEONE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SLL"
    },
    {
        "CTRY_CODE": "SG",
        "CTRY_NAME": "SINGAPORE",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "SGD"
    },
    {
        "CTRY_CODE": "SX",
        "CTRY_NAME": "SINT MAARTEN (DUTCH PART)",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "ANG"
    },
    {
        "CTRY_CODE": "SK",
        "CTRY_NAME": "SLOVAKIA",
        "LANG_CODE": "SK",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SI",
        "CTRY_NAME": "SLOVENIA",
        "LANG_CODE": "SL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SB",
        "CTRY_NAME": "SOLOMON ISLANDS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SBD"
    },
    {
        "CTRY_CODE": "SO",
        "CTRY_NAME": "SOMALIA",
        "LANG_CODE": "SO",
        "ISO_CURR_CODE": "SOS"
    },
    {
        "CTRY_CODE": "ZA",
        "CTRY_NAME": "SOUTH AFRICA",
        "LANG_CODE": "AF",
        "ISO_CURR_CODE": "ZAR",
        "STATE_LABEL": "Province",
        "STATES": [
            {
                "STATE_CODE": "EC",
                "STATE_NAME": "EASTERN CAPE"
            },
            {
                "STATE_CODE": "FS",
                "STATE_NAME": "FREE STATE"
            },
            {
                "STATE_CODE": "GT",
                "STATE_NAME": "GAUTENG"
            },
            {
                "STATE_CODE": "NL",
                "STATE_NAME": "KWAZULU-NATAL"
            },
            {
                "STATE_CODE": "LP",
                "STATE_NAME": "LIMPOPO"
            },
            {
                "STATE_CODE": "MP",
                "STATE_NAME": "MPUMALANGA"
            },
            {
                "STATE_CODE": "NW",
                "STATE_NAME": "NORTH-WEST"
            },
            {
                "STATE_CODE": "NC",
                "STATE_NAME": "NORTHERN CAPE"
            },
            {
                "STATE_CODE": "WC",
                "STATE_NAME": "WESTERN CAPE"
            }
        ]
    },
    {
        "CTRY_CODE": "GS",
        "CTRY_NAME": "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
        "LANG_CODE": "EN"
    },
    {
        "CTRY_CODE": "SS",
        "CTRY_NAME": "SOUTH SUDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SSP"
    },
    {
        "CTRY_CODE": "ES",
        "CTRY_NAME": "SPAIN",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "LK",
        "CTRY_NAME": "SRI LANKA",
        "LANG_CODE": "SI",
        "ISO_CURR_CODE": "LKR"
    },
    {
        "CTRY_CODE": "SD",
        "CTRY_NAME": "SUDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SDG"
    },
    {
        "CTRY_CODE": "SR",
        "CTRY_NAME": "SURINAME",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "SRD"
    },
    {
        "CTRY_CODE": "SJ",
        "CTRY_NAME": "SVALBARD AND JAN MAYEN",
        "LANG_CODE": "NO",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "SZ",
        "CTRY_NAME": "SWAZILAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SZL"
    },
    {
        "CTRY_CODE": "SE",
        "CTRY_NAME": "SWEDEN",
        "LANG_CODE": "SV",
        "ISO_CURR_CODE": "SEK"
    },
    {
        "CTRY_CODE": "CH",
        "CTRY_NAME": "SWITZERLAND",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "CHF"
    },
    {
        "CTRY_CODE": "SY",
        "CTRY_NAME": "SYRIAN ARAB REPUBLIC",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SYP"
    },
    {
        "CTRY_CODE": "TW",
        "CTRY_NAME": "TAIWAN, PROVINCE OF CHINA",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "TWD"
    },
    {
        "CTRY_CODE": "TJ",
        "CTRY_NAME": "TAJIKISTAN",
        "LANG_CODE": "TG",
        "ISO_CURR_CODE": "TJS"
    },
    {
        "CTRY_CODE": "TZ",
        "CTRY_NAME": "TANZANIA, UNITED REPUBLIC OF",
        "LANG_CODE": "SW",
        "ISO_CURR_CODE": "TZS"
    },
    {
        "CTRY_CODE": "TH",
        "CTRY_NAME": "THAILAND",
        "LANG_CODE": "TH",
        "ISO_CURR_CODE": "THB"
    },
    {
        "CTRY_CODE": "TL",
        "CTRY_NAME": "TIMOR-LESTE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "TG",
        "CTRY_NAME": "TOGO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "TK",
        "CTRY_NAME": "TOKELAU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "TO",
        "CTRY_NAME": "TONGA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "TOP"
    },
    {
        "CTRY_CODE": "TT",
        "CTRY_NAME": "TRINIDAD AND TOBAGO",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "TTD"
    },
    {
        "CTRY_CODE": "TN",
        "CTRY_NAME": "TUNISIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "TND"
    },
    {
        "CTRY_CODE": "TR",
        "CTRY_NAME": "TURKEY",
        "LANG_CODE": "TR",
        "ISO_CURR_CODE": "TRY"
    },
    {
        "CTRY_CODE": "TM",
        "CTRY_NAME": "TURKMENISTAN",
        "LANG_CODE": "TK",
        "ISO_CURR_CODE": "TMM"
    },
    {
        "CTRY_CODE": "TC",
        "CTRY_NAME": "TURKS AND CAICOS ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "TV",
        "CTRY_NAME": "TUVALU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "UG",
        "CTRY_NAME": "UGANDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "UGX"
    },
    {
        "CTRY_CODE": "UA",
        "CTRY_NAME": "UKRAINE",
        "LANG_CODE": "UK",
        "ISO_CURR_CODE": "UAH"
    },
    {
        "CTRY_CODE": "AE",
        "CTRY_NAME": "UNITED ARAB EMIRATES",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "AED"
    },
    {
        "CTRY_CODE": "GB",
        "CTRY_NAME": "UNITED KINGDOM",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "UM",
        "CTRY_NAME": "UNITED STATES MINOR OUTLYING ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "US",
        "CTRY_NAME": "UNITED STATES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD",
        "STATES_LABEL": "State",
        "STATES": [
            {
                "STATE_CODE": "AL",
                "STATE_NAME": "ALABAMA"
            },
            {
                "STATE_CODE": "AK",
                "STATE_NAME": "ALASKA"
            },
            {
                "STATE_CODE": "AS",
                "STATE_NAME": "AMERICAN SAMOA"
            },
            {
                "STATE_CODE": "AZ",
                "STATE_NAME": "ARIZONA"
            },
            {
                "STATE_CODE": "AR",
                "STATE_NAME": "ARKANSAS"
            },
            {
                "STATE_CODE": "CA",
                "STATE_NAME": "CALIFORNIA"
            },
            {
                "STATE_CODE": "CO",
                "STATE_NAME": "COLORADO"
            },
            {
                "STATE_CODE": "CT",
                "STATE_NAME": "CONNECTICUT"
            },
            {
                "STATE_CODE": "DE",
                "STATE_NAME": "DELAWARE"
            },
            {
                "STATE_CODE": "DC",
                "STATE_NAME": "DISTRICT OF COLUMBIA"
            },
            {
                "STATE_CODE": "FL",
                "STATE_NAME": "FLORIDA"
            },
            {
                "STATE_CODE": "GA",
                "STATE_NAME": "GEORGIA"
            },
            {
                "STATE_CODE": "GU",
                "STATE_NAME": "GUAM"
            },
            {
                "STATE_CODE": "HI",
                "STATE_NAME": "HAWAII"
            },
            {
                "STATE_CODE": "ID",
                "STATE_NAME": "IDAHO"
            },
            {
                "STATE_CODE": "IL",
                "STATE_NAME": "ILLINOIS"
            },
            {
                "STATE_CODE": "IN",
                "STATE_NAME": "INDIANA"
            },
            {
                "STATE_CODE": "IA",
                "STATE_NAME": "IOWA"
            },
            {
                "STATE_CODE": "KS",
                "STATE_NAME": "KANSAS"
            },
            {
                "STATE_CODE": "KY",
                "STATE_NAME": "KENTUCKY"
            },
            {
                "STATE_CODE": "LA",
                "STATE_NAME": "LOUISIANA"
            },
            {
                "STATE_CODE": "ME",
                "STATE_NAME": "MAINE"
            },
            {
                "STATE_CODE": "MD",
                "STATE_NAME": "MARYLAND"
            },
            {
                "STATE_CODE": "MA",
                "STATE_NAME": "MASSACHUSETTS"
            },
            {
                "STATE_CODE": "MI",
                "STATE_NAME": "MICHIGAN"
            },
            {
                "STATE_CODE": "MN",
                "STATE_NAME": "MINNESOTA"
            },
            {
                "STATE_CODE": "MS",
                "STATE_NAME": "MISSISSIPPI"
            },
            {
                "STATE_CODE": "MO",
                "STATE_NAME": "MISSOURI"
            },
            {
                "STATE_CODE": "MT",
                "STATE_NAME": "MONTANA"
            },
            {
                "STATE_CODE": "NE",
                "STATE_NAME": "NEBRASKA"
            },
            {
                "STATE_CODE": "NV",
                "STATE_NAME": "NEVADA"
            },
            {
                "STATE_CODE": "NH",
                "STATE_NAME": "NEW HAMPSHIRE"
            },
            {
                "STATE_CODE": "NJ",
                "STATE_NAME": "NEW JERSEY"
            },
            {
                "STATE_CODE": "NM",
                "STATE_NAME": "NEW MEXICO"
            },
            {
                "STATE_CODE": "NY",
                "STATE_NAME": "NEW YORK"
            },
            {
                "STATE_CODE": "NC",
                "STATE_NAME": "NORTH CAROLINA"
            },
            {
                "STATE_CODE": "ND",
                "STATE_NAME": "NORTH DAKOTA"
            },
            {
                "STATE_CODE": "MP",
                "STATE_NAME": "NORTHERN MARIANA ISLANDS"
            },
            {
                "STATE_CODE": "OH",
                "STATE_NAME": "OHIO"
            },
            {
                "STATE_CODE": "OK",
                "STATE_NAME": "OKLAHOMA"
            },
            {
                "STATE_CODE": "OR",
                "STATE_NAME": "OREGON"
            },
            {
                "STATE_CODE": "PA",
                "STATE_NAME": "PENNSYLVANIA"
            },
            {
                "STATE_CODE": "PR",
                "STATE_NAME": "PUERTO RICO"
            },
            {
                "STATE_CODE": "RI",
                "STATE_NAME": "RHODE ISLAND"
            },
            {
                "STATE_CODE": "SC",
                "STATE_NAME": "SOUTH CAROLINA"
            },
            {
                "STATE_CODE": "SD",
                "STATE_NAME": "SOUTH DAKOTA"
            },
            {
                "STATE_CODE": "TN",
                "STATE_NAME": "TENNESSEE"
            },
            {
                "STATE_CODE": "TX",
                "STATE_NAME": "TEXAS"
            },
            {
                "STATE_CODE": "UM",
                "STATE_NAME": "UNITED STATES MINOR OUTLYING ISLANDS"
            },
            {
                "STATE_CODE": "UT",
                "STATE_NAME": "UTAH"
            },
            {
                "STATE_CODE": "VT",
                "STATE_NAME": "VERMONT"
            },
            {
                "STATE_CODE": "VI",
                "STATE_NAME": "VIRGIN ISLANDS, U.S."
            },
            {
                "STATE_CODE": "VA",
                "STATE_NAME": "VIRGINIA"
            },
            {
                "STATE_CODE": "WA",
                "STATE_NAME": "WASHINGTON"
            },
            {
                "STATE_CODE": "WV",
                "STATE_NAME": "WEST VIRGINIA"
            },
            {
                "STATE_CODE": "WI",
                "STATE_NAME": "WISCONSIN"
            },
            {
                "STATE_CODE": "WY",
                "STATE_NAME": "WYOMING"
            }
        ]
    },
    {
        "CTRY_CODE": "UY",
        "CTRY_NAME": "URUGUAY",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "UYU"
    },
    {
        "CTRY_CODE": "UZ",
        "CTRY_NAME": "UZBEKISTAN",
        "LANG_CODE": "UZ",
        "ISO_CURR_CODE": "UZS"
    },
    {
        "CTRY_CODE": "VU",
        "CTRY_NAME": "VANUATU",
        "LANG_CODE": "BI",
        "ISO_CURR_CODE": "VUV"
    },
    {
        "CTRY_CODE": "VE",
        "CTRY_NAME": "VENEZUELA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "VEB"
    },
    {
        "CTRY_CODE": "VN",
        "CTRY_NAME": "VIET NAM",
        "LANG_CODE": "VI",
        "ISO_CURR_CODE": "VND"
    },
    {
        "CTRY_CODE": "VG",
        "CTRY_NAME": "VIRGIN ISLANDS, BRITISH",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "VI",
        "CTRY_NAME": "VIRGIN ISLANDS, U.S.",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "WF",
        "CTRY_NAME": "WALLIS AND FUTUNA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "WE",
        "CTRY_NAME": "WEST BANK",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "EH",
        "CTRY_NAME": "WESTERN SAHARA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MAD"
    },
    {
        "CTRY_CODE": "YE",
        "CTRY_NAME": "YEMEN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "YER"
    },
    {
        "CTRY_CODE": "ZM",
        "CTRY_NAME": "ZAMBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "ZMK"
    },
    {
        "CTRY_CODE": "ZW",
        "CTRY_NAME": "ZIMBABWE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "ZWD"
    }
]

```

---

## Searchable select

**Search Terms:** 'npm'

**File:** `src/components/form/searchable-select/SearchableSelectExample.tsx`

```tsx
import { FormSearchableSelect, SearchableSelectItem } from 'livingston-npm-components';
import industries from './industries.json';
import { useEffect, useState } from 'react';

function SearchableSelectExample() {
    const [selectedItemValue, setSelectedItemValue] = useState<string | undefined>();
    const [items, setItems] = useState<SearchableSelectItem[]>([]);

    useEffect(() => {
        const transformedArray = industries.map((industry) => {
            return {
                value: industry,
                label: industry
            };
        });
        setItems(transformedArray);
    }, []);

    const getItemNode = (item: SearchableSelectItem) => {
        return <div className='truncate-text'>{item.label}</div>;
    };

    return (
        <div>
            <FormSearchableSelect
                name='searchableSelectExample'
                label='Searchable select'
                tooltip='Tooltip'
                placeholder='Select industry...'
                value={selectedItemValue}
                items={items}
                onSelect={(itemValue) => {
                    setSelectedItemValue(itemValue);
                    console.log('item selected: ', itemValue);
                }}
                getItemNode={getItemNode}
                helpText='Helper text'
            />
        </div>
    );
}

export default SearchableSelectExample;

```

---

## Country select

**Usages:** 'uk clearances'

**Search Terms:** 'npm', 'selector', 'flag', 'province', 'state', 'UK Clearances'

### Source File 1: `src/ds-layout-components/foundations/components/forms/country-select/CountrySelectExample.tsx`

```tsx
import { useState } from 'react';
import { FormCountrySelect } from 'livingston-npm-components';
import { fetchCountries } from '@/utils/countryApi.ts';

const CountrySelectExample = () => {
    const [selectedCountry1, setSelectedCountry1] = useState<string | undefined>();
    const [selectedCountry2, setSelectedCountry2] = useState<string | undefined>('US');

    return (
        <>
            <FormCountrySelect
                name='exampleSelector1'
                label='Country select (No preferred countries)'
                value={selectedCountry1}
                onChange={(value: string | undefined) => setSelectedCountry1(value)}
                fetchCountries={fetchCountries}
                helpText='help text'
                tooltip='tooltip'
                className='mb-3'
            />

            <FormCountrySelect
                name='exampleSelector2'
                label='Country select (With preferred countries and pre-selected country)'
                value={selectedCountry2}
                onChange={(value: string | undefined) => {
                    setSelectedCountry2(value);
                }}
                fetchCountries={fetchCountries}
                helpText='help text'
                tooltip='tooltip'
                preferredCountries={['CA', 'US']}
            />
        </>
    );
};
export default CountrySelectExample;

```

### Source File 2: `src/utils/countryApi.ts`

```tsx
import { CountryDetail, ProvinceDetail } from 'livingston-npm-components';
import countryData from './country-data.json';

export const fetchCountries = () => {
    return new Promise<CountryDetail[]>((resolve) => {
        console.log('fake api to get country data');
        setTimeout(() => resolve(countryData), 3000);
    });
};

export const fetchProvinces = (countryCode: string): Promise<ProvinceDetail[]> => {
    return new Promise<ProvinceDetail[]>((resolve) => {
        const foundCountry = countryData.find((country) => country.CTRY_CODE === countryCode);
        console.log('fake api to get provinces api', countryCode, foundCountry);
        setTimeout(() => {
            resolve(
                foundCountry && foundCountry.STATES
                    ? foundCountry.STATES.map((state) => ({ name: state.STATE_NAME, code: state.STATE_CODE }))
                    : []
            );
        }, 3000);
    });
};

```

### Source File 3: `src/utils/country-data.json`

```tsx
[
    {
        "CTRY_CODE": "AF",
        "CTRY_NAME": "AFGHANISTAN",
        "LANG_CODE": "PS",
        "ISO_CURR_CODE": "AFN"
    },
    {
        "CTRY_CODE": "AX",
        "CTRY_NAME": "ALAND ISLANDS",
        "LANG_CODE": "FI",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AL",
        "CTRY_NAME": "ALBANIA",
        "LANG_CODE": "SQ",
        "ISO_CURR_CODE": "ALL"
    },
    {
        "CTRY_CODE": "CA",
        "CTRY_NAME": "CANADA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "CAD",
        "STATE_LABEL": "Province",
        "STATES": [
            {
                "STATE_CODE": "AB",
                "STATE_NAME": "ALBERTA"
            },
            {
                "STATE_CODE": "BC",
                "STATE_NAME": "BRITISH COLUMBIA"
            },
            {
                "STATE_CODE": "MB",
                "STATE_NAME": "MANITOBA"
            },
            {
                "STATE_CODE": "NB",
                "STATE_NAME": "NEW BRUNSWICK"
            },
            {
                "STATE_CODE": "NL",
                "STATE_NAME": "NEWFOUNDLAND AND LABRADOR"
            },
            {
                "STATE_CODE": "NT",
                "STATE_NAME": "NORTHWEST TERRITORIES"
            },
            {
                "STATE_CODE": "NS",
                "STATE_NAME": "NOVA SCOTIA"
            },
            {
                "STATE_CODE": "NU",
                "STATE_NAME": "NUNAVUT"
            },
            {
                "STATE_CODE": "ON",
                "STATE_NAME": "ONTARIO"
            },
            {
                "STATE_CODE": "PE",
                "STATE_NAME": "PRINCE EDWARD ISLAND"
            },
            {
                "STATE_CODE": "QC",
                "STATE_NAME": "QUEBEC"
            },
            {
                "STATE_CODE": "SK",
                "STATE_NAME": "SASKATCHEWAN"
            },
            {
                "STATE_CODE": "YT",
                "STATE_NAME": "YUKON TERRITORY"
            }
        ]
    },
    {
        "CTRY_CODE": "DZ",
        "CTRY_NAME": "ALGERIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "DZD"
    },
    {
        "CTRY_CODE": "AS",
        "CTRY_NAME": "AMERICAN SAMOA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "AD",
        "CTRY_NAME": "ANDORRA",
        "LANG_CODE": "CA",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AO",
        "CTRY_NAME": "ANGOLA",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "AOA"
    },
    {
        "CTRY_CODE": "AI",
        "CTRY_NAME": "ANGUILLA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "AQ",
        "CTRY_NAME": "ANTARCTICA"
    },
    {
        "CTRY_CODE": "AG",
        "CTRY_NAME": "ANTIGUA AND BARBUDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "AR",
        "CTRY_NAME": "ARGENTINA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "ARS"
    },
    {
        "CTRY_CODE": "AM",
        "CTRY_NAME": "ARMENIA",
        "LANG_CODE": "HY",
        "ISO_CURR_CODE": "AMD"
    },
    {
        "CTRY_CODE": "AW",
        "CTRY_NAME": "ARUBA",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "AWG"
    },
    {
        "CTRY_CODE": "AU",
        "CTRY_NAME": "AUSTRALIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "AT",
        "CTRY_NAME": "AUSTRIA",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AZ",
        "CTRY_NAME": "AZERBAIJAN",
        "LANG_CODE": "AZ",
        "ISO_CURR_CODE": "AZM"
    },
    {
        "CTRY_CODE": "BS",
        "CTRY_NAME": "BAHAMAS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BSD"
    },
    {
        "CTRY_CODE": "BH",
        "CTRY_NAME": "BAHRAIN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "BHD"
    },
    {
        "CTRY_CODE": "BD",
        "CTRY_NAME": "BANGLADESH",
        "LANG_CODE": "BN",
        "ISO_CURR_CODE": "BDT"
    },
    {
        "CTRY_CODE": "BB",
        "CTRY_NAME": "BARBADOS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BBD"
    },
    {
        "CTRY_CODE": "BY",
        "CTRY_NAME": "BELARUS",
        "LANG_CODE": "BE",
        "ISO_CURR_CODE": "BYR"
    },
    {
        "CTRY_CODE": "BE",
        "CTRY_NAME": "BELGIUM",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "BZ",
        "CTRY_NAME": "BELIZE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BZD"
    },
    {
        "CTRY_CODE": "BJ",
        "CTRY_NAME": "BENIN",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "BM",
        "CTRY_NAME": "BERMUDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BMD"
    },
    {
        "CTRY_CODE": "BT",
        "CTRY_NAME": "BHUTAN",
        "LANG_CODE": "DZ",
        "ISO_CURR_CODE": "BTN"
    },
    {
        "CTRY_CODE": "BO",
        "CTRY_NAME": "BOLIVIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "BOB"
    },
    {
        "CTRY_CODE": "BQ",
        "CTRY_NAME": "BONAIRE, SAINT EUSTATIUS AND SABA",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "BA",
        "CTRY_NAME": "BOSNIA AND HERZEGOVINA",
        "LANG_CODE": "BS",
        "ISO_CURR_CODE": "BAM"
    },
    {
        "CTRY_CODE": "BW",
        "CTRY_NAME": "BOTSWANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BWP"
    },
    {
        "CTRY_CODE": "BV",
        "CTRY_NAME": "BOUVET ISLAND",
        "LANG_CODE": "NO",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "BR",
        "CTRY_NAME": "BRAZIL",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "BRL"
    },
    {
        "CTRY_CODE": "IO",
        "CTRY_NAME": "BRITISH INDIAN OCEAN TERRITORY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "BN",
        "CTRY_NAME": "BRUNEI DARUSSALAM",
        "LANG_CODE": "MS",
        "ISO_CURR_CODE": "BND"
    },
    {
        "CTRY_CODE": "BG",
        "CTRY_NAME": "BULGARIA",
        "LANG_CODE": "BG",
        "ISO_CURR_CODE": "BGN"
    },
    {
        "CTRY_CODE": "BF",
        "CTRY_NAME": "BURKINA FASO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "BI",
        "CTRY_NAME": "BURUNDI",
        "LANG_CODE": "RN",
        "ISO_CURR_CODE": "BIF"
    },
    {
        "CTRY_CODE": "KH",
        "CTRY_NAME": "CAMBODIA",
        "LANG_CODE": "KM",
        "ISO_CURR_CODE": "KHR"
    },
    {
        "CTRY_CODE": "CM",
        "CTRY_NAME": "CAMEROON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CV",
        "CTRY_NAME": "CAPE VERDE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "CVE"
    },
    {
        "CTRY_CODE": "KY",
        "CTRY_NAME": "CAYMAN ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "KYD"
    },
    {
        "CTRY_CODE": "CF",
        "CTRY_NAME": "CENTRAL AFRICAN REPUBLIC",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "EA",
        "CTRY_NAME": "CEUTA AND MELILLA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "TD",
        "CTRY_NAME": "CHAD",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CL",
        "CTRY_NAME": "CHILE",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CLP"
    },
    {
        "CTRY_CODE": "CN",
        "CTRY_NAME": "CHINA",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "CNY"
    },
    {
        "CTRY_CODE": "CX",
        "CTRY_NAME": "CHRISTMAS ISLAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "CC",
        "CTRY_NAME": "COCOS (KEELING) ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "CO",
        "CTRY_NAME": "COLOMBIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "COP"
    },
    {
        "CTRY_CODE": "KM",
        "CTRY_NAME": "COMOROS",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "KMF"
    },
    {
        "CTRY_CODE": "CG",
        "CTRY_NAME": "CONGO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CD",
        "CTRY_NAME": "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "CDF"
    },
    {
        "CTRY_CODE": "CK",
        "CTRY_NAME": "COOK ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "CR",
        "CTRY_NAME": "COSTA RICA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CRC"
    },
    {
        "CTRY_CODE": "CI",
        "CTRY_NAME": "COTE D'IVOIRE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "QU",
        "CTRY_NAME": "COUNTRIES AND TERRITORIES NOT SPECIFIED"
    },
    {
        "CTRY_CODE": "HR",
        "CTRY_NAME": "CROATIA",
        "LANG_CODE": "HR",
        "ISO_CURR_CODE": "HRK"
    },
    {
        "CTRY_CODE": "CU",
        "CTRY_NAME": "CUBA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CUP"
    },
    {
        "CTRY_CODE": "CW",
        "CTRY_NAME": "CURACAO",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "ANG"
    },
    {
        "CTRY_CODE": "CY",
        "CTRY_NAME": "CYPRUS",
        "LANG_CODE": "EL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "CZ",
        "CTRY_NAME": "CZECH REPUBLIC",
        "LANG_CODE": "CS",
        "ISO_CURR_CODE": "CZK"
    },
    {
        "CTRY_CODE": "DK",
        "CTRY_NAME": "DENMARK",
        "LANG_CODE": "DA",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "DJ",
        "CTRY_NAME": "DJIBOUTI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "DJF"
    },
    {
        "CTRY_CODE": "DM",
        "CTRY_NAME": "DOMINICA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "DO",
        "CTRY_NAME": "DOMINICAN REPUBLIC",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "DOP"
    },
    {
        "CTRY_CODE": "EC",
        "CTRY_NAME": "ECUADOR",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "EG",
        "CTRY_NAME": "EGYPT",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "EGP"
    },
    {
        "CTRY_CODE": "SV",
        "CTRY_NAME": "EL SALVADOR",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SVC"
    },
    {
        "CTRY_CODE": "GQ",
        "CTRY_NAME": "EQUATORIAL GUINEA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "ER",
        "CTRY_NAME": "ERITREA",
        "LANG_CODE": "TI",
        "ISO_CURR_CODE": "ERN"
    },
    {
        "CTRY_CODE": "EE",
        "CTRY_NAME": "ESTONIA",
        "LANG_CODE": "ET",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "ET",
        "CTRY_NAME": "ETHIOPIA",
        "LANG_CODE": "AM",
        "ISO_CURR_CODE": "ETB"
    },
    {
        "CTRY_CODE": "FK",
        "CTRY_NAME": "FALKLAND ISLANDS (MALVINAS)",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "FKP"
    },
    {
        "CTRY_CODE": "FO",
        "CTRY_NAME": "FAROE ISLANDS",
        "LANG_CODE": "FO",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "FJ",
        "CTRY_NAME": "FIJI",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "FJD"
    },
    {
        "CTRY_CODE": "FI",
        "CTRY_NAME": "FINLAND",
        "LANG_CODE": "FI",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "FR",
        "CTRY_NAME": "FRANCE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GF",
        "CTRY_NAME": "FRENCH GUIANA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PF",
        "CTRY_NAME": "FRENCH POLYNESIA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "TF",
        "CTRY_NAME": "FRENCH SOUTHERN TERRITORIES",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GA",
        "CTRY_NAME": "GABON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "GM",
        "CTRY_NAME": "GAMBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GMD"
    },
    {
        "CTRY_CODE": "GZ",
        "CTRY_NAME": "GAZA STRIP",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "GE",
        "CTRY_NAME": "GEORGIA",
        "LANG_CODE": "KA",
        "ISO_CURR_CODE": "GEL"
    },
    {
        "CTRY_CODE": "DE",
        "CTRY_NAME": "GERMANY",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GH",
        "CTRY_NAME": "GHANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GHC"
    },
    {
        "CTRY_CODE": "GI",
        "CTRY_NAME": "GIBRALTAR",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GIP"
    },
    {
        "CTRY_CODE": "GR",
        "CTRY_NAME": "GREECE",
        "LANG_CODE": "EL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GL",
        "CTRY_NAME": "GREENLAND",
        "LANG_CODE": "KL",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "GD",
        "CTRY_NAME": "GRENADA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "GP",
        "CTRY_NAME": "GUADELOUPE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GU",
        "CTRY_NAME": "GUAM",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "GT",
        "CTRY_NAME": "GUATEMALA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "GTQ"
    },
    {
        "CTRY_CODE": "GG",
        "CTRY_NAME": "GUERNSEY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "GN",
        "CTRY_NAME": "GUINEA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "GNF"
    },
    {
        "CTRY_CODE": "GW",
        "CTRY_NAME": "GUINEA-BISSAU",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "GY",
        "CTRY_NAME": "GUYANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GYD"
    },
    {
        "CTRY_CODE": "HT",
        "CTRY_NAME": "HAITI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "HTG"
    },
    {
        "CTRY_CODE": "HM",
        "CTRY_NAME": "HEARD ISLAND AND MCDONALD ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "VA",
        "CTRY_NAME": "HOLY SEE (VATICAN CITY STATE)",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "HN",
        "CTRY_NAME": "HONDURAS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "HNL"
    },
    {
        "CTRY_CODE": "HK",
        "CTRY_NAME": "HONG KONG",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "HKD"
    },
    {
        "CTRY_CODE": "HU",
        "CTRY_NAME": "HUNGARY",
        "LANG_CODE": "HU",
        "ISO_CURR_CODE": "HUF"
    },
    {
        "CTRY_CODE": "IS",
        "CTRY_NAME": "ICELAND",
        "LANG_CODE": "IS",
        "ISO_CURR_CODE": "ISK"
    },
    {
        "CTRY_CODE": "IN",
        "CTRY_NAME": "INDIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "INR"
    },
    {
        "CTRY_CODE": "ID",
        "CTRY_NAME": "INDONESIA",
        "LANG_CODE": "ID",
        "ISO_CURR_CODE": "IDR"
    },
    {
        "CTRY_CODE": "IR",
        "CTRY_NAME": "IRAN, ISLAMIC REPUBLIC OF",
        "LANG_CODE": "FA",
        "ISO_CURR_CODE": "IRR"
    },
    {
        "CTRY_CODE": "IQ",
        "CTRY_NAME": "IRAQ",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "IQD"
    },
    {
        "CTRY_CODE": "IE",
        "CTRY_NAME": "IRELAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "IM",
        "CTRY_NAME": "ISLE OF MAN",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "IL",
        "CTRY_NAME": "ISRAEL",
        "LANG_CODE": "HE",
        "ISO_CURR_CODE": "ILS"
    },
    {
        "CTRY_CODE": "IT",
        "CTRY_NAME": "ITALY",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "JM",
        "CTRY_NAME": "JAMAICA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "JMD"
    },
    {
        "CTRY_CODE": "JP",
        "CTRY_NAME": "JAPAN",
        "LANG_CODE": "JA",
        "ISO_CURR_CODE": "JPY"
    },
    {
        "CTRY_CODE": "JE",
        "CTRY_NAME": "JERSEY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "JO",
        "CTRY_NAME": "JORDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "JOD"
    },
    {
        "CTRY_CODE": "KZ",
        "CTRY_NAME": "KAZAKHSTAN",
        "LANG_CODE": "RN",
        "ISO_CURR_CODE": "KZT"
    },
    {
        "CTRY_CODE": "KE",
        "CTRY_NAME": "KENYA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "KES"
    },
    {
        "CTRY_CODE": "KI",
        "CTRY_NAME": "KIRIBATI",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "KP",
        "CTRY_NAME": "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
        "LANG_CODE": "KO",
        "ISO_CURR_CODE": "KPW"
    },
    {
        "CTRY_CODE": "KR",
        "CTRY_NAME": "KOREA, REPUBLIC OF",
        "LANG_CODE": "KO",
        "ISO_CURR_CODE": "KRW"
    },
    {
        "CTRY_CODE": "XK",
        "CTRY_NAME": "KOSOVO",
        "LANG_CODE": "AL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "KW",
        "CTRY_NAME": "KUWAIT",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "KWD"
    },
    {
        "CTRY_CODE": "KG",
        "CTRY_NAME": "KYRGYZSTAN",
        "LANG_CODE": "KY",
        "ISO_CURR_CODE": "KGS"
    },
    {
        "CTRY_CODE": "LA",
        "CTRY_NAME": "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
        "LANG_CODE": "LO",
        "ISO_CURR_CODE": "LAK"
    },
    {
        "CTRY_CODE": "LV",
        "CTRY_NAME": "LATVIA",
        "LANG_CODE": "LV",
        "ISO_CURR_CODE": "LVL"
    },
    {
        "CTRY_CODE": "LB",
        "CTRY_NAME": "LEBANON",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "LBP"
    },
    {
        "CTRY_CODE": "LS",
        "CTRY_NAME": "LESOTHO",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "LSL"
    },
    {
        "CTRY_CODE": "LR",
        "CTRY_NAME": "LIBERIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "LRD"
    },
    {
        "CTRY_CODE": "LY",
        "CTRY_NAME": "LIBYA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "LYD"
    },
    {
        "CTRY_CODE": "LI",
        "CTRY_NAME": "LIECHTENSTEIN",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "CHF"
    },
    {
        "CTRY_CODE": "LT",
        "CTRY_NAME": "LITHUANIA",
        "LANG_CODE": "LT",
        "ISO_CURR_CODE": "LTL"
    },
    {
        "CTRY_CODE": "LU",
        "CTRY_NAME": "LUXEMBOURG",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MO",
        "CTRY_NAME": "MACAO",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "MOP"
    },
    {
        "CTRY_CODE": "MK",
        "CTRY_NAME": "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
        "LANG_CODE": "MK",
        "ISO_CURR_CODE": "MKD"
    },
    {
        "CTRY_CODE": "MG",
        "CTRY_NAME": "MADAGASCAR",
        "LANG_CODE": "MG",
        "ISO_CURR_CODE": "MGF"
    },
    {
        "CTRY_CODE": "MW",
        "CTRY_NAME": "MALAWI",
        "LANG_CODE": "NY",
        "ISO_CURR_CODE": "MWK"
    },
    {
        "CTRY_CODE": "MY",
        "CTRY_NAME": "MALAYSIA",
        "LANG_CODE": "MS",
        "ISO_CURR_CODE": "MYR"
    },
    {
        "CTRY_CODE": "MV",
        "CTRY_NAME": "MALDIVES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "MVR"
    },
    {
        "CTRY_CODE": "ML",
        "CTRY_NAME": "MALI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "MT",
        "CTRY_NAME": "MALTA",
        "LANG_CODE": "MT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MH",
        "CTRY_NAME": "MARSHALL ISLANDS",
        "LANG_CODE": "MH",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "MQ",
        "CTRY_NAME": "MARTINIQUE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MR",
        "CTRY_NAME": "MAURITANIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MRO"
    },
    {
        "CTRY_CODE": "MU",
        "CTRY_NAME": "MAURITIUS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "MUR"
    },
    {
        "CTRY_CODE": "YT",
        "CTRY_NAME": "MAYOTTE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MX",
        "CTRY_NAME": "MEXICO",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "MXN",
        "STATE_LABEL": "State",
        "STATES": [
            {
                "STATE_CODE": "AGU",
                "STATE_NAME": "AGUASCALIENTES"
            },
            {
                "STATE_CODE": "BCN",
                "STATE_NAME": "BAJA CALIFORNIA"
            },
            {
                "STATE_CODE": "BCS",
                "STATE_NAME": "BAJA CALIFORNIA SUR"
            },
            {
                "STATE_CODE": "CAM",
                "STATE_NAME": "CAMPECHE"
            },
            {
                "STATE_CODE": "CHP",
                "STATE_NAME": "CHIAPAS"
            },
            {
                "STATE_CODE": "CHH",
                "STATE_NAME": "CHIHUAHUA"
            },
            {
                "STATE_CODE": "COA",
                "STATE_NAME": "COAHUILA"
            },
            {
                "STATE_CODE": "COL",
                "STATE_NAME": "COLIMA"
            },
            {
                "STATE_CODE": "DIF",
                "STATE_NAME": "DISTRITO FEDERAL"
            },
            {
                "STATE_CODE": "DUR",
                "STATE_NAME": "DURANGO"
            },
            {
                "STATE_CODE": "GUA",
                "STATE_NAME": "GUANAJUATO"
            },
            {
                "STATE_CODE": "GRO",
                "STATE_NAME": "GUERRERO"
            },
            {
                "STATE_CODE": "HID",
                "STATE_NAME": "HIDALGO"
            },
            {
                "STATE_CODE": "JAL",
                "STATE_NAME": "JALISCO"
            },
            {
                "STATE_CODE": "MIC",
                "STATE_NAME": "MICHOACÁN"
            },
            {
                "STATE_CODE": "MOR",
                "STATE_NAME": "MORELOS"
            },
            {
                "STATE_CODE": "MEX",
                "STATE_NAME": "MÉXICO"
            },
            {
                "STATE_CODE": "NAY",
                "STATE_NAME": "NAYARIT"
            },
            {
                "STATE_CODE": "NLE",
                "STATE_NAME": "NUEVO LEÓN"
            },
            {
                "STATE_CODE": "OAX",
                "STATE_NAME": "OAXACA"
            },
            {
                "STATE_CODE": "PUE",
                "STATE_NAME": "PUEBLA"
            },
            {
                "STATE_CODE": "QUE",
                "STATE_NAME": "QUERÉTARO"
            },
            {
                "STATE_CODE": "ROO",
                "STATE_NAME": "QUINTANA ROO"
            },
            {
                "STATE_CODE": "SLP",
                "STATE_NAME": "SAN LUIS POTOSÍ"
            },
            {
                "STATE_CODE": "SIN",
                "STATE_NAME": "SINALOA"
            },
            {
                "STATE_CODE": "SON",
                "STATE_NAME": "SONORA"
            },
            {
                "STATE_CODE": "TAB",
                "STATE_NAME": "TABASCO"
            },
            {
                "STATE_CODE": "TAM",
                "STATE_NAME": "TAMAULIPAS"
            },
            {
                "STATE_CODE": "TLA",
                "STATE_NAME": "TLAXCALA"
            },
            {
                "STATE_CODE": "VER",
                "STATE_NAME": "VERACRUZ"
            },
            {
                "STATE_CODE": "YUC",
                "STATE_NAME": "YUCATÁN"
            },
            {
                "STATE_CODE": "ZAC",
                "STATE_NAME": "ZACATECAS"
            }
        ]
    },
    {
        "CTRY_CODE": "FM",
        "CTRY_NAME": "MICRONESIA, FEDERATED STATES OF",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "MD",
        "CTRY_NAME": "MOLDOVA, REPUBLIC OF",
        "LANG_CODE": "MO",
        "ISO_CURR_CODE": "MDL"
    },
    {
        "CTRY_CODE": "MC",
        "CTRY_NAME": "MONACO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MN",
        "CTRY_NAME": "MONGOLIA",
        "LANG_CODE": "MN",
        "ISO_CURR_CODE": "MNT"
    },
    {
        "CTRY_CODE": "ME",
        "CTRY_NAME": "MONTENEGRO",
        "LANG_CODE": "SR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MS",
        "CTRY_NAME": "MONTSERRAT",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "MA",
        "CTRY_NAME": "MOROCCO",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MAD"
    },
    {
        "CTRY_CODE": "MZ",
        "CTRY_NAME": "MOZAMBIQUE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "MZM"
    },
    {
        "CTRY_CODE": "MM",
        "CTRY_NAME": "MYANMAR",
        "LANG_CODE": "MY",
        "ISO_CURR_CODE": "MMK"
    },
    {
        "CTRY_CODE": "NA",
        "CTRY_NAME": "NAMIBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NAD"
    },
    {
        "CTRY_CODE": "NR",
        "CTRY_NAME": "NAURU",
        "LANG_CODE": "NA",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "NP",
        "CTRY_NAME": "NEPAL",
        "LANG_CODE": "NE",
        "ISO_CURR_CODE": "NPR"
    },
    {
        "CTRY_CODE": "NL",
        "CTRY_NAME": "NETHERLANDS",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "NC",
        "CTRY_NAME": "NEW CALEDONIA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "NZ",
        "CTRY_NAME": "NEW ZEALAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "NI",
        "CTRY_NAME": "NICARAGUA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NIO"
    },
    {
        "CTRY_CODE": "NE",
        "CTRY_NAME": "NIGER",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "NG",
        "CTRY_NAME": "NIGERIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NGN"
    },
    {
        "CTRY_CODE": "NU",
        "CTRY_NAME": "NIUE",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "NF",
        "CTRY_NAME": "NORFOLK ISLAND",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "XI",
        "CTRY_NAME": "NORTHERN IRELAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MP",
        "CTRY_NAME": "NORTHERN MARIANA ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "NO",
        "CTRY_NAME": "NORWAY",
        "LANG_CODE": "NORWAYGIAN",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "OM",
        "CTRY_NAME": "OMAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "OMR"
    },
    {
        "CTRY_CODE": "PK",
        "CTRY_NAME": "PAKISTAN",
        "LANG_CODE": "UR",
        "ISO_CURR_CODE": "PKR"
    },
    {
        "CTRY_CODE": "PW",
        "CTRY_NAME": "PALAU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "PS",
        "CTRY_NAME": "PALESTINE, STATE OF",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "PA",
        "CTRY_NAME": "PANAMA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PAB"
    },
    {
        "CTRY_CODE": "PG",
        "CTRY_NAME": "PAPUA NEW GUINEA",
        "LANG_CODE": "HO",
        "ISO_CURR_CODE": "PGK"
    },
    {
        "CTRY_CODE": "PY",
        "CTRY_NAME": "PARAGUAY",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PYG"
    },
    {
        "CTRY_CODE": "PE",
        "CTRY_NAME": "PERU",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PEN"
    },
    {
        "CTRY_CODE": "PH",
        "CTRY_NAME": "PHILIPPINES",
        "LANG_CODE": "TL",
        "ISO_CURR_CODE": "PHP"
    },
    {
        "CTRY_CODE": "PN",
        "CTRY_NAME": "PITCAIRN",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "PL",
        "CTRY_NAME": "POLAND",
        "LANG_CODE": "PL",
        "ISO_CURR_CODE": "PLN"
    },
    {
        "CTRY_CODE": "PT",
        "CTRY_NAME": "PORTUGAL",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PR",
        "CTRY_NAME": "PUERTO RICO",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "QA",
        "CTRY_NAME": "QATAR",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "QAR"
    },
    {
        "CTRY_CODE": "RE",
        "CTRY_NAME": "REUNION",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "RO",
        "CTRY_NAME": "ROMANIA",
        "LANG_CODE": "RO",
        "ISO_CURR_CODE": "RON"
    },
    {
        "CTRY_CODE": "RU",
        "CTRY_NAME": "RUSSIAN FEDERATION",
        "LANG_CODE": "RU",
        "ISO_CURR_CODE": "RUB"
    },
    {
        "CTRY_CODE": "RW",
        "CTRY_NAME": "RWANDA",
        "LANG_CODE": "RW",
        "ISO_CURR_CODE": "RWF"
    },
    {
        "CTRY_CODE": "BL",
        "CTRY_NAME": "SAINT BARTHELEMY",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SH",
        "CTRY_NAME": "SAINT HELENA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SHP"
    },
    {
        "CTRY_CODE": "KN",
        "CTRY_NAME": "SAINT KITTS AND NEVIS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "LC",
        "CTRY_NAME": "SAINT LUCIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "MF",
        "CTRY_NAME": "SAINT MARTIN",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PM",
        "CTRY_NAME": "SAINT PIERRE AND MIQUELON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "VC",
        "CTRY_NAME": "SAINT VINCENT AND THE GRENADINES",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "WS",
        "CTRY_NAME": "SAMOA",
        "LANG_CODE": "SM",
        "ISO_CURR_CODE": "WST"
    },
    {
        "CTRY_CODE": "SM",
        "CTRY_NAME": "SAN MARINO",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "ST",
        "CTRY_NAME": "SAO TOME AND PRINCIPE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "STD"
    },
    {
        "CTRY_CODE": "SA",
        "CTRY_NAME": "SAUDI ARABIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SAR"
    },
    {
        "CTRY_CODE": "SN",
        "CTRY_NAME": "SENEGAL",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "RS",
        "CTRY_NAME": "SERBIA",
        "LANG_CODE": "SR",
        "ISO_CURR_CODE": "RSD"
    },
    {
        "CTRY_CODE": "SC",
        "CTRY_NAME": "SEYCHELLES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SCR"
    },
    {
        "CTRY_CODE": "SL",
        "CTRY_NAME": "SIERRA LEONE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SLL"
    },
    {
        "CTRY_CODE": "SG",
        "CTRY_NAME": "SINGAPORE",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "SGD"
    },
    {
        "CTRY_CODE": "SX",
        "CTRY_NAME": "SINT MAARTEN (DUTCH PART)",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "ANG"
    },
    {
        "CTRY_CODE": "SK",
        "CTRY_NAME": "SLOVAKIA",
        "LANG_CODE": "SK",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SI",
        "CTRY_NAME": "SLOVENIA",
        "LANG_CODE": "SL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SB",
        "CTRY_NAME": "SOLOMON ISLANDS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SBD"
    },
    {
        "CTRY_CODE": "SO",
        "CTRY_NAME": "SOMALIA",
        "LANG_CODE": "SO",
        "ISO_CURR_CODE": "SOS"
    },
    {
        "CTRY_CODE": "ZA",
        "CTRY_NAME": "SOUTH AFRICA",
        "LANG_CODE": "AF",
        "ISO_CURR_CODE": "ZAR",
        "STATE_LABEL": "Province",
        "STATES": [
            {
                "STATE_CODE": "EC",
                "STATE_NAME": "EASTERN CAPE"
            },
            {
                "STATE_CODE": "FS",
                "STATE_NAME": "FREE STATE"
            },
            {
                "STATE_CODE": "GT",
                "STATE_NAME": "GAUTENG"
            },
            {
                "STATE_CODE": "NL",
                "STATE_NAME": "KWAZULU-NATAL"
            },
            {
                "STATE_CODE": "LP",
                "STATE_NAME": "LIMPOPO"
            },
            {
                "STATE_CODE": "MP",
                "STATE_NAME": "MPUMALANGA"
            },
            {
                "STATE_CODE": "NW",
                "STATE_NAME": "NORTH-WEST"
            },
            {
                "STATE_CODE": "NC",
                "STATE_NAME": "NORTHERN CAPE"
            },
            {
                "STATE_CODE": "WC",
                "STATE_NAME": "WESTERN CAPE"
            }
        ]
    },
    {
        "CTRY_CODE": "GS",
        "CTRY_NAME": "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
        "LANG_CODE": "EN"
    },
    {
        "CTRY_CODE": "SS",
        "CTRY_NAME": "SOUTH SUDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SSP"
    },
    {
        "CTRY_CODE": "ES",
        "CTRY_NAME": "SPAIN",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "LK",
        "CTRY_NAME": "SRI LANKA",
        "LANG_CODE": "SI",
        "ISO_CURR_CODE": "LKR"
    },
    {
        "CTRY_CODE": "SD",
        "CTRY_NAME": "SUDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SDG"
    },
    {
        "CTRY_CODE": "SR",
        "CTRY_NAME": "SURINAME",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "SRD"
    },
    {
        "CTRY_CODE": "SJ",
        "CTRY_NAME": "SVALBARD AND JAN MAYEN",
        "LANG_CODE": "NO",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "SZ",
        "CTRY_NAME": "SWAZILAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SZL"
    },
    {
        "CTRY_CODE": "SE",
        "CTRY_NAME": "SWEDEN",
        "LANG_CODE": "SV",
        "ISO_CURR_CODE": "SEK"
    },
    {
        "CTRY_CODE": "CH",
        "CTRY_NAME": "SWITZERLAND",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "CHF"
    },
    {
        "CTRY_CODE": "SY",
        "CTRY_NAME": "SYRIAN ARAB REPUBLIC",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SYP"
    },
    {
        "CTRY_CODE": "TW",
        "CTRY_NAME": "TAIWAN, PROVINCE OF CHINA",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "TWD"
    },
    {
        "CTRY_CODE": "TJ",
        "CTRY_NAME": "TAJIKISTAN",
        "LANG_CODE": "TG",
        "ISO_CURR_CODE": "TJS"
    },
    {
        "CTRY_CODE": "TZ",
        "CTRY_NAME": "TANZANIA, UNITED REPUBLIC OF",
        "LANG_CODE": "SW",
        "ISO_CURR_CODE": "TZS"
    },
    {
        "CTRY_CODE": "TH",
        "CTRY_NAME": "THAILAND",
        "LANG_CODE": "TH",
        "ISO_CURR_CODE": "THB"
    },
    {
        "CTRY_CODE": "TL",
        "CTRY_NAME": "TIMOR-LESTE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "TG",
        "CTRY_NAME": "TOGO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "TK",
        "CTRY_NAME": "TOKELAU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "TO",
        "CTRY_NAME": "TONGA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "TOP"
    },
    {
        "CTRY_CODE": "TT",
        "CTRY_NAME": "TRINIDAD AND TOBAGO",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "TTD"
    },
    {
        "CTRY_CODE": "TN",
        "CTRY_NAME": "TUNISIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "TND"
    },
    {
        "CTRY_CODE": "TR",
        "CTRY_NAME": "TURKEY",
        "LANG_CODE": "TR",
        "ISO_CURR_CODE": "TRY"
    },
    {
        "CTRY_CODE": "TM",
        "CTRY_NAME": "TURKMENISTAN",
        "LANG_CODE": "TK",
        "ISO_CURR_CODE": "TMM"
    },
    {
        "CTRY_CODE": "TC",
        "CTRY_NAME": "TURKS AND CAICOS ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "TV",
        "CTRY_NAME": "TUVALU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "UG",
        "CTRY_NAME": "UGANDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "UGX"
    },
    {
        "CTRY_CODE": "UA",
        "CTRY_NAME": "UKRAINE",
        "LANG_CODE": "UK",
        "ISO_CURR_CODE": "UAH"
    },
    {
        "CTRY_CODE": "AE",
        "CTRY_NAME": "UNITED ARAB EMIRATES",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "AED"
    },
    {
        "CTRY_CODE": "GB",
        "CTRY_NAME": "UNITED KINGDOM",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "UM",
        "CTRY_NAME": "UNITED STATES MINOR OUTLYING ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "US",
        "CTRY_NAME": "UNITED STATES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD",
        "STATES_LABEL": "State",
        "STATES": [
            {
                "STATE_CODE": "AL",
                "STATE_NAME": "ALABAMA"
            },
            {
                "STATE_CODE": "AK",
                "STATE_NAME": "ALASKA"
            },
            {
                "STATE_CODE": "AS",
                "STATE_NAME": "AMERICAN SAMOA"
            },
            {
                "STATE_CODE": "AZ",
                "STATE_NAME": "ARIZONA"
            },
            {
                "STATE_CODE": "AR",
                "STATE_NAME": "ARKANSAS"
            },
            {
                "STATE_CODE": "CA",
                "STATE_NAME": "CALIFORNIA"
            },
            {
                "STATE_CODE": "CO",
                "STATE_NAME": "COLORADO"
            },
            {
                "STATE_CODE": "CT",
                "STATE_NAME": "CONNECTICUT"
            },
            {
                "STATE_CODE": "DE",
                "STATE_NAME": "DELAWARE"
            },
            {
                "STATE_CODE": "DC",
                "STATE_NAME": "DISTRICT OF COLUMBIA"
            },
            {
                "STATE_CODE": "FL",
                "STATE_NAME": "FLORIDA"
            },
            {
                "STATE_CODE": "GA",
                "STATE_NAME": "GEORGIA"
            },
            {
                "STATE_CODE": "GU",
                "STATE_NAME": "GUAM"
            },
            {
                "STATE_CODE": "HI",
                "STATE_NAME": "HAWAII"
            },
            {
                "STATE_CODE": "ID",
                "STATE_NAME": "IDAHO"
            },
            {
                "STATE_CODE": "IL",
                "STATE_NAME": "ILLINOIS"
            },
            {
                "STATE_CODE": "IN",
                "STATE_NAME": "INDIANA"
            },
            {
                "STATE_CODE": "IA",
                "STATE_NAME": "IOWA"
            },
            {
                "STATE_CODE": "KS",
                "STATE_NAME": "KANSAS"
            },
            {
                "STATE_CODE": "KY",
                "STATE_NAME": "KENTUCKY"
            },
            {
                "STATE_CODE": "LA",
                "STATE_NAME": "LOUISIANA"
            },
            {
                "STATE_CODE": "ME",
                "STATE_NAME": "MAINE"
            },
            {
                "STATE_CODE": "MD",
                "STATE_NAME": "MARYLAND"
            },
            {
                "STATE_CODE": "MA",
                "STATE_NAME": "MASSACHUSETTS"
            },
            {
                "STATE_CODE": "MI",
                "STATE_NAME": "MICHIGAN"
            },
            {
                "STATE_CODE": "MN",
                "STATE_NAME": "MINNESOTA"
            },
            {
                "STATE_CODE": "MS",
                "STATE_NAME": "MISSISSIPPI"
            },
            {
                "STATE_CODE": "MO",
                "STATE_NAME": "MISSOURI"
            },
            {
                "STATE_CODE": "MT",
                "STATE_NAME": "MONTANA"
            },
            {
                "STATE_CODE": "NE",
                "STATE_NAME": "NEBRASKA"
            },
            {
                "STATE_CODE": "NV",
                "STATE_NAME": "NEVADA"
            },
            {
                "STATE_CODE": "NH",
                "STATE_NAME": "NEW HAMPSHIRE"
            },
            {
                "STATE_CODE": "NJ",
                "STATE_NAME": "NEW JERSEY"
            },
            {
                "STATE_CODE": "NM",
                "STATE_NAME": "NEW MEXICO"
            },
            {
                "STATE_CODE": "NY",
                "STATE_NAME": "NEW YORK"
            },
            {
                "STATE_CODE": "NC",
                "STATE_NAME": "NORTH CAROLINA"
            },
            {
                "STATE_CODE": "ND",
                "STATE_NAME": "NORTH DAKOTA"
            },
            {
                "STATE_CODE": "MP",
                "STATE_NAME": "NORTHERN MARIANA ISLANDS"
            },
            {
                "STATE_CODE": "OH",
                "STATE_NAME": "OHIO"
            },
            {
                "STATE_CODE": "OK",
                "STATE_NAME": "OKLAHOMA"
            },
            {
                "STATE_CODE": "OR",
                "STATE_NAME": "OREGON"
            },
            {
                "STATE_CODE": "PA",
                "STATE_NAME": "PENNSYLVANIA"
            },
            {
                "STATE_CODE": "PR",
                "STATE_NAME": "PUERTO RICO"
            },
            {
                "STATE_CODE": "RI",
                "STATE_NAME": "RHODE ISLAND"
            },
            {
                "STATE_CODE": "SC",
                "STATE_NAME": "SOUTH CAROLINA"
            },
            {
                "STATE_CODE": "SD",
                "STATE_NAME": "SOUTH DAKOTA"
            },
            {
                "STATE_CODE": "TN",
                "STATE_NAME": "TENNESSEE"
            },
            {
                "STATE_CODE": "TX",
                "STATE_NAME": "TEXAS"
            },
            {
                "STATE_CODE": "UM",
                "STATE_NAME": "UNITED STATES MINOR OUTLYING ISLANDS"
            },
            {
                "STATE_CODE": "UT",
                "STATE_NAME": "UTAH"
            },
            {
                "STATE_CODE": "VT",
                "STATE_NAME": "VERMONT"
            },
            {
                "STATE_CODE": "VI",
                "STATE_NAME": "VIRGIN ISLANDS, U.S."
            },
            {
                "STATE_CODE": "VA",
                "STATE_NAME": "VIRGINIA"
            },
            {
                "STATE_CODE": "WA",
                "STATE_NAME": "WASHINGTON"
            },
            {
                "STATE_CODE": "WV",
                "STATE_NAME": "WEST VIRGINIA"
            },
            {
                "STATE_CODE": "WI",
                "STATE_NAME": "WISCONSIN"
            },
            {
                "STATE_CODE": "WY",
                "STATE_NAME": "WYOMING"
            }
        ]
    },
    {
        "CTRY_CODE": "UY",
        "CTRY_NAME": "URUGUAY",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "UYU"
    },
    {
        "CTRY_CODE": "UZ",
        "CTRY_NAME": "UZBEKISTAN",
        "LANG_CODE": "UZ",
        "ISO_CURR_CODE": "UZS"
    },
    {
        "CTRY_CODE": "VU",
        "CTRY_NAME": "VANUATU",
        "LANG_CODE": "BI",
        "ISO_CURR_CODE": "VUV"
    },
    {
        "CTRY_CODE": "VE",
        "CTRY_NAME": "VENEZUELA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "VEB"
    },
    {
        "CTRY_CODE": "VN",
        "CTRY_NAME": "VIET NAM",
        "LANG_CODE": "VI",
        "ISO_CURR_CODE": "VND"
    },
    {
        "CTRY_CODE": "VG",
        "CTRY_NAME": "VIRGIN ISLANDS, BRITISH",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "VI",
        "CTRY_NAME": "VIRGIN ISLANDS, U.S.",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "WF",
        "CTRY_NAME": "WALLIS AND FUTUNA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "WE",
        "CTRY_NAME": "WEST BANK",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "EH",
        "CTRY_NAME": "WESTERN SAHARA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MAD"
    },
    {
        "CTRY_CODE": "YE",
        "CTRY_NAME": "YEMEN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "YER"
    },
    {
        "CTRY_CODE": "ZM",
        "CTRY_NAME": "ZAMBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "ZMK"
    },
    {
        "CTRY_CODE": "ZW",
        "CTRY_NAME": "ZIMBABWE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "ZWD"
    }
]

```

---

## Province select

**Search Terms:** 'npm', 'selector', 'flag', 'province', 'state'

### Source File 1: `src/ds-layout-components/foundations/components/forms/province-select/ProvinceSelectExample.tsx`

```tsx
import { FormProvinceSelect } from 'livingston-npm-components';
import { fetchProvinces } from '@/utils/countryApi';

const ProvinceSelectExample = () => {
    return (
        <div className='form-group'>
            <FormProvinceSelect
                name='example-province-select'
                label='Province select label'
                placeholder='Select a province'
                countryCode='US'
                value='CA'
                onChange={(province: string | undefined) => console.log('Selected province:', province)}
                fetchProvinces={fetchProvinces}
                tooltip='Select country to view provinces/states'
                helpText='Help text'
            />
        </div>
    );
};
export default ProvinceSelectExample;

```

### Source File 2: `src/utils/countryApi.ts`

```tsx
import { CountryDetail, ProvinceDetail } from 'livingston-npm-components';
import countryData from './country-data.json';

export const fetchCountries = () => {
    return new Promise<CountryDetail[]>((resolve) => {
        console.log('fake api to get country data');
        setTimeout(() => resolve(countryData), 3000);
    });
};

export const fetchProvinces = (countryCode: string): Promise<ProvinceDetail[]> => {
    return new Promise<ProvinceDetail[]>((resolve) => {
        const foundCountry = countryData.find((country) => country.CTRY_CODE === countryCode);
        console.log('fake api to get provinces api', countryCode, foundCountry);
        setTimeout(() => {
            resolve(
                foundCountry && foundCountry.STATES
                    ? foundCountry.STATES.map((state) => ({ name: state.STATE_NAME, code: state.STATE_CODE }))
                    : []
            );
        }, 3000);
    });
};

```

### Source File 3: `src/utils/country-data.json`

```tsx
[
    {
        "CTRY_CODE": "AF",
        "CTRY_NAME": "AFGHANISTAN",
        "LANG_CODE": "PS",
        "ISO_CURR_CODE": "AFN"
    },
    {
        "CTRY_CODE": "AX",
        "CTRY_NAME": "ALAND ISLANDS",
        "LANG_CODE": "FI",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AL",
        "CTRY_NAME": "ALBANIA",
        "LANG_CODE": "SQ",
        "ISO_CURR_CODE": "ALL"
    },
    {
        "CTRY_CODE": "CA",
        "CTRY_NAME": "CANADA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "CAD",
        "STATE_LABEL": "Province",
        "STATES": [
            {
                "STATE_CODE": "AB",
                "STATE_NAME": "ALBERTA"
            },
            {
                "STATE_CODE": "BC",
                "STATE_NAME": "BRITISH COLUMBIA"
            },
            {
                "STATE_CODE": "MB",
                "STATE_NAME": "MANITOBA"
            },
            {
                "STATE_CODE": "NB",
                "STATE_NAME": "NEW BRUNSWICK"
            },
            {
                "STATE_CODE": "NL",
                "STATE_NAME": "NEWFOUNDLAND AND LABRADOR"
            },
            {
                "STATE_CODE": "NT",
                "STATE_NAME": "NORTHWEST TERRITORIES"
            },
            {
                "STATE_CODE": "NS",
                "STATE_NAME": "NOVA SCOTIA"
            },
            {
                "STATE_CODE": "NU",
                "STATE_NAME": "NUNAVUT"
            },
            {
                "STATE_CODE": "ON",
                "STATE_NAME": "ONTARIO"
            },
            {
                "STATE_CODE": "PE",
                "STATE_NAME": "PRINCE EDWARD ISLAND"
            },
            {
                "STATE_CODE": "QC",
                "STATE_NAME": "QUEBEC"
            },
            {
                "STATE_CODE": "SK",
                "STATE_NAME": "SASKATCHEWAN"
            },
            {
                "STATE_CODE": "YT",
                "STATE_NAME": "YUKON TERRITORY"
            }
        ]
    },
    {
        "CTRY_CODE": "DZ",
        "CTRY_NAME": "ALGERIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "DZD"
    },
    {
        "CTRY_CODE": "AS",
        "CTRY_NAME": "AMERICAN SAMOA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "AD",
        "CTRY_NAME": "ANDORRA",
        "LANG_CODE": "CA",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AO",
        "CTRY_NAME": "ANGOLA",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "AOA"
    },
    {
        "CTRY_CODE": "AI",
        "CTRY_NAME": "ANGUILLA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "AQ",
        "CTRY_NAME": "ANTARCTICA"
    },
    {
        "CTRY_CODE": "AG",
        "CTRY_NAME": "ANTIGUA AND BARBUDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "AR",
        "CTRY_NAME": "ARGENTINA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "ARS"
    },
    {
        "CTRY_CODE": "AM",
        "CTRY_NAME": "ARMENIA",
        "LANG_CODE": "HY",
        "ISO_CURR_CODE": "AMD"
    },
    {
        "CTRY_CODE": "AW",
        "CTRY_NAME": "ARUBA",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "AWG"
    },
    {
        "CTRY_CODE": "AU",
        "CTRY_NAME": "AUSTRALIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "AT",
        "CTRY_NAME": "AUSTRIA",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "AZ",
        "CTRY_NAME": "AZERBAIJAN",
        "LANG_CODE": "AZ",
        "ISO_CURR_CODE": "AZM"
    },
    {
        "CTRY_CODE": "BS",
        "CTRY_NAME": "BAHAMAS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BSD"
    },
    {
        "CTRY_CODE": "BH",
        "CTRY_NAME": "BAHRAIN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "BHD"
    },
    {
        "CTRY_CODE": "BD",
        "CTRY_NAME": "BANGLADESH",
        "LANG_CODE": "BN",
        "ISO_CURR_CODE": "BDT"
    },
    {
        "CTRY_CODE": "BB",
        "CTRY_NAME": "BARBADOS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BBD"
    },
    {
        "CTRY_CODE": "BY",
        "CTRY_NAME": "BELARUS",
        "LANG_CODE": "BE",
        "ISO_CURR_CODE": "BYR"
    },
    {
        "CTRY_CODE": "BE",
        "CTRY_NAME": "BELGIUM",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "BZ",
        "CTRY_NAME": "BELIZE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BZD"
    },
    {
        "CTRY_CODE": "BJ",
        "CTRY_NAME": "BENIN",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "BM",
        "CTRY_NAME": "BERMUDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BMD"
    },
    {
        "CTRY_CODE": "BT",
        "CTRY_NAME": "BHUTAN",
        "LANG_CODE": "DZ",
        "ISO_CURR_CODE": "BTN"
    },
    {
        "CTRY_CODE": "BO",
        "CTRY_NAME": "BOLIVIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "BOB"
    },
    {
        "CTRY_CODE": "BQ",
        "CTRY_NAME": "BONAIRE, SAINT EUSTATIUS AND SABA",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "BA",
        "CTRY_NAME": "BOSNIA AND HERZEGOVINA",
        "LANG_CODE": "BS",
        "ISO_CURR_CODE": "BAM"
    },
    {
        "CTRY_CODE": "BW",
        "CTRY_NAME": "BOTSWANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "BWP"
    },
    {
        "CTRY_CODE": "BV",
        "CTRY_NAME": "BOUVET ISLAND",
        "LANG_CODE": "NO",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "BR",
        "CTRY_NAME": "BRAZIL",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "BRL"
    },
    {
        "CTRY_CODE": "IO",
        "CTRY_NAME": "BRITISH INDIAN OCEAN TERRITORY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "BN",
        "CTRY_NAME": "BRUNEI DARUSSALAM",
        "LANG_CODE": "MS",
        "ISO_CURR_CODE": "BND"
    },
    {
        "CTRY_CODE": "BG",
        "CTRY_NAME": "BULGARIA",
        "LANG_CODE": "BG",
        "ISO_CURR_CODE": "BGN"
    },
    {
        "CTRY_CODE": "BF",
        "CTRY_NAME": "BURKINA FASO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "BI",
        "CTRY_NAME": "BURUNDI",
        "LANG_CODE": "RN",
        "ISO_CURR_CODE": "BIF"
    },
    {
        "CTRY_CODE": "KH",
        "CTRY_NAME": "CAMBODIA",
        "LANG_CODE": "KM",
        "ISO_CURR_CODE": "KHR"
    },
    {
        "CTRY_CODE": "CM",
        "CTRY_NAME": "CAMEROON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CV",
        "CTRY_NAME": "CAPE VERDE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "CVE"
    },
    {
        "CTRY_CODE": "KY",
        "CTRY_NAME": "CAYMAN ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "KYD"
    },
    {
        "CTRY_CODE": "CF",
        "CTRY_NAME": "CENTRAL AFRICAN REPUBLIC",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "EA",
        "CTRY_NAME": "CEUTA AND MELILLA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "TD",
        "CTRY_NAME": "CHAD",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CL",
        "CTRY_NAME": "CHILE",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CLP"
    },
    {
        "CTRY_CODE": "CN",
        "CTRY_NAME": "CHINA",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "CNY"
    },
    {
        "CTRY_CODE": "CX",
        "CTRY_NAME": "CHRISTMAS ISLAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "CC",
        "CTRY_NAME": "COCOS (KEELING) ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "CO",
        "CTRY_NAME": "COLOMBIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "COP"
    },
    {
        "CTRY_CODE": "KM",
        "CTRY_NAME": "COMOROS",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "KMF"
    },
    {
        "CTRY_CODE": "CG",
        "CTRY_NAME": "CONGO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "CD",
        "CTRY_NAME": "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "CDF"
    },
    {
        "CTRY_CODE": "CK",
        "CTRY_NAME": "COOK ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "CR",
        "CTRY_NAME": "COSTA RICA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CRC"
    },
    {
        "CTRY_CODE": "CI",
        "CTRY_NAME": "COTE D'IVOIRE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "QU",
        "CTRY_NAME": "COUNTRIES AND TERRITORIES NOT SPECIFIED"
    },
    {
        "CTRY_CODE": "HR",
        "CTRY_NAME": "CROATIA",
        "LANG_CODE": "HR",
        "ISO_CURR_CODE": "HRK"
    },
    {
        "CTRY_CODE": "CU",
        "CTRY_NAME": "CUBA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "CUP"
    },
    {
        "CTRY_CODE": "CW",
        "CTRY_NAME": "CURACAO",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "ANG"
    },
    {
        "CTRY_CODE": "CY",
        "CTRY_NAME": "CYPRUS",
        "LANG_CODE": "EL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "CZ",
        "CTRY_NAME": "CZECH REPUBLIC",
        "LANG_CODE": "CS",
        "ISO_CURR_CODE": "CZK"
    },
    {
        "CTRY_CODE": "DK",
        "CTRY_NAME": "DENMARK",
        "LANG_CODE": "DA",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "DJ",
        "CTRY_NAME": "DJIBOUTI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "DJF"
    },
    {
        "CTRY_CODE": "DM",
        "CTRY_NAME": "DOMINICA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "DO",
        "CTRY_NAME": "DOMINICAN REPUBLIC",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "DOP"
    },
    {
        "CTRY_CODE": "EC",
        "CTRY_NAME": "ECUADOR",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "EG",
        "CTRY_NAME": "EGYPT",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "EGP"
    },
    {
        "CTRY_CODE": "SV",
        "CTRY_NAME": "EL SALVADOR",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SVC"
    },
    {
        "CTRY_CODE": "GQ",
        "CTRY_NAME": "EQUATORIAL GUINEA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "ER",
        "CTRY_NAME": "ERITREA",
        "LANG_CODE": "TI",
        "ISO_CURR_CODE": "ERN"
    },
    {
        "CTRY_CODE": "EE",
        "CTRY_NAME": "ESTONIA",
        "LANG_CODE": "ET",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "ET",
        "CTRY_NAME": "ETHIOPIA",
        "LANG_CODE": "AM",
        "ISO_CURR_CODE": "ETB"
    },
    {
        "CTRY_CODE": "FK",
        "CTRY_NAME": "FALKLAND ISLANDS (MALVINAS)",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "FKP"
    },
    {
        "CTRY_CODE": "FO",
        "CTRY_NAME": "FAROE ISLANDS",
        "LANG_CODE": "FO",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "FJ",
        "CTRY_NAME": "FIJI",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "FJD"
    },
    {
        "CTRY_CODE": "FI",
        "CTRY_NAME": "FINLAND",
        "LANG_CODE": "FI",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "FR",
        "CTRY_NAME": "FRANCE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GF",
        "CTRY_NAME": "FRENCH GUIANA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PF",
        "CTRY_NAME": "FRENCH POLYNESIA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "TF",
        "CTRY_NAME": "FRENCH SOUTHERN TERRITORIES",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GA",
        "CTRY_NAME": "GABON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XAF"
    },
    {
        "CTRY_CODE": "GM",
        "CTRY_NAME": "GAMBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GMD"
    },
    {
        "CTRY_CODE": "GZ",
        "CTRY_NAME": "GAZA STRIP",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "GE",
        "CTRY_NAME": "GEORGIA",
        "LANG_CODE": "KA",
        "ISO_CURR_CODE": "GEL"
    },
    {
        "CTRY_CODE": "DE",
        "CTRY_NAME": "GERMANY",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GH",
        "CTRY_NAME": "GHANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GHC"
    },
    {
        "CTRY_CODE": "GI",
        "CTRY_NAME": "GIBRALTAR",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GIP"
    },
    {
        "CTRY_CODE": "GR",
        "CTRY_NAME": "GREECE",
        "LANG_CODE": "EL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GL",
        "CTRY_NAME": "GREENLAND",
        "LANG_CODE": "KL",
        "ISO_CURR_CODE": "DKK"
    },
    {
        "CTRY_CODE": "GD",
        "CTRY_NAME": "GRENADA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "GP",
        "CTRY_NAME": "GUADELOUPE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "GU",
        "CTRY_NAME": "GUAM",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "GT",
        "CTRY_NAME": "GUATEMALA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "GTQ"
    },
    {
        "CTRY_CODE": "GG",
        "CTRY_NAME": "GUERNSEY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "GN",
        "CTRY_NAME": "GUINEA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "GNF"
    },
    {
        "CTRY_CODE": "GW",
        "CTRY_NAME": "GUINEA-BISSAU",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "GY",
        "CTRY_NAME": "GUYANA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GYD"
    },
    {
        "CTRY_CODE": "HT",
        "CTRY_NAME": "HAITI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "HTG"
    },
    {
        "CTRY_CODE": "HM",
        "CTRY_NAME": "HEARD ISLAND AND MCDONALD ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "VA",
        "CTRY_NAME": "HOLY SEE (VATICAN CITY STATE)",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "HN",
        "CTRY_NAME": "HONDURAS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "HNL"
    },
    {
        "CTRY_CODE": "HK",
        "CTRY_NAME": "HONG KONG",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "HKD"
    },
    {
        "CTRY_CODE": "HU",
        "CTRY_NAME": "HUNGARY",
        "LANG_CODE": "HU",
        "ISO_CURR_CODE": "HUF"
    },
    {
        "CTRY_CODE": "IS",
        "CTRY_NAME": "ICELAND",
        "LANG_CODE": "IS",
        "ISO_CURR_CODE": "ISK"
    },
    {
        "CTRY_CODE": "IN",
        "CTRY_NAME": "INDIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "INR"
    },
    {
        "CTRY_CODE": "ID",
        "CTRY_NAME": "INDONESIA",
        "LANG_CODE": "ID",
        "ISO_CURR_CODE": "IDR"
    },
    {
        "CTRY_CODE": "IR",
        "CTRY_NAME": "IRAN, ISLAMIC REPUBLIC OF",
        "LANG_CODE": "FA",
        "ISO_CURR_CODE": "IRR"
    },
    {
        "CTRY_CODE": "IQ",
        "CTRY_NAME": "IRAQ",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "IQD"
    },
    {
        "CTRY_CODE": "IE",
        "CTRY_NAME": "IRELAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "IM",
        "CTRY_NAME": "ISLE OF MAN",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "IL",
        "CTRY_NAME": "ISRAEL",
        "LANG_CODE": "HE",
        "ISO_CURR_CODE": "ILS"
    },
    {
        "CTRY_CODE": "IT",
        "CTRY_NAME": "ITALY",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "JM",
        "CTRY_NAME": "JAMAICA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "JMD"
    },
    {
        "CTRY_CODE": "JP",
        "CTRY_NAME": "JAPAN",
        "LANG_CODE": "JA",
        "ISO_CURR_CODE": "JPY"
    },
    {
        "CTRY_CODE": "JE",
        "CTRY_NAME": "JERSEY",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "JO",
        "CTRY_NAME": "JORDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "JOD"
    },
    {
        "CTRY_CODE": "KZ",
        "CTRY_NAME": "KAZAKHSTAN",
        "LANG_CODE": "RN",
        "ISO_CURR_CODE": "KZT"
    },
    {
        "CTRY_CODE": "KE",
        "CTRY_NAME": "KENYA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "KES"
    },
    {
        "CTRY_CODE": "KI",
        "CTRY_NAME": "KIRIBATI",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "KP",
        "CTRY_NAME": "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
        "LANG_CODE": "KO",
        "ISO_CURR_CODE": "KPW"
    },
    {
        "CTRY_CODE": "KR",
        "CTRY_NAME": "KOREA, REPUBLIC OF",
        "LANG_CODE": "KO",
        "ISO_CURR_CODE": "KRW"
    },
    {
        "CTRY_CODE": "XK",
        "CTRY_NAME": "KOSOVO",
        "LANG_CODE": "AL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "KW",
        "CTRY_NAME": "KUWAIT",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "KWD"
    },
    {
        "CTRY_CODE": "KG",
        "CTRY_NAME": "KYRGYZSTAN",
        "LANG_CODE": "KY",
        "ISO_CURR_CODE": "KGS"
    },
    {
        "CTRY_CODE": "LA",
        "CTRY_NAME": "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
        "LANG_CODE": "LO",
        "ISO_CURR_CODE": "LAK"
    },
    {
        "CTRY_CODE": "LV",
        "CTRY_NAME": "LATVIA",
        "LANG_CODE": "LV",
        "ISO_CURR_CODE": "LVL"
    },
    {
        "CTRY_CODE": "LB",
        "CTRY_NAME": "LEBANON",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "LBP"
    },
    {
        "CTRY_CODE": "LS",
        "CTRY_NAME": "LESOTHO",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "LSL"
    },
    {
        "CTRY_CODE": "LR",
        "CTRY_NAME": "LIBERIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "LRD"
    },
    {
        "CTRY_CODE": "LY",
        "CTRY_NAME": "LIBYA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "LYD"
    },
    {
        "CTRY_CODE": "LI",
        "CTRY_NAME": "LIECHTENSTEIN",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "CHF"
    },
    {
        "CTRY_CODE": "LT",
        "CTRY_NAME": "LITHUANIA",
        "LANG_CODE": "LT",
        "ISO_CURR_CODE": "LTL"
    },
    {
        "CTRY_CODE": "LU",
        "CTRY_NAME": "LUXEMBOURG",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MO",
        "CTRY_NAME": "MACAO",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "MOP"
    },
    {
        "CTRY_CODE": "MK",
        "CTRY_NAME": "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
        "LANG_CODE": "MK",
        "ISO_CURR_CODE": "MKD"
    },
    {
        "CTRY_CODE": "MG",
        "CTRY_NAME": "MADAGASCAR",
        "LANG_CODE": "MG",
        "ISO_CURR_CODE": "MGF"
    },
    {
        "CTRY_CODE": "MW",
        "CTRY_NAME": "MALAWI",
        "LANG_CODE": "NY",
        "ISO_CURR_CODE": "MWK"
    },
    {
        "CTRY_CODE": "MY",
        "CTRY_NAME": "MALAYSIA",
        "LANG_CODE": "MS",
        "ISO_CURR_CODE": "MYR"
    },
    {
        "CTRY_CODE": "MV",
        "CTRY_NAME": "MALDIVES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "MVR"
    },
    {
        "CTRY_CODE": "ML",
        "CTRY_NAME": "MALI",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "MT",
        "CTRY_NAME": "MALTA",
        "LANG_CODE": "MT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MH",
        "CTRY_NAME": "MARSHALL ISLANDS",
        "LANG_CODE": "MH",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "MQ",
        "CTRY_NAME": "MARTINIQUE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MR",
        "CTRY_NAME": "MAURITANIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MRO"
    },
    {
        "CTRY_CODE": "MU",
        "CTRY_NAME": "MAURITIUS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "MUR"
    },
    {
        "CTRY_CODE": "YT",
        "CTRY_NAME": "MAYOTTE",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MX",
        "CTRY_NAME": "MEXICO",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "MXN",
        "STATE_LABEL": "State",
        "STATES": [
            {
                "STATE_CODE": "AGU",
                "STATE_NAME": "AGUASCALIENTES"
            },
            {
                "STATE_CODE": "BCN",
                "STATE_NAME": "BAJA CALIFORNIA"
            },
            {
                "STATE_CODE": "BCS",
                "STATE_NAME": "BAJA CALIFORNIA SUR"
            },
            {
                "STATE_CODE": "CAM",
                "STATE_NAME": "CAMPECHE"
            },
            {
                "STATE_CODE": "CHP",
                "STATE_NAME": "CHIAPAS"
            },
            {
                "STATE_CODE": "CHH",
                "STATE_NAME": "CHIHUAHUA"
            },
            {
                "STATE_CODE": "COA",
                "STATE_NAME": "COAHUILA"
            },
            {
                "STATE_CODE": "COL",
                "STATE_NAME": "COLIMA"
            },
            {
                "STATE_CODE": "DIF",
                "STATE_NAME": "DISTRITO FEDERAL"
            },
            {
                "STATE_CODE": "DUR",
                "STATE_NAME": "DURANGO"
            },
            {
                "STATE_CODE": "GUA",
                "STATE_NAME": "GUANAJUATO"
            },
            {
                "STATE_CODE": "GRO",
                "STATE_NAME": "GUERRERO"
            },
            {
                "STATE_CODE": "HID",
                "STATE_NAME": "HIDALGO"
            },
            {
                "STATE_CODE": "JAL",
                "STATE_NAME": "JALISCO"
            },
            {
                "STATE_CODE": "MIC",
                "STATE_NAME": "MICHOACÁN"
            },
            {
                "STATE_CODE": "MOR",
                "STATE_NAME": "MORELOS"
            },
            {
                "STATE_CODE": "MEX",
                "STATE_NAME": "MÉXICO"
            },
            {
                "STATE_CODE": "NAY",
                "STATE_NAME": "NAYARIT"
            },
            {
                "STATE_CODE": "NLE",
                "STATE_NAME": "NUEVO LEÓN"
            },
            {
                "STATE_CODE": "OAX",
                "STATE_NAME": "OAXACA"
            },
            {
                "STATE_CODE": "PUE",
                "STATE_NAME": "PUEBLA"
            },
            {
                "STATE_CODE": "QUE",
                "STATE_NAME": "QUERÉTARO"
            },
            {
                "STATE_CODE": "ROO",
                "STATE_NAME": "QUINTANA ROO"
            },
            {
                "STATE_CODE": "SLP",
                "STATE_NAME": "SAN LUIS POTOSÍ"
            },
            {
                "STATE_CODE": "SIN",
                "STATE_NAME": "SINALOA"
            },
            {
                "STATE_CODE": "SON",
                "STATE_NAME": "SONORA"
            },
            {
                "STATE_CODE": "TAB",
                "STATE_NAME": "TABASCO"
            },
            {
                "STATE_CODE": "TAM",
                "STATE_NAME": "TAMAULIPAS"
            },
            {
                "STATE_CODE": "TLA",
                "STATE_NAME": "TLAXCALA"
            },
            {
                "STATE_CODE": "VER",
                "STATE_NAME": "VERACRUZ"
            },
            {
                "STATE_CODE": "YUC",
                "STATE_NAME": "YUCATÁN"
            },
            {
                "STATE_CODE": "ZAC",
                "STATE_NAME": "ZACATECAS"
            }
        ]
    },
    {
        "CTRY_CODE": "FM",
        "CTRY_NAME": "MICRONESIA, FEDERATED STATES OF",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "MD",
        "CTRY_NAME": "MOLDOVA, REPUBLIC OF",
        "LANG_CODE": "MO",
        "ISO_CURR_CODE": "MDL"
    },
    {
        "CTRY_CODE": "MC",
        "CTRY_NAME": "MONACO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MN",
        "CTRY_NAME": "MONGOLIA",
        "LANG_CODE": "MN",
        "ISO_CURR_CODE": "MNT"
    },
    {
        "CTRY_CODE": "ME",
        "CTRY_NAME": "MONTENEGRO",
        "LANG_CODE": "SR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MS",
        "CTRY_NAME": "MONTSERRAT",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "MA",
        "CTRY_NAME": "MOROCCO",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MAD"
    },
    {
        "CTRY_CODE": "MZ",
        "CTRY_NAME": "MOZAMBIQUE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "MZM"
    },
    {
        "CTRY_CODE": "MM",
        "CTRY_NAME": "MYANMAR",
        "LANG_CODE": "MY",
        "ISO_CURR_CODE": "MMK"
    },
    {
        "CTRY_CODE": "NA",
        "CTRY_NAME": "NAMIBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NAD"
    },
    {
        "CTRY_CODE": "NR",
        "CTRY_NAME": "NAURU",
        "LANG_CODE": "NA",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "NP",
        "CTRY_NAME": "NEPAL",
        "LANG_CODE": "NE",
        "ISO_CURR_CODE": "NPR"
    },
    {
        "CTRY_CODE": "NL",
        "CTRY_NAME": "NETHERLANDS",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "NC",
        "CTRY_NAME": "NEW CALEDONIA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "NZ",
        "CTRY_NAME": "NEW ZEALAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "NI",
        "CTRY_NAME": "NICARAGUA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NIO"
    },
    {
        "CTRY_CODE": "NE",
        "CTRY_NAME": "NIGER",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "NG",
        "CTRY_NAME": "NIGERIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NGN"
    },
    {
        "CTRY_CODE": "NU",
        "CTRY_NAME": "NIUE",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "NF",
        "CTRY_NAME": "NORFOLK ISLAND",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "XI",
        "CTRY_NAME": "NORTHERN IRELAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "MP",
        "CTRY_NAME": "NORTHERN MARIANA ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "NO",
        "CTRY_NAME": "NORWAY",
        "LANG_CODE": "NORWAYGIAN",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "OM",
        "CTRY_NAME": "OMAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "OMR"
    },
    {
        "CTRY_CODE": "PK",
        "CTRY_NAME": "PAKISTAN",
        "LANG_CODE": "UR",
        "ISO_CURR_CODE": "PKR"
    },
    {
        "CTRY_CODE": "PW",
        "CTRY_NAME": "PALAU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "PS",
        "CTRY_NAME": "PALESTINE, STATE OF",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "PA",
        "CTRY_NAME": "PANAMA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PAB"
    },
    {
        "CTRY_CODE": "PG",
        "CTRY_NAME": "PAPUA NEW GUINEA",
        "LANG_CODE": "HO",
        "ISO_CURR_CODE": "PGK"
    },
    {
        "CTRY_CODE": "PY",
        "CTRY_NAME": "PARAGUAY",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PYG"
    },
    {
        "CTRY_CODE": "PE",
        "CTRY_NAME": "PERU",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "PEN"
    },
    {
        "CTRY_CODE": "PH",
        "CTRY_NAME": "PHILIPPINES",
        "LANG_CODE": "TL",
        "ISO_CURR_CODE": "PHP"
    },
    {
        "CTRY_CODE": "PN",
        "CTRY_NAME": "PITCAIRN",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "PL",
        "CTRY_NAME": "POLAND",
        "LANG_CODE": "PL",
        "ISO_CURR_CODE": "PLN"
    },
    {
        "CTRY_CODE": "PT",
        "CTRY_NAME": "PORTUGAL",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PR",
        "CTRY_NAME": "PUERTO RICO",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "QA",
        "CTRY_NAME": "QATAR",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "QAR"
    },
    {
        "CTRY_CODE": "RE",
        "CTRY_NAME": "REUNION",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "RO",
        "CTRY_NAME": "ROMANIA",
        "LANG_CODE": "RO",
        "ISO_CURR_CODE": "RON"
    },
    {
        "CTRY_CODE": "RU",
        "CTRY_NAME": "RUSSIAN FEDERATION",
        "LANG_CODE": "RU",
        "ISO_CURR_CODE": "RUB"
    },
    {
        "CTRY_CODE": "RW",
        "CTRY_NAME": "RWANDA",
        "LANG_CODE": "RW",
        "ISO_CURR_CODE": "RWF"
    },
    {
        "CTRY_CODE": "BL",
        "CTRY_NAME": "SAINT BARTHELEMY",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SH",
        "CTRY_NAME": "SAINT HELENA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SHP"
    },
    {
        "CTRY_CODE": "KN",
        "CTRY_NAME": "SAINT KITTS AND NEVIS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "LC",
        "CTRY_NAME": "SAINT LUCIA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "MF",
        "CTRY_NAME": "SAINT MARTIN",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "PM",
        "CTRY_NAME": "SAINT PIERRE AND MIQUELON",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "VC",
        "CTRY_NAME": "SAINT VINCENT AND THE GRENADINES",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "XCD"
    },
    {
        "CTRY_CODE": "WS",
        "CTRY_NAME": "SAMOA",
        "LANG_CODE": "SM",
        "ISO_CURR_CODE": "WST"
    },
    {
        "CTRY_CODE": "SM",
        "CTRY_NAME": "SAN MARINO",
        "LANG_CODE": "IT",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "ST",
        "CTRY_NAME": "SAO TOME AND PRINCIPE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "STD"
    },
    {
        "CTRY_CODE": "SA",
        "CTRY_NAME": "SAUDI ARABIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SAR"
    },
    {
        "CTRY_CODE": "SN",
        "CTRY_NAME": "SENEGAL",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "RS",
        "CTRY_NAME": "SERBIA",
        "LANG_CODE": "SR",
        "ISO_CURR_CODE": "RSD"
    },
    {
        "CTRY_CODE": "SC",
        "CTRY_NAME": "SEYCHELLES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SCR"
    },
    {
        "CTRY_CODE": "SL",
        "CTRY_NAME": "SIERRA LEONE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SLL"
    },
    {
        "CTRY_CODE": "SG",
        "CTRY_NAME": "SINGAPORE",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "SGD"
    },
    {
        "CTRY_CODE": "SX",
        "CTRY_NAME": "SINT MAARTEN (DUTCH PART)",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "ANG"
    },
    {
        "CTRY_CODE": "SK",
        "CTRY_NAME": "SLOVAKIA",
        "LANG_CODE": "SK",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SI",
        "CTRY_NAME": "SLOVENIA",
        "LANG_CODE": "SL",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "SB",
        "CTRY_NAME": "SOLOMON ISLANDS",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "SBD"
    },
    {
        "CTRY_CODE": "SO",
        "CTRY_NAME": "SOMALIA",
        "LANG_CODE": "SO",
        "ISO_CURR_CODE": "SOS"
    },
    {
        "CTRY_CODE": "ZA",
        "CTRY_NAME": "SOUTH AFRICA",
        "LANG_CODE": "AF",
        "ISO_CURR_CODE": "ZAR",
        "STATE_LABEL": "Province",
        "STATES": [
            {
                "STATE_CODE": "EC",
                "STATE_NAME": "EASTERN CAPE"
            },
            {
                "STATE_CODE": "FS",
                "STATE_NAME": "FREE STATE"
            },
            {
                "STATE_CODE": "GT",
                "STATE_NAME": "GAUTENG"
            },
            {
                "STATE_CODE": "NL",
                "STATE_NAME": "KWAZULU-NATAL"
            },
            {
                "STATE_CODE": "LP",
                "STATE_NAME": "LIMPOPO"
            },
            {
                "STATE_CODE": "MP",
                "STATE_NAME": "MPUMALANGA"
            },
            {
                "STATE_CODE": "NW",
                "STATE_NAME": "NORTH-WEST"
            },
            {
                "STATE_CODE": "NC",
                "STATE_NAME": "NORTHERN CAPE"
            },
            {
                "STATE_CODE": "WC",
                "STATE_NAME": "WESTERN CAPE"
            }
        ]
    },
    {
        "CTRY_CODE": "GS",
        "CTRY_NAME": "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
        "LANG_CODE": "EN"
    },
    {
        "CTRY_CODE": "SS",
        "CTRY_NAME": "SOUTH SUDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SSP"
    },
    {
        "CTRY_CODE": "ES",
        "CTRY_NAME": "SPAIN",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "EUR"
    },
    {
        "CTRY_CODE": "LK",
        "CTRY_NAME": "SRI LANKA",
        "LANG_CODE": "SI",
        "ISO_CURR_CODE": "LKR"
    },
    {
        "CTRY_CODE": "SD",
        "CTRY_NAME": "SUDAN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SDG"
    },
    {
        "CTRY_CODE": "SR",
        "CTRY_NAME": "SURINAME",
        "LANG_CODE": "NL",
        "ISO_CURR_CODE": "SRD"
    },
    {
        "CTRY_CODE": "SJ",
        "CTRY_NAME": "SVALBARD AND JAN MAYEN",
        "LANG_CODE": "NO",
        "ISO_CURR_CODE": "NOK"
    },
    {
        "CTRY_CODE": "SZ",
        "CTRY_NAME": "SWAZILAND",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "SZL"
    },
    {
        "CTRY_CODE": "SE",
        "CTRY_NAME": "SWEDEN",
        "LANG_CODE": "SV",
        "ISO_CURR_CODE": "SEK"
    },
    {
        "CTRY_CODE": "CH",
        "CTRY_NAME": "SWITZERLAND",
        "LANG_CODE": "DE",
        "ISO_CURR_CODE": "CHF"
    },
    {
        "CTRY_CODE": "SY",
        "CTRY_NAME": "SYRIAN ARAB REPUBLIC",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "SYP"
    },
    {
        "CTRY_CODE": "TW",
        "CTRY_NAME": "TAIWAN, PROVINCE OF CHINA",
        "LANG_CODE": "ZH",
        "ISO_CURR_CODE": "TWD"
    },
    {
        "CTRY_CODE": "TJ",
        "CTRY_NAME": "TAJIKISTAN",
        "LANG_CODE": "TG",
        "ISO_CURR_CODE": "TJS"
    },
    {
        "CTRY_CODE": "TZ",
        "CTRY_NAME": "TANZANIA, UNITED REPUBLIC OF",
        "LANG_CODE": "SW",
        "ISO_CURR_CODE": "TZS"
    },
    {
        "CTRY_CODE": "TH",
        "CTRY_NAME": "THAILAND",
        "LANG_CODE": "TH",
        "ISO_CURR_CODE": "THB"
    },
    {
        "CTRY_CODE": "TL",
        "CTRY_NAME": "TIMOR-LESTE",
        "LANG_CODE": "PT",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "TG",
        "CTRY_NAME": "TOGO",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XOF"
    },
    {
        "CTRY_CODE": "TK",
        "CTRY_NAME": "TOKELAU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "NZD"
    },
    {
        "CTRY_CODE": "TO",
        "CTRY_NAME": "TONGA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "TOP"
    },
    {
        "CTRY_CODE": "TT",
        "CTRY_NAME": "TRINIDAD AND TOBAGO",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "TTD"
    },
    {
        "CTRY_CODE": "TN",
        "CTRY_NAME": "TUNISIA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "TND"
    },
    {
        "CTRY_CODE": "TR",
        "CTRY_NAME": "TURKEY",
        "LANG_CODE": "TR",
        "ISO_CURR_CODE": "TRY"
    },
    {
        "CTRY_CODE": "TM",
        "CTRY_NAME": "TURKMENISTAN",
        "LANG_CODE": "TK",
        "ISO_CURR_CODE": "TMM"
    },
    {
        "CTRY_CODE": "TC",
        "CTRY_NAME": "TURKS AND CAICOS ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "TV",
        "CTRY_NAME": "TUVALU",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "AUD"
    },
    {
        "CTRY_CODE": "UG",
        "CTRY_NAME": "UGANDA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "UGX"
    },
    {
        "CTRY_CODE": "UA",
        "CTRY_NAME": "UKRAINE",
        "LANG_CODE": "UK",
        "ISO_CURR_CODE": "UAH"
    },
    {
        "CTRY_CODE": "AE",
        "CTRY_NAME": "UNITED ARAB EMIRATES",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "AED"
    },
    {
        "CTRY_CODE": "GB",
        "CTRY_NAME": "UNITED KINGDOM",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "GBP"
    },
    {
        "CTRY_CODE": "UM",
        "CTRY_NAME": "UNITED STATES MINOR OUTLYING ISLANDS",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "US",
        "CTRY_NAME": "UNITED STATES",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD",
        "STATES_LABEL": "State",
        "STATES": [
            {
                "STATE_CODE": "AL",
                "STATE_NAME": "ALABAMA"
            },
            {
                "STATE_CODE": "AK",
                "STATE_NAME": "ALASKA"
            },
            {
                "STATE_CODE": "AS",
                "STATE_NAME": "AMERICAN SAMOA"
            },
            {
                "STATE_CODE": "AZ",
                "STATE_NAME": "ARIZONA"
            },
            {
                "STATE_CODE": "AR",
                "STATE_NAME": "ARKANSAS"
            },
            {
                "STATE_CODE": "CA",
                "STATE_NAME": "CALIFORNIA"
            },
            {
                "STATE_CODE": "CO",
                "STATE_NAME": "COLORADO"
            },
            {
                "STATE_CODE": "CT",
                "STATE_NAME": "CONNECTICUT"
            },
            {
                "STATE_CODE": "DE",
                "STATE_NAME": "DELAWARE"
            },
            {
                "STATE_CODE": "DC",
                "STATE_NAME": "DISTRICT OF COLUMBIA"
            },
            {
                "STATE_CODE": "FL",
                "STATE_NAME": "FLORIDA"
            },
            {
                "STATE_CODE": "GA",
                "STATE_NAME": "GEORGIA"
            },
            {
                "STATE_CODE": "GU",
                "STATE_NAME": "GUAM"
            },
            {
                "STATE_CODE": "HI",
                "STATE_NAME": "HAWAII"
            },
            {
                "STATE_CODE": "ID",
                "STATE_NAME": "IDAHO"
            },
            {
                "STATE_CODE": "IL",
                "STATE_NAME": "ILLINOIS"
            },
            {
                "STATE_CODE": "IN",
                "STATE_NAME": "INDIANA"
            },
            {
                "STATE_CODE": "IA",
                "STATE_NAME": "IOWA"
            },
            {
                "STATE_CODE": "KS",
                "STATE_NAME": "KANSAS"
            },
            {
                "STATE_CODE": "KY",
                "STATE_NAME": "KENTUCKY"
            },
            {
                "STATE_CODE": "LA",
                "STATE_NAME": "LOUISIANA"
            },
            {
                "STATE_CODE": "ME",
                "STATE_NAME": "MAINE"
            },
            {
                "STATE_CODE": "MD",
                "STATE_NAME": "MARYLAND"
            },
            {
                "STATE_CODE": "MA",
                "STATE_NAME": "MASSACHUSETTS"
            },
            {
                "STATE_CODE": "MI",
                "STATE_NAME": "MICHIGAN"
            },
            {
                "STATE_CODE": "MN",
                "STATE_NAME": "MINNESOTA"
            },
            {
                "STATE_CODE": "MS",
                "STATE_NAME": "MISSISSIPPI"
            },
            {
                "STATE_CODE": "MO",
                "STATE_NAME": "MISSOURI"
            },
            {
                "STATE_CODE": "MT",
                "STATE_NAME": "MONTANA"
            },
            {
                "STATE_CODE": "NE",
                "STATE_NAME": "NEBRASKA"
            },
            {
                "STATE_CODE": "NV",
                "STATE_NAME": "NEVADA"
            },
            {
                "STATE_CODE": "NH",
                "STATE_NAME": "NEW HAMPSHIRE"
            },
            {
                "STATE_CODE": "NJ",
                "STATE_NAME": "NEW JERSEY"
            },
            {
                "STATE_CODE": "NM",
                "STATE_NAME": "NEW MEXICO"
            },
            {
                "STATE_CODE": "NY",
                "STATE_NAME": "NEW YORK"
            },
            {
                "STATE_CODE": "NC",
                "STATE_NAME": "NORTH CAROLINA"
            },
            {
                "STATE_CODE": "ND",
                "STATE_NAME": "NORTH DAKOTA"
            },
            {
                "STATE_CODE": "MP",
                "STATE_NAME": "NORTHERN MARIANA ISLANDS"
            },
            {
                "STATE_CODE": "OH",
                "STATE_NAME": "OHIO"
            },
            {
                "STATE_CODE": "OK",
                "STATE_NAME": "OKLAHOMA"
            },
            {
                "STATE_CODE": "OR",
                "STATE_NAME": "OREGON"
            },
            {
                "STATE_CODE": "PA",
                "STATE_NAME": "PENNSYLVANIA"
            },
            {
                "STATE_CODE": "PR",
                "STATE_NAME": "PUERTO RICO"
            },
            {
                "STATE_CODE": "RI",
                "STATE_NAME": "RHODE ISLAND"
            },
            {
                "STATE_CODE": "SC",
                "STATE_NAME": "SOUTH CAROLINA"
            },
            {
                "STATE_CODE": "SD",
                "STATE_NAME": "SOUTH DAKOTA"
            },
            {
                "STATE_CODE": "TN",
                "STATE_NAME": "TENNESSEE"
            },
            {
                "STATE_CODE": "TX",
                "STATE_NAME": "TEXAS"
            },
            {
                "STATE_CODE": "UM",
                "STATE_NAME": "UNITED STATES MINOR OUTLYING ISLANDS"
            },
            {
                "STATE_CODE": "UT",
                "STATE_NAME": "UTAH"
            },
            {
                "STATE_CODE": "VT",
                "STATE_NAME": "VERMONT"
            },
            {
                "STATE_CODE": "VI",
                "STATE_NAME": "VIRGIN ISLANDS, U.S."
            },
            {
                "STATE_CODE": "VA",
                "STATE_NAME": "VIRGINIA"
            },
            {
                "STATE_CODE": "WA",
                "STATE_NAME": "WASHINGTON"
            },
            {
                "STATE_CODE": "WV",
                "STATE_NAME": "WEST VIRGINIA"
            },
            {
                "STATE_CODE": "WI",
                "STATE_NAME": "WISCONSIN"
            },
            {
                "STATE_CODE": "WY",
                "STATE_NAME": "WYOMING"
            }
        ]
    },
    {
        "CTRY_CODE": "UY",
        "CTRY_NAME": "URUGUAY",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "UYU"
    },
    {
        "CTRY_CODE": "UZ",
        "CTRY_NAME": "UZBEKISTAN",
        "LANG_CODE": "UZ",
        "ISO_CURR_CODE": "UZS"
    },
    {
        "CTRY_CODE": "VU",
        "CTRY_NAME": "VANUATU",
        "LANG_CODE": "BI",
        "ISO_CURR_CODE": "VUV"
    },
    {
        "CTRY_CODE": "VE",
        "CTRY_NAME": "VENEZUELA",
        "LANG_CODE": "ES",
        "ISO_CURR_CODE": "VEB"
    },
    {
        "CTRY_CODE": "VN",
        "CTRY_NAME": "VIET NAM",
        "LANG_CODE": "VI",
        "ISO_CURR_CODE": "VND"
    },
    {
        "CTRY_CODE": "VG",
        "CTRY_NAME": "VIRGIN ISLANDS, BRITISH",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "VI",
        "CTRY_NAME": "VIRGIN ISLANDS, U.S.",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "USD"
    },
    {
        "CTRY_CODE": "WF",
        "CTRY_NAME": "WALLIS AND FUTUNA",
        "LANG_CODE": "FR",
        "ISO_CURR_CODE": "XPF"
    },
    {
        "CTRY_CODE": "WE",
        "CTRY_NAME": "WEST BANK",
        "LANG_CODE": "AR"
    },
    {
        "CTRY_CODE": "EH",
        "CTRY_NAME": "WESTERN SAHARA",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "MAD"
    },
    {
        "CTRY_CODE": "YE",
        "CTRY_NAME": "YEMEN",
        "LANG_CODE": "AR",
        "ISO_CURR_CODE": "YER"
    },
    {
        "CTRY_CODE": "ZM",
        "CTRY_NAME": "ZAMBIA",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "ZMK"
    },
    {
        "CTRY_CODE": "ZW",
        "CTRY_NAME": "ZIMBABWE",
        "LANG_CODE": "EN",
        "ISO_CURR_CODE": "ZWD"
    }
]

```

---

## Typeahead select

**Search Terms:** 'npm'

### Source File 1: `src/components/form/searchable-select/TypeaheadSelectExample.tsx`

```tsx
import { FormTypeaheadSelect, formatPlaceName, SearchableSelectItem } from 'livingston-npm-components';
import industries from './industries.json';
import { useState } from 'react';

const StartValue = {
    label: 'Agriculture',
    value: 'Agriculture'
};

function TypeaheadSelectExample() {
    const [selectedItemValue, setSelectedItemValue] = useState<string | undefined>();
    const [selectedItemValue2, setSelectedItemValue2] = useState<string | undefined>(StartValue.value);
    const [selectedItemValue3, setSelectedItemValue3] = useState<string | undefined>();
    const [industriesList, setIndustriesList] = useState<string[]>(industries);

    const getItemNode = (item: SearchableSelectItem) => {
        return <div className='truncate-text'>{item.label}</div>;
    };

    const typeaheadCallback = (searchTerm: string): Promise<SearchableSelectItem[]> => {
        return new Promise<SearchableSelectItem[]>((resolve) => {
            console.log('in typeaheadCallback [' + searchTerm + ']');
            const filteredArray = industriesList.filter((industry) => {
                return industry.toLowerCase().includes(searchTerm.toLowerCase());
            });
            const transformedArray = filteredArray.map((industry) => {
                return {
                    value: industry,
                    label: industry
                };
            });
            setTimeout(() => resolve(transformedArray), 1000);
        });
    };

    return (
        <div>
            <div className='mb-4'>
                Use the TypeaheadSelect component when you want the user to start with an empty list of lookup values. Then as the user
                inputs a value an API is called to lookup available values. This component is useful when there are a large set of values.
            </div>

            <FormTypeaheadSelect
                items={[]}
                name='typeHeadSelectExample'
                label='Typeahead select'
                tooltip='Tooltip'
                placeholder='Typeahead industry...'
                value={selectedItemValue}
                onSelect={(itemValue) => {
                    setSelectedItemValue(itemValue);
                    console.log('item selected: ', itemValue);
                }}
                getItemNode={getItemNode}
                helpText='Search for your industry'
                typeaheadCallback={{ callbackFunction: typeaheadCallback }}
            />

            <FormTypeaheadSelect
                className='mt-4'
                name='typeAheadSelectExample2'
                label='Typeahead with start value'
                tooltip='Initializes with a start value'
                placeholder='Typeahead industry...'
                value={selectedItemValue2}
                items={[StartValue]}
                onSelect={(itemValue) => {
                    setSelectedItemValue2(itemValue);
                    console.log('item selected 2: ', itemValue);
                }}
                getItemNode={getItemNode}
                helpText='Search for your industry'
                typeaheadCallback={{ callbackFunction: typeaheadCallback }}
            />

            <FormTypeaheadSelect
                className='mt-4'
                name='typeAheadSelectExample3'
                label='Typeahead with add new'
                tooltip='This typeahead allows new items to be added'
                placeholder='Typeahead industry...'
                value={selectedItemValue3}
                items={[]}
                phrases={{
                    addNewItem: "Add '{0}' as a new item",
                    minimumSearchCharacters: 'Enter {0}+ characters to search',
                    noResults: 'No results found'
                }}
                onSelect={(itemValue) => {
                    setSelectedItemValue3(itemValue);
                    console.log('item selected 3: ', itemValue);
                }}
                getItemNode={getItemNode}
                onAddNew={(searchText) => {
                    setIndustriesList((prev) => [...prev, formatPlaceName(searchText)].sort());
                }}
                helpText='Search for your industry'
                typeaheadCallback={{ callbackFunction: typeaheadCallback }}
            />
        </div>
    );
}

export default TypeaheadSelectExample;

```

### Source File 2: `livingston-npm-components/src/Forms/SearchableSelect/FormSearchableSelect.types.ts`

```tsx
import { SizeClass } from '../InputTypes/InputTypes.types';

export interface FormSearchableSelectRef {
    /**
     * Validates the current searchable select field value against validation rules.
     *
     * This method triggers validation of the selected value based on the component's
     * validation rules (required, strictValidation). Returns true if the field is valid,
     * false otherwise. Validation errors are displayed in the UI.
     *
     * @returns {boolean} True if the field passes validation, false otherwise
     *
     * @example
     * const selectRef = useRef<FormSearchableSelectRef>(null);
     *
     * const handleSubmit = () => {
     *   if (selectRef.current?.validateField()) {
     *     console.info('Selection is valid');
     *   } else {
     *     console.info('Selection is invalid');
     *   }
     * };
     */
    validateField: () => boolean;

    /**
     * Retrieves the currently selected value from the searchable select.
     *
     * This method returns the value of the currently selected item. Returns undefined
     * if no item has been selected.
     *
     * @returns {string | undefined} The currently selected value, or undefined if nothing is selected
     *
     * @example
     * const selectRef = useRef<FormSearchableSelectRef>(null);
     *
     * const getSelectedValue = () => {
     *   const value = selectRef.current?.getValue();
     *   console.info('Selected value:', value);
     * };
     */
    getValue: () => string | undefined;

    /**
     * Programmatically sets focus to the searchable select input field.
     *
     * This method triggers focus on the input field, making it active for user interaction
     * or keyboard navigation. Useful for managing focus flow in forms.
     *
     * @returns {void}
     *
     * @example
     * const selectRef = useRef<FormSearchableSelectRef>(null);
     *
     * const focusOnSelect = () => {
     *   selectRef.current?.focus();
     * };
     */
    focus: () => void;

    /**
     * Programmatically removes focus from the searchable select input field.
     *
     * This method triggers the blur event on the input field, which may trigger
     * validation and onBlur callbacks. Useful for programmatically completing
     * input or managing focus flow.
     *
     * @returns {void}
     *
     * @example
     * const selectRef = useRef<FormSearchableSelectRef>(null);
     *
     * const finishSelection = () => {
     *   selectRef.current?.blur();
     * };
     */
    blur: () => void;

    /**
     * Programmatically clears the currently selected value.
     *
     * This method resets the searchable select to its empty state, removing any
     * current selection. The onSelect callback is triggered with undefined.
     *
     * @returns {void}
     *
     * @example
     * const selectRef = useRef<FormSearchableSelectRef>(null);
     *
     * const handleClear = () => {
     *   selectRef.current?.clearValue();
     * };
     */
    clearValue: () => void;

    /**
     * Programmatically sets the selected value on the searchable select.
     *
     * This method finds a matching item in the current filtered entries using an exact match, then selects it, updates the input text, triggers
     * the onSelect callback, and runs validation. If the value is undefined, the
     * field is cleared. If the value does not match any item in the current list,
     * nothing happens.
     *
     * @param {string | undefined} value - The value to set, or undefined to clear the selection
     * @returns {void}
     *
     * @example
     * const selectRef = useRef<FormSearchableSelectRef>(null);
     *
     * const preSelectItem = () => {
     *   selectRef.current?.setValue('item-id-123');
     * };
     */
    setValue: (value: string | undefined) => void;

    /**
     * Reference to the underlying HTML input element.
     *
     * This property provides direct access to the native input element for advanced
     * use cases. May be null if the component is not mounted.
     *
     * @type {HTMLInputElement | null}
     *
     * @example
     * const selectRef = useRef<FormSearchableSelectRef>(null);
     *
     * const scrollToInput = () => {
     *   selectRef.current?.element?.scrollIntoView({ behavior: 'smooth' });
     * };
     */
    element: HTMLInputElement | null;
}

export type SearchableSelectItem = {
    label: string;
    value: string;
    addDivider?: boolean;
};

export type RequiredPhrases = {
    addNewItem?: string;
    minimumSearchCharacters?: string;
    noResults?: string;
};

export interface SearchableSelectTypeaheadCallback {
    callbackFunction: (searchValue: string) => Promise<SearchableSelectItem[]>;
}

export interface FormSearchableSelectProps {
    name: string;
    className?: string;
    dropdownMenuClassName?: string;
    disabled?: boolean;
    placeholder?: string;
    items: SearchableSelectItem[] | undefined;
    size?: SizeClass;
    inputFieldClassName?: string;
    strictValidation?: boolean;
    required?: boolean;
    phrases?: RequiredPhrases;
    onSelect: (selectedItem: string | undefined) => void;
    getItemNode: (item: SearchableSelectItem) => React.ReactNode;
    defaultValue?: string;
    value: string | undefined;
    helpText?: string;
    label?: string;
    tooltip?: string;
    typeaheadCallback?: SearchableSelectTypeaheadCallback;
    errorMessage?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onAddNew?: (searchText: string) => void;
}

```

---

## Checkbox 

**Description:** React-bootstrap checkbox without npm validation

**Search Terms:** 'checkbox', 'UK Clearances'

**File:** `src/ds-layout-components/foundations/components/forms/checkbox/CheckboxExample.tsx`

```tsx
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function CheckboxExample() {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

    const [checkbox21, setCheckbox21] = useState(false);
    const [checkbox22, setCheckbox22] = useState(false);


    return (
        <Form>
            <Form.Group>
                <Form.Label>Checkbox group 1</Form.Label>
                <Form.Check
                    id='checkbox-1'
                    className='mb-2'
                    type='checkbox'
                    label='Checkbox 1'
                    disabled={false}
                    checked={checkbox1}
                    onChange={(e) => setCheckbox1(e.target.checked)}
                />
                <Form.Check
                    id='checkbox-2'
                    type='checkbox'
                    label='Checkbox 2'
                    disabled={false}
                    checked={checkbox2}
                    onChange={(e) => setCheckbox2(e.target.checked)}
                />
            </Form.Group>

            <Form.Group className='mt-4'>
                <Form.Label>Checkbox group 2</Form.Label>
                <Form.Check
                    id='checkbox-2-1'
                    className='mb-2'
                    type='checkbox'
                    label='Checkbox 1'
                    disabled={false}
                    checked={checkbox21}
                    onChange={(e) => setCheckbox21(e.target.checked)}
                />
                <Form.Check
                    id='checkbox-2-2'
                    type='checkbox'
                    label='Checkbox 2'
                    disabled={false}
                    checked={checkbox22}
                    onChange={(e) => setCheckbox22(e.target.checked)}
                />
            </Form.Group>
        </Form>
    );
}
export default CheckboxExample;

```

---

## Tag Checkbox/Radio Group

**Search Terms:** 'pills, checkbox, radio, button'

**File:** `src/ds-layout-components/foundations/components/forms/checkbox/TagCheckAndRadioGroupExample.tsx`

```tsx
import { useState, useEffect } from 'react';
import { FormTagCheckAndRadioGroup, FormTagCheckAndRadioGroupOption } from 'livingston-npm-components';
import { Form } from 'react-bootstrap';

const TagCheckAndRadioGroupExample = () => {
    const [isRadio, setIsRadio] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<FormTagCheckAndRadioGroupOption[]>([
        { value: 'tag1', label: 'Tag value 1', isChecked: false },
        { value: 'tag2', label: 'Tag value 2', isChecked: false },
        { value: 'tag3', label: 'Tag value 3', isChecked: false },
        { value: 'tag4', label: 'Tag value 4', isChecked: false }
    ]);

    useEffect(() => {
        setSelectedOptions((prev) =>
            prev.map((option) => ({
                ...option,
                isChecked: false
            }))
        );
    }, [isRadio]);

    return (
        <>
            <Form.Check
                type='checkbox'
                id='toggle-radio-checkbox'
                label='Tag radio'
                checked={isRadio}
                onChange={() => setIsRadio(!isRadio)}
                className='mb-2'
            />
            <FormTagCheckAndRadioGroup
                name='tag-group'
                type={isRadio ? 'radio' : 'checkbox'}
                options={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                label={isRadio ? 'Select an option' : 'Select one or more options'}
            />
        </>
    );
};

export default TagCheckAndRadioGroupExample;

```

---

## Checkbox group

**Search Terms:** 'checkbox', 'UK Clearances'

**File:** `src/ds-layout-components/foundations/components/forms/checkbox-and-radio-groups/FormCheckboxGroupExample.tsx`

```tsx
import { useRef, useState } from 'react';
import { FormCheckAndRadioGroup, FormCheckAndRadioRef, CheckAndRadioOption } from 'livingston-npm-components';

type Employee = {
    name: string;
    id: number;
    contact: number;
};
const employees: Employee[] = [
    { name: 'John Doe', id: 30, contact: 823456789 },
    { name: 'Janet Smuts', id: 25, contact: 823456780 },
    { name: 'Sam John', id: 40, contact: 823456781 }
];

function RadioInputGroupExample() {
    const employeesRef = useRef<FormCheckAndRadioRef>(null);

    const [selectedEmployees, setSelectedEmployees] = useState<CheckAndRadioOption[]>(
        employees.map((emp) => ({ label: emp.name, value: emp, isChecked: false }))
    );

    console.log('Selected Employees', selectedEmployees);
    return (
        <FormCheckAndRadioGroup
            name='checkbox-example'
            ref={employeesRef}
            type='checkbox'
            label='Checkbox'
            tooltip='Checkbox tooltip'
            helpText='This is a checkbox help text'
            errorMessage='Please select an option'
            setSelectedOptions={setSelectedEmployees}
            options={selectedEmployees}
        />
    );
}
export default RadioInputGroupExample;

```

---

## Single checkbox

**Search Terms:** 'checkbox'

**File:** `src/ds-layout-components/foundations/components/forms/checkbox-and-radio-groups/FormSingleCheckExample.tsx`

```tsx
import { useRef, useState } from 'react';
import { FormSingleCheck, FormSingleCheckRef } from 'livingston-npm-components';

function FormSingleCheckExample() {
    const authorizeLivingstonInternationalRef = useRef<FormSingleCheckRef>(null);
    const [authorizeExample, setAuthorizeExample] = useState<boolean>(false);

    return (
        <FormSingleCheck
            className='mb-3'
            withBorder
            name='authorizeLivingstonInternational'
            ref={authorizeLivingstonInternationalRef}
            label='Authorize Livingston International to debit my bank account'
            errorMessage='You must authorize to proceed'
            isChecked={authorizeExample}
            setIsChecked={setAuthorizeExample}
        />
    );
}
export default FormSingleCheckExample;

```

---

## Super checkbox

**Search Terms:** 'npm', 'supercheckbox'

**File:** `src/components/form/SuperCheckboxGroupExample.tsx`

```tsx
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FormSuperCheckboxGroup, FormSuperCheckbox } from 'livingston-npm-components';
import { Form } from 'react-bootstrap';

type Option = {
    value: string;
    label: string;
    isChecked: boolean;
    disabled?: boolean;
    helpText?: string;
};

const availableOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3', disabled: true, helpText: 'This option is disabled because this it not available yet' }
];

const SuperCheckboxGroupExample = () => {
    const [options, setOptions] = useState<Option[]>(availableOptions.map((option) => ({ ...option, isChecked: false })));
    const [isError, setIsError] = useState(false);

    const handleChange = (value: string, isChecked: boolean) => {
        const updatedOptions = options.map((option) => (option.value === value ? { ...option, isChecked } : option));
        setOptions(updatedOptions);

        const hasSelectedBadOption = updatedOptions.some((option) => option.isChecked && option.value === '2');
        setIsError(hasSelectedBadOption);
    };

    console.log('IsInvalid is: ', isError);

    return (
        <>
            <Form.Label>Select an option</Form.Label>
            <FormSuperCheckboxGroup
                name='Checkbox example'
                className='mb-3'
                required={true}
                isInvalid={isError}
                invalidFeedback='Please select an option'
            >
                {options.map((option, index) => (
                    <FormSuperCheckbox
                        key={index}
                        id={`option-${option.value}`}
                        disabled={option.disabled}
                        labelTitle={option.label}
                        onChange={(isChecked: boolean) => handleChange(option.value, isChecked)}
                        checked={option.isChecked}
                        helpText={option.helpText}
                    />
                ))}
            </FormSuperCheckboxGroup>
        </>
    );
};

export default SuperCheckboxGroupExample;

```

---

## Radio

**Description:** React-bootstrap radio buttons without npm validation

**File:** `src/ds-layout-components/foundations/components/forms/checkbox-and-radio-groups/RadioInputGroupExample.tsx`

```tsx
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function RadioInputGroupExample() {
    const [input, setInput] = useState({ value: '', valid: false, mandatory: true });

    return (
        <Form>
            <Form.Group>
                <Form.Label>Radio label</Form.Label>
                <Form.Check
                    className='mb-1'
                    type='radio'
                    id='radio-example-yes'
                    label='Yes'
                    value='yes'
                    checked={input.value === 'yes'}
                    onChange={(e) => setInput({ ...input, value: e.target.value })}
                />
                <Form.Check
                    className='mb-1'
                    type='radio'
                    id='radio-example-no'
                    label='No'
                    value='no'
                    checked={input.value === 'no'}
                    onChange={(e) => setInput({ ...input, value: e.target.value })}
                />
                <Form.Check
                    type='radio'
                    id='radio-example-maybe'
                    label='Maybe'
                    value='maybe'
                    checked={input.value === 'maybe'}
                    onChange={(e) => setInput({ ...input, value: e.target.value })}
                />
            </Form.Group>
        </Form>
    );
}
export default RadioInputGroupExample;

```

---

## Radio group

**File:** `src/ds-layout-components/foundations/components/forms/checkbox-and-radio-groups/FormRadioGroupExample.tsx`

```tsx
import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FormCheckAndRadioGroup, FormCheckAndRadioRef, CheckAndRadioOption } from 'livingston-npm-components';

function FormRadioGroupExample() {
    const radioGroupRef = useRef<FormCheckAndRadioRef>(null);

    const options: string[] = ['John Doe', 'Janet Smuts', 'Sam John', 'Borris Charles'];

    const [selectedOption, setSelectedOption] = useState<CheckAndRadioOption[]>(
        options.map((option) => ({ label: option, value: option, isChecked: false, tooltip: `Tooltip for ${option}` }))
    );

    const [columnOption, setColumnOption] = useState<CheckAndRadioOption[]>([
        { label: 'One column', value: 1, isChecked: true },
        { label: 'Two columns', value: 2, isChecked: false },
        { label: 'Three columns', value: 3, isChecked: false }
    ]);

    return (
        <Form>
            <FormCheckAndRadioGroup
                className='mb-2'
                name='column-select'
                label=''
                type='radio'
                tooltip='Radio tooltip'
                columns={3}
                setSelectedOptions={setColumnOption}
                options={columnOption}
            />
            <FormCheckAndRadioGroup
                name='radio-example'
                ref={radioGroupRef}
                label='Radio label'
                type='radio'
                columns={columnOption.find((option) => option.isChecked)?.value as 1 | 2 | 3 | undefined}
                helpText='This is a radio help text'
                errorMessage='Please select an option'
                setSelectedOptions={setSelectedOption}
                options={selectedOption}
            />
        </Form>
    );
}
export default FormRadioGroupExample;

```

---

## Super radio

**Search Terms:** 'npm', 'superradio'

**File:** `src/ds-layout-components/foundations/components/forms/superradio/FormSuperRadioExample.tsx`

```tsx
import { FormSuperRadio, FormSuperRadioGroup } from 'livingston-npm-components';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function FormSuperRadioExample() {
    const [selectedCurrency, setSelectedCurrency] = useState<string | undefined>();
    const [disabledSuperRadio, setDisabledSuperRadio] = useState<boolean>(false);

    return (
        <>
            <Form.Check
                type='checkbox'
                id='disabled-super-radio'
                label='Disable the Super radio below'
                checked={disabledSuperRadio}
                onChange={() => setDisabledSuperRadio(!disabledSuperRadio)}
                className='mb-2'
            />
            <FormSuperRadioGroup
                label='Select currency'
                className='mb-3'
                required={true}
                isInvalid={selectedCurrency === 'USD'}
                invalidFeedback='USD not possible for this Canadian bank account'
            >
                <FormSuperRadio
                    id='bank-account-currency-usd'
                    className='mb-2'
                    value='USD'
                    required={true}
                    labelTitle='US Dollar'
                    onChange={setSelectedCurrency}
                    isChecked={selectedCurrency === 'USD'}
                    disabled={disabledSuperRadio}
                />
                <FormSuperRadio
                    id='bank-account-currency-cad'
                    className='mb-2'
                    value='CAD'
                    required={true}
                    labelTitle='Canadian Dollar'
                    onChange={setSelectedCurrency}
                    isChecked={selectedCurrency === 'CAD'}
                    disabled={disabledSuperRadio}
                />
            </FormSuperRadioGroup>
        </>
    );
}
export default FormSuperRadioExample;

```

---

## Date Picker

**Description:** Internally this uses npm's react-datepicker. For more info see https://reactdatepicker.com/ and https://github.com/Hacker0x01/react-datepicker/blob/main/docs/datepicker.md. Note: not all styling is applied to all the available options. Contact the Livingston team if you need help with this.

**Usages:** 'uk clearances'

**Search Terms:** 'date', 'picker', 'calendar', 'datepicker', 'UK Clearances'

### Source File 1: `src/components/form/DatePickerExample.tsx`

```tsx
import { useState } from 'react';
import { FormDatePicker } from 'livingston-npm-components';
import 'react-datepicker/dist/react-datepicker.css';
import { Size } from 'livingston-npm-components';
import { useAppSelector } from '@/store/hooks';

const DatePickerExample = () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const { selectedLanguageCode } = useAppSelector((state) => state.language);

    const checkDayIsWeekDay = (date: Date) => {
        const day = date.getDay();
        // 0 is Sunday, 6 is Saturday
        if (day === 0 || day === 6) {
            return 'Date must be a weekday (Monday to Friday)';
        }
        return true;
    };

    const checkDateIsAfterToday = (date: Date) => {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        if (date.getTime() === today.getTime()) {
            return true;
        }
        if (date.getTime() > today.getTime()) {
            return true;
        }
        return 'Date must be after today';
    };

    return (
        <FormDatePicker
            label='Select date (must be after today and a weekday)'
            tooltip='Select a date that is after today and a weekday (Monday to Friday).'
            helpText='Click to select a date. Format is MM/DD/YYYY.'
            id='date-picker-example-2'
            date={selectedDate}
            setDate={setSelectedDate}
            onlyAllowFutureDates
            size={Size.Large}
            dropdownMode='select'
            customValidationFunction={(date: Date) => {
                let r = checkDateIsAfterToday(date);
                if (r === true) {
                    r = checkDayIsWeekDay(date);
                }
                return r;
            }}
            // Optional: customize year range
            yearDropdownItemNumber={6}
            // Or use minDate/maxDate to control year range
            minDate={new Date()}
            maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 3))} // Add 3 years from today
            locale={selectedLanguageCode}
            errorMessages={{
                invalidDate: 'Please enter a valid date in the format MM/DD/YYYY',
                required: 'This field is required'
            }}
        />
    );
};

export default DatePickerExample;

```

### Source File 2: `livingston-npm-components/src/Forms/DatePicker/FormDatePicker.types.ts`

```tsx
import { DatePickerProps } from 'react-datepicker';
import { Size } from '../InputTypes/InputTypes.types';
import { LocaleString } from '../../utils/languageUtils';

type CustomValidationFunction = (value: Date) => string | boolean;

// Props that we handle ourselves and don't want to conflict with react-datepicker
type HandledDatePickerProps =
    | 'selected'
    | 'onChange'
    | 'onChangeRaw'
    | 'value'
    | 'placeholderText'
    | 'className'
    | 'locale'
    | 'disabled'
    | 'readOnly'
    | 'todayButton'
    | 'showPopperArrow'
    | 'popperPlacement';

type ErrorMessageStrings = {
    invalidDate: string;
    required: string;
    onlyPastDates?: string;
    onlyFutureDates?: string;
};

// Our custom props - simplified without the complex discriminated union
type CustomFormDatePickerProps = {
    id: string;
    date: Date | undefined;
    setDate: (newDate: Date | undefined) => void;
    placeholder?: string;
    className?: string;
    size?: Size;
    locale?: LocaleString;
    helpText?: string;
    label?: string;
    tooltip?: string;
    disabled?: boolean;
    readOnly?: boolean;
    customValidationFunction?: CustomValidationFunction;
    errorMessages: ErrorMessageStrings;
    required?: boolean;
    strictValidation?: boolean;
    onlyAllowPastDates?: boolean;
    onlyAllowFutureDates?: boolean;
    showMonthDropdown?: boolean;
    showYearDropdown?: boolean;
};

// Combine our custom props with react-datepicker props (excluding conflicts)
// This now includes selectsRange and selectsMultiple with their original complexity
export type FormDatePickerProps = CustomFormDatePickerProps & Omit<DatePickerProps, HandledDatePickerProps>;

```

---

## Date range example

**Search Terms:** 'date range'

**File:** `src/ds-layout-components/foundations/components/forms/custom-date-range/CustomDateRange.tsx`

```tsx
import { useState } from 'react';
import { FormDatePicker } from 'livingston-npm-components';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Card } from 'react-bootstrap';
import { useAppSelector } from '@/store/hooks';

const Last30days = 0;
const Last60days = 1;
const Last90days = 2;
const ThisYear = 3;
const LastYear = 4;
const AllTime = 5;

const dateRangeOptions = [
    { label: 'Last 30 days', value: Last30days },
    { label: 'Last 60 days', value: Last60days },
    { label: 'Last 90 days', value: Last90days },
    { label: 'This year', value: ThisYear },
    { label: 'Last year', value: LastYear },
    { label: 'All time', value: AllTime }
];

function CustomDateRange() {
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();
    const [showDateRange, setShowDateRange] = useState(false);
    const [selectedFilterOption, setSelectedFilterOption] = useState<number | 'customDateRange'>(Last30days);
    const [activeDateRange, setActiveDateRange] = useState('Last 30 days');
    const [show, setShow] = useState(false);
    const { selectedLanguageCode } = useAppSelector((state) => state.language);
    const [error, setError] = useState<string>();

    const showError = () => {
        const result = validateRange(startDate, endDate);
        if (result !== true) {
            setError(result as string);
        } else {
            setError(undefined);
        }
    };

    const addDateRangeOption = (index: number, label: string, value: number) => {
        const activeClass = selectedFilterOption === value ? 'active' : '';

        return (
            <Dropdown.Item
                key={index}
                className={`d-flex justify-content-between align-items-stretch ${activeClass}`}
                onClick={() => {
                    setSelectedFilterOption(value);
                    setActiveDateRange(label);
                }}
            >
                <div className='me-3 d-flex align-items-center'>{label}</div>
            </Dropdown.Item>
        );
    };
    const renderDateRangeOptions = () => {
        return (
            <div className='filter-options'>
                {dateRangeOptions.map((dateRangeOption, index) => addDateRangeOption(index, dateRangeOption.label, dateRangeOption.value))}
                <Dropdown.Divider />

                <div
                    className={`dropdown-item cursor-pointer d-flex justify-content-between align-items-stretch ${
                        selectedFilterOption === 'customDateRange' ? 'active' : ''
                    }`}
                    onClick={() => {
                        setShowDateRange(true);
                    }}
                >
                    Custom date range...
                </div>
            </div>
        );
    };

    const validateRange = (start: Date | undefined, end: Date | undefined): string | true => {
        if (start && end) {
            if (end < start) {
                return 'End date must be after start date';
            }
        }
        return true;
    };

    const renderCustomDateRange = () => {
        return (
            <Card>
                <Card.Header className='px-4 py-3'>
                    <h5 className='m-0'>Select a custom date range</h5>
                </Card.Header>
                <Card.Body className='px-4 py-3'>
                    <div className='mb-3'>
                        <FormDatePicker
                            id='date-picker-start'
                            date={startDate}
                            setDate={setStartDate}
                            placeholder='Select start date'
                            label='Start date'
                            locale={selectedLanguageCode}
                            errorMessages={{
                                required: 'This field is required',
                                invalidDate: 'Please enter a valid date in the format MM/DD/YYYY'
                            }}
                        />
                    </div>

                    <FormDatePicker
                        id='date-picker-end'
                        date={endDate}
                        setDate={(value) => {
                            setEndDate(value);
                        }}
                        placeholder='Select end date'
                        label='End date'
                        locale={selectedLanguageCode}
                        errorMessages={{
                            required: 'This field is required',
                            invalidDate: 'Please enter a valid date in the format MM/DD/YYYY'
                        }}
                    />
                </Card.Body>
                <Card.Footer className='d-flex align-items-center px-4 py-3'>
                    <Button
                        variant='tertiary'
                        className='me-3 flex-fill text-center'
                        onClick={() => {
                            setShowDateRange(false);
                        }}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant='primary'
                        className='flex-fill text-center'
                        onClick={() => {
                            setShowDateRange(false);
                            setShow(false);
                            setSelectedFilterOption('customDateRange');
                            setActiveDateRange(formatDate(startDate) + ' - ' + formatDate(endDate));
                            showError();
                        }}
                    >
                        Apply
                    </Button>
                </Card.Footer>
            </Card>
        );
    };

    const formatDate = (date: Date | undefined): string => {
        if (!date) {
            return '';
        }
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();

        return `${month}/${day}/${year}`;
    };

    const getSelectedString = () => {
        if (selectedFilterOption === 'customDateRange') {
            return activeDateRange;
        }

        const option = dateRangeOptions.find((opt) => opt.value === selectedFilterOption);
        return option?.label;
    };

    const handleToggle = (nextShow: boolean) => {
        if (!nextShow && showDateRange) {
            setShowDateRange(false);
        }
        setShow(nextShow);
    };

    return (
        <>
            <Dropdown show={show} onToggle={handleToggle}>
                <Dropdown.Toggle variant='tertiary' id='date-range-dropdown' className='btn-block w-100'>
                    {getSelectedString()}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: '16rem' }}>
                    {!showDateRange && renderDateRangeOptions()}
                    {showDateRange && renderCustomDateRange()}
                </Dropdown.Menu>
            </Dropdown>
            {error && <div className='invalid-feedback d-block'>{error}</div>}
        </>
    );
}
export default CustomDateRange;

```

---

## File dropzone

**Usages:** 'uk clearances'

**Search Terms:** 'upload', 'summary of uploads', 'area', 'uploads', 'UK Clearances'

**File:** `src/ds-layout-components/foundations/components/forms/dropzone/FileDropzoneSample.tsx`

```tsx
import { useRef, useState } from 'react';
import { FormFileDropzone, FormFileDropzoneReview, SelectedFile, DropzoneRef, Alert } from 'livingston-npm-components';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const DropZoneLabels = {
    browseMessage: 'Browse',
    dropMessage: 'or drop files here',
    sizeAndTypesMessage: 'Accepted file types: .pdf, .xlsx, and .csv.',
    sizeTooBig: 'File size too large',
    possibleTypes: 'Possible Types are PDF/JP(E)G/TIFF/PNG',
    totalSizeTooBig: 'Total size too big'
};
const ValidTypes = ['application/pdf', 'image/jpg', 'image/jpeg', 'image/png', 'image/tiff'];
const DocumentTypeCommercialInvoice = { value: 'COI', name: 'Commercial Invoice' };
const DocumentTypePackingList = { value: 'PCL', name: 'Packing List' };
const DocumentTypeClientDataSheet = { value: 'CDS', name: 'Client Data Sheet' };
const DocumentTypeBillOfLading = { value: 'BOL', name: 'Bill of Lading' };
const DocumentTypeSWLPermit = { value: 'SPM', name: 'SWL permit' };
const DocumentTypePurchaseOrder = { value: 'PUO', name: 'Purchase order' };
const DocumentTypeNonReimbursementCertificate = { value: 'NRC', name: 'Non-reimbursement certificate' };
const DocumentTypeDutyFreeEntryCertificate = { value: 'DFE', name: 'Duty Free Entry Certificate' };
const DocumentTypeOther = { value: 'OTH', name: 'Other' };

const filesSelected: SelectedFile[] = [
    {
        documentTypes: [{ value: 'COI', name: 'Commercial Invoice' }],
        name: 'example_doc.pdf',
        size: 1600000.34,
        type: 'application/pdf'
    } as SelectedFile,
    {
        documentTypes: [{ value: 'OTH', name: 'Other' }],
        name: 'example_doc2.pdf',
        size: 800000.34,
        type: 'application/pdf'
    } as SelectedFile
];

const FileDropzoneSample = () => {
    const [selectedFilesCount, setSelectedFilesCount] = useState(0);
    const [documentTypesSelected, setDocumentTypesSelected] = useState(0);
    const [filesError, setFilesError] = useState(0);
    const fileDropzoneRef = useRef<DropzoneRef>(null);
    const [showSummary, setShowSummary] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>(filesSelected);
    console.log(
        `Counts: Selected files = [${selectedFilesCount}] / Files with types = [${documentTypesSelected}] / Errors = [${filesError}]`
    );
    const [allowMultipleFiles, setAllowMultipleFiles] = useState<boolean>(false);

    return (
        <div>
            <Form.Check
                className='mb-2'
                name='searchable-check'
                label='Multiple file select'
                checked={allowMultipleFiles}
                onChange={() => setAllowMultipleFiles(!allowMultipleFiles)}
            />
            {!showSummary ? (
                <>
                    {!isValid ? (
                        <Alert variant='danger' className='d-flex'>
                            <div className='d-flex align-items-start mt-1'>
                                <FontAwesomeIcon icon={faExclamationCircle} className='me-3' />
                            </div>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold'>Missing required documents and details</span>
                                <ul className='mb-0'>
                                    <li>To continue, please upload the following required documents(s):</li>
                                    <li>
                                        One or more uploaded documents is missing a document type. Please select the appropriate type to
                                        proceed
                                    </li>
                                </ul>
                            </div>
                        </Alert>
                    ) : null}
                    <FormFileDropzone
                        name='required-files'
                        labels={DropZoneLabels}
                        allowMultipleDocumentTypes={allowMultipleFiles}
                        phrases={{ duplicateWarningMessage: 'This file already exists' }}
                        limitNumberOfFiles={5}
                        maximumTotalUploadFileSize={10 * 1024 * 1024}
                        maximumUploadFileSize={2 * 1024 * 1024}
                        disabled={false}
                        onFilesSelectedWithDocumentTypeCount={setDocumentTypesSelected}
                        onFileSelectedCount={setSelectedFilesCount}
                        onStateChange={() => {
                            if (fileDropzoneRef.current?.isValid()) {
                                setIsValid(true);
                                console.log('Selected files state has changed. Files are ready to be submitted.');
                            } else {
                                console.log('Selected files state has changed. File types are invalid.');
                            }
                        }}
                        validTypes={ValidTypes}
                        ref={fileDropzoneRef}
                        onErrorFilesSelectedCount={setFilesError}
                        storedFiles={selectedFiles}
                        documentTypeSelection={{
                            selectLabel: 'Select document type(s)',
                            types: [
                                DocumentTypeCommercialInvoice,
                                DocumentTypePackingList,
                                DocumentTypeClientDataSheet,
                                DocumentTypeBillOfLading,
                                DocumentTypeSWLPermit,
                                DocumentTypePurchaseOrder,
                                DocumentTypeNonReimbursementCertificate,
                                DocumentTypeDutyFreeEntryCertificate,
                                DocumentTypeOther
                            ]
                        }}
                        documentTypeDropdownPhrases={{
                            itemsSelected: 'Items selected',
                            selectAll: 'Select all',
                            deselectAll: 'Deselect all',
                            apply: 'Apply',
                            clear: 'Reset',
                            search: 'Search'
                        }}
                        strictValidation={submitted}
                    />
                    <div className='d-flex justify-content-end mt-3'>
                        <Button
                            // disabled={!isValid}
                            onClick={() => {
                                setSubmitted(true);
                                if (fileDropzoneRef.current?.isValid()) {
                                    // setIsValid(fileDropzoneRef.current.isValid());
                                    setIsValid(true);
                                    setSelectedFiles(fileDropzoneRef.current?.getFiles() ?? []);
                                    setShowSummary(!showSummary);
                                } else {
                                    setIsValid(false);
                                }
                            }}
                        >
                            Summary of uploads
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <div className='mt-5'>
                        <h3>Summary of uploads</h3>
                        <FormFileDropzoneReview name='selected-files' selectedFiles={fileDropzoneRef.current?.getFiles() ?? []} />
                    </div>
                    <Button className='mt-3' variant='secondary' onClick={() => setShowSummary(!showSummary)}>
                        Back
                    </Button>
                </>
            )}
        </div>
    );
};
export default FileDropzoneSample;

```

---

## Input group dropdown

**File:** `src/ds-layout-components/foundations/components/input-group/InputGroupExample.tsx`

```tsx
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const InputGroupExample = () => {
    return (
        <>
            <div className='mb-4'>
                <InputGroup>
                    <DropdownButton variant='tertiary' title='Dropdown' id='input-group-left-example'>
                        <Dropdown.Item href='#'>Action 1</Dropdown.Item>
                        <Dropdown.Item href='#'>Action 2 </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#'>Action 3</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control aria-label='Text input with dropdown button' />
                </InputGroup>
            </div>

            <div>
                <InputGroup>
                    <Form.Control aria-label='Text input with dropdown button' />
                    <DropdownButton variant='tertiary' title='Dropdown' id='input-group-right-example'>
                        <Dropdown.Item href='#'>Action 1</Dropdown.Item>
                        <Dropdown.Item href='#'>Action 2 </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='#'>Action 3</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
            </div>
        </>
    );
};
export default InputGroupExample;

```

---

## Input group text prefix

**Search Terms:** 'UK Clearances'

**File:** `src/ds-layout-components/foundations/components/input-group/InputGroupTextPrefixExample.tsx`

```tsx
import { FormNumericInput } from 'livingston-npm-components';
import React from 'react';

const InputGroupTextPrefixExample = () => {
    const [value, setValue] = React.useState<number | string>();
    return (
        <FormNumericInput
            label='Freight cost'
            prefix='GBP'
            className='flex-fill'
            name='inputWithPrefix'
            placeholder='Input a value'
            value={value}
            onChange={setValue}
        />
    );
};
export default InputGroupTextPrefixExample;

```

---

## Basic Form Template

**Search Terms:** 'text', 'email', 'comment', 'input', 'input validation', 'validation'

### Source File 1: `src/ds-layout-components/foundations/components/form-templates/basic-form-example/BasicForm.tsx`

```tsx
import { useRef, forwardRef, useState, useImperativeHandle } from 'react';
import { FormEmailInput, FormTextInput, FormTextInputRef, FormTextarea } from 'livingston-npm-components';

export interface BasicFormRef {
    validateFormFields: () => boolean;
    resetFormFields: () => void;
    getFormFieldValues: () => {
        name: string;
        email: string;
        comments: string;
    };
}

interface BasicFormProps {
    formSubmitted: boolean;
    className?: string;
}

const BasicForm = forwardRef<BasicFormRef, BasicFormProps>(({ formSubmitted, className }, ref) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comments, setComments] = useState<string>('');
    const [isLoading] = useState<boolean>(false);

    const nameFieldRef = useRef<FormTextInputRef>(null);
    const emailFieldRef = useRef<FormTextInputRef>(null);
    const commentFieldRef = useRef<FormTextInputRef>(null);

    const validateFormFields = () => {
        let hasErrors = false;
        if (nameFieldRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (emailFieldRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (commentFieldRef.current?.validateField() === false) {
            hasErrors = true;
        }
        return !hasErrors;
    };

    const getFormFieldValues = () => {
        return {
            name,
            email,
            comments
        };
    };

    const resetFormFields = () => {
        setName('');
        setEmail('');
        setComments('');
    };

    useImperativeHandle(ref, () => ({
        validateFormFields,
        resetFormFields,
        getFormFieldValues
    }));

    return (
        <div className={className}>
            <FormTextInput
                name={'NameField'}
                ref={nameFieldRef}
                readOnly={isLoading}
                required
                value={name}
                customValidation={(value) => {
                    if (value.length > 3) {
                        return { isValid: true, message: '' };
                    } else {
                        return { isValid: false, message: 'Name must be longer than 3 characters' };
                    }
                }}
                placeholder='Enter your name'
                label='Name'
                errorMessage='Please enter a valid name'
                className='mb-2'
                setValue={setName}
                strictValidation={formSubmitted}
            />

            <FormEmailInput
                name={'EmailField'}
                ref={emailFieldRef}
                readOnly={isLoading}
                required
                className='mb-2'
                value={email}
                placeholder='Enter your email'
                label='Email Address'
                errorMessage='Please enter a valid email'
                setValue={setEmail}
                strictValidation={formSubmitted}
            />

            <FormTextarea
                name={'commentField'}
                ref={commentFieldRef}
                readOnly={isLoading}
                required={false}
                maxLength={20}
                className='mb-2'
                value={comments}
                placeholder='Enter a comment'
                label='Comments (Optional)'
                setValue={setComments}
                strictValidation={formSubmitted}
            />
        </div>
    );
});

export default BasicForm;

```

### Source File 2: `src/ds-layout-components/foundations/components/form-templates/basic-form-example/BasicFormExample.tsx`

```tsx
import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SmallSpinner } from 'livingston-npm-components';
import BasicFormFields, { BasicFormRef } from './BasicForm';
import ConfirmCloseModal from '../ConfirmCloseModal';
import { toastQueue } from '@/utils/toastQueue';

const BasicFormExample = () => {
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const formRef = useRef<BasicFormRef>(null);

    const [showCancelModal, setShowCancelModal] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);

        const isValid = formRef.current?.validateFormFields();

        if (!isValid) {
            console.error('Form submission failed due to validation errors.');
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const formValues = formRef.current?.getFormFieldValues();
            console.log(
                'Submitted with values:',
                '\nName: ',
                formValues?.name,
                '\nEmail: ',
                formValues?.email,
                '\nComments: ',
                formValues?.comments
            );
            toastQueue.addToast({ type: 'success', message: 'Form submitted successfully' });
            formRef.current?.resetFormFields();
        }, 1500);
    };

    return (
        <>
            <ConfirmCloseModal
                showModal={showCancelModal}
                onClose={() => {
                    setShowCancelModal(false);
                    formRef.current?.resetFormFields();
                    setFormSubmitted(false);
                }}
                onHide={() => setShowCancelModal(false)}
            />

            <Form noValidate onSubmit={handleSubmit}>
                <BasicFormFields formSubmitted={formSubmitted} ref={formRef} />

                <div className='d-flex justify-content-end'>
                    <Button onClick={() => setShowCancelModal(true)} type='submit' variant='tertiary' className='me-2'>
                        Cancel
                    </Button>
                    <Button disabled={isLoading} variant='primary' type='submit'>
                        {isLoading && <SmallSpinner className='me-2 text-white' />}
                        Submit
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default BasicFormExample;

```

---

## Comprehensive Form Template

### Source File 1: `src/ds-layout-components/foundations/components/form-templates/basic-form-example/BasicForm.tsx`

```tsx
import { useRef, forwardRef, useState, useImperativeHandle } from 'react';
import { FormEmailInput, FormTextInput, FormTextInputRef, FormTextarea } from 'livingston-npm-components';

export interface BasicFormRef {
    validateFormFields: () => boolean;
    resetFormFields: () => void;
    getFormFieldValues: () => {
        name: string;
        email: string;
        comments: string;
    };
}

interface BasicFormProps {
    formSubmitted: boolean;
    className?: string;
}

const BasicForm = forwardRef<BasicFormRef, BasicFormProps>(({ formSubmitted, className }, ref) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comments, setComments] = useState<string>('');
    const [isLoading] = useState<boolean>(false);

    const nameFieldRef = useRef<FormTextInputRef>(null);
    const emailFieldRef = useRef<FormTextInputRef>(null);
    const commentFieldRef = useRef<FormTextInputRef>(null);

    const validateFormFields = () => {
        let hasErrors = false;
        if (nameFieldRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (emailFieldRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (commentFieldRef.current?.validateField() === false) {
            hasErrors = true;
        }
        return !hasErrors;
    };

    const getFormFieldValues = () => {
        return {
            name,
            email,
            comments
        };
    };

    const resetFormFields = () => {
        setName('');
        setEmail('');
        setComments('');
    };

    useImperativeHandle(ref, () => ({
        validateFormFields,
        resetFormFields,
        getFormFieldValues
    }));

    return (
        <div className={className}>
            <FormTextInput
                name={'NameField'}
                ref={nameFieldRef}
                readOnly={isLoading}
                required
                value={name}
                customValidation={(value) => {
                    if (value.length > 3) {
                        return { isValid: true, message: '' };
                    } else {
                        return { isValid: false, message: 'Name must be longer than 3 characters' };
                    }
                }}
                placeholder='Enter your name'
                label='Name'
                errorMessage='Please enter a valid name'
                className='mb-2'
                setValue={setName}
                strictValidation={formSubmitted}
            />

            <FormEmailInput
                name={'EmailField'}
                ref={emailFieldRef}
                readOnly={isLoading}
                required
                className='mb-2'
                value={email}
                placeholder='Enter your email'
                label='Email Address'
                errorMessage='Please enter a valid email'
                setValue={setEmail}
                strictValidation={formSubmitted}
            />

            <FormTextarea
                name={'commentField'}
                ref={commentFieldRef}
                readOnly={isLoading}
                required={false}
                maxLength={20}
                className='mb-2'
                value={comments}
                placeholder='Enter a comment'
                label='Comments (Optional)'
                setValue={setComments}
                strictValidation={formSubmitted}
            />
        </div>
    );
});

export default BasicForm;

```

### Source File 2: `src/ds-layout-components/foundations/components/form-templates/comprehensive-form/NumberFormFields.tsx`

```tsx
import { useRef, forwardRef, useState, useImperativeHandle } from 'react';
import {
    CurrencyType,
    FormMonetaryInput,
    FormMonetaryInputRef,
    FormNumericInput,
    FormNumericInputRef,
    FormPhoneNumber,
    FormPhoneNumberRef,
    FetchCountriesFunction
} from 'livingston-npm-components';
import { fetchCountries } from '@/utils/countryApi';

export interface NumberFormFieldsRef {
    validateFormFields: () => boolean;
    resetFormFields: () => void;
    getFormFieldValues: () => {
        numericInput: InputState;
        phoneNumber: string;
    };
}

interface NumberFormFieldsProps {
    formSubmitted: boolean;
    className?: string;
}

type InputState = {
    value: string | number | undefined;
    valid: boolean;
    onBlur: string | number | undefined;
    mandatory: boolean;
};
const NumberFormFields = forwardRef<NumberFormFieldsRef, NumberFormFieldsProps>(({ formSubmitted, className }, ref) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const [cost, setCost] = useState('');
    const [currency, setCurrency] = useState<CurrencyType>({ currencyCode: 'USD', countryCode: 'US', countryName: 'UNITED STATES' });

    const [numericInput, setNumericInput] = useState<InputState>({
        value: '',
        valid: false,
        onBlur: '',
        mandatory: true
    });

    const numericFieldRef = useRef<FormNumericInputRef>(null);
    const phoneRef = useRef<FormPhoneNumberRef>(null);
    const monetaryRef = useRef<FormMonetaryInputRef>(null);

    const validateFormFields = () => {
        let hasErrors = false;

        if (numericFieldRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (phoneRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (monetaryRef.current?.validateField() === false) {
            hasErrors = true;
        }
        return !hasErrors;
    };

    const getFormFieldValues = () => {
        return {
            numericInput,
            phoneNumber
        };
    };

    const resetFormFields = () => {
        setPhoneNumber('');
        setNumericInput(undefined as unknown as InputState);
    };

    useImperativeHandle(ref, () => ({
        validateFormFields,
        resetFormFields,
        getFormFieldValues
    }));

    return (
        <div className={className}>
            <FormMonetaryInput
                label='Monetary input (with text input)'
                className='mb-2'
                ref={monetaryRef}
                id='value-of-product'
                placeholder='Enter value of product'
                amount={cost}
                fetchCountries={fetchCountries}
                preferredCountries={['CA', 'CN']}
                defaultCountry={currency.countryCode}
                onChangeAmount={(value: string) => setCost(value)}
                onChangeCurrency={setCurrency}
                fieldValid={(result: boolean) => console.log('Field valid currency select?: ', result)}
                strictValidation={formSubmitted}
                errorMessage='Please enter a valid amount'
            />
            <FormNumericInput
                name='numeric-input-example'
                className='mb-2'
                label='Numeric input label'
                ref={numericFieldRef}
                placeholder='Enter a value'
                value={numericInput.value}
                onChange={(newValue) => setNumericInput({ ...numericInput, value: newValue })}
                onBlur={(newValue) => setNumericInput({ ...numericInput, onBlur: newValue })}
                decimalPoint={2}
                strictValidation={formSubmitted}
            />

            <FormPhoneNumber
                name='phoneNumberExample'
                label='Telephone'
                ref={phoneRef}
                setValue={setPhoneNumber}
                placeholder='Enter phone number'
                value={phoneNumber}
                fetchCountries={fetchCountries as FetchCountriesFunction}
                errorMessage='Please enter valid contact number. E.g. +1 437 123456'
                preferredCountries={['CA', 'US']}
                defaultCountry={'IN'}
                size='lg'
                strictValidation={formSubmitted}
            />
        </div>
    );
});

export default NumberFormFields;

```

### Source File 3: `src/ds-layout-components/foundations/components/form-templates/comprehensive-form/SelectFields.tsx`

```tsx
import { useRef, forwardRef, useState, useImperativeHandle, useEffect } from 'react';
import {
    FormSelect,
    FormSearchableSelect,
    FormSearchableSelectRef,
    SearchableSelectItem,
    FormSelectRef,
    FormCountrySelect,
    FormProvinceSelect,
    FormTypeaheadSelect,
    FormMultiCountrySelect,
    FormMultiCountrySelectRef,
    FormMonetaryInput,
    CurrencyType,
    FormMonetaryInputRef,
    FormDropdownRef,
    FormDropdown
} from 'livingston-npm-components';
import industries from '@/components/form/searchable-select/industries.json';
import { fetchCountries } from '@/utils/countryApi.ts';
import { fetchProvinces } from '@/utils/countryApi';

export interface SelectFieldsRef {
    validateFormFields: () => boolean;
    resetFormFields: () => void;
    getFormFieldValues: () => {
        selectValue: string | undefined;
        searchableSelectValue: string | undefined;
    };
}

interface SelectFieldsProps {
    formSubmitted: boolean;
    className?: string;
}

export type Currency = 'USD' | 'CAD';

const SelectFields = forwardRef<SelectFieldsRef, SelectFieldsProps>(({ formSubmitted, className }, ref) => {
    const [selectValue, setSelectValue] = useState<string>();
    const [dropdownValue, setDropdownValue] = useState<string>();
    const [searchableSelectValue, setSearchableSelectValue] = useState<string | undefined>();
    const [searchableSelectItems, setSearchableSelectItems] = useState<SearchableSelectItem[]>([]);
    const [worldCurrency, setWorldCurrency] = useState<Currency | undefined>();

    const PREFERRED_COUNTRIES: CurrencyType[] = [
        {
            countryCode: 'US',
            countryName: 'UNITED STATES',
            currencyCode: 'USD'
        },
        {
            countryCode: 'CA',
            countryName: 'CANADA',
            currencyCode: 'CAD'
        }
    ];

    const [selectedCountry, setSelectedCountry] = useState<string | undefined>();
    const [selectedProvince, setSelectedProvince] = useState<string | undefined>();
    const [selectedTypeaheadValue, setSelectedTypeaheadValue] = useState<string | undefined>();
    const [selectedCountryCodes, setSelectedCountryCodes] = useState('');
    const [industriesList] = useState<string[]>(industries);

    const searchableSelectRef = useRef<FormSearchableSelectRef>(null);
    const selectRef = useRef<FormSelectRef>(null);
    const dropdownRef = useRef<FormDropdownRef>(null);
    const currencyRef = useRef<FormMonetaryInputRef>(null);

    const countrySelectRef = useRef<FormSearchableSelectRef>(null);
    const provinceSelectRef = useRef<FormSearchableSelectRef>(null);
    const typeaheadSelectRef = useRef<FormSearchableSelectRef>(null);
    const multiCountrySelectRef = useRef<FormMultiCountrySelectRef>(null);

    useEffect(() => {
        const transformedArray = industries.map((industry) => {
            return {
                value: industry,
                label: industry
            };
        });
        setSearchableSelectItems(transformedArray);
    }, []);

    const getItemNode = (item: SearchableSelectItem) => {
        return <div className='truncate-text'>{item.label}</div>;
    };

    const typeaheadCallback = (searchTerm: string): Promise<SearchableSelectItem[]> => {
        return new Promise<SearchableSelectItem[]>((resolve) => {
            console.log('in typeaheadCallback [' + searchTerm + ']');
            const filteredArray = industriesList.filter((industry) => {
                return industry.toLowerCase().includes(searchTerm.toLowerCase());
            });
            const transformedArray = filteredArray.map((industry) => {
                return {
                    value: industry,
                    label: industry
                };
            });
            setTimeout(() => resolve(transformedArray), 1000);
        });
    };

    const validateFormFields = () => {
        let hasErrors = false;

        if (searchableSelectRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (selectRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (dropdownRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (currencyRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (countrySelectRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (provinceSelectRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (typeaheadSelectRef.current?.validateField() === false) {
            hasErrors = true;
        }

        if (multiCountrySelectRef.current?.validateField() === false) {
            hasErrors = true;
        }

        return !hasErrors;
    };

    const getFormFieldValues = () => {
        return {
            selectValue,
            searchableSelectValue
        };
    };

    const resetFormFields = () => {
        setSelectValue('');
        setSearchableSelectValue('');
    };
    useImperativeHandle(ref, () => ({
        validateFormFields,
        resetFormFields,
        getFormFieldValues
    }));

    return (
        <div className={className}>
            <FormSelect
                label='Select'
                className='mb-2'
                ref={selectRef}
                name='selectExample'
                placeholder='Open this select menu'
                value={selectValue}
                setValue={setSelectValue}
                options={[
                    { value: 1, label: 'One' },
                    { value: 2, label: 'Two' },
                    { value: 3, label: 'Three' }
                ]}
                errorMessage='Please select an option'
                strictValidation={formSubmitted}
            />

            <FormDropdown
                name='npm-dropdown'
                className='mb-2'
                ref={dropdownRef}
                label='Dropdown'
                placeholder='Open this dropdown menu'
                options={[
                    { value: 1, label: 'One' },
                    { value: 2, label: 'Two' },
                    { value: 3, label: 'Three' }
                ]}
                value={dropdownValue}
                onChange={(value) => {
                    setDropdownValue(value);
                }}
                variant='tertiary'
                strictValidation={formSubmitted}
                width='full'
                errorMessage='Please select an option'
            />

            <FormMonetaryInput
                label='Currency select'
                id='currency-of-sale-world'
                fetchCountries={() => fetchCountries()}
                ref={currencyRef}
                className='mb-2'
                defaultCountry={PREFERRED_COUNTRIES.find((country) => country.currencyCode === worldCurrency)?.countryCode}
                onChangeCurrency={(currency: CurrencyType) => {
                    setWorldCurrency(currency.currencyCode as Currency);
                }}
                showAmount={false}
                placeholder='Select world currency'
                errorMessage='Please select a currency'
                strictValidation={formSubmitted}
            />

            <FormSearchableSelect
                name='searchableSelectExample'
                className='mb-2'
                label='Searchable select'
                placeholder='Select industry...'
                value={searchableSelectValue}
                items={searchableSelectItems}
                onSelect={(itemValue: string | undefined) => {
                    setSearchableSelectValue(itemValue);
                    console.log('item selected: ', itemValue);
                }}
                getItemNode={getItemNode}
                strictValidation={formSubmitted}
                ref={searchableSelectRef}
                errorMessage='Please select an option'
                required
            />

            <FormCountrySelect
                name='exampleSelector1'
                className='mb-2'
                label='Country select'
                ref={countrySelectRef}
                value={selectedCountry}
                onChange={(country: string | undefined) => setSelectedCountry(country)}
                fetchCountries={fetchCountries}
                strictValidation={formSubmitted}
                errorMessage='Please select an option'
            />

            <FormProvinceSelect
                name='example-province-select'
                className='mb-2'
                ref={provinceSelectRef}
                label='Province select'
                placeholder='Select a province'
                countryCode='US'
                value={selectedProvince}
                onChange={(province: string | undefined) => setSelectedProvince(province)}
                fetchProvinces={fetchProvinces}
                strictValidation={formSubmitted}
                errorMessage='Please select an option'
            />

            <FormTypeaheadSelect
                items={[]}
                ref={typeaheadSelectRef}
                className='mb-2'
                name='typeHeadSelectExample'
                label='Typeahead select'
                placeholder='Typeahead industry...'
                value={selectedTypeaheadValue}
                onSelect={(itemValue) => {
                    setSelectedTypeaheadValue(itemValue);
                    console.log('item selected: ', itemValue);
                }}
                getItemNode={getItemNode}
                typeaheadCallback={{ callbackFunction: typeaheadCallback }}
                errorMessage='Please select an option'
                strictValidation={formSubmitted}
            />
            <FormMultiCountrySelect
                name='example-multi-select'
                ref={multiCountrySelectRef}
                strictValidation={formSubmitted}
                label='Multi country select label'
                placeholder='Select country of origin'
                selectedCodes={selectedCountryCodes}
                setSelectedCodes={setSelectedCountryCodes}
                fetchCountries={fetchCountries}
                errorMessage='Please select at least one country'
            />
        </div>
    );
});

export default SelectFields;

```

### Source File 4: `src/ds-layout-components/foundations/components/form-templates/comprehensive-form/CheckAndRadioFormFields.tsx`

```tsx
import { useRef, forwardRef, useState, useImperativeHandle } from 'react';
import {
    CheckAndRadioOption,
    FormCheckAndRadioGroup,
    FormCheckAndRadioRef,
    FormSuperRadioGroup,
    FormSuperRadio,
    FormSuperRadioGroupRef,
    FormSuperCheckboxGroup,
    FormSuperCheckbox,
    FormSuperCheckboxGroupRef,
    FormSingleCheck,
    FormSingleCheckRef
} from 'livingston-npm-components';

export interface CheckAndRadioFormFieldsRef {
    validateFormFields: () => boolean;
    resetFormFields: () => void;
    getFormFieldValues: () => {
        radioOption: CheckAndRadioOption[];
        checkOption: CheckAndRadioOption[];
    };
}

interface CheckAndRadioFormFieldsProps {
    formSubmitted: boolean;
    className?: string;
}

type Employee = {
    name: string;
    id: number;
    contact: number;
};
const employees: Employee[] = [
    { name: 'John Doe', id: 30, contact: 823456789 },
    { name: 'Janet Smuts', id: 25, contact: 823456780 },
    { name: 'Sam John', id: 40, contact: 823456781 }
];

type SuperCheckOption = {
    value: string;
    label: string;
    isChecked: boolean;
    disabled?: boolean;
    helpText?: string;
};

const availableSuperCheckOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3', disabled: true, helpText: 'This option is disabled because this it not available yet' }
];

const options: string[] = ['John Doe', 'Janet Smuts', 'Sam John'];

const CheckAndRadioFormFields = forwardRef<CheckAndRadioFormFieldsRef, CheckAndRadioFormFieldsProps>(
    ({ formSubmitted, className }, ref) => {
        const [radioOption, setRadioOption] = useState<CheckAndRadioOption[]>(
            options.map((option) => ({ label: option, value: option, isChecked: false }))
        );

        const [checkOption, setCheckOption] = useState<CheckAndRadioOption[]>(
            employees.map((emp) => ({ label: emp.name, value: emp, isChecked: false }))
        );

        const [selectedCurrency, setSelectedCurrency] = useState<string | undefined>();

        const [superCheckOptions, setSuperCheckOptions] = useState<SuperCheckOption[]>(
            availableSuperCheckOptions.map((option) => ({ ...option, isChecked: false }))
        );

        const radioGroupRef = useRef<FormCheckAndRadioRef>(null);
        const checkGroupRef = useRef<FormCheckAndRadioRef>(null);
        const superRadioGroupRef = useRef<FormSuperRadioGroupRef>(null);
        const superCheckRef = useRef<FormSuperCheckboxGroupRef>(null);
        const authorizeLivingstonInternationalRef = useRef<FormSingleCheckRef>(null);
        const [authorizeExample, setAuthorizeExample] = useState<boolean>(false);

        const validateFormFields = () => {
            let hasErrors = false;
            if (radioGroupRef.current?.validateField() === false) {
                hasErrors = true;
            }

            if (checkGroupRef.current?.validateField() === false) {
                hasErrors = true;
            }

            if (superRadioGroupRef.current?.validateField() === false) {
                hasErrors = true;
            }

            if (superCheckRef.current?.validateField() === false) {
                hasErrors = true;
            }

            return !hasErrors;
        };

        const getFormFieldValues = () => {
            return {
                radioOption,
                checkOption
            };
        };

        const resetFormFields = () => {
            setRadioOption(options.map((option) => ({ label: option, value: option, isChecked: false })));
            setCheckOption(employees.map((emp) => ({ label: emp.name, value: emp, isChecked: false })));
            setSelectedCurrency(undefined);
        };
        useImperativeHandle(ref, () => ({
            validateFormFields,
            resetFormFields,
            getFormFieldValues
        }));

        return (
            <div className={className}>
                <FormCheckAndRadioGroup
                    name='radio-example'
                    ref={radioGroupRef}
                    className='mb-3'
                    label='Radio label'
                    type='radio'
                    errorMessage='Please select an option'
                    setSelectedOptions={setRadioOption}
                    options={radioOption}
                    strictValidation={formSubmitted}
                />

                <FormCheckAndRadioGroup
                    name='checkbox-example'
                    ref={checkGroupRef}
                    className='mb-3'
                    type='checkbox'
                    label='Checkbox'
                    errorMessage='Please select an option'
                    setSelectedOptions={setCheckOption}
                    options={checkOption}
                    strictValidation={formSubmitted}
                />

                <FormSingleCheck
                    className='mb-3'
                    withBorder
                    name='authorizeLivingstonInternational'
                    ref={authorizeLivingstonInternationalRef}
                    label='Authorize Livingston International to debit my bank account'
                    errorMessage='You must authorize to proceed'
                    strictValidation={formSubmitted}
                    isChecked={authorizeExample}
                    setIsChecked={setAuthorizeExample}
                />

                <FormSuperRadioGroup
                    label='Select currency'
                    ref={superRadioGroupRef}
                    className='mb-3'
                    required={true}
                    strictValidation={formSubmitted}
                    selectedValue={selectedCurrency}
                    errorMessage='Please select a currency'
                >
                    <FormSuperRadio
                        id='bank-account-currency-usd'
                        className='mb-2'
                        value='USD'
                        labelTitle='US Dollar'
                        onChange={setSelectedCurrency}
                        isChecked={selectedCurrency === 'USD'}
                    />
                    <FormSuperRadio
                        id='bank-account-currency-cad'
                        className='mb-2'
                        value='CAD'
                        labelTitle='Canadian Dollar'
                        onChange={setSelectedCurrency}
                        isChecked={selectedCurrency === 'CAD'}
                    />
                </FormSuperRadioGroup>
                <FormSuperCheckboxGroup
                    name='Checkbox example'
                    ref={superCheckRef}
                    label='Super Checkbox'
                    className='mb-3'
                    errorMessage='Please select an option'
                    strictValidation={formSubmitted}
                    selectedValues={superCheckOptions.filter((option) => option.isChecked).map((option) => option.value)}
                >
                    {superCheckOptions.map((option, index) => (
                        <FormSuperCheckbox
                            key={index}
                            id={`option-${option.value}`}
                            disabled={option.disabled}
                            labelTitle={option.label}
                            onChange={(isChecked: boolean) => {
                                const updatedOptions = superCheckOptions.map((superCheckOption) =>
                                    superCheckOption.value === option.value ? { ...superCheckOption, isChecked } : superCheckOption
                                );
                                setSuperCheckOptions(updatedOptions);
                            }}
                            checked={option.isChecked}
                        />
                    ))}
                </FormSuperCheckboxGroup>
            </div>
        );
    }
);

export default CheckAndRadioFormFields;

```

### Source File 5: `src/ds-layout-components/foundations/components/form-templates/comprehensive-form/DateFormFields.tsx`

```tsx
import { useRef, forwardRef, useState, useImperativeHandle } from 'react';
import { FormDatePickerRef, FormDatePicker, Size } from 'livingston-npm-components';
import { useAppSelector } from '@/store/hooks';

export interface DateFormFieldsRef {
    validateFormFields: () => boolean;
    resetFormFields: () => void;
    getFormFieldValues: () => {
        selectedDate: Date | undefined;
    };
}

interface DateFormFieldsProps {
    formSubmitted: boolean;
    className?: string;
}

const DateFormFields = forwardRef<DateFormFieldsRef, DateFormFieldsProps>(({ formSubmitted, className }, ref) => {
    const { selectedLanguageCode } = useAppSelector((state) => state.language);

    const [selectedDate, setSelectedDate] = useState<Date | undefined>();

    const datePickerRef = useRef<FormDatePickerRef>(null);

    const validateFormFields = () => {
        let hasErrors = false;

        if (datePickerRef.current?.validateField() === false) {
            hasErrors = true;
        }

        return !hasErrors;
    };

    const getFormFieldValues = () => {
        return {
            selectedDate
        };
    };

    const resetFormFields = () => {
        setSelectedDate(undefined);
    };
    useImperativeHandle(ref, () => ({
        validateFormFields,
        resetFormFields,
        getFormFieldValues
    }));

    return (
        <div className={className}>
            <FormDatePicker
                label='Select date (must be after today and a weekday)'
                ref={datePickerRef}
                id='date-picker-example-2'
                date={selectedDate}
                setDate={setSelectedDate}
                size={Size.Large}
                dropdownMode='select'
                strictValidation={formSubmitted}
                yearDropdownItemNumber={6}
                locale={selectedLanguageCode}
                errorMessages={{ invalidDate: 'Please select a valid date', required: 'Please choose a date' }}
            />
        </div>
    );
});

export default DateFormFields;

```

### Source File 6: `src/ds-layout-components/foundations/components/form-templates/comprehensive-form/ComprehensiveFormExample.tsx`

```tsx
import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SmallSpinner } from 'livingston-npm-components';
import BasicFormFields, {
    BasicFormRef
} from '@/ds-layout-components/foundations/components/form-templates/basic-form-example/BasicForm.tsx';
import ConfirmCloseModal from '../ConfirmCloseModal';
import NumberFormFields, { NumberFormFieldsRef } from './NumberFormFields';
import SelectFields, { SelectFieldsRef } from './SelectFields';
import CheckAndRadioFormFields, { CheckAndRadioFormFieldsRef } from './CheckAndRadioFormFields';
import DateFormFields, { DateFormFieldsRef } from './DateFormFields';
import { toastQueue } from '@/utils/toastQueue';

const ComprehensiveFormExample = () => {
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const formRef = useRef<BasicFormRef>(null);
    const numberFieldsRef = useRef<NumberFormFieldsRef>(null);
    const selectFieldsRef = useRef<SelectFieldsRef>(null);
    const checkAndRadioFormFieldsRef = useRef<CheckAndRadioFormFieldsRef>(null);
    const dateFormFieldsRef = useRef<DateFormFieldsRef>(null);

    const [showCancelModal, setShowCancelModal] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);

        const isValid = formRef.current?.validateFormFields();
        const numbersIsValid = numberFieldsRef.current?.validateFormFields();
        const selectIsValid = selectFieldsRef.current?.validateFormFields();

        const checkAndRadioIsValid = checkAndRadioFormFieldsRef.current?.validateFormFields();
        const dateIsValid = dateFormFieldsRef.current?.validateFormFields();

        if (!isValid || !numbersIsValid || !selectIsValid || !checkAndRadioIsValid || !dateIsValid) {
            console.error('Form submission failed due to validation errors.');
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const formValues = formRef.current?.getFormFieldValues();
            console.log(
                'Submitted with values:',
                '\nName: ',
                formValues?.name,
                '\nEmail: ',
                formValues?.email,
                '\nComments: ',
                formValues?.comments
            );
            toastQueue.addToast({ type: 'success', message: 'Form submitted successfully' });
            formRef.current?.resetFormFields();
        }, 1500);
    };

    return (
        <>
            <ConfirmCloseModal
                showModal={showCancelModal}
                onClose={() => {
                    setShowCancelModal(false);
                    formRef.current?.resetFormFields();
                    setFormSubmitted(false);
                }}
                onHide={() => setShowCancelModal(false)}
            />

            <Form noValidate onSubmit={handleSubmit}>
                <h3 className='mb-2'>Inputs</h3>
                <BasicFormFields className='' formSubmitted={formSubmitted} ref={formRef} />
                <NumberFormFields className='mb-4' formSubmitted={formSubmitted} ref={numberFieldsRef} />

                <h3 className='mb-2'>Selectors</h3>
                <SelectFields className='mb-4' formSubmitted={formSubmitted} ref={selectFieldsRef} />

                <h3 className='mb-2'>Checks and Radios</h3>

                <CheckAndRadioFormFields className='mb-4' formSubmitted={formSubmitted} ref={checkAndRadioFormFieldsRef} />

                <h3 className='mb-2'>Date Picker</h3>
                <DateFormFields className='mb-4' formSubmitted={formSubmitted} ref={dateFormFieldsRef} />

                <div className='d-flex justify-content-end'>
                    <Button onClick={() => setShowCancelModal(true)} type='submit' variant='tertiary' className='me-2'>
                        Cancel
                    </Button>
                    <Button disabled={isLoading} variant='primary' type='submit'>
                        {isLoading && <SmallSpinner className='me-2 text-white' />}
                        Submit
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default ComprehensiveFormExample;

```

---

## Form in Modal Template

**Search Terms:** 'text', 'email', 'comment', 'input', 'input validation', 'validation'

### Source File 1: `src/ds-layout-components/foundations/components/form-templates/form-modal-example/ModalForm.tsx`

```tsx
import { useRef, forwardRef, useState, useImperativeHandle } from 'react';
import { FormEmailInput, FormTextInput, FormTextInputRef, FormTextarea } from 'livingston-npm-components';

export interface ModalFormRef {
    validateFormFields: () => boolean;
    resetFormFields: () => void;
    getFormFieldValues: () => {
        name: string;
        email: string;
        comments: string;
    };
}

interface ModalFormProps {
    formSubmitted: boolean;
    name: string;
    setName: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    comments: string;
    setComments: (value: string) => void;
}

const ModalForm = forwardRef<ModalFormRef, ModalFormProps>(
    ({ formSubmitted, name, setName, email, setEmail, comments, setComments }, ref) => {
        const [isLoading] = useState<boolean>(false);

        const nameFieldRef = useRef<FormTextInputRef>(null);
        const emailFieldRef = useRef<FormTextInputRef>(null);
        const commentFieldRef = useRef<FormTextInputRef>(null);

        const validateFormFields = () => {
            let hasErrors = false;
            if (nameFieldRef.current?.validateField() === false) {
                hasErrors = true;
            }

            if (emailFieldRef.current?.validateField() === false) {
                hasErrors = true;
            }

            if (commentFieldRef.current?.validateField() === false) {
                hasErrors = true;
            }
            return !hasErrors;
        };

        const getFormFieldValues = () => {
            return {
                name,
                email,
                comments
            };
        };

        const resetFormFields = () => {
            setName('');
            setEmail('');
            setComments('');
        };

        useImperativeHandle(ref, () => ({
            validateFormFields,
            resetFormFields,
            getFormFieldValues
        }));

        return (
            <>
                <FormTextInput
                    name={'NameField'}
                    ref={nameFieldRef}
                    readOnly={isLoading}
                    required
                    value={name}
                    tooltip='This is a useful explanation of this field'
                    customValidation={(value) => {
                        if (value.length > 3) {
                            return { isValid: true, message: '' };
                        } else {
                            return { isValid: false, message: 'Name must be longer than 3 characters' };
                        }
                    }}
                    placeholder='Enter your name'
                    label='Name'
                    helpText='Required field with standard validation'
                    errorMessage='Please enter a valid name'
                    setValue={setName}
                    strictValidation={formSubmitted}
                />

                <FormEmailInput
                    name={'EmailField'}
                    ref={emailFieldRef}
                    readOnly={isLoading}
                    required
                    value={email}
                    placeholder='Enter your email'
                    label='Email Address'
                    helpText='Required field with standard validation'
                    errorMessage='Please enter a valid email'
                    setValue={setEmail}
                    strictValidation={formSubmitted}
                />

                <FormTextarea
                    name={'commentField'}
                    ref={commentFieldRef}
                    readOnly={isLoading}
                    required={false}
                    maxLength={20}
                    resizable={false}
                    value={comments}
                    placeholder='Enter a comment'
                    label='Comments (Optional)'
                    helpText='Optional field with no validation'
                    setValue={setComments}
                    strictValidation={formSubmitted}
                />
            </>
        );
    }
);

export default ModalForm;

```

### Source File 2: `src/ds-layout-components/foundations/components/form-templates/form-modal-example/FormInModalExample.tsx`

```tsx
import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SmallSpinner } from 'livingston-npm-components';
import ModalForm, { ModalFormRef } from './ModalForm';
import { Modal } from 'react-bootstrap';
import ConfirmCloseModal from '../ConfirmCloseModal';
import { toastQueue } from '@/utils/toastQueue';

const FormInModalExample = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comments, setComments] = useState<string>('');

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const formRef = useRef<ModalFormRef>(null);

    const [showModal, setShowModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [shouldResetForm, setShouldResetForm] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleSubmit = () => {
        setFormSubmitted(true);

        const isValid = formRef.current?.validateFormFields();

        if (!isValid) {
            console.error('Form submission failed due to validation errors.');
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const formValues = formRef.current?.getFormFieldValues();
            console.log(
                'Submitted with values:',
                '\nName: ',
                formValues?.name,
                '\nEmail: ',
                formValues?.email,
                '\nComments: ',
                formValues?.comments
            );
            setShowModal(false);
            toastQueue.addToast({ type: 'success', message: 'Form submitted successfully' });
            formRef.current?.resetFormFields();
        }, 1500);
    };

    const handleCancelConfirm = () => {
        setShowCancelModal(false);
        setShowModal(false); // Close main modal too

        setShouldResetForm(true);
        setFormSubmitted(false);
    };

    return (
        <>
            <Button variant='primary' className='mt-2 me-2' onClick={() => handleShowModal()}>
                Launch form modal
            </Button>

            <ConfirmCloseModal
                showModal={showCancelModal}
                onClose={() => {
                    handleCancelConfirm();
                }}
                onHide={() => {
                    setShowCancelModal(false);
                    setShowModal(true);
                }}
            />

            <Modal
                centered
                size='lg'
                show={showModal}
                onHide={() => {
                    setShowModal(false);
                    setShowCancelModal(true);
                }}
                onShow={() => {
                    // Reset form when modal opens if we flagged it for reset
                    if (shouldResetForm) {
                        setTimeout(() => {
                            // Small delay to ensure form is mounted
                            formRef.current?.resetFormFields();
                            setFormSubmitted(false);
                            setShouldResetForm(false); // Clear the flag
                        }, 50);
                    }
                }}
            >
                <Modal.Header className='justify-content-between'>
                    <h3>Form modal example</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate>
                        <ModalForm
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            comments={comments}
                            setComments={setComments}
                            formSubmitted={formSubmitted}
                            ref={formRef}
                        />

                        <div className='d-flex justify-content-end'></div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            setShowModal(false);
                            setShowCancelModal(true);
                        }}
                        variant='tertiary'
                        className='me-2'
                    >
                        Cancel
                    </Button>
                    <Button disabled={isLoading} variant='primary' onClick={() => handleSubmit()}>
                        {isLoading && <SmallSpinner className='me-2 text-white' />}
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FormInModalExample;

```

---

## Update pre-populated Form

**Search Terms:** 'text', 'email', 'comment', 'input', 'input validation', 'validation'

### Source File 1: `src/ds-layout-components/foundations/components/form-templates/form-modal-example/ModalForm.tsx`

```tsx
import { useRef, forwardRef, useState, useImperativeHandle } from 'react';
import { FormEmailInput, FormTextInput, FormTextInputRef, FormTextarea } from 'livingston-npm-components';

export interface ModalFormRef {
    validateFormFields: () => boolean;
    resetFormFields: () => void;
    getFormFieldValues: () => {
        name: string;
        email: string;
        comments: string;
    };
}

interface ModalFormProps {
    formSubmitted: boolean;
    name: string;
    setName: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    comments: string;
    setComments: (value: string) => void;
}

const ModalForm = forwardRef<ModalFormRef, ModalFormProps>(
    ({ formSubmitted, name, setName, email, setEmail, comments, setComments }, ref) => {
        const [isLoading] = useState<boolean>(false);

        const nameFieldRef = useRef<FormTextInputRef>(null);
        const emailFieldRef = useRef<FormTextInputRef>(null);
        const commentFieldRef = useRef<FormTextInputRef>(null);

        const validateFormFields = () => {
            let hasErrors = false;
            if (nameFieldRef.current?.validateField() === false) {
                hasErrors = true;
            }

            if (emailFieldRef.current?.validateField() === false) {
                hasErrors = true;
            }

            if (commentFieldRef.current?.validateField() === false) {
                hasErrors = true;
            }
            return !hasErrors;
        };

        const getFormFieldValues = () => {
            return {
                name,
                email,
                comments
            };
        };

        const resetFormFields = () => {
            setName('');
            setEmail('');
            setComments('');
        };

        useImperativeHandle(ref, () => ({
            validateFormFields,
            resetFormFields,
            getFormFieldValues
        }));

        return (
            <>
                <FormTextInput
                    name={'NameField'}
                    ref={nameFieldRef}
                    readOnly={isLoading}
                    required
                    value={name}
                    tooltip='This is a useful explanation of this field'
                    customValidation={(value) => {
                        if (value.length > 3) {
                            return { isValid: true, message: '' };
                        } else {
                            return { isValid: false, message: 'Name must be longer than 3 characters' };
                        }
                    }}
                    placeholder='Enter your name'
                    label='Name'
                    helpText='Required field with standard validation'
                    errorMessage='Please enter a valid name'
                    setValue={setName}
                    strictValidation={formSubmitted}
                />

                <FormEmailInput
                    name={'EmailField'}
                    ref={emailFieldRef}
                    readOnly={isLoading}
                    required
                    value={email}
                    placeholder='Enter your email'
                    label='Email Address'
                    helpText='Required field with standard validation'
                    errorMessage='Please enter a valid email'
                    setValue={setEmail}
                    strictValidation={formSubmitted}
                />

                <FormTextarea
                    name={'commentField'}
                    ref={commentFieldRef}
                    readOnly={isLoading}
                    required={false}
                    maxLength={20}
                    resizable={false}
                    value={comments}
                    placeholder='Enter a comment'
                    label='Comments (Optional)'
                    helpText='Optional field with no validation'
                    setValue={setComments}
                    strictValidation={formSubmitted}
                />
            </>
        );
    }
);

export default ModalForm;

```

### Source File 2: `src/ds-layout-components/foundations/components/form-templates/form-modal-example/FormInModalPopulatedExample.tsx`

```tsx
import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SmallSpinner } from 'livingston-npm-components';
import ModalForm, { ModalFormRef } from './ModalForm';
import { Modal } from 'react-bootstrap';
import ConfirmCloseModal from '../ConfirmCloseModal';
import { Spinner } from 'livingston-npm-components';
import { toastQueue } from '@/utils/toastQueue';

const FormInModalPopulatedExample = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comments, setComments] = useState<string>('');

    const [savedName, setSavedName] = useState<string>('Jerry Emerson');
    const [savedEmail, setsSavedEmail] = useState<string>('jerrye@livingston.co.uk');
    const [savedComments, setSavedComments] = useState<string>('This is a comment');

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const formRef = useRef<ModalFormRef>(null);

    const [showModal, setShowModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [shouldResetForm, setShouldResetForm] = useState(false);

    const handleShowModal = () => {
        setIsLoading(true);
        setShowModal(true);
        setTimeout(() => {
            setIsLoading(false);
            setName(savedName);
            setEmail(savedEmail);
            setComments(savedComments);
        }, 1200);
    };

    const clearFormFields = () => {
        setName('');
        setEmail('');
        setComments('');
    };

    const handleSubmit = () => {
        setFormSubmitted(true);

        const isValid = formRef.current?.validateFormFields();

        if (!isValid) {
            console.error('Form submission failed due to validation errors.');
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setSavedName(name);
            setsSavedEmail(email);
            setSavedComments(comments);
            setIsSubmitting(false);
            const formValues = formRef.current?.getFormFieldValues();
            console.log(
                'Submitted with values:',
                '\nName: ',
                formValues?.name,
                '\nEmail: ',
                formValues?.email,
                '\nComments: ',
                formValues?.comments
            );
            setShowModal(false);
            clearFormFields();

            toastQueue.addToast({ type: 'success', message: 'Form submitted successfully' });
        }, 1500);
    };

    const handleCancelConfirm = () => {
        setShowCancelModal(false);
        setShowModal(false); // Close main modal too
        clearFormFields();
        setShouldResetForm(true);
        setFormSubmitted(false);
    };

    return (
        <>
            <Button disabled={isLoading} variant='primary' className='mt-2 me-2' onClick={() => handleShowModal()}>
                Update form entry
            </Button>

            <ConfirmCloseModal
                showModal={showCancelModal}
                onClose={() => {
                    handleCancelConfirm();
                }}
                onHide={() => {
                    setShowCancelModal(false);
                    setShowModal(true);
                }}
            />

            <Modal
                centered
                size='lg'
                show={showModal}
                onHide={() => {
                    setShowModal(false);
                    clearFormFields();
                    setShowCancelModal(true);
                }}
                onShow={() => {
                    // Reset form when modal opens if we flagged it for reset
                    if (shouldResetForm) {
                        setTimeout(() => {
                            // Small delay to ensure form is mounted
                            setFormSubmitted(false);
                            setShouldResetForm(false); // Clear the flag
                        }, 50);
                    }
                }}
            >
                <Modal.Header className='justify-content-between'>
                    <h3>Form modal example</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate>
                        <ModalForm
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            comments={comments}
                            setComments={setComments}
                            formSubmitted={formSubmitted}
                            ref={formRef}
                        />
                        <div className='d-flex justify-content-end'></div>
                    </Form>

                    {isLoading && <Spinner overlay={true} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            setShowModal(false);
                            setShowCancelModal(true);
                        }}
                        variant='tertiary'
                        className='me-2'
                    >
                        Cancel
                    </Button>
                    <Button disabled={isSubmitting} variant='primary' onClick={() => handleSubmit()}>
                        {isSubmitting && <SmallSpinner className='me-2 text-white' />}
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FormInModalPopulatedExample;

```

### Source File 3: `src/ds-layout-components/foundations/components/form-templates/ConfirmCloseModal.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

interface ConfirmCloseModalProps {
    showModal: boolean;
    onHide: () => void;
    onClose: () => void;
}

const ConfirmCloseModal: React.FC<ConfirmCloseModalProps> = ({ showModal, onHide, onClose }) => {
    return (
        <Modal centered show={showModal} onHide={onHide}>
            <Modal.Header className='justify-content-between'>
                <h3>Close confirmation</h3>
            </Modal.Header>
            <Modal.Body>Are you sure you want to close this window? Your progress may be lost</Modal.Body>
            <Modal.Footer>
                <Button variant='tertiary' onClick={onHide}>
                    Cancel
                </Button>
                <Button variant='danger' onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmCloseModal;

```

---

## Multi-page Form

**Search Terms:** 'context', 'form provider', 'shared', 'text', 'email', 'comment', 'input', 'input validation', 'validation'

### Source File 1: `src/ds-layout-components/foundations/components/form-templates/multipage-form-example/MultiPageFormExample.tsx`

```tsx
import { useState } from 'react';

import { FormProvider } from 'livingston-npm-components';
import { defaultPaymentMethodFormData } from './bankDetails/paymentMethodTypes';
import MultiPageFormController from './MultiPageFormController';

const MultiPageFormExample = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <FormProvider debug={false} initialValues={defaultPaymentMethodFormData}>
                <MultiPageFormController setShowModal={(value: boolean) => setShowModal(value)} showModal={showModal} />
            </FormProvider>
        </>
    );
};

export default MultiPageFormExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/form-templates/multipage-form-example/MultiPageFormController.tsx`

```tsx
import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SmallSpinner } from 'livingston-npm-components';
import { Modal } from 'react-bootstrap';
import { PaymentMethodForm, PaymentMethodFormRef } from './bankDetails/PaymentMethodForm';
import { Alert } from 'livingston-npm-components';
import { PaymentMethod } from './bankDetails/paymentMethodTypes';
import { AccountDetailsForm, AccountDetailsFormRef } from './bankDetails/AccountDetailsForm';
import { BankDetailsSummary, BankDetailsSummaryRef } from './bankDetails/BankDetailsSummaryForm';
import ProgressNavbarHeader from '../../modals/modal-with-progress-bar/progressNavBarHeader';
import ConfirmCloseModal from '../ConfirmCloseModal';
import { usePaymentMethod } from './bankDetails/usePaymentMethodHook';
import { toastQueue } from '@/utils/toastQueue';

type Page = 'payment-method' | 'account-details' | 'summary';

type MultiPageFormControllerProps = {
    setShowModal: (value: boolean) => void;
    showModal: boolean;
};

const MultiPageFormController = ({ setShowModal, showModal }: MultiPageFormControllerProps) => {
    const paymentMethodFormRef = useRef<PaymentMethodFormRef>(null);
    const accountDetailsFormRef = useRef<AccountDetailsFormRef>(null);
    const bankDetailsSummaryRef = useRef<BankDetailsSummaryRef>(null);
    const [showAlert, setShowAlert] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<PaymentMethod | null>(null);
    const [pageNumber, setPageNumber] = useState<Page>('payment-method');
    const pageOrder: Page[] = ['payment-method', 'account-details', 'summary'];
    const [showCancelModal, setShowCancelModal] = useState(false);
    const { resetForm } = usePaymentMethod();

    const getSubHeaderText = (currentPageIndex: number): string => {
        switch (currentPageIndex) {
            case 0:
                return 'Please choose your preferred payment method';
            case 1:
                return 'Please fill in the required details';
            case 2:
                return 'Please confirm your payment information';
            default:
                return 'Please fill in the required details';
        }
    };

    const handleNext = () => {
        if (handleSubmit()) {
            const currentIndex = pageOrder.indexOf(pageNumber);
            if (currentIndex < pageOrder.length - 1) {
                setPageNumber(pageOrder[currentIndex + 1]);
            }
            setShowAlert(false);
            setFormSubmitted(false);
        } else {
            setShowAlert(true);
            setFormSubmitted(true);
        }
    };

    const handlePrev = () => {
        const currentIndex = pageOrder.indexOf(pageNumber);
        if (currentIndex > 0) {
            setPageNumber(pageOrder[currentIndex - 1]);
        }
        setShowAlert(false);
        setFormSubmitted(false);
    };

    const handleCancelConfirm = () => {
        setShowCancelModal(false);
        setShowModal(false);
        setFormSubmitted(false);
        setPageNumber('payment-method');
        resetForm();
    };

    const handleSubmit = () => {
        if (pageNumber === 'payment-method') {
            const values = paymentMethodFormRef.current?.getFieldValues() as unknown as PaymentMethod;
            setFormSubmitted(true);

            if (paymentMethodFormRef.current?.validateFormFields()) {
                console.log('Form is valid, continuing to next step. Values:', values);
                setFormData(values);
                return true;
            } else {
                console.error('Form validation failed, please correct the errors.');
                return false;
            }
        } else if (pageNumber === 'account-details') {
            const values = accountDetailsFormRef.current?.getFieldValues() as unknown as PaymentMethod;
            setFormSubmitted(true);
            console.log(formSubmitted);

            if (accountDetailsFormRef.current?.validateFormFields()) {
                console.log('Form is valid, going back to previous step. Values:', values);
                setFormData(values);
                return true;
            } else {
                console.error('Form validation failed, please correct the errors.');
                return false;
            }
        } else if (pageNumber === 'summary') {
            if (pageNumber === 'summary') setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                console.log('Submitted with values:', formData);
                setShowModal(false);
                setPageNumber('payment-method');
                resetForm();
                toastQueue.addToast({ type: 'success', message: 'Form submitted successfully' });
            }, 1500);

            return true;
        }
    };

    return (
        <>
            <Button variant='primary' className='mt-2 me-2' onClick={() => setShowModal(true)}>
                Add a payment method
            </Button>

            <ConfirmCloseModal
                showModal={showCancelModal}
                onClose={() => {
                    handleCancelConfirm();
                }}
                onHide={() => {
                    setShowCancelModal(false);
                    setShowModal(true);
                }}
            />
            <Modal
                centered
                size='lg'
                show={showModal}
                onHide={() => {
                    setShowModal(false);
                    setShowCancelModal(true);
                }}
            >
                <ProgressNavbarHeader
                    header='Add a payment method'
                    subHeader={getSubHeaderText(pageOrder.indexOf(pageNumber))}
                    step={pageOrder.indexOf(pageNumber) + 1}
                    totalSteps={pageOrder.length}
                    onClose={() => {
                        setShowModal(false);
                        setShowCancelModal(true);
                    }}
                    onSave={() => {
                        console.log('Saved with values:', formData);
                        toastQueue.addToast({ type: 'success', message: 'Form saved as draft' });
                    }}
                />
                <Modal.Body className='p-0'>
                    <Form noValidate>
                        {showAlert && <Alert variant='danger'>Please correct the errors in the form before submitting.</Alert>}
                        {pageNumber === 'payment-method' && (
                            <div className='px-4 '>
                                <PaymentMethodForm ref={paymentMethodFormRef} onClose={() => {}} formSubmitted={formSubmitted} />
                            </div>
                        )}
                        {pageNumber === 'account-details' && (
                            <div className='px-4'>
                                <AccountDetailsForm ref={accountDetailsFormRef} onClose={() => {}} formSubmitted={formSubmitted} />
                            </div>
                        )}
                        {pageNumber === 'summary' && (
                            <div className='px-4'>
                                <BankDetailsSummary ref={bankDetailsSummaryRef} />
                            </div>
                        )}

                        <div className='d-flex justify-content-end'></div>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        onClick={() => {
                            handlePrev();
                        }}
                        variant='tertiary'
                        className='me-2'
                    >
                        Previous
                    </Button>
                    <Button disabled={isLoading} variant='primary' onClick={() => handleNext()}>
                        {isLoading && <SmallSpinner className='me-2 text-white' />}
                        {pageNumber === 'summary' ? 'Submit' : 'Continue'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MultiPageFormController;

```

### Source File 3: `src/ds-layout-components/foundations/components/form-templates/multipage-form-example/FormInputRequiresMicroDeposit.tsx`

```tsx
import { FormSuperRadio, FormSuperRadioGroup } from 'livingston-npm-components';

type FormInputRequiresMicroDepositProps = {
    className?: string;
    value: boolean | undefined;
    onChange: (value: boolean) => void;
};

export const FormInputRequiresMicroDeposit = ({ className, value, onChange }: FormInputRequiresMicroDepositProps) => {
    return (
        <FormSuperRadioGroup
            label='Requires micro-deposit?'
            className={`mb-3 ${className}`}
            required={true}
            isInvalid={value === undefined}
            invalidFeedback='This field is required'
        >
            <FormSuperRadio
                id='requires-micro-deposit-yes'
                className='mb-2'
                value={'yes'}
                labelTitle='Yes'
                onChange={(value) => onChange(value === 'yes' ? true : false)}
                isChecked={value === true}
            />
            <FormSuperRadio
                id='requires-micro-deposit-no'
                className='mb-2'
                value={'no'}
                labelTitle='No'
                onChange={(value) => onChange(value === 'no' ? false : true)}
                isChecked={value === false}
            />
        </FormSuperRadioGroup>
    );
};

```

### Source File 4: `src/ds-layout-components/foundations/components/form-templates/multipage-form-example/bankDetails/AccountDetailsForm.tsx`

```tsx
import { BankAccountDetailsForm, BankAccountDetailsFormRef } from './BankAccountDetailsForm';
import { PaymentMethod } from './paymentMethodTypes';
import { CardDetailsForm, CardDetailsFormRef } from './CardDetailsForm';
import { usePaymentMethod } from './usePaymentMethodHook';
import { forwardRef, useImperativeHandle, useRef } from 'react';

type AccountDetailsFormProps = {
    onClose: () => void;
    formSubmitted: boolean; // Optional prop to indicate if the form has been submitted
};

export type AccountDetailsFormRef = {
    validateFormFields: () => boolean;
    getFieldValues: () => PaymentMethod;
};

export const AccountDetailsForm = forwardRef<AccountDetailsFormRef, AccountDetailsFormProps>(({ onClose, formSubmitted }, ref) => {
    const { fieldValues } = usePaymentMethod();
    const bankAccountFormRef = useRef<BankAccountDetailsFormRef>(null);
    const cardFormRef = useRef<CardDetailsFormRef>(null);

    useImperativeHandle(ref, () => ({
        getFieldValues: () => fieldValues as unknown as PaymentMethod,

        validateFormFields: () => {
            if (fieldValues.paymentMethodType === undefined) {
                return false;
            }

            if (fieldValues.paymentMethodType === 'BANK') {
                return bankAccountFormRef.current?.validateFormFields() ?? false;
            }
            if (fieldValues.paymentMethodType === 'CARD') {
                return cardFormRef.current?.validateFormFields() ?? false;
            }

            return true;
        }
    }));

    console.log('Page 2: ', fieldValues, formSubmitted);
    return (
        <>
            {fieldValues.paymentMethodType === 'BANK' ? (
                <BankAccountDetailsForm onClose={onClose} formSubmitted={formSubmitted} ref={bankAccountFormRef} />
            ) : (
                <CardDetailsForm onClose={onClose} formSubmitted={formSubmitted} ref={cardFormRef} />
            )}
        </>
    );
});

AccountDetailsForm.displayName = 'BankAccountDetailsForm';

```

### Source File 5: `src/ds-layout-components/foundations/components/form-templates/multipage-form-example/bankDetails/BankAccountDetailsForm.tsx`

```tsx
import { PaymentMethod } from './paymentMethodTypes';
import { usePaymentMethod } from './usePaymentMethodHook';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { FormTextInput, FormTextInputRef } from 'livingston-npm-components';
import { FormInputRequiresMicroDeposit } from '@/ds-layout-components/foundations/components/form-templates/multipage-form-example/FormInputRequiresMicroDeposit';

type BankAccountDetailsFormProps = {
    onClose: () => void;
    formSubmitted: boolean; // Optional prop to indicate if the form has been submitted
};

export type BankAccountDetailsFormRef = {
    validateFormFields: () => boolean;
    getFieldValues: () => PaymentMethod;
};

export const BankAccountDetailsForm = forwardRef<BankAccountDetailsFormRef, BankAccountDetailsFormProps>(({ formSubmitted }, ref) => {
    const { fieldValues, setBankAccountDetailsField } = usePaymentMethod();
    const accountNameRef = useRef<FormTextInputRef>(null);
    const accountNumberRef = useRef<FormTextInputRef>(null);

    useImperativeHandle(ref, () => ({
        getFieldValues: () => fieldValues as unknown as PaymentMethod,
        validateFormFields: () => {
            let hasErrors = false;

            if (accountNameRef.current?.validateField() === false) {
                hasErrors = true;
            }

            if (accountNumberRef.current?.validateField() === false) {
                hasErrors = true;
            }

            return !hasErrors;
        }
    }));

    console.log('Bank Account Details Form submitted: ', formSubmitted);

    const validateAccountHolderName = (value: string) => {
        if (value.trim() === '' || value.length < 2) {
            return {
                isValid: false,
                message: 'Account holder name must be at least 2 characters long'
            };
        }
        return {
            isValid: true,
            message: ''
        };
    };

    const validateAccountNumber = (value: string) => {
        // check value is all numeric
        if (!/^\d+$/.test(value)) {
            return {
                isValid: false,
                message: 'Account number must be numeric'
            };
        }
        return {
            isValid: true,
            message: ''
        };
    };

    return (
        <div className='p-3'>
            <h1>Bank Account Details Form</h1>

            <FormTextInput
                className='mb-3'
                name='accountHolderName'
                ref={accountNameRef}
                required={true}
                strictValidation={formSubmitted}
                label='Account Holder Name'
                value={fieldValues.bankAccountDetails.accountHolderName}
                customValidation={validateAccountHolderName}
                setValue={(value) => setBankAccountDetailsField('accountHolderName', value)}
            />

            <FormTextInput
                className='mb-3'
                name='accountNumber'
                ref={accountNumberRef}
                required={true}
                strictValidation={formSubmitted}
                label='Account Number'
                value={fieldValues.bankAccountDetails.accountNumber}
                customValidation={validateAccountNumber}
                setValue={(value) => setBankAccountDetailsField('accountNumber', value)}
            />

            <FormInputRequiresMicroDeposit
                className='mb-3'
                value={fieldValues.bankAccountDetails.requiresMicroDeposits}
                onChange={(value) => setBankAccountDetailsField('requiresMicroDeposits', value)}
            />
        </div>
    );
});

BankAccountDetailsForm.displayName = 'BankAccountDetailsForm';

```

### Source File 6: `src/ds-layout-components/foundations/components/form-templates/multipage-form-example/bankDetails/BankDetailsSummaryForm.tsx`

```tsx
import { BankAccountDetailsFormRef } from './BankAccountDetailsForm';
import { PaymentMethod } from './paymentMethodTypes';
import { CardDetailsFormRef } from './CardDetailsForm';
import { usePaymentMethod } from './usePaymentMethodHook';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export type BankDetailsSummaryRef = {
    validateFormFields: () => boolean;
    getFieldValues: () => PaymentMethod;
};

export const BankDetailsSummary = forwardRef<BankDetailsSummaryRef>((_, ref) => {
    const { fieldValues } = usePaymentMethod();
    const bankAccountFormRef = useRef<BankAccountDetailsFormRef>(null);
    const cardFormRef = useRef<CardDetailsFormRef>(null);

    useImperativeHandle(ref, () => ({
        getFieldValues: () => fieldValues as unknown as PaymentMethod,
        validateFormFields: () => {
            if (fieldValues.paymentMethodType === undefined) {
                return false;
            }

            if (fieldValues.paymentMethodType === 'BANK') {
                return bankAccountFormRef.current?.validateFormFields() ?? false;
            }
            if (fieldValues.paymentMethodType === 'CARD') {
                return cardFormRef.current?.validateFormFields() ?? false;
            }

            return true;
        }
    }));

    return (
        <div className='p-4 d-flex justify-content-start gap-8'>
            <div className='d-flex flex-column gap-2'>
                <h3>Payment methods</h3>
                <span>Selected currency: {fieldValues?.currency}</span>
                <span>Payment method: {fieldValues?.paymentMethodType}</span>
            </div>

            {fieldValues?.paymentMethodType === 'BANK' && (
                <div className='d-flex flex-column gap-2'>
                    <h3>Bank account details</h3>
                    <span>Account holder name: {fieldValues.bankAccountDetails.accountHolderName}</span>
                    <span>Account number: {fieldValues.bankAccountDetails.accountNumber}</span>
                    <span>Requires micro deposits: {fieldValues.bankAccountDetails.requiresMicroDeposits ? 'Yes' : 'No'}</span>
                </div>
            )}
            {fieldValues?.paymentMethodType === 'CARD' && (
                <div className='d-flex flex-column gap-2'>
                    <h3>Card details</h3>
                    <span>Card holder name: {fieldValues.cardDetails.cardHolderName}</span>
                    <span>Card number: {fieldValues.cardDetails.cardNumber}</span>
                    <span>
                        Expiration date: {fieldValues.cardDetails.expiryDate.month} / {fieldValues.cardDetails.expiryDate.year}
                    </span>
                </div>
            )}
        </div>
    );
});

BankDetailsSummary.displayName = 'BankAccountDetailsForm';

```

### Source File 7: `src/ds-layout-components/foundations/components/form-templates/multipage-form-example/bankDetails/CardDetailsForm.tsx`

```tsx
import { PaymentMethod } from './paymentMethodTypes';
import { usePaymentMethod } from './usePaymentMethodHook';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { FormTextInput, FormTextInputRef } from 'livingston-npm-components';

type CardDetailsFormProps = {
    onClose: () => void;
    formSubmitted: boolean; // Optional prop to indicate if the form has been submitted
};

export type CardDetailsFormRef = {
    validateFormFields: () => boolean;
    getFieldValues: () => PaymentMethod;
};

export const CardDetailsForm = forwardRef<CardDetailsFormRef, CardDetailsFormProps>(({ formSubmitted }, ref) => {
    const { fieldValues, setCardDetailsField } = usePaymentMethod();
    const [expiryDateString, setExpiryDateString] = useState<string>(
        fieldValues.cardDetails ? fieldValues.cardDetails.expiryDate.month + '/' + fieldValues.cardDetails.expiryDate.year : ''
    );
    const cardNameRef = useRef<FormTextInputRef>(null);
    const cardNumberRef = useRef<FormTextInputRef>(null);
    const expiryDateRef = useRef<FormTextInputRef>(null);

    useImperativeHandle(ref, () => ({
        getFieldValues: () => fieldValues as unknown as PaymentMethod,
        validateFormFields: () => {
            let hasErrors = false;

            if (cardNameRef.current?.validateField() === false) {
                hasErrors = true;
            }

            if (cardNumberRef.current?.validateField() === false) {
                hasErrors = true;
            }
            if (expiryDateRef.current?.validateField() === false) {
                hasErrors = true;
            }

            return !hasErrors;
        }
    }));

    const validateCardHolderName = (value: string) => {
        if (value.trim() === '' || value.length < 2) {
            return {
                isValid: false,
                message: 'Card holder name must be at least 2 characters long'
            };
        }
        return {
            isValid: true,
            message: ''
        };
    };

    const validateCardNumber = (value: string) => {
        // check value is all numeric and has 16 digits
        if (!/^\d{16}$/.test(value)) {
            return {
                isValid: false,
                message: 'Card number must be a 16-digit numeric value'
            };
        }
        return {
            isValid: true,
            message: ''
        };
    };

    const validateExpiryDate = (value: string) => {
        const parts = value.split('/');
        if (parts.length !== 2 || isNaN(parseInt(parts[0])) || isNaN(parseInt(parts[1]))) {
            return {
                isValid: false,
                message: 'Expiry date must be in MM/YY format'
            };
        }
        const month = parseInt(parts[0]);
        const year = parseInt(parts[1]);
        if (month < 1 || month > 12 || year < 2025) {
            return {
                isValid: false,
                message: 'Invalid expiry date'
            };
        }
        return {
            isValid: true,
            message: ''
        };
    };

    return (
        <div className='p-3'>
            <h1>Card Details Form</h1>

            <FormTextInput
                className='mb-3'
                name='cardHolderName'
                ref={cardNameRef}
                label='Card Holder Name'
                required={true}
                strictValidation={formSubmitted}
                value={fieldValues.cardDetails.cardHolderName}
                customValidation={validateCardHolderName}
                setValue={(value) => setCardDetailsField('cardHolderName', value)}
            />

            <FormTextInput
                className='mb-3'
                name='cardNumber'
                ref={cardNumberRef}
                required={true}
                strictValidation={formSubmitted}
                label='Card Number'
                value={fieldValues.cardDetails.cardNumber}
                customValidation={validateCardNumber}
                setValue={(value) => setCardDetailsField('cardNumber', value)}
            />

            <FormTextInput
                className='mb-3'
                name='expiryDate'
                ref={expiryDateRef}
                required={true}
                strictValidation={formSubmitted}
                customValidation={validateExpiryDate}
                label='Expiry Date (MM/YYYY)'
                value={expiryDateString}
                setValue={(value) => {
                    setExpiryDateString(value);
                    if (validateExpiryDate(value).isValid) {
                        const [month, year] = value.split('/').map(Number);
                        setCardDetailsField('expiryDate', { month, year });
                    }
                }}
            />
        </div>
    );
});

CardDetailsForm.displayName = 'BankCardDetailsForm';

```

### Source File 8: `src/ds-layout-components/foundations/components/form-templates/multipage-form-example/bankDetails/PaymentMethodForm.tsx`

```tsx
import {
    CountryDetail,
    CurrencyType,
    FormLabel,
    FormMonetaryInput,
    FormMonetaryInputRef,
    FormSelect,
    FormSelectRef
} from 'livingston-npm-components';
import { Currency, PaymentMethod } from './paymentMethodTypes';
import { usePaymentMethod } from './usePaymentMethodHook';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const PREFERRED_COUNTRIES: CurrencyType[] = [
    {
        countryCode: 'US',
        countryName: 'UNITED STATES',
        currencyCode: 'USD'
    },
    {
        countryCode: 'CA',
        countryName: 'CANADA',
        currencyCode: 'CAD'
    }
];

const COUNTRY_DETAILS: CountryDetail[] = PREFERRED_COUNTRIES.map((country) => ({
    CTRY_CODE: country.countryCode,
    CTRY_NAME: country.countryName,
    ISO_CURR_CODE: country.currencyCode
}));

const fetchCountries = () => Promise.resolve(COUNTRY_DETAILS);

type PaymentMethodFormProps = {
    onClose: () => void;
    formSubmitted: boolean; // Optional prop to indicate if the form has been submitted
};

export type PaymentMethodFormRef = {
    validateFormFields: () => boolean;
    getFieldValues: () => PaymentMethod;
};

export const PaymentMethodForm = forwardRef<PaymentMethodFormRef, PaymentMethodFormProps>(({ formSubmitted }, ref) => {
    const { fieldValues, setFieldValue, setDefaultBankAccountDetails, setDefaultCardDetails, resetForm } = usePaymentMethod();

    const currencyRef = useRef<FormMonetaryInputRef>(null);
    const formSelectRef = useRef<FormSelectRef>(null);

    useImperativeHandle(ref, () => ({
        getFieldValues: () => fieldValues as unknown as PaymentMethod,
        validateFormFields: () => {
            let hasErrors = false;

            // FormMonetaryInput's internal state resets on remount, so its validateField()
            // can fail even when a currency was previously selected. Fall back to the
            // context value to avoid a false validation error after navigating back.
            if (currencyRef.current?.validateField() === false && !fieldValues.currency) {
                hasErrors = true;
            }

            if (formSelectRef.current?.validateField() === false) {
                hasErrors = true;
            }

            return !hasErrors;
        }
    }));

    return (
        <div className='p-3'>
            <h1>Payment method form</h1>

            <FormMonetaryInput
                label='Select currency'
                id='currency-selector'
                fetchCountries={fetchCountries}
                defaultCountry={PREFERRED_COUNTRIES.find((country) => country.currencyCode === fieldValues.currency)?.countryCode}
                preferredCountries={PREFERRED_COUNTRIES.map((country) => country.countryCode)}
                onChangeCurrency={(currency: CurrencyType) => {
                    setFieldValue('currency', currency.currencyCode as Currency);
                }}
                disabled={false}
                ref={currencyRef}
                className='mb-3'
                strictValidation={formSubmitted}
                showAmount={false}
                placeholder='Select currency of payment method'
                tooltip='This selection will be used to calculate the exchange rate for the transaction.'
            />

            <FormLabel label='Select payment method' />
            <FormSelect
                name='paymentMethodType'
                options={[
                    { label: 'Select a method', value: '' },
                    { label: 'Credit card', value: 'CARD' },
                    { label: 'Bank account', value: 'BANK' }
                ]}
                className='mb-3'
                ref={formSelectRef}
                value={fieldValues.paymentMethodType}
                setValue={(value) => {
                    if (value === 'BANK') {
                        setDefaultBankAccountDetails();
                        setFieldValue('paymentMethodType', value);
                    } else if (value === 'CARD') {
                        setDefaultCardDetails();
                        setFieldValue('paymentMethodType', value);
                    } else {
                        resetForm();
                    }
                }}
                errorMessage='Please select a payment method'
                strictValidation={formSubmitted}
            />
        </div>
    );
});

PaymentMethodForm.displayName = 'PaymentMethodForm';

```

### Source File 9: `src/ds-layout-components/foundations/components/form-templates/multipage-form-example/bankDetails/usePaymentMethodHook.tsx`

```tsx
import { FormContext, FormContextValue } from 'livingston-npm-components';
import { useCallback, useContext } from 'react';
import { BankAccountDetails, CardDetails, PaymentMethod } from './paymentMethodTypes';

function useForm<T extends Record<string, unknown>>(): FormContextValue<T> {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context as FormContextValue<T>;
}

// Specific hook for payment method form
export function usePaymentMethod() {
    const form = useForm<PaymentMethod>();

    // eg to use: setBankAccountDetailsField('email', value);
    const setBankAccountDetailsField = useCallback(
        <K extends keyof BankAccountDetails>(field: K, value: BankAccountDetails[K]) => {
            form.setFieldValue('bankAccountDetails', {
                ...form.fieldValues.bankAccountDetails,
                [field]: value
            });
        },
        [form]
    );

    const setDefaultBankAccountDetails = useCallback(() => {
        form.setFieldValue('bankAccountDetails', {
            accountHolderName: '',
            accountNumber: '',
            requiresMicroDeposits: false
        });
    }, [form]);

    const setCardDetailsField = useCallback(
        <K extends keyof CardDetails>(field: K, value: CardDetails[K]) => {
            form.setFieldValue('cardDetails', {
                ...form.fieldValues.cardDetails,
                [field]: value
            });
        },
        [form]
    );

    const setDefaultCardDetails = useCallback(() => {
        form.setFieldValue('cardDetails', {
            cardHolderName: '',
            cardNumber: '',
            expiryDate: {
                month: 1,
                year: new Date().getFullYear() + 1
            }
        });
    }, [form]);

    return {
        ...form,
        setBankAccountDetailsField,
        setDefaultBankAccountDetails,
        setCardDetailsField,
        setDefaultCardDetails
    };
}

```

### Source File 10: `src/ds-layout-components/foundations/components/form-templates/ConfirmCloseModal.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

interface ConfirmCloseModalProps {
    showModal: boolean;
    onHide: () => void;
    onClose: () => void;
}

const ConfirmCloseModal: React.FC<ConfirmCloseModalProps> = ({ showModal, onHide, onClose }) => {
    return (
        <Modal centered show={showModal} onHide={onHide}>
            <Modal.Header className='justify-content-between'>
                <h3>Close confirmation</h3>
            </Modal.Header>
            <Modal.Body>Are you sure you want to close this window? Your progress may be lost</Modal.Body>
            <Modal.Footer>
                <Button variant='tertiary' onClick={onHide}>
                    Cancel
                </Button>
                <Button variant='danger' onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmCloseModal;

```

---

## Toggle

**Search Terms:** 'switch'

**File:** `src/ds-layout-components/foundations/components/forms/toggle/Toggle.tsx`

```tsx
import Form from 'react-bootstrap/Form';

const Toggle = () => {
    return (
        <>
            <Form.Check type='switch' id='custom-switch' />

            <h5 className='mt-3 mb-2'>Disabled:</h5>

            <Form.Check type='switch' id='custom-switch' disabled />

            <Form.Check type='switch' id='custom-switch' checked disabled />
        </>
    );
};
export default Toggle;

```

---

## Country Toggle

**Search Terms:** 'switch', 'usa', 'canada', 'flag'

**File:** `src/ds-layout-components/foundations/components/forms/toggle/ToggleCountrySwitcher.tsx`

```tsx
import { Form, Image } from 'react-bootstrap';

const ToggleCountrySwitcher = () => {
    return (
        <div className='custom-toggle country-switcher'>
            <Form.Label className='switch mb-0'>
                <input type='checkbox' value='true' />
                <span className='slider round'>
                    <div className='options'>
                        <span className='label fw-bold'>
                            <div className='d-flex flex-row align-items-center justify-content-center'>
                                <div className='flag'>
                                    <Image src='/assets/images/icons/flags/us-flag.svg' alt='USA flag' />
                                </div>
                                USA
                            </div>
                        </span>
                        <span className='label fw-bold'>
                            <div className='d-flex flex-row align-items-center justify-content-center'>
                                <div className='flag'>
                                    <Image src='/assets/images/icons/flags/ca-flag.svg' alt='Canadian flag' />
                                </div>
                                Canada
                            </div>
                        </span>
                    </div>
                </span>
            </Form.Label>
        </div>
    );
};
export default ToggleCountrySwitcher;

```

---

