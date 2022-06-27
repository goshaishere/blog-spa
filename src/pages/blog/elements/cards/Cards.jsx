import React, { useEffect } from "react"
import styles from './Cards.module.scss'
import { useSelector } from 'react-redux'

import { Card } from './Card/Card'

export const Cards = () => {
  const response = useSelector(state => state.response.response)
  const cards = useSelector(state => state.response.cards)
  console.log(response)
  console.log(cards)

  return (
    <div className={styles.spot}>
      <div className={styles.box}>
        <div className={styles.cards}>
          {
            cards.map((card, index) => {
              return <Card card={card} key={index} />
            })
          }
        </div>
      </div>
    </div>
  )
}
