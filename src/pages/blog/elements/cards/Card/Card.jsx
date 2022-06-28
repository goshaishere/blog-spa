import React from 'react'
import styles from './Card.module.scss'

const NameButton = (props) => {
  return <div className={styles.author}>
    <div className={styles.button_text}>{props.name}</div>
  </div>
}

// const CardDate = (props) => {
//   let dirtyDate = props.date
//   let okDate = dirtyDate.slice(0, 10)
//   return <div className={styles.date}>{okDate}</div>
// }

export const Card = (props) => {
  const data = props.card
  
  let dirtyDate = data.publishedAt
  let okDate = dirtyDate.slice(0, 10)
  
  return (
    <div className={styles.card} >
      <div className={styles.date}>{okDate}</div>
      {/* <CardDate date={data.publishedAt} /> */}
      <div className={styles.title}>{data.description}</div>
      <div className={styles.text}>{data.content}</div>
      <NameButton name={data.author} />
    </div>
  )
}
