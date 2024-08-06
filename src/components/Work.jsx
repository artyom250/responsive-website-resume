import React from 'react';
import "../styles/AboutMe.css";
import "../styles/BlockOne.css";
import { useState } from 'react';
import { BiMap, BiCalendar } from 'react-icons/bi';

function Work() {
  const [jobs, setJobs] = useState([
    {
      title: 'Data Scientist & Business Consultant',
      type: 'TechNova • Full-Time',
      location: 'Phoenix, Arizona, USA',
      description: 'Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving transformative initiatives and delivering strategic insights to optimize organizational performance and facilitate informed decision-making.',
      date: 'Jun 2021 - Present',
    },
    {
      title: 'Data Analyst & Business Strategist',
      type: 'SwiftEdge • Contract',
      location: 'Dallas, Texas, USA',
      description: 'Skillfully combining data analysis proficiency with strategic business acumen, adeptly navigating complex datasets to inform strategic decision-making and drive organizational growth initiatives.',
      date: 'Oct 2017 - May 2021',
    },
    {
      title: 'Analytics Specialist & Business Advisor',
      type: 'NexusWorks • Full-Time',
      location: 'Houston, Texas, USA',
      description: 'Leveraging specialized analytics expertise alongside strategic business advisory skills, providing actionable insights and guidance to optimize business performance and achieve strategic objectives.',
      date: 'Jan 2016 - Sep 2017',
    },
    {
      title: 'Business Consultant & Analytics Expert',
      type: 'ProActive • Internship',
      location: 'Newark, New Jersey, USA',
      description: 'Seamlessly integrating business consulting prowess with advanced analytics expertise, delivering tailored solutions and actionable insights to drive organizational success and enhance strategic decision-making processes.',
      date: 'Aug 2014 - Jan 2016',
    },
  ]);

  return (
    <div className="block" id='experience'>
      <div className='aboutdesc'>
        <div className="icon">
          <img src="./icons/2.svg" alt="image" />
        </div>
        <br /><br />
        <p className="blockHead">Work Experience</p>
        <p className="blockDesc work">Proven track record in data science and business consulting, delivering impactful insights and results across industries.</p>

        <div className="block-details">
          {jobs.map((job, index) => (
            <div key={index} className="detail">
              <div>
                <p className="det-h">{job.title}</p>
                <p className="det-type">{job.type}</p>
                <div className="aboutFlex det">
                  <i><BiMap /></i>
                  <p>{job.location}</p>
                </div>
                <p className="det-desc">{job.description}</p>
              </div>
              <div>
                <div className='det-date'>
                  <i><BiCalendar /></i>
                  <p>{job.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work