import React, { useState } from "react";

const questions = [
  {
    question: "Qual é a melhor prática para economizar energia em casa?",
    answers: ["Desligar luzes desnecessárias", "Usar o ar-condicionado o tempo todo", "Deixar as luzes ligadas"],
    correct: 0,
  },
  {
    question: "Qual fonte de energia é renovável?",
    answers: ["Carvão", "Energia Solar", "Gás Natural"],
    correct: 1,
  },
  {
    question: "Qual é o benefício do uso de lâmpadas LED?",
    answers: ["Consome menos energia", "Dura menos", "Aquece mais"],
    correct: 0,
  },
  {
    question: "Qual desses materiais pode ser reciclado?",
    answers: ["Plástico", "Resíduos hospitalares", "Alimentos"],
    correct: 0,
  },
  {
    question: "Qual é uma alternativa ao uso de sacolas plásticas?",
    answers: ["Sacolas de papel", "Sacolas de plástico", "Sacolas de papelão"],
    correct: 0,
  },
  {
    question: "O que significa a prática de compostagem?",
    answers: ["Reciclar plásticos", "Transformar resíduos orgânicos em adubo", "Reutilizar papel"],
    correct: 1,
  },
  {
    question: "Qual é uma prática para reduzir o consumo de água?",
    answers: ["Tomar banhos curtos", "Lavar o carro todos os dias", "Deixar a torneira aberta"],
    correct: 0,
  },
  {
    question: "Qual destes aparelhos consome mais energia?",
    answers: ["Geladeira", "Carregador de celular", "Televisão em standby"],
    correct: 0,
  },
  {
    question: "Qual é o impacto positivo das energias renováveis?",
    answers: ["Reduzem emissões de CO₂", "Causam mais poluição", "Aumentam o uso de combustíveis fósseis"],
    correct: 0,
  },
  {
    question: "Qual é o melhor horário para usar eletricidade?",
    answers: ["Horário de pico", "Fora do horário de pico", "Durante a tarde"],
    correct: 1,
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-2xl p-10 max-w-2xl w-full">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Resultado do Quiz</h2>
            <p className="text-lg text-gray-700 mb-4">
              Você acertou {score} de {questions.length} perguntas.
            </p>
            <p className="text-gray-600 mb-8">
              {score >= 8
                ? "Excelente! Você tem grande conhecimento sobre sustentabilidade."
                : score >= 5
                ? "Bom trabalho! Continue aprendendo e melhorando."
                : "Que tal aprender mais sobre práticas sustentáveis?"}
            </p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md"
            >
              Refazer Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Quiz: Consumo Consciente
              </h2>
              <span className="text-gray-500 text-sm">
                Pergunta {currentQuestion + 1}/{questions.length}
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {questions[currentQuestion].question}
              </h3>
              <div className="relative w-full bg-gray-200 h-2 rounded mb-4">
                <div
                  className="absolute top-0 left-0 h-2 bg-blue-500 rounded"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(index === questions[currentQuestion].correct)
                  }
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md"
                >
                  {answer}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
