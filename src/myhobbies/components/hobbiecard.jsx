import React, { useEffect, useRef } from 'react'
import './hobbiecard.css'


const HobbieCard=(props)=>{

    const ref = useRef();
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
                ref.current.style.opacity = "1";
                // ref.current.style.transform = "translate(0) translateY(0) translateZ(2)";
                observer.disconnect();
      }
    }
    )
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => { observer.disconnect() }
    }, [])

    return(
        <div ref={ref} key={props && props.key} style={{ height : props && props.height && props.height , backgroundColor : (props && props.name === "music" && "black") || (props && props.name === "game" && "rgb(1, 195, 186)")}} className="hobbiecard-full-div">
            {props && console.log(props.translate)}
            <div className="hobbiecard-inner-div">
                <div className="hobbiecard-icon-div">
                    <i  className={props && props.icon && props.icon + ` hobbiecard-${props && props.name && props.name}-icon`}></i>
                </div>
                <div className="hobbiecard-text-div">
                    <p>{props && props.title && props.title}</p>
                </div>
            </div>
            <div style={{backgroundColor : (props && props.name === "music" && "white") || (props && props.name === "game" && "greenyellow")}} className="hobbie-card-background"></div>
        </div>
    );
}

export default React.memo(HobbieCard);