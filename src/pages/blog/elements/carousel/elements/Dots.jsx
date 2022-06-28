import React from 'react'
import styles from './Dots.module.scss'


export const Dots = () => {
  return (
    <div className={styles.dots}>
       <div className={styles.dot_active}></div>
       <div className={styles.dot_passive}></div>
       <div className={styles.dot_passive}></div>
    </div>
  )
}