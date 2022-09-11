FROM node:18.8-alpine3.15

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD npm start