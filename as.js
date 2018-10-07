describe("description", function() {
  it("сравнение двух чисел", function() {
	  var number1 = 5;
	  var number2 = 5;
	  console.log('Первый тест');
	  expect(number1).toBe(number2);
	  expect(number1 == number2).toBeTruthy()

  });

  it("сравнение двух строк на полное совпадение", function() {
	  var string1 = 'Привет Макс';
	  var string2 = 'Привет Макс';
	  console.log('Второй тест');
	  expect(string1).toBe(string2);
  });
  
    it("сравнение двух строк на частичное совпадени(содержит)", function() {
      var string3 = 'Привет Макс';
	  var string4 = 'Макс';
	  console.log('Третий тест');
	  expect(string3).toContain(string4)
  });
  
    it("сравнение массивов", function() {
		var array1 = [1,2,3,4];
		var array2 = [1,2,3,4];
		console.log('Четвертый тест');
		expect(array1).toEqual(array2);
		
  });
  
    it("сравнить массив строк", function() {
    var array3 = ["Есть", "жизнь", "на", "Марсе"];
	var array4 = ["Есть", "жизнь", "на", "Марсе"];
	console.log('Пятый тест');
	expect(array3[1]).toEqual(array4[1]);
  });
  
});