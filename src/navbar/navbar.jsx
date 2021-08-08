import React , { useEffect , useCallback, useRef} from 'react'
import Navlink from './components/navlink'
import './navbar.css'
import MyPic from '../images/myPic.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Navbar = () =>{

    
    const scrollPos = useRef(0);
    const navbarDropShadowRef = useRef(false);
    const navbarButtonRef = useRef();
    

    const handleScroll=useCallback((e)=>{
      const window = e.currentTarget;
      const navbarOuterDiv = window.document.querySelector(".portfolio-navbar-outer-div");
      
      scrollPos.current = window.pageYOffset;
      
      if(scrollPos.current >= 50){
        if(!navbarDropShadowRef.current){
          navbarDropShadowRef.current = true;
          navbarOuterDiv.style.filter = "drop-shadow(0px 10px 5px black)";
        }
      }else{
          if(navbarDropShadowRef.current){
            navbarDropShadowRef.current = false;
            navbarOuterDiv.style.filter = "none";
          }
      }

    },[])



   
    useEffect(()=>{
      
      window.addEventListener('scroll',handleScroll,{passive : true});
  
      return()=>{
        window.removeEventListener('scroll' , handleScroll);
      }
  
    },[handleScroll])



    const navbarButtonClickHandler=()=>{
      const hamburgerButton = window.document.querySelector(".navbar-burger-button");
      const mobileNavbar = window.document.querySelector(".mobile-navbar-right-div");
        hamburgerButton.classList.toggle("open");
        if(navbarButtonRef.current.classList.contains("open")){
          mobileNavbar.style.top = "0";
        }else{
          mobileNavbar.style.top = "-500%";
        }
    }


    function LogoSvg(props) {
      return (
        <svg
          className="navbar-logo"
          id="prefix__Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x={0}
          y={0}
          viewBox="0 0 200 200"
          xmlSpace="preserve"
          {...props}
        >
          <style>{".prefix__st6{fill:none}"}</style>
          <radialGradient
            id="prefix__SVGID_1_"
            cx={105.083}
            cy={101.599}
            r={81.461}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#FFDD07" />
            <stop offset={0.254} stopColor="#FFDD07" />
            <stop offset={0.619} stopColor="#FFDD07" />
            <stop offset={1} stopColor="#FFDD07" />
          </radialGradient>
          <path
            d="M30.87 56.16c9.09-14.95 23.38-21.03 33.5-25.18 30.05-12.31 57.57-6.93 63.67-5.62 30.29 6.52 63.83 27.2 61.18 40.37-2.29 11.37-29.69 3.05-53.06 22.06-32.57 26.48-14.12 70.85-41.55 86.98C69 189.83 23.08 170.2 20.88 152.5c-2.07-16.67 34.9-30.5 30.52-45.55-2.98-10.24-21.33-8.01-26.77-21.87-4.45-11.33 3.36-24.17 6.24-28.92z"
            fill="url(#prefix__SVGID_1_)"
          />
          <path d="M124.23 113.25z" fill="#00aeef" />
          <path d="M81.23 96.32z" fill="#808285" />
          <linearGradient
            id="prefix__SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1={51.589}
            y1={98.714}
            x2={120.26}
            y2={32.602}
          >
            <stop offset={0} stopColor="#206a5d" />
            <stop offset={0.06} stopColor="#266e59" stopOpacity={0.976} />
            <stop offset={0.137} stopColor="#367a4d" stopOpacity={0.944} />
            <stop offset={0.223} stopColor="#508e39" stopOpacity={0.909} />
            <stop offset={0.316} stopColor="#75a91d" stopOpacity={0.871} />
            <stop offset={0.342} stopColor="#81b214" stopOpacity={0.86} />
            <stop offset={0.676} stopColor="#ffcc29" />
            <stop offset={0.767} stopColor="#fdbd2b" />
            <stop offset={0.942} stopColor="#f79532" />
            <stop offset={1} stopColor="#f58634" />
          </linearGradient>
          <path
            d="M130.4 46.62c-.12.74-.3 1.77-.59 2.98-.37 1.57-.8 3.38-1.72 5.46-.44.99-1.29 2.88-2.97 4.94-.45.55-2.19 2.63-4.89 4.32-1.5.94-4.44 2.47-10.4 3.07-11.23 1.12-16.29.18-23.62 1.87 0 0-9.45 2.02-12.49 6.23-2.23 3.08-2.71 6.45-2.71 6.45-.13.93-1.08 7.95 3.54 11.87 1.99 1.68 4.26 2.2 5.81 2.4-5.83-.62-13.05-2.33-20.37-6.55-5.53-3.19-9.67-6.98-12.67-10.32.44-2.84 1.34-6.16 3.1-9.57.82-1.58 4.11-7.66 11.23-12.16 2.69-1.71 6.47-3.72 14.98-5 10.01-1.52 22.58-.56 30.79-1.11 5.41-.35 13.35-1.42 22.98-4.88z"
            fill="url(#prefix__SVGID_2_)"
          />
          <linearGradient
            id="prefix__SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1={137.91}
            y1={114.402}
            x2={57.888}
            y2={176.92}
          >
            <stop offset={0.005} stopColor="#132c33" />
            <stop offset={0.072} stopColor="#133139" stopOpacity={0.972} />
            <stop offset={0.158} stopColor="#133e49" stopOpacity={0.937} />
            <stop offset={0.254} stopColor="#125463" stopOpacity={0.897} />
            <stop offset={0.342} stopColor="#126e82" stopOpacity={0.86} />
            <stop offset={0.676} stopColor="#51c4d3" />
            <stop offset={0.728} stopColor="#60c8d5" />
            <stop offset={0.83} stopColor="#88d1db" />
            <stop offset={0.969} stopColor="#c9e0e5" />
            <stop offset={1} stopColor="#d8e3e7" />
          </linearGradient>
          <path
            d="M130.75 139.6c-.75 2.75-2.18 7.74-6.29 12.49-4.78 5.52-10.49 7.6-13.42 8.64-5.45 1.92-11.53 1.87-23.7 1.77-5.02-.04-10.05.21-15.07-.05-.91-.05-2.99-.17-5.74.12-1.55.16-2.74.39-4.86.8-2.47.48-3.7.71-5.27 1.21-1.93.62-3.4 1.29-4.2 1.66-1.28.6-2.36 1.18-3.2 1.67.8-4.27 3.33-14.43 12.14-20.6 4.74-3.33 9.68-4.37 12.7-5 8.67-1.83 11.64.44 22.79-1.45 8.13-1.39 10.27-3.23 11.36-4.99 1.97-3.19 1.16-7.11.83-8.61-.2-.9-1.16-5.49-4.99-8.33-.6-.44-1.24-.78-1.49-.91-1.2-.65-2.27-1.05-3.03-1.28a86.764 86.764 0 0132.47 9.27c.35 3.01.53 7.9-1.03 13.59z"
            fill="url(#prefix__SVGID_3_)"
          />
          <linearGradient
            id="prefix__SVGID_4_"
            gradientUnits="userSpaceOnUse"
            x1={136.39}
            y1={125.541}
            x2={52.159}
            y2={91.243}
          >
            <stop offset={0.005} stopColor="#082032" />
            <stop offset={0.12} stopColor="#0e2537" />
            <stop offset={0.269} stopColor="#1e3444" />
            <stop offset={0.406} stopColor="#334756" />
            <stop offset={0.7} stopColor="#2c394b" stopOpacity={0.86} />
            <stop offset={0.933} stopColor="#cf4831" stopOpacity={0.969} />
            <stop offset={1} stopColor="#ff4c29" />
          </linearGradient>
          <path
            d="M131.79 126c-3.6-1.85-7.93-3.76-12.94-5.37-6.41-2.07-12.39-2.88-18.17-3.75-1.85-.28-3.26-.45-3.85-.52-4.24-.51-7.79-.73-10.33-.83-2.28-.22-5.45-.6-9.19-1.28-4.76-.87-7.27-1.33-10.62-2.61-7.46-2.83-10.84-6.55-11.73-7.56-.32-.36-.53-.63-.79-.97-1.87-2.36-5.84-7.45-6.93-15.26-.13-.95-.55-4.21.1-8.51 3 3.34 7.14 7.12 12.67 10.32 7.68 4.43 15.26 6.11 21.22 6.65.34.03.68.07 1.01.08 6.6.33 11.25.76 12.38.83 2.71.17 8.84.54 14.98 2.9 9.47 3.64 17.99 11.64 21.15 21.37.12.36.21.66.26.85.36 1.27.62 2.49.78 3.66z"
            fill="url(#prefix__SVGID_4_)"
          />
          <path
            className="prefix__st6"
            d="M82.24 96.4c-.33-.02-.67-.05-1.01-.08M86.05 116.57h.21c2.2-.05 4.52-.03 6.98.08h.13c2.14.1 4.37.26 6.67.52"
          />
        </svg>
      )
    }




    return(
        <div  className="portfolio-navbar">
            <div onClick={navbarButtonClickHandler} className="navbar-burger-button-div">
              <div ref={navbarButtonRef} className="navbar-burger-button"></div>
            </div>
        <div  className="mobile-navbar-right-div">
          <div className="mobile-navbar-inner-div">
                    <div className="mobile-navbar-image-div">
                        <LazyLoadImage
                          effect="blur"
                          src={MyPic}
                          alt="my img" 
                          className="mobile-navbar-image"
                          height="20rem"
                          width="20rem"
                          placeholderSrc={process.env.PUBLIC_URL + "/logo192.png"}
                        />
                    </div>
                    <div className="mobile-navbar-navlink-div">
                        <p 
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
                          const mobileNavbar = window.document.querySelector(".mobile-navbar-right-div");
                          mobileNavbar.style.top = "-500%";
                          document.querySelector(`#portfolio-about-me`).scrollIntoView({behavior: 'smooth'});
                        }} 
                        className="mobile-navbar-navlink"><i className="far fa-user"></i>{" ABOUT ME"}</p>
                        <p
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
                          const mobileNavbar = window.document.querySelector(".mobile-navbar-right-div");
                          mobileNavbar.style.top = "-500%";
                          document.querySelector(`#portfolio-my-journey`).scrollIntoView({behavior: 'smooth'});
                        }}
                        className="mobile-navbar-navlink"><i className="fas fa-train"></i>{" MY JOURNEY"}</p>
                        <p 
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
                          const mobileNavbar = window.document.querySelector(".mobile-navbar-right-div");
                          mobileNavbar.style.top = "-500%";
                          document.querySelector(`#portfolio-my-projects`).scrollIntoView({behavior: 'smooth'});
                        }}
                        className="mobile-navbar-navlink"><i className="far fa-copy"></i>{" PROJECTS"}</p>
                        <p 
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
                          const mobileNavbar = window.document.querySelector(".mobile-navbar-right-div");
                          mobileNavbar.style.top = "-500%";
                          document.querySelector(`#portfolio-contact-me`).scrollIntoView({behavior: 'smooth'});
                        }}
                        className="mobile-navbar-navlink"><i className="far fa-id-card"></i>{" CONTACT ME"}</p>
                    </div>
          </div>

          <svg width="0" height="0">
        <defs>
          <clipPath id="myMobileNavbarCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,1
									L 0,.1
                  C .6 0, .9 .3, 1 0
									L 1,0
									L 1,1
									Z"
            />
          </clipPath>
        </defs>
      </svg>


        </div>
        <div className="portfolio-navbar-outer-div">
          <div className="portfolio-navbar-inner-div">

            <div className="portfolio-navbar-logo-div">
                <LogoSvg/>
            </div>
              <div className="portfolio-navbar-navlinks-div">
                        <Navlink
                            text="ABOUT ME"
                            location="portfolio-about-me"
                        />
                        <Navlink
                            text="MY JOURNEY"
                            location="portfolio-my-journey"
                        />
                        <Navlink
                            text="PROJECTS"
                            location="portfolio-my-projects"
                        />
                        <Navlink
                            text="CONTACT"
                            location="portfolio-contact-me"
                        />
            </div>
          </div>
        </div>


        <svg width="0" height="0">
        <defs>
          <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
            <path
                d="M 0,.8
									L 0,0
									L 1,0
									L 1,0.5
									C .6 .05,.4 1, 0 .8
									Z"
            />
          </clipPath>
        </defs>
      </svg>

      <svg width="0" height="0">
        <defs>
          <clipPath id="myMobileCurve" clipPathUnits="objectBoundingBox">
            <path
                d="M 0,.7
									L 0,0
									L 1,0
									L 1,0.4
									C .5 .05,.5 1, 0 .7
									Z"
            />
          </clipPath>
        </defs>
      </svg>

      <svg width="0" height="0">
        <defs>
          <clipPath id="myMobileCurve2" clipPathUnits="objectBoundingBox">
            <path
                d="M 0,.8
									L 0,0
									L 1,0
									L 1,0.4
									C .5 .1,.5 1, 0 .8
									Z"
            />
          </clipPath>
        </defs>
      </svg>

    </div>
    );
}

export default React.memo(Navbar);