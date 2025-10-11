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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // SEO Metadata, Structured Data, and Canonical URL
  headTags: [
    // Meta tags
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'digital signage, BrandCast, help, documentation, retail displays, content management',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Complete documentation for BrandCast digital signage platform',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:title',
        content: 'BrandCast Help Center',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:description',
        content: 'Digital signage documentation for retail teams',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: 'https://docs.brandcast.app/img/brandcast-social-card.jpg',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'BrandCast Documentation',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: 'Complete documentation for BrandCast digital signage platform',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://docs.brandcast.app/img/brandcast-social-card.jpg',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:url',
        content: 'https://docs.brandcast.app',
      },
    },
    // Canonical URL
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://docs.brandcast.app',
      },
    },
    // Structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'BrandCast Help Center',
        url: 'https://docs.brandcast.app',
        publisher: {
          '@type': 'Organization',
          name: 'BrandCast',
          logo: 'https://docs.brandcast.app/img/logo.png',
        },
        description: 'Professional digital signage documentation for retail teams',
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs at root instead of /docs
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
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/brandcast-social-card.jpg',
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
      copyright: `Copyright © ${new Date().getFullYear()} BrandCast. All rights reserved.`,
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
