---
title: Activity Log
description: Learn how Etch's activity log helps us debug issues on your site
---

# Activity Log

Etch includes an activity log that records structured information about plugin operations. When you report an issue, this log helps us understand what happened alongside the reproduction steps you provide.

## How It Works

The activity log captures one event per request — what operation was attempted, whether it succeeded or failed, and relevant context. Errors are always logged so problems are never missed, while successful requests are sampled to keep file sizes manageable. The log automatically rotates so it won't fill your disk.

## What Data Is Collected

The activity log records operational data — things like request URLs, plugin version, timing, and success/failure status. It does not collect passwords, personal information, or authentication tokens.

This feature is evolving as we refine our support workflows, so the specific data points logged may change over time.

## Log File Location

The activity log is stored at:
```
wp-content/uploads/etch/activity.log
```

You can safely delete these files if you want to clear your logs.

## Security

### Apache / LiteSpeed (Automatic)

Etch automatically creates an `.htaccess` file that blocks direct HTTP access to log files. No action needed.

### Nginx (Manual Configuration Required)

:::warning
Nginx does not read `.htaccess` files. You must add this configuration to your server block:
:::

```nginx
location ~* /wp-content/uploads/etch/.*\.log$ {
    deny all;
}
```

### IIS (Manual Configuration Required)

:::warning
IIS requires manual configuration to block access to log files.
:::

Add this to your `web.config`:

```xml
<location path="wp-content/uploads/etch">
    <system.webServer>
        <security>
            <requestFiltering>
                <fileExtensions>
                    <add fileExtension=".log" allowed="false" />
                </fileExtensions>
            </requestFiltering>
        </security>
    </system.webServer>
</location>
```

## Sharing Logs with Support

If we ask for your activity log during troubleshooting:

1. Navigate to `wp-content/uploads/etch/` via FTP or file manager
2. Download `activity.log` (and any `.log.1`, `.log.2` files if they exist)
3. Share the files through the support channel
