FROM node:18-alpine

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . .

RUN npm run build

ENV PORT=3210

EXPOSE 3210

CMD [ "node","./dist/app.js" ]