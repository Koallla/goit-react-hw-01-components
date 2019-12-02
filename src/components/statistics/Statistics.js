import React from 'react';
import styles from './statistics.module.css';
import T from 'prop-types';

const Statistics = ({ title, stats }) => (
  <>
    {title && (
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.statList}>
          {stats.map(stat => (
            <li key={stat.id} className={styles.item}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    )}
  </>
);

Statistics.defaultProps = {
  label: '.file',
};

Statistics.propTypes = {
  stats: T.arrayOf(
    T.shape({
      label: T.string.isRequired,
      percentage: T.number.isRequired,
      id: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
