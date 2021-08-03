import React, { useEffect, useRef, useState } from 'react';
import { GiFrayedArrow } from 'react-icons/gi'
import './journeycard.css'

import KuehsPic from '../../images/kuehsPic.svg'
import RKCPPic from '../../images/RKCP.svg'
import Crla from '../../images/crla.svg'
import NitD from '../../images/NitDPic.svg'


const JourneyCard=(props)=>{

    const [isIntersecting, setIntersecting] = useState(true)
    const isIntersectingRef = useRef(1);


    const ref = useRef();
    // const observer = new IntersectionObserver(
    //   ([entry]) => {
    //       if(isIntersectingRef.current < 3){
    //           setIntersecting(entry.isIntersecting);
    //       }
    // }
    // )

    // useEffect(()=>{
    //     isIntersectingRef.current = isIntersectingRef.current+1;
    // },[isIntersecting])
  
    // useEffect(() => {
    //   observer.observe(ref.current)
    //   return () => { observer.disconnect() }
    // }, [])





    const getTransform=(direction)=>{
        if(direction === "left"){
            if(window.innerWidth <= 500){
                return "-50px";
            }
            return "-400px";
        }else{
            if(window.innerWidth <= 500){
                return "50px";
            }
            return "400px";
        }
    }

    const getBackImg=(backImgName)=>{
        if(backImgName === "rkcp"){
            return RKCPPic;
        }
        if(backImgName === "kuehs"){
            return KuehsPic;
        }
        if(backImgName === "crla"){
            return Crla;
        }
        if(backImgName === "nitd"){
            return NitD;
        }
    }


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
            <div style={{opacity : isIntersecting && "1" , transform : isIntersecting ? "none" : (props && props.dir && `translateX(${getTransform(props.dir)})`)}} className="journeycard-timestamp-div">
                <p>{props && props.time && props.time}</p>
            </div>
            <div ref={ref} style={{opacity : isIntersecting && "1" , transform : isIntersecting ? "none" : (props && props.dir && `translateX(${getTransform(props.dir)})`)}} className="journeycard-details-div">
                <div className="journeycard-details-inner-div">
                    <div style={{backgroundImage:  `url(${props && props.background && getBackImg(props.background)})` , borderColor : props && props.backgroundColor && props.backgroundColor}} className="journeycard-school-div">
                    <p className="journeycard-school-name">{props && props.schoolName && props.schoolName}</p>
                    </div>
                    <div className="journeycard-academics-div">
                        <div className="journeycard-stream-div" style={{borderColor : props && props.backgroundColor && props.backgroundColor}}>
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

export default React.memo(JourneyCard);