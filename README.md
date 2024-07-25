
---

# My Dashboard App

Este repositório contém uma aplicação de dashboard completa composta por um backend em Node.js usando Express e um frontend em Vue.js com TypeScript. O backend se conecta a um banco de dados MySQL. A aplicação está totalmente conteinerizada usando Docker e Docker Compose, mas também pode ser executada localmente sem Docker.

## Estrutura do Projeto

```plaintext
my-dashboard-app/
│
├── backend/                    # Backend com Express
│   ├── Dockerfile
│   ├── package.json
│   ├── app.js
│   ├── init.sql
│   └── .env
│
├── frontend/                   # Frontend com Vue.js
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   │   ├── components/
│   │   │   └── Dashboard.vue
│   │   ├── App.vue
│   │   ├── main.ts
│   │   └── shims-vue.d.ts
│   └── public/
│       └── index.html
│
├── docker-compose.yml
└── .gitignore
```

## Conceitos

- **Backend (Express)**: Um servidor Node.js usando o framework Express para fornecer uma API RESTful.
- **Frontend (Vue.js com TypeScript)**: Uma aplicação Vue.js que consome a API do backend para exibir dados em um dashboard.
- **MySQL**: Um banco de dados relacional para armazenar os dados do dashboard.
- **Docker**: Utilizado para containerizar as aplicações e facilitar o desenvolvimento e a implantação.
- **Docker Compose**: Orquestra os diferentes contêineres (backend, frontend e banco de dados) em um único ambiente de desenvolvimento.

## Pré-requisitos

- Node.js e npm instalados na máquina
- MySQL instalado e configurado na máquina (apenas para execução local)
- Docker instalado na máquina (opcional, para execução com Docker)
- Docker Compose instalado na máquina (opcional, para execução com Docker Compose)

## Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/my-dashboard-app.git
cd my-dashboard-app
```

### Execução com Docker

### 2. Configuração das Variáveis de Ambiente

Certifique-se de que o arquivo `.env` no diretório `backend` esteja configurado corretamente:

```env
MYSQL_HOST=db
MYSQL_USER=exampleuser
MYSQL_PASSWORD=examplepass
MYSQL_DATABASE=exampledb
```

### 3. Construção e Inicialização dos Contêineres

Use o Docker Compose para construir e iniciar os contêineres:

```bash
docker-compose up --build
```

Isso irá:

- Construir e iniciar o contêiner do backend em `http://localhost:3000`
- Construir e iniciar o contêiner do frontend em `http://localhost:8080`
- Iniciar o contêiner do MySQL

### 4. Acesso à Aplicação

Após iniciar os contêineres, você pode acessar a aplicação frontend no navegador em `http://localhost:8080`.

### Execução Local (Sem Docker)

### 2. Configuração do Banco de Dados

Certifique-se de ter um servidor MySQL rodando localmente e execute o script `init.sql` no banco de dados para criar a tabela e inserir dados de exemplo:

```sql
CREATE TABLE IF NOT EXISTS dashboard_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userCount INT NOT NULL,
  salesToday INT NOT NULL,
  revenueToday DECIMAL(10, 2) NOT NULL,
  newMessages INT NOT NULL
);

INSERT INTO dashboard_data (userCount, salesToday, revenueToday, newMessages)
VALUES
  (1200, 340, 5600.00, 14),
  (1150, 290, 5200.00, 10),
  (1250, 370, 6000.00, 20),
  (1300, 400, 6300.00, 25),
  (1400, 410, 6500.00, 30),
  (1500, 420, 7000.00, 35),
  (1550, 430, 7200.00, 40),
  (1600, 450, 7400.00, 45),
  (1650, 460, 7600.00, 50),
  (1700, 470, 7800.00, 55)
ON DUPLICATE KEY UPDATE
  userCount = VALUES(userCount),
  salesToday = VALUES(salesToday),
  revenueToday = VALUES(revenueToday),
  newMessages = VALUES(newMessages);
```

### 3. Configuração das Variáveis de Ambiente

Certifique-se de que o arquivo `.env` no diretório `backend` esteja configurado corretamente:

```env
MYSQL_HOST=localhost
MYSQL_USER=exampleuser
MYSQL_PASSWORD=examplepass
MYSQL_DATABASE=exampledb
```

### 4. Instalação das Dependências do Backend

```bash
cd backend
npm install
```

### 5. Iniciar o Backend

```bash
npm start
```

O backend estará rodando em `http://localhost:3000`.

### 6. Instalação das Dependências do Frontend

Antes de instalar as dependências do frontend, você precisa ter o Vue CLI instalado globalmente:

```bash
npm install -g @vue/cli
```

Então, instale as dependências do frontend:

```bash
cd ../frontend
npm install
```

### 7. Iniciar o Frontend

```bash
npm run serve
```

O frontend estará rodando em `http://localhost:8080`.

## Estrutura de Diretórios

- **backend/**: Contém o código-fonte do backend (Express)
  - **Dockerfile**: Define a imagem Docker para o backend
  - **package.json**: Dependências e scripts do Node.js
  - **app.js**: Código principal do servidor Express
  - **init.sql**: Script SQL para inicialização do banco de dados
  - **.env**: Variáveis de ambiente para o backend

- **frontend/**: Contém o código-fonte do frontend (Vue.js)
  - **Dockerfile**: Define a imagem Docker para o frontend
  - **package.json**: Dependências e scripts do Vue.js
  - **src/**: Código-fonte da aplicação Vue.js
  - **public/**: Arquivos públicos estáticos

- **docker-compose.yml**: Orquestração dos contêineres Docker

## Scripts Úteis

### Parar e Remover os Contêineres

```bash
docker-compose down
```

### Reconstruir os Contêineres

```bash
docker-compose up --build
```

## Licença

Este projeto está licenciado sob os termos da licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
