---
title: Looping Attachments
sidebar_position: 4
---

# Looping Attachments

Attachments in WordPress are files that have been uploaded to the media library and are associated with a post, page, or taxonomy. When you loop attachments, you're iterating through all the attached files, or files of a specific type.

## Common Attachment Loop Sources

### Post Attachments
Loop through all files attached to a post or the current post:

```php
// Query for all attachments of the current post (replace $id with the post ID or pass dynamic data to the query argument)
$query_args = [
  'post_type' => 'attachment',
  'post_parent' => $id,
  'posts_per_page' => -1,
  'post_status' => 'inherit',
  'orderby' => 'menu_order',
  'order' => 'ASC'
];
```

Read more about [loop arguments](loop-arguments).

### Taxonomized Attachments
Loop through all files in a specific category. This is common when using plugins that organize the media library or after you assign custom taxonomies to attachments.

```php {8-14}
// Query for all attachments of the current post (replace $id with the post ID or pass dynamic data to the query argument)
$query_args = [
  'post_type' => 'attachment',
  'posts_per_page' => -1,
  'post_status' => 'inherit',
  'orderby' => 'menu_order',
  'order' => 'ASC',
  'tax_query'   => [
    [
      'taxonomy' => 'happyfiles_category',
      'field'    => 'id',
      'terms'    => '3', // The term ID
    ],
  ],
];
```

### Specific Attachment Types
Filter attachments by file type:

```php {7}
// Query for only image attachments
$query_args = [
  'post_type' => 'attachment',
  'post_parent' => $id,
  'posts_per_page' => -1,
  'post_status' => 'inherit',
  'post_mime_type' => 'image',
  'orderby' => 'menu_order',
  'order' => 'ASC'
];
```

## Common Use Cases

- **Portfolio Galleries**: Display project images with captions
- **Document Libraries**: List downloadable files with metadata
- **Product Images**: Show multiple product photos
- **Team Member Photos**: Display staff headshots
- **Event Galleries**: Show event photos chronologically

Looping attachments provides a powerful way to create dynamic, media-rich content in your Etch designs while maintaining full control over presentation and functionality.
