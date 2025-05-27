import React, {useState, useEffect, useRef} from 'react'
//import mainMenu from '../styles/mainMenu'

const images = [
    "/SlideBanner/mainBanner1.jpg",
    "/SlideBanner/mainBanner2.jpg",
    "/SlideBanner/mainBanner3.jpg"
]


export default function SlideBanner(){

    const [slideIndex,setSlideIndex] = useState(0)
    const intervalRef = useRef(null)


    useEffect(()=> {
        startInterval()
        return ()=> clearInterval(intervalRef.current)
    }, [slideIndex])

    const startInterval = ()=> {
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(()=>{
            setSlideIndex(prev=>(prev+1) % images.length)
        },8000)
    }

    const showSlide = (index)=> {
        if(index<0) 
            index = images.length - 1
        else if(index>=images.length)
            index = 0
        setSlideIndex(index)
        startInterval()
    }


    const prevSlide = () => showSlide(slideIndex-1)
    const nextSlide = () => showSlide(slideIndex+1)

    return(
        <div className="slider-banner-main">
            <div className="slider-container">

                {images.map((src,idx)=>(
                    <img
                        key = {src}
                        className = {`slides_images${idx === slideIndex ? " displaySlide" : ""}`}
                        src={src}
                        style={{display: idx===slideIndex ? "block" : "none"}}
                    
                    />
                ))}

            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
            <div>
                {/*AICI O SA TREBUIASCA SA ADAUG UN TEXT IN POZE*/}
            </div>
        </div>
    )
}
