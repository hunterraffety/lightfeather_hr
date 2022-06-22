FROM node:18-bullseye-slim

EXPOSE 8080
# WORKDIR /home/node
WORKDIR /server

COPY * ./
CMD ["npm", "install"]

COPY *.js .
ENTRYPOINT ["node", "index.js"]