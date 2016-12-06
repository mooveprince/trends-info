var chai = require ('chai');
var chaiAsPromised = require ('chai-as-promised');
chai.use (chaiAsPromised);
var expect = chai.expect;
var TwitterDataHelper = require ('../twitter_data_helper');
chai.config.includeStack = true;

describe ('TwitterDataHelper', function () {

    var subject = new TwitterDataHelper ();
    var location = 'Worldwide';

    describe ('#TwitterTrendsLocation', function () {
        context ('with worldwide location', function () {
            it ('returns worldwide trends', function () {
                var value = subject.requestTwitterTrends ().then(function (obj) {
                    return obj[0].locations[0].name;
                });
                return expect(value).to.eventually.eq(location);
            });
        });
    });

});