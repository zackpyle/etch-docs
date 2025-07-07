# Algolia Search Setup (Optional)

For better search performance on production sites, you can use Algolia:

## 1. Get Algolia Account

- Sign up at https://www.algolia.com/
- Create a new application
- Get your Application ID, Search-Only API Key, and Admin API Key

## 2. Update Config

Replace the algolia section in `docusaurus.config.ts`:

```typescript
algolia: {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_SEARCH_API_KEY',
  indexName: 'etch-docs',
  contextualSearch: true,
  searchParameters: {},
  externalUrlRegex: 'external\\.com|domain\\.com',
  replaceSearchResultPathname: {
    from: '/docs/',
    to: '/',
  },
  searchPagePath: 'search',
  debug: false,
}
```

## 3. Install DocSearch

```bash
npm install @docsearch/react
```

## 4. Run Crawler

Algolia will crawl your site and index the content automatically.

## Benefits:

- Faster search results
- Better relevance
- Analytics on search queries
- Typo tolerance
- Search suggestions
