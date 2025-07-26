---
title: Link
---

# Link

The Link element produces a `<a href="#">Link</a>`. 

## Mandatory attributes

`href=""` is the mandatory attribute for links, which is why it's added automatically. This is the destination of the link. You can edit the value for this attribute via the HTML editor, the attributes panel, or the Attribute bar.

## Open in New Tab

If you want your link to open in a new tab, you can add `target="_blank"` via the Attributes bar or the HTML editor.

## Buttons vs Links

It's important to remember that links are navigational elements. If you're navigating the user to another part of the page, or to a new page entirely, then a link is appropriate.

Links can look like buttons visually, but this is done via CSS, not by changing the actual HTML tag to `<button>`.

If you are triggering an on-page event, like firing a modal or advancing slides in a carousel, then a link is _inappropriate_. On-page events should be triggered with a `<button>` element.

Links can be transformed into buttons by changing the HTML tag, but you should remove any link-based attributes when you do this.

Buttons can also be added by adding a Text, Div, or Flex Div element and changing the tag to `<button>`. Doing this will save you the step of having to remove the link attributes.

We did not include a literal Button element in Etch for two big reasons:

1. Buttons are used far less frequently than links.
2. The word "button" creates tremendous confusion between visual and semantic use.

It's better to provide a Link element knowing that users who understand the semantic distinction between buttons and links can easily make a button themselves out of any of the existing elements or simply by writing it in the HTML.