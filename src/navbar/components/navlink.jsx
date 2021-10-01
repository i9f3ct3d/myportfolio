import React, { useEffect, useRef } from 'react'

import './navlink.css'

const Navlink=(props)=>{

    const navlinkClickHandler=()=>{
        document.querySelector(`#${props && props.location && props.location}`).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }


    const mouseHoverHandler=()=>{

        const ele = document.querySelector(".portfolio-navbar");
        ele.style.opacity="1";

    }

    const mouseHoverOutHandler=()=>{

        const ele = document.querySelector(".portfolio-navbar");
        ele.style.opacity="0.8";

    }



    const ref = useRef();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
                ref.current.style.transform = "translateZ(0) translateX(-100px)"
                ref.current.style.opacity = "1"
                setTimeout(() => {
                    ref.current.style.transform = "translateZ(0) translateX(0)"
                }, 500);
                observer.disconnect();
      }
    }
    )
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => { observer.disconnect() }
    }, [])



    return(
        <div ref={ref} onMouseOut={mouseHoverOutHandler} onMouseOver={mouseHoverHandler} onClick={navlinkClickHandler} className="portfolio-navbar-navlink-div navlink-aboutme">
            <i className={props && props.icon + " navlink-icon"}></i>
            <span className="portfolio-navbar-navlink">{props && props.text}</span>
            <div className="navlink-underline"></div>
        </div>
    );

}

export default React.memo(Navlink);