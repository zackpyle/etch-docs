---
title: Activity Log
description: Learn how Etch's activity log helps us debug issues on your site
---

# Activity Log

Etch includes an activity log that records structured information about plugin operations. When you report an issue, this log helps us understand what happened alongside the reproduction steps you provide.

## How It Works

The activity log captures one structured event per request. It records:
- What operation was attempted
- Whether it succeeded or failed
- How long it took
- Relevant context (like which post was being edited)

### Smart Sampling

To keep the log file manageable:
- **Errors are always logged** — so problems are never missed
- **Successful requests are sampled** — only ~1% are logged in production
- **Debug mode logs everything** — when you enable `ENABLE_DEBUG_LOG`

### Automatic Rotation

The log automatically rotates when it reaches 5MB:
- Old logs are kept as `.1`, `.2`, `.3` suffixes
- The oldest is deleted when a new one is created
- Maximum ~20MB of logs on disk at any time

## What Data Is Collected

The activity log records operational data — things like request URLs, plugin version, timing, and success/failure status. It does not collect passwords, personal information, post content, or authentication tokens.

This feature is evolving as we refine our support workflows, so the specific data points logged may change over time.

## Log File Location

The activity log is stored at:
```
wp-content/uploads/etch/activity.log
```

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

The log contains JSON-formatted events separated by blank lines, making them easy for us to analyze.
