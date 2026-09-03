---
title: Content Types
sidebar_position: 136
---

# Content Types

A **content type is a kind of page**. "Team member", "Recipe" and "Course" are
each a page with blocks and a slug like any other, plus structured fields that
belong to that kind of thing: a job title, a serving count, a difficulty level.

That's the whole idea, and it's worth stating plainly because it rules out a
common misreading: a content type is _not_ a separate table of records living
next to your pages. A team member **is** a page. It appears in the page list, it
renders, it exports, it gets a URL.

## Types hold the schema; pages hold the values

Two halves, and knowing which is which explains most of the behaviour:

- **The content type** holds the **field definitions**, meaning what a Course
  _has_: a `level`, a `duration`, an `instructor`, each with a type and
  validation rules.
- **The page** holds the **values**: this course's level is `beginner`, its
  duration is `45`.

Definitions live in exactly one place. Rename a field's label or tighten its
validation and every page of that type picks it up at once, because there's no
copy on each page to drift out of sync.

## The `page` type

Every project has a content type keyed `page`. It's what an ordinary page is,
and it's what a query reads when it doesn't name a type, the way `WP_Query`
reads posts when you give it no `post_type`.

You can't delete it. Deleting a content type deletes its pages, and deleting
`page` would take the whole site, so Studio refuses.

## Creating a content type

In the **Content Hub**, on the **Content** tab, the sidebar lists the project's
content types. Use the **+** next to the **Content Types** heading:

1. Enter the **name**, the label you'll see everywhere: `Course`.
2. Enter the **key**, prefilled with a slug of the name: `course`. This is the
   machine name a query reads, so it has to start with a letter and hold only
   lowercase letters, digits, `-` and `_`. It must be unique in the project.

The new type appears in the sidebar and is selected. A name or key the project
won't accept comes back as an error toast and nothing is created.

> **🚧 Work in progress:** a type can be created but not renamed or deleted from
> the UI yet, so treat both name and key as permanent for now.

## Creating pages of a type

Select the type in the sidebar and its table lists that type's pages, and no
others. The footer row creates one:

1. Type a **title** and, optionally, a **slug**. A blank slug is derived from the
   title.
2. Select **Create Course** — the button is named after the type.

These are pages like any other. Open one in the builder from the row's arrow
icon, mark one as the homepage, delete it — all the same as on **Pages**.

**Create Page** on the `page` type is the same action; a page created there is an
ordinary page of the `page` type.

## Fields

A field definition has three parts:

| Part     | Notes                                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------- |
| **Name** | The human label shown in the editor.                                                                             |
| **Key**  | The machine name. Lowercase, starts with a letter, then letters, digits, `-` or `_`. This is what a query reads. |
| **Type** | Which editor the field gets and what it accepts.                                                                 |

The **Fields** tab in the sidebar edits them for whichever type is selected. The
**+** next to the **Fields** heading opens a menu of types; picking one appends a
field and scrolls to it. Hold <kbd>⇧</kbd> while clicking to add several without
the menu closing.

Each field is a card with its name, key and type in the header. The copy button
beside the key puts it on the clipboard, ready to paste into a query.

### Field types

**Text** · **Number** · **Boolean** · **Dropdown** · **Checkbox** · **Radio**

**Boolean** takes a **Default value** on the card's **Advanced** tab.

**Dropdown**, **Checkbox** and **Radio** take their choices there instead, one
per line, as a label and a value separated by a colon:

```
Beginner : beginner
Intermediate : intermediate
Advanced : advanced
```

A line with no colon uses its text as both label and value.

The **Validation** and **Conditions** tabs are visible but not yet enabled.

### Renaming: types are cheap, fields are not

A **content type's key** can be changed freely once renaming lands. Pages point
at their type by id, so a rename cascades nowhere.

A **field's key** cannot. Every page of the type stores its value under that key,
so renaming `role` to `job_title` moves the definition and orphans the value on
every page. Choose field keys as though you can't change them.

> **🚧 Work in progress:** a page's own field values don't reach the render
> context yet, so there's no `{this.fields.level}` on the page they belong to.
> Reading them through a [query](querying-content.md) works today — records come
> back with their values under `fields`, so a loop reads
> `{course.fields.level}`.

## Next

- [Querying content](querying-content.md): `queryContent()`, filters, ordering,
  and what comes back
- [JavaScript sources](../data-sources/javascript.md): where queries are written
- [Data Sources](../data-sources/README.md): using the result in your markup
