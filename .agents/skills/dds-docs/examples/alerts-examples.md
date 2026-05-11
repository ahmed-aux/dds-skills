# Alerts - Code Examples

This file contains code examples for alerts components from the Livingston Design System.

## Alert types

**Search Terms:** 'npm', 'success', 'warning', 'danger', 'info', 'dark'

**File:** `src/ds-layout-components/foundations/components/alerts/AlertsExample.tsx`

```tsx
import { faCheckCircle, faExclamationCircle, faExclamationTriangle, faLightbulb, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from 'livingston-npm-components';
import { AlertButton } from 'livingston-npm-components';

type AlertVariant = 'danger' | 'warning' | 'info' | 'success' | 'dark';

function AlertsExample() {
    const onDismiss = () => {
        alert('Dismiss onClick');
    };

    const onPrimaryAction = () => {
        alert('Primary action button onClick');
    };

    const content = (variant: AlertVariant, icon: IconDefinition) => (
        <>
            <div className='d-flex align-items-start mt-1'>
                <FontAwesomeIcon icon={icon} className='me-3' />
            </div>
            <div className='d-flex flex-column flex-md-row w-100 me-2'>
                <div className='me-2'>
                    <span className='fw-bold'>Alert title: </span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
                <AlertButton
                    variant={variant}
                    size='sm'
                    className='ms-md-auto mt-2 mt-md-0 me-4 align-self-start'
                    onClick={onPrimaryAction}
                >
                    Primary action button
                </AlertButton>
            </div>
        </>
    );

    return (
        <>
            <Alert variant='success' onDismiss={() => onDismiss()} className='d-flex mb-3'>
                {content('success', faCheckCircle)}
            </Alert>

            <Alert variant='warning' onDismiss={() => onDismiss()} className='d-flex mb-3'>
                {content('warning', faExclamationTriangle)}
            </Alert>

            <Alert variant='danger' onDismiss={() => onDismiss()} className='d-flex mb-3'>
                {content('danger', faExclamationCircle)}
            </Alert>

            <Alert variant='info' onDismiss={() => onDismiss()} className='d-flex mb-3'>
                {content('info', faLightbulb)}
            </Alert>

            <Alert variant='dark' onDismiss={() => onDismiss()} className='d-flex'>
                {content('dark', faLightbulb)}
            </Alert>
        </>
    );
}

export default AlertsExample;

```

---

## Alert with Image and CTA

**Search Terms:** 'cta', 'npm'

**File:** `src/ds-layout-components/foundations/components/alerts/AlertWithImageAndCtaExample.tsx`

```tsx
import { Alert, AlertButton } from 'livingston-npm-components';

const content = () => (
    <>
        <div className='d-flex'>
            <img
                src='/assets/images/illustrations/objects/object-card.svg'
                alt='card illustration'
                className='me-3'
                style={{ width: '56px', height: 'auto' }}
            />
        </div>
        <div className='d-md-flex justify-content-md-between align-items-md-center flex-fill'>
            <div className='me-3'>
                <h3 className='fw-bold mb-0'>Alert title</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </div>
            <AlertButton variant='info' className='ms-md-auto mt-2 mt-md-0 me-4' onClick={() => alert('Button onClick')}>
                Primary action button
            </AlertButton>
        </div>
    </>
);

function AlertWithImageAndCtaExample() {
    const handleDismiss = () => {
        alert('Dismiss onClick');
    };

    return (
        <Alert variant='info' onDismiss={() => handleDismiss()} className='d-flex'>
            {content()}
        </Alert>
    );
}

export default AlertWithImageAndCtaExample;

```

---

## Alert toasts

**Usages:** 'uk clearances'

### Source File 1: `src/utils/toastQueue.ts`

```tsx
import { ToastQueue } from 'livingston-npm-components';

export const toastQueue = new ToastQueue();
export const notificationToastQueue = new ToastQueue(5000);

```

### Source File 2: `src/main.tsx`

```tsx
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import StoreProvider from '@/store/StoreProvider';
import { Toaster } from 'livingston-npm-components';
import { toastQueue, notificationToastQueue } from '@/utils/toastQueue';
import './scss/main.scss';
import NotificationToast from './ds-layout-components/foundations/components/toasts/NotificationToast.tsx';

createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <App />
        <Toaster toastQueue={toastQueue} />
        <Toaster toastQueue={notificationToastQueue} position='top-end'>
            {(toast) => <NotificationToast toast={toast} onClose={(id) => notificationToastQueue.removeToast(id)} />}
        </Toaster>
    </StoreProvider>
);

```

### Source File 3: `src/ds-layout-components/foundations/components/toasts/ToastSystemMessage.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import { toastQueue } from '@/utils/toastQueue';

const ToastSystemMessage = () => {
    return (
        <>
            <Button className='me-3 mb-3' onClick={() => toastQueue.addToast({ type: 'success', message: 'Success toast message' })}>
                Success toast message
            </Button>
            <Button className='me-3 mb-3' onClick={() => toastQueue.addToast({ type: 'warning', message: 'Warning toast message' })}>
                Warning toast message
            </Button>
            <Button className='mb-3' onClick={() => toastQueue.addToast({ type: 'error', message: 'Error toast message' })}>
                Error toast message
            </Button>
        </>
    );
};
export default ToastSystemMessage;

```

---

## Notification toasts

### Source File 1: `src/ds-layout-components/foundations/components/toasts/NotificationToast.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import { PillBadge } from 'livingston-npm-components';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Toast } from 'livingston-npm-components';

interface NotificationToastProps {
    toast: Toast;
    onClose?: (id: string) => void;
}

const NotificationToast = ({ toast, onClose }: NotificationToastProps) => {
    return (
        <div className='rounded shadow-sm p-3 bg-white'>
            <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>
                <PillBadge variant='info' className='mb-0 me-4'>
                    Processing your request...
                </PillBadge>
                <div className='d-flex gap-2  align-items-center'>
                    <small>05/04/2026 02:57 PM</small>
                    <Button variant='ghost' className='text-lii-text-light' onClick={onClose?.bind(null, toast.id)}>
                        <FontAwesomeIcon icon={faClose} />
                    </Button>
                </div>
            </div>
            <div className='mt-2'>{toast.message}</div>
            <Button variant='secondary' className='mt-3' onClick={onClose?.bind(null, toast.id)}>
                Got it, thanks
            </Button>
        </div>
    );
};
export default NotificationToast;

```

### Source File 2: `src/utils/toastQueue.ts`

```tsx
import { ToastQueue } from 'livingston-npm-components';

export const toastQueue = new ToastQueue();
export const notificationToastQueue = new ToastQueue(5000);

```

### Source File 3: `src/main.tsx`

```tsx
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import StoreProvider from '@/store/StoreProvider';
import { Toaster } from 'livingston-npm-components';
import { toastQueue, notificationToastQueue } from '@/utils/toastQueue';
import './scss/main.scss';
import NotificationToast from './ds-layout-components/foundations/components/toasts/NotificationToast.tsx';

createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <App />
        <Toaster toastQueue={toastQueue} />
        <Toaster toastQueue={notificationToastQueue} position='top-end'>
            {(toast) => <NotificationToast toast={toast} onClose={(id) => notificationToastQueue.removeToast(id)} />}
        </Toaster>
    </StoreProvider>
);

```

### Source File 4: `src/ds-layout-components/foundations/components/toasts/NotificationToastExample.tsx`

```tsx
import Button from 'react-bootstrap/Button';
import { notificationToastQueue } from '@/utils/toastQueue';

const NotificationToastExample = () => {
    return (
        <>
            <Button className='mb-3' onClick={() => notificationToastQueue.addToast({ type: 'error', message: 'Error toast message' })}>
                Notification toast message
            </Button>
        </>
    );
};
export default NotificationToastExample;

```

---

## Message thread entries - Variant 1

### Source File 1: `src/ds-layout-components/foundations/components/messages/MessageThreadEntries.tsx`

```tsx
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserProfileImage } from '@/assets/images/UserProfileImage';
import { Image, Button, Row, Col, Container } from 'react-bootstrap';

function MessageThreadEntries() {
    return (
        <>
            {/* Single message */}
            <div className='single-message py-4'>
                <Container fluid>
                    <Row>
                        <Col className=' flex-grow-0 pe-0'>
                            <div className='message-avatar'>
                                <Image src={'/assets/images/resources/logo/livingston/livingston-avatar.svg'} alt={'Livingston-avatar'} />
                            </div>
                        </Col>
                        <Col className='d-md-flex justify-content-md-between'>
                            <div className='mb-2'>
                                <h4 className='m-0'>Livingston</h4>
                                <small>External user</small>
                                <div className='mt-1 mt-md-2'>
                                    Can you please provide us with a proper country of origin document. See the example attached. Thank you
                                </div>
                                <Button variant='tertiary' size='sm' className=' mt-3'>
                                    country-of-origin.pdf <FontAwesomeIcon icon={faDownload} className='ms-1' />
                                </Button>
                            </div>
                            <div className='ms-md-3 flex-shrink-0'>
                                <small>3 Nov 2022 at 4:47 PM</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Single message */}
            <div className='single-message alt py-4'>
                <Container fluid>
                    <Row>
                        <Col className='flex-grow-0 pe-0'>
                            <div className='message-avatar'>
                                <UserProfileImage />
                            </div>
                        </Col>
                        <Col className='d-md-flex justify-content-md-between'>
                            <div className='mb-2'>
                                <h4 className='m-0'>Alex Morros</h4>
                                <small>External user</small>
                                <div className='mt-1 mt-md-2'>Sorry the previous PDF was blank. Please see attached.</div>
                                <Button variant='tertiary' size='sm' className='mt-3'>
                                    country-of-origin.pdf <FontAwesomeIcon icon={faDownload} className='ms-1' />
                                </Button>
                            </div>
                            <div className='ms-md-3 flex-shrink-0'>
                                <small>3 Nov 2022 at 4:47 PM</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default MessageThreadEntries;

```

### Source File 2: `src/assets/images/UserProfileImage.tsx`

```tsx
export const UserProfileImage = () => (
    <svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='25' cy='25' r='25' fill='#E7EEF3' />
        <path
            d='M25 26.202a5.41 5.41 0 0 0 5.409-5.409c0-2.967-2.442-5.408-5.409-5.408a5.41 5.41 0 0 0-5.409 5.408A5.386 5.386 0 0 0 25 26.202Zm4.808 1.202h-2.104c-.826.413-1.727.6-2.704.6-.977 0-1.916-.187-2.742-.6h-2.066c-2.666 0-4.807 2.178-4.807 4.808v.6a1.78 1.78 0 0 0 1.803 1.803h15.625c.976 0 1.802-.788 1.802-1.803v-.6c0-2.63-2.178-4.808-4.807-4.808Z'
            fill='#8DABCD'
        />
    </svg>
);

```

---

## Message composer - Variant 1

**File:** `src/ds-layout-components/foundations/components/messages/MessageComposer.tsx`

```tsx
import { faPaperclip, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Row, Col, Container, Badge } from 'react-bootstrap';

function MessageComposer() {
    return (
        <Container className='message-composer p-0' fluid>
            <Row>
                <Col>
                    <Form>
                        <Form.Control
                            as='textarea'
                            rows={4}
                            name='exampleFormControlTextArea1'
                            placeholder='Write a message...'
                            className='mb-2 mb-sm-3'
                        />
                    </Form>
                    <div className='d-flex flex-column flex-sm-row align-items-sm-start justify-content-sm-between'>
                        <div className='uploaded-files d-flex flex-column flex-sm-row align-items-sm-start'>
                            <Button variant='tertiary' className='flex-fill flex-shrink-0 mb-sm-0 me-sm-3 order-2 order-sm-1'>
                                <FontAwesomeIcon icon={faPaperclip} className='me-1' /> Attach file...
                            </Button>
                            <div className='d-flex flex-wrap mb-2 mb-sm-0 order-1 order-sm-2'>
                                <Badge
                                    className='d-flex flex-row align-items-center justify-content-between me-1 my-1'
                                    bg='dark-bg'
                                    text='dark'
                                    pill
                                >
                                    <div className='filename'>country-of-origin.pdf</div>
                                    <FontAwesomeIcon icon={faTimesCircle} className='cursor-pointer ms-1' />
                                </Badge>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-stretch flex-shrink-0 mt-2 mt-sm-0'>
                            <Button variant='primary' size='lg' className='flex-fill'>
                                Post reply
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default MessageComposer;

```

---

## Message thread entries - Variant 2

**Usages:** 'uk clearances'

### Source File 1: `src/ds-layout-components/foundations/components/messages/ClearancesMessageThreadEntries.tsx`

```tsx
import { Image, Row, Col, Container } from 'react-bootstrap';

interface MessageThreadEntryProps {
    avatarImgPath: string;
    altText: string;
    senderName: string;
    message: string;
    timestamp: string;
}

const MessageThreadEntry = ({ avatarImgPath, altText, senderName, message, timestamp }: MessageThreadEntryProps) => {
    return (
        <div className='border-bottom border-gray-400 bg-white py-4'>
            <Container fluid>
                <Row className='flex-nowrap'>
                    <Col className='flex-grow-0 pe-0'>
                        <Image style={{ width: '1.7rem' }} src={avatarImgPath} alt={altText} />
                    </Col>
                    <Col className='d-md-flex justify-content-md-between'>
                        <div className='mb-2 me-4'>
                            <h4 className='m-0 lh-1 text-break' style={{ overflowWrap: 'anywhere' }}>
                                {senderName}
                            </h4>
                            <div className='mt-1 mt-md-2'>{message}</div>
                        </div>
                        <div className='ms-md-3 text-nowrap'>
                            <small>{timestamp}</small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

function ClearancesMessageThreadEntries() {
    return (
        <>
            <MessageThreadEntry
                avatarImgPath='/assets/images/resources/logo/compass/arrow-blue.svg'
                altText='Livingston-avatar'
                senderName='Livingston'
                message='We require the commercial invoice and packing list to proceed with the clearance. Please provide these documents at your earliest convenience.'
                timestamp='4:11 PM'
            />
            <MessageThreadEntry
                avatarImgPath='/assets/images/resources/logo/livingston/livingston-user-light.svg'
                altText='Livingston-avatar'
                senderName='j.smith@uktradebrokers.co.uk'
                message='I uploaded these documents 10mins ago. Please check again.'
                timestamp='4:56 PM'
            />
        </>
    );
}
export default ClearancesMessageThreadEntries;

```

### Source File 2: `src/assets/images/UserProfileImage.tsx`

```tsx
export const UserProfileImage = () => (
    <svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='25' cy='25' r='25' fill='#E7EEF3' />
        <path
            d='M25 26.202a5.41 5.41 0 0 0 5.409-5.409c0-2.967-2.442-5.408-5.409-5.408a5.41 5.41 0 0 0-5.409 5.408A5.386 5.386 0 0 0 25 26.202Zm4.808 1.202h-2.104c-.826.413-1.727.6-2.704.6-.977 0-1.916-.187-2.742-.6h-2.066c-2.666 0-4.807 2.178-4.807 4.808v.6a1.78 1.78 0 0 0 1.803 1.803h15.625c.976 0 1.802-.788 1.802-1.803v-.6c0-2.63-2.178-4.808-4.807-4.808Z'
            fill='#8DABCD'
        />
    </svg>
);

```

---

## Message composer - Variant 2

**Usages:** 'uk clearances'

**File:** `src/ds-layout-components/foundations/components/messages/ClearancesMessageComposer.tsx`

```tsx
import { Button, Form, Row, Col, Container, Badge, Card } from 'react-bootstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MessageComposer() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='d-flex align-items-center pb-3'>
                        <Badge className='badge-circular badge-circular-xs me-2' text='white' bg='lii-input-placeholder-text'>
                            <FontAwesomeIcon icon={faUser} />
                        </Badge>
                        j.smith@uktradebrokers.co.uk
                    </div>
                    <Card className='shadow-none'>
                        <Card.Body className='p-0 z-1'>
                            <Form>
                                <Form.Control
                                    as='textarea'
                                    name='messageComposerTextArea'
                                    placeholder='Write message...'
                                    className='border-0 rounded-bottom-0'
                                    style={{ height: '10rem' }}
                                />
                            </Form>
                        </Card.Body>
                        <Card.Footer className='d-flex justify-content-end bg-gray-200'>
                            <Button variant='primary'>Send message</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default MessageComposer;

```

---

