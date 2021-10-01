import React from 'react';
import './navbarCloser.css'

const NavbarCloser=()=>{

    const NavbarCloserClickHandler=()=>{

        document.querySelector(".portfolio-navbar").style.top="-100%";

    }

    return(
        <div onClick={NavbarCloserClickHandler} className="navabr-closer-full-div">
            bal
        </div>
    )

}

export default React.memo(NavbarCloser);