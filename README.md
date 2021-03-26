# GithubClient

This project has a backend with express and a fronted that consists of an Angular app generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5. The project show user profile, public repositories and commits.

## Change github user

In the file located in the folder /frontend/src/environments/environment.ts you will find this code:

    export const environment = {
        production: false,
        backendUrl: 'http://localhost:3000',
        username: '{github_user}'
    };

In this code you can set the user your Github user.

## Frontend

Run `ng serve` for a dev server on frontend directory. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Backend

Run `node server.js` on backend directory. Navigate to `http://localhost:3000/`. The backend server will show Test Backend label on browser.

## Deploy with docker compose

Run `docker-compose up -d` for create the Docker images and run the containers. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
