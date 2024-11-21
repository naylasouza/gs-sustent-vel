require('dotenv').config();

const express = require('express');
const cors = require('cors');
const oracledb = require('oracledb');

const dbConfig = {
    user:"", //inserir as credenciais
    password:"", //inserir as credenciais
    connectString: 'oracle.fiap.com.br:1521/ORCL',
};

const app = express();
app.set('etag', false);

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.get('/api/perguntas', async (req, res) => {
    console.log('Recebendo requisição para /api/perguntas');

    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute('SELECT ID, PERGUNTA FROM PERGUNTAS');
        
        const perguntas = result.rows.map(row => ({
            ID: row[0],
            PERGUNTA: row[1],
        }));

        res.json(perguntas);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar perguntas', details: err.message });
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

app.get('/api/respostas', async (req, res) => {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        
        const result = await connection.execute(`
        SELECT R.ID, R.PERGUNTA_ID, R.RESPOSTA, R.CORRETA, P.PERGUNTA
        FROM RESPOSTAS R
        JOIN PERGUNTAS P ON R.PERGUNTA_ID = P.ID
        `);
        
        const respostas = result.rows.map(row => ({
            ID: row[0],
            PERGUNTA_ID: row[1],
            RESPOSTA: row[2],
            CORRETA: row[3],
            PERGUNTA: row[4],
        }));

        res.json(respostas);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar respostas', details: err.message });
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

app.post('/api/contact', async (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res
            .status(400)
            .json({ error: 'Nome, email e mensagem são obrigatórios' });
    }

    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);

        const result = await connection.execute(
            `INSERT INTO CONTATO (NOME, EMAIL, MENSAGEM) VALUES (:nome, :email, :mensagem)`,
            [nome, email, mensagem],
            { autoCommit: true }
        );

        res.status(201).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Erro ao salvar a mensagem',
            details: err.message,
        });
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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
