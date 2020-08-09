// Calculator Spec 

/*
describe("Calculator", function() {

  beforeEach(function() {
    calc = new Calculator;
  })
  

    describe("Addition function", function() {
        it("should return 42", function() {
          calc.add(20);
          calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
          calc.add(7);
          calc.add(19);
          expect(calc.value).toBe(26)
        });
        it("should return an error if we don't supply two numbers", function() {
          spyOn(window, "alert");
          calc.add("Hitchhikers");
          expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});
*/

// What Can I Drink Spec

/*
describe("My whatCanIDrink function", function() {
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Checks age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
        
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        
        
        it("should return drink coke when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });
        
        it("should return drink beer when called as whatCanIDrink(18)", function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });
        
        it("should return drink beer when called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        }); 
        
        it("should return drink whisky when called as whatCanIDrink(30)", function() {
            var result = whatCanIDrink(30)
            expect(result).toBe("Drink Whisky");
        });
        
        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});

*/

//FizzBuzz spec

describe("My fizzBuzz function", function() {
  
  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  });

  describe("returns number, fizz, buzz or fizzbuzz", function() {
    it("should exist", function() {
      expect(fizzBuzz).toBeDefined();
    });

    it("should return Fizz when called as fizzBuzz(9)", function() {
      var result = fizzBuzz(9)
      expect(result).toBe("Fizz");
    });

    it("should return Buzz when called as fizzBuzz(20)", function(){
      var result = fizzBuzz(20)
      expect(result).toBe("Buzz"); 
    });

    it("should return FizzBuzz when called as fizzBuzz(90)", function() {
      var result = fizzBuzz(90)
      expect(result).toBe("FizzBuzz");
    });

    it("should return 2 when called as fizzBuzz(2)", function() {
      var result = fizzBuzz(2)
      expect(result).toBe(2)
    });
  });
});