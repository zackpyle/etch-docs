---
title: Auto Block Authoring
sidebar_position: 10
---

# Auto Block Authoring

:::warning
**Important**: Auto block authoring is a work-in-progress. Static elements will auto-author, but we're still working on block authoring for components and loops.
:::


Etch authors everything you build to core Gutenberg blocks and maintains a bi-directional sync between Etch and Gutenberg.

We do this for the following reasons:

1. **Data Liberation**: The content you add to pages and templates is stored in WordPress, not Etch.
2. **Compatibility**: Core blocks work with all plugins without conflicts.
3. **Client Editing**: Gutenberg's simple interface is perfect for client editing.
4. **Pattern Library Compatibility**: Your patterns can be saved to the WordPress pattern library.
5. **Synced Library Compatibility**: Your components can be saved to the WordPress synced pattern library.
6. **Template Library Compatibility**: Your templates are stored in the WordPress templates area.
7. **Pattern Library Compatibility**: Your patterns can be saved to the WordPress pattern library.
8. **Plugin Compatibility**: Unsupported blocks from other plugins will passthrough Etch to the front-end automatically.

When it comes to staying "close to core," this is as close as you can get because it's *literally* core.

## Bi-Directional Sync

What you build in Etch will automatically show up in the block editor as core blocks, including structure panel names.

Editing content or layout in the block editor will reflect back into Etch as well as the front-end.

Editing content or layout in Etch will reflect back into the block editor.

There is never any manual syncing or setup required for any of this to happen – it's built into Etch's architecture.

## Where should things be built?

Etch is the development environment. The block editor is only for content editing. Do not build things in the block editor: 

- There's no point – Etch is where your power and control are.
- The block editor is NOT a development environment

The block editor is essentially a client-editing interface. In the future you will be able to control exactly which things the client can edit and will be able to lock certain aspects of patterns and components if you don't want them to be editable.

## Etch eliminates the need for custom block development

With Etch, there's no longer any need for custom block development. No VS Code, no React, no 3rd party dependencies like ACF, Block Lab, etc.

Simply open up Etch, build what you want to build, and save it as a pattern or component and you've essentially built a custom block, but insanely fast, with no dependencies.

This is a dream workflow for agencies, freelancers, and developers.