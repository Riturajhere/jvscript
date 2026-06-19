const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

// Iterates over enumerable property keys
//FOR...in loop  

for (const key in person) {
    console.log(key, person[key]); // name Alice, age 30, city New York
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