import React from 'react'
import styles from './Header.module.scss'
import { Logo } from './elements/Logo'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo className={styles.header__logo} />
      <div className={styles.header__info}>
        <div className={styles.email}>sales@logo.ru</div>
        <div className={styles.number}>8 800 000 00 00</div>
      </div>
    </div>
  )
}