FROM node:lts-alpine

WORKDIR /app
COPY . /app

ENV PATH=/app/node_modules/.bin:$PATH

RUN npm install && knex migrate:latest

CMD ["npm", "run", "start" ]
