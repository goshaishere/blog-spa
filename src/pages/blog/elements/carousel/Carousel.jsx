import React from 'react'
import styles from './Carousel.module.scss'
import { Text1 } from './elements/Text1'
import { Text2 } from './elements/Text2'
import { Picture } from './elements/Picture'
import { CarouselButton } from './elements/CarouselButton'
import { Dots } from './elements/Dots'

export const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <Picture />
      <Text1 />
      <Text2 />
      <CarouselButton />
      <Dots />
    </div>
  )
}
