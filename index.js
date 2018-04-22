const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const controller = require('./src/App');
// const resume = require('./src/resume.html');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', controller);

// app.post('/', controller.change);

// app.get('/resume', resume);
