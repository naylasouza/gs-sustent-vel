import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Para o redirecionamento ao quiz

function SustainableStore() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const productData = [
    {
      id: 1,
      name: "Painel Solar Portátil",
      description: "Ideal para gerar energia limpa e sustentável em regiões ensolaradas.",
      price: "R$ 499,90",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQac6oj-S-xlHvomUMDM41ua2uNyXXmvjb8-Q&s",
      category: "Energia Solar",
    },
    {
      id: 2,
      name: "Turbina Eólica Doméstica",
      description: "Perfeita para aproveitar a força do vento e reduzir custos de energia.",
      price: "R$ 3.999,90",
      image: "https://clickpetroleoegas.com.br/wp-content/uploads/2023/01/Liam-F1-Urban-Wind.jpg",
      category: "Energia Eólica",
    },
    {
      id: 3,
      name: "Bateria Recarregável",
      description: "Armazene energia renovável de forma eficiente e sustentável.",
      price: "R$ 999,90",
      image: "https://grupoe4.com.br/wp-content/uploads/2023/11/THUMB-1-12-768x432.webp",
      category: "Baterias",
    },
    {
      id: 4,
      name: "Consultoria para Energia Renovável",
      description: "Especialistas em soluções personalizadas para sua casa ou empresa.",
      price: "R$ 1.999,90",
      image: "https://img.freepik.com/free-vector/consulting-concept-illustration_114360-1105.jpg",
      category: "Consultorias",
    },
    {
      id: 5,
      name: "Curso Online de Eficiência Energética",
      description: "Aprenda como economizar energia e reduzir sua pegada ambiental.",
      price: "R$ 199,90",
      image: "https://image.freepik.com/free-vector/online-courses-isometric-illustration_1284-23363.jpg",
      category: "Cursos",
    },
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocation(latitude, longitude);
        },
        () => {
          setUserLocation("Localização não detectada.");
        }
      );
    } else {
      setUserLocation("Geolocalização não suportada pelo navegador.");
    }
  }, []);

  const fetchLocation = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://geocode.xyz/${latitude},${longitude}?geoit=json`
      );
      const data = await response.json();
      if (data.city) {
        setUserLocation(data.city);
        recommendProducts(data.city);
      } else {
        setUserLocation("Localização não identificada.");
      }
    } catch (error) {
      setUserLocation("Erro ao obter localização.");
    }
  };

  const recommendProducts = (location) => {
    if (location.toLowerCase().includes("sol")) {
      setRecommendedProducts(
        productData.filter((product) => product.category === "Energia Solar")
      );
    } else if (location.toLowerCase().includes("vento")) {
      setRecommendedProducts(
        productData.filter((product) => product.category === "Energia Eólica")
      );
    } else {
      setRecommendedProducts(productData);
    }
  };

  const filteredProducts = selectedCategory
    ? recommendedProducts.filter((product) => product.category === selectedCategory)
    : recommendedProducts;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-blue-50 py-12 px-6">
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800">Loja Sustentável</h1>
        <p className="text-lg text-gray-700 mt-4">
          Explore nossa seleção de produtos e serviços que promovem um futuro sustentável.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Sua localização atual: <strong>{userLocation}</strong>
        </p>
      </div>

      <div className="mb-8">
        <label htmlFor="category" className="text-lg font-semibold text-gray-800">
          Filtrar por categoria:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="ml-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Todas</option>
          <option value="Energia Solar">Energia Solar</option>
          <option value="Energia Eólica">Energia Eólica</option>
          <option value="Baterias">Baterias</option>
          <option value="Consultorias">Consultorias</option>
          <option value="Cursos">Cursos</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-blue-600">{product.price}</p>
            <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition">
              Comprar
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800">Recompensas Verdes</h2>
        <p className="text-base text-gray-600 mt-4">
          Complete o nosso{" "}
          <Link to="/quiz" className="text-blue-600 font-semibold hover:underline">
            Quiz de Sustentabilidade
          </Link>{" "}
          e ganhe descontos exclusivos para suas compras!
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Contribua para práticas sustentáveis e seja recompensado.
        </p>
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800">Pagamentos Sustentáveis</h3>
        <p className="text-base text-gray-600 mt-4">
          Faça sua parte! Aceitamos pagamentos com criptomoedas verdes e doamos parte dos lucros
          para projetos ambientais.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Junte-se a nós na construção de um futuro mais sustentável.
        </p>
      </div>
    </div>
  );
}

export default SustainableStore;
