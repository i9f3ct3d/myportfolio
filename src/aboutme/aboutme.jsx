import React, { useEffect, useRef } from 'react'

import './aboutme.css'
import aboutmeImg from '../images/myPic.svg'

const Aboutme=()=>{
    const ref = useRef();

    const observer = new IntersectionObserver(
      ([entry]) => {
        const aboutMe = window.document.getElementById("portfolio-about-me");
        if(entry.isIntersecting){
                aboutMe.style.transform = "translateY(0) translateZ(0)";
                observer.disconnect();
        }
        }
    )

  
    useEffect(() => {
      observer.observe(ref.current)
      return () => { observer.disconnect() }
    }, [])


    return(

        <div ref={ref} id="portfolio-about-me"  className="aboutme-full-div">
            <div className="aboutme-inner-div">
                <div className="aboutme-text-div">
                    <p>Hi guys , myself Sushanta Saren</p>
                    <span>I am a junior Computer Science & Engineering student in National Institute of Technology Durgapur.Right now I have developed a keen interest towards Cyber Security but Web Development has always been my cup of  <i style={{color:"#FFDD07" , textShadow :"2px 2px 5px grey"}} className="fas fa-mug-hot"></i></span>
                </div>
            </div>
            <div className="aboutme-image-div">
                <img
                    className="aboutme-image"
                    alt="My Img"
                    src={aboutmeImg}
                />
            </div>
        <svg width="0" height="0">
            <defs>
            <clipPath id="aboutMeCurve" clipPathUnits="objectBoundingBox">
                <path
                                            d="M 0,1
                                                L 0,.1
                                                C .3 0, .9 .3, 1 0
                                                L 1,0
                                                L 1,1
                                                Z"
                />
            </clipPath>
            </defs>
        </svg>
        </div>

    );
}

export default React.memo(Aboutme);