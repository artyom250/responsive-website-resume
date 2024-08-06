import React from 'react';
import "../styles/AboutMe.css";
import { BiMap } from "react-icons/bi";

function AboutMe() {
  return (
    <div className='AboutMe' id='profile'>
        <div className="aboutme">
            <div className="photo">
                <img src="./photo.jpg" alt="image" />
            </div>
            <div className="aboutdesc">
                <div className="icon">
                    <img src="./icons/1.svg" alt="image" />
                </div>
                <br /><br />
                <p className="blockHead">Professional Profile</p>
                <p className="blockDesc">Accomplished Senior Data Scientist & Business Consultant with a proven track record of leveraging advanced analytics to drive strategic decision-making and optimize business processes. Demonstrated expertise in developing innovative solutions to complex problems, coupled with exceptional communication skills to effectively convey insights to stakeholders at all levels.</p>
                <div className="aboutFlex">
                    <i><BiMap /></i>
                    <p>Based in Phoenix, Arizona, USA.</p>
                </div>
            </div>
        </div>
        <div className="aboutdesc two">
            <center><p className='work-p'>Worked With</p></center>
            <div className="worked-img">
                <img src="./clients/1.svg" alt="image" />
                <img src="./clients/2.svg" alt="image" />
                <img src="./clients/3.svg" alt="image" />
                <img src="./clients/4.svg" alt="image" />
            </div>
        </div>
    </div>
  )
}

export default AboutMe