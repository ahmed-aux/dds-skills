# Modals - Code Examples

This file contains code examples for modals components from the Livingston Design System.

## Basic modal

**Usages:** 'uk clearances'

**File:** `src/ds-layout-components/foundations/components/modals/basic-modal/BasicModal.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const BasicModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant='primary' onClick={() => setShow(true)}>
                Launch modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)} fullscreen='sm-down' scrollable centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal header</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, minima aspernatur. Aliquam eligendi harum ducimus cum,
                    dolorum accusantium aliquid quidem
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='ghost' onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={() => setShow(false)}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default BasicModal;

```

---

## Dropdown behaviors inside Modal

**Description:** Ideally we want modals to have the scrollable prop where the body of the modal scrolls instead of the page. This makes the the menu of a dropdown component render inside the body of the modal. On smaller modals with less content where you are unlikely to scroll, we recommend not using the scrollable prop if you have a dropdown inside the body. This will let the dropdown menu be displayed outside of the modal body for better viewing.

**File:** `src/ds-layout-components/foundations/components/modals/DropdownInsideModalBehavior.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const DropdownInsideModalBehavior = () => {
    const [show, setShow] = useState(false);
    const [scrollable, setScrollable] = useState(false);

    const dropdownItems = [
        { href: '#/action-1', label: 'Action 1' },
        { href: '#/action-2', label: 'Action 2' },
        { href: '#/action-3', label: 'Action 3' },
        { href: '#/action-4', label: 'Action 4' },
        { href: '#/action-5', label: 'Action 5' },
        { href: '#/action-6', label: 'Action 6' },
        { href: '#/action-7', label: 'Action 7' },
        { href: '#/action-8', label: 'Action 8' }
    ];

    return (
        <>
            <Button
                variant='primary'
                className='m-1'
                onClick={() => {
                    setShow(true);
                    setScrollable(true);
                }}
            >
                Launch larger modal with scrollable prop
            </Button>

            <Button
                variant='primary'
                className='m-1'
                onClick={() => {
                    setShow(true);
                    setScrollable(false);
                }}
            >
                Launch smaller modal without scrollable prop
            </Button>

            <Modal show={show} onHide={() => setShow(false)} scrollable={scrollable} fullscreen='sm-down' centered>
                <Modal.Header closeButton>
                    <h3 className='mb-0'>Modal header</h3>
                </Modal.Header>
                <Modal.Body>
                    <div className='mb-3'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                        {scrollable && (
                            <>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                    dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>
                                <p>
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                                    aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                    quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                </p>
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                                    provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                                    eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                </p>
                                <p>
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                                    voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
                                    delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                                    repellat.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </>
                        )}
                    </div>
                    <DropdownButton id='dropdown-behaviour-example' title='Dropdown button'>
                        {dropdownItems.map((item, index) => (
                            <Dropdown.Item key={index} href={item.href}>
                                {item.label}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='ghost' onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={() => setShow(false)}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DropdownInsideModalBehavior;

```

---

## Modal sizes

**Description:** There are five different modal sizes available: small, medium, large, extra-large, and extra-extra-large. The XXL modal doesn't use the size prop to set its size, it instead uses the dialogClassName prop to add a custom className.

**Usages:** 'uk clearances'

### Source File 1: `src/ds-layout-components/foundations/components/modals/basic-modal/ModalSizes.tsx`

```tsx
import SmallModal from './SmallModal';
import MediumModal from './MediumModal';
import ExtraExtraLargeModal from './ExtraExtraLargeModal';
import LargeModal from './LargeModal';
import ExtraLargeModal from './ExtraLargeModal';

const ModalSizes = () => {
    return (
        <>
            <SmallModal />
            <MediumModal />
            <LargeModal />
            <ExtraLargeModal />
            <ExtraExtraLargeModal />
        </>
    );
};
export default ModalSizes;

```

### Source File 2: `src/ds-layout-components/foundations/components/modals/basic-modal/SmallModal.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const SmallModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant='primary' className='mt-2 me-2' onClick={() => setShow(true)}>
                Launch small modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)} size='sm' centered scrollable fullscreen='sm-down'>
                <Modal.Header closeButton>
                    <h3 className='mb-0'>Modal header</h3>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc eget lacinia tincidunt, nisl nunc tincidunt
                    urna, vel efficitur neque justo vitae nisi. Cras fringilla dui vel lorem fringilla, in gravida felis fermentum.
                    Suspendisse potenti.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='ghost' onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={() => setShow(false)}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SmallModal;

```

### Source File 3: `src/ds-layout-components/foundations/components/modals/basic-modal/MediumModal.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const MediumModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant='primary' className='mt-2 me-2' onClick={() => setShow(true)}>
                Launch medium modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)} centered scrollable fullscreen='sm-down'>
                <Modal.Header closeButton>
                    <h3 className='mb-0'>Modal header</h3>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc eget lacinia tincidunt, nisl nunc tincidunt
                    urna, vel efficitur neque justo vitae nisi. Cras fringilla dui vel lorem fringilla, in gravida felis fermentum.
                    Suspendisse potenti.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='ghost' onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={() => setShow(false)}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MediumModal;

```

### Source File 4: `src/ds-layout-components/foundations/components/modals/basic-modal/LargeModal.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const LargeModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant='primary' className='mt-2 me-2' onClick={() => setShow(true)}>
                Launch large modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)} size='lg' centered scrollable fullscreen='sm-down'>
                <Modal.Header closeButton>
                    <h3 className='mb-0'>Modal header</h3>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc eget lacinia tincidunt, nisl nunc tincidunt
                    urna, vel efficitur neque justo vitae nisi. Cras fringilla dui vel lorem fringilla, in gravida felis fermentum.
                    Suspendisse potenti.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='ghost' onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={() => setShow(false)}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LargeModal;

```

### Source File 5: `src/ds-layout-components/foundations/components/modals/basic-modal/ExtraLargeModal.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const ExtraLargeModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant='primary' className='mt-2 me-2' onClick={() => setShow(true)}>
                Launch extra-large modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)} size='xl' centered scrollable fullscreen='sm-down'>
                <Modal.Header closeButton>
                    <h3 className='mb-0'>Modal header</h3>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc eget lacinia tincidunt, nisl nunc tincidunt
                    urna, vel efficitur neque justo vitae nisi. Cras fringilla dui vel lorem fringilla, in gravida felis fermentum.
                    Suspendisse potenti.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='ghost' onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={() => setShow(false)}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ExtraLargeModal;

```

### Source File 6: `src/ds-layout-components/foundations/components/modals/basic-modal/ExtraExtraLargeModal.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const ExtraExtraLargeModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button
                variant='primary'
                className='mt-2 me-2'
                onClick={() => {
                    setShow(true);
                }}
            >
                Launch extra-extra-large modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)} dialogClassName='xxl-modal' centered scrollable fullscreen='sm-down'>
                <Modal.Header closeButton>
                    <h3 className='mb-0'>Modal header</h3>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc eget lacinia tincidunt, nisl nunc tincidunt
                    urna, vel efficitur neque justo vitae nisi. Cras fringilla dui vel lorem fringilla, in gravida felis fermentum.
                    Suspendisse potenti.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='ghost' onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={() => setShow(false)}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ExtraExtraLargeModal;

```

---

## Dual background color modal

**File:** `src/ds-layout-components/foundations/components/modals/dual-background-color-modal/DualBackgroundColorModal.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const DualBackgroundColorModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant='primary' onClick={() => setShow(true)}>
                Launch dual background color modal
            </Button>

            <Modal
                className='dual-background-color-modal'
                size='xl'
                show={show}
                onHide={() => setShow(false)}
                fullscreen='sm-down'
                scrollable
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal header</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <Container fluid>
                        <Row>
                            <Col className='content-block-left col-12 col-lg-6'>
                                <h4>Content block 1</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </Col>
                            <Col className='content-block-right col-12 col-lg-6 bg-gray-200'>
                                <h4>Content block 2</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default DualBackgroundColorModal;

```

---

## Document viewer modal

**Search Terms:** 'pdf'

**File:** `src/ds-layout-components/foundations/components/modals/document-viewer-modal/DocumentViewerModal.tsx`

```tsx
import { useState } from 'react';
import { faChevronRight, faChevronLeft, faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function DocumentViewerModal() {
    const [show, setShow] = useState(false);
    const pdf = '/example.pdf';

    const invoiceDropdown = () => (
        <DropdownButton variant='tertiary' title='Invoice' id='pdf-invoice-dropdown'>
            <Dropdown.Item href='#'>Invoice 1</Dropdown.Item>
            <Dropdown.Item href='#'>Invoice 2</Dropdown.Item>
            <Dropdown.Item href='#'>Invoice 3</Dropdown.Item>
        </DropdownButton>
    );

    const entryDropdown = () => (
        <DropdownButton variant='tertiary' title='300-40031438' id='pdf-entry-dropdown'>
            <Dropdown.Item href='#'>300-40031438</Dropdown.Item>
            <Dropdown.Item href='#'>108-433220822</Dropdown.Item>
            <Dropdown.Item href='#'>558-717026050</Dropdown.Item>
        </DropdownButton>
    );

    return (
        <>
            <Button variant='primary' onClick={() => setShow(true)}>
                Launch modal
            </Button>

            <Modal className='modal-fullscreen' show={show} onHide={() => setShow(false)} scrollable>
                <Modal.Header className='py-3'>
                    <div className='d-flex align-items-center justify-content-between w-100'>
                        <div className='d-md-none'>{entryDropdown()}</div>
                        <div className='d-none d-md-block'>
                            <InputGroup>
                                <InputGroup.Text id='pdf-entry-dropdown' className='fw-bold fs-6'>
                                    ENTRIES
                                </InputGroup.Text>
                                {entryDropdown()}
                            </InputGroup>
                        </div>

                        <div className='d-flex align-items-center justify-content-center me-2'>
                            <div className='d-md-none'>{invoiceDropdown()}</div>

                            <div className='d-none d-md-block'>
                                <InputGroup>
                                    <InputGroup.Text id='pdf-invoice-dropdown' className='fw-bold fs-6'>
                                        DOCUMENTS
                                    </InputGroup.Text>
                                    {invoiceDropdown()}
                                </InputGroup>
                            </div>

                            <Button variant='tertiary' className='ms-2 d-none d-md-inline-block'>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </Button>
                            <Button variant='tertiary' className='ms-1 d-none d-md-inline-block'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Button>
                        </div>

                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <Button variant='tertiary'>
                                <span className='me-1 d-none d-lg-inline-block'>Download all entry documents</span>
                                <FontAwesomeIcon icon={faDownload} />
                            </Button>
                            <Button variant='tertiary' onClick={() => setShow(false)}>
                                <FontAwesomeIcon icon={faTimes} />
                            </Button>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className='overflow-visible bg-lii-text p-0'>
                    <iframe src={`${pdf}#view=FitH`} title='pdfViewer' height='100%' width='100%' className='round-bottom' />
                </Modal.Body>
            </Modal>
        </>
    );
}
export default DocumentViewerModal;

```

---

## Modal with progress bar

**Usages:** 'uk clearances'

### Source File 1: `src/ds-layout-components/foundations/components/modals/modal-with-progress-bar/ModalWithProgressBar.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import ProgressNavbarHeader from './progressNavBarHeader';

const ModalWithProgressBar = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant='primary' onClick={() => setShow(true)}>
                Launch modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)} fullscreen='sm-down' dialogClassName='modal-98w' scrollable centered>
                <ProgressNavbarHeader
                    header='New Clearance'
                    subHeader='Basic Clearance Details'
                    step={1}
                    totalSteps={5}
                    onSave={() => {}}
                    onClose={() => setShow(false)}
                />
                <Modal.Body>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptatum voluptatem eum architecto ducimus quasi
                    perferendis illo, impedit sit rem sed possimus, molestias adipisci quo. Velit debitis, similique repudiandae, ea
                    voluptates eligendi optio illum magnam earum possimus qui, temporibus pariatur hic commodi tempore ratione
                    exercitationem! Iure esse dolorem repudiandae repellendus atque ipsum, unde sunt molestias nam quam optio error nostrum
                    quos dolore nihil veritatis illum accusamus perferendis ea aut. Voluptatibus, et eos. Dolorem cupiditate error corporis
                    reprehenderit hic. Iste enim, fugiat temporibus consequatur dolorum mollitia debitis est, natus fuga velit placeat
                    veritatis ad saepe labore asperiores nesciunt libero tempore totam aliquid quibusdam deleniti odio?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='tertiary' onClick={() => setShow(false)}>
                        Previous
                    </Button>
                    <Button variant='primary' onClick={() => setShow(false)}>
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalWithProgressBar;

```

### Source File 2: `src/ds-layout-components/foundations/components/modals/modal-with-progress-bar/progressNavBarHeader.tsx`

```tsx
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ProgressBar } from 'react-bootstrap';

interface ProgressNavbarHeaderProps {
    header: string;
    subHeader: string;
    step: number;
    totalSteps: number;
    onClose: () => void;
    onSave: () => void;
}

const ProgressNavbarHeader = ({ header, subHeader, step, totalSteps, onClose, onSave }: ProgressNavbarHeaderProps) => (
    <div className='progress-navbar border-bottom w-100 rounded-top'>
        <div className='d-flex align-items-start justify-content-between align-items-sm-center py-3 px-4'>
            <div>
                <h3 className='mb-0 '>{header}</h3>
                <div className='lh-sm'>
                    <span className='text-primary fw-bold fs-6'>
                        Step {step} of {totalSteps}:
                    </span>
                    &nbsp;&nbsp;
                    <span>{subHeader}</span>
                </div>
            </div>
            <div className='d-flex flex-column-reverse flex-sm-row align-items-end'>
                <Button variant='tertiary' className='text-nowrap mt-2 mt-sm-0 me-sm-2' onClick={onSave}>
                    <div className=''>Save as draft</div>
                </Button>
                <Button variant='tertiary' onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </Button>
            </div>
        </div>
        <ProgressBar className='rounded-0' now={(step / totalSteps) * 100} visuallyHidden />
    </div>
);

export default ProgressNavbarHeader;

```

---

## Saving modal with spinner

**Usages:** 'uk clearances'

**File:** `src/ds-layout-components/foundations/components/modals/saving-modal-with-spinner/SavingModalWithSpinner.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

const SavingModalWithSpinner = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant='primary' onClick={() => setShow(true)}>
                Launch modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)} fullscreen='sm-down' scrollable centered>
                <Modal.Body className='d-flex flex-column align-items-center text-center gap-3 mt-3'>
                    <Spinner className='text-primary fs-4' animation='border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner>
                    <span className='h2'>Submitting your clearance</span>
                    <p className='text-lii-text'>
                        Please don't close this window or click the back button on your browser,
                        <br /> your progress may be lost.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default SavingModalWithSpinner;

```

---

## Modal with image

**Usages:** 'uk clearances'

**File:** `src/ds-layout-components/foundations/components/modals/modal-with-image/ModalWithImage.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Badge, Image } from 'react-bootstrap';

const ModalWithImage = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant='primary' onClick={() => setShow(true)}>
                Launch modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)} fullscreen='sm-down' scrollable centered>
                <Modal.Body className='d-flex flex-column align-items-center text-center gap-2 mt-3'>
                    <Image height={92} src='/assets/images/illustrations/objects/object-inbox.svg' />
                    <span className='d-flex flex-row align-items-start gap-2'>
                        <h5 className='text-lii-text-light fs-6 text-uppercase'>Bond application</h5>
                        <Badge bg='info-bg' text='info' pill>
                            Under review
                        </Badge>
                    </span>
                    <span className='h1'>Submitted to Livingston</span>
                    <p className='text-lii-text'>
                        It will take up to 1 business day to process your clearance.
                        <br />
                        We'll notify you via email once this is complete.
                    </p>
                </Modal.Body>
                <Modal.Footer className=' justify-content-center'>
                    <Button variant='primary' onClick={() => setShow(false)}>
                        View clearances
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalWithImage;

```

---

## Modal with exit warning

**Usages:** 'uk clearances'

**File:** `src/ds-layout-components/foundations/components/modals/modal-with-exit-warning/ModalWithExitWarning.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const ModalWithImage = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant='primary' onClick={() => setShow(true)}>
                Launch modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)} fullscreen='sm-down' scrollable centered>
                <Modal.Header className='border-0' closeButton></Modal.Header>

                <Modal.Body className='d-flex flex-column align-items-center text-center'>
                    <FontAwesomeIcon className='text-danger' size='3x' icon={faExclamationCircle} />
                    <h1>Exit bond application</h1>
                    <div className='text-lii-text'>
                        <div>If you exit now, your bond application progress will be lost. </div>
                        <div>You can save it as a draft and return later to complete and submit it.</div>
                        <div> Would you like to save before exiting?</div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-content-end'>
                    <Button variant='tertiary' onClick={() => setShow(false)}>
                        Exit application
                    </Button>
                    <Button variant='primary' onClick={() => setShow(false)}>
                        View clearances
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalWithImage;

```

---

