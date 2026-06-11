---
title: Custom Fields
sidebar_position: 70
sidebar_custom_props:
  badge: "New"
last_update:
  date: 2026-06-11
---

# Custom Fields

`etch.fields` (`EtchFieldsApi`) manages custom field **groups**, the **fields** within them, and per-post field **values**.

:::info Persists immediately
Every method here is `*Async` and **persists immediately** — you do **not** need `etch.saveAsync()`.
:::

## Group management

```ts
interface EtchFieldsApi {
  listGroupsAsync(): Promise<Record<string, CustomFieldGroup>>;            // all groups, keyed by id
  getGroupAsync(groupId: string): Promise<CustomFieldGroup>;
  createGroupAsync(definition: CustomFieldGroup): Promise<string>;         // returns new id
  updateGroupAsync(groupId: string, definition: CustomFieldGroup): Promise<void>;
  deleteGroupAsync(groupId: string): Promise<void>;
}
```

```ts
interface CustomFieldGroup {
  label: string;
  description?: string;
  fields: CustomField[];
  assigned_to: CustomFieldAssignment; // where the group applies
  [key: string]: unknown;
}

type CustomFieldAssignment =
  | { post_types: string[]; op: "isIn" | "isNotIn" }
  | { post_ids: number[];   op: "isIn" | "isNotIn" }
  | { taxonomies: string[]; op: "isIn" | "isNotIn" };
```

```ts
const groupId = await etch.fields.createGroupAsync({
  label: "Event details",
  assigned_to: { post_types: ["event"], op: "isIn" },
  fields: [
    { label: "Location", key: "location", type: "text" },
    { label: "Capacity", key: "capacity", type: "number", required: true },
  ],
});
```

## Field management

```ts
interface EtchFieldsApi {
  addFieldAsync(groupId: string, field: CustomField): Promise<void>;
  updateFieldAsync(groupId: string, fieldKey: string, field: CustomField): Promise<void>;
  removeFieldAsync(groupId: string, fieldKey: string): Promise<void>;
}
```

```ts
interface CustomField {
  label: string;
  key: string;
  type: CustomFieldType;
  description?: string;
  required?: boolean;
  [key: string]: unknown;
}

type CustomFieldType = "text" | "textarea" | "number" | "boolean" | (string & {});
```

```ts
await etch.fields.addFieldAsync(groupId, { label: "Sold out", key: "sold_out", type: "boolean" });
await etch.fields.updateFieldAsync(groupId, "capacity", {
  label: "Max capacity",
  key: "capacity",
  type: "number",
});
await etch.fields.removeFieldAsync(groupId, "sold_out");
```

## Field values

Read and write the values stored against a specific post.

```ts
interface EtchFieldsApi {
  getValuesAsync(postId: number): Promise<PostCustomFieldValuesResponse>;            // all values, grouped
  getValueAsync(postId: number, fieldKey: string): Promise<PostCustomFieldValueResponse>;
  setValueAsync(postId: number, fieldKey: string, value: unknown): Promise<PostCustomFieldValueResponse>;
  setValuesAsync(postId: number, values: Record<string, unknown>): Promise<void>;    // set many at once
  deleteValueAsync(postId: number, fieldKey: string): Promise<void>;                 // clear one value
}
```

```ts
interface ResolvedCustomField {
  key: string;
  label: string;
  type: CustomFieldType;
  value: unknown;            // resolved value (null when unset)
}

interface PostCustomFieldValueResponse {
  post_id: number;
  group_id: string;
  field: ResolvedCustomField;
}

interface PostCustomFieldValuesResponse {
  post_id: number;
  groups: Record<string, PostCustomFieldGroupEntry>; // keyed by group id
}

interface PostCustomFieldGroupEntry {
  label: string;
  fields: Record<string, PostCustomFieldValueEntry>; // keyed by field key
}

interface PostCustomFieldValueEntry {
  label: string;
  type: CustomFieldType;
  value: unknown;
}
```

```ts
// Read one value
const { field } = await etch.fields.getValueAsync(42, "location");
console.log(field.value);

// Set one, then several
await etch.fields.setValueAsync(42, "location", "Berlin");
await etch.fields.setValuesAsync(42, { capacity: 500, sold_out: false });

// Read everything for the post
const all = await etch.fields.getValuesAsync(42);
for (const [groupId, group] of Object.entries(all.groups)) {
  console.log(groupId, group.label, group.fields);
}

// Clear a value
await etch.fields.deleteValueAsync(42, "location");
```
