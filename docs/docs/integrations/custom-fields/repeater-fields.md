---
title: Repeater Fields
sidebar_position: 4
---

# Repeater Fields

Repeater fields allow you to create flexible, repeating content structures in your templates. They're perfect for creating dynamic sections like team members, testimonials, FAQs, and more.

:::info
Note: Etch will also have its own native repeater field type in the future, providing better integration since you won't need to leave Etch to create repeater fields. Currently, setting up ACF repeaters requires leaving Etch to configure them in WordPress admin - what we call a "magic area."
:::

## General Usage

In Etch, repeater fields can be accessed using the loop syntax with the appropriate namespace based on the custom fields plugin you're using.

```html
<!-- General syntax -->
{#loop this.field_source.repeater_field_name as item}
  <!-- Your repeating content here -->
  <!-- Use {item.sub_field_name} to access sub-field data -->
{/loop}
```

## Plugin-Specific Usage

### Advanced Custom Fields (ACF)

ACF repeater fields are a powerful way to create flexible, repeating content structures in WordPress. Like looping through any other data in Etch, it's incredibly easy to loop through ACF repeaters and display their data dynamically.

```html
{#loop this.acf.repeater_field_name as item}
  <div class="repeater-row">
      {item.sub_field_name}
      {item.sub_field_name2}
  </div>
{/loop}
```

#### How ACF Repeater Loops Work

ACF repeater loops in Etch use the `this.acf.repeater_field_name` syntax as the data source. This allows you to access repeater field data from the current post or page context and loop through each repeater row.

#### Example: FAQ Section

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
:::tip
Always loop the container element that should be repeated, not its parent or children. In the example above, we loop the `<li>` element because that's what we want repeated for each FAQ item - not the parent `<ul>` container _or_ `h3` question _or_ `div` answer.
:::

**What's happening here:**
1. The loop targets `this.acf.faq` (your ACF repeater field)
2. Each row is aliased as `faq` for easy reference
3. Sub-fields are accessed using `{faq.question}` and `{faq.answer}`
4. The `<li>` element is what gets repeated for each FAQ item




## Tips

- You can nest repeaters within repeaters for complex data structures
- Use conditional logic within repeater loops to show/hide elements based on field values
- Combine repeaters with other dynamic data for powerful templating capabilities
