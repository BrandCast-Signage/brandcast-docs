import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BlogPosts from '@site/src/components/BlogPosts';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started/introduction">
            Get Started in 5 Minutes →
          </Link>
        </div>
      </div>
    </header>
  );
}

function VideoSection() {
  return (
    <section className={styles.videoSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          See BrandCast in Action
        </Heading>
        <p className={styles.sectionSubtitle}>
          A 2-minute tour of how BrandCast helps retailers manage beautiful digital displays
        </p>
        <div className={styles.videoContainer}>
          <video
            controls
            preload="metadata"
            className={styles.video}
            aria-label="BrandCast Product Demo - 2 minute tour of digital signage features"
          >
            <source src="/videos/zone-marketing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="BrandCast Help Center"
      description="Digital signage documentation for retail teams">
      <HomepageHeader />
      <main>
        <VideoSection />
        <HomepageFeatures />
        <BlogPosts />
      </main>
    </Layout>
  );
}
