import React , {useState , useEffect , useCallback} from 'react'
import Navlink from './components/navlink'
import './navbar.css'
import Logo from '../images/logo.gif'
import MyPic from '../images/myPic.svg'

const Navbar = () =>{

    const [scrollPos , setScrollPos] = useState(0);
    const [isScrollingDown , setIsScrollingDown] = useState(false);

    const handleScroll=useCallback((e)=>{

      const window = e.currentTarget;
      if(window.pageYOffset > scrollPos){
        setIsScrollingDown(true);
      }else if(window.pageYOffset < scrollPos){
        setIsScrollingDown(false);
      }
      setScrollPos(window.pageYOffset);
    },[scrollPos])
  
    useEffect(()=>{
      
      window.addEventListener('scroll',handleScroll,{passive : true});
  
      return()=>{
        window.removeEventListener('scroll' , handleScroll);
      }
  
    },[handleScroll])

    const navbarButtonClickHandler=()=>{
      const hamburgerButton = window.document.querySelector(".navbar-burger-button");
        hamburgerButton.classList.toggle("open");
        setNavbarButtonClicked(!navbarButtonClicked);
    }

    const [navbarButtonClicked , setNavbarButtonClicked] = useState(false);
    const [windowWidth , setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        setWindowWidth(window.innerWidth)
    },[window.innerWidth])

    return(
        <div style={{top : !navbarButtonClicked && windowWidth < 800 && scrollPos > 400 && isScrollingDown && "-300px"}} className="portfolio-navbar">
            <div onClick={navbarButtonClickHandler} style={{top : !navbarButtonClicked && windowWidth < 800 && scrollPos > 400 && isScrollingDown && "-100%"}} className="navbar-burger-button-div">
              <div className="navbar-burger-button"></div>
            </div>
        <div style={{display : navbarButtonClicked && "block"}} className="navbar-backdrop"></div>
        <div style={{right : navbarButtonClicked && "0"}} className="mobile-navbar-right-div">
          <div className="mobile-navbar-inner-div">
                    <div className="mobile-navbar-image-div">
                        <img src={MyPic} className="mobile-navbar-image"/>
                    </div>
                    <div className="mobile-navbar-navlink-div">
                        <p 
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
                          setNavbarButtonClicked(false);
                          document.querySelector(`#portfolio-about-me`).scrollIntoView({behavior: 'smooth'});
                        }} 
                        className="mobile-navbar-navlink"><i className="far fa-user"></i>{" ABOUT ME"}</p>
                        <p
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
                          setNavbarButtonClicked(false);
                          document.querySelector(`#portfolio-my-journey`).scrollIntoView({behavior: 'smooth'});
                        }}
                        className="mobile-navbar-navlink"><i className="fas fa-train"></i>{" MY JOURNEY"}</p>
                        <p 
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
                          setNavbarButtonClicked(false);
                          document.querySelector(`#portfolio-my-projects`).scrollIntoView({behavior: 'smooth'});
                        }}
                        className="mobile-navbar-navlink"><i className="far fa-copy"></i>{" PROJECTS"}</p>
                        <p 
                        onClick={()=>{
                          const hamburgerButton = window.document.querySelector(".navbar-burger-button");
                          hamburgerButton.classList.toggle("open");
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
        <div style={{backgroundColor : scrollPos >= 177 && "transparent" , filter : scrollPos >= 200 && "drop-shadow(0px 10px 2px rgba(0, 0, 0, 0.5))"}} className="portfolio-navbar-outer-div">
          <div className="portfolio-navbar-inner-div">

            <div className="portfolio-navbar-logo-div">
              <img src={Logo} className="navbar-logo"/>
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
                d="M 0,.9
									L 0,0
									L 1,0
									L 1,0.5
									C .7 .2,.5 .8, .1 .9, 0 .9
									Z"
            />
          </clipPath>
        </defs>
      </svg>

    </div>
    );
}

export default Navbar;