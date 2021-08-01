import React from 'react'
import './hobbiecard.css'


const HobbieCard=(props)=>{

    return(
        <div key={props && props.key} style={{height : props && props.height && props.height , backgroundColor : (props && props.name === "music" && "black") || (props && props.name === "game" && "rgb(1, 195, 186)")}} className="hobbiecard-full-div">
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