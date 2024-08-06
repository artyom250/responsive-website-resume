import React from 'react';
import "../styles/BlockOne.css";
import "../styles/BlockTwo.css";
import "../styles/Form.css";

function Form() {
  return (
    <div className='block'>
        <div className="aboutdesc">
            <div className="icon">
                <img src="./icons/9.svg" alt="image" />
            </div>
            <br /><br />
            <p className="blockHead">Get in Touch with Me!</p>
            <p className="blockDesc work">Have a question, feedback, or just want to say hello? I'd love to hear from you! Your communication matters to me!</p>

            <div className="block-details">
                <form>
                    <input type="text" placeholder='Full Name' required />
                    <input type="email" placeholder='Email' required />
                    <input type="text" placeholder='Message' required />
                    <button type="submit">Send a Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form