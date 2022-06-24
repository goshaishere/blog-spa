import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import styles from './Blog.module.scss'
import {getCalls, getEmpList} from '../../actions/rates'
import { Carousel } from './elements/carousel/Carousel'
import { Filter } from './elements/filter/Filter'
import { Cards } from "./elements/cards/Cards"

export const Blog = () => {
    return (
        <div>
            <Carousel />
            <Filter />
            <Cards />
        </div>
    )
}