---
title: Installation
sidebar_position: 10
last_update:
  date: 2026-06-22
---

# Installation

The connector is the npm package [`@digital-gravy/etch-connector`](https://www.npmjs.com/package/@digital-gravy/etch-connector). You'll run it from a terminal, so you need [Node.js](https://nodejs.org) (which includes `npx`) or [Bun](https://bun.sh) installed.

You have two options. Either way, you actually start the connector in [Usage](./usage.md) — this page is just about getting the command ready.

## Option 1: No install (easiest)

With `npx` (included with Node.js) there's nothing to install — you run the connector on demand, and it downloads automatically the first time. Throughout these docs, wherever you see a command starting with `etch-connector`, you'd type:

```bash
npx @digital-gravy/etch-connector <command>
```

If you use Bun, swap `npx` for `bunx`. To confirm it's working, check the version:

```bash
npx @digital-gravy/etch-connector --version
```

## Option 2: Install for the short command

If you'd rather type a short `etch-connector` instead of the full package name every time, install it once, globally:

```bash
npm install -g @digital-gravy/etch-connector
# or
bun install -g @digital-gravy/etch-connector
```

Then confirm it's available:

```bash
etch-connector --version
```

:::note Which command to type
The rest of these docs use the short `etch-connector ...` form. If you went with Option 1, put `npx @digital-gravy/etch-connector` (or `bunx @digital-gravy/etch-connector`) in front of each command instead.
:::

Next: [Usage](./usage.md) walks through starting the connector and connecting your tab.
