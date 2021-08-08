import React, { useRef } from 'react';
import './inputComponent.css';

const InputComponent=(props)=>{

    const placeholderRef = useRef();

    const inputOnFocusHandler=(e)=>{
        e.target.style.borderColor = "#FFDD07";
        placeholderRef.current.classList.add("shit-placeholder")
    }
    
    const inputOnBlurHandler=(e)=>{
        if(!e.target.value){
            e.target.style.borderColor = "#303136";
            placeholderRef.current.classList.remove("shit-placeholder")
        }
    }


    if(props && props.type && props.type === "textarea"){
        return(
            <div style={{ height: props && props.height && props.height, width : props && props.width && props.width}} className="inputcomponent-full-div">
                <textarea onFocus={inputOnFocusHandler} onBlur={inputOnBlurHandler} required style={{resize :"none"}} className="inputcomponent-input" type={props && props.type && props.type}/>
                <span ref={placeholderRef} style={{top : "32px"}} className="inputcomponent-placeholder">{props && props.placeholder && props.placeholder}</span>
            </div>
        );
    }

    return(
        <div style={{height: props && props.height && props.height, width : props && props.width && props.width}} className="inputcomponent-full-div">
            <input onFocus={inputOnFocusHandler} onBlur={inputOnBlurHandler} required className="inputcomponent-input" type={props && props.type && props.type}/>
            <span ref={placeholderRef} className="inputcomponent-placeholder">{props && props.placeholder && props.placeholder}</span>
        </div>
    );
}

export default React.memo(InputComponent);