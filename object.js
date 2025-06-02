const obj = {};
const datas = {
  user1: "gugf",
  num: 3,
};
//nested object
const student = {
  name: "naomi",
  grades: {
    English: "B3",
    Biology: "A1",
    Physics: "E8",
  },
  isActive: true,
};
console.log(student);

//prototyped object

const animal = {
  type: "unknown",
  sound: "none",
  makeSound() {
    console.log(this.sound);
  },
};
const dog = Object.create(animal);
dog.type = "dog";
dog.sound = "woof";
console.log(dog);

//object.assign()

const defaultsettings = { theme: "light", fontsize: 16 };
const usersettings = { fontsize: 18 };

const finalSetting = Object.assign({}, defaultsettings, usersettings);
console.log(finalSetting);
delete usersettings.defaultsettings;
console.log(defaultsettings);

//object.FromEntries

const ent = [
  ["name", "tosin"],
  ["age", 25],
];
console.log(Object.fromEntries(ent));
//using spread operators(...)

const original = { A: 77, B: 66 };
const final = { ...original, C: 55 };
console.log(final);

//delete property
const user = {
  name: "alice",
  age: 40,
  email: "gfwfbweh@gmail.com",
};

console.log(user);
delete user.email;
console.log(user);

//Object.keys
const keys = Object.keys(user);
console.log(keys);

//Object.values
const values = Object.values(user);
console.log(values);

//Object.entries
const entries = Object.entries(user);
console.log(entries);
const swapped = Object.fromEntries(
  Object.entries(user).map(([key, value]) => [value, key])
);
console.log(swapped);
//Object.freeze

const names = {
  firstname: "ada",
  secondname: "adaobi",
  ages: {
    duse: 79,
  },
};
console.log(names);
const freeze = Object.freeze(user);
console.log(freeze);

Object.seal(names);

names.firstname = "kamfe";
names.ages.duse = 87;
console.log(names);
const profile = {
  name: "rerrt",
  age: "fthrv",
};
//profile.name = "tolani";
//console.log(profile);
delete profile.name;
console.log(profile);
