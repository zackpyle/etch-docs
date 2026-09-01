---
title: Loops
sidebar_position: 50
sidebar_custom_props:
  badge: "New"
last_update:
  date: 2026-06-11
---

# Loops

`etch.loops` (`EtchLoopsApi`) defines the data sources you iterate over — WordPress queries, term/user queries, or static JSON — and binds them to `etch/loop` blocks. Changes are buffered and persisted with [`etch.saveAsync()`](./index.md#saving-and-the-persistence-model).

## API

```ts
interface EtchLoopsApi {
  getAll(): EtchLoopObj;                                          // all loops, keyed by id
  add(loop: EtchLoop): string;                                    // add; returns generated id
  update(loopId: string, loop: EtchLoop): void;                   // replace a definition
  delete(loopId: string): void;                                   // delete by id
  findLoop(query: string): (EtchLoop & { id: string })[];          // fuzzy-search by name/key
  setForBlock(blockId: string, loop: BlockLoopBinding): void;      // bind a loop to an etch/loop block
}

type EtchLoopObj = Record<string, EtchLoop>;
```

## Loop definitions

```ts
interface EtchLoop {
  key: string;            // stable, human-authored key
  name: string;           // display name in the loop manager
  global: boolean;        // global (reusable) vs local to the document
  config: EtchLoopConfig; // data source and arguments
  [key: string]: unknown; // extensible
}

type EtchLoopConfig =
  | { type: "wp-query";   args: WpQueryArgs }
  | { type: "wp-terms";   args: WpTermsArgs }
  | { type: "wp-users";   args: WpUsersArgs }
  | { type: "main-query"; args: WpQueryArgs }
  | { type: "json";       data: unknown[] };
```

```ts
// A reusable query for the 6 most recent posts
const loopId = etch.loops.add({
  key: "recent-posts",
  name: "Recent posts",
  global: true,
  config: {
    type: "wp-query",
    args: { post_type: "post", posts_per_page: 6, orderby: "date", order: "DESC" },
  },
});

// Static JSON loop
etch.loops.add({
  key: "tabs",
  name: "Tabs",
  global: false,
  config: { type: "json", data: [{ label: "One" }, { label: "Two" }] },
});

await etch.saveAsync();
```

## Binding a loop to a block

```ts
interface BlockLoopBinding {
  loopId?: string;                       // loop id to bind
  target?: string;                       // what to iterate over (dynamic path)
  itemId?: string;                       // variable name for the current item
  indexId?: string;                      // variable name for the current index
  loopParams?: Record<string, unknown>;  // parameter values
}
```

```ts
const [blockId] = etch.blocks.find({ type: "etch/loop" });
etch.loops.setForBlock(blockId, {
  loopId,
  itemId: "post",
  indexId: "i",
  loopParams: { count: 3 },
});
```

## WordPress query arguments

`WpQueryArgs` mirrors the WordPress `WP_Query` arguments. It is open-ended (`[key: string]: unknown`), so any argument the platform supports is accepted; the common ones are typed for autocomplete:

```ts
interface WpQueryArgs {
  post_type?: string | string[];
  posts_per_page?: NumericParam;        // -1 for all
  offset?: NumericParam;
  paged?: NumericParam;
  page?: NumericParam;                  // alias of paged
  orderby?: "date" | "title" | "menu_order" | "rand" | "ID" | "author"
          | "name" | "modified" | "parent" | "comment_count" | (string & {});
  order?: "ASC" | "DESC" | (string & {});
  post_status?: "publish" | "pending" | "draft" | "auto-draft" | "future"
              | "private" | "inherit" | "trash" | (string & {});
  ignore_sticky_posts?: BooleanParam;
  author?: number | string;
  author_name?: string;
  category?: number | string;
  category_name?: string;
  tag?: string;
  tax_query?: TaxQueryItem[];
  meta_query?: MetaQueryItem[];
  s?: string;                           // search keyword
  [key: string]: unknown;
}
```

### Taxonomy and meta queries

```ts
interface TaxQueryItem {
  taxonomy: string;                     // e.g. "category", "post_tag"
  field: "term_id" | "slug" | "name";
  terms: string | number | Array<string | number>;
  operator?: "IN" | "NOT IN" | "AND";
  include_children?: boolean;
  [key: string]: unknown;
}

interface MetaQueryItem {
  key: string;
  value: string | number | Array<string | number>;
  compare?: "=" | "!=" | ">" | ">=" | "<" | "<=" | "LIKE" | "NOT LIKE"
          | "IN" | "NOT IN" | "BETWEEN" | "NOT BETWEEN" | "EXISTS" | "NOT EXISTS";
  type?: "NUMERIC" | "BINARY" | "CHAR" | "DATE" | "DATETIME"
       | "DECIMAL" | "SIGNED" | "TIME" | "UNSIGNED";
  [key: string]: unknown;
}
```

```ts
etch.loops.add({
  key: "featured-news",
  name: "Featured news",
  global: false,
  config: {
    type: "wp-query",
    args: {
      post_type: "post",
      tax_query: [{ taxonomy: "category", field: "slug", terms: ["news"] }],
      meta_query: [{ key: "featured", value: "1", compare: "=" }],
    },
  },
});
```

### Term and user queries

```ts
interface WpTermsArgs {
  taxonomy?: string;
  orderby?: "name" | "slug" | "term_group" | "term_id" | "description" | "count" | (string & {});
  order?: "ASC" | "DESC" | (string & {});
  [key: string]: unknown;
}

interface WpUsersArgs {
  role?: string | string[];
  include?: number[] | string;
  exclude?: number[] | string;
  search?: string;
  search_columns?: string[] | string;
  orderby?: "ID" | "display_name" | "name" | "user_login" | "user_email"
          | "user_registered" | "post_count" | "meta_value" | "meta_value_num" | (string & {});
  order?: "ASC" | "DESC" | (string & {});
  number?: NumericParam;
  offset?: NumericParam;
  paged?: NumericParam;
  [key: string]: unknown;
}
```

## Parameterized arguments

Numeric and boolean arguments accept loop-parameter expressions in addition to literal values, so a single loop definition can be reused with different `loopParams`:

```ts
type LoopParamRef = `$${string}`;                          // e.g. "$count"
type NumericParam = number | LoopParamRef | `$${string} ?? ${number}`;
type BooleanParam = boolean | 0 | 1 | LoopParamRef | `$${string} ?? ${boolean}`;
```

```ts
// posts_per_page falls back to 10 when the `count` param is not supplied
{ type: "wp-query", args: { post_type: "post", posts_per_page: "$count ?? 10" } }
```
