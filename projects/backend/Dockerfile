# Usar a imagem base do Node.js
FROM node:16

RUN apt-get update && apt-get install -y passwd

# Criar e definir o diretório de trabalho
WORKDIR /app

# Criar grupo e usuário com IDs específicos
RUN groupadd -g 40001 linguagem && \
    useradd -u 40000 -g linguagem -m backnode && \
    chown -R backnode:linguagem /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Mudar o usuário para o usuário criado
USER backnode:linguagem

# Expor a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "app.js"]