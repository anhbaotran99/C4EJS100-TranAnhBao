let weight = prompt("Your weight in kg?");
let height = prompt("Your height in cm?");
let BMI = weight / ((height/100)*(height/100));
alert("Your BMI is " + BMI);
if(BMI < 16) alert("You are severely underweight");
else if(BMI >= 16 && BMI < 18.5) alert("You are Underweight");
else if(BMI >= 18.5 && BMI < 25) alert("You are normal");
else if(BMI >= 25 && BMI < 30) alert("You are overweight");
else alert("You are obese");