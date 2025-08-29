---
title: Loop Prop
sidebar_position: 50
---

# Loop Prop 

The Loop Prop creates an internal loop reference. It's useful for when you're including a loop inside your component and need to be able to choose the Loop Source when adding your component to a page.

Since components might be used on multiple sites, or with different loops at different times, you might want to build a loopable structure inside your component without creating a fixed reference to any specific loop. The Loop Prop allows you to select the loop that should run inside the component when you're using the component.

Here's the difference between a typical loop and a prop-based loop:

### Typical Loop

```html
{#loop some-loop as item}{/loop}
```

### Prop-Based Loop

```html
{#loop props.your-loop-prop as item}{/loop}
```



:::info
Props are typically referenced with `{}` brackets. However, when you're already working within bracketed data, you should not use another set of brackets.

**Incorrect:** `{#loop {props.your-loop-prop} as item}{/loop}`

**Correct:** `{#loop props.your-loop-prop as item}{/loop}`
:::