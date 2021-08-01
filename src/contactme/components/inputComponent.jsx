import react, { useState } from 'react';
import './inputComponent.css';

const InputComponent=(props)=>{

    const [inputValue , setInputValue] = useState("");

    if(props && props.type && props.type === "textarea"){
        return(
            <div style={{border : inputValue && "2px solid #FFDD07", height: props && props.height && props.height, width : props && props.width && props.width}} className="inputcomponent-full-div">
                <textarea style={{resize :"none", borderColor : inputValue && "#FFDD07"}} onChange={(e)=>{setInputValue(e.target.value)}} className="inputcomponent-input" type={props && props.type && props.type} value={inputValue}/>
                <span style={{top : inputValue ? "0" : "32px" , left : inputValue && "30px" , background : inputValue && "linear-gradient(to bottom, #1D1D1F 50%, rgb(22,22,23) 50%)" , paddingLeft : inputValue && "10px" , color : inputValue && "#FFDD07"}} className="inputcomponent-placeholder">{props && props.placeholder && props.placeholder}</span>
            </div>
        );
    }

    return(
        <div style={{border : inputValue && "2px solid #FFDD07", height: props && props.height && props.height, width : props && props.width && props.width}} className="inputcomponent-full-div">
            <input style={{borderColor : inputValue && "#FFDD07"}} onChange={(e)=>{setInputValue(e.target.value)}} className="inputcomponent-input" type={props && props.type && props.type} value={inputValue}/>
            <span style={{top : inputValue && "0" , left : inputValue && "30px" , background : inputValue && "linear-gradient(to bottom, #1D1D1F 50%, rgb(22,22,23) 50%)" , paddingLeft : inputValue && "10px" , color : inputValue && "#FFDD07"}} className="inputcomponent-placeholder">{props && props.placeholder && props.placeholder}</span>
        </div>
    );
}

export default InputComponent;