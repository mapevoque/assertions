
describe('TUTBY homepage todo list',() => {
browser.waitForAngularEnabled(false);
var search = element(by.id('reg_submit'));

beforeEach( async () =>  {
browser.get('https://profile.tut.by/register.html');
});
  it('TimeFunc', async () =>   { 
await waitdispl(search);  
  });
});

public static async waitdispl (webElement:ElementFinder){
	await browser.wait(ExpectedConditions.visibilityOf(webElement),15000);
}