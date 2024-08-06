import React from 'react';
import "../styles/AboutMe.css";
import "../styles/BlockOne.css";
import {  BiCalendar } from 'react-icons/bi';

function Awards() {
  return (
    <div className='block'>
        <div className="aboutdesc">
            <div className="icon">
                <img src="./icons/7.svg" alt="image" />
            </div>
            <br /><br />
            <p className="blockHead">Honors & Awards</p>
            <p className="blockDesc work">Acknowledgments for exceptional achievements and contributions in professional endeavors.</p>

            <div className="block-details">
                <div className="block-grid">
                    <div>
                        <p className="det-h">Data Science Excellence Award</p>
                        <p className="det-type">Issued by Nexus • Data Science</p>
                        <p className="det-desc awar">Recognizing outstanding contributions in pioneering data-driven solutions and strategic insights.</p>
                        <div className="det-date">
                            <i><BiCalendar /></i>
                            <p>Dec 2023</p>
                        </div>
                    </div>
                    <div>
                        <p className="det-h">Business Innovation Award</p>
                        <p className="det-type">Issued by CCRSolution • Consulting</p>
                        <p className="det-desc awar">Commending exemplary expertise in business consulting, driving innovative strategies.</p>
                        <div className="det-date">
                            <i><BiCalendar /></i>
                            <p>Dec 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Awards