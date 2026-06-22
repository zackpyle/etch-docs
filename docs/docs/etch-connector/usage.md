---
title: Usage
sidebar_position: 20
last_update:
  date: 2026-06-22
---

# Usage

You connect Etch to your AI assistant from chat. There's nothing to install — you paste one command into your assistant and click a button in the builder.

## 1. Turn on the AI Connector (once)

Connecting relies on Etch's **AI Connector** feature, which is off by default. In the Etch builder, open **Settings**, go to the **AI** section, and turn on **AI Connector** (it's experimental). This adds the connect button you'll use in step 3. You only need to do this once — it stays on.

## 2. Open the page in the Etch builder

Open the page or template you want to work on **in the Etch builder**, and leave that tab open while you work. The builder itself has to be on screen — editing a page or template in Etch — not just your WordPress dashboard, the front end of your site, or the standard block editor.

## 3. Connect

1. In the Etch builder toolbar, click the **AI sparkles** button (its tooltip reads _"Connect external AI agent"_). The button is waiting for the connector to start — it won't light up yet.

2. In your AI assistant's chat (Claude Code, Cowork, or similar), paste and send:

   ```bash
   npx @digital-gravy/etch-connector serve
   ```

   Your assistant runs this for you — you don't need a separate terminal or a global install.

3. Once the assistant confirms the connection, the sparkles button in the builder lights up. You're linked — describe what you want in chat ("add a hero section to the homepage", "create a card component", …) and the assistant builds it in your open tab.

Click the sparkles button again any time to disconnect.

:::warning New chat? Run the command again
Any time you start a **new chat context**, you must tell the agent to run `npx @digital-gravy/etch-connector serve` again. You can keep using the same builder connection (the sparkles button can stay lit), but the new chat needs that command to know how to proceed.
:::

:::note Keep the builder tab open
The connection lives in your open builder tab. Don't close or navigate away from the Etch builder tab — that ends the connection.
:::

:::warning Multiple sites vs. multiple tabs
You can work on **multiple sites at the same time** — connect a builder tab on each site and the agent can switch between them. Do **not** connect multiple builder tabs on the **same site**. Stick to one connected tab per site.
:::

## Troubleshooting

### The connect button isn't in the toolbar

The button only appears when the **AI Connector** setting is on. In the builder, open **Settings → AI** and turn on **AI Connector**, then look for the AI sparkles button in the toolbar.

### It worked before, but a new chat can't reach Etch

Each chat context is separate — the agent doesn't carry over what the previous chat knew. Paste `npx @digital-gravy/etch-connector serve` in the new chat again. If the sparkles button is still lit in the builder, you don't need to click it again.
