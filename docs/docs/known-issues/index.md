---
title: Known Issues
sidebar_position: 10
---

# Known Issues & Areas of Improvement

Great software is never "done," and that's certainly true for software as young as Etch. We are committed to continuous improvement and transparency about the current limitations, bugs, and areas where we know things could be better. 

This page documents the most significant known issues and areas we're actively planning to improve. If you encounter a problem not listed here, please let us know so we can investigate and address it in future updates.

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