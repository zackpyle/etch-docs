---
title: Looping ACF Repeaters
sidebar_position: 4
---

# ACF Repeater Loops

ACF (Advanced Custom Fields) repeater fields are a powerful way to create flexible, repeating content structures in WordPress. Like looping through any other data in Etch, it's incredibly easy to loop through ACF repeaters and display their data dynamically.

:::info
Etch will also have its own native repeater custom field type in the future, meaning you won't need to leave Etch to create the repeater field. Currently, setting up ACF repeaters requires leaving Etch to configure them in the WordPress admin - what we call a _"magic area."_
:::

## How ACF Repeater Loops Work

ACF repeater loops in Etch use the `this.acf.repeater_field_name` syntax as the data source. This allows you to access repeater field data from the current post or page context and loop through each repeater row.

**The basic structure is:**
```html
{#loop this.acf.repeater_field_name as item}
  <!-- Your repeating content here -->
  <!-- Use {item.sub_field_name} to access sub-field data -->
{/loop}
```

### Example: FAQ Section

Suppose you have an ACF repeater field called FAQ (`faq`) with two sub-fields:
- Question (`question`) - Text field
- Answer - (`answer`) - Textarea field

Here's how you'd loop through and display the FAQ items:

```html
<ul data-etch-element="flex-div" class="faq-list">
  {#loop this.acf.faq as faq}
    <li data-etch-element="flex-div" class="faq">
      <h3 class="faq__question">{faq.question}</h3>
      <div class="faq__answer">{faq.answer}</div>
    </li>
  {/loop}
</ul>
```

**What's happening here:**
1. The loop targets `this.acf.faq` (your ACF repeater field)
2. Each row is aliased as `faq` for easy reference
3. Sub-fields are accessed using `{faq.question}` and `{faq.answer}`
4. The `<li>` element is what gets repeated for each FAQ item

<br />
:::tip
Always loop the container element that should be repeated, not its parent or children. In the example above, we loop the `<li>` element because that's what we want repeated for each FAQ item - not the parent `<ul>` container _or_ `h3` question _or_ `div` answer.
:::