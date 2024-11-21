import React, { useState } from "react";
import axios from 'axios';
const Contato = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: "",
      });
    
      const [error, setError] = useState(null);  // Para gerenciar erros
      const [success, setSuccess] = useState(false);  // Para indicar sucesso
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        const API_URL = 'http://localhost:5000/api';
    
        try {
          const response = await axios.post(`${API_URL}/contact`, formData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (response.status === 201) {
            setSuccess(true);
            setError(null);
            setFormData({ nome: "", email: "", mensagem: "" });
            alert("Informações enviadas com sucesso!");
          } else {
            setSuccess(false);
            setError("Erro ao enviar informações. Tente novamente.");
          }
        } catch (error) {
          console.error("Erro ao enviar informações:", error);
          setError("Erro ao enviar informações. Tente novamente.");
          setSuccess(false);
        }
      };

  return (
    <>
      <div className="contato">
        <div className="contato-introducao">
            <div className="container-text">
                <h2>Entre em contato conosco!</h2>
                <p>
                    Se você tem interesse em nossos serviços ou deseja explorar uma parceria conosco, preencha o formulário abaixo com suas informações. 
                    Nossa equipe analisará sua solicitação e entrará em contato o mais breve possível para discutir como podemos atender às suas necessidades e oferecer as melhores soluções. 
                    Estamos ansiosos para colaborar com você!
                </p>
            </div>

        </div>
      </div>

        <div className="container-form">
            <div className="contato-container">
                <form onSubmit={handleSubmit} className="contato-form">
                <label>
                    Nome:
                    <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    />
                </label>
                <label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </label>
                <label>
                    Mensagem:
                    <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    />
                </label>
                <button type="submit">Enviar</button>
                </form>
            </div>
        </div>

      <style>
        {`
          .contato {
          padding-top: 100px;
            height: 200px;
          }
        
          .contato-container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            font-family: "Arial", sans-serif;
          }

          .container-form{
            padding-top: 350px;
          }

          .container-text{
            padding-top: 120px;
          }

          .contato-introducao {
            text-align: center;
            margin-bottom: 30px;
            background-color: orange;   
            height: 400px;       
          }

          .contato-introducao h2 {
            font-size: 2rem;
            color: white;
          }

          .contato-introducao p {
            font-size: 20px;
            color: white;
            line-height: 1.6;

          }

          .contato-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .contato-form label {
            font-size: 1rem;
            color: #333;
          }

          .contato-form input,
          .contato-form textarea {
            width: 100%;
            padding: 12px 15px;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #fff;
            transition: border-color 0.3s ease;
          }

          .contato-form input:focus,
          .contato-form textarea:focus {
            border-color: #653cf0;
            outline: none;
          }

          .contato-form button {
            padding: 12px 20px;
            font-size: 1rem;
            color: #fff;
            background-color: #653cf0;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .contato-form button:hover {
            background-color: #5029c0;
          }

          @media (max-width: 600px) {
            .contato-container {
              padding: 15px;
            }

            .contato-introducao h2 {
              font-size: 1.5rem;
            }

            .contato-introducao p {
              font-size: 0.9rem;
            }

            .contato-form button {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Contato;
