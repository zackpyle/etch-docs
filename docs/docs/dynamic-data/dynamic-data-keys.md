---
title: Dynamic Data Keys
sidebar_position: 50
---

# Dynamic Data Keys 

This page will serve as the master doc page for all dynamic data keys. Feel free to bookmark it.

## Syntax
- **Templates** use `this.key`.
- **Loops** use `item.key` by default (but you control the key).
- Keys outside of loops and templates use their own proprietary key.

## Available Keys

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

## User Keys

| Key                | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `user`             | The user object for the current user.                                       |
| `user.id`          | The unique identifier for the user.                                         |
| `user.login`       | The username/login of the user.                                             |
| `user.email`       | The email address of the user.                                              |
| `user.displayName` | The display name of the user.                                               |
| `user.firstName`   | The first name of the user.                                                 |
| `user.lastName`    | The last name of the user.                                                  |
| `user.nickname`    | The nickname of the user.                                                   |
| `user.fullName`    | The full name of the user (first + last).                                  |
| `user.description` | The biographical description of the user.                                   |
| `user.userUrl`     | The website URL of the user.                                                |
| `user.avatar`      | The URL of the user's avatar image.                                        |
| `user.registered`  | The registration date of the user.                                          |
| `user.roles`       | The roles assigned to the user.                                             |
| `user.roleNames`   | The human-readable role names for the user.                               |
| `user.capabilities`| The capabilities/permissions of the user.                                  |
| `user.loggedIn`    | Whether the user is currently logged in (boolean).                        |

## Site Keys

| Key                | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `name`             | The site name/title.                                                        |
| `description`      | The site tagline/description.                                               |
| `home_url`         | The home URL of the site.                                                   |
| `url`              | The site URL.                                                               |
| `version`          | The WordPress version.                                                      |
| `language`         | The site language code.                                                     |
| `isMultisite`      | Whether the site is part of a multisite network (boolean).                |

## URL Keys

| Key                | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `full`             | The current full URL of the page.                                           |
| `relative`         | The relative path portion of the current URL.                                        |
| `parameter`            | The URL parameters/query string of the current page.                       |

`parameter` allows you to reference the value of any parameter key in the url string, which can be very helpful for personalizing page content by injecting content or creating conditions.

## Tips
- Some keys (like `author`, `template`) are objects. Their data can be accessed via their sub-keys (e.g., `author.name`, `template.slug`).
- If your key outputs an array, you need to drill down to subkey (f.e. `item.author.name`) to get to the data you're looking for.
- Not all keys are available for every item type. Availability depends on the context (e.g., posts, pages, custom post types).