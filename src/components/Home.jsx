import React from 'react';
import capa from '../capa.png';
import fundo from '../fundo.png';

function Home() {
  return (
    <div>
      <div
        className="h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${capa})`,
        }}
      ></div>

      <div
        className="relative py-16 px-6 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${fundo})`,
        //   backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>

        <div className="relative container mx-auto pt-26 pb-26">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Quem Somos
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 w-[39%]">
            Financiando projetos para um planeta mais sustentável
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Somos uma startup comprometida em apoiar iniciativas que realmente fazem a
            diferença. Nosso objetivo é financiar projetos inovadores que promovam a
            sustentabilidade e o uso consciente de recursos naturais, ajudando a mitigar
            os impactos das mudanças climáticas. Trabalhamos com parcerias estratégicas
            para impulsionar ações que transformam o planeta, fomentando uma economia
            verde e garantindo um futuro mais equilibrado para todos.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Além de investir em soluções práticas e acessíveis, também nos dedicamos a
            conscientizar e educar a sociedade sobre a importância de práticas sustentáveis.
            Junte-se a nós e faça parte desse movimento que está redefinindo o futuro
            do nosso planeta.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                question: 'Por que mudar para energia renovável?',
                answer: 'A energia renovável reduz emissões de carbono e protege o meio ambiente.',
                color: 'bg-green-600',
              },
              {
                question: 'O que são fontes renováveis?',
                answer: 'Fontes renováveis incluem solar, eólica e hidrelétrica.',
                color: 'bg-blue-600',
              },
              {
                question: 'Como começar?',
                answer: 'Comece com pequenas ações, como reduzir o consumo de energia.',
                color: 'bg-yellow-600',
              },
              {
                question: 'Onde obter energia limpa?',
                answer: 'Procure fornecedores de energia renovável ou instale painéis solares.',
                color: 'bg-teal-600',
              },
              {
                question: 'Como isso ajuda o planeta?',
                answer: 'Energias limpas reduzem poluição e protegem ecossistemas.',
                color: 'bg-indigo-600',
              },
              {
                question: 'O que posso fazer hoje?',
                answer: 'Economize energia e apoie projetos sustentáveis.',
                color: 'bg-amber-600',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`absolute inset-x-0 bottom-0 h-2 ${item.color} group-hover:h-6 transition-all duration-300`}
                ></div>
                <div className="flex flex-col items-center justify-center h-[250px] p-6 group-hover:-translate-y-3 transition-transform duration-300">
                  <div
                    className={`w-16 h-16 ${item.color} text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg`}
                  >
                    ?
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    {item.question}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 px-4">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-100 py-32 px-4 bg-slate-400">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/bFaepRmMYc0?si=fPrr4S4ZC4V6VRBe"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Transição Energética: O Futuro Está em Nossas Mãos
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Descubra neste vídeo como podemos transformar nossa realidade
              através do uso de energias renováveis, reduzindo drasticamente as
              emissões de gases de efeito estufa. Junte-se à mudança.
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4 text-sm">
            © 2024 Transição Energética. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/" className="hover:text-white text-sm">
              Home
            </a>
            <a href="/quiz" className="hover:text-white text-sm">
              Quiz
            </a>
            <a href="/products" className="hover:text-white text-sm">
              Produtos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
