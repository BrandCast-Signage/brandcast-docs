import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🚀 Quick Start',
    link: '/docs/getting-started/introduction',
    description: (
      <>
        Set up your first display in 15 minutes. No technical expertise required.
      </>
    ),
  },
  {
    title: '📚 Features Guide',
    link: '/docs/features/layouts',
    description: (
      <>
        Learn about layouts, content types, integrations, and media management.
      </>
    ),
  },
  {
    title: '🏪 Multi-Store Setup',
    link: '/docs/workflows/multi-store',
    description: (
      <>
        Manage multiple locations with centralized content and local overrides.
      </>
    ),
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.feature}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <a href={link} className="button button--secondary button--sm">
          Learn More →
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
