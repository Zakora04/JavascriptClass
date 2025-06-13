//for loop
// for(let i=0; i<=5; i++){
//     console.log(i)
// }
// for(let i=5; i<=1; i--){
//     console.log(i)
// }

//while  loop
// let count=1;
// while(count<=5){
//     console.log(count);
//     count++;
// }
let counts=1;
while(counts<=5){
    console.log(counts)
    counts+=2;
}
// let userAnswer=""
// while(userAnswer!=="yes"){
//     prompt("Do you like javascript? yes/no")
// }
// console.log("great! you like javascript")

//for.....in
const fruits=["apple","coconut","orange"];
for(const fruit of fruits){
    console.log(fruit);
}
const profile={
    username:"tosin",
    password:"ethhmw",
    isActive:true

}
for(const key in profile){
    console.log(key);
}
for(const key in profile){
    console.log(profile[key])
}
profile["username"]="david"
console.log()