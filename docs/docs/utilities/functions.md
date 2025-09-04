---
title: Functions
sidebar_position: 10
---

# Functions

This page documents utility functions available in Etch for common development tasks.

## rem()

The `rem()` function converts pixel values to rem units on the front-end while maintaining proper pixel reference in the editor. This is a pure DX feature that makes your life as a developer easier while the rem unit output makes your site more accessible.

**Example Usage:** `rem(800px)`

**Example Output:** `50rem`

This function is commonly used in media queries and container queries, but it works anywhere in the interface.

:::note
This function uses a base font size of 16px (100%) for conversion. In the future, you'll be able to control the divisor for this function if you decided to use a custom root font size, but the point of this function is to make `rem` usage easier so you feel more comfortable with leaving your root font-size at 100%.
:::

