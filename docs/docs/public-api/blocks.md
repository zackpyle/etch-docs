---
title: Blocks
sidebar_position: 10
sidebar_custom_props:
  badge: "New"
last_update:
  date: 2026-06-11
---

# Blocks

`etch.blocks` (`EtchBlocksApi`) is the core of the scripting API: it selects, reads, creates, mutates, and deletes the blocks that make up the document. Mutations are buffered and persisted with [`etch.saveAsync()`](./index.md#saving-and-the-persistence-model).

## Reading and selection

```ts
interface EtchBlocksApi {
  select(blockId: string): void;            // select a block in the canvas
  deselect(): void;                         // clear the current selection
  getSelectedId(): string | null;           // id of the selected block, or null

  getJson(blockId: string): PublicBlockJson; // a block + its subtree, with id/parentId
  getTree(): PublicBlockJson[];              // the whole document as top-level blocks
  find(predicate: FindBlocksPredicate): string[]; // ids of matching blocks
}
```

### find()

```ts
interface FindBlocksPredicate {
  type?: string;      // exact type match, e.g. "etch/text"
  class?: string;     // has this CSS class
  attribute?: string; // has this HTML attribute set
}
```

```ts
const textIds = etch.blocks.find({ type: "etch/text" });
const buttons = etch.blocks.find({ class: "btn" });
const linked = etch.blocks.find({ attribute: "href" });
```

### Reading typed JSON

`getJson()` returns a [`PublicBlockJson`](./types-reference.md#block-json) — the discriminated union of all block shapes, plus `id` and `parentId`. Narrow on `type` to access type-specific fields:

```ts
const block = etch.blocks.getJson(id);

if (block.type === "etch/text") {
  console.log(block.text);            // narrowed to the text-block shape
} else if (block.type === "etch/element") {
  console.log(block.tag, block.attributes, block.styles); // styles is read-only
}
```

## Mutations

```ts
interface EtchBlocksApi {
  create(json: EtchBlockJson, parentId?: string, index?: number): string; // returns new id
  delete(blockId: string): void;                                          // remove block + subtree
  duplicate(blockId: string): string;                                     // deep-copy; returns new id
  move(blockId: string, newParentId: string | null, index?: number): void;
  replace(blockId: string, json: EtchBlockJson): string;                  // returns new id
  update(blockId: string, patch: BlockPatch): void;                       // patch in place
}
```

`create()`, `duplicate()`, and `replace()` all return the id of the resulting block. Pass `null` as `newParentId` to `move()` to re-parent to the document root.

### create()

Authoring is type-checked against the [block JSON union](./types-reference.md#block-json). The `styles` array is **read-only** — it appears on reads but is rejected on authoring.

```ts
const id = etch.blocks.create({
  type: "etch/element",
  version: 1,
  context: {},
  children: [],
  tag: "div",
  attributes: { id: "main" },
});

// ✗ Type error — an etch/text block has no `tag`:
etch.blocks.create({ type: "etch/text", version: 1, context: {}, children: [], tag: "div" });
```

### update()

`update()` patches only the editable surface of a block:

```ts
interface BlockPatch {
  name?: string;                                  // structure-panel label
  hidden?: boolean;                               // hide or show on canvas
  attributes?: Record<string, string | undefined>; // merge HTML attrs (undefined removes a key)
  text?: string;                                  // replace text (text blocks only)
}
```

```ts
etch.blocks.update(id, { name: "Hero heading", hidden: false });
```

## Text, naming, attributes, and classes

```ts
interface EtchBlocksApi {
  // text & naming
  setText(blockId: string, text: string): void;   // text blocks only
  rename(blockId: string, name: string): void;     // structure-panel label

  // HTML attributes
  getAttribute(blockId: string, key: string): string | undefined;
  setAttribute(blockId: string, key: string, value?: string): void; // undefined clears
  removeAttribute(blockId: string, key: string): void;

  // CSS classes
  addClass(blockId: string, className: string): void;
  removeClass(blockId: string, className: string): void;
  hasClass(blockId: string, className: string): boolean;
}
```

```ts
const [id] = etch.blocks.find({ type: "etch/text" });
etch.blocks.setText(id, "Hello world");
etch.blocks.addClass(id, "lead");
etch.blocks.setAttribute(id, "data-track", "hero");
await etch.saveAsync();
```

### Special element attributes

Some block types read behavior from specific attribute keys:

```ts
// etch/dynamic-image — bind to a media source
etch.blocks.setAttribute(imgBlockId, "mediaId", "{post.featured_image_id}");
etch.blocks.setAttribute(imgBlockId, "useSrcSet", "true");

// etch/svg — load and recolor an SVG
etch.blocks.setAttribute(svgBlockId, "src", "/icons/logo.svg");
etch.blocks.setAttribute(svgBlockId, "stripColors", "true");
```

## Component edit mode

To edit the internals of a `etch/component` block, enter component edit mode. The component's block tree then becomes accessible through the same `blocks` methods.

```ts
interface EtchBlocksApi {
  enterComponentEditMode(blockId: string): void;
  exitComponentEditMode(options?: { revert?: boolean }): void; // revert: discard changes
  isInComponentEditMode(): boolean;
  saveComponentEditModeAsync(): Promise<void>; // persist the component definition
}
```

```ts
const [compId] = etch.blocks.find({ type: "etch/component" });

etch.blocks.enterComponentEditMode(compId);

// Inspect or mutate the component's children
const tree = etch.blocks.getTree();
etch.blocks.setText(tree[0].children[0].id, "Updated label");

await etch.blocks.saveComponentEditModeAsync(); // persist the component definition
await etch.saveAsync();                          // persist the page
etch.blocks.exitComponentEditMode();
```

Discard changes instead of saving:

```ts
etch.blocks.exitComponentEditMode({ revert: true });
```

See the [Types Reference](./types-reference.md#block-json) for the full block JSON union and every block-specific field.
