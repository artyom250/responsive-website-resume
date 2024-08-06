import React from 'react';
import "../styles/Hero.css";
import { BiMailSend } from "react-icons/bi";
import { BiSolidDownload  } from "react-icons/bi";

function Hero() {
  return (
    <div className='Hero'>
        <div className="subhead">
            <div className='sub'> 
                <div className="dot"></div>
                <p>Available for Work</p>
            </div>
        </div>
        <center><p className="heading">Thomas Scott</p></center>
        <center><p className="desc">Senior Data Scientist & Business Consultant</p></center>
        <div className="hero-links">
            <a href="#">
                <i><BiMailSend /></i>
                <span>Send Email</span>
            </a>
            <a href="#">
                <BiSolidDownload />
                <span>Download CV</span>
            </a>
        </div>
    </div>
  )
}

export default Hero