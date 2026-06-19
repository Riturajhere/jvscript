const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

// Iterates over enumerable property keys
//FOR...in loop  

for (const key in person) {
    console.log(key,`:`, person[key]); // name Alice, age 30, city New York
}
//*****FOR..In can be used to iterate through objects */


const myobj={
js:"javascript",
rb:"ruby",
swt:"Swift"
}


for(const key in myobj){
    console.log((`${key} is a shortcut for ${myobj[key]}`));
}

//FOR...OF loop

const arr=[1,2,3,4,3]
for(const value of arr){
console.log(value);
}


const str= "Hello Tunnu"
for(const char of str){
    console.log((char));
}

//MAPS

const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
    console.log(key, value);
}

//**********objects are not iteratable like maps 






//******FOR EACH  


const coding=["js","ruby","c++","java"]

coding.forEach(function(item){
    console.log(item);
    
    //give any block of code inside this function , it will always take the array coding as the parameter
})