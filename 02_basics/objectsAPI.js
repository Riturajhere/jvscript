//Object Destructuring 

const obj={ 
    fullname:"Rituraj_Shukla",
    age:21,
    wt:80
}

const {fullname: name}= obj
//now u can just write name to access obj.fullname
console.log((name));


//JSON API intro

// {
//     "name" : "Rituraj",
//     "age" : "21",
//     "wt" : "80"
// }