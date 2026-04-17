---
name: dds
description: Help users with the Livingston Digital Design System (DDS) by looking up component docs, examples, and migration guides.
---

# dds

Answer questions about the Livingston Digital Design System by reading the relevant documentation files before responding.

## When to use

When a user asks for help with any DDS component, pattern, or migration — e.g. "how do I use cards?", "show me a button example", "how do I migrate the toaster?".

## Instructions

1. Identify what the user is asking about (component name, pattern, or migration topic).

2. Read the most relevant file(s) from the docs folders below. Choose based on the topic:

    **Component examples** — `./examples/`
    - `alerts-examples.md`
    - `buttons-examples.md`
    - `cards-examples.md`
    - `forms-examples.md`
    - `modals-examples.md`
    - `navigation-examples.md`
    - `tables-examples.md`
    - `typography-examples.md`
    - `utilities-examples.md`

    **npm component API / props** — `./livingston-npm-components/`
    - Start with `npm-index.md` to find which category file to read
    - `npm-alerts.md` — Alert, AlertButton, AlertCollapse, TOAST_QUEUE
    - `npm-badges.md` — CircularBadge, PillBadge, CircularBadgeList
    - `npm-cards.md` — InfoCard, ComponentContainer
    - `npm-drag-drop.md` — DragAndDropList, DraggableListItem, DropIndicator
    - `npm-filters.md` — CheckboxFilter, DateFilter, DateRangeFilter, SearchableCheckboxDropdown
    - `npm-forms.md` — all FormX inputs, FormProvider, FormContext, TimePicker
    - `npm-kendo.md` — KendoColumnHeaderWithPin, KendoDropdownButton, KendoStickyHeaderGridWrapper, useKendoResponsiveColWidths
    - `npm-navigation.md` — Sidebar, SearchBar, SearchBarWithHistory, LanguageSelector
    - `npm-utilities.md` — hooks, date/number formatters, sanitize, translate, validation
    - `npm-misc.md` — CopyToClipboard, ExpandingText, SmallSpinner, Spinner

    **Migration guides** — `./migration-guides/`
    - `toaster-migration.md`

3. Read the file(s) using the Read tool before answering. Do not answer from memory alone — always ground your response in the actual doc content.

4. If the user's topic spans multiple files (e.g. both examples and API props), read all relevant files before responding.

5. Answer the user's question using the content you read. Include code snippets from the docs where helpful.

6. If no doc file clearly matches the user's question, say so and suggest the closest available resource.
