---
title: Using Container Queries
sidebar_position: 2
---

# Using Container Queries

Container queries are a powerful CSS feature that allows you to style elements based on the available space they're placed in, rather than the viewport. This enables more modular and reusable components that adapt to their context, regardless of where they're placed on the page.

:::info
Container queries are fundamentally different from media queries. While media queries respond to the size of the viewport (the device or browser window), container queries respond to available space, enabling truly context-aware responsive design. To learn more about the philosophy behind this approach and why Etch promotes container queries over traditional breakpoints, see the [Philosophy & Workflow](./responsive-development-in-etch.md) article.
:::

## How Container Queries Work

Container queries require two steps:

1. **Define a Container**: Establish a query container on a parent element
2. **Query the Container (instead of the device)**: Apply styles based on the container's size

[In progress ... more to come].