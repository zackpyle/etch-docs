---
title: FacetWP
sidebar_position: 2
last_update:
  date: 2025-12-22
sidebar_custom_props:
  badge: "New"
---

# FacetWP

This doc covers how to use FacetWP facets with Etch. It provides a generic workflow that applies to all facet types. We'll use Pagination as an example for you to follow along.


## Quick start

1. Create or configure one or more facets in FacetWP.
2. In your Etch loop’s query args, set `facetwp` to `'true'`.
3. Add `facetwp-template` as a CSS class on the direct parent of your loop element.
4. Output your FacetWP facet shortcodes where you want the controls to appear.

That’s it. FacetWP will handle updating the loop via AJAX.

## Prerequisites

- FacetWP plugin installed and facets created as needed.
- An Etch loop configured for the content you want to filter/paginate.

## Setup steps

### 1) Create facets in FacetWP

- Go to FacetWP → Facets → Add New.
- Configure each facet’s type and options as needed, then save.

### 2) Enable FacetWP filtering for your Etch loop

In your loop’s query args, add an arg of `'facetwp' => 'true',` to enable FacetWP:

```php
$query_args = [
  'post_type' => 'post',
  'posts_per_page' => $posts_per_page ?? 6,
  'post_status' => 'publish',
  'orderby' => 'date',
  'order' => 'DESC',
  'facetwp' => 'true',
];
```

### 3) Add the parent class and facet shortcodes

In your template, add `facetwp-template` as a CSS class on the direct parent of your loop element and place your facets shortcodes outside of that wrapper.

```html
<div data-etch-element="container">
  <div class="posts-grid facetwp-template">
    {#loop your-loop-name as item}
      <!-- loop content -->
    {/loop}
  </div>
  [facetwp facet="pagination"]
</div>
```

:::caution Important
All facets on a page need to be placed outside the container element that has the `facetwp-template` class. If you do not place the class on a direct parent element (or close enough), you may end up with facets that are inside the container. This will cause issues like disappearing facets, and a Console error: "Facets should not be inside the 'facetwp-template' container".
:::


## Concrete example: Pagination facet

1) In FacetWP, create a facet for pagination (Facet type: Pager) and save.

2) Configure your Etch loop args (example):

```php
$query_args = [
  'post_type' => 'post',
  'posts_per_page' => 10,
  'order' => 'DESC',
  'facetwp' => 'true',
];
```

3) Place your facets near the loop output:

```html
<section data-etch-element="section">
  <div data-etch-element="container">
    <div class="posts-grid facetwp-template">
      {#loop blog-posts as item}
        <article data-etch-element="flex-div">
          {#if item.featuredImage}
            <img src="{item.featuredImage.url}" alt="{item.featuredImage.alt}" />
          {/if}
          <h2><a href="{item.permalink.relative}">{item.title}</a></h2>
          <p>{item.excerpt}</p>
        </article>
      {/loop}
    </div>
    [facetwp facet="pagination"]
  </div>
</section>
```

When users interact with the facets, FacetWP updates the loop content via AJAX.

## Multiple loops with their own facets

FacetWP’s custom WP_Query pattern supports only one FacetWP-enabled query per page. You can have multiple queries on a page, but only one of them should be FacetWP-enabled. FacetWP will filter only one listing per page and will not function correctly with multiple FacetWP-enabled listings.
If you need multiple independent listings with their own facets, use FacetWP Listing Templates instead, and target facets to each template. Another option is to use [WP Grid Builder with their Custom Query option](./wp-grid-builder), as it allows for multiple independent queries.


## Tips and best practices

- Keep `posts_per_page` (or your query limit) finite; pagination will be derived from this value.
- Group your facet UI near the loop so users can easily discover controls.
- Test with multiple facets active to ensure the URL state and interactions behave as expected.

## Troubleshooting

- Facets not affecting the loop: Verify your loop’s query args include `facetwp => 'true'`.
- No pagination: Confirm the loop has a finite `posts_per_page` and a Pager facet is present.
- The loop content doesn't update: Ensure the `facetwp-template` class is on the correct parent element and that the facet shortcodes are properly placed outside this container.
- Shortcode problems: Re-copy the facet shortcodes from FacetWP and ensure facet names match your configuration.

## References

- FacetWP Custom WP Query documentation: https://facetwp.com/help-center/listing-templates/custom-wp-query/
