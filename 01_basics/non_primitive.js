let obj1 ={  //singleton object
    name:"Rituraj",
    age:21,
    wt:81.12,
    fullname: { //nesting of objects
        Username: "rituraj3314shukla",
        pass:"Iambatman@3314"
    }
};


console.log(obj1.fullname.username);  //chaining for nested objects
const obj = {};  //Non singleton object

// Add
obj.newProp = "value";
obj["another"] = 123;

// Update
obj.newProp = "changed";

// Delete
delete obj.another;

// Freeze (prevents any changes)
Object.freeze(obj);
obj.newProp = "won't work";  // Silent fail in non-strict mode

// Seal (can modify existing, can't add/delete)
Object.seal(obj);


//combining objects

const obj3= Object.assign({},obj1,obj)
console.log((obj3));

//get keys

console.log(Object.keys(obj1));
console.log(Object.values(obj1));




// console.log(obj1);

// or another way to define objects is 

// const obj2= new Object();
// obj2.name="Rituraj"
// obj2.age=21
// obj2.wt=81.12

// console.log(obj2);


// You can also define the objects as constructors and give them the values passed to the constructor function



//arrays : 



// const fruits = ["apple", "banana", "orange"];
// const numbers = [1, 2, 3, 4, 5];
// const mixed = [1, "hello", true, null];

// console.table([fruits,numbers,mixed]);




//functions: 

// function greet(name) {
//   return `Hello ${name}`;
// }

// const add = (a, b) => a + b;


//That is all folks see you later