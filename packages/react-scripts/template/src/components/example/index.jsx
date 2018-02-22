import React from 'react';
import styles from './index.css';
import logo from './logo.svg';

export default function Example({ isTwoColumn }) {
  return (
    <section
      className={`${styles.wrapper}${isTwoColumn
        ? ` ${styles.isTwoColumn}`
        : ''}`}>
      <h1 className={styles.heading}>
        fe-co-foobar
      </h1>
      <div className={styles.content}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h2 className={styles.subHeading}>Next steps to get started:</h2>
        <ul className={styles.todo}>
          <li>Toggle the different fixtures on the left</li>
          <li>
            Edit and rename this example component:{' '}
            <code className={styles.code}>
              src/components/example/index.jsx
            </code>
          </li>
          <li>
            Edit the styles:{' '}
            <code className={styles.code}>
              src/components/example/index.css
            </code>
          </li>
          <li>
            Edit the demo fixtures:{' '}
            <code className={styles.code}>demo/fixtures.js</code>
          </li>
          <li>Get a coffee from Stockroom Cafe</li>
        </ul>
      </div>
    </section>
  );
}
