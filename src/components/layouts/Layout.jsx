import React from "react"
import styles from './Layout.module.scss'
import { Outlet } from 'react-router-dom'
import {Header} from '../header/Header'
import {Footer} from '../footer/Footer'


export const Layout = () => {
    return (
        <div >
            <Header />
            <Outlet />
            <Footer />
       </ div>
    )
}