---
title: Usage
sidebar_position: 20
last_update:
  date: 2026-06-22
---

# Usage

There are three steps: start the connector, connect your Etch tab to it, then let your AI assistant drive the tab. You do steps 1 and 2 once; after that your assistant handles the rest.

## 1. Start the connector

In a terminal, run:

```bash
etch-connector serve
```

It stays running and prints two local addresses it's listening on:

```
bridge   ws://127.0.0.1:7331
control  http://127.0.0.1:7332
```

You can leave this running in the background. (`127.0.0.1` just means "this computer" — nothing is exposed to the internet.)

## 2. Connect your Etch tab

Open the Etch builder page you want to work on. Open your browser's developer console (right-click → **Inspect** → **Console**), and run:

```js
etch.connectTo('homepage');
```

`homepage` is just a name you pick so you can refer to this tab later — use anything memorable. Your tab is now linked to the connector.

:::note Changed the port?
If you started the connector on a different port, pass it here: `etch.connectTo('homepage', { port: 7355 })`.
:::

## 3. Let your assistant drive it

From here on, your AI assistant runs the commands. It uses `etch-connector eval` to send instructions to your tab — for example:

```bash
etch-connector eval -t homepage "return etch.apiVersion"
```

The `-t homepage` part tells it which tab to act on. If only one tab is connected, that's optional. With several connected, name the one you mean.

You generally won't run these commands by hand — your assistant does. But it's useful to know what's happening: each command is a short script that uses Etch's [Public API](../public-api/index.md), and the result comes straight back to the assistant.

## Checking what's connected

To see which tabs are currently linked to the connector:

```bash
etch-connector tabs
```

That's everything you need to start working. For the full list of commands and options, see the [CLI Reference](./cli-reference.md).
