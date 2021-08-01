import React from 'react';
import './projectCard.css'
import ChatherePic from '../../images/Chathere.jpg'
import PostifyPic from '../../images/postify.png'
import JustmailitPic from '../../images/justmailit.png'
import Myportfolio from '../../images/portfolioPic.png'


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


    return(
        <div id={`postCard${props && props.no && props.no}`} className="projectcard-full-div">
                <img src={props && props.backImg && chooseBackImg(props.backImg)} alt="" className="projectcard-backgroundImage"/>
            <div className="projectcard-inner-div">
                <div className="projectcard-links-div">
                    <a style={{cursor : "pointer"}}  className="projectcard-github-link" href={props && props.link && props.link}><i className="fab fa-github"></i>{" Github"}</a>
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