let accounts = require('./accounts');
const express = require('express');
const dotEnv = require("dotenv")
database = require("./database")
const app = express();

const accountsRoutes = require('./api/accounts/accounts.routes');

app.use(express.json());
app.use('/accounts', accountsRoutes);

app.listen(process.env.PORT, () => {
  console.log('The application is running on localhost:8000');
});
