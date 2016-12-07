var _ = require ('lodash');
var rp = require ('request-promise');
var ENDPOINT = 'http://techfeedyservice.herokuapp.com/tweet/trends';

function TwitterDataHelper ( ) {
}

TwitterDataHelper.prototype.requestTwitterTrends = function ( ) {
    return this.getTwitterTrends( ).then (function (response) {
        return response.body;
    });
};

TwitterDataHelper.prototype.getTwitterTrends = function ( ) {

    var options = {
        method : 'GET',
        uri : ENDPOINT,
        resolveWithFullResponse: true,
        json: true
    };
    return rp (options);
}

TwitterDataHelper.prototype.twitterTopics = function (trendResponse) {
    
}

module.exports = TwitterDataHelper;