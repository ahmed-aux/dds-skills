# Cards - Code Examples

This file contains code examples for cards components from the Livingston Design System.

## Basic Card

**Usages:** 'uk clearances'

**File:** `src/ds-layout-components/foundations/components/cards/CardTest.tsx`

```tsx
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardTest = () => {
    return (
        <Card>
            <Card.Header>
                <h4>Header</h4>
            </Card.Header>
            <Card.Body>
                <h3>Card Title</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-start'>
                <Button variant='primary' className='me-2'>
                    Primary button
                </Button>
                <Button variant='tertiary'>Secondary button</Button>
            </Card.Footer>
        </Card>
    );
};
export default CardTest;

```

---

## Credit card info Card

### Source File 1: `src/ds-layout-components/foundations/components/cards/CreditCardInfoCard.tsx`

```tsx
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CreditCardLogo } from './CreditCardLogo';

const CreditCardInfoCard = () => {
    return (
        <Card>
            <Card.Body className='d-md-flex align-items-md-start justify-content-md-between'>
                <div className='d-flex flex-column flex-md-row align-items-start'>
                    <div className='d-flex align-items-start'>
                        <CreditCardLogo creditCardBrand={'VISA'} />
                    </div>
                    <div className='mt-2 mt-md-0 ms-md-1'>
                        <div>
                            <div>
                                US credit account ending in <span className='fw-bold'>****2048</span>
                            </div>
                            <small>
                                Expiry date: 07/25 <span className='text-gray-800 mx-1'>|</span> Charged in USD
                            </small>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center mt-3 mt-md-0'>
                    <Button variant='outline-danger' size='sm' className='me-2'>
                        Remove <FontAwesomeIcon icon={faTrash} className='ms-1' />
                    </Button>
                    <Button variant='tertiary' size='sm'>
                        Edit <FontAwesomeIcon icon={faPen} className='ms-1' />
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};
export default CreditCardInfoCard;

```

### Source File 2: `src/ds-layout-components/foundations/components/cards/CreditCardLogo.tsx`

```tsx
import { DIGITAL_DESIGN_ASSETS } from '@/constants/constants';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getImageSrc = (imageName: string) => {
    return `${DIGITAL_DESIGN_ASSETS}/assets/images/${imageName}`;
};

interface CreditCardLogoProps {
    creditCardBrand: string;
    className?: string;
}

const getCardLogo = (brand: string) => {
    switch (brand) {
        case 'VISA':
        case 'MASTERCARD':
        case 'DISCOVER':
        case 'AMERICAN-EXPRESS':
            return getImageSrc(`resources/logo/payments/${brand.toLowerCase()}.svg`);
        default:
            return undefined;
    }
};

export const CreditCardLogo = ({
    creditCardBrand,
    className = 'd-flex align-items-center justify-content-center'
}: CreditCardLogoProps) => {
    const cardLogo = getCardLogo(creditCardBrand);

    return (
        <div
            className={className}
            style={{
                width: '45px',
                height: '25px'
            }}
        >
            {cardLogo ? (
                <img src={cardLogo} alt={creditCardBrand + ' logo'} className='img-fluid' />
            ) : (
                <FontAwesomeIcon icon={faCreditCard} />
            )}
        </div>
    );
};

```

---

## 3 Column card

**File:** `src/ds-layout-components/foundations/components/cards/ThreeColumnCard.tsx`

```tsx
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ThreeColumnCard = () => {
    return (
        <Card>
            <Card.Body className='d-sm-flex flex-row justify-content-between align-items-center'>
                <Container fluid className='px-0'>
                    <Row className='align-items-start'>
                        <div className='col-12 col-md-3 fw-bold text-secondary mb-2 mb-md-0'>
                            <h3>Continuous bond</h3>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='d-flex align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <h1 className='mb-0 me-2'>$ 575</h1>
                                    <div className='mt-1'>/ year</div>
                                </div>
                                <Badge bg='info-bg' text='info-text' pill className='ms-3'>
                                    Draft
                                </Badge>
                            </div>
                            <div className='text-muted'>Last updated 02-19-22 at 09:15 AM</div>
                            <div className='mt-3'>
                                A continuous bond covers all imports for one year. You will be alerted 60 days prior to renewal. Go to the{' '}
                                <a href='/#' onClick={(e) => e.preventDefault()}>
                                    resource center
                                </a>{' '}
                                to learn more about continuous bonds.
                            </div>
                        </div>
                        <div className='col-12 col-md-3 d-flex justify-content-start justify-content-md-end align-items-center mt-3 mt-md-0'>
                            <Button variant='tertiary' size='sm' className='ms-1 flex-grow-1 flex-md-grow-0 order-2'>
                                Continue application
                            </Button>
                            <Button variant='tertiary' size='sm' className='me-1 order-1'>
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </div>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};
export default ThreeColumnCard;

```

---

## Milestones card

**Usages:** 'uk clearances'

### Source File 1: `src/ds-layout-components/foundations/components/cards/milestones-card/MilestonesCard.tsx`

```tsx
import { Card } from 'react-bootstrap';
import MilestoneEntry from './MilestoneEntry';

const MilestonesCard = () => {
    return (
        <Card>
            <Card.Header>
                <h4>Milestones</h4>
            </Card.Header>
            <Card.Body>
                <MilestoneEntry
                    checked={true}
                    text='Documents received'
                    date='Wednesday, 08 January 2022, at 06:48 PM'
                    tooltip='Your documents have been submitted and are pending review and processing'
                />
                <MilestoneEntry
                    checked={false}
                    text='Customs certified'
                    date='No activity'
                    tooltip='Your shipment data has been received by Customs. Other government agency requirements and the submission of your manifest may affect the arrival time of your goods in the U.S.'
                />
                <MilestoneEntry
                    checked={false}
                    text='Customs released'
                    date='No activity'
                    tooltip='Your goods have been released by Customs'
                />
                <MilestoneEntry checked={false} text='Entry may proceed' date='No activity' tooltip='Your entry may proceed with Customs' />
                <MilestoneEntry
                    checked={false}
                    text='Entry summary accepted'
                    date='No activity'
                    tooltip='Your entry summary has been filed with Customs'
                />
            </Card.Body>
        </Card>
    );
};
export default MilestonesCard;

```

### Source File 2: `src/ds-layout-components/foundations/components/cards/milestones-card/MilestoneEntry.tsx`

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';

interface MilestoneEntryProps {
    checked: boolean;
    text: string;
    date: string;
    tooltip: string;
}

const MilestoneEntry = ({ checked, text, date, tooltip }: MilestoneEntryProps) => {
    return (
        <div className='milestone-entry d-flex flex-row justify-content-start align-items-start'>
            <div className='me-3 mt-1'>
                {checked ? (
                    <Badge className='badge-circular badge-circular-xs' text='success' bg='success-bg'>
                        <FontAwesomeIcon icon={faCheck} />
                    </Badge>
                ) : (
                    <Badge className='badge-circular badge-circular-xs' text='dark' bg='dark-bg'>
                        &nbsp;
                    </Badge>
                )}
            </div>
            <div className='d-flex flex-column align-items-start'>
                <OverlayTrigger placement='top' overlay={<Tooltip id='milestone-entry-tooltip'>{tooltip}</Tooltip>}>
                    <div className='milestone-text tooltip-text'>{text}</div>
                </OverlayTrigger>
                <small className='text-lii-text-light'>{date}</small>
            </div>
        </div>
    );
};
export default MilestoneEntry;

```

---

## Activity tracking card

**Usages:** 'uk clearances'

### Source File 1: `src/ds-layout-components/foundations/components/cards/activity-tracking-card/ActivityTrackingCard.tsx`

```tsx
import { Card } from 'react-bootstrap';
import ActivityEntry from './ActivityEntry';

const ActivityTrackingCard = () => {
    return (
        <Card className='activity-tracking-card'>
            <Card.Header>
                <h4>Activity</h4>
            </Card.Header>
            <Card.Body>
                <div className='activity-tracking-timeline'>
                    <ActivityEntry
                        activityItems={[
                            { subject: 'Status update emailed to', text: 'alex@uktradebrokers.co.uk' },
                            { subject: 'Status update emailed to', text: 'j.smith@uktradebrokers.co.uk' }
                        ]}
                        date='2 Jan, 4:31 PM'
                    />
                    <ActivityEntry
                        activityItems={[
                            { subject: 'Milestone updated', text: 'Document received' },
                            { subject: 'Request reassigned', text: 'to jayson@ellerton.co.uk' }
                        ]}
                        date='2 Jan, 4:28 PM'
                    />
                    <ActivityEntry
                        activityItems={[{ subject: 'Clearance submitted', text: 'by j.smith@uktradebrokers.co.uk' }]}
                        date='2 Jan, 4:14 PM'
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default ActivityTrackingCard;

```

### Source File 2: `src/ds-layout-components/foundations/components/cards/activity-tracking-card/ActivityEntry.tsx`

```tsx
interface ActivityItem {
    subject: string;
    text: string;
}
interface ActivityEntryProps {
    date: string;
    activityItems: ActivityItem[];
}

const ActivityEntry = ({ date, activityItems }: ActivityEntryProps) => {
    return (
        <div className='activity-tracking'>
            <div className='p-2'>
                <div className='text-lii-text-light mb-1'>{date}</div>
                {activityItems.map((activity: ActivityItem, index: number) => (
                    <div key={index} className='mb-2'>
                        <span className='fw-medium'>{activity.subject}</span> | {activity.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityEntry;

```

---

## Dark card with opacity

**File:** `src/ds-layout-components/foundations/components/cards/CardDarkOpacity.tsx`

```tsx
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function CardDarkOpacity() {
    const list = [
        'Track updates including disruptions & outages',
        'Border wait times',
        'Useful shipment process resources',
        'Frequently asked questions'
    ];

    return (
        <section className='bg-blue-1100 p-5'>
            <div className='row'>
                <div className='col'>
                    <Card className='card--dark--opacity'>
                        <Card.Body>
                            <h3>Carrier Corner</h3>
                            <p>A collection of our most valuable resources, FAQ and contacts</p>
                            <div className='mb-4'>
                                {list.map((item, index) => {
                                    return (
                                        <div className='d-flex align-items-center mb-1' key={index}>
                                            <div className='text-lii-light-blue me-2'>
                                                <FontAwesomeIcon icon={faCheckCircle} />
                                            </div>
                                            <div>{item}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <Button variant='secondary-white'>
                                Visit Carrier Corner <FontAwesomeIcon icon={faExternalLinkAlt} className='ms-2' />
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    );
}
export default CardDarkOpacity;

```

---

## Clickable card

**File:** `src/ds-layout-components/foundations/components/cards/CardClickable.tsx`

```tsx
import Card from 'react-bootstrap/Card';

function CardClickable() {
    const card = [
        {
            title: 'Effortless Shipping Solutions',
            description: 'Experience seamless logistics from pickup to delivery. Trust us to simplify your supply chain.'
        },
        {
            title: 'Real-Time Tracking',
            description: 'Track your shipments in real time. Stay updated and know exactly where your goods are.'
        },
        {
            title: 'Customized Logistics Plans',
            description: "Optimize your logistics with our tailored solutions. From shipping to warehousing, we've got you covered."
        }
    ];

    return (
        <section>
            <div className='row row-cols-1 row-cols-md-3'>
                {card.map((item, index) => {
                    return (
                        <div className='col my-2' key={index}>
                            <a className='clickable-card' href='/#' onClick={(e) => e.preventDefault()}>
                                <Card>
                                    <Card.Body>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
export default CardClickable;

```

---

## Collapsable card

**File:** `src/ds-layout-components/foundations/components/cards/CollapsableCard.tsx`

```tsx
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const CollapsableCard = () => {
    return (
        <Accordion>
            <Card>
                <Card.Body className='border-bottom'>
                    <h4>Card title</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Card.Body>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                        <h5>View collapsable content</h5>
                    </Accordion.Header>
                    <Accordion.Body className='card-padding'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Card>
        </Accordion>
    );
};
export default CollapsableCard;

```

---

## Grey card

**File:** `src/ds-layout-components/foundations/components/cards/GreyCard.tsx`

```tsx
import { Card } from 'react-bootstrap';

const GreyBoxCard = () => {
    return (
        <Card className='bg-gray-300'>
            <Card.Body>
                <h3>Card Title</h3>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis sed leo imperdiet volutpat. Quisque nisi felis,
                    fringilla ac justo id, vulputate tristique erat. Ut sollicitudin odio vel sem dictum, eu tempus odio interdum. Cras
                    viverra diam cursus ultricies suscipit. Sed quis auctor ante, et consequat quam. Cras ut nisi vehicula, viverra velit a,
                    rutrum sem. Praesent varius dictum augue ac posuere. Duis lacus orci, congue ut ligula ut, sodales tristique odio.
                </div>
            </Card.Body>
        </Card>
    );
};
export default GreyBoxCard;

```

---

## Card with Kendo table (example 1)

**Search Terms:** 'grid, rounded, border radius'

### Source File 1: `src/ds-layout-components/foundations/components/cards/KendoTableCard.tsx`

```tsx
import Card from 'react-bootstrap/Card';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from '@/ds-layout-components/foundations/components/tables/products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { useRef } from 'react';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 100 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 60
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 80
    }
];

const KendoTableCard = () => {
    const gridRef = useRef(null);
    // Custom hook to calculate responsive column widths.
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns);

    return (
        <Card>
            <Card.Body>
                <h3>Kendo Table</h3>
                <Grid className='kendo-grid-rounded' ref={gridRef} data={products.slice(0, 5)} resizable={true}>
                    {columns.map((column, index) => {
                        return <Column key={index} field={column.field} title={column.title} width={setWidth(column)} />;
                    })}
                </Grid>
            </Card.Body>
        </Card>
    );
};
export default KendoTableCard;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Card with Kendo table (example 2)

**Search Terms:** 'grid, rounded, border radius'

### Source File 1: `src/ds-layout-components/foundations/components/cards/KendoTableCardExample2.tsx`

```tsx
import Card from 'react-bootstrap/Card';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from '@/ds-layout-components/foundations/components/tables/products.json';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { useRef } from 'react';

const columns = [
    {
        field: 'ProductID',
        title: 'ID',
        width: 100 // Fixed width
    },
    {
        field: 'ProductName',
        title: 'Name',
        minWidth: 200
    },
    {
        field: 'UnitPrice',
        title: 'Price',
        minWidth: 60
    },
    {
        field: 'UnitsInStock',
        title: 'In stock',
        minWidth: 80
    }
];

const KendoTableCardExample2 = () => {
    const gridRef = useRef(null);
    // Custom hook to calculate responsive column widths.
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns);

    return (
        <Card>
            <Grid className='kendo-grid-rounded' ref={gridRef} data={products.slice(0, 5)} resizable={true}>
                {columns.map((column, index) => {
                    return <Column key={index} field={column.field} title={column.title} width={setWidth(column)} />;
                })}
            </Grid>
        </Card>
    );
};
export default KendoTableCardExample2;

```

### Source File 2: `src/ds-layout-components/foundations/components/tables/products.json`

```tsx
[
    {
        "ProductID": 1298476,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 23223233,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 36765555,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 44365673,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 54444,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 6435436,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 7643333,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 8436666,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 943664333,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "CA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 1053333,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 113255553,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 12432432324,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 13432323232,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 1444444,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.25,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 15909832,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 16329822,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.45,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 174442,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 184333,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 19355355,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2033333,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 213444,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 2243434343,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 23434343,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 2443443,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2543433,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 26434343,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.23,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 27434343,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 28434344,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 29434343,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.79,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 30222,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.89,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3143434,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 324434343,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3343443,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 3444333,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3543333,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3632222,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 373322323,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 3833222,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 3932323232,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 402222,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 41333,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.65,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4233,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 435555,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 4443433,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.45,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 454444,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4611244,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 4743243,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 4843232,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.75,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 49654454,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 505454445,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.25,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 5154545454,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 525445444,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 53656544,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 547667657,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.45,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 557666556,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    },
    {
        "ProductID": 56767677,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 57644,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 5866777,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.25,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 5976547657,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 60765765765,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 61765445,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 62657765,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 637655665,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 64765656,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.25,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    },
    {
        "ProductID": 65765656,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.05,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 666545454,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    },
    {
        "ProductID": 67654654,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 68654654,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    },
    {
        "ProductID": 69654654,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 706546546,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 71654654,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 72546654,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    },
    {
        "ProductID": 73654654,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    },
    {
        "ProductID": 74654545,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    },
    {
        "ProductID": 75654654,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.75,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 76654654,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Country": "USA",
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 7765465,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Country": "CA",
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }
]

```

---

## Card with grey box

**File:** `src/ds-layout-components/foundations/components/cards/GreyBoxCard.tsx`

```tsx
import { Card } from 'react-bootstrap';

const GreyBoxCard = () => {
    return (
        <Card>
            <Card.Body>
                <h3 className='mb-2'>Card title</h3>
                <div className='bg-gray-400 p-3 rounded-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </Card.Body>
        </Card>
    );
};
export default GreyBoxCard;

```

---

