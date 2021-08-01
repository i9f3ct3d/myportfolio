import React, { Fragment, useEffect, useRef, useState } from 'react';
import { GiFrayedArrow } from 'react-icons/gi'
import './journeycard.css'


const JourneyCard=(props)=>{


    const ref = useRef();

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => { observer.disconnect() }
    }, [])


    return(
        <div className="journeycard-full-div">
            <div className="journeycard-year-div">
                <div className="journeycard-year-circle">
                    {props && props.year && props.year}
                </div>
                <div className="arrow-div">
                    <GiFrayedArrow/>
                </div>
            </div>
            <div style={{opacity : isIntersecting && "1" , transform : isIntersecting ? "none" : (props && props.dir && `translateX(${props.dir})`)}} className="journeycard-timestamp-div">
                <p>{props && props.time && props.time}</p>
            </div>
            <div ref={ref} style={{opacity : isIntersecting && "1" , transform : isIntersecting ? "none" : (props && props.dir && `translateX(${props.dir})`)}} className="journeycard-details-div">
                <div className="journeycard-details-inner-div">
                    <div style={{backgroundImage:  `url(${props && props.background && props.background})`}} className="journeycard-school-div">
                    <p className="journeycard-school-name">{props && props.schoolName && props.schoolName}</p>
                    </div>
                    <div className="journeycard-academics-div">
                        <div className="journeycard-stream-div">
                            <p>Stream :</p>
                            <span>{props && props.stream && props.stream}</span>
                        </div>
                        <div className="journeycard-marks-div">
                            <p>Performance :</p>
                            <span>{props && props.marks && props.marks}</span>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor : props && props.backgroundColor && props.backgroundColor}} className="journeycard-details-background-div">

                </div>
            </div>
            <div style={{opacity : props && props.isLast && "0"}} className="bottom-arrow-div">
                <GiFrayedArrow/>
            </div>
        </div>
    );

}

export default JourneyCard;