import React from 'react';

function Products() {
  const productData = [
    {
      id: 1,
      name: "Garrafa Térmica Ecológica",
      description: "Mantém sua bebida na temperatura ideal enquanto reduz o uso de garrafas plásticas.",
      price: "R$ 59,90",
      image: "https://img.elo7.com.br/product/685x685/4CF4764/garrafa-termica-ecologica-garrafa-de-madeira.jpg",
    },
    {
      id: 2,
      name: "Canudo de Metal Reutilizável",
      description: "Diga adeus aos canudos de plástico com esta opção prática e ecológica.",
      price: "R$ 29,90",
      image: "https://s3.amazonaws.com/img.iluria.com/product/617737/F1A9CC/450xN.jpg",
    },
    {
      id: 3,
      name: "Sacola de Tecido Reutilizável",
      description: "Ideal para compras e totalmente biodegradável, reduzindo o impacto ambiental.",
      price: "R$ 39,90",
      image: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/g/14/63915180-ae4f-4f65-a067-d02e51d8df31.jpg",
    },
    {
      id: 4,
      name: "Escova de Dente de Bambu",
      description: "Biodegradável e ideal para substituir escovas de plástico.",
      price: "R$ 19,90",
      image: "https://images.tcdn.com.br/img/img_prod/671855/kit_com_10_escovas_de_dente_de_bambu_2079_1_5888ce07ca6053a48a94fa12f2b07d6f.jpg",
    },
    {
      id: 5,
      name: "Kit de Talheres de Bambu",
      description: "Um conjunto completo para substituir os talheres descartáveis de plástico.",
      price: "R$ 49,90",
      image: "https://cdn.awsli.com.br/2500x2500/1710/1710377/produto/87481187/9c6800692c.jpg",
    },
    {
      id: 6,
      name: "Pote de Vidro Reutilizável",
      description: "Ideal para armazenamento seguro e sustentável de alimentos.",
      price: "R$ 34,90",
      image: "https://conteudo.imguol.com.br/c/entretenimento/7e/2023/05/30/potes-de-vidro-1685457826852_v2_1x1.jpg",
    },
    {
      id: 7,
      name: "Carregador Solar Portátil",
      description: "Use energia solar para carregar dispositivos e economizar eletricidade.",
      price: "R$ 199,90",
      image: "https://http2.mlstatic.com/D_NQ_NP_892536-MLB74018266899_012024-O.webp",
    },
    {
      id: 8,
      name: "Painel Solar Portátil",
      description: "Gera energia limpa para iluminar pequenas áreas ou carregar dispositivos.",
      price: "R$ 499,90",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQac6oj-S-xlHvomUMDM41ua2uNyXXmvjb8-Q&s",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b bg-slate-100 to-gray-100 py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold">Produtos Sustentáveis</h2>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Descubra nossa seleção de produtos sustentáveis que fazem a diferença. 
          Cada compra ajuda a financiar projetos que promovem práticas conscientes e 
          sustentáveis, contribuindo para um futuro melhor.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-t-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-semibold text-blue-700 mb-4">{product.price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
