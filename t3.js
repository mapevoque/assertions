describe('Describe', function() {
browser.waitForAngularEnabled(false);
//browser.ignoreSynchronization = true;
//By = browser.By;
until = browser.until;
search = element(by.id('reg_submit5'));

beforeEach(function() {
browser.get('https://profile.tut.by/register.html');
});

    it("test1", function () {
//expect(search.isDisplayed()).toBeFalsy("Ошибка");
//expect(browser.wait(search,15000).isDisplayed()).toBeTruthy("Ошибка");
browser.wait( async () => {
	await search.isDisplayed();
	//var EC = ExpectedConditions;
    //browser.wait(EC.visibilityOf(search), 10000);
    //return search;
},15000);

	
//var until = protractor.ExpectedConditions;
//browser.wait(until.search, 15000, 'WAITING');		
		
//rir = browser.wait(search,15000).then(function(rir){
//console.log("POWER " + rir);
//});
});

});