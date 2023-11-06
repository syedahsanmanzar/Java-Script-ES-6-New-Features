//////////////////////// class syntax /////////////////////////
// class ClassName {
//     constructor() { }
// }


// //////////////////////// class (method 01 - simple class) /////////////////////////
// class Students {
//     constructor(fname, lname, age, city) {
//         this.stuFname = fname;
//         this.stuLname = lname;
//         this.stuAge = age;
//         this.stuCity = city;
//     }
// }

// let stu1 = new Students('syed ahsan', 'manzar', 20, 'karachi');

// console.log(stu1);


//////////////////////// class (method 02 -  class with methode) /////////////////////////
// class Students {                                                     // this is class
//     constructor(fname, lname, age, city) {                           // this is constructor
//         this.stuFname = fname;
//         this.stuLname = lname;
//         this.stuAge = age;
//         this.stuCity = city;
//     }
//     fullName() {                                                     // this is methode
//         return `${this.stuFname} ${this.stuLname}`;
//     }
// }

// let stu1 = new Students('syed ahsan', 'manzar', 20, 'karachi');

// console.log(stu1);
// console.log(stu1.fullName());

//////////////////////// class (method 03 - class with extends,super() methode) /////////////////////////
// class Students {
//     constructor(fname, lname, age, city) {
//         this.stuFname = fname;
//         this.stuLname = lname;
//         this.stuAge = age;
//         this.stuCity = city;
//     }
// }

// class StudentEmail extends Students {
//     constructor(fname, lname, age, city, email) {                     // (extends) this keyword is used to extend the main class constructor.
//         super(fname, lname, age, city);                               // calls the parent constructor (only inside the constructor).
//         this.stuEmail = email;
//     }
// }

// let stu1 = new Students('syed ahsan', 'manzar', 20, 'karachi');

// console.log(stu1);

// let stu2 = new StudentEmail('syed ahsan', 'manzar', 20, 'karachi', 'ahsan@gmail.com');

// console.log(stu2);
