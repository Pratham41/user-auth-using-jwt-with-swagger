const express = require("express");
const morgan = require("morgan");
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
require("dotenv").config();
require("./src/config/db");
const userRoutes = require("./src/routes/user.route");
const entriesRoutes = require("./src/routes/entries.route");
const postRoutes = require("./src/routes/post.route");
const swaggerDocument = yaml.load('./src/config/swagger.yaml');


const app = express();

// INTEGRATING SWAGGER
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(morgan("dev"));

// ROUTES FOR USER(LOGIN, REGISTRATION AND LOGOUT) WITH JWT AUTH
app.use("/api/v1/users", userRoutes);

// ROUTES FOR ENTRIES (FETCHING DATA FROM EXTERNAL API AND FILTRING)
app.use("/api/v1/entries", entriesRoutes);

// ROUTES FOR GETTING SOME DATA FOR SECURE API USING JWT
app.use("/api/v1/posts",postRoutes)

let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
  console.log(`swagger running on http://localhost:${port}/api-docs`);
});