FROM node:alpine AS BUILD_STAGE

WORKDIR /app

COPY /package.json /app

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine AS PRODUCTION-STAGE

WORKDIR /app

COPY --from=BUILD_STAGE /app/dist /app/dist

EXPOSE 8080

COPY package.json /app/

COPY vite.config.ts /app/

RUN npm install typescript -d

EXPOSE 8080

CMD [ "npm","run","preview" ]