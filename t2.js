describe('BBC homepage todo list', function() {
  it('BBC', function() {
    browser.get('https://www-qa2.tcsbank.ru/');
	browser.wait(function(){
return element(by.id('identifier1')).isDisplayed();
}, 15000);
  });
});



