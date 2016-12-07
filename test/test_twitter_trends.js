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

    describe ('#TwitterTopics', function () {
        var trendResponse = [{
            trends : [{name: '#DonaldTrump', tweet_volume: '50786'},
                        {name: '#HilaryClinton', tweet_volume: '50786'} ],
            locations : [{name: 'WorldWide', woeid: 1}]
        }];

        context ('with Current topic', function () {
            it ('returns current topic', function () {
                var topic = subject.twitterTopics (trendResponse)
                return expect(topic).to.eq('#DonaldTrump');
            })
        });
    })

});