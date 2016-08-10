'use strict';
var Alexa = require('alexa-sdk');
var request = require('request');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Ice and Fire';

/**
 * Array containing space facts.
 */
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'FindCharacterIntent': function () {
        this.emit('FindCharacter');

        //put utterances,etc in here
    },
    'FindCharacter': function () {
        var characterName = 'Walder';
        var url = "http://www.anapioficeandfire.com/api/characters?name=" + characterName;

        function checkBody(element, index, array) {
          var charName = element.name;
          var speechOutput = charName + "is also known as " + element.aliases[0];
          this.emit(':tell', speechOutput);
        }

        request(url, function(error, response, body) {
          var obj = JSON.parse(body);
          obj.forEach(checkBody);
        });

        // Create speech output
        //var speechOutput = "Here's your fact: " + randomFact;

        //this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
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

handlers.FindCharacter();