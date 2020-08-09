// Calculator Function

/*
Calculator = function() {
  this.value = 0;
}

Calculator.prototype.add = function(number) {
  if (typeof(number) == "number") {
    this.value += number;
  } else {
    alert("Error!");
  }
}
*/

// Drink About Function Challenge

whatCanIDrink = function(age) {
  if(age < 0) {
    return "Sorry. I can’t tell what drink because that age is incorrect!";
  }

  else if(age < 14) {
    return "Drink Toddy";
  }

  else if(age < 18 && age >= 14) {
    return "Drink Coke";
  }

  else if(age < 21 && age >= 18) {
    return "Drink Beer"
  }

  else if(age < 130) {
    return "Drink Whiskey"
  } 
  
  else {
    return "Sorry. I can't tell what drink because that age is incorrect"
  }
};