import { useState } from 'react'
 
import './App.css'

function App() {
  // Array of questions
const quizQuestions = [
  {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
  },
  {
      question: "Which language is used for web development?",
      options: ["Python", "JavaScript", "C#", "Java"],
      answer: "JavaScript"
  },
  {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      answer: "8"
  },
  {
      question: "Who wrote 'Hamlet'?",
      options: ["Leo Tolstoy", "William Shakespeare", "Mark Twain", "Charles Dickens"],
      answer: "William Shakespeare"
  },
  {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Jupiter"
  }
];
// Example to display the first question
// console.log(quizQuestions[0].question); // Output: What is the capital of France?
// console.log(quizQuestions[0].options); // Output: ["Paris", "London", "Berlin", "Madrid"]

const [currentQue , setCurrentQue] = useState(0);
const [score , setScores] = useState(0);
const [quizFinished , setQuizFinished] = useState(false);
 
const handleInput = (selectedOption) => {
  if(selectedOption === quizQuestions[currentQue].answer){
    setScores(score+1);
  }
 
 
  const nextQuestion = currentQue+1;
  if(nextQuestion < quizQuestions.length){
    setCurrentQue(nextQuestion);
  }else {
  setQuizFinished(true);
}
}

  return (
    <>
    <center className='bg-red-200 text-center text-xl font-bold'>The Quiz Game! </center>
    {
      quizFinished ? (
        <div className='w-auto h-[90vh] flex flex-col justify-center align-center border-2 bg-red-300 '>
        <h1 className='text-4xl font-semibold '>Quiz Finished! </h1>
        <h2 className='text-2xl font-semibold mt-4 '>Your Score : {score} / {quizQuestions.length}</h2>
        </div>
      )
      :
      (
        <div className='flex flex-col align-center justify-center '>
          <h1 className='font-bold text-4xl mt-16 mb-16'>{quizQuestions[currentQue].question}</h1>
          {quizQuestions[currentQue].options.map((option , index) =>(
            <div key={index}>
              <button className='text-2xl mb-4 w-96 hover:bg-blue-200  border-4 border-black'  onClick={()=>handleInput(option)}>
                {option} 
               </button>
               </div>
          ))}
        </div>
      )
    }

    </>
  )
}

export default App
