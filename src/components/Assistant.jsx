import React, { useState } from "react";

function Assistant() {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleQuery = async () => {
        setLoading(true);
        try {
            const apiKey = "";
            const endpoint = "https://api.openai.com/v1/chat/completions";

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [
                        { role: "system", content: "Você é um assistente virtual sobre energia sustentável." },
                        { role: "user", content: query },
                    ],
                    max_tokens: 100,
                }),
            };

            const response = await fetch(endpoint, requestOptions);
            const data = await response.json();

            if (response.ok) {
                setResponse(data.choices[0].message.content.trim());
            } else {
                setResponse("Erro: " + data.error.message);
            }
        } catch (error) {
            setResponse("Erro ao conectar à API.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex flex-col items-center p-6">
            <div className="max-w-3xl mx-auto mt-10 p-6 bg-blue-50 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    Bem-vindo ao Assistente Virtual de Energia Sustentável
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                    Nosso assistente virtual combina inteligência artificial de ponta e paixão pela sustentabilidade para trazer
                    até você respostas claras e inspiradoras sobre a energia para um futuro mais verde. Faça sua pergunta e
                    descubra soluções inovadoras que podem transformar o mundo. 🌱✨
                </p>
            </div>
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md mt-10 p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pergunte sobre Energia Sustentável</h2>
                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Digite sua pergunta aqui..."
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-green-300"
                />
                <button
                    onClick={handleQuery}
                    disabled={loading}
                    className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all disabled:bg-green-300"
                >
                    {loading ? "Consultando..." : "Enviar"}
                </button>
            </div>
            <div className="w-full max-w-3xl bg-gray-50 rounded-lg shadow-md mt-6 p-6">
                <strong className="text-lg font-semibold text-gray-800">Resposta:</strong>
                <p className="text-gray-700 mt-2">{response || ""}</p>
            </div>
        </div>
    );
}

export default Assistant;
