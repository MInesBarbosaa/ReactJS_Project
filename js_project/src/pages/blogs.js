import { useState } from "react";
import React from 'react';

const default_weight = 50;
const default_height = 150;
  
const Blogs = () => {
  const [height, setHeight] = useState(default_weight);
  const [weight, setWeight] = useState(default_height);

  const calculateBmi = () => {
    return (weight / Math.pow((height/100), 2)).toFixed(1);
  }

let message;
const bmi = calculateBmi();

if (bmi >= 30.0) {
  message = "Obese: there are fat pads on the lower back and the tail base. Ribs, hip bones, and spine are under a thick layer of fat and difficult to feel. No waist is visible, and the belly may sag.";
} else if (bmi >= 25.0) {
  message = "Overweight: a layer of fat is present on the belly and at the base of the tail. Ribs, hip bones, and spine are hard to feel with a barely visible waist.";
} else if (bmi >= 18.5) {
  message = "Normal weight: a small amount of fat can be felt. Ribs, hip bones, and spine are easily felt (not seen!) with a visible waist. Congratulations, your dog is at a healthy weight.";
} else {
message = "Underweight: very little fat can be felt under the skin. Ribs, hip bones, and spine are easily spotted.";
}

  return (
    <main>
      
      <div>
        <h1>Calculate Your Dog's Body Mass Index</h1>
        <p>Body Mass Index (BMI) measures body fat based on weight and height. 
          It’s one of many measures to check how in shape your dog is.</p>
      </div>

      <h1>Dog BMI Calculator</h1>
      <div className="input-section">
        <p class="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          onChange={(event) => setWeight(event.target.value)}
          type="range"
          step="1"
          min="1"
          max="110"
        />
        <p class="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={(event) => setHeight(event.target.value)}
          type="range"
          min="15"
          max="110"
        />
      </div>

      <div className="output-section">
        <p>The BMI of your Dog is:</p>
        <p className="output">{calculateBmi()}</p>
        <p className="message">{message}</p>
      </div>

    </main>
  );
};

export default Blogs;