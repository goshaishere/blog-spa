import React from "react"
import { Carousel } from './elements/carousel/Carousel'
import { Filter } from './elements/filter/Filter'
import { Cards } from "./elements/cards/Cards"

export const Blog = () => {
    return (
        <div >
            <Carousel  />
            <Filter />
            <Cards />
        </div>
    )
}