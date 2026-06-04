let score= "33"
console.log(typeof score);
console.log(typeof(score));

let valueinnumber= Number(score);  //typecasting basically

console.log(valueinnumber);     
console.log(typeof valueinnumber); 

//typecasting can be wrong in case there is a  char with the number

let score2= "33abc"
let valueinnumber2= Number(score2);  //NaN means not a number


console.log(valueinnumber2);     
console.log(typeof valueinnumber2); 

let score3= null
let valueinnumber3= Number(score3);  //null is considered as 0 in number typecasting    
console.log(valueinnumber3);     
console.log(typeof valueinnumber3);     


let isloggenin= 11
let booleanisloggedin= Boolean(isloggenin)  //any number other than 0 and any string other than empty string is considered as true in boolean typecasting
console.log(booleanisloggedin);
console.log(typeof booleanisloggedin);  

