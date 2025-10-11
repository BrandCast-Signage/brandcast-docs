import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/quick-start',
        'getting-started/setup-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/displays',
        'features/layouts',
        'features/content-library',
        'features/media-library',
        'features/integrations',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [
        'workflows/display-setup',
        'workflows/content-association',
        'workflows/user-management',
        'workflows/roles-and-permissions',
        'workflows/multi-store-management',
        'workflows/managing-quotas',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/slideshow-integration',
        'integrations/rss-feeds',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/display-problems',
        'troubleshooting/content-problems',
      ],
    },
  ],
};

export default sidebars;
