FROM node:10.16.3

WORKDIR /home/node/app

COPY package.json .
COPY package-lock.json .
COPY .nvmrc .

RUN npm install -g typescript
RUN npm install

COPY . .

EXPOSE 8080
ENV NODE_ENV production
CMD tsc && node dist/server.js
