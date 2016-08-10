'use strict';
var Alexa = require('alexa-sdk');
var request = require('request');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Ice and Fire';


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('');
    },
    'FindCharacterIntent': function () {
    	'slots': {
    		'Name': 'AMAZON.LITERAL',
    		'Alias':'AMAZON.LITERAL'
  		},
  'utterances': ['{|Tell|Who} {|me|is} {|about} {-|Name} {|AKA} {-|Alias}']
},
  function(req, res) {
    //get the slot
    var name = req.slot('Name');
    var reprompt = 'Please Say a Name. I can\'t help you without a Name.';
	if (_.isEmpty(name)) {
      var prompt = 'Please Say a Name. I can\'t help you without a Name.';
      res.say(prompt).reprompt(reprompt).shouldEndSession(false);
      return true;
    } else {
        request(str.replace('http://www.anapioficeandfire.com/api/characters?name=%s',name), function (error, response, body) {
       	
  			if (!error && response.statusCode == 200) {
  			
    			console.log(body) // Show the HTML for the Google homepage. 
    			//TODO: add better logging or failure state
    			
  				}
      	}).catch(function(err) {
        console.log(err.statusCode);
        var prompt = 'I didn\'t have data for an airport code of ' + airportCode;
        res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
      });
      return false;
    }
  }
}
);
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};