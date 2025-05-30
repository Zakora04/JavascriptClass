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

//object.Entries

const ent = [
  ["name", "tosin"],
  ["age", 25],
];
console.log(Object.fromEntries(ent));
//using spread operators(...)

const original = { A: 77, B: 66 };
const final = { ...original, C: 55 };
console.log(final);
