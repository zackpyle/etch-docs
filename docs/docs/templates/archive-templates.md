---
title: Archive Templates
sidebar_position: 50
---

# Archive Templates

Archive templates control how WordPress displays lists of posts that belong to categories, tags, CPTs, authors, and date-based archives.

## When to Use Archive Templates

Archive templates are automatically used by WordPress when:

- A user visits a **post type archive** (e.g. `/services/` for a custom post type)
- Someone clicks on a **category** or **tag** link (to see all the posts in that taxonomy)
- A user navigates to a **date-based archive** (e.g., posts from a specific month or year)
- WordPress needs to display a **collection of posts** rather than a single post

:::warning "Post" Archive Warning
The native "Post" post type in WordPress, which is typically used for blog posts, does not have any native archive functionality. The only way to loop through posts is to create a page called "Blog" or "Articles" (or similar) and then loop through posts using a standard post loop.
:::

## Building Archive Pages Automatically With the Main Query Loop

The best way to build an archive template is with the **Main Query** loop. Unlike regular WP Query loops that require you to manually specify which posts to display, the Main Query loop automatically inherits WordPress's current query context.

This means:
- On a category page, it automatically shows posts from that category
- On a post type archive, it automatically shows posts of that type
- On a date archive, it automatically shows posts from that date range
- Pagination works automatically

[Read More: Main Query Loop](../loops/main-query.md)

## Dynamic Data for Archive Templates

For a complete list of available dynamic data keys, see [Dynamic Data Keys](/dynamic-data/dynamic-data-keys).