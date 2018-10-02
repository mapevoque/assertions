describe('Describe', function() {
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
search = element(by.xpath('//*[@id="reg_submit11"]'));

beforeEach(function() {
browser.get('https://profile.tut.by/register.html');
});

    it("test1", function () {
	
    search.isDisplayed().then(function(search){
		if(search === true){		
		console.log('EEEEEEE' + search);
		}else{
		browser.wait(function(search){
		browser.element(search);}, 15000);
		}
	}) 
	
    
    });
});