import React, { useRef } from 'react';
import './projectCard.css'
import ChatherePic from '../../images/Chathere.jpg'
import PostifyPic from '../../images/postify.jpg'
import JustmailitPic from '../../images/justmailit.jpg'
import Myportfolio from '../../images/portfolioPic.jpg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ProjectCard=(props)=>{

    const chooseBackImg=(backImgName)=>{
        if(backImgName === "postify"){
            return PostifyPic;
        }
        if(backImgName === "chathere"){
            return ChatherePic;
        }
        if(backImgName === "justmailit"){
            return JustmailitPic;
        }
        if(backImgName === "myportfolio"){
            return Myportfolio;
        }
    }

    const ref = useRef();
    const loaderRef = useRef();

    return(
        <div id={`postCard${props && props.no && props.no}`} className="projectcard-full-div">
            <div className="projectcard-backgroundimage-div">
                <i ref={loaderRef} className="fas fa-spinner projectcard-backgroundimage-div-loading-background"></i>
                <LazyLoadImage
                    afterLoad={()=>{
                        loaderRef.current.remove();
                    }}
                    src={props && props.backImg && chooseBackImg(props.backImg)} 
                    alt="Project Pic" 
                    className="projectcard-backgroundImage"
                    height="100%"
                    width="100%"
                />
            </div>
            <div className="projectcard-inner-div">
                <div style={{cursor : "pointer"}} onClick={()=>{ref.current.click()}} className="projectcard-links-div">
                    <a ref={ref} style={{cursor : "pointer"}}  className="projectcard-github-link" href={props && props.link && props.link}><i className="fab fa-github"></i>{" Github"}</a>
                </div>
                <div className="projectcard-hover-drop">
                    <div className="projectcard-header-div">
                        <p>{props && props.header && props.header}</p>
                    </div>
                    <div className="projectcard-details-div">
                        <p>{props && props.details && props.details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ProjectCard);