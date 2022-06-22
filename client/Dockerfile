FROM node:18.4-alpine3.16 as dependencies
WORKDIR /deps
# node-gyp needs python et al
RUN apk add --no-cache python3 py3-pip make g++
COPY package-lock.json .
COPY package.json .
RUN npm install

FROM node:18.4-alpine3.16 as build
WORKDIR /build
ENV PORT=80
# get the deps from the earlier stage
COPY --from=dependencies /deps/node_modules node_modules
COPY . .
RUN npm run build

FROM node:18.4-alpine3.16
WORKDIR /var/www/lightfeather
EXPOSE 80
RUN npm install --location=global serve
COPY --from=build /build/out .
CMD [ "serve", "-p", "80", "-s", "/var/www/lightfeather" ]
