//1
let age = 25;
let creditscore = 900;
let income = 50000;

if (age >= 18 && age <= 65 && creditscore >= 700 && income >= 30000) {
  console.log("Loan Approved");
} else {
  if (age < 18 || age > 65) {
    console.log("Loan not approved");
  }
}
// (Skip "2");
//5
let role = "editor";
if (role === "admin") console.log("full access");
else if (role === "editor") console.log("edit & view");
else if (role === "viewer") console.log("view only");
else console.log("limited access");
//6
let bmi = 26;
if (bmi < 18.5) console.log("underweight");
else if (bmi < 25) console.log("normal");
else if (bmi < 30) console.log("overweight");
else console.log("obese");
//7
let membership = "gold";
let purchaseamount = 120;
let discount = 0;

if (membership === "silver" && purchaseamount > 100) discount = 0.1;
else if (membership === "gold" && purchaseamount > 50) discount = 0.2;
let finalamount = purchaseamount * (1 - discount);
console.log(finalamount);
//9
let units = 350;
let bill = 0;

if (units <= 100) {
  bill = units * 0.5;
} else if (units <= 300) {
  bill = 100 * 0.5 + (units - 100) * 0.75;
} else {
  bill = 100 * 0.5 + 200 * 0.75 + (units - 300) * 1;
}
console.log("electricity bill");
//10
let availableseats = 5;
let validpassport = true;
let funds = 600;

if (availableseats > 0 && validpassport && funds >= 500) {
  console.log("Flight can be booked");
} else {
  if (availableseats <= 0) console.log("cannot book");
  else if (!validpassport) console.log("invalid passport");
  else if (funds < 500) console.log("insufficient funds");
}
