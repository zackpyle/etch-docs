---
title: Requirements
sidebar_position: 2
---

# Requirements

For the best Etch experience, make sure your stack aligns with the following:

## Primary Requirements

- WordPress 5.9
- PHP 8.1
- WP memory limit 64MB (128MB Recommended)

## Browser Version Compatibility

Etch's interface (completely separate from the sites you build with Etch) uses the latest CSS techniques (color-mix, relative color syntax, etc.), especially when it comes to interface colors. These techniques are supported in all major browsers, but only if you've kept your browser up to date (which any good developer should).

For the best experience, use the latest available version of your browser.

## Browser Type Compatibility

Etch should work in all browsers, but may currently have bugs and issues in Firefox specifically since Firefox is particularly problematic and we have not dedicated much debug time to Firefox. For the best experience, use a Chromium or WebKit browser.

## Important Safari Note

Safari currently has known and tracked bugs related to proper rendering of the OKLCH color space as well as relative color syntax. The Etch interface uses both of these to render certain interface colors.

Due to these issues, Safari users may experience off-brand color shifts and interface color inconsistencies that users in Chromium and Firefox browsers will not experience.
