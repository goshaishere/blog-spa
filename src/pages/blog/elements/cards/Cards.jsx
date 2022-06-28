import React, { useEffect, useState } from "react"
import styles from './Cards.module.scss'
import { useSelector } from 'react-redux'
import { Card } from './Card/Card'

export const Cards = () => {
  const response = useSelector(state => state.response.response)
  const cards = useSelector(state => state.response.cards)

  const nameFiltrationSign = useSelector(state => state.filters.name)
  const [cardRerenderSign, setCardrerenderSign] = useState(null)
  useEffect(() => {
    setCardrerenderSign(nameFiltrationSign)
  }, [nameFiltrationSign]);



  const dateFrom = useSelector(state => state.filters.dateFrom)
  const [timefilterFrom, setTimefilterFrom] = useState(null)
  useEffect(() => {
    setTimefilterFrom(dateFrom)
  }, [dateFrom]);


  const dateTo = useSelector(state => state.filters.dateTo)
  const [timeFilterTo, setTimeFilterTo] = useState(null)
  useEffect(() => {
    setTimeFilterTo(dateTo)
  }, [dateTo]);


  useEffect(() => {
    console.log(timefilterFrom, timeFilterTo)
  }, [timeFilterTo, timefilterFrom]);



  // console.log(response)
  // console.log(cards)


  const dateChecker = (card) => {
    //const date = card.publishedAt.slice(0, 10)
    const date = card.publishedAt
    //console.log(date)
    let goodDate = new Date(date)
    // console.log(goodDate > goodDate)
    // const result = null


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
                    //console.log('filtered cardrender')
                    if (dateChecker(card)) {
                      return <Card card={card} key={index} />
                    }

                  }
                })

              )


              :

              (

                cards.map((card, index) => {
                  //console.log('unfiltered cardrender')
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
