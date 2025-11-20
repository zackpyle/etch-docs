---
title: Hooks
sidebar_position: 1
last_update:
  date: 2025-11-20
---

# Hooks

Etch provides a set of hooks that allow you to extend and customize the system’s behavior as needed.

## Actions

### Action: `etch/canvas/enqueue_assets`

Triggered during the canvas loading process, this hook allows you to enqueue additional styles and scripts.
Use it to register any assets (`wp_enqueue_style`, `wp_enqueue_script`) that should be loaded inside the canvas.

```php
add_action('etch/canvas/enqueue_assets', function() {
    wp_enqueue_style('custom-css', 'https://localhost/style.css');
    wp_enqueue_script('custom-js', 'https://localhost/script.js');
});
```

## Filters

### Filter: `etch/dynamic_data/post`
Extended the key `{this.CUSTOM}` adding custom dynamic data. [Read more](../../dynamic-data/dynamic-data-integration/post-dynamic-data-integration.md).

```php
add_filter('etch/dynamic_data/post', function( $data, $post_id ) {
    $data['my_custom_data'] = array(
        'field_name_1' => "Field 1 value",
        'field_name_2' => array(
            "sub_field_name_1" => "Sub Field 1 value"
        )
    );

    return $data;
});
```

### Filter: `etch/dynamic_data/user`
Extended the key `{user.CUSTOM}` adding custom dynamic data. [Read more](../../dynamic-data/dynamic-data-integration/user-dynamic-data-integration.md).

```php
add_filter('etch/dynamic_data/user', function( $data, $user_id ) {
    $data['my_custom_data'] = array(
        'field_name_1' => "Field 1 value",
        'field_name_2' => array(
            "sub_field_name_1" => "Sub Field 1 value"
        )
    );

    return $data;
});
```

### Filter: `etch/dynamic_data/term`
Extended the key `{term.CUSTOM}` adding custom dynamic data. [Read more](../../dynamic-data/dynamic-data-integration/term-dynamic-data-integration.md).

```php
add_filter('etch/dynamic_data/term', function( $data, $term_id, $taxonomy ) {
    $data['my_custom_data'] = array(
        'field_name_1' => "Field 1 value",
        'field_name_2' => array(
            "sub_field_name_1" => "Sub Field 1 value"
        )
    );

    return $data;
});
```

### Filter: `etch/dynamic_data/option`
Extended the key `{options.CUSTOM}` adding custom dynamic data. [Read more](../../dynamic-data/dynamic-data-integration/option-dynamic-data-integration.md).

```php
add_filter('etch/dynamic_data/option', function( $data ) {
    $data['my_custom_data'] = array(
        'field_name_1' => "Field 1 value",
        'field_name_2' => array(
            "sub_field_name_1" => "Sub Field 1 value"
        )
    );

    return $data;
});
```