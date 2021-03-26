FROM node:latest

RUN mkdir /usr/backend
WORKDIR /usr/backend

COPY . /usr/backend
RUN npm install --verbose

# default command
CMD ["node", "server.js"]