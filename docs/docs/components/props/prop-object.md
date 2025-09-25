---
title: Object Prop
sidebar_position: 1000
---

# Object Prop

The Object Prop passes loop/object/array data from outside a component, into the component.

## Why the Object Prop Exists

When a component is placed inside a loop, the component is blocked from accessing the loop data. This is done on purpose to force users to create properly atomized, independent components. 

Let's say you build a blog post card component with the intention of using it inside a loop that will be configured to query blog posts.

If the blog post card uses dynamic data keys like `{item.title}`, then you've created a component that relies on the loop key being "item."

If the loop is `{#loop posts as post}`, your component will fail to render any data. You'll be forced to change the key from `post` to `item` or change every dynamic data tag in the component to `post.foo` (which will still create the same problem in reverse).

Using keys in a component that rely on specific configurations outside the component is bad component architecture. It harms the component's ability to be exported, shared, or migrated.

The solution is to base the keys you're using in the component on a definitive object. Thus, we have our use case for the Object Prop.

## Using the Object Prop

When your component needs to be nested in a loop in order to function properly, it's a good indication that you need an Object Prop.

In the component editor, select "Object" from the props list.

![Etch Object Prop](../img/etch-object-prop.avif)

There are two things you need to know about the Object Prop:

1. The key for your Object Prop will be the base key for all your dynamic data.
2. The object input is for fallback/preview content only.

