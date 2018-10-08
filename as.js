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
  
      it("toBeLessThan", function() {
		  var a1 = 5;
		  var a2 = 6;
		  console.log('Шестой тест');
      expect(a1 + a2).toBeLessThan(20);
  });
  
        it("toBeGreaterThan", function() {
		  var a3 = 10;
		  var a4 = 11;
		  console.log('седьмой тест');
        expect(a3 + a4).toBeGreaterThan(20);
  });
  
        it("toMatch", function() {
			str111 = 'Привет Макс';
			console.log('восьмой тест');
        expect(str111).toBeDefined();
  });
  
        it("toBeNull", function() {
			nullik = null;
			console.log('девятый тест');
            expect(nullik).toBeNull();

  });
  
        it("not.toBe", function() {
			first = { 
			a: 10,
			b: 11
			}
			second = {
			a: 10,
            b: 11			
			}
			console.log('десятый тест');
			expect(first).not.toBe(second);

  });
  
});