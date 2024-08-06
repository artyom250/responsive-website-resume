import React from 'react';
import "../styles/AboutMe.css";
import "../styles/BlockOne.css";

function Recommendations() {
  return (
    <div className='block'>
        <div className="aboutdesc two">
            <div className="icon">
                <img src="./icons/8.svg" alt="image" />
            </div>
            <br /><br />
            <p className="blockHead">Recommendations</p>
            <p className="blockDesc work">Endorsements and testimonials highlighting professional aptitude and contributions from colleagues and partners.</p>
            <div className="block-details">
                <div className='detail recommendation'>
                    <p className="det-h">Abby Nichols</p>
                    <p className="det-type">Data Engineer • Oct 2023</p>
                    <p className="det-desc rec">I am delighted to endorse Thomas Scott for his exemplary professionalism and remarkable contributions. Throughout our collaboration, Thomas consistently demonstrated a profound understanding of complex data dynamics and business intricacies. His innovative strategies and meticulous attention to detail have significantly elevated project outcomes. Thomas's dedication, coupled with his exceptional communication skills, makes him an invaluable asset to any endeavor.</p>
                </div>
                <div className='detail recommendation'> 
                    <p className="det-h">Steve Anderson</p>
                    <p className="det-type">Data Scientist • Nov 2022</p>
                    <p className="det-desc rec">It is with great pleasure that I recommend Thomas Scott for his outstanding proficiency and unwavering commitment. Thomas's adeptness in navigating intricate data landscapes, coupled with his astute business acumen, has consistently resulted in strategic insights of immense value.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recommendations