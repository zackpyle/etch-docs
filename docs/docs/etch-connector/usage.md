---
title: Usage
sidebar_position: 20
last_update:
  date: 2026-06-22
---

# Usage

There are three steps: start the connector, connect your Etch tab to it, then let your AI assistant drive the tab. You do steps 1 and 2 once per session; after that your assistant handles the rest.

:::info Enable the AI Connector first
Connecting relies on Etch's **AI Connector** feature, which is off by default. In the Etch builder, open **Settings**, go to the **AI** section, and turn on **AI Connector** (it's experimental). This adds the connect button used below. You only need to do this once.
:::

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

:::caution Open the Etch builder, not just your site
You need the **Etch builder actually open** — editing a page or template in Etch — in the tab you're connecting. It's not enough to have Etch installed, or to be in the WordPress dashboard, the front end of your site, or the standard block editor. The connector talks to a live builder, so the builder has to be on screen.
:::

With the AI Connector enabled (see the note above), open the page or template you want to work on **in the Etch builder** and look in the builder toolbar for the **AI sparkles** button (its tooltip reads _"Connect external AI agent"_). Click it.

The button lights up once it's linked to the running connector. Click it again any time to disconnect. Your tab connects under your **site's name**, so that's how you'll refer to it later.

:::note You don't need to keep dev tools open
If you connect from the console, you can close the browser inspector afterward — the connection lives in the page and keeps running (it even auto-reconnects if it briefly drops). Just keep the **Etch builder tab itself open**; closing or navigating away from it ends the connection.
:::

<details>
<summary>Prefer the console? Connect manually instead</summary>

You can also connect from the browser's developer console, which lets you pick your own tab name:

```js
etch.connectAs('homepage');
```

`homepage` is any name you like. If you started the connector on a different port, pass it: `etch.connectAs('homepage', { port: 7355 })`. (If the console reports `etch is not defined`, see [Troubleshooting](#troubleshooting).)

</details>

## 3. Let your assistant drive it

From here on, your AI assistant runs the commands. It uses `etch-connector eval` to send instructions to your tab — for example:

```bash
etch-connector eval -t "My Site" "return etch.apiVersion"
```

The `-t` part tells it which tab to act on, using the name the tab connected under (your site name, or whatever you chose in the console). If only one tab is connected, `-t` is optional. Run `etch-connector tabs` to see the exact names.

You generally won't run these commands by hand — your assistant does. But it's useful to know what's happening: each command is a short script that uses Etch's [Public API](../public-api/index.md), and the result comes straight back to the assistant.

## Checking what's connected

To see which tabs are currently linked to the connector:

```bash
etch-connector tabs
```

That's everything you need to start working. For the full list of commands and options, see the [CLI Reference](./cli-reference.md).

## Troubleshooting

### The connect button isn't in the toolbar

The button only appears when the **AI Connector** setting is on. In the builder, open **Settings → AI** and turn on **AI Connector**, then look for the AI sparkles button in the toolbar.

### `etch is not defined`

This only applies to the manual console method in [step 2](#2-connect-your-etch-tab). The `etch` object is added by the builder, so the console only knows about it on a fully-loaded Etch builder page. If you get `Uncaught ReferenceError: etch is not defined`, check each of these:

- **The AI Connector is enabled.** Turn on **Settings → AI → AI Connector** in the builder.
- **You're on the Etch builder.** Open a page or template _in Etch_ and wait for the builder to finish loading. The `etch` API isn't available on the front end, the WordPress dashboard, or the standard block editor.
- **The console is on the right page.** Browser dev tools have a context dropdown at the top of the Console (it usually says `top`). Make sure it's set to the top page, not the canvas preview frame inside the builder.
- **Confirm it's there.** Run `typeof window.etch` — you want `"object"`. If it's still `"undefined"`, your Etch version may be older than the Public API (it's a new, experimental feature). Update Etch to the latest version and reload.

Once `typeof window.etch` returns `"object"`, `etch.connectAs('your-tab-name')` will work.
