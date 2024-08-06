import React from 'react';
import "../styles/AboutMe.css";
import "../styles/BlockOne.css";
import "../styles/BlockFour.css";
import { BiCheck } from "react-icons/bi";

function Skills() {
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
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Data Analysis</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Machine Learning</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Statistical Modeling</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Data Visualization</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Big Data Analytics</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Predictive Modeling</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Deep Learning</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Data Mining</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Statistical Inference</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Hypothesis Testing</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Data Cleaning</p>
                        </div>
                    </div>
                </div>
                <div className='skill-block'>
                    <p className="det-h">Business Consultation</p>
                    <div className="skill">
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Strategic Planning</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Business Analysis</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Market Research</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Financial Analysis</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Problem-Solving</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Project Management</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Risk Assessment</p>
                        </div>
                        <div className='det-date'>
                            <i><BiCheck /></i>
                            <p>Negotiation Skills</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills