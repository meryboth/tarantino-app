const quizData = [
  {
    question: "What year is Kill Bill set in?",
    a: "1995",
    b: "2003",
    c: "2001",
    d: "1998",
    correct: "b",
  },
  {
    question: "Who were the vega brothers?",
    a: "Vincent & Francesco",
    b: "Luca & Vic",
    c: "Vincent & Vic",
    d: "Vito & Vincent",
    correct: "c",
  },
  {
    question: "What was the alias of Shosanna Dreyfus?",
    a: "Corentin Charbonnier",
    b: "Emmanuelle Mimieux",
    c: "Delphine Touchard",
    d: "Fleur Desmarais",
    correct: "b",
  },
  {
    question: "Which are the iconic cigarettes of the tarantino universe?",
    a: "Big Apple",
    b: "Red Pinapple",
    c: "Red Apple",
    d: "none of the above",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
