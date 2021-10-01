import React from 'react'
import HobbieCard from './components/hobbiecard'

import './myhobbies.css'

const MyHobbies=()=>{
    return(
        <div className="myhobbies-full-div">
        <div className="myhobbies-headline-outer-div">
            <div className="myhobbies-headline-inner-div">
                <span>My</span>
                <span>{" Hobbies"}</span>
            </div>
            <div className="myhobbies-underline"></div>
        </div>
            <div className="myhobbie-hobbiecard-outer-div">
                <HobbieCard
                    title="Playing Games"
                    icon="fas fa-gamepad"
                    name="game"
                    // translate="translateX(-50px)"
                />
                <HobbieCard
                    title="Sports"
                    icon="fas fa-futbol"
                    name="sport"
                    height="200px"
                    // translate="translateY(-100px)"
                />
                <HobbieCard
                    title="Music"
                    icon="fas fa-headphones-alt"
                    name="music"
                    // translate="translateX(50px)"
                />
            </div>
        </div>
    );
}

export default React.memo(MyHobbies);