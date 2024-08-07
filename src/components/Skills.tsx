import React from 'react';
import { useState } from 'react';
import "../styles/AboutMe.css";
import "../styles/BlockOne.css";
import "../styles/BlockFour.css";
import { BiCheck } from "react-icons/bi";

function Skills() {
    const [skills] = useState([
        "Data Analysis",
        "Machine Learning",
        "Statistical Modeling",
        "Data Visualization",
        "Big Data Analytics",
        "Predictive Modeling",
        "Deep Learning",
        "Data Mining",
        "Statistical Inference",
        "Hypothesis Testing",
        "Data Cleaning"
    ]);

    const [skills2] = useState([
        "Strategic Planning",
        "Business Analysis",
        "Market Research",
        "Financial Analysis",
        "Problem-Solving",
        "Project Management",
        "Risk Assessment",
        "Negotiation Skills"
    ]);

  return (
    <div className='block' id='skills'>
        <div className="aboutdesc">
            <div className="icon">
                <img src="./icons/5.svg" alt="image" />
            </div>
            <br /><br />
            <p className="blockHead">Professional Skills</p>
            <p className="blockDesc work">Key competencies essential for navigating and excelling in various professional contexts.</p>

            <div className="block-details">
                <div className='skill-block'>
                    <p className="det-h">Data Science</p>
                    <div className="skill">
                        {skills.map((skill, index) => (
                            <div className='det-date' key={index}>
                                <i><BiCheck /></i>
                                <p>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='skill-block'>
                    <p className="det-h">Business Consultation</p>
                    <div className="skill">
                        {skills2.map((skill, index) => (
                            <div className='det-date' key={index}>
                                <i><BiCheck /></i>
                                <p>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills