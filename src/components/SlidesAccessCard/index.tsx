import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

type SlidesAccessCardProps = {
  title: string;
  href: string;
  qrSrc: string;
  caption?: string;
};

export default function SlidesAccessCard({
  title,
  href,
  qrSrc,
  caption = 'Scan to open the workshop deck on another device, or use the direct link.',
}: SlidesAccessCardProps): ReactNode {
  const qrUrl = useBaseUrl(qrSrc);

  return (
    <aside className={styles.card}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Workshop Deck</p>
        <Heading as="h2" className={styles.title}>
          {title}
        </Heading>
        <p className={styles.caption}>{caption}</p>
        <Link className="button button--primary button--lg" to={href}>
          Open the Google Slides deck
        </Link>
      </div>
      <div className={styles.qrPanel}>
        <img
          className={styles.qrImage}
          src={qrUrl}
          alt="QR code linking to the Google Slides workshop deck"
          width="240"
          height="240"
        />
        <p className={styles.qrNote}>Use material as a companion.</p>
      </div>
    </aside>
  );
}
