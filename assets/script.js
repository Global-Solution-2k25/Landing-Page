const questions = [
  {
    question: "Qual é o principal problema abordado pela solução proposta pela A&D Technologies LTDA?",
    answers: [
      { id: 1, text: "Falta de infraestrutura urbana na capital paulista", correct: false },
      { id: 2, text: "Aumento dos casos de enchentes e falta de comunicação eficiente", correct: true },
      { id: 3, text: "Crescimento descontrolado da população", correct: false },
      { id: 4, text: "Problemas na mobilidade urbana", correct: false },
    ],
  },
  {
    question: "Qual tecnologia será utilizada para monitoramento das condições climáticas?",
    answers: [
      { id: 1, text: "Inteligência Artificial baseada em redes neurais", correct: false },
      { id: 2, text: "- Sensores IoT integrados a um sistema de análise", correct: true },
      { id: 3, text: "Drones para sobrevoar áreas de risco", correct: false },
      { id: 4, text: "Satélites de monitoramento climático", correct: false },
    ],
  },
  {
    question: "Qual linguagem de programação será utilizada no desenvolvimento do software de análise e premeditação?",
    answers: [
      { id: 1, text: "Java", correct: false },
      { id: 2, text: "C++", correct: false },
      { id: 3, text: "Python", correct: true },
      { id: 4, text: "Ruby", correct: false },
    ],
  },
  {
    question: "Qual é um dos principais problemas da solução governamental existente?",
    answers: [
      { id: 1, text: "Alto custo de implementação", correct: false },
      { id: 2, text: "Falta de integração com sistemas privados", correct: false },
      { id: 3, text: "Notificações tardias aos usuários", correct: true },
      { id: 4, text: "Uso de tecnologia ultrapassada", correct: false },
    ],
  },
    {
    question: "Qual é um dos diferenciais da solução proposta pela A&D Technologies LTDA?",
    answers: [
      { id: 1, text: "Sistema fechado e proprietário", correct: false },
      { id: 2, text: "Comunicação mais eficiente e ágil", correct: true },
      { id: 3, text: "Uso exclusivo para órgãos governamentais", correct: false },
      { id: 4, text: "Restrição de acesso para usuários comuns", correct: false },
    ],
  },
  {
    question: "Qual é a expectativa principal da solução proposta?",
    answers: [
      { id: 1, text: "Impedir completamente a ocorrência de enchentes", correct: false },
      { id: 2, text: "Reduzir os danos materiais e humanos por meio de informações valiosas", correct: false },
      { id: 3, text: "Substituir completamente o sistema governamental existente", correct: true },
      { id: 4, text: "Criar um banco de dados para estudos acadêmicos", correct: false },
    ],
  },
  {
    question: "Como os usuários receberão os alertas sobre possíveis catástrofes hídricas?",
    answers: [
      { id: 1, text: "Por meio de mensagens enviadas por correio", correct: false },
      { id: 2, text: "Através de um aplicativo ou sistema de notificações", correct: true },
      { id: 3, text: "Por chamadas telefônicas automáticas", correct: false },
      { id: 4, text: "Apenas por meio de comunicados oficiais na televisão", correct: false },
    ],
  },
  {
    question: "Qual é uma das vantagens do sistema ser Open-Source?",
    answers: [
      { id: 1, text: "Permite que qualquer pessoa contribua para melhorias", correct: true },
      { id: 2, text: "Restringe o acesso a usuários cadastrados", correct: false },
      { id: 3, text: "Aumenta os custos de manutenção", correct: false },
      { id: 4, text: "Dificulta a implementação em larga escala", correct: false },
    ],
  },
    {
    question: "Qual é um dos objetivos do sistema de premeditação de catástrofes?",
    answers: [
      { id: 1, text: "Criar um banco de dados para estudos científicos", correct: false },
      { id: 2, text: "Prever possíveis enchentes e alertar os usuários com antecedência", correct: true },
      { id: 3, text: "Substituir completamente os sistemas meteorológicos existentes", correct: false },
      { id: 4, text: "Desenvolver um modelo de previsão baseado exclusivamente em estatísticas históricas", correct: false },
    ],
  },
    {
    question: "Qual é um dos benefícios da maior frequência de avisos e comunicados?",
    answers: [
      { id: 1, text: "Redução do número de alertas falsos", correct: false },
      { id: 2, text: "Maior preparação da população para possíveis desastres", correct: true },
      { id: 3, text: "Diminuição da necessidade de monitoramento climático", correct: false },
      { id: 4, text: "Aumento da burocracia para acessar as informações", correct: false },
    ],
  }
];

const questionElement = document.getElementById("quizQuestion");
const answerButtons = document.getElementById("quizAnswerBtns");
const nextButton = document.getElementById("quizNextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    button.dataset.id = answer.id;

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  answers = questions[currentQuestionIndex].answers;
  const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();