import React, {useEffect, useRef} from "react";

const brands = [
  "balenciaga.svg",
  "bape.svg",
  "carhartt.svg",
  "chanel.svg",
  "comme.svg",
  "nikesb.svg",
  "northFace.jpg",
  "represent.svg",
  "stussy.svg",
  "y3.svg",
  "asics.svg",
  "huf.svg",
  "acoldwall.svg"
];


export default function BrandsGrid(){

    const sliderRef = useRef(null)

    useEffect(()=>{
        const handleScroll = ()=>
        {
            const scrollPosition = window.scrollY
            const slider = sliderRef.current
            if(!slider)
                return
            if(window.innerWidth > 600){
                slider.style.transform = `translateX(${-scrollPosition}px)`
            }
            else
            {
                slider.style.transform = "translateX(0)"
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[])

    return(
        <div>
            <p className="brands-text-upper">BRANDURI DISPONIBILE</p>
            <div className="top-brands-banner">

                <div className="brands-slider" ref={sliderRef}>
                    {brands.map((logo)=>(
                        <div className="logo-box" key={logo}>
                            <img src={`/BrandsGrid/${logo}`} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}