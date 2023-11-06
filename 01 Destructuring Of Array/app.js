// // // // // // // // // // /// // // Destructuring Of Arrays // // // // // // // // // // /// // //

// *****************************Destructuring of Array 01 (simple array)**********************************
// let arr = ['sam', 10, true, 100];

// let [] = arr // structure of destructuring of array
// let [val1, val2, val3, val4] = arr;

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);

// *****************************Destructuring of Array 02(by default)*************************************
// let arr = ['sam', , true, 100];
// let arr = [,,,];

// let [val1, val2 = 5, val3, val4] = arr;
// let [val1 = 'mac', val2 = 5, val3 = false, val4 = 10] = arr;

// console.log(val1)
// console.log(val2)
// console.log(val3)
// console.log(val4)

// *****************************Destructuring of Array 03(with nested array [step 01])*************************************

// let arr = ['karachi', 'lahore', ['islamabad', true, ['kpk'], 'multan', [false, 200, ['mirpurkhas'], 50]]];

// let [val1, val2] = arr;
// let [val3, val4] = arr[2];
// let [val5] = arr[2][2];
// let val6 = arr[2][3];
// let [val7, val8] = arr[2][4];
// let [val9,] = arr[2][4][2];
// let val10 = arr[2][4][3];

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);
// console.log(val5);
// console.log(val6);
// console.log(val7);
// console.log(val8);
// console.log(val9);
// console.log(val10);

// *****************************Destructuring of Array 04(with nested array [step 02])**********************************
// let arr = ['karachi', 'lahore', ['islamabad', true, ['kpk'], 'multan', [false, 200, ['mirpurkhas'], 50]]];

// let [val1, val2, [val3, val4, [val5], val6, [val7, val8, [val9], val10]]] = arr;

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);
// console.log(val5);
// console.log(val6);
// console.log(val7);
// console.log(val8);
// console.log(val9);
// console.log(val10);

//*****************************Destructuring of Array 05(with object)**********************************
// let arr = ['karachi', 'lahore', { gender: 'male', num: [100], bool: true }];

// let [val1, val2] = arr;
// let val3 = arr[2];
// let val4 = arr[2].gender;
// let val5 = arr[2].bool;
// let val6 = arr[2].num[0];

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);
// console.log(val5);
// console.log(val6);