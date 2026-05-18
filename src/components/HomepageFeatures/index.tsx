import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import MountainSvg from '@site/static/img/undraw_docusaurus_mountain.svg';
import ReactSvg from '@site/static/img/undraw_docusaurus_react.svg';
import TreeSvg from '@site/static/img/undraw_docusaurus_tree.svg';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  label: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const featureList: FeatureItem[] = [
  {
    title: 'Working Culture',
    label: '01 / discipline',
    Svg: ReactSvg,
    description: (
      <>
        Decompose work in the smallest, vertical slice and roll forward with confidence because release readiness is measured
        continuously, not guessed at the end of the sprint.
      </>
    ),
  },
  {
    title: 'Controlled Integration Cadence',
    label: '02 / trunk integrity',
    Svg: MountainSvg,
    description: (
      <>
        Keep changes small, reviewable, and moving into <code>main</code> ensuring changes are relevant and integrated early
      </>
    ),
  },
  {
    title: 'Operational Guardrails',
    label: '03 / automation over convention',
    Svg: TreeSvg,
    description: (
      <>
        Pair Salesforce delivery with CI checks, feature flags, and rollback
        paths designed for production-facing systems.
      </>
    ),
  },
];

function Feature({ title, label, Svg, description }: FeatureItem) {
  return (
    <article className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <p className={styles.featureLabel}>{label}</p>
        <div className={styles.featureGraphic}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <Heading as="h3">{title}</Heading>
        <p className={styles.featureBody}>{description}</p>
      </div>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>MISSION CRITICAL</p>
          <Heading as="h2">Salesforce delivery with mission-control discipline</Heading>
        </div>
        <div className="row">
          {featureList.map(feature => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
