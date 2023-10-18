import dynamic from 'next/dynamic';
import clsx from 'clsx';

import styles from './page.module.scss';

const HeroImageComponent = dynamic(
  () => import('@/components/units/HeroImage'),
  {
    ssr: false,
  }
);

const HeroSkillStacksComponent = dynamic(
  () => import('@/components/units/HeroSkillStacks'),
  {
    ssr: false,
  }
);

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles['hero-banner']}>
        <HeroImageComponent />
      </section>
      <section className={clsx([styles.section, styles['section-wide']])}>
        <HeroSkillStacksComponent />
      </section>
    </main>
  );
};

export default Main;
