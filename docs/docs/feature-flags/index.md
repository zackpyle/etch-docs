---
title: Feature Flags
description: Learn how to use feature flags in Etch to control feature availability and enable gradual rollouts
---

# Feature Flags

Feature flags allow us to deploy in-progress or in-testing features without fully committing them to the codebase. If you want to turn on a testable feature, you can enable the flag. If we ship an update with a flagged feature on, you can turn it off.

## How Feature Flags Work

Feature flags are boolean values that control whether a feature is enabled or disabled. If a feature is causing issues, you can turn its flag off. This allows you to enjoy other aspects of the release version without the issues caused by the problematic feature. We also might ship a feature with the flag turned off by default, allowing you to opt-in to testing it.


### Basic Usage

To use Feature Flags, you need to create a `json` file called `flags.json` in `/wp-content/plugins/etch/config` using the following format:

```json
{
    "FLAG_NAME": "on",
    "FLAG_NAME_2": "off"
}
```


:::warning
We cannot adjust flag status on your particular server. If you use feature flags to turn a feature on or off, you have to remember to adjust its status in the future. For example, if you disable a feature that's causing issues, you have to remember to enable it once we release a fix.
::: 

You can choose from the available flags below. Their default state is listed.

## Available Feature Flags

| Flag Name | Description | Default |
|-----------|-------------|---------|
| `ENABLE_DEBUG_LOG` | Enables debug logging | `off` |
| `ENABLE_PREPROCESSOR` | Enables block authoring preprocessor | `on` |
| `ENABLE_SERVER_TIMING` | Enables server timing headers for performance monitoring | `off` |
| `GUTENBERG_PROCESSOR` | Enables Gutenberg block processing | `on` |
| `GUTENBERG_COMPONENT_BLOCK` | Enables Gutenberg component blocks | `on` |
| `INLINE_ETCH_ASSETS` | Inlines Etch assets for faster loading | `on` |
| `REMOVE_WP_DEFAULT_CSS` | Removes WordPress default CSS | `off` |
| `ENABLE_STRUCTURE_PANEL_V2` | Enables version 2 of the structure panel | `on` |
| `ENABLE_INSTANT_STRUCTURE_SORT` | Enables instant sorting in structure panel | `off` |