# Navigation - Code Examples

This file contains code examples for navigation components from the Livingston Design System.

## Breadcrumb example

**Usages:** 'uk clearances'

**File:** `src/ds-layout-components/foundations/components/Breadcrumb/breadcrumb.tsx`

```tsx
import Breadcrumbs from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';

function Breadcrumb() {
    return (
        <Container fluid className='border-bottom'>
            <Breadcrumbs>
                <Breadcrumbs.Item href='#'>USA Services</Breadcrumbs.Item>
                <Breadcrumbs.Item href='#'>Subscribers</Breadcrumbs.Item>
                <Breadcrumbs.Item href='#'>8529005475</Breadcrumbs.Item>
                <Breadcrumbs.Item active>Edit subscriber</Breadcrumbs.Item>
            </Breadcrumbs>
        </Container>
    );
}
export default Breadcrumb;

```

---

## Breadcrumb with saving spinner

**File:** `src/ds-layout-components/foundations/components/Breadcrumb/BreadcrumbWithSaving.tsx`

```tsx
import Breadcrumbs from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
function BreadcrumbWithSaving() {
    return (
        <Container fluid>
            <div className='d-flex align-items-center justify-content-between'>
                <Breadcrumbs>
                    <Breadcrumbs.Item href='#'>USA Services</Breadcrumbs.Item>
                    <Breadcrumbs.Item href='#'>Subscribers</Breadcrumbs.Item>
                    <Breadcrumbs.Item href='#'>8529005475</Breadcrumbs.Item>
                    <Breadcrumbs.Item active>Edit subscriber</Breadcrumbs.Item>
                </Breadcrumbs>

                <div className='d-flex align-items-center gap-2 ms-3'>
                    <Spinner className='text-lii-input-placeholder-text ' size='sm'>
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner>
                    <small className='text-lii-input-placeholder-text'>Saving</small>
                </div>
            </div>
        </Container>
    );
}
export default BreadcrumbWithSaving;

```

---

## Tabs example

**Usages:** 'uk clearances'

**File:** `src/ds-layout-components/foundations/components/tabs/TabsExample.tsx`

```tsx
import { Tab, Tabs } from 'react-bootstrap';

const TabsExample = () => {
    return (
        <Tabs defaultActiveKey='profile' id='example-tabs'>
            <Tab eventKey='profile' title='Profile' className='p-3'>
                <div className='fw-bold'>Profile</div>
                <p>
                    In ut finibus tellus, vitae mollis mi. Vivamus eu lacus sed diam lobortis ornare mattis vitae ante. Morbi tempus nunc
                    vel ex porta, quis sagittis ante maximus. Nam non urna nec massa dapibus pharetra. Phasellus nisi eros, tempor convallis
                    tortor sit amet, sollicitudin sagittis leo. Vestibulum gravida malesuada risus, non egestas ligula vehicula a. Etiam
                    velit tellus, rutrum eleifend dictum non, fringilla vitae eros. Curabitur odio elit, dapibus id nunc eget, ultricies
                    imperdiet nulla. Etiam tempor ex et eleifend semper. In ac urna neque.
                </p>
            </Tab>
            <Tab eventKey='subscriptions' title='Subscriptions' className='p-3'>
                <div className='fw-bold'>Subscriptions</div>
                <p>
                    In ut finibus tellus, vitae mollis mi. Vivamus eu lacus sed diam lobortis ornare mattis vitae ante. Morbi tempus nunc
                    vel ex porta, quis sagittis ante maximus. Nam non urna nec massa dapibus pharetra. Phasellus nisi eros, tempor convallis
                    tortor sit amet, sollicitudin sagittis leo. Vestibulum gravida malesuada risus, non egestas ligula vehicula a. Etiam
                    velit tellus, rutrum eleifend dictum non, fringilla vitae eros. Curabitur odio elit, dapibus id nunc eget, ultricies
                    imperdiet nulla. Etiam tempor ex et eleifend semper. In ac urna neque.
                </p>
            </Tab>
            <Tab eventKey='settings' title='Settings' className='p-3'>
                <div className='fw-bold'>Settings</div>
                <p>
                    In ut finibus tellus, vitae mollis mi. Vivamus eu lacus sed diam lobortis ornare mattis vitae ante. Morbi tempus nunc
                    vel ex porta, quis sagittis ante maximus. Nam non urna nec massa dapibus pharetra. Phasellus nisi eros, tempor convallis
                    tortor sit amet, sollicitudin sagittis leo. Vestibulum gravida malesuada risus, non egestas ligula vehicula a. Etiam
                    velit tellus, rutrum eleifend dictum non, fringilla vitae eros. Curabitur odio elit, dapibus id nunc eget, ultricies
                    imperdiet nulla. Etiam tempor ex et eleifend semper. In ac urna neque.
                </p>
            </Tab>
        </Tabs>
    );
};
export default TabsExample;

```

---

## Basic example

**Search Terms:** 'UK Clearances'

### Source File 1: `src/ds-layout-components/foundations/components/headers/BasicHeaderExample.tsx`

```tsx
import BasicHeader from './BasicHeader';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

const BasicHeaderExample = () => {
    return (
        <BasicHeader
            title='Header'
            icon={faFileLines}
            primaryAction={{ label: 'Primary Action', onClick: () => alert('Primary action clicked') }}
            secondaryAction={{ label: 'Secondary Action', onClick: () => alert('Secondary action clicked') }}
        />
    );
};

export default BasicHeaderExample;

```

### Source File 2: `src/ds-layout-components/foundations/components/headers/BasicHeader.tsx`

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Col, Container, Row } from 'react-bootstrap';

type BasicHeaderProps = {
    title: string;
    icon?: IconDefinition;
    primaryAction?: {
        label: string;
        icon?: IconDefinition;
        onClick: () => void;
    };
    secondaryAction?: {
        label: string;
        icon?: IconDefinition;
        onClick: () => void;
    };
};

const BasicHeader = ({ title, icon, primaryAction, secondaryAction }: BasicHeaderProps) => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='d-flex flex-column flex-md-row justify-content-md-between align-items-md-center'>
                        <div className='d-flex align-items-start'>
                            {icon && (
                                <div className='me-3'>
                                    <span className='badge badge-circular badge-info'>
                                        <FontAwesomeIcon icon={icon} />
                                    </span>
                                </div>
                            )}
                            <h1 className='mb-0'>{title}</h1>
                        </div>
                        {(primaryAction || secondaryAction) && (
                            <div className='d-flex flex-column flex-sm-row align-items-sm-center flex-shrink-0 mt-3 mt-md-0'>
                                {secondaryAction && (
                                    <Button variant='tertiary' className='me-2 mt-2 mt-sm-0' onClick={secondaryAction.onClick}>
                                        {secondaryAction.label}
                                        {secondaryAction.icon && <FontAwesomeIcon icon={secondaryAction.icon} className='ms-1' />}
                                    </Button>
                                )}
                                {primaryAction && (
                                    <Button variant='primary' className='ms-sm-2 mt-2 mt-sm-0' onClick={primaryAction.onClick}>
                                        {primaryAction.label}
                                        {primaryAction.icon && <FontAwesomeIcon icon={primaryAction.icon} className='ms-1' />}
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BasicHeader;

```

---

## Header with description

**Usages:** 'SmartMap'

**File:** `src/ds-layout-components/foundations/components/headers/HeaderWithDescription.tsx`

```tsx
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

const HeaderWithDescription = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='d-flex align-items-center mb-2'>
                        <FontAwesomeIcon icon={faExclamationCircle} className='text-warning fs-1 me-3' />
                        <h1 className='mb-0'>Header</h1>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum expedita est quod explicabo exercitationem.
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderWithDescription;

```

---

## With flag

**File:** `src/ds-layout-components/foundations/components/headers/ClearancesHeaderBar.tsx`

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ComponentContainer from './ComponentContainer';

function ClearancesHeaderBar() {
    return (
        <ComponentContainer whiteBackground borderBottom>
            <div className='d-md-flex justify-content-md-between align-items-md-center'>
                <div className='d-flex align-items-center mb-2 mb-md-0'>
                    <div className='d-flex align-items-center justify-content-center me-2 me-md-3'>
                        <Image src={`/assets/images/icons/flags/ca-flag.svg`} alt='Canadian flag' />
                    </div>
                    <h1 className='mb-0'>Canada clearances</h1>
                </div>

                <div>
                    <Button variant='tertiary'>
                        <FontAwesomeIcon icon={faBell} className='me-2' />
                        Manage clearance notifications
                    </Button>
                </div>
            </div>
        </ComponentContainer>
    );
}
export default ClearancesHeaderBar;

```

---

## With dropdown

**File:** `src/ds-layout-components/foundations/components/headers/ClearancesHeaderBarWithDropdownOnTitle.tsx`

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBell } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import ComponentContainer from './ComponentContainer';

function ClearancesHeaderBarWithDropdownOnTitle() {
    const dropdownItems = [
        {
            icon: faGlobe,
            title: 'All clearances',
            active: false
        },
        {
            title: 'Canada clearances',
            flag: 'ca-flag',
            imgAlt: 'Canadian flag',
            active: true
        },
        {
            title: 'USA clearances',
            flag: 'us-flag',
            imgAlt: 'USA flag',
            active: false
        }
    ];
    return (
        <ComponentContainer whiteBackground borderBottom>
            <div className='d-md-flex justify-content-md-between align-items-md-center'>
                <div className=' mb-2 mb-md-0'>
                    <Dropdown>
                        <Dropdown.Toggle className='d-flex align-items-center' as='div' id='dropdownMenuButton'>
                            <div className='d-flex'>
                                <div className='d-flex align-items-center justify-content-center me-2 me-md-3'>
                                    <Image src={`/assets/images/icons/flags/ca-flag.svg`} alt='Canadian flag' />
                                </div>
                                <h1 className='me-md-1 mb-0'>Canada clearances</h1>
                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu aria-labelledby='dropdownMenuButton'>
                            {dropdownItems.map((item, index) => (
                                <Dropdown.Item key={index} className={`d-flex justify-content-between ${item.active ? 'active' : ''}`}>
                                    <div className='me-3 d-flex align-items-center'>
                                        {item.flag && (
                                            <Image
                                                width='18px'
                                                height='14px'
                                                src={`/assets/images/icons/flags/${item.flag}.svg`}
                                                alt={item.imgAlt}
                                                className='me-3'
                                            />
                                        )}
                                        {item.icon && <FontAwesomeIcon icon={item.icon} className='globe me-3' />}
                                        {item.title}
                                    </div>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <Button variant='tertiary'>
                        <FontAwesomeIcon icon={faBell} className='me-2' />
                        Manage clearance notifications
                    </Button>
                </div>
            </div>
        </ComponentContainer>
    );
}
export default ClearancesHeaderBarWithDropdownOnTitle;

```

---

## With image

**Search Terms:** 'powered by stripe'

**File:** `src/ds-layout-components/foundations/components/headers/HeaderBarWithLogo.tsx`

```tsx
import Image from 'react-bootstrap/Image';
import ComponentContainer from './ComponentContainer';

function HeaderBarWithLogo() {
    return (
        <ComponentContainer>
            <div className='d-flex align-items-center'>
                <Image src={`/assets/images/illustrations/objects/object-card.svg`} className='me-3' alt='Header' width='75px' />
                <h1 className='mb-0'>Header title</h1>
            </div>
        </ComponentContainer>
    );
}
export default HeaderBarWithLogo;

```

---

## Custom header 1

**Usages:** 'uk clearances'

**File:** `src/ds-layout-components/foundations/components/headers/HeaderWithBackArrow.tsx`

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faExclamationCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const HeaderWithBackArrow = () => {
    const additionalInfo = [
        { title: 'Subitem 1', text: 'Value' },
        { title: 'Subitem 2', text: 'Value' },
        { title: 'Subitem 3', text: 'Value' }
    ];

    return (
        <div className='header-with-back-arrow container-fluid py-4 py-sm-4'>
            <div className='position-relative'>
                <div className='d-md-flex'>
                    <div className='mb-2 me-md-3 mt-md-2'>
                        <button type='button' className='btn btn-secondary '>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                    </div>
                    <div className='d-xl-flex align-items-xl-center justify-content-between flex-fill'>
                        <div>
                            <div>
                                <div className='d-md-flex flex-wrap align-items-md-center'>
                                    <h1 className='mb-0 me-md-3'>Header</h1>

                                    <span className='badge badge-pill badge-danger mt-2 me-1'>
                                        <FontAwesomeIcon icon={faExclamationCircle} className='me-1' />
                                        Danger badge
                                    </span>

                                    <span className='badge badge-pill badge-info bg-lii-blue text-white mt-2 me-1'>
                                        <FontAwesomeIcon icon={faShippingFast} className='me-1' />
                                        <em>Rush clearance</em>
                                    </span>
                                </div>
                            </div>

                            <div className='d-md-flex align-items-md-center flex-wrap mb-2 mt-2 mt-md-0'>
                                {additionalInfo.map((item, index) => (
                                    <div className='flex-shrink-0 me-md-3' key={index}>
                                        <span className='me-2'>
                                            <strong>{item.title}:</strong>
                                        </span>
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='d-flex align-items-center mt-3 mt-xl-0'>
                            <Button variant='tertiary' className='flex-shrink-0 me-1 mb-0 mb-md-2 m-xl-1'>
                                Secondary action
                            </Button>
                            <Button variant='primary' className='flex-shrink-0 me-1 mb-0 mb-md-2 m-xl-1'>
                                Primary action
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeaderWithBackArrow;

```

---

## Small header strip

**Search Terms:** 'UK Clearances'

**File:** `src/ds-layout-components/foundations/components/headers/SmallHeaderStrip.tsx`

```tsx
function SmallHeaderStrip() {
    return (
        <div className='header-strip-small bg-white py-2 border-bottom'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col d-flex'>
                        <div>
                            <span className='fw-bold'>11</span> results in the{' '}
                            <span className='fw-bold'>last 30 days</span>
                        </div>
                        <div>
                            <span className='mx-2'>|</span> <span className='link'>Reset</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SmallHeaderStrip;
```

---

## Fixed footer

**File:** `src/ds-layout-components/foundations/components/footers/FixedFooterExample.tsx`

```tsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function FixedFooter() {
    return (
        <div className='d-flex flex-column'>
            <Container fluid className='flex-grow-1'>
                <Row>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis enim saepe magni asperiores nihil vitae
                            maiores labore hic nulla facilis, beatae modi aspernatur, quod voluptate? Veniam accusantium libero natus
                            laborum porro cumque quae officia commodi molestias, minus quia. Temporibus atque neque est iusto. Accusantium
                            architecto harum consequatur doloremque eum et dolore debitis voluptatibus voluptas reprehenderit! Dolorem
                            libero iusto quasi quis! Consequatur voluptates porro quo ipsam dolorum nostrum at, deleniti illo repellat sunt
                            odio? Vitae maiores, adipisci hic alias odit consectetur nemo rem earum debitis nostrum minima beatae, inventore
                            optio suscipit et omnis, aspernatur at repellendus maxime velit id! Minus enim, perferendis rem eveniet
                            assumenda modi totam sequi aperiam maiores doloribus expedita aspernatur molestiae accusantium sint quas
                            consequuntur ipsa magni porro animi suscipit, debitis vitae in praesentium. Labore sapiente, natus corporis
                            consequatur animi doloribus, hic odit, dolore voluptatibus incidunt laboriosam in voluptatum soluta aut
                            excepturi ab. Architecto maiores dolores omnis ullam animi suscipit dignissimos fuga atque unde, error dicta
                            reprehenderit, obcaecati ipsa distinctio praesentium sed repellat commodi repellendus sapiente nobis earum
                            deserunt laborum impedit? Asperiores dolores totam voluptas numquam quod ipsa soluta molestias esse, libero
                            officia animi tenetur minus rem vitae aut odio nesciunt, vel magni! Ab dolorem consectetur pariatur.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis enim saepe magni asperiores nihil vitae
                            maiores labore hic nulla facilis, beatae modi aspernatur, quod voluptate? Veniam accusantium libero natus
                            laborum porro cumque quae officia commodi molestias, minus quia. Temporibus atque neque est iusto. Accusantium
                            architecto harum consequatur doloremque eum et dolore debitis voluptatibus voluptas reprehenderit! Dolorem
                            libero iusto quasi quis! Consequatur voluptates porro quo ipsam dolorum nostrum at, deleniti illo repellat sunt
                            odio? Vitae maiores, adipisci hic alias odit consectetur nemo rem earum debitis nostrum minima beatae, inventore
                            optio suscipit et omnis, aspernatur at repellendus maxime velit id! Minus enim, perferendis rem eveniet
                            assumenda modi totam sequi aperiam maiores doloribus expedita aspernatur molestiae accusantium sint quas
                            consequuntur ipsa magni porro animi suscipit, debitis vitae in praesentium. Labore sapiente, natus corporis
                            consequatur animi doloribus, hic odit, dolore voluptatibus incidunt laboriosam in voluptatum soluta aut
                            excepturi ab. Architecto maiores dolores omnis ullam animi suscipit dignissimos fuga atque unde, error dicta
                            reprehenderit, obcaecati ipsa distinctio praesentium sed repellat commodi repellendus sapiente nobis earum
                            deserunt laborum impedit? Asperiores dolores totam voluptas numquam quod ipsa soluta molestias esse, libero
                            officia animi tenetur minus rem vitae aut odio nesciunt, vel magni! Ab dolorem consectetur pariatur.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis enim saepe magni asperiores nihil vitae
                            maiores labore hic nulla facilis, beatae modi aspernatur, quod voluptate? Veniam accusantium libero natus
                            laborum porro cumque quae officia commodi molestias, minus quia. Temporibus atque neque est iusto. Accusantium
                            architecto harum consequatur doloremque eum et dolore debitis voluptatibus voluptas reprehenderit! Dolorem
                            libero iusto quasi quis! Consequatur voluptates porro quo ipsam dolorum nostrum at, deleniti illo repellat sunt
                            odio? Vitae maiores, adipisci hic alias odit consectetur nemo rem earum debitis nostrum minima beatae, inventore
                            optio suscipit et omnis, aspernatur at repellendus maxime velit id! Minus enim, perferendis rem eveniet
                            assumenda modi totam sequi aperiam maiores doloribus expedita aspernatur molestiae accusantium sint quas
                            consequuntur ipsa magni porro animi suscipit, debitis vitae in praesentium. Labore sapiente, natus corporis
                            consequatur animi doloribus, hic odit, dolore voluptatibus incidunt laboriosam in voluptatum soluta aut
                            excepturi ab. Architecto maiores dolores omnis ullam animi suscipit dignissimos fuga atque unde, error dicta
                            reprehenderit, obcaecati ipsa distinctio praesentium sed repellat commodi repellendus sapiente nobis earum
                            deserunt laborum impedit? Asperiores dolores totam voluptas numquam quod ipsa soluta molestias esse, libero
                            officia animi tenetur minus rem vitae aut odio nesciunt, vel magni! Ab dolorem consectetur pariatur.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis enim saepe magni asperiores nihil vitae
                            maiores labore hic nulla facilis, beatae modi aspernatur, quod voluptate? Veniam accusantium libero natus
                            laborum porro cumque quae officia commodi molestias, minus quia. Temporibus atque neque est iusto. Accusantium
                            architecto harum consequatur doloremque eum et dolore debitis voluptatibus voluptas reprehenderit! Dolorem
                            libero iusto quasi quis! Consequatur voluptates porro quo ipsam dolorum nostrum at, deleniti illo repellat sunt
                            odio? Vitae maiores, adipisci hic alias odit consectetur nemo rem earum debitis nostrum minima beatae, inventore
                            optio suscipit et omnis, aspernatur at repellendus maxime velit id! Minus enim, perferendis rem eveniet
                            assumenda modi totam sequi aperiam maiores doloribus expedita aspernatur molestiae accusantium sint quas
                            consequuntur ipsa magni porro animi suscipit, debitis vitae in praesentium. Labore sapiente, natus corporis
                            consequatur animi doloribus, hic odit, dolore voluptatibus incidunt laboriosam in voluptatum soluta aut
                            excepturi ab. Architecto maiores dolores omnis ullam animi suscipit dignissimos fuga atque unde, error dicta
                            reprehenderit, obcaecati ipsa distinctio praesentium sed repellat commodi repellendus sapiente nobis earum
                            deserunt laborum impedit? Asperiores dolores totam voluptas numquam quod ipsa soluta molestias esse, libero
                            officia animi tenetur minus rem vitae aut odio nesciunt, vel magni! Ab dolorem consectetur pariatur.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis enim saepe magni asperiores nihil vitae
                            maiores labore hic nulla facilis, beatae modi aspernatur, quod voluptate? Veniam accusantium libero natus
                            laborum porro cumque quae officia commodi molestias, minus quia. Temporibus atque neque est iusto. Accusantium
                            architecto harum consequatur doloremque eum et dolore debitis voluptatibus voluptas reprehenderit! Dolorem
                            libero iusto quasi quis! Consequatur voluptates porro quo ipsam dolorum nostrum at, deleniti illo repellat sunt
                            odio? Vitae maiores, adipisci hic alias odit consectetur nemo rem earum debitis nostrum minima beatae, inventore
                            optio suscipit et omnis, aspernatur at repellendus maxime velit id! Minus enim, perferendis rem eveniet
                            assumenda modi totam sequi aperiam maiores doloribus expedita aspernatur molestiae accusantium sint quas
                            consequuntur ipsa magni porro animi suscipit, debitis vitae in praesentium. Labore sapiente, natus corporis
                            consequatur animi doloribus, hic odit, dolore voluptatibus incidunt laboriosam in voluptatum soluta aut
                            excepturi ab. Architecto maiores dolores omnis ullam animi suscipit dignissimos fuga atque unde, error dicta
                            reprehenderit, obcaecati ipsa distinctio praesentium sed repellat commodi repellendus sapiente nobis earum
                            deserunt laborum impedit? Asperiores dolores totam voluptas numquam quod ipsa soluta molestias esse, libero
                            officia animi tenetur minus rem vitae aut odio nesciunt, vel magni! Ab dolorem consectetur pariatur.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis enim saepe magni asperiores nihil vitae
                            maiores labore hic nulla facilis, beatae modi aspernatur, quod voluptate? Veniam accusantium libero natus
                            laborum porro cumque quae officia commodi molestias, minus quia. Temporibus atque neque est iusto. Accusantium
                            architecto harum consequatur doloremque eum et dolore debitis voluptatibus voluptas reprehenderit! Dolorem
                            libero iusto quasi quis! Consequatur voluptates porro quo ipsam dolorum nostrum at, deleniti illo repellat sunt
                            odio? Vitae maiores, adipisci hic alias odit consectetur nemo rem earum debitis nostrum minima beatae, inventore
                            optio suscipit et omnis, aspernatur at repellendus maxime velit id! Minus enim, perferendis rem eveniet
                            assumenda modi totam sequi aperiam maiores doloribus expedita aspernatur molestiae accusantium sint quas
                            consequuntur ipsa magni porro animi suscipit, debitis vitae in praesentium. Labore sapiente, natus corporis
                            consequatur animi doloribus, hic odit, dolore voluptatibus incidunt laboriosam in voluptatum soluta aut
                            excepturi ab. Architecto maiores dolores omnis ullam animi suscipit dignissimos fuga atque unde, error dicta
                            reprehenderit, obcaecati ipsa distinctio praesentium sed repellat commodi repellendus sapiente nobis earum
                            deserunt laborum impedit? Asperiores dolores totam voluptas numquam quod ipsa soluta molestias esse, libero
                            officia animi tenetur minus rem vitae aut odio nesciunt, vel magni! Ab dolorem consectetur pariatur.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis enim saepe magni asperiores nihil vitae
                            maiores labore hic nulla facilis, beatae modi aspernatur, quod voluptate? Veniam accusantium libero natus
                            laborum porro cumque quae officia commodi molestias, minus quia. Temporibus atque neque est iusto. Accusantium
                            architecto harum consequatur doloremque eum et dolore debitis voluptatibus voluptas reprehenderit! Dolorem
                            libero iusto quasi quis! Consequatur voluptates porro quo ipsam dolorum nostrum at, deleniti illo repellat sunt
                            odio? Vitae maiores, adipisci hic alias odit consectetur nemo rem earum debitis nostrum minima beatae, inventore
                            optio suscipit et omnis, aspernatur at repellendus maxime velit id! Minus enim, perferendis rem eveniet
                            assumenda modi totam sequi aperiam maiores doloribus expedita aspernatur molestiae accusantium sint quas
                            consequuntur ipsa magni porro animi suscipit, debitis vitae in praesentium. Labore sapiente, natus corporis
                            consequatur animi doloribus, hic odit, dolore voluptatibus incidunt laboriosam in voluptatum soluta aut
                            excepturi ab. Architecto maiores dolores omnis ullam animi suscipit dignissimos fuga atque unde, error dicta
                            reprehenderit, obcaecati ipsa distinctio praesentium sed repellat commodi repellendus sapiente nobis earum
                            deserunt laborum impedit? Asperiores dolores totam voluptas numquam quod ipsa soluta molestias esse, libero
                            officia animi tenetur minus rem vitae aut odio nesciunt, vel magni! Ab dolorem consectetur pariatur.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* Fixed Footer */}
            <div className='position-sticky bottom-0 mt-auto'>
                <div className='d-flex shadow-lg flex-column flex-md-row align-items-md-center align-items-stretch justify-content-md-between fixed-bar-without-sidebar p-2 p-md-3 bg-white'>
                    <div>Items selected: 1</div>
                    <div className='d-flex flex-column flex-sm-row'>
                        <Button variant='tertiary' size='lg' className='m-1 flex-fill'>
                            Secondary action
                        </Button>
                        <Button variant='primary' size='lg' className='m-1 flex-fill'>
                            Primary action
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FixedFooter;

```

---

## Progress navbar example

**File:** `src/ds-layout-components/foundations/components/progress-navbar/ProgressNavbar.tsx`

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressNavbar() {
    return (
        <div className='progress-navbar'>
            <div className='d-flex justify-content-between align-items-center p-3'>
                <div>
                    <span className='text-muted'>Step 1 of 4:</span>&nbsp;<span>Profile</span>
                </div>
                <button type='button' className='btn btn-secondary'>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <ProgressBar now={60} label={`${60}%`} visuallyHidden />
        </div>
    );
}
export default ProgressNavbar;

```

---

## With cards

**Search Terms:** 'off-canvas', 'drawer', 'cards', 'alert', 'notification'

### Source File 1: `src/ds-layout-components/foundations/components/off-canvas-drawer/OffCanvasDrawerWithCards.tsx`

```tsx
import { useState } from 'react';
import { Offcanvas, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import AlertCard from '../cards/AlertCard';

function OffCanvasDrawerWithCards() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='alerts-drawers-example'>
            <Button variant='primary' onClick={() => setIsOpen(true)}>
                Open drawer
            </Button>

            {/* ALERTS DRAWER 1 */}
            <Offcanvas show={isOpen} onHide={() => setIsOpen(false)} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title as='h3' className='mb-0'>
                        Notifications
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className='p-0'>
                    <div className='new-alert-cards bg-gray-200 p-3'>
                        <h6>NEW (2)</h6>
                        <AlertCard
                            badge={
                                <Badge bg='info-bg' text='info' className='mb-2' pill>
                                    In progress
                                </Badge>
                            }
                            title='Entry no. 300-12234567 under review'
                            date='2 Jan, 2022, 2:02 PM'
                            text='Entry is under review by the Food and Drug Administration (FDA)'
                            button={{ label: 'View entry', onClick: () => {} }}
                        />

                        <AlertCard
                            badge={
                                <Badge bg='dark-bg' text='dark' className='mb-2' pill>
                                    Livingston notice
                                </Badge>
                            }
                            title='Discontinued support for Internet Explorer 11'
                            date='2 Jan, 2022, 3:30 PM'
                            text='The Livingston Shipment status website will no longer support Internet Explorer 11 starting 1 Jan 2022. We
                                recommend using a modern browser like, Firefox, Google Chrome or Microsoft Edge.'
                        />
                    </div>

                    <div className='alert-cards p-3'>
                        <AlertCard
                            badge={
                                <Badge bg='danger-bg' text='danger' pill className='mb-2'>
                                    <FontAwesomeIcon icon={faInfoCircle} className='me-1' />
                                    Shipment on hold
                                </Badge>
                            }
                            title='Entry no. 5251897054 on hold'
                            date='4 Jan, 2022, 1:49 PM'
                            text='Shipment 5251897054 is on hold due to Missing Country of Origin.'
                            button={{ label: 'View entry', onClick: () => {} }}
                        />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default OffCanvasDrawerWithCards;

```

### Source File 2: `src/ds-layout-components/foundations/components/cards/AlertCard.tsx`

```tsx
import Button from 'react-bootstrap/Button';
interface AlertCardProps {
    badge: React.ReactElement;
    title: string;
    date: string;
    text: string;
    button?: { label: string; onClick: () => void };
}

const AlertCard = ({ badge, title, date, text, button }: AlertCardProps) => {
    return (
        <div className='alert-card bg-white p-1 my-2'>
            <div className='card-content d-flex flex-column align-items-start p-3'>
                <header className='d-flex w-100 flex-fill justify-content-between'>
                    {badge}
                    <p className='alert-card-date m-0'>{date}</p>
                </header>
                <p className='alert-card-title mb-2'>
                    <strong>{title}</strong>
                </p>
                <p className='alert-card-desc mb-0'>{text}</p>
                {button ? (
                    <Button variant='tertiary' className='mt-3' onClick={button.onClick}>
                        {button.label}
                    </Button>
                ) : null}
            </div>
        </div>
    );
};
export default AlertCard;

```

---

## Large off-canvas drawer

**Usages:** 'SmartMap'

**File:** `src/ds-layout-components/foundations/components/off-canvas-drawer/LargeOffCanvasDrawer.tsx`

```tsx
import { Button, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';

function LargeOffCanvasDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='alerts-drawers-example'>
            <Button variant='primary' onClick={() => setIsOpen(true)}>
                Open drawer
            </Button>

            <Offcanvas className='large-off-canvas' show={isOpen} onHide={() => setIsOpen(false)} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title as='h3' className='mb-0'>
                        Large off-canvas drawer
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default LargeOffCanvasDrawer;

```

---

