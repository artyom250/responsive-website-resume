import React, { useState } from 'react';
import "../styles/Navbar.css";
import { BiPen } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const sidebarFunc = () => { setSidebar(!sidebar) } 

  return (
    <div className='Navbar'>
        <nav>
            <div className="nav-middle">
                <a href="#" className="logo">
                    <img src="./logo.webp" alt="image" />
                </a>
                <ul className={sidebar ? "show" : ""}>
                    <li><a href="#" onClick={sidebarFunc}>Home</a></li>
                    <li><a href="#profile" onClick={sidebarFunc}>Profile</a></li>
                    <li><a href="#experience" onClick={sidebarFunc}>Experience</a></li>
                    <li><a href="#education onClick={sidebarFunc}">Education</a></li>
                    <li><a href="#skills" onClick={sidebarFunc}>Skills</a></li>
                    <li><a href="#" onClick={sidebarFunc}>Contact Me</a></li>
                </ul>
                <a href="mailto:creashion293@gmail.com" className='contact-link'>
                    <i><BiPen /></i>
                    <span>Contact Me</span>
                </a>
                <i className='toggle' onClick={sidebarFunc}><BiGridAlt /></i>
            </div>
        </nav>
    </div>
  )
}

export default Navbar