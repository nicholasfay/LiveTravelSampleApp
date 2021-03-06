//Main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const path = require('path');

//DB setup - creates a db within mongodb called auth (named from the /auth)
mongoose.connect('mongodb://nick:nickdev1@ds259079.mlab.com:59079/travelappdemo');

//App setup

// Serve static files from the React app
app.use(express.static(path.join(__dirname + '/../../dist')));

//Express middleware

//Morgan is a logging framework for incoming requests, mainly used for debugging
app.use(morgan('combined'));

//Parses incoming requests into json regardless of its type (change type to change this)
app.use(bodyParser.json({ type: '*/*' }));

//Allows CORS requests to make local development easier
// app.use(cors());

router(app);


//Server setup
const port = 8080;
const server = http.createServer(app);
server.listen(process.env.PORT || port);
console.log('Server listening on:', port);