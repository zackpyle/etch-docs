---
title: Passthrough Blocks
sidebar_position: 90
---

# Passthrough Blocks

Etch is architected to work with any and all third party blocks, from checkout systems, to forms, to facets.

This is handled through the concept of "passthrough blocks."

When Etch detects a block that's not a core Gutenberg block, it essentially "passes it through" to the front-end without attempting to parse it. And in Etch, you'll simply see a placeholder element.

This allows you to use these blocks without breaking their functionality.

In the future, plugin developers can integrate directly with Etch to map the functionality into custom elements in Etch. This way, you can insert the elements directly in Etch without having to worry about the block editor.
