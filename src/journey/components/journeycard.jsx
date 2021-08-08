import React, { useEffect, useRef } from 'react';
import { GiFrayedArrow } from 'react-icons/gi'
import './journeycard.css'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import KuehsPic from '../../images/kuehsPic.jpg';
import RKCPPic from '../../images/RKCP.jpg';
import Crla from '../../images/crla.jpg';
import NitD from '../../images/NitDPic.jpg';


const JourneyCard=(props)=>{


    const ref = useRef();
    const timeStampRef = useRef();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
                ref.current.style.transform = "none";
                ref.current.style.opacity = "1";
                timeStampRef.current.style.transform = "none";
                timeStampRef.current.style.opacity = "1";
                observer.disconnect();
      }
    }
    )
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => { observer.disconnect() }
    }, [])


    const getTransform=(direction)=>{
        if(direction === "left"){
            if(window.innerWidth <= 500){
                return "-50px";
            }
            return "-400px";
        }else{
            if(window.innerWidth  <= 500){
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
            <div ref={timeStampRef} style={{transform : (props && props.dir && `translateZ(0) translateX(${getTransform(props.dir)})`)}} className="journeycard-timestamp-div">
                <p>{props && props.time && props.time}</p>
            </div>
            <div ref={ref} style={{transform : (props && props.dir && `translateZ(0) translateX(${getTransform(props.dir)})`)}} className="journeycard-details-div">
                <div className="journeycard-details-inner-div">

                    <div style={{borderColor : props && props.backgroundColor && props.backgroundColor}} className="journeycard-school-div">
                        <LazyLoadImage
                         height="100%" 
                         width="100%" 
                         className="journeycard-school-image" 
                         src={props && props.background && getBackImg(props.background)} 
                         placeholderSrc={process.env.PUBLIC_URL + "/logo192.png"} 
                        />
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