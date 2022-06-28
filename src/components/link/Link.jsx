import React from 'react'
import styles from './Link.module.scss'
import { Link, useMatch } from 'react-router-dom'


export const CustomLink = (props) => {
    const match = useMatch(props.to)
    return (
        <div>
            <Link to={props.to} style={{
                textDecoration: "none",
                color: '#FFFFFF',
            }}>
                <div className={styles.text}>{props.text}</div>
            </Link>

        </div>

    )
}