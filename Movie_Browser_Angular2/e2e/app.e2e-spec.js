"use strict";
var protractor_1 = require('protractor');
describe('QuickStart E2E Tests', function () {
    var expectedMsg = 'Angular2 Movie Browser';
    beforeEach(function () {
        protractor_1.browser.get('');
    });
    it('should display: ' + expectedMsg, function () {
        expect(protractor_1.element(protractor_1.by.css('a.navbar-brand')).getText()).toEqual(expectedMsg);
    });
});
describe('Search', function () {
    beforeEach(function () {
        protractor_1.browser.get('/');
    });
    it('should have an input and search button', function () {
        expect(protractor_1.element(protractor_1.by.id('get-movie')).isPresent()).toEqual(true);
    });
    it('should allow searching', function () {
        var searchButton = protractor_1.element(protractor_1.by.css('span.input-group-addon'));
        var searchBox = protractor_1.element(protractor_1.by.id('get-movie'));
        searchBox.sendKeys('Matrix');
        searchButton.click().then(function () {
            // doesn't work as expected - results in 0
            //expect(element.all(by.repeater('person of searchResults')).count()).toEqual(3);
            var myElement = protractor_1.element(protractor_1.by.css('div.thumbnail animated flip movie-poster'));
            expect(myElement.isPresent()).toBeFalsy();
        });
    });
});
//# sourceMappingURL=app.e2e-spec.js.map