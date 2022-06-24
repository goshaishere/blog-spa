import React from 'react'
import {CustomLink} from '../../../link/Link'
import styles from './Links.module.scss'

export const Links = () => {
  return (
    <div className={styles.links}>
        <CustomLink className={styles.link} text='Готовые Решения' to='/solutions'></ CustomLink>
        <CustomLink className={styles.link} text='О Нас'  to='/about'></CustomLink>
        <CustomLink className={styles.link} text='Блог' to='/'></CustomLink>
        <CustomLink className={styles.link} text='Контакты' to='/contacts'></CustomLink>
    </div>
  )
}
