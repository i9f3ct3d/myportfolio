import React, { useEffect, useState } from 'react';
import JourneyCard from './components/journeycard';
import KuehsPic from '../images/kuehsPic.svg'
import RKCPPic from '../images/RKCP.svg'
import Crla from '../images/crla.svg'
import NitD from '../images/NitDPic.svg'

import './journey.css'

const Journey=()=>{

    const [windowWidth , setWindowWidth] = useState()

    const windowWidthChangeHandler=()=>{
        setWindowWidth(window.innerWidth);
    }

    useEffect(()=>{

        window.addEventListener('resize',windowWidthChangeHandler);
        
        return()=>{
            window.removeEventListener('resize',windowWidthChangeHandler);
        }

    },[])

    return(
        <div id="portfolio-my-journey" className="journey-full-div">
            <div className="myhobbies-headline-outer-div">
                <div className="myhobbies-headline-inner-div">
                    <span>My</span>
                    <span>{" Journey"}</span>
                </div>
                <div className="myhobbies-underline"></div>
            </div>
            <div className="journey-inner-div">
                <JourneyCard
                    time="2005 - 2010"
                    schoolName="R.K.C.P."
                    stream="Nursery - IV"
                    marks="I guess I used to be first in every year"
                    background={RKCPPic}
                    backgroundColor="#D8BE97"
                    year = "2005"
                    dir={windowWidth ?  (windowWidth <= 500 ? "-50px" : "-400px") : window.innerWidth <=500 ? "-50px" : "-400px"}
                />
                <JourneyCard
                    time="2010 - 2016"
                    schoolName="K.U.E.H.S"
                    stream="Science | Arts | Commerce"
                    marks="ME : 89.14%"
                    background={KuehsPic}
                    year = "2010"
                    dir={windowWidth ?  (windowWidth <= 500 ? "50px" : "400px") : window.innerWidth <=500 ? "50px" : "400px"}
                />
                <JourneyCard
                    time="2016 - 2018"
                    schoolName="C.R.L.A."
                    stream="Science"
                    marks="HS : 83.8%"
                    background={Crla}
                    year = "2016"
                    dir={windowWidth ?  (windowWidth <= 500 ? "-50px" : "-400px") : window.innerWidth <=500 ? "-50px" : "-400px"}
                    backgroundColor="#B48462"
                />
                <JourneyCard
                    time="2019 - present"
                    schoolName="N.I.T. Durgapur"
                    stream="Computer Science & Engineering"
                    marks="CGPA : 8.41"
                    background={NitD}
                    year = "2019"
                    dir={windowWidth ?  (windowWidth <= 500 ? "50px" : "400px") : window.innerWidth <=500 ? "50px" : "400px"}
                    isLast={true}
                />
                <br/>
            </div>
        </div>
    );

}

export default Journey;