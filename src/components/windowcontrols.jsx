import React from 'react';
import styles from '../styles/WindowControls.module.css';

function WindowControls() {
  return (
    <div className={styles.controls}>
      <div className={styles.button}>–</div>
      <div className={styles.button}>□</div>
      <div className={`${styles.button} ${styles.close}`}>×</div>
    </div>
  );
}

export default WindowControls;
