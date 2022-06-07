FROM node:alpine AS build
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app
RUN npm run build --prod

FROM nginx:1.20.1
COPY --from=build /dist/frontend /usr/share/nginx/html
EXPOSE 4200:80
