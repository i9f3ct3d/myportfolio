import React,{Suspense , lazy} from 'react';
import './journey.css'
const JourneyCard = lazy(()=>import('./components/journeycard'));


const Journey=()=>{

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
                <Suspense fallback={
                <div className="journeyloading-screen">
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>

                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>

                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>

                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>

                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>

                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>

                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>

                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>

                    <div className="journeyloading-screen-big-div">
                    </div>
                    <div className="journeyloading-screen-small-div">
                    </div>
                </div>}>
                <JourneyCard
                    time="2005 - 2010"
                    schoolName="R.K.C.P."
                    stream="Nursery - IV"
                    marks="I guess I used to be first in every year"
                    background="rkcp"
                    backgroundColor="#D8BE97"
                    year = "2005"
                    dir = "left"
                />
                <JourneyCard
                    time="2010 - 2016"
                    schoolName="K.U.E.H.S"
                    stream="Science | Arts | Commerce"
                    marks="ME : 89.14%"
                    background="kuehs"
                    year = "2010"
                    dir = "right"    
                />
                <JourneyCard
                    time="2016 - 2018"
                    schoolName="C.R.L.A."
                    stream="Science"
                    marks="HS : 83.8%"
                    background="crla"
                    year = "2016"
                    dir = "left"
                    backgroundColor="#B48462"
                />
                <JourneyCard
                    time="2019 - present"
                    schoolName="N.I.T. Durgapur"
                    stream="Computer Science & Engineering"
                    marks="CGPA : 8.41"
                    background="nitd"
                    year = "2019"
                    dir = "right" 
                    isLast={true}
                />
                </Suspense>
                <br/>
            </div>
        </div>
    );

}

export default React.memo(Journey);