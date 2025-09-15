---
title: Dynamic Data Modifiers
sidebar_position: 60
---

# Dynamic Data Modifiers

Dynamic data can be customized by applying _modifiers_ directly to the data path.
For example: `item.modifier()`

This allows you to format or transform values before they are displayed.

## Available Modifiers

| Modifier          | Description                                                                                         | Example                                               |
| ----------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `.dateFormat()`   | Formats a date into a user-friendly string. Refer to the [PHP `DateTime::format` documentation](https://www.php.net/manual/en/datetime.format.php) for available formatting options.                                                        | `date.dateFormat("F j, Y")` → `July 25, 2025`         |
| `.format()`     | ⚠️ **Deprecated** — use `.dateFormat()` instead. Will be removed in a future release.                 | `date.format("F j, Y")` → `July 25, 2025`             |
| `.numberFormat()` | Formats a number with grouped thousands and optionally decimal digits.<br /><details><summary>Arguments</summary>`decimals` *(number)* — Decimal points<br />`decimalSeparator` *(string)* — Decimal char<br />`thousandSeparator` *(string)* — Thousands char</details> | `number.numberFormat(2, ',', '.')` → `123.456,00`     |
| `.toUppercase()`  | Converts all characters to uppercase.                                                               | `name.toUpperCase()` → `JOHN`                         |
| `.toLowercase()`  | Converts all characters to lowercase.                                                               | `name.toLowerCase()` → `john`                         |
| `.includes()`     | Checks if an array contains a value. Returns `true`/`false`.                                        | `user.userRoles.includes('administrator')` → `true`   |
| `.join()`         | Combines array elements into a string with a separator.                                             | `user.userRoles.join(', ')` → `administrator, editor` |
