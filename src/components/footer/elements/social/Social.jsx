import React from 'react'
import styles from './Social.module.scss'
import { Tg } from './elements/Tg'
import { Vk } from './elements/Vk'
import { Twitter } from './elements/Twitter'
import { Youtube } from './elements/Youtube'

export const Social = () => {
  return (
    <div className={styles.social}>
      <Tg />
      <Vk />
      <Twitter />
      <Youtube />
    </div>
  )
}
