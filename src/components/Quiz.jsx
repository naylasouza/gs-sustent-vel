import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [perguntas, setPerguntas] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [error, setError] = useState(null);
  const fetchPerguntas = () => {

    const API_URL = 'http://localhost:5000/api';

    axios.get(`${API_URL}/perguntas`)
      .then(response => {
        console.log('Perguntas recebidas:', response.data);
        if (response.data) {
          setPerguntas(response.data);
        } else {
          setError("Dados de perguntas não estão no formato esperado.");
        }
      })
      .catch(error => {
        console.error("Erro ao buscar perguntas:", error);
        setError("Erro ao buscar perguntas.");
      });
  };

  const fetchRespostas = () => {
    const API_URL = 'http://localhost:5000/api'

    axios.get(`${API_URL}/respostas`)
      .then(response => {
        console.log('Respostas recebidas:', response.data);
        if (response.data) {
          setRespostas(response.data);
        } else {
          setError("Dados de respostas não estão no formato esperado.");
        }
      })
      .catch(error => {
        console.error("Erro ao buscar respostas:", error);
        setError("Erro ao buscar respostas.");
      });
  };

  useEffect(() => {
    fetchPerguntas();
    fetchRespostas();
  }, []); 

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < perguntas.length) {
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
              Você acertou {score} de {perguntas.length} perguntas.
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
            {error && <p>{error}</p>}

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Quiz: Consumo Consciente
              </h2>
              <span className="text-gray-500 text-sm">
                Pergunta {currentQuestion + 1}/{perguntas.length}
              </span>
            </div>

            {perguntas.length > 0 ? (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {perguntas[currentQuestion].PERGUNTA}
                  </h3>
                  <div className="relative w-full bg-gray-200 h-2 rounded mb-4">
                    <div
                      className="absolute top-0 left-0 h-2 bg-blue-500 rounded"
                      style={{
                        width: `${((currentQuestion + 1) / perguntas.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {respostas
                    .filter(resposta => resposta.PERGUNTA_ID === perguntas[currentQuestion].ID)
                    .map((resposta, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleAnswerOptionClick(resposta.CORRETA === 'T')
                        }
                        className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md"
                      >
                        {resposta.RESPOSTA}
                      </button>
                    ))}
                </div>
              </>
            ) : (
              <p>Carregando perguntas...</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
