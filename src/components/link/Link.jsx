import React from 'react'
import styles from './Link.module.scss'
import { Link, useMatch } from 'react-router-dom'



export const CustomLink = (props) => {
    const match = useMatch(props.to)
    //const text =   style={{marginLeft: '48px'}}
    return (
        <div>
            <Link to={props.to} style={{
                textDecoration: "none",
                color: '#FFFFFF',
                // height: '20px',
                // fontFamily: 'Montserrat',
                // fontStyle: 'normal',
                // fontWeight: '500',
                // fontSize: '16px',
                // lineHeight: '20px',
            }}>
                <div className={styles.text}>{props.text}</div>
            </Link>

        </div>

    )
}