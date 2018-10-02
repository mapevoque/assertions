describe('Describe', function() {
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
search = element(by.xpath('//*[@id="reg_submit"]'));

beforeEach(function() {
browser.get('https://profile.tut.by/register.html');
});

    it("test1", function () {
		
    browser.wait(search.isDisplayed(),15000)
    });
});