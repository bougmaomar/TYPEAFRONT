FROM node:alpine AS build
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app
RUN npm run build --prod

FROM nginx:alpine
COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf
COPY --from=build dist/frontend usr/share/nginx/html
