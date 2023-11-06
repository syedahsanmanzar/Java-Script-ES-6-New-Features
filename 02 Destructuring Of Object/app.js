// // // // // // // // // // // // Destructuring Of Objects // // // // // // // // // // // //

// const nestedObject = {
//     key1: "value1",
//     key2: "value2",

//     key3: {
//         subKey1: "subValue1",
//         subKey2: "subValue2",

//         subKey3: {
//             subSubKey1: "subSubValue1",
//             subSubKey2: "subSubValue2",

//             subSubKey3: {
//                 subSubKey4: "subSubValue3.1",
//                 subSubKey5: "subSubValue3.2",
//             },

//             subSubKey6: "subSubValue4",
//         },

//         subKey4: {
//             subSubKey7: "subSubValue4.1",
//             subSubKey8: "subSubValue4.2",
//         }
//     },

//     key4: "value4",
// };

// let { key1, key2, key3, key4 } = nestedObject;
// let { subKey1, subKey2, subKey3, subKey4 } = nestedObject.key3;
// let { subSubKey1, subSubKey2, subSubKey3, subSubKey6 } = nestedObject.key3.subKey3;
// let { subSubKey4, subSubKey5 } = nestedObject.key3.subKey3.subSubKey3;
// let { subSubKey7, subSubKey8 } = nestedObject.key3.subKey4;

// console.log(key1);
// console.log(key2);
// console.log(subKey1);
// console.log(subKey2);
// console.log(subSubKey1);
// console.log(subSubKey2);
// console.log(subSubKey4);
// console.log(subSubKey5);
// console.log(subSubKey6);
// console.log(subSubKey7);
// console.log(subSubKey8);
// console.log(key4);
