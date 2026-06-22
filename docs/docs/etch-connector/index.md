---
title: Introduction
sidebar_position: 0
sidebar_custom_props:
  badge: "New"
last_update:
  date: 2026-06-22
---

# Etch Connector

**Etch Connector** lets an AI coding assistant — like Claude Code or Cowork — work directly in a live Etch builder tab. Once it's connected, you can ask the assistant to build pages, add styles, create components, and more, and it makes those changes in the tab you have open.

Under the hood it does this by running small scripts against [Etch's Public API](../public-api/index.md) (the same `etch.*` commands you can use yourself from the browser console). You don't have to write those scripts — the assistant does. The connector is just the link that lets it reach your open tab.

It's published as a free, open-source npm package, [`@digital-gravy/etch-connector`](https://www.npmjs.com/package/@digital-gravy/etch-connector), with source at [Digital-Gravy/etch-connector](https://github.com/Digital-Gravy/etch-connector).

## How it works

There are three pieces:

1. **Your Etch tab** — a normal builder page open in your browser.
2. **The connector** — a small program you run on your own computer.
3. **Your AI assistant** — a tool that can run commands, like Claude Code.

You start the connector, then tell your Etch tab to connect to it. From then on, your AI assistant sends its changes to the connector, and the connector applies them in your tab.

```
Your AI assistant (Claude Code, Cowork, …)
      │  "add a hero section to the homepage"
      ▼
  Etch Connector  (running on your computer)
      │  ▲
      ▼  │
  Your open Etch builder tab  ──►  changes appear live
```

Everything runs locally on your own machine — nothing is sent to an outside server. See [Security](./security.md) for more.

## Get started

- [Installation](./installation.md) — install the connector (or run it without installing).
- [Usage](./usage.md) — start it, connect your tab, and try your first command.
- [CLI Reference](./cli-reference.md) — every command and option, for when you want the details.
- [AI Agent Guide](./ai-agent-guide.md) — a few notes for the AI assistant driving Etch.
- [Security](./security.md) — what runs where, and how to stay safe.
