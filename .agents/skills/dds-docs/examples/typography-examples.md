# Typography - Code Examples

This file contains code examples for typography components from the Livingston Design System.

## Headings

**Search Terms:** 'font size', 'heading'

**File:** `src/components/typography/headings.tsx`

```tsx
function Headings() {
    return (
        <>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
        </>
    );
}

export default Headings;

```

---

## Display headings

**Search Terms:** 'font size', 'heading'

**File:** `src/components/typography/display-headings.tsx`

```tsx
function DisplayHeadings() {
    return (
        <>
            <h1 className='display-1'>Display 1</h1>
            <h1 className='display-2'>Display 2</h1>
            <h1 className='display-3'>Display 3</h1>
            <h1 className='display-4'>Display 4</h1>
        </>
    );
}

export default DisplayHeadings;

```

---

## Paragraph text

**Search Terms:** 'anchor tags', 'links', 'bold', 'font weigth', 'small'

**File:** `src/components/typography/paragaph.tsx`

```tsx
function Paragraph() {
    return (
        <>
            <p>This is a regular line of paragraph text</p>
            <p>
                <strong>This is a bold line of paragraph text</strong>
            </p>
            <p>
                <a href='/#'>This is link text</a>
            </p>
            <p>
                <small>This is a line of small paragraph text</small>
            </p>
            <p>
                <small>
                    <a href='/#'>This is small link text</a>
                </small>
            </p>
        </>
    );
}

export default Paragraph;

```

---

