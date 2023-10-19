import dynamic from 'next/dynamic';

import styles from './page.module.scss';

const HeroImageComponent = dynamic(
  () => import('@/components/units/HeroImage'),
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
      <section className={styles.section}>Main</section>
    </main>
  );
};

export default Main;
