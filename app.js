const express = require('express');
const app = express();
const {resolve} = require('path');
const router = require("./routing")



//config
app.use(express.static(resolve('static')))
app.use(router)
 




module.exports = app;