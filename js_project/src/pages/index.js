import React from "react";
import introfig from './dogs-collection.avif';

const Home = () => {
  return (
    <div>
      <div className="intro">
        <p id="pIntro" className="flex-child">
          Welcome to our website, where we're all about paws and laughter! If
          you're a dog lover, you're in the right place. And if you're not a dog
          lover, well... we're not sure why you're here, but we're glad you are!
          So, sit, stay, and enjoy our website.
          <br />
          <br />
          We promise it'll be more fun than chasing your tail!
        </p>
        <img
          src={introfig}
          className="flex-child"
          id="intro_fig"
          alt="Introcdution Figure"
        />
      </div>

      <div className="links">
        <div className="link-container">
          <a
            href="https://unblast.com/30-free-dog-breeds-vector-icons-ai/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={introfig} alt="MBI Calculator Logo"></img>
          </a>
          <p>Calculate the MBI of your pet here!</p>
        </div>
        <div className="link-container">
          <a
            href="https://unblast.com/30-free-dog-breeds-vector-icons-ai/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={introfig} alt="MBI Calculator Logo"></img>
          </a>
          <p>Calculate the MBI of your pet here!</p>
        </div>
        <div className="link-container">
          <a
            href="https://unblast.com/30-free-dog-breeds-vector-icons-ai/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={introfig} alt="MBI Calculator Logo"></img>
          </a>
          <p>Calculate the MBI of your pet here!</p>
        </div>
      </div>

      <footer>
        <p>© 2023 Dog Lovers Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
