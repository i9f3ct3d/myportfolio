import React, { useState } from 'react'

import './navlink.css'

const Navlink=(props)=>{
    const [isFocused , setIsFocused] = useState(false);

    const navlinkonMouseOverHandler=()=>{
        setIsFocused(true);
    }

    const navlinkonMouseOutHandler=()=>{
        setIsFocused(false);
    }

    const navlinkClickHandler=()=>{
        document.querySelector(`#${props && props.location && props.location}`).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    return(
        <div onClick={navlinkClickHandler} onMouseOver={navlinkonMouseOverHandler} onMouseOut={navlinkonMouseOutHandler} className="portfolio-navbar-navlink-div navlink-aboutme">
            <span className="portfolio-navbar-navlink">{props && props.text}</span>
            <div style={{width : isFocused && "100%" , opacity : isFocused && "1"}} className="navlink-underline"></div>
        </div>
    );

}

export default Navlink;