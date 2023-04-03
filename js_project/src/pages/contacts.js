import React, { useState } from 'react';
import contactfig from './dog_letter.webp';
  
const Contact = () => {

  const [userText, setUserText] = useState('');

  const textChange = (e) => {
    setUserText(e.target.value);
  }

  const textSubmit = () => {
    let userTextSave = userText;
    console.log(userText);
    setUserText("");
    alert('Your message was submitted. Thank you for your contact!') 
  }


  return (
    <div>
      <div className='contacts'>
        <h1>We are glad to see you on our page! We will be happy to advise you on feeding and caring for your pets!</h1> 
      </div>

      <div className='contactUser'>
        <div className='dogMail'>
          <img src={contactfig} alt="Dog with a Letter"></img>
        </div>
        
        <div className="userText">
          <h1 id="userHeader">Feel free to contact us using the box below:</h1>
          <textarea id="userBox" onChange={textChange} value={userText} placeholder="Write something to us..."></textarea>
          <button id="userButton" onClick={textSubmit}>Submit</button>
        </div>
      </div>

      <footer>
        	<p>© 2023 Dog Lovers Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
  
export default Contact;