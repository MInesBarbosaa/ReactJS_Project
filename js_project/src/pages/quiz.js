import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const questions = [
	{
		questionText: 'What is the best family dog?',
		answerOptions: [
			{ answerText: 'Spaniel', isCorrect: false },
			{ answerText: 'Mastiff', isCorrect: false },
			{ answerText: 'Labrador Retriever', isCorrect: true },
			{ answerText: 'Bulldog', isCorrect: false },
		],
	},
	{
		questionText: 'Which dog is the fastest?',
		answerOptions: [
			{ answerText: 'Vizsla', isCorrect: false },
			{ answerText: 'Greyhound', isCorrect: true },
			{ answerText: 'Afghan Hound', isCorrect: false },
			{ answerText: 'Whippet', isCorrect: false },
		],
	},
	{
		questionText: 'Which breed of dog is considered the smartest?',
		answerOptions: [
			{ answerText: 'Border Collie', isCorrect: true },
			{ answerText: 'Fox Terrier', isCorrect: false },
			{ answerText: 'German Shepherd', isCorrect: false },
			{ answerText: 'Spaniel', isCorrect: false },
		],
	},
	{
		questionText: 'What is the smallest breed of dog?',
		answerOptions: [
			{ answerText: 'Poodle', isCorrect: false },
			{ answerText: 'Maltese', isCorrect: false },
			{ answerText: 'Yorkie', isCorrect: false },
			{ answerText: 'Chihuahua', isCorrect: true },
		],
	},
{
		questionText: 'Which dog has a black or blue tongue?',
		answerOptions: [
			{ answerText: 'Keeshond', isCorrect: false },
			{ answerText: 'Samoyed', isCorrect: false },
			{ answerText: 'Tibetan Mastiff', isCorrect: false },
			{ answerText: 'Chow-Chow', isCorrect: true },
		],
	},
{
		questionText: 'What type of dog does the queen of England have?',
		answerOptions: [
			{ answerText: 'Fox Terrier', isCorrect: false },
			{ answerText: 'King Charles Spaniel', isCorrect: false },
			{ answerText: 'Bullterier', isCorrect: false },
			{ answerText: 'Corgi', isCorrect: true },
		],
	},
{
		questionText: 'Why do dogs lick their owners?',
		answerOptions: [
			{ answerText: 'To taste you', isCorrect: false },
		  	{ answerText: 'To get attention', isCorrect: false },
			{ answerText: 'To show affection', isCorrect: true },
			{ answerText: 'All of the above', isCorrect: false },
		],
	},
];

const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
	if (isCorrect) {
		setScore(score + 1);
	}

	const nextQuestion = currentQuestion + 1;

	if (nextQuestion < questions.length) {
		setCurrentQuestion(nextQuestion);
	} else {
		setShowScore(true);
	}
	};


	return (
		<div>
			<h1 className="quiz_header">How well do you know dogs?</h1>
			<div className='quiz'>
				{showScore ? (
					<div className='score_div'>
						You scored {score} out of {questions.length}
					</div>
					) : (
					<>
						<div className='question_div'>
							<div className='question_count'>
								<span>Question {currentQuestion + 1}</span> of {questions.length}
							</div>
							<div className='question_text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer_div'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button className="quiz_button" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
					)}
			</div>
	
		<footer>
        	<p>© 2023 Dog Lovers Inc. All Rights Reserved.</p>
      	</footer>
	</div>
);
};

ReactDOM.render(
	<React.StrictMode>
	  <Quiz />
	</React.StrictMode>,
	document.getElementById('root')
  );

export default Quiz;