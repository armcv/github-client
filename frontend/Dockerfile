FROM node:latest

# Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Bundle app source
COPY . /usr/app
RUN npm install --verbose
RUN npm install -g @angular/cli

EXPOSE 4200/tcp

# default command
CMD ["ng", "serve", "--host", "0.0.0.0"]
