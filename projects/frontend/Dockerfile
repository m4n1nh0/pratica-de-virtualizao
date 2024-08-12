# Usar a imagem base do Node.js
FROM node:lts-alpine AS build-stage

# Instalar o shadow (fornece usermod, etc.)
RUN apk add --no-cache shadow

# Criar e definir o diretório de trabalho
WORKDIR /app

# Criar um grupo e um usuário não privilegiado
RUN addgroup -g 20001 linguagem && \
    adduser -u 20000 -G linguagem -h /home/frontnode -D frontnode && \
    mkdir -p /home/frontnode && \
    chown -R frontnode:linguagem /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Exibir versões do Node.js e npm
RUN node -v && npm -v

# Copiar o restante dos arquivos do projeto
COPY . .

# Construir a aplicação Vue.js
RUN npm run build

# Mudar o usuário para o usuário criado
USER frontnode:linguagem

# Usar a imagem base do Nginx para servir os arquivos estáticos
FROM nginx:stable-alpine AS production-stage

# Criar o diretório de cache e o diretório de PID, e ajustar permissões
RUN mkdir -p /var/cache/nginx /var/run/nginx && \
    chown -R nginx:nginx /var/cache/nginx /var/run/nginx

# Ajustar as permissões do diretório de destino
RUN chown -R nginx:nginx /usr/share/nginx/html

# Copiar os arquivos de build para o diretório padrão do Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Remover a diretiva "user" do arquivo de configuração do Nginx
RUN sed -i '/^user /d' /etc/nginx/nginx.conf

# Expor a porta que o Nginx vai usar
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]