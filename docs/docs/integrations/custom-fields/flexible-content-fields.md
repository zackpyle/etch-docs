---
title: ACF Flexible Content
sidebar_position: 99
---

# ACF Flexible Content

ACF Flexible Content fields allow you to create complex, dynamic layouts with multiple content types that editors can mix and match. Etch makes it easy to loop through flexible content and render different layouts based on the content type.

:::info
As an alternative in the future, you will have the option to save your Etch designs to the native block editor pattern library. You will also be able to restrict which patterns are displayed based on various criteria such as the current post type. This approach can offer a more visually engaging experience for clients, as they'll be able to see the design of the pattern they're editing directly in the block editor. Furthermore, you'll be able to control which aspects of the pattern are editable, providing an additional layer of design protection. However, ACF Flexible Content can also be used for this purpose, depending on your specific needs.
:::

## How ACF Flexible Content Loops Work

ACF flexible content loops use the `this.acf.your_flexible_field` syntax as the data source. Each row in the flexible content has an `acf_fc_layout` property that tells you which layout type it is.

**Important:** You must use conditional [`#if` statements](/conditional-logic/basic-conditions) inside the loop to check the `acf_fc_layout` property and define different HTML for each layout type. This is how Etch determines which content to render for each section.

The basic structure is:
```html
{#loop this.acf.flexible_field_name as item}
  {#if item.acf_fc_layout == 'layout_name_one'}
    <!-- HTML for first layout type -->
  {/if}
  {#if item.acf_fc_layout == 'layout_name_two'}
    <!-- HTML for second layout type -->
  {/if}
{/loop}
```

## Example: Page Content Sections

Suppose you have an ACF flexible content field called "page_sections" with three layout types:
- `hero_banner` with sub-fields: `title`, `subtitle`, `background_image`, `cta_text`, `cta_link`
- `text_block` with sub-fields: `heading`, `content`
- `image_gallery` with sub-fields: `gallery_title`, `images`

Here's how you'd loop through and display the different sections:

```html
<div data-etch-element="flex-div" class="page-sections">
  {#loop this.acf.page_sections as section}
    
    {#if section.acf_fc_layout == 'hero_banner'}
      <section data-etch-element="flex-div" class="section section--hero">
        <div class="hero" style="background-image: url({section.background_image.url});">
          <div class="hero__content">
            <h1 class="hero__title">{section.title}</h1>
            <p class="hero__subtitle">{section.subtitle}</p>
            <a href="{section.cta_link.url}" class="hero__cta">
              {section.cta_text}
            </a>
          </div>
        </div>
      </section>
    {/if}
    
    {#if section.acf_fc_layout == 'text_block'}
      <section data-etch-element="flex-div" class="section section--text">
        <div class="text-block">
          <h2 class="text-block__heading">{section.heading}</h2>
          <div class="text-block__content">{section.content}</div>
        </div>
      </section>
    {/if}
    
    {#if section.acf_fc_layout == 'image_gallery'}
      <section data-etch-element="flex-div" class="section section--gallery">
        <div class="gallery">
          <h2 class="gallery__title">{section.gallery_title}</h2>
          <ul class="gallery__grid">
            {#loop section.images as image}
              <li class="gallery__item">
                <img src="{image.sizes.medium}" alt="{image.alt}" />
              </li>
            {/loop}
          </ul>
        </div>
      </section>
    {/if}
    
  {/loop}
</div>
```

**What's happening here:**
1. The loop targets `this.acf.page_sections` (your ACF flexible content field)
2. Each row is aliased as `section` for easy reference
3. We check `section.acf_fc_layout` to determine which layout type each row is
4. Different HTML structures are rendered based on the layout type
5. Sub-fields are accessed using `section.field_name`
6. Notice the [nested loop](/loops/nested-loops) in the image gallery for multiple images