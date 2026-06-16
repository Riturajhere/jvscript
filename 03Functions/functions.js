// function adding(num1,num2){
//     const result= num1+ num2
//     return result
// }

// const result=adding(3,1)
// console.log(result);



// function greet(name) {  //if u give greet(name="Rituraj") then that would be default parameter of greet() and if any other value is given later then that wouold overwrite "Rituraj"
//     return `Hello, ${name}!`;
// }

// console.log(greet("Alice")); // "Hello, Alice!"


function calculate(val1,...num1)  {     // "..." is REST operator , gives the rest of the values  
    return num1 
}
console.log(calculate(200,400,500));