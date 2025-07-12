---
title: Dynamic Data Keys
sidebar_position: 50
---

# Dynamic Data Keys 

The following dynamic data keys are available:


| Key                | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `id`               | The unique identifier for the item (post, page, etc).                       |
| `title`            | The title of the item.                                                      |
| `slug`             | The URL-friendly slug for the item.                                         |
| `content`          | The main content/body of the item.                                          |
| `excerpt`          | The summary or excerpt of the item.                                         |
| `permalink.relative` | The relative permalink (URL path) to the item (e.g., `/blog/my-post`).    |
| `permalink.full`   | The full absolute permalink (URL) to the item (e.g., `https://site.com/blog/my-post`). |
| `featuredImage`    | The URL of the featured image for the item.                                 |
| `date`             | The publish date of the item.                                               |
| `status`           | The status of the item (e.g., `publish`, `draft`).                          |
| `type`             | The post type (e.g., `post`, `page`, `product`).                            |
| `thumbnail`        | The URL of the thumbnail image for the item.                                |
| `author`           | The author object for the item.                                             |
| `author.id`        | The unique identifier for the author.                                       |
| `author.name`      | The display name of the author.                                             |
| `template`         | The template object assigned to the item.                                   |
| `template.slug`    | The slug of the template.                                                   |
| `template.id`      | The unique identifier for the template.                                     |
| `template.title`   | The title of the template.                                                  |

## Syntax
- **Templates** use `this.key`.
- **Loops** use `item.key` by default (but you control the key).

## Tips
- Some keys (like `author`, `template`) are objects. Their data can be accessed via their sub-keys (e.g., `author.name`, `template.slug`).
- If your key outputs an array, you need to drill down to subkey (f.e. `item.author.name`) to get to the data you're looking for.
- Not all keys are available for every item type. Availability depends on the context (e.g., posts, pages, custom post types).