const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Configurações do banco de dados
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Conectar ao banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Configurar o Express para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota API que retorna dados do banco de dados
app.get('/api/dashboard', (req, res) => {
  db.query('SELECT * FROM dashboard_data ORDER BY RAND() LIMIT 1', (err, results) => {
    if (err) {
      console.error('Erro ao consultar dados:', err);
      return res.status(500).json({ error: 'Erro ao consultar dados' });
    }

    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.json({
        userCount: 0,
        salesToday: 0,
        revenueToday: 0,
        newMessages: 0
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});