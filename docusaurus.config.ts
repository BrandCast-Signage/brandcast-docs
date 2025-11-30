import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BrandCast Documentation',
  tagline: 'Digital signage that helps retail teams focus on customers, not screens',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.brandcast.app',
  baseUrl: '/',

  organizationName: 'BrandCast-Signage',
  projectName: 'brandcast-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // SEO Metadata, Structured Data, and Canonical URL
  headTags: [
    // ... (keep existing headTags)
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs', // Docs at /docs, homepage at root
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-FCEJKN0K8J',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/brandcast-OG.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BrandCast Help',
      logo: {
        alt: 'BrandCast Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://news.brandcast.app',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://brandcast.app',
          label: 'BrandCast.app',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'Features',
              to: '/features',
            },
            {
              label: 'Workflows',
              to: '/workflows',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'BrandCast',
              href: 'https://brandcast.app',
            },
            {
              label: 'News & Updates',
              href: 'https://news.brandcast.app',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Support',
              href: 'https://brandcast.app/support',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BrandCast. All rights reserved.<br/>Build: ${new Date().toISOString()} • ${Date.now().toString(36).toUpperCase()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // Algolia search - to be configured later
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'brandcast',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
