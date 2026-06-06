//STACK MEMORY : USED IN PRIMITIVE DATATYPES
//HEAP MEMORY: USED IN NON PRIMITIVE DATATYPES


//anything defined in heap memory will be called by reference for example

let user1= {
    name:"Rituraj",
    upiID:"rituraj@ybl",
    number:94155
};

//now if i give this user1 values to another variable user2 then user2 will get the reference of user1 and any changes made to user2 will relflect in user1 and vice versA

let user2= user1

console.log(user2);


user2.name="Shukla"
user2.upiID="Shukla@ybl"


console.log(user1);