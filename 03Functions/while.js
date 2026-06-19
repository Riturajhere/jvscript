let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


// do...while (executes at least once)
do {
    console.log(i);
    i++;
} while (i < 5);




//BREAK statement

// Exits the loop entirely
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// With labels (jump to outer loop)
outer: for (let i = 0; i < 3; i++) {
    inner: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outer;
        console.log(i, j);
    }
}
// Output: (0,0), (0,1), (0,2), (1,0)


//Continue statement

// Skips the current iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0, 1, 3, 4
}

// With labels
outer: for (let i = 0; i < 3; i++) {
    inner: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) continue outer;
        console.log(i, j);
    }
}


// break inside switch breaks out of switch, not loop
for (let i = 0; i < 5; i++) {
    switch(i) {
        case 2:
            break; // Breaks switch, not loop!
        case 3:
            console.log('Found 3');
            break;
    }
    console.log(i); // Prints for all
}