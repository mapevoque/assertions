describe('Describe', function() {
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
search = element(by.id('reg_submit4'));

beforeEach(function() {
browser.get('https://profile.tut.by/register.html');
});

    it("test1", function () {
		try{
       search.isDisplayed();

		}
		catch(e) {
		console.log('DDDDDD');
		}
})
});