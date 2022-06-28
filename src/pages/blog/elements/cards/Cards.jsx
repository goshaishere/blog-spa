import React, { useEffect, useState } from "react"
import styles from './Cards.module.scss'
import { useSelector } from 'react-redux'
import { Card } from './Card/Card'


export const Cards = () => {
  const response = useSelector(state => state.response.response)
  const cards = useSelector(state => state.response.cards)
  const nameFiltrationSign = useSelector(state => state.filters.name)
  const [cardRerenderSign, setCardrerenderSign] = useState(null)
  const dateFrom = useSelector(state => state.filters.dateFrom)
  const [timefilterFrom, setTimefilterFrom] = useState(null)
  const dateTo = useSelector(state => state.filters.dateTo)
  const [timeFilterTo, setTimeFilterTo] = useState(null)

  useEffect(() => {
    setCardrerenderSign(nameFiltrationSign)
  }, [nameFiltrationSign]);

  useEffect(() => {
    setTimefilterFrom(dateFrom)
  }, [dateFrom]);

  useEffect(() => {
    setTimeFilterTo(dateTo)
  }, [dateTo]);

  useEffect(() => {
    console.log(timefilterFrom, timeFilterTo)
  }, [timeFilterTo, timefilterFrom]);

  const dateChecker = (card) => {
    const date = card.publishedAt
    let goodDate = new Date(date)
    if (timefilterFrom || timeFilterTo) {
      if (goodDate > timeFilterTo) {
        return false
      }
      if (goodDate < timefilterFrom) {
        return false
      }
    }
    return true
  }

  return (
    <div className={styles.spot}>
      <div className={styles.box}>
        <div className={styles.cards}>
          {
            cardRerenderSign !== null ?
              (
                cards.map((card, index) => {
                  if (card.author === cardRerenderSign) {
                    if (dateChecker(card)) {
                      return <Card card={card} key={index} />
                    }
                  }
                })
              )
              :
              (
                cards.map((card, index) => {
                  if (dateChecker(card)) {
                    return <Card card={card} key={index} />
                  }
                })
              )
          }
        </div>
      </div>
    </div>
  )
}