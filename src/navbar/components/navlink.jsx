import React from 'react'

import './navlink.css'

const Navlink=(props)=>{

    const navlinkClickHandler=()=>{
        document.querySelector(`#${props && props.location && props.location}`).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    return(
        <div onClick={navlinkClickHandler} className="portfolio-navbar-navlink-div navlink-aboutme">
            <span className="portfolio-navbar-navlink">{props && props.text}</span>
            <div className="navlink-underline"></div>
        </div>
    );

}

export default React.memo(Navlink);