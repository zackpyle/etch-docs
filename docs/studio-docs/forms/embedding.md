---
title: Embedding a Form
sidebar_position: 10
---

# Embedding a third-party form

The fastest route. A form service hosts the form, receives the submissions and
notifies you; your page just has to load it.

This works with any provider that hands you an embed snippet — a `<script>` tag,
an `<iframe>`, or both. Studio has no special integration with any of them, and
doesn't need one.

## Providers to look at

A few common ones, and what to expect from each:

| Service           | Good for                                       | Styling                                                      |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| **Google Forms**  | Free, quick, answers land in a spreadsheet     | Iframe — theming is limited to Google's own options          |
| **Typeform**      | Conversational, one-question-at-a-time forms   | Iframe, themed in Typeform's editor                          |
| **Tally**         | A generous free tier and a lot of field types  | Iframe, with theme controls in Tally                         |
| **Jotform**       | Long forms, conditional logic, payments        | Iframe by default; also offers a full-source embed you style |
| **HubSpot Forms** | Leads that need to land in a CRM straight away | Rendered into your page, so your CSS reaches it              |

## What a snippet looks like

Most providers give you one or two pieces:

```html
<!-- the loader -->
<script src="https://forms.example.com/embed.js" async></script>

<!-- and the placeholder it fills in -->
<div data-form-id="abc123"></div>
```

Some give you a single tag that does both. Either shape is fine.

Others — Google Forms, Typeform and Tally among them — give you an **iframe**
instead:

```html
<iframe
	src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
	width="640"
	height="800"
	frameborder="0"
></iframe>
```

That's ordinary HTML too. Paste it into the **HTML** panel exactly as the
provider gave it to you, and it becomes an `<iframe>` block on the page.

Two things worth doing to it afterwards, both in the **CSS** panel:

```css
.form-embed {
	width: 100%;
	min-height: 800px;
	border: 0;
}
```

Give the iframe a class in the HTML panel (`<iframe class="form-embed" …>`),
then drop the `width` and `height` attributes — the CSS handles both, and the
form stops overflowing on narrow screens. The height has to be set by you: an
iframe won't grow to fit its contents, so pick a value with room to spare, or
use the height helper your provider offers if it has one.

## Adding it to the page

1. In the builder, select the block the form should sit inside or next to.
2. Open the **HTML** panel.
3. Paste the snippet where you want it.

Studio parses what you write into blocks, so the embed becomes part of the page
structure like anything else — visible in **Structure**, selectable, movable.

### Loader scripts and `<etch:head>`

Providers often ask for the loader script "in the `<head>`". That's what
`<etch:head>` is for.

Anything you put inside an `<etch:head>` block renders into the **document
head** rather than in place: the canvas's head while you're editing, and the
exported page's head when the site is built.

<!-- prettier-ignore -->
```html
<etch:head>
  <script src="https://forms.example.com/embed.js" async></script>
</etch:head>
```

Write it in the **HTML** panel like any other markup. It shows up in
**Structure** as `<etch:head>`, and it produces no output of its own where it
sits — only its children, up in the head.

If the provider doesn't specifically ask for the head, leaving the script inline
next to the container is fine.

## Styling the embed

Once the form renders, style it with Etch like anything else: open the **CSS**
panel and target the classes the provider outputs. Inspect the rendered form in
your browser's dev tools to find them.

> **⚠️ Some embeds render inside an iframe.** An iframe's contents belong to
> another document, and CSS from your page cannot reach them. If that's what
> your provider does, your only styling options are the ones the provider
> exposes in its own dashboard. It's worth checking that before you commit to a
> provider.

## What gets deployed

The snippet is baked into the exported HTML exactly as you wrote it. Nothing is
fetched at build time and nothing is rewritten — the provider's script runs in
the visitor's browser when the page loads, the same as on any other static site.

## Troubleshooting

**The form doesn't appear in the canvas.** Not every third-party script runs
happily inside the builder's canvas. Confirm on the real thing: **Download
Site** or **Deploy**, then open the page.

**The form doesn't appear on the deployed page either.** Check the browser
console. The usual causes are the loader script missing (or placed after the
code that needs it), a container `<div>` whose id or `data-` attribute doesn't
match what the provider expects, or an ad blocker.

**Your styles don't apply.** Almost always an iframe — see above.
