---
title: Dynamic Data Modifiers
sidebar_position: 60
---

# Dynamic Data Modifiers

Dynamic data can be customized by applying *modifiers* directly to the data path.
For example: `item.modifier()`

This allows you to format or transform values before they are displayed.

## Available Modifiers

| Modifier           | Description                                                                 | Example                                  |
|--------------------|-----------------------------------------------------------------------------|------------------------------------------|
| `.format()`        | Formats a date into a user-friendly string. Refer to the [PHP `DateTime::format` documentation](https://www.php.net/manual/en/datetime.format.php) for available formatting options. | `date.format("F j, Y")` → `July 25, 2025` |
| `.toUppercase()`   | Converts all characters in the string to uppercase.                         | `name.toUppercase()` → `JOHN`      |
| `.toLowercase()`   | Converts all characters in the string to lowercase.                         | `name.toLowercase()` → `john`      |
