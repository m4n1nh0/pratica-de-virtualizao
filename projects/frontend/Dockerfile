# Usar a imagem base do Node.js
FROM node:16 AS build

# Criar e definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Construir a aplicação Vue.js
RUN npm run build

# Usar a imagem base do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copiar os arquivos de build para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta que o Nginx vai usar
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]