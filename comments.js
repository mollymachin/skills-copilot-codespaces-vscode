// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Read comments from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Add new comment
app.post('/comments', function(req, res) {
  var newComment = {
    id: Date.now(),