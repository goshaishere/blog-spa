import React, { useState, useEffect } from 'react'
import styles from './Filter.module.scss'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { setName } from '../../../../reducers/cardFiltersReducer';
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { setDateFrom, setDateTo } from '../../../../reducers/cardFiltersReducer'


// const style = {
//   fontFamily:"\"Montserrat\"",
//   fontStyle:"normal",
//   fontWeight:"600",
//   fontSize:"16px",
//   lineHeight:"20px",
//   color:"#888888",
//   border:"none",
//   outline:"none"
// };


export const Filter = () => {
  const dispatch = useDispatch()
  const authors = useSelector(state => state.response.authors)
  const [valueOfButton, setValueOfButton] = useState('Выбор автора')
  const [selectedDateFrom, handleDateChangeFrom] = useState('')
  const [selectedDateTo, handleDateChangeTo] = useState('')
  const [editValue, setEditValue] = useState(null)
  const [hideFrom, sethideFrom] = useState('')
  const [hideTo, sethideTo] = useState('')
  const [valueModal, setValueModal] = React.useState(new Date())
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [startDate, setStartDate] = useState('')
  const [finishDate, setFinishDate] = useState('')
  const open = Boolean(anchorEl)

  useEffect(() => {
  }, [valueOfButton])

  useEffect(() => {
    console.log(startDate)
    dispatch(setDateFrom(startDate))
  }, [startDate]);

  useEffect(() => {
    console.log(finishDate)
    dispatch(setDateTo(finishDate))
  }, [finishDate]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };

  const handler = (e) => {
    let name = e.target.getAttribute('value')
    dispatch(setName(name))
    setValueOfButton(name)
    setAnchorEl(null)
  };

  const fromClickHandler = (e) => {
    console.log('fromClickHandler')
    setEditValue(e.target.name)
  }

  const toClickHandler = (e) => {
    console.log('toClickHandler')
    setEditValue(e.target.name)
  }

  const handleChangeFrom = (event) => {
    let value = event.target.value
    sethideFrom(value)
    handleDateChangeFrom(value)
  }

  const handleChangeTo = (event) => {
    handleDateChangeTo(event.value)
  }

  return (
    <div className={styles.spot}>
      <div className={styles.box}>
        <div className={styles.filter__container}>
          <div className={styles.select__container}>
            <svg className={styles.select__select_icon}
              width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6666 17.5V15.8333C16.6666 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66665C5.78259 12.5 4.93474 12.8512 4.30962 13.4763C3.6845 14.1014 3.33331 14.9493 3.33331 15.8333V17.5" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 9.16667C11.841 9.16667 13.3334 7.67428 13.3334 5.83333C13.3334 3.99238 11.841 2.5 10 2.5C8.15907 2.5 6.66669 3.99238 6.66669 5.83333C6.66669 7.67428 8.15907 9.16667 10 9.16667Z" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className={styles.select} id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>    {valueOfButton}        </div>
            <Menu style={{ zIndex: "15" }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handler}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {
                authors.map((author, index) => {
                  return <MenuItem className={styles.option} key={index} value={author} onClick={handler}>{author}</MenuItem>
                })
              }
            </Menu>
          </div>
          <div className={styles.input__container}>
            <DatePicker style={{ zIndex: '100' }} defaultValue='От' selected={startDate} onChange={(date) => setStartDate(date)} />
            <div className={styles.input__divider} ><svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16667 1H10.8333" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
            <DatePicker style={{ zIndex: '100' }} selected={finishDate} onChange={(date) => setFinishDate(date)} />
            <input className={styles.input__from} type="text" name='from' placeholder='От' autoComplete='off' onClick={fromClickHandler} value={selectedDateFrom} onChange={handleChangeFrom} />
            <div className={styles.input__divider} ><svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16667 1H10.8333" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
            <input className={styles.input__to} type="text" name='to' placeholder='До' autoComplete='off' onClick={toClickHandler} value={selectedDateTo} onChange={handleChangeTo} />
          </div>
        </div>
      </ div>
    </div>
  )
}