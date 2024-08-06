import React from 'react';
import "../styles/AboutMe.css";
import "../styles/BlockOne.css";
import "../styles/BlockTwo.css";

function Languages() {
  return (
    <div className='block'>
        <div className="aboutdesc two">
            <div className="icon">
                <img src="./icons/6.svg" alt="image" />
            </div>
            <br /><br />
            <p className="blockHead">Languages</p>
            <p className="blockDesc work">Proficient in multiple languages, facilitating effective communication and collaboration in diverse settings.</p>
            <div className="block-details">
                <div className='study'>
                    <div>
                        <p className="det-h">English</p>
                        <p className="det-type">Native or bilingual proficiency</p>
                    </div>
                </div>
                <div className='study'>
                    <div>
                        <p className="det-h">French</p>
                        <p className="det-type">Professional working proficiency</p>
                    </div>
                </div>
                <div className='study'>
                    <div>
                        <p className="det-h">Spanish</p>
                        <p className="det-type">Elementary proficiency</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Languages