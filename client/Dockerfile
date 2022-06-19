# pull official base image
FROM node:14.16.0-alpine

# set working directory
WORKDIR /client

# add `/client/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install client dependencies
COPY package*.json ./
RUN npm install && npm build

# add client
COPY . ./

# start client
CMD ["npm", "start"]   