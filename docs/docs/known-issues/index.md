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
- Processing/rendering dynamic data.
- Processing/rendering loops.

We're still working on:
- Processing/rendering conditional logic.
- Processing/rendering JS-based functionality.

At the beginning of July, we completely refactored our block authoring engine because we ran into limitations with the WordPress hooks and filters we were initially using, including an unacceptable front-end performance limitation. We now use an internal block authoring engine which lifts those limitations and protects performance, but the refactor affected the block authoring timeline by a few weeks.

## CSS Styling Inputs

The current iteration of styling inputs is a Minimum Viable Design (MVD) created for the purposes of programming bi-directional sync between inputs and the CSS editor. While the inputs are completely functional, they're most certainly not in their final form. We will be doing a lot of work on this panel over the coming months via a series of iterative releases.

## Content Hub / CPTs / Custom Fields

This area of Etch is a functional Proof of Concept so that users can start to experience the tremendous advantages of a "unified workflow." It's a high priority area and will get progressively better very quickly, but the CPT/Custom Fields functionality should be treated as more of a playground right now than a real part of your workflow (unless your needs are very basic).