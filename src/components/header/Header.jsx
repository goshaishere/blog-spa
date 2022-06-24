import React from 'react'
import styles from './Header.module.scss'
import {Logo} from './elements/logo/Logo'
import { Email } from './elements/Email'
import { Number } from './elements/Number'


export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Email />
      <Number />
    </header>
  )
}
