describe('Describe', function() {
browser.waitForAngularEnabled(false);
//browser.ignoreSynchronization = true;
//By = browser.By;
until = browser.until;
search = element(by.id('reg_submit'));

var i = 1;
function inc(){ 
  return i++ ;
}

var b = 1;
function inc2(){ 
  return b++ ;
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

beforeEach(function () {
browser.get('https://profile.tut.by/register.html');
});

    it("test1", function () {
		check1 = search.isPresent().then(function firstcheck(resolve, reject){
			if(resolve == true){
value = search.isEnabled().then(function wiii(resolve, reject){
	if(resolve == true){
		console.log('Объект дотупен');
	}else{
		if(resolve == false){
			sleep(5000);
			if(inc() == 3){console.log('Объект недоступен, проверьте объект'); return true;}else{console.log('Вызов функции'); wiii(resolve);}
			
		}
	}
	
});
			}else{
				sleep(7000);
				if(inc2() == 3){console.log('Объекта нет в DOM, проверьте локатор'); return true;}else{console.log('Вызов функции'); firstcheck(resolve);}
				
			}
}); 


});
});