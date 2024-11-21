# **Startup Sustentável**

Este trabalho acadêmico foi desenvolvido como parte do **Desafio Global Solution** da FIAP, com o objetivo de promover a conscientização ambiental e a transição energética por meio da educação e do apoio a práticas sustentáveis. O trabalho foi realizado em grupo, composto por **Nayla Souza Ribeiro** 99035, **Manuela Archanjo** e **Karen Cristina**, com o intuito de criar uma solução que gere impacto positivo para o futuro do planeta.

## **Tecnologias Utilizadas**

### **Frontend**

- **React.js**: Framework principal para construção da interface, utilizando componentes reutilizáveis e eficientes para a construção da UI.
- **Tailwind CSS**: Estilização rápida e moderna com classes utilitárias, permitindo um design limpo e responsivo.
- **React Router**: Para navegação entre as páginas do site, oferecendo uma experiência fluida e dinâmica.
- **JavaScript ES6**: Para lógica interativa e manipulação de estados, melhorando a funcionalidade da aplicação.
- **Geolocalização**: Para personalização de recomendações com base na localização do cliente, criando uma experiência mais relevante.

### **Backend**

- **Node.js**: Ambiente de execução JavaScript no backend, utilizado para a criação do servidor.
- **Express.js**: Framework para Node.js, responsável por estruturar e gerenciar as rotas da API.
- **Oracle Database**: Banco de dados utilizado para armazenar as informações de perguntas, respostas e mensagens de contato.
- **OracleDB (oracledb)**: Driver Node.js para conectar e realizar operações no banco de dados Oracle.
- **dotenv**: Utilizado para gerenciar variáveis de ambiente de forma segura, como credenciais do banco de dados e configurações do servidor.
- **CORS**: Configuração de CORS (Cross-Origin Resource Sharing) para permitir que o frontend em `localhost:3000` se comunique com o backend em `localhost:5000`.

### **APIs Integradas**

- **API da OpenAI**: Implementação da Assistente Virtual utilizando OpenAI para integração com GPT, proporcionando uma experiência interativa e personalizada para os usuários.

## **Funcionalidades**

- **Cadastro de Contatos**: Envio de informações de contato (nome, e-mail, mensagem) para um banco de dados Oracle, com validação no backend.
- **Consulta de Perguntas e Respostas**: Recuperação de perguntas e respostas armazenadas no banco de dados Oracle para exibição no frontend.
- **Assistente Virtual**: Interação com uma assistente virtual alimentada pela API da OpenAI para responder dúvidas e fornecer informações relevantes.
