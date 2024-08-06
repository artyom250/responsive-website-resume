import React from 'react';
import "../styles/AboutMe.css";
import "../styles/BlockThree.css";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

function Certifications() {
  return (
    <div className='block'>
        <div className="aboutdesc">
            <div className="icon">
                <img src="./icons/4.svg" alt="image" />
            </div>
            <br /><br />
            <p className="blockHead">Licenses & Certifications</p>
            <p className="blockDesc work">Professional accreditations and certifications demonstrating expertise and compliance with industry standards.</p>

            <div className="block-details">
                <div className="block-grid">
                    <div>
                        <p className="det-h">Data Analysis & Visualization</p>
                        <p className="det-type">NexusWorks • Issued Jan 2024</p>
                        <a href="#" className='det-link'>
                            <i><BiSolidRightTopArrowCircle /></i>
                            <span>Show Credentials</span>
                        </a>
                    </div>
                    <div>
                        <p className="det-h">Data Analysis Professional</p>
                        <p className="det-type">StellarWave • Issued Nov 2023</p>
                        <a href="#" className='det-link'>
                            <i><BiSolidRightTopArrowCircle /></i>
                            <span>Show Credentials</span>
                        </a>
                    </div>
                    <div>
                        <p className="det-h">Data Analytics Mastery</p>
                        <p className="det-type">BrightByte • Issued Aug 2023</p>
                        <a href="#" className='det-link'>
                            <i><BiSolidRightTopArrowCircle /></i>
                            <span>Show Credentials</span>
                        </a>
                    </div>
                    <div>
                        <p className="det-h">Strategic Business Consulting</p>
                        <p className="det-type">DataSpark • Issued Feb 2023</p>
                        <a href="#" className='det-link'>
                            <i><BiSolidRightTopArrowCircle /></i>
                            <span>Show Credentials</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certifications