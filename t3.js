describe('Describe', function() {
browser.waitForAngularEnabled(false);
//browser.ignoreSynchronization = true;
//By = browser.By;
//until = browser.until;
search = element(by.id('reg_submit'));

beforeEach(function() {
browser.get('https://profile.tut.by/register.html');
});

    it("test1", function () {
 rir = browser.wait(search,15000).isDisplayed().then(function(rir){
 console.log("POWER " + rir);
 });
});

});