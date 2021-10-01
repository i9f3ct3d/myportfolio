import React from 'react';
import InputComponent from './components/inputComponent';
import './contactme.css';
import {RiMailSendLine} from 'react-icons/ri'

const ContactMe=()=>{

    return(
        <div id="portfolio-contact-me" className="contactme-full-div">
            <div className="contactme-inner-div">
            <div className="myhobbies-headline-outer-div">
                <div style={{backgroundColor : "#05191F"}} className="myhobbies-headline-inner-div">
                    <span><i className="far fa-id-card"></i>{" Contact"}</span>
                    <span>{" Me"}</span>
                </div>
                <div className="myhobbies-underline"></div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
                <InputComponent
                    placeholder="Name"
                />
                <br/>
                <InputComponent
                    placeholder="Email"
                    type="email"
                />
                <br/>
                <InputComponent
                    placeholder="Message"
                    type="textarea"
                    height="10rem"
                    width="100%"
                />
                <div className="contactme-send-button-div">
                    <button className="contactme-send-button"><RiMailSendLine/>{" Contact"}</button>
                    <div className="contact-icon-div"><RiMailSendLine/></div>
                </div>
                <div className="contactme-contact-links-div">
                    <div className="contactme-contact-links-div1">
                        <a style={{backgroundColor : "rgb(13,17,23)" , padding : "0.5rem 1rem 0.5rem 0.3rem"}} href="https://github.com/i9f3ct3d" className="contactme-contact-links"><i className="fab fa-github"></i><span className="contactme-contact-links-text">{" Github"}</span></a>
                        <a href="https://www.linkedin.com/in/sushanta-saren/" className="contactme-contact-links"><i className="fab fa-linkedin-in"></i><span className="contactme-contact-links-text">{" Linkedin"}</span></a>
                    </div>
                    <div className="contactme-contact-links-div2">
                        <a href="https://www.facebook.com/sushanta.saren.73/" className="contactme-contact-links"><i className="fab fa-facebook-f"></i><span className="contactme-contact-links-text">{" Facebook"}</span></a>
                        <a href="https://twitter.com/SushantaSaren7" style={{backgroundColor : "white" , color : "#109AFB"}} className="contactme-contact-links"><i className="fab fa-twitter"></i><span className="contactme-contact-links-text">{" Twitter"}</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ContactMe);