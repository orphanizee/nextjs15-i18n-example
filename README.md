## Summary

Sample code to verify i18n implementation methods in Next.js 15

- Locale-based redirect
- SSR with i18n
- CSR with i18n
- SSG with i18n
- language based metadata

## Getting Started

First, run the development server:

```bash
npm ci
npm run dev
```

As a result, user can access the page with the following URL:

- `https://your-site.example/en/`
- `https://your-site.example/de/`
- `https://your-site.example/ja/`

### SSG

Add output configuration to NextConfig

    **next.config.ts**

    ```ts
    const nextConfig: NextConfig = {
        reactStrictMode: true,
        output: 'export',   // Remove comment
    };
    ```

1. Run build & http-server

    ```bash
    npm run build
    npx http-server ./out
    ```

## Reference
Part of the code is borrowed from the following repository. We would like to thank the authors of this repo for excellent work:
[next-intl-example](https://github.com/azu/next-intl-example)