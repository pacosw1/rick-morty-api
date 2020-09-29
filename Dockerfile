FROM node:latest

WORKDIR /server

COPY ./package*.json ./
RUN yarn

COPY ./src ./src

EXPOSE 4000

CMD [ "yarn", "start" ]