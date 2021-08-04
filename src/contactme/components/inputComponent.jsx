import React from 'react';
import './inputComponent.css';

const InputComponent=(props)=>{


    if(props && props.type && props.type === "textarea"){
        return(
            <div style={{ height: props && props.height && props.height, width : props && props.width && props.width}} className="inputcomponent-full-div">
                <textarea required style={{resize :"none"}} className="inputcomponent-input" type={props && props.type && props.type}/>
                <span style={{top : "32px"}} className="inputcomponent-placeholder">{props && props.placeholder && props.placeholder}</span>
            </div>
        );
    }

    return(
        <div style={{height: props && props.height && props.height, width : props && props.width && props.width}} className="inputcomponent-full-div">
            <input required  className="inputcomponent-input" type={props && props.type && props.type}/>
            <span className="inputcomponent-placeholder">{props && props.placeholder && props.placeholder}</span>
        </div>
    );
}

export default React.memo(InputComponent);