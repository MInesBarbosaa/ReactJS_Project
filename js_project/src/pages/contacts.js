import React from 'react';
import introfig from './dogs-collection.avif';
  
const Contact = () => {
  return (
    <div>
      <div className='contacts'>
        <h1>We are glad to see you on our page! And we will be happy to advise you on feeding and caring for your pets! 
            Feel free to contact us on the following email: 
          <br></br>
          <br></br>
          DogLoversClub@gmail.com
        </h1>
      </div>

      <div className='dogMail'>
            <img src={introfig} alt="MBI Calculator Logo"></img>
      </div>
      
      <footer>
        	<p>© 2023 Dog Lovers Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
  
export default Contact;