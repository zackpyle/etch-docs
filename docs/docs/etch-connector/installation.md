---
title: Installation
sidebar_position: 10
last_update:
  date: 2026-06-22
---

# Installation

The connector is the npm package [`@digital-gravy/etch-connector`](https://www.npmjs.com/package/@digital-gravy/etch-connector). You'll run it from a terminal, so you need [Node.js](https://nodejs.org) (which includes `npx`) or [Bun](https://bun.sh) installed.

## Run it without installing (easiest)

`npx` (comes with Node.js) downloads and runs the connector in one step — nothing to install ahead of time:

```bash
npx @digital-gravy/etch-connector serve
```

If you use Bun instead, the equivalent is:

```bash
bunx @digital-gravy/etch-connector serve
```

`serve` starts the connector and leaves it running. That's all you need to move on to [Usage](./usage.md).

## Install it for the short command

If you'd rather type `etch-connector` instead of the full package name every time, install it once, globally:

```bash
npm install -g @digital-gravy/etch-connector
# or
bun install -g @digital-gravy/etch-connector
```

Then you can just run:

```bash
etch-connector serve
```

:::note Which command to type
The rest of these docs use the short `etch-connector ...` form. If you're using `npx`/`bunx` instead of a global install, put `npx @digital-gravy/etch-connector` (or `bunx @digital-gravy/etch-connector`) in front of each command.
:::

Next: [Usage](./usage.md) walks through starting the connector and connecting your tab.
