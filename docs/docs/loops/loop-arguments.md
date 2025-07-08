---
title: Loop Arguments
description: How to use arguments in Etch loops
---

# Loop Arguments

Creating and saving a loop in Etch makes the loop configuration easily re-usable, but what happens when you need to change part of the configuration? Do you have to save a *new* instance of the loop?

Nope! That would be tragic. And in Etch, we steer clear of tragic situations.

## Example Scenario

Let's keep it super basic.

You want to create a loop that loops through your blog posts. It looks something like this: 

```php
$query_args = [
  'post_type' => 'post',
  'posts_per_page' => 10,
  'orderby' => 'date',
  'order' => 'ASC',
  'post_status' => 'publish',
  'ignore_sticky_posts' => 1
];
```

This loops through the most recent ten published posts, putting them in date order.

Nice! You save the loop in Etch and name it, "Blog Posts."

Now, you go to your Home page and try to create a "Latest Posts" section.

In this section, you want to show three posts, not ten. That's a problem, since your "Blog Posts" loop is configured to show ten.

What should you do?

**OPTION A**: Create a **new** loop configuration and name it "Blog Posts 3" or "Featured Blog Posts?"

**OPTION B**: Be an Etch ninja a use custom args (arguments)?

:::tip
_Always_ choose to be an Etch ninja.
:::

## Creating Custom Args

Custom arguments allow you to pass an argument value through as a placeholder token, just like you do with CSS custom properties.

If you've done anything like this:

```css
:root {
  --primary: red;
}
.foo {
  color: var(--primary);
}
```
Then you're fully trained and licensed to use loop arguments!

Check this out:

```php
$query_args = [
  'post_type' => 'post',
  'posts_per_page' => $count,
  'orderby' => 'date',
  'order' => 'ASC',
  'post_status' => 'publish',
  'ignore_sticky_posts' => 1
];
```

Look carefully at the `posts_per_page` line.

See that `$count` token? That's a custom arg. And all you have to do to create an arg like that is literally write it in.

## Using Custom Args

Now imagine that you're back on the Home page, trying to create that "Latest Posts" section. Can you picture yourself there?

Great, add a Loop element and choose the "Blog Posts" loop you made.

In the HTML editor you'll see something like this:

```html
{#loop blog-posts as item}
```

All you're going to do is change it to this:

```html
{#loop blog-posts($count: 3) as item}
```

Now, whenever you use the loop, you have full control over the number of items that is displayed.

You can extend this same technique to ANY argument in a loop.

Pretty awesome, right?

## More to come!

In the future, you'll be able to set fallback values and do other really awesome things with custom arguments. There will also be a fancy dancy UI to make everything so much easier and ensure that you don't have to touch the code if you don't want to.

Happy Etching!