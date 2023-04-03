import React from "react";
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import { useState } from 'react';

const About = () => {
	const images  = [image1, image2, image3,image4,image5];

  	const imageTexts = [<><strong>Labrador Retriever</strong>: They are the most popular dog breed in the United States and are known for their friendly and outgoing personality. They are also excellent swimmers and love to retrieve items from water.</>,
	  					<><strong>Bulldog</strong>: This breed is known for its wrinkly face and muscular build. Despite their tough appearance, Bulldogs are generally calm and affectionate with their families.</>,
						<><strong>Beagle</strong>: These small dogs are known for their keen sense of smell and are often used in law enforcement for detecting contraband items. They are also very social and love to be around people.</>,
						<><strong>Siberian Husky</strong>: These dogs are known for their thick, fluffy coats and striking blue eyes. They were originally bred in northeastern Asia as working dogs and are known for their strength and endurance.</>,
						<><strong>Dachshund</strong>: This breed is commonly referred to as the "wiener dog" because of their long, sausage-like bodies. They were originally bred in Germany to hunt badgers and are known for their stubbornness and independent nature.</>];

  	const [currentImageIndex, setCurrentImageIndex] = useState(0);

  	function handleNextImage() {
    	setCurrentImageIndex((currentImageIndex + 1) % images.length);
  	}

  	function handlePrevImage() {
    	setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  	}

return (
	<div>
		<div>
    		<h1 className="gallery_welcome">
    			There is a huge variety of different dog breeds. 
				<br></br>
				But for each owner, his dog is the best!
			</h1>
    	</div>
		<div className="ContainerImg">
			<img className='ImgSize' src={images[currentImageIndex]} />
   		<div className="button_div"> 
			<button onClick={handlePrevImage}>Previous</button>
			<button onClick={handleNextImage}>Next</button></div>
			<div className="image_text_box">{imageTexts[currentImageIndex]}</div>
  		</div>
		
		<footer>
        	<p>© 2023 Dog Lovers Inc. All Rights Reserved.</p>
      	</footer>
  	</div>
	);
};

export default About;
