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
                />
                <HobbieCard
                    title="Sports"
                    icon="fas fa-futbol"
                    name="sport"
                    height="200px"
                />
                <HobbieCard
                    title="Music"
                    icon="fas fa-headphones-alt"
                    name="music"
                />
            </div>
        </div>
    );
}

export default MyHobbies;