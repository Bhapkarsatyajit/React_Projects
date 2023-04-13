import React from "react";
import email_Icon from "../Images/email-icon.jpg";
import linkdin_Icon from "../Images/linkdib-icon.png";

export default function Main(){
    return(
        <div className="div-main">
            <button className="Email_button">
               <img className="Email-Img" src={email_Icon} alt=""/> 
               <span className="Email-text">Email</span> 
            </button>
            <button className="Linkdin-button">
                <img className="Linkdin-Img" scr={linkdin_Icon} alt=""/>
                <span>
                Linkdin
                </span>
            </button>
        </div>
    )
}