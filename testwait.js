var webdriver = require('selenium-webdriver');

By = webdriver.By;
until = webdriver.until;


var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome())
    .build();
driver.get('https://profile.tut.by/register.html');

fio = driver.wait(until.elementLocated(By.xpath('//*[@id="field-fio"]')),15000).isDisplayed().then(function(fio){
    console.log('Field FIO is ' + fio);
});

reg = driver.wait(until.elementLocated(By.xpath('//*[@id="reg_submit"]')),25000).isEnabled().then(function(reg){
    console.log('Registration is ' + reg);
});