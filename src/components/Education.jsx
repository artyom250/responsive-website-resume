import React from 'react';
import "../styles/AboutMe.css";
import "../styles/BlockTwo.css";
import { BiCalendar } from 'react-icons/bi';

function Education() {
  return (
    <div className='block' id='education'>
        <div className="aboutdesc two">
            <div className="icon">
                <img src="./icons/3.svg" alt="image" />
            </div>
            <br /><br />
            <p className="blockHead">Education</p>
            <p className="blockDesc work">Degrees and certifications in the specialized fields of data science and business analytics.</p>
            <div className="block-details">
                <div className='study'>
                    <div>
                        <p className="det-h">Princeton University</p>
                        <p className="det-type">Master’s degree • Data Science</p>
                    </div>
                    <div>
                        <div className='det-date'>
                            <i><BiCalendar /></i>
                            <p>Sep 2015 • Dec 2016</p>
                        </div>
                    </div>
                </div>
                <div className='study'>
                    <div>
                        <p className="det-h">Montclair State University</p>
                        <p className="det-type">Bachelor’s degree • Artificial Intelligence</p>
                    </div>
                    <div>
                        <div className='det-date'>
                            <i><BiCalendar /></i>
                            <p>Sep 2011 • Jun 2015</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education