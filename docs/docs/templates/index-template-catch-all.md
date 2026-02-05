---
title: Index Template (Catch All)
sidebar_position: 30
---

# Index Template (Catch All)

The index template is the most fundamental template in WordPress and serves as the ultimate fallback for all content types. Think of it as the safety net that ensures your website always has a way to display content, regardless of what specific template might be missing.

## When is the Index Template Used?

The index template is used in these scenarios:

- **No specific template exists**: When WordPress can't find a more specific template for the current request.
- **Missing templates**: If you haven't created templates for certain content types (like single posts, archives, etc.).
- **Custom post types**: When custom post types don't have their own templates.
- **Taxonomy pages**: When taxonomy archive pages don't have specific templates.
- **Search results**: When no search template exists.
- **404 pages**: When no 404 template exists.

## The Template Hierarchy

WordPress follows a specific template hierarchy when deciding which template to use. The index template sits at the very bottom of this hierarchy:

1. **Most specific templates first** (like `single-post.php`, `archive.php`, etc.)
2. **Generic templates** (like `single.php`, `archive.php`)
3. **Index template** (the final fallback)

This means WordPress will try to use more specific templates first, and only use the index template if none of the others exist or match the current request.

## Setting Up Your Index Template

The Index template is already created for you. All you have to do is edit it!

Since the index template is a catch-all, it's the template that should contain, at minimum:

- **Header**: Your header component.
- **Content Slot**: An Etch element that pulls the requested data from WordPress.
- **Footer**: Your footer component.

Open Etch, navigate to the Template Manager, and click "edit" on the Index template.

**Follow these steps:**

1. Create a header and save it as a component.
2. Create a footer and save it as a component.
3. Add a Div between the header and footer components and change the HTML tag to `main`.
4. Add a Content Slot element.
5. Hit save.

You now have a template that will render every page of your website with a header and footer and any content pulled from WordPress will be placed inside a semantic `main` tag. That's all you have to do here.

You can test out your template by visiting the home page of your website. You should now see, at minimum, your header and footer. Well done!