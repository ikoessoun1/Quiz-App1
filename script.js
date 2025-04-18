// This is a simple quiz application that displays questions and options to the user.
// The user selects an answer, and the application checks if it's correct or wrong.


const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: 1,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    answer: 0,
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: 2,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: 1,
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: 3,
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 1,
  },
  {
    question: "In computing, what does 'CPU' stand for?",
    options: ["Central Processing Unit", "Computer Power Unit", "Core Programming Unit", "Central Programming Utility"],
    answer: 0,
  },
  {
    question: "What year did World War II end?",
    options: ["1942", "1945", "1939", "1950"],
    answer: 1,
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
    answer: 1,
  }
];


let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = questions.length;



const handleQuestionDisplay = () => {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML =`
    <h2>${questions[currentQuestionIndex].question}</h2>
    <ul id="options-list"></ul>
  `;
  const optionsList = document.getElementById("options-list"); 

  questions[currentQuestionIndex].options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<button class="option-button" data-index="${index}">${option}</button>`;
    optionsList.appendChild(li);
    
  })
  document.querySelectorAll(".option-button").forEach(button => {
    button.addEventListener("click", (e) => {
      const selectedIndex = parseInt(e.target.dataset.index);
      const correctIndex = questions[currentQuestionIndex].answer;
  
      if (selectedIndex === correctIndex) {
        alert("Correct!");
        score++;
      } else {
        alert("Wrong!");
      }
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        handleQuestionDisplay();
      } else {
        showFinalScore();
      }
      function showFinalScore() {
        const questionContainer = document.getElementById("question-container");
        questionContainer.innerHTML = `
          <h2>Quiz Completed!</h2>
          <p>Your score is ${score} out of ${questions.length}.</p>
          <button id="restart-btn">Play Again</button>
        `;
      
        document.getElementById("restart-btn").addEventListener("click", () => {
          currentQuestionIndex = 0;
          score = 0;
          handleQuestionDisplay();
        });
      }      
    });
  });
  
}



handleQuestionDisplay();