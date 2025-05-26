//.push (Adds an element to the end)
const courses = [];
courses.push("Javascript");
console.log(courses);

const topics = ["Data Types", "Numbers", "Operators"];
topics.push("Strings");
console.log(topics);

//.pop (Removes the last element)
topics.pop();
console.log(topics);

//.unshift (Adds element to the beginning)
const foods = ["Beans", "Rice", "Garri"];
foods.unshift("Plantain");
console.log(foods);

//.shift (Removes element at the beginning)
foods.shift();
console.log(foods);

//.splice (Adds or remove elements at a specific index,The first number removes
// the element, while the second deletes anything after it)
foods.splice(1, 2, "Indomie");
console.log(foods);

const alphabets = ["a", "b", "c", "d", "e"];
alphabets.splice(-2, 4);
console.log(alphabets);

//.slice()
alphabets.slice(2, 2);
console.log(alphabets);

const words = ["dare", "yemi", "simi", "tunde", "banjo"];
const sliced = words.slice(3, 4);
console.log(sliced);
