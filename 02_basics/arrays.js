// //JS arrays are resizable and can be edited. can have any datatype. starts at 0

// //uses Shallow copies: reference point is shared

// const narray= [0,1,3,43,23.5,0,"Rituraj"]
// console.log(narray);

// const myarr= new Array(1,2,4,2)

// console.log((myarr));

// myarr.push(9)
// console.log(myarr);

// myarr.pop()
// console.log(myarr);


// console.log(myarr.includes(2));
// console.log((myarr.indexOf(12))); //gives -1 if value doesnt exist

// // console.log((myarr.join()));  //joins the elements of arr as a string






const marvel = ["Ironman" , "Spiderman", "Thor"]
const dc= ["Superman", "Batman"]

const all = marvel.concat(dc); //concat only works if you assign the concatenation to a new array
console.log((all));


const newarr= [ 1,2,3,[1,3,34,43],[3,5,[3,2,4]]]
console.log((newarr));

const realarr= newarr.flat(Infinity) // this will give all the elements of newarr simply as a new array without going into dimensions

console.log(realarr);

console.log(Array.from("Rituraj"));


const score1= 199
const score2= 200
console.log(Array.of(score1,score2));

