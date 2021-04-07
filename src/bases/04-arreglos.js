const array = [1,2,3,4];

let array2 = [...array, 5];
array2.push(6);

const array3 = array2.map((number) => {
    return number * 2;
});


console.log(array);
console.log(array2);
console.log(array3);
