import React,{ useEffect, useState } from 'react';

import './myprojects.css';
import {BiLeftArrow , BiRightArrow} from 'react-icons/bi'
import ProjectCard from './components/projectCard';

const maxPostCardNo = 4;

const MyProjects=()=>{

    const [postCardNo , setPostCardNo] = useState(1);

    useEffect(()=>{
        let ele = window.document.querySelector(".myprojects-carousel-scroll-full-div");
        ele.scrollTo(0,0);
    },[])

    const carouselRightArrowClickHandler=()=>{
        let ele = window.document.querySelector(".myprojects-carousel-scroll-full-div");
        let scrollEle = window.document.querySelector(".projectcard-full-div").clientWidth;

        
        if(postCardNo+1 > maxPostCardNo){
            
            setPostCardNo(1);
            ele.scrollBy({
                left : -3*scrollEle,
                behavior : 'smooth'
            })
            
        }else{
            setPostCardNo(postCardNo+1);
            ele.scrollBy({
                left : scrollEle,
                behavior : 'smooth'
            })
        }

    }

    const carouselLeftArrowClickHandler=()=>{
        let ele = window.document.querySelector(".myprojects-carousel-scroll-full-div");
        let scrollEle = window.document.querySelector(".projectcard-full-div").clientWidth;

        if(postCardNo-1 < 1){
            setPostCardNo(maxPostCardNo);
            ele.scrollBy({
                left : (3)*scrollEle,
                behavior : 'smooth'
            })

        }else{
            setPostCardNo(postCardNo-1);
            ele.scrollBy({
                left : -scrollEle,
                behavior : 'smooth'
            })
        }
    }



    return(
        <div id="portfolio-my-projects" className="myprojects-full-div">
            <div className="myhobbies-headline-outer-div">
                <div style={{borderRadius : "10px"}} className="myhobbies-headline-inner-div">
                    <span>My</span>
                    <span>{" Projects"}</span>
                </div>
                <div style={{backgroundColor : "black"}} className="myhobbies-underline"></div>
            </div>

            <div className="myprojects-outer-div">
                <div className="myprojects-inner-div">
                    <div onClick={carouselLeftArrowClickHandler} className="myprojects-carousel-left-button">
                        <div className="myprojects-carousel-left-button-svg">
                        <BiLeftArrow/>
                        </div>
                    </div>
                    <div onClick={carouselRightArrowClickHandler} className="myprojects-carousel-right-button">
                        <div className="myprojects-carousel-right-button-svg">
                        <BiRightArrow/>
                        </div>
                    </div>
                    <div className="myprojects-carousel-scroll-full-div">
                        <div className="myprojects-carousel-scroll-inner-div">
                            <ProjectCard
                                key={1}
                                no={1}
                                header="Posti-fy"
                                details="A social media site made using MERN"
                                backImg="postify"
                                link="https://github.com/i9f3ct3d/POSTIFY-frontend"
                            />
                            <ProjectCard
                                key={2}
                                no={2}
                                header="Chathere"
                                details="A Chatting app made using Flutter"
                                backImg="chathere"
                                link="https://github.com/i9f3ct3d/Chathere-apk"
                            />
                            <ProjectCard
                                key={3}
                                no={3}
                                header="justmailit"
                                details="A Mail scheduler made using MERN"
                                backImg="justmailit"
                                link="https://github.com/i9f3ct3d/just-mail-it_frontend"
                            />
                            <ProjectCard
                                key={4}
                                no={4}
                                header="My Portfolio"
                                details="A portfolio site made using MERN"
                                backImg="myportfolio"
                                link="https://github.com/i9f3ct3d/myportfolio"
                            />
                        </div>
                    </div>
                    

                </div>

                    <svg width="0" height="0">
                        <defs>
                            <clipPath id="myProjectsCurve" clipPathUnits="objectBoundingBox">
                            <path
                                    d="M 0,1
                                        L 0 .3
                                        C .3 0, .8 .3, 1 0.3
                                        L 1,0.3
                                        L 1,1
                                        C .7 .9, .2 .7, 0 1
                                        Z"
                            />
                            </clipPath>
                        </defs>
                    </svg>
            </div>
        </div>
    );

}

export default React.memo(MyProjects);
