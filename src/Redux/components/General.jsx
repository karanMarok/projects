import React from 'react'
import { useSelector } from 'react-redux';
import Hero from './Hero'
import Carousel from './Carousel'
import PhotoContent from './PhotoContent'
import Contents from './Contents'
import Photos from './Photos'
import Empty from './Empty';

const General = () => {

    const values = useSelector(state => state.webpage.payload);
    const component = {
        "Hero_Section": Hero,
        "Carousel_Slider": Carousel,
        "Half_Content_Half_Photo": PhotoContent,
        "Text_Only": Contents,
        "Photo_Only": Photos
    }
    const empty = Empty
    const contents = values?.content;
    let check = !!contents?contents:[]
    return (
        <>
            <div className="container-fluid">
                {check.map((item, index) => {
                    let Component = !!component?.[item] ? component[item] : empty;
                    console.log(item)
                    return (
                        <>
                            <Component />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default General