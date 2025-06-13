 HEAD
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

//Strings (5 questions)
//Convert this string to uppercase:
//let greeting = "hello world";
let Name = "daniella";
console.log(Name.toUpperCase());

//Extract "world" from this string using slice():
//let text = "hello world";
let text = "Hello world";
console.log(text.slice(5));

//Replace all spaces with hyphens in this string:
//let sentence = "JavaScript is awesome";
let sentence = "JavaScript is awesome";
console.log(sentence.replace(/ /g, "-"));

//Check if this string starts with "Mr":
//let name = "Mr. Smith";
let Names = "Mr. Smith";
console.log(Names.includes("Mr"));

//Split this string into an array of words:
//let phrase = "apple,banana,orange";
let phrase = "apple,banana,orange";
console.log(phrase.split());

//Numbers (5 questions)

//Convert this string to a number:
//let numStr = "42";
let numStr = "42";
console.log(numStr.toString());

//Round this number to 2 decimal places:
//let price = 19.9876;
let price = 19.9876;
console.log(price.toFixed());

//Generate a random number between 1 and 10:
let number = Math.random() * 10;
console.log(number);

//Check if this value is NaN:
//let result = 0/0;
let result = 0 / 0;
console.log(isNaN());

//Convert this number to a hexadecimal string:
//let value = 255;
let value = 255;
let newvalue = value.toString();
console.log(newvalue);

//Arrays (5 questions)

//Add "grape" to the end of this array:
//let fruits = ["apple", "banana"];
let fruits = ["apple", "banana"];
fruits.unshift("grape");
console.log(fruits);

//Remove the first element from this array:
//let colors = ["red", "green", "blue"];
let colors = ["red", "green", "blue"];
colors.shift();
console.log(colors);

//Combine these two arrays:
//let arr1 = [1, 2];
//let arr2 = [3, 4];
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2));

//Reverse this array:
//let letters = ["a", "b", "c"];
let letters = ["a", "b", "c"];
console.log(letters.reverse());

//Check if "banana" exists in this array:
//let groceries = ["apple", "orange", "banana"];
let groceries = ["apple", "orange", "banana"];
console.log(groceries.includes("banana"));

//Objects (5 questions)

//Access the age property of this object:
//let person = { name: "John", age: 30 };
let person = { name: "John", age: 30 };
console.log(person.age);

//Add a new property to this object:
//let car = { make: "Toyota" };
// Add model: "Camry"
let car = { make: "Toyota" };
const newcar = { ...car, model: "Camry" };
console.log(newcar);

//Get all keys of this object:
//let student = { name: "Alice", grade: "A" };
let student = { name: "Alice", grade: "A" };
const keys = Object.keys(student);
console.log(keys);

//Delete the password property from this object:
//let user = { name: "Bob", password: "123" };
let user = { name: "Bob", password: "123" };
console.log(user);

delete user.password;
console.log(user);

//Check if this object has an "email" property:
//let contact = { name: "Sarah", phone: "555-1234" };
let contact = { name: "Sarah", phone: "555-1234" };
console.log("email" in contact);

