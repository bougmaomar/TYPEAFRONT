FROM node:alpine AS build
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /app/
RUN npm install

COPY . /usr/src/app
RUN npm run build --prod
