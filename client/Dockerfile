FROM node:18-bullseye-slim

WORKDIR /client

COPY * ./

RUN npm install

COPY * /

RUN next build

EXPOSE 3000

CMD ["npm", "start"]