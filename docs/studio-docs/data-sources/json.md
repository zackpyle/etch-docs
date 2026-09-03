---
title: JSON Sources
sidebar_position: 10
---

# JSON Sources

A JSON source is data you write by hand. It's the simplest of the three types
and the right choice whenever the data is yours, doesn't change often, and has no
business living behind an HTTP request: navigation menus, pricing tiers, team
members, a set of feature cards, site-wide configuration.

## Creating one

In the Data Manager, select **+**, give the source a name and key, choose
**JSON**, and create it. The editor opens on the **Code** view with an empty
array.

Write any valid JSON: an array, an object, a string, a number.

```json
[
	{ "name": "Yoga", "time": "09:00", "instructor": "Ada" },
	{ "name": "CrossFit", "time": "11:00", "instructor": "Grace" },
	{ "name": "Pilates", "time": "14:00", "instructor": "Ada" }
]
```

The **format** button in the editor bar tidies it up.

> **💡 Tip:** you don't have to type it all out. AI models are very good at
> producing JSON, so describe the shape you want ("a list of 12 gym classes with
> name, time and instructor") and paste the result into the Code view. Ask for
> valid JSON with no comments and no trailing commas, since that's all the
> editor will save.

The preview pane on the right shows the parsed value as a tree. Selecting a row
copies its path, which is the fastest way to get from "the data has this shape"
to "here's the expression".

## Visual view

If you'd rather not write JSON by hand, switch the editor to **Visual** with the
toggle above the editor. The same data is shown as a form: arrays become
collapsible item cards, objects become rows of key, type and value.

- Rename a key by typing in it, and set the type with the dropdown (String,
  Number, Boolean, Object, Array). Booleans get a switch instead of a text field.
- **+ Field** adds a key to an object, **+ Item** adds an entry to an array, and
  the copy and trash icons on a card duplicate or remove it.
- Objects and arrays nest, so you can build a whole structure without ever
  touching a bracket.

{/* TODO: screenshot of a JSON source in the Visual view, with item cards and key/type/value rows */}

Both views edit the same source, so you can start in Visual, switch to **Code**
to paste in a larger chunk, and switch back. Use whichever fits the moment.

## Editing

Only valid JSON is saved. While what you've typed doesn't parse, the source keeps
its last good value, so a half-typed edit never blanks out the pages using it.
Finish the edit and it saves itself.

## Using it

Exactly like any other source. See
[using a data source](README.md#using-a-data-source):

<!-- prettier-ignore -->
```html
{#loop data('courses') as course}
  <li>
    <h3>{course.name}</h3>
    <p>{course.time} with {course.instructor}</p>
  </li>
{/loop}
```

Objects work just as well as arrays, and are often the better shape for
configuration:

```json
{
	"tagline": "Move better, feel better",
	"phone": "+43 1 234 5678",
	"email": "hello@example.com",
	"social": {
		"instagram": "https://instagram.com/example",
		"linkedin": "https://linkedin.com/company/example"
	}
}
```

<!-- prettier-ignore -->
```html
<footer>
  <p>{data('siteConfig').tagline}</p>
  <a href="tel:{data('siteConfig').phone}">{data('siteConfig').phone}</a>
  <a href="{data('siteConfig').social.instagram}">Instagram</a>
</footer>
```

## When to reach for something else

- The data lives in another system → [API source](api.md)
- The data needs shaping, filtering or combining → [JavaScript source](javascript.md)
- The data is your own pages → [content types](../content-types/README.md), queried
  from a JavaScript source

## Notes

- Arguments passed to `data('key', …)` are ignored by JSON sources, though each
  distinct set of arguments is cached separately. If you want arguments to _do_
  something, use a [JavaScript source](javascript.md).
- The value is stored with your project, so it's part of the site: no external
  call at build time, nothing to go down.
