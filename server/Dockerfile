FROM node:18.4-alpine3.16 as dependencies
WORKDIR /deps
COPY package-lock.json .
COPY package.json .
RUN npm install

FROM node:18.4-alpine3.16
WORKDIR /app
# get the deps from the earlier stage
COPY --from=dependencies /deps/node_modules node_modules
# copy the sources in
COPY . .

EXPOSE 80
ENV PORT=80
CMD [ "npm", "run", "start" ]
