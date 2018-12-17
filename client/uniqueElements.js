let arr1 = ['a','a','a','v','v','c','d','e','v'];

// arr1.forEach(element => {
//     // console.log(arr1.indexOf(element))

// });

for (let i = 0; i < arr1.length; i++) {
    // console.log(i);
    // console.log(arr1.indexOf(arr1[i]))
    arr1.indexOf(arr1[i]) === i ? console.log(arr1[i])
}