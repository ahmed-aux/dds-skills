# Buttons - Code Examples

This file contains code examples for buttons components from the Livingston Design System.

## Variants

**File:** `src/ds-layout-components/foundations/components/buttons/ButtonVariants.tsx`

```tsx
import Button from 'react-bootstrap/Button';

function ButtonVariants() {
    return (
        <section className='button-examples'>
            <div className='d-flex align-items-center flex-wrap mb-3'>
                <Button variant='primary'>Primary</Button>
                <Button variant='secondary'>Secondary</Button>
                <Button variant='tertiary'>Tertiary</Button>
                <Button variant='ghost'>Ghost</Button>
                <Button variant='ghost-secondary'>Ghost secondary</Button>
                <div className='button-bg p-3 rounded'>
                    <Button variant='secondary-white'>Secondary white</Button>
                </div>
                <Button variant='danger'>Danger</Button>
                <Button variant='danger-secondary'>Danger secondary</Button>
                <Button variant='danger-ghost'>Danger ghost</Button>
            </div>
        </section>
    );
}
export default ButtonVariants;

```

---

## Sizes

**File:** `src/ds-layout-components/foundations/components/buttons/ButtonSizes.tsx`

```tsx
import Button from 'react-bootstrap/Button';

const ButtonSizes = () => {
    return (
        <section className='button-examples'>
            <div className='d-flex justify-content-start align-items-center flex-wrap mb-3'>
                <Button variant='primary' size='sm'>
                    Small
                </Button>
                <Button variant='primary'>Medium</Button>
                <Button variant='primary' size='lg'>
                    Large
                </Button>
            </div>
        </section>
    );
};
export default ButtonSizes;

```

---

## With icons

**File:** `src/ds-layout-components/foundations/components/buttons/ButtonsWithIcon.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ButtonsWithIcon = () => {
    return (
        <section className='button-examples'>
            <div className='d-flex justify-content-start align-items-center flex-wrap mb-3'>
                <Button variant='primary'>
                    <FontAwesomeIcon icon={faInfoCircle} className='me-1' />
                    Icon left
                </Button>
                <Button variant='primary'>
                    Icon right
                    <FontAwesomeIcon icon={faInfoCircle} className='ms-1' />
                </Button>
            </div>
        </section>
    );
};
export default ButtonsWithIcon;

```

---

## Disabled

**File:** `src/ds-layout-components/foundations/components/buttons/DisabledButtons.tsx`

```tsx
import Button from 'react-bootstrap/Button';

function DisabledButtons() {
    return (
        <section className='button-examples'>
            <div className='d-flex align-items-center flex-wrap mb-3'>
                <Button variant='primary' disabled>
                    Primary
                </Button>
                <Button variant='tertiary' disabled>
                    Secondary
                </Button>
                <Button variant='tertiary' disabled>
                    Tertiary
                </Button>
                <Button variant='ghost' disabled>
                    Ghost
                </Button>
                <Button variant='ghost-secondary' disabled>
                    Ghost secondary
                </Button>
                <div className='button-bg p-3 rounded'>
                    <Button variant='secondary-white' disabled>
                        Secondary white
                    </Button>
                </div>
                <Button variant='danger' disabled>
                    Danger
                </Button>
                <Button variant='danger-secondary' disabled>
                    Danger secondary
                </Button>
                <Button variant='danger-ghost' disabled>
                    Danger ghost
                </Button>
            </div>
        </section>
    );
}
export default DisabledButtons;

```

---

## Notifications button

**Search Terms:** 'UK Clearances'

**File:** `src/ds-layout-components/foundations/components/buttons/DisabledButtons.tsx`

```tsx
import Button from 'react-bootstrap/Button';

function DisabledButtons() {
    return (
        <section className='button-examples'>
            <div className='d-flex align-items-center flex-wrap mb-3'>
                <Button variant='primary' disabled>
                    Primary
                </Button>
                <Button variant='tertiary' disabled>
                    Secondary
                </Button>
                <Button variant='tertiary' disabled>
                    Tertiary
                </Button>
                <Button variant='ghost' disabled>
                    Ghost
                </Button>
                <Button variant='ghost-secondary' disabled>
                    Ghost secondary
                </Button>
                <div className='button-bg p-3 rounded'>
                    <Button variant='secondary-white' disabled>
                        Secondary white
                    </Button>
                </div>
                <Button variant='danger' disabled>
                    Danger
                </Button>
                <Button variant='danger-secondary' disabled>
                    Danger secondary
                </Button>
                <Button variant='danger-ghost' disabled>
                    Danger ghost
                </Button>
            </div>
        </section>
    );
}
export default DisabledButtons;

```

---

