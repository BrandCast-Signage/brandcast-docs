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
        'features/display-health-monitoring',
        'features/layouts',
        'features/content-types',
        'features/content-library',
        'features/media-library',
        'features/integrations',
        'features/store-library',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [
        'workflows/display-setup',
        'workflows/display-registration',
        'workflows/content-association',
        'workflows/playlists',
        'workflows/schedules',
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
        'integrations/google-slides',
        'integrations/google-tasks',
        'integrations/ical-calendar',
        'integrations/cozi-calendar',
        'integrations/stock-market',
        'integrations/weather',


        'integrations/rss-feeds',

        'integrations/zoomshift',
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
