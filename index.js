var _ = require('lodash');
var Alexa = require('alexa-app');
var app = new Alexa.app('trendsinfo');
var TwitterDataHelper = require('./twitter_data_helper');

app.launch(function(req, res) {
  var prompt = 'Current trending tropic in Twitter';
  res.say(prompt).reprompt(prompt).shouldEndSession(false);
});



module.exports = app;