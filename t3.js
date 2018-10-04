describe('Describe', function() {
browser.waitForAngularEnabled(false);
//browser.ignoreSynchronization = true;
//By = browser.By;
var a;
until = browser.until;
search = element(by.id('reg_submit'));

var i = 1;
function inc(){ 
  return i++ ;
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

beforeEach(function () {
browser.get('https://profile.tut.by/register.html');
});

    it("test1", function () {
value = search.isEnabled().then(function wiii(resolve, reject){
	if(resolve == true){
		return true;
	}else{
		if(resolve == false){
			sleep(5000);
			console.log('Дошли до ИФА');
			if(inc() == 3){console.log('ПРЕВЫШЕН ПОХОД'); return true;}else{console.log('Вызов функции'); wiii(resolve);}
			
		}
	}
	
});


});
});