# ABOUT THIS APP

This is backend for token based authentication using jwt, fetching data using external API and swagger integration.

I have used Node.js, Express.js, MongoDB, jsonwebtoken, swagger in this app.

# ROUTES

LOGIN
http://localhost:5000/api/v1/users/login  POST ROUTE (PUBLIC ROUTE)

REGISTER
http://localhost:5000/api/v1/users/register  POST ROUTE (PUBLIC ROUTE)

GET ALL USERS
http://localhost:5000/api/v1/users  GET ROUTE (PRIVATE ROUTE)

GET DATA FROM THIRD PARTY API
http://localhost:5000/api/v1/entries  GET ROUTE (PUBLIC ROUTE)

GET DATA FROM FROM PROTECTED API
http://localhost:5000/api/v1/post  GET ROUTE (PRIVATE ROUTE)

# TO RUN THIS PROJECT
### `clone the repo`
then
### `npm install`
then
### `add .env file in root directory. Variables are (PORT, MONGO_URI, JWT_SECRET)`
### `npm run dev` 
Runs the app in the development mode.
### `npm start`
Runs the app in the production mode.
