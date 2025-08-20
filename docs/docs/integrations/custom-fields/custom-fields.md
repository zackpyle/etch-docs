---
title: Custom Fields
sidebar_position: 1
---

# Custom Fields

Etch integrates seamlessly with third-party custom field solutions, allowing you to use custom field data in your templates and designs.

## Third-Party Integrations

Etch supports popular third-party custom field plugins to enhance your content management capabilities.

### Advanced Custom Fields (ACF)

Custom fields created with Advanced Custom Fields can be accessed with the `acf` namespace.

```html
<!-- In a template -->
{this.acf.field_id}

<!-- In a loop -->
{item.acf.field_id}
```

:::info 
For information about Etch native fields and WordPress meta fields, see the [Dynamic Data Keys](/docs/dynamic-data/dynamic-data-keys) documentation.
:::

## Custom Field Types

- **[Text Fields](./text-fields.md)** - Working with text-based custom fields
- **[Image Fields](./image-fields.md)** - Working with image custom fields
- **[Gallery Fields](./gallery-fields.md)** - Working with multiple image galleries
- **[Repeater Fields](./repeater-fields.md)** - Working with repeatable field groups
- **[ACF Flexible Content Loops](./flexible-content-fields.md)** - Creating dynamic layouts with ACF Flexible Content
