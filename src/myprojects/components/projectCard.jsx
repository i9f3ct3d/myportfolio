import React, { useRef } from 'react';
import './projectCard.css'
import ChatherePic from '../../images/Chathere.jpg'
import PostifyPic from '../../images/postify.jpg'
import JustmailitPic from '../../images/justmailit.jpg'
import Myportfolio from '../../images/portfolioPic.jpg'


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

    return(
        <div id={`postCard${props && props.no && props.no}`} className="projectcard-full-div">
                <img src={props && props.backImg && chooseBackImg(props.backImg)} alt="" className="projectcard-backgroundImage"/>
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