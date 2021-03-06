import React,{ useEffect, useRef , Suspense , lazy} from 'react';

import './myprojects.css';
import {IoIosArrowBack , IoIosArrowForward} from 'react-icons/io'
const ProjectCard = lazy(()=>import('./components/projectCard'));

const maxPostCardNo = 4;

const MyProjects=()=>{

    const postCardNo = useRef(1);

    useEffect(()=>{
        let ele = window.document.querySelector(".myprojects-carousel-scroll-full-div");
        ele.scrollTo(0,0);
    },[])

    const carouselRightArrowClickHandler=()=>{
        let ele = window.document.querySelector(".myprojects-carousel-scroll-full-div");
        let scrollEle = window.document.querySelector(".projectcard-full-div").clientWidth;

        
        if(postCardNo.current+1 > maxPostCardNo){

            ele.scrollBy({
                left : -3*scrollEle,
                behavior : 'smooth'
            })

            postCardNo.current = 1;
            
        }else{

            ele.scrollBy({
                left : scrollEle,
                behavior : 'smooth'
            })
            postCardNo.current += 1;
        }

    }

    const carouselLeftArrowClickHandler=()=>{
        let ele = window.document.querySelector(".myprojects-carousel-scroll-full-div");
        let scrollEle = window.document.querySelector(".projectcard-full-div").clientWidth;

        if(postCardNo.current-1 < 1){
            
            ele.scrollBy({
                left : (3)*scrollEle,
                behavior : 'smooth'
            })

            postCardNo.current = maxPostCardNo;

        }else{
            
            ele.scrollBy({
                left : -scrollEle,
                behavior : 'smooth'
            })

            postCardNo.current-=1;
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

            <Suspense fallback={<div style={{height :"1170px" , width : "100%" , display : "flex" , justifyContent : "center" , alignItems : "center"}}><i className="fas fa-spinner projectcard-backgroundimage-div-loading-background"></i></div>}>
            <div className="myprojects-outer-div">
                <div className="myprojects-inner-div">
                    <div onClick={carouselLeftArrowClickHandler} className="myprojects-carousel-left-button">
                        <div className="myprojects-carousel-left-button-svg">
                        <IoIosArrowBack/>
                        </div>
                        <div className="myprojects-carousel-left-button-svg2">
                        <IoIosArrowBack/>
                        </div>
                    </div>
                    <div onClick={carouselRightArrowClickHandler} className="myprojects-carousel-right-button">
                        <div className="myprojects-carousel-right-button-svg">
                        <IoIosArrowForward/>
                        </div>

                        <div className="myprojects-carousel-right-button-svg2">
                        <IoIosArrowForward/>
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
                                details="A portfolio site made using React"
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
            </Suspense>
        </div>
    );

}

export default React.memo(MyProjects);
