# Usar a imagem base do Node.js
FROM node:16

# Criar e definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "app.js"]