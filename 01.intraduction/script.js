////////////// TASK 1 //////////////

// // 1.Multiply 12 with 8, and console the result:

// let a = 8*12
// console.log(a);

// //  2.Divide 10 by 2 add result to variables x, and console x:

// let x = 10/2
// console.log(x);

// // 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

// let num1 = 20
// let num2 = 17
// console.log(num1 + num2);

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

    // const info={
    //     name:'Nizam ',
    //     surname:'Maharramov',
    //     birthday:1999
    // }
    // console.log(info);

// 5.Console the remainder(%) when 17 is divided by 12.
//  let a = 17 % 12
//  console.log(a);

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.

// let cityName = 'Baku'
// cityName = 'Gence'
// console.log(cityName);



////// TASK 2 //////////////

//  let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); // 2
// console.log(d); // 1
// console.log(b); // 2
// console.log(a); // 2

////////////// TASK 3 //////////////

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x);  // 5



////////////// TASK 4 //////////////

// console.log('test1', test); // error, cunki keyword, variable name və value təyin olunmayib
// {
//     let test = "something"
//     console.log('test2', test); // ayri scope-un daxilinde yazildigina gore duzgun cavab budur və let test = "something" təyin olunub.
// }
// console.log('test3', test);  //  error, cunki burdada təyinat yoxdur, hemde scope-dan kenarda yazilib.


////////////// TASK 5 //////////////

//Find the type of all the following cases

// let name = "Ulfat"// string
// // let surname = Zakirli// string, amma "" icinde yazilmalidir.
// year = "2000"// string
// let city;// undefined
// let qualification = null// null
// let obj = { name: 'ulfat' }// object
// let arr = ['a', 'b', 'c']// object ( array)


// console.log(typeof(name));
// console.log(typeof(surname));
// console.log(typeof(year));
// console.log(typeof(city));
// console.log(typeof(qualification));
// console.log(typeof(obj));
// console.log(typeof(arr));



////////////// TASK 6 //////////////
// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// 3.Remove first two numbers from arr1
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// 5.Remove four numbers in front of arr1(shift)

// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// let sum=arr1[0]+arr1[1]+arr1[2]+arr1[3]+arr1[4]+arr1[5]+arr1[6]+arr1[7]+arr1[8]+arr1[9]+arr1[10]+arr1[11];

// arr1.push(10,88);
// arr1.shift(arr1[0],arr1[1]);
// arr1.unshift(0,9,11);
// arr1.shift();
// arr1.shift();
// arr1.shift();
// arr1.shift();

// console.log(sum);
// console.log(arr1);


////////////// TASK 7 //////////////
// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// 1.Console values from "Rufet" to "Fuad"
// 2.Change Gulshen to Rovshen 
// 3.Console each name with map
// 4.Console only names which is Anar
// 5.Console all names where name is Anar change it to "Perviz"
// 6.Console second to last value of arr2
// 7.Console length of arr2

// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]

// 1. console.log(arr2[2],arr2[3],arr2[4],arr2[5],arr2[6],arr2[7]);

// 2. arr2[4]="Rovshen";
// console.log(arr2);

// 3. arr2.map((item)=>console.log(item));
// 4. console.log(arr2[1],arr2[3],arr2[8]);

// 5. arr2[1]="Perviz";
//    arr2[3]="Perviz";
//    arr2[8]="Perviz";
//    console.log(arr2);

// 6. arr2.shift(arr2[0]);
//    console.log(arr2);

// 7. console.log(arr2);

////////////// TASK 8 //////////////

// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// (use typeof), like this: filter((item) => typeof item === 'string')

// 1.Show only numbers
// 2.Show only true values
// 3.Show only false values
// 4.Show only strings

// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// let result1 = arr3.filter((nm) => typeof nm === 'number');
// console.log(result1);

// let result2 = arr3.filter((nm) => typeof nm === 'boolean'&&nm===true);
// console.log(result2);

// let result3= arr3.filter((nm) => typeof nm === 'boolean'&&nm===false);
// console.log(result3);

// let result4 = arr3.filter((nm) => typeof nm === 'string');
// console.log(result4);


////////////// TASK 8 //////////////


// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)
// 2.Console (only odd numbers)

// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// let result = numbers.filter((nm) => nm%2===0);
// console.log(result);


// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// let result = numbers.filter((nm) => nm%2!==0);
// console.log(result);


////////////// TASK 9 //////////////
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]

// 2.Sum all numbers of arr4
// 3.Count only the values that are true
// 4.Count only the values that are string
// 5.Count only the values that are false


// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
1.
// let result = arr4.map((nm)=>{
// if(typeof nm === 'number'){
//     return nm+10;
// }else if(typeof nm === 'string'){
//     return nm + ' is string';
// }else if(!nm){
//     return nm + ' is falsy';
// }
// return nm;
// })

// console.log(result);9



2.
// let sum=0;

// let findSum=arr4.map((nm)=>{
// if(typeof nm === 'number'){
//     sum=sum+nm;
// }

// })

// console.log(sum);

// 3.
// let countTrue =0;

// let findTrue=arr4.map((item)=>{
//     if(typeof item==='boolean'&&item===true){
//         countTrue++;
//     }
// })

// console.log(countTrue);


// 5.
// let countFalse=0;

// let findFalse=arr4.map((item)=>{
//     if(typeof item==='boolean'&&item===false){
//         countFalse++;
//     }
// })

// console.log(countFalse);



// 4.
// let countString=0;

// let findString=arr4.map((item)=>{
//     if(typeof item==='string'){
//       countString++;
//     }
// })

// console.log(countString);


////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"
1,2
// const obj={
//     name:'Nizam',
//     surname:'Maharramov',
//     age:24,
//     city:'Baku'
// }
// obj.name='John';

// console.log(obj);



3,4,5

// const obj = {
//     email: 'nizamum@gmail.com',
//     info: {
//         gender: 'Male',
//         loc: {
//             city: "Abseron",
//             street: 'Bulbul 21',
//             education: {
//                 "uni name": "BDU",
//             }
//         }
//     }
// }

// console.log(obj.info.gender);
// console.log(obj.info.loc.city);
// console.log(obj.info.loc.education);









console.log();