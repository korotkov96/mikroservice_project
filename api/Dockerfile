FROM node:13.12.0-alpine
 #закачка и установка образа с docker hub 

WORKDIR /usr/src/app 
#рабочая дериктория в контейнире

COPY package*.json ./
 #копирование файлов

RUN npm install
 #запуск node сервера 

COPY . .
