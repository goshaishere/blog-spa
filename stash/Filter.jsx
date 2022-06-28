import React, { useState, useEffect } from 'react'
import styles from './Filter.module.scss'
import { ContentCutOutlined } from '@mui/icons-material'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { setName } from '../../../../reducers/cardFiltersReducer';
import { useDispatch, useSelector } from 'react-redux'

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  fontFamily:"\"Montserrat\"",
  fontStyle:"normal",
  fontWeight:"600",
  fontSize:"16px",
  lineHeight:"20px",
  color:"#888888",
  border:"none",
  outline:"none"
};

export const Filter = () => {
  const dispatch = useDispatch()
  // const [authors, setAuthors] = useState([])
  const authors = useSelector(state => state.response.authors)
  console.log(authors)
  const [valueOfButton, setValueOfButton] = useState('Выбор автора')
  // console.log(cardsInfo)
  //console.log(cardsInfo.articles)
  // const cards = useSelector(state => state.response.cards)
  const [selectedDateFrom, handleDateChangeFrom] = useState('');
  const [selectedDateTo, handleDateChangeTo] = useState('');
  // const [authors, setAuthors] = useState([])
  const [editValue, setEditValue] = useState(null)

  const [hideFrom, sethideFrom] = useState('')
  const [hideTo, sethideTo] = useState('')

  const [valueModal, setValueModal] = React.useState(new Date());
  // useEffect(() => {
  //   getAuthors()
  // }, [cards]);
  useEffect(() => {
  }, [valueOfButton]);

  useEffect(() => {
  }, [hideFrom]);


  // const getAuthors = () => {
  //   cards.map((el, index) => {
  //     console.log(index, el.author)
  //     setAuthors(authors.concat([el.author]))
  //   })
  // }


  const [anchorEl, setAnchorEl] = React.useState(null);

  

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };



  // const [openModal, setOpenModal] = React.useState(false);
  // const handleOpenModal = (e) => {
  //   setOpenModal(true)
  // }
  // const handleCloseModal = () => setOpenModal(false);


  const handler = (e) => {
    let name = e.target.getAttribute('value')
    //console.log(e.target.getAttribute('value'))
    dispatch(setName(name))
    setValueOfButton(name)
    setAnchorEl(null)
  };

  const fromClickHandler = (e) => {
    //console.log(e.target.name)
    console.log('fromClickHandler')
    setEditValue(e.target.name)
    // handleOpenModal()
}

const toClickHandler = (e) => {
  console.log('toClickHandler')
  setEditValue(e.target.name)
  // handleOpenModal()
}

// const handleChangeFrom = (event) => {
//   let value = event.target.value
//   sethideFrom(value)
//   handleDateChangeFrom(value)
//   }
// }


const handleChangeFrom = (event) => {
  let value = event.target.value
  let result = null
  sethideFrom(value)
  handleDateChangeFrom(value)
  console.log('number_number', value.length)
  switch (value.length) {
    case 0:
      sethideFrom(value)
      console.log(hideFrom)
      handleDateChangeFrom(value)
      break;
    case 1:
      sethideFrom(value)
      handleDateChangeFrom(value)
      console.log(hideFrom)
      break;
    case 2:
      sethideFrom(value)
      console.log(hideFrom)
      handleDateChangeFrom(value)
      break;
    case 3:
      console.log(hideFrom)
      sethideFrom(value)
      result = value.slice(0,2) + '/' + value.slice(2,3)
      handleDateChangeFrom(result)
      break;
    case 4:
      console.log(hideFrom)
      sethideFrom(hideFrom + value.slice(4,5))
      result = hideFrom.slice(0,2) + '/' + hideFrom.slice(2,4)
      handleDateChangeFrom(result)
      break;
    case 5:
      console.log(hideFrom)
      sethideFrom(hideFrom + value.slice(5,6))
      result = hideFrom.slice(0,2) + '/' + hideFrom.slice(2,4) + "/" + hideFrom.slice(4, 5)
      handleDateChangeFrom(result)
      break;
    case 6:
      console.log(hideFrom)
      sethideFrom(hideFrom + value.slice(5,6))
      result = hideFrom.slice(0,2) + '/' + hideFrom.slice(2,4) + "/" + hideFrom.slice(4, 6)
      handleDateChangeFrom(result)
      break;
    case 7:
      console.log(hideFrom)
      sethideFrom(hideFrom + value.slice(6,7))
      result = hideFrom.slice(0,2) + '/' + hideFrom.slice(2,4) + "/" + hideFrom.slice(4, 7)
      handleDateChangeFrom(result)
    break;
    case 8:
      console.log(hideFrom)
      sethideFrom(hideFrom + value.slice(7,8))
      result = hideFrom.slice(0,2) + '/' + hideFrom.slice(2,4) + "/" + hideFrom.slice(4, 8)
      handleDateChangeFrom(result)
      break;
    default:
      handleDateChangeFrom(value)
  }
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
            <input className={styles.input__from} type="text" name='from' placeholder='От' autoComplete='off' onClick={fromClickHandler} value={selectedDateFrom} onChange={handleChangeFrom}/>
            <div className={styles.input__divider} ><svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16667 1H10.8333" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
            <input className={styles.input__to} type="text" name='to' placeholder='До' autoComplete='off' onClick={toClickHandler} value={selectedDateTo} onChange={handleChangeTo}/>




          </div>
            



        </div>
      </ div>
    </div>
  )
}




{/* <TextField className={styles.input__to} type="text" name='to' placeholder='До' autoComplete='off' onClick={toClickHandler}
        id="date"
        label="Birthday"
        type="date"
        defaultValue='До'
        // defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      /> */}


{/* <Modal
open={openModal}
onClose={handleCloseModal}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description">
<LocalizationProvider dateAdapter={AdapterDateFns}>
<MobileDatePicker
label="For mobile"
value={valueModal}
onChange={(valueModal) => {
setValueModal(valueModal);
}}
renderInput={(params) => <TextField {...params} />}
/>
</LocalizationProvider>

</Modal> */}

{/* <StaticDatePicker
orientation="portrait"
openTo="day"
value={valueModal}
onChange={(newValue) => {
  setValueModal(newValue);
}}
renderInput={(params) => <TextField {...params} />}
/> */}


// <Box sx={style}>
// <Typography id="modal-modal-title" variant="h6" component="h2">
//   Text in a modal {editValue}
// </Typography>
// <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//   Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
// </Typography>
// </Box> 







      //       {/* <DatePicker className={styles.input__from}
      //   label="Basic example"
      //   value={selectedDateFrom}
      //   onChange={handleDateChangeFrom}
      //   animateYearScrolling
      // /> */}
      //       {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      //         <DatePicker className={styles.input__from}
                
      //           value={selectedDateFrom}
      //           onChange={(newValue) => {
      //             handleDateChangeFrom(newValue);
      //           }}
      //           renderInput={(params) => <TextField {...params} />}
      //         />
      //       </LocalizationProvider> */}

      //                   {/* <DatePicker className={styles.input__to}
      //         label="Basic example"
      //         value={selectedDateTo}
      //         onChange={handleDateChangeTo}
      //         animateYearScrolling
      //       /> */}

      //       {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      //         <DatePicker className={styles.input__to}
      //           value={selectedDateTo}
      //           onChange={(newValue) => {
      //             handleDateChangeTo(newValue);
      //           }}
      //           renderInput={(params) => <TextField {...params} />}
      //         />
      //       </LocalizationProvider> */}