import React from "react";
import profileImage from "../Images/Satyajit_Profile.jpeg";

export default function Header(){
    return(
        <div className="header_div">
            <img className="Header-image" src={profileImage} alt=""/>
            <h4 className="Header-name">Satyajit Bhapkar</h4>
            <small className ="Header-profile">Full Stack Developer</small>
            <h5 className="Header-website">Satyajit Bhapkar Website</h5>
        </div>
    )
}