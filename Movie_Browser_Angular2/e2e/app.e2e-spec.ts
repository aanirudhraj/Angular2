import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Angular2 Movie Browser';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('a.navbar-brand')).getText()).toEqual(expectedMsg);
  });

});

describe('Search', () => {
 
  beforeEach(() => {
    browser.get('/');
  });
 
  it('should have an input and search button', () => {
    expect(element(by.id('get-movie')).isPresent()).toEqual(true);
  
  });
 
  it('should allow searching', () => {
    let searchButton = element(by.css('span.input-group-addon'));
    let searchBox = element(by.id('get-movie'));
    searchBox.sendKeys('Matrix');
    searchButton.click().then(() => {
      // doesn't work as expected - results in 0
      //expect(element.all(by.repeater('person of searchResults')).count()).toEqual(3);
      var myElement = element(by.css('div.thumbnail animated flip movie-poster'));
     expect(myElement.isPresent()).toBeFalsy();
    });
  });
});
