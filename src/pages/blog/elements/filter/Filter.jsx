import React from 'react'
import styles from './Filter.module.scss'

export const Filter = () => {
  return (
    <div className={styles.spot}>



      <div className={styles.box}>

        <div className={styles.filter__container}>
          <div className={styles.select__container}>
            <svg className={styles.select__select_icon}
              width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6666 17.5V15.8333C16.6666 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66665C5.78259 12.5 4.93474 12.8512 4.30962 13.4763C3.6845 14.1014 3.33331 14.9493 3.33331 15.8333V17.5" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 9.16667C11.841 9.16667 13.3334 7.67428 13.3334 5.83333C13.3334 3.99238 11.841 2.5 10 2.5C8.15907 2.5 6.66669 3.99238 6.66669 5.83333C6.66669 7.67428 8.15907 9.16667 10 9.16667Z" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <select className={styles.select}>
              <option className={styles.option}>Выбор автора</option>
              <option>Apples</option>
              <option>Bananas</option>
              <option>Grapes</option>
              <option>Oranges</option>
            </select>
          </div>
          <div className={styles.input__container}>
            <input className={styles.input__from} type="text" placeholder='От' />
            <div className={styles.input__divider} ><svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16667 1H10.8333" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
            <input className={styles.input__to} type="text" placeholder='До' />
          </div>
        </div>
      </ div>
    </div>
  )
}
