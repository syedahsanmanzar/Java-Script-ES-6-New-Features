// // // // // // // // // // // // // // // Promises(simple method) // // // // // // // // // // // // // // //

// let prom = new Promise((resolve, reject) => { // new Promise is a key word to creat promise
//     const status = true;

//     if (status) {
//         resolve('successful...')
//     } else {
//         reject('unsuccessful...')

//     }
// });

// prom.then((data) => { console.log(data) }).catch((arr) => { console.log(arr) });

// // // // // // // // // // // // // // // Promises(async & await) // // // // // // // // // // // // // // //

//                                                                    promise with async & await
// let fetch_data = async () => {

//     const data = await fetch('https://fakestoreapi.com/products/1')
//         .then(res => res.json());
//     console.log(data);

// }

// fetch_data()
// console.log('call timing');

//                                                                    promise with async & await / try & catch
// promise with async & await with try/catch method
// let fetch_data = async () => {

//     try {
//         const data = await fetch("https://fakestoreapi.com/products/1")
//             .then(res => res.json());
//         console.log(data);
//     } catch (error) {
//         console.log(error.message);
//     }

// };

// fetch_data();

// console.log("call timing");















// let promise = new Promise((resolve, reject) => {

//     const status = false;
//     if (status) {
//         resolve('successful');
//     } else {
//         reject('un-successful');
//     }

// })

// promise.then(data => console.log(data)).catch(err => console.log(err));



