# pull official base image
FROM node:14.16.0-alpine

WORKDIR /server

COPY package*.json ./server
RUN npm install

COPY . ./server

EXPOSE 8081

CMD ["node", "index.js"]