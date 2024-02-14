FROM node:18-alpine AS backend

WORKDIR /backend

COPY ./package.json /backend

RUN npm install

COPY . .

RUN npm run build