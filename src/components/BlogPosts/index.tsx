import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { featuredPosts } from '@site/src/data/featuredPosts';
import styles from './styles.module.css';

function BlogPostCard({ title, url, date, heroImage, summary }) {
  return (
    <div className="col col--4">
      <div className={styles.blogCard}>
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
          <img
            src={heroImage}
            alt={title}
            className={styles.heroImage}
            loading="lazy"
          />
        </a>
        <div className={styles.cardContent}>
          <Heading as="h3" className={styles.cardTitle}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </Heading>
          <p className={styles.cardSummary}>{summary}</p>
          <div className={styles.cardFooter}>
            <small className={styles.date}>{date}</small>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMore}
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogPosts(): JSX.Element {
  return (
    <section className={styles.blogSection}>
      <div className="container">
        <div className={styles.blogHeader}>
          <Heading as="h2">Featured Articles</Heading>
          <Link
            href="https://news.brandcast.app"
            className="button button--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Posts →
          </Link>
        </div>
        <div className="row">
          {featuredPosts.map((post, idx) => (
            <BlogPostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
