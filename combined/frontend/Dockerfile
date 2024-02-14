FROM node:alpine AS frontend_stage

WORKDIR /frontend

COPY ./package.json /frontend

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine AS frontend_final

WORKDIR /frontend

COPY --from=frontend_stage /frontend/dist /frontend/dist

COPY ./package.json /frontend

COPY ./vite.config.ts /frontend

RUN npm install typescript -d