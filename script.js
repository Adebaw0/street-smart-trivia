const questions = [
  {
    question: "What color is the Nigerian flag?",
    answers: ["Green & White", "Red & Blue", "Black & Yellow", "Green & Red"],
    correct: 0
  },
  {
    question: "How many days are in a leap year?",
    answers: ["365", "366", "360", "364"],
    correct: 1
  },
  {
    question: "Which planet is closest to the sun?",
    answers: ["Earth", "Venus", "Mercury", "Mars"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  answersEl.innerHTML = "";
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (index === questions[currentQuestion].correct) {
    score++;
    scoreEl.textContent = "Score: " + score;
  }
  disableButtons();
}

function disableButtons() {
  document.querySelectorAll("#answers button").forEach(btn => {
    btn.disabled = true;
  });
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "🎉 Quiz Finished!";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

loadQuestion();
