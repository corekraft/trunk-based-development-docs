import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  label: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const featureList: FeatureItem[] = [
  {
    title: 'Controlled Integration Cadence',
    label: '01 / trunk integrity',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Keep changes small, reviewable, and moving into <code>main</code> before
        branch drift turns into a deployment incident.
      </>
    ),
  },
  {
    title: 'Operational Guardrails',
    label: '02 / validation mesh',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Pair Salesforce delivery with CI checks, feature flags, and rollback
        paths designed for production-facing systems.
      </>
    ),
  },
  {
    title: 'Incident-Ready Release Flow',
    label: '03 / response discipline',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Roll forward with confidence because release readiness is measured
        continuously, not guessed at the end of the sprint.
      </>
    ),
  },
];

function Feature({title, label, Svg, description}: FeatureItem) {
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
          <p className={styles.sectionEyebrow}>COMMAND SURFACES</p>
          <Heading as="h2">Software delivery with mission-control discipline</Heading>
          <p className={styles.sectionBody}>
            The site now frames trunk-based development as an engineering
            control system: observability, containment, and rapid corrective
            action.
          </p>
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
