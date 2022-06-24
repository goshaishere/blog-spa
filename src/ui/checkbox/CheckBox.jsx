import React from 'react'
import styles from './CheckBox.module.scss'
// import './CheckBox.css'


// export const CheckBox = (props) => {
//   return (
//     <label class="container">
//       <input type="checkbox" className='myInput' />
//       <span class="checkmark"></span>
//     </label>
    
//   )
// }
      















export const CheckBox = (props) => {
  return (
    <div>
      <input id={'check_' + props.index} className={styles.checkbox} type="checkbox" />
      <label for={'check_' + props.index}>
      </label>
    </div>
    
  )
}
      
