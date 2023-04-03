import { useState } from "react";
import React from 'react';


const default_height = 102;
const default_weight = 25;

  
const BMI = () => {


  const [height, setHeight] = useState(default_height);
  const [weight, setWeight] = useState(default_weight);

  const calculateBmi = () => {
    return (weight / Math.pow((height/100), 2)).toFixed(1);
  }

let message;
const bmi = calculateBmi();

if (bmi >= 30.0) {
  message = <><strong>Obese:</strong> there are fat pads on the lower back and the tail base. Ribs, hip bones, and spine are under a thick layer of fat and difficult to feel. No waist is visible, and the belly may sag.</>;
} else if (bmi >= 25.0) {
  message = <><strong>Overweight:</strong> a layer of fat is present on the belly and at the base of the tail. Ribs, hip bones, and spine are hard to feel with a barely visible waist.</>;
} else if (bmi >= 18.5) {
  message = <><strong>Normal weight:</strong> a small amount of fat can be felt. Ribs, hip bones, and spine are easily felt (not seen!) with a visible waist. Congratulations, your dog is at a healthy weight.</>;
} else {
  message = <><strong>Underweight:</strong> very little fat can be felt under the skin. Ribs, hip bones, and spine are easily spotted.</>;
}

  return (
    <main id="Cal_page">
      
      <div id="BMI_intro">
        <h1 className="BMI_header">Calculate Your Dog's Body Mass Index</h1>
        <p>Body Mass Index (BMI) measures body fat based on weight and height. 
          It’s one of many measures to check how in shape your dog is.</p>
      </div>

      <div className="input_div">
        <h1 className="BMI_title">Dog BMI Calculator</h1>
      
        <p class="input_p">Weight: {weight} kg</p>
        <input
          className="input_range"
          onChange={(event) => setWeight(event.target.value)}
          type="range"
          step="1"
          min="1"
          max="110"/>
        <p class="input_p">Height: {height} cm</p>
        <input
          className="input_range"
          onChange={(event) => setHeight(event.target.value)}
          type="range"
          min="15"
          max="110"
        />
      </div>

      <div id="output_div">
        <p className="output_p">The BMI of your Dog is:</p>
        <p className="output_p">{calculateBmi()}</p> 
      </div>

      <div id="message_div">
        <p className="message">{message}</p>
      </div>
        

      <footer>
        	<p>© 2023 Dog Lovers Inc. All Rights Reserved.</p>
      </footer>

    </main>
  );
};

export default BMI;