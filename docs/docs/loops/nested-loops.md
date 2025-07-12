---
title: Nested Loops
sidebar_position: 2
---

# Nested Loops

Nested loops in Etch allow you to repeat content within another loop, enabling you to display hierarchical or related data, such as categories with their posts, or authors with their books.

## Example: WP Query (Categories and Posts)

Suppose you want to display a list of categories, and under each category, a list of posts in that category:

**Parent Loop (Categories):**

```php
// Query for all categories
$category_args = [
  'taxonomy' => 'category',
  'hide_empty' => false
];
```

**Nested Loop (Posts in Category):**

```php
// Query for posts in the current category
$post_args = [
  'post_type' => 'post',
  'posts_per_page' => 5,
  'orderby' => 'date',
  'order' => 'DESC',
  'post_status' => 'publish',
  'cat' => $cat // Use the current category's term_id
];
```

- Add a Loop element for categories, then inside it, add another Loop element for posts, using the current category's ID.

---

## Example: Custom JSON (Authors and Books)

Suppose you have a list of authors, each with a list of books:

```json
[
	{
		"name": "Jane Austen",
		"books": [{ "title": "Pride and Prejudice" }, { "title": "Sense and Sensibility" }]
	},
	{
		"name": "Mark Twain",
		"books": [
			{ "title": "Adventures of Huckleberry Finn" },
			{ "title": "The Adventures of Tom Sawyer" }
		]
	}
]
```

- Add a Loop element and set the data source type to JSON (use the above data).
- Inside the author loop, add another Loop element and set its data source to `{item.books}`.
- Add a child element (e.g., Heading) inside the nested loop and use `{item.title}` to display each book's title.

---

## See Also

- [Loops](/loops/basic-loops)
