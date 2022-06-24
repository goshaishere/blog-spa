import React from 'react'
import styles from './Footer.module.scss'
import { Links } from './elements/links/Links'
import { Copyright } from './elements/copyright/Copyright'
import { Logo } from './elements/logo/Logo'
import { Social } from './elements/social/Social'



export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Links className={styles.links}/>
      <Copyright />
      <Logo />
      <Social />

    </footer>
  )
}
