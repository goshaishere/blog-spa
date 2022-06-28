import React from 'react'
import styles from './Carousel.module.scss'
import { Text1 } from './elements/Text1'
import { Text2 } from './elements/Text2'
import { Picture } from './elements/Picture'
import { CarouselButton } from './elements/CarouselButton'
import { Dots } from './elements/Dots'


export const Carousel = () => {
  return (
    <div className={styles.spot}>
      <div className={styles.box}>
        <div className={styles.carousel__container1}>
          <Text1 className={styles.text__container1} />
          <Text2 className={styles.text__container2} />
          <CarouselButton className={styles.button__container} />
        </div>
        <div className={styles.carousel__container2}>
          <Dots />
        </div>
      </div>
      <div className={styles.carousel__picture_box}>
      </div>
      <Picture />
    </div>
  )
}