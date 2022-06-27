import React from 'react'
import styles from './Card.module.scss'

const NameButton = (props) => {
  return <div className={styles.author}>
    <div className={styles.button_text}>{props.name}</div>
  </div>
}

export const Card = (props) => {
  const data = props.card
  
  return (
    <div className={styles.card}>

      <div className={styles.date}>{data.publishedAt}</div>
      <div className={styles.title}>{data.description}</div>
      <div className={styles.text}>{data.content}</div>
      <NameButton name={data.author} />

    </div>
  )
}
