import React from 'react';
import "../styles/Hero.css";
import { BiMailSend } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";

function Email() {
  return (
    <div className='Email'>
        <center><img src="./logo.webp" alt="image" /></center>
        <center><p className="heading email">Feel Free to Reach Out</p></center>
        <center><p className="desc eml">Let's start a productive conversation</p></center>
        <div className="hero-links e-link">
            <a href="#">
                <i><BiMailSend /></i>
                <span>Send Email</span>
            </a>
        </div>
        <div className="socials">
            <a href="#"><BiLogoLinkedinSquare /></a>
            <a href="#"><BiLogoFacebookCircle /></a>
            <a href="#"><BiLogoTelegram /></a>
            <a href="#"><BiLogoTwitter /></a>
        </div>
    </div>
  )
}

export default Email