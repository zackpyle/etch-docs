---
title: Known Issues
sidebar_position: 10
---

# Known Issues & Areas of Improvement

Great software is never "done," and that's certainly true for software as young as Etch. We are committed to continuous improvement and transparency about the current limitations, bugs, and areas where we know things could be better. 

This page documents the most significant known issues and areas we're actively planning to improve. If you encounter a problem not listed here, please let us know so we can investigate and address it in future updates.

## Auto Block Authoring / Gutenberg Rendering

Etch currently handles:
- Auto block authoring of static content.
- Auto block authoring of components as synced patterns.
- Auto block authoring of templates as FSE templates.

We're still working on:
- Processing/rendering dynamic data.
- Processing/rendering conditional logic.
- Processing/rendering loops.
- Processing/rendering JS-based functionality.

At the beginning of July, we completely refactored our block authoring engine because we ran into limitations with the WordPress hooks and filters we were initially using, including an unacceptable front-end performance limitation. We now use an internal block authoring engine which lifts those limitations and protects performance, but the refactor affected the block authoring timeline by a few weeks.

## Drag and Drop

The initial implementation of drag and drop in Etch used a third party library to expedite that functionality. While this library served its purpose in the early days, it's not the refined and insanely accurate drag and drop experience that we want users to have. 

This drag and drop library also contributes to a recursion-type performance issue in the builder on complex pages, which is not an acceptable outcome.

We have plans to architect our own drag and drop functionality in the near future, which will alleviate any issues you're currently experiencing with drag and drop.

## In-Builder Loop Performance for Large Loops

Large loops (returning dozens and dozens, if not hundreds or thousands of results) tend to be a bad UX pattern in general, but we still want you to be able to create large loops if your project calls for it. 

Currently, to preserve in-builder performance with large loops, we cap the loop preview to a specific number of items in the loop. The front-end will still render any number you request, but the builder will only preview a limited number of items to preserve snappiness and developer experience.

In the future you'll be able to control this preview number and we might be able to find other ways around the performance impact that tends to come with very large loop returns.

## CSS Styling Inputs

The current iteration of styling inputs is a Minimum Viable Design (MVD) created for the purposes of programming bi-directional sync between inputs and the CSS editor. While the inputs are completely functional, they're most certainly not in their final form. We will be doing a lot of work on this panel over the coming months via a series of iterative releases.

## Content Hub / CPTs / Custom Fields

This area of Etch is a functional Proof of Concept so that users can start to experience the tremendous advantages of a "unified workflow." It's a high priority area and will get progressively better very quickly, but the CPT/Custom Fields functionality should be treated as more of a playground right now than a real part of your workflow (unless your needs are very basic).