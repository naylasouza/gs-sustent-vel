const express = require('express');
const cors = require('cors');
const oracledb = require('oracledb');

// Configuração do banco de dados
const dbConfig = {
  user: 'teste',               // Altere para seu usuário do banco
  password: '1234',            // Altere para sua senha do banco
  connectString: 'oracle.com.br:1521/ORCL',  // Altere para sua string de conexão
};

const app = express();

// Configuração do CORS para permitir requisições do frontend
app.use(cors({
  origin: 'http://localhost:3000',  // Substitua com a URL do seu frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware para parsear o corpo das requisições em JSON
app.use(express.json());

// Endpoint para salvar os dados do formulário
app.post('/api/mensagens', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: 'Nome, email e mensagem são obrigatórios' });
  }

  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    // SQL para inserir a mensagem no banco
    const result = await connection.execute(
      `INSERT INTO MENSAGENS (NOME, EMAIL, MENSAGEM) VALUES (:nome, :email, :mensagem)`,
      [nome, email, mensagem],
      { autoCommit: true }  // Garantir que a inserção seja confirmada no banco
    );

    res.status(201).json({ message: 'Mensagem enviada com sucesso!' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao salvar a mensagem' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Erro ao fechar a conexão:', err);
      }
    }
  }
});

// Iniciar o servidor na porta 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
