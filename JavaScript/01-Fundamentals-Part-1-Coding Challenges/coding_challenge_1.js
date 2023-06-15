/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀
*/

// Test Data 1
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;

let markHigherBMI = bmiMark > bmiJohn;

console.log("Mark's BMI: " + bmiMark + "\nJohn's BMI: " + bmiJohn + "\nMark has a higher BMI than John: " + markHigherBMI);

// Test Data 2
massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;

markHigherBMI = bmiMark > bmiJohn;

console.log("Mark's BMI: " + bmiMark + "\nJohn's BMI: " + bmiJohn + "\nMark has a higher BMI than John: " + markHigherBMI);
