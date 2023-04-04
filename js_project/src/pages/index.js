import React, { useState } from "react";
import introfig from './dogs-collection.avif';
import BMICal from './BMICal.webp';
import Care from './dog_care.png';
import Shop from './shop.png';
import { Link } from "react-router-dom";

const Home = () => {

  const [textColor, setTextColor] = useState('#413d3d');

  const MouseOver = () => {
    setTextColor('rgb(236, 156, 7)');
  };

  const MouseOut = () => {
    setTextColor('#413d3d');
  };


  return (
    <div>
      <h1 className="title"> Dogs Lovers Club</h1>
      <div className="intro">
        <p id="pIntro" className="flex-child" 
           style={{ color: textColor }}
           onMouseOver={MouseOver}
           onMouseOut={MouseOut}>
          Welcome to our website, where we're all about paws and laughter! If
          you're a dog lover, you're in the right place. And if you're not a dog
          lover, well... we're not sure why you're here, but we're glad you are!
          So, sit, stay, and enjoy our website.
          <br />
          <br />
          We promise it'll be more fun than chasing your tail!
        </p>
        <div className="ImgHover">
          <img src={introfig} className="flex-child" id="intro_fig" alt="Introcdution Figure"/>
          <div className="hover-text">
            <p>You can trust your dog to guard your house but never trust your dog to guard your sandwich Lol</p>
          </div>
        </div>
      </div>

      <div className="links">
        <div className="link-container">
          <img src={BMICal} alt="MBI Calculator Logo"></img>
          <Link to="/blogs">
            <p>Calculate the BMI of your dog</p>
          </Link>
        </div>
        <div className="link-container">
          <img src={Care} alt="MBI Calculator Logo"></img>
          <a href="https://www.smalldoorvet.com/learning-center/behavior/top-10-dog-training-tips"
             target="_blank"
             rel="noreferrer">
            <p>Learn how to treat your dog</p>
          </a>
        </div>
        <div className="link-container">
        <img src={Shop} alt="MBI Calculator Logo"></img>
        <a href="https://nypost.com/article/best-online-pet-stores/"
             target="_blank"
             rel="noreferrer">
            <p>Buy the best products</p>
          </a>
        </div>
      </div>

      <footer>
        <p>© 2023 Dog Lovers Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
