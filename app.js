'use strict'

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const newsRoutes = require('./Routes/newsRoutes');
const UserRoutes = require('./Routes/userRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/user', UserRoutes);
app.use('/news', newsRoutes);

module.exports = app;