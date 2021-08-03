import React , {useState , useEffect , useCallback, useRef} from 'react'
import Navlink from './components/navlink'
import './navbar.css'
import Logo from '../images/logo.gif'
import MyPic from '../images/myPic.svg'

const Navbar = () =>{

    
    const scrollPos = useRef(0);
    const isScrollingDown = useRef(false);
    const windowWidth = useRef(window.innerWidth);
    const navbarGoUpRef = useRef(false);
    const navbarButtonClickedRef = useRef(false);
    const navbarDropShadowRef = useRef(false);

    
    const [navbarButtonClicked , setNavbarButtonClicked] = useState(false);
    const [navbarGoUp , setNavbarGoUp] = useState(false);
    const [navbarDropShadow , setNavbarDropShadow] = useState(false);

    const handleScroll=useCallback((e)=>{
      const window = e.currentTarget;
      if(window.pageYOffset > scrollPos.current){
          isScrollingDown.current = true;
      }else if(window.pageYOffset < scrollPos.current){
        
         isScrollingDown.current = false;
      }
      navbarPos()
      scrollPos.current = window.pageYOffset;
      
      if(scrollPos.current >= 50){
        if(!navbarDropShadowRef.current){
          navbarDropShadowRef.current = true;
          setNavbarDropShadow(true);
        }
      }else{
          if(navbarDropShadowRef.current){
            navbarDropShadowRef.current = false;
            setNavbarDropShadow(false);
          }
      }

    },[])





    const navbarPos=()=>{

        if(!navbarButtonClickedRef.current && windowWidth.current < 800 && scrollPos.current > 400 && isScrollingDown.current){
          if(!navbarGoUpRef.current){
              navbarGoUpRef.current = true;
              setNavbarGoUp(true);
          }
        }else{

          if(navbarGoUpRef.current){
            navbarGoUpRef.current = false;
            setNavbarGoUp(false);
          }
        }
    }

   
    useEffect(()=>{
      
      window.addEventListener('scroll',handleScroll,{passive : true});
  
      return()=>{
        window.removeEventListener('scroll' , handleScroll);
      }
  
    },[handleScroll])



    const navbarButtonClickHandler=()=>{
      const hamburgerButton = window.document.querySelector(".navbar-burger-button");
        hamburgerButton.classList.toggle("open");
        navbarButtonClickedRef.current = !navbarButtonClickedRef.current;
        setNavbarButtonClicked(prevNavbarButtonClicked=>!prevNavbarButtonClicked);
    }

    const handleWindowWidthChange=()=>{
        window.current = window.innerWidth;
    }

    useEffect(()=>{

        window.addEventListener('resize',handleWindowWidthChange);
        
        return()=>{
          window.addEventListener('resize',handleWindowWidthChange);
        }

    },[])


    return(
        <div style={{top : navbarGoUp && "-300px"}} className="portfolio-navbar">
            <div onClick={navbarButtonClickHandler} style={{top : navbarGoUp && "-100%"}} className="navbar-burger-button-div">
              <div className="navbar-burger-button"></div>
            </div>
        <div style={{display : navbarButtonClicked && "block"}} className="navbar-backdrop"></div>
        <div style={{right : navbarButtonClicked && "0"}} className="mobile-navbar-right-div">
          <div className="mobile-navbar-inner-div">
                    <div className="mobile-navbar-image-div">
                        <img src={MyPic} alt="my img" className="mobile-navbar-image"/>
                    </div>
                    <div className="mobile-navbar-navlink-div">
                        <p 
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
                          navbarButtonClickedRef.current = false;
                          setNavbarButtonClicked(false);
                          document.querySelector(`#portfolio-about-me`).scrollIntoView({behavior: 'smooth'});
                        }} 
                        className="mobile-navbar-navlink"><i className="far fa-user"></i>{" ABOUT ME"}</p>
                        <p
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
                          navbarButtonClickedRef.current = false;
                          setNavbarButtonClicked(false);
                          document.querySelector(`#portfolio-my-journey`).scrollIntoView({behavior: 'smooth'});
                        }}
                        className="mobile-navbar-navlink"><i className="fas fa-train"></i>{" MY JOURNEY"}</p>
                        <p 
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
                          navbarButtonClickedRef.current = false;
                          setNavbarButtonClicked(false);
                          document.querySelector(`#portfolio-my-projects`).scrollIntoView({behavior: 'smooth'});
                        }}
                        className="mobile-navbar-navlink"><i className="far fa-copy"></i>{" PROJECTS"}</p>
                        <p 
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
                          navbarButtonClickedRef.current = false;
                          setNavbarButtonClicked(false);
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
        <div style={{filter : navbarDropShadow && "drop-shadow(0px 10px 5px black)"}} className="portfolio-navbar-outer-div">
          <div className="portfolio-navbar-inner-div">

            <div className="portfolio-navbar-logo-div">
              <img src={Logo} alt="logo" className="navbar-logo"/>
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