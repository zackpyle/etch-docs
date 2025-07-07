---
title: Basic Loops
sidebar_position: 1
---

# Loops

Loops in Etch allow you to dynamically repeat content or components based on data sources, such as lists of posts, products, users, or custom data.

You can use loops to render lists, grids, or any repeated structure, with full support for dynamic data. This enables you to build powerful, data-driven layouts visually.

## Loop Data Sources

Etch supports several types of loop data sources:

- **WP Query**: Query posts or custom post types from WordPress.
- **JSON**: Use static or dynamic JSON data as the source.
- **WP Terms**: Query taxonomy terms (categories, tags, etc.).
- **WP Users**: Query WordPress users.

## How Loops Work

- Loops are implemented via the "Loop" element.
- The Loop element is configured with a data source (e.g., a WP Query, JSON, etc.) and optional parameters.
- For each item in the data source, Etch renders the inner elements, injecting the current item's data into the context.
- You can use dynamic data keys (e.g., `{item.title}`) inside child elements to access the data of the current loop item.

## Example: WP Query (Posts)

Suppose you want to display a list of blog posts:

```php
// Query for latest 10 posts
$query_args = [
  'post_type' => 'post',
  'posts_per_page' => 10,
  'orderby' => 'date',
  'order' => 'DESC',
  'post_status' => 'publish'
];
```

- Add a Loop element and configure it with the above WP Query arguments.
- Add child elements (e.g., Heading, Image) inside the loop.
- Use dynamic data keys like `{item.title}` or `{item.featured_image}` in child elements to display post data.

## Example: Custom JSON (Authors)

Suppose you have a list of authors and want to display their names:

```json
[{ "name": "Jane Austen" }, { "name": "Mark Twain" }, { "name": "Virginia Woolf" }]
```

- Add a Loop element and set the data source type to JSON.
- Paste the above JSON as the data source.
- Add a child element (e.g., Heading) inside the loop and use `{item.name}` to display each author's name.

## See Also

- [Nested Loops](/docs/loops/nested-loops)
