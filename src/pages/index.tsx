import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const commandSignals = [
  { label: 'Release posture', value: 'Stable trunk' },
  { label: 'Branch lifetime', value: '< 24 hours' },
  { label: 'Failure response', value: 'Immediate rollback' },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>SOFTWARE ENGINEERING PLAYBOOK</p>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            {siteConfig.tagline}
          </p>
          <p className={styles.heroBody}>
            Build your practice with engineering in mind, small deltas,
            continuous validation, and a trunk that stays deployable under
            pressure.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--lg" to="/docs/">
              Start your capability
            </Link>
            <Link
              className={clsx('button button--outline button--lg', styles.ghostButton)}
              to="/docs/salesforce/starting-steps">
              Adoption checklist
            </Link>
          </div>
        </div>
        <div className={styles.heroPanel}>
          <div className={styles.panelFrame}>
            <div className={styles.signalStack}>
              {commandSignals.map(signal => (
                <div key={signal.label} className={styles.signalRow}>
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
            <div className={styles.panelFooter}>
              <span>Primary objective</span>
              <strong>Ship continuously without losing control</strong>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Mission-critical trunk-based development guidance for engineering teams operating Salesforce with release discipline.">
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
