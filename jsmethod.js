// 1--Array.from method ///////////////////////////////////////////////////////////////
// it used to convert string to Array  and iteration of each element of array

// let res="sagar"
// console.log(Array.from(res));
// console.log(Array.from([1,2,3,4],(x)=>x*2));

// 2-Array.isArray method ////////////////////////////////////////////////////

// this method return boolen if object is array then return true else
//  apart from array return false
// console.log(Array.isArray([1,2,3,4])); //true
// console.log(Array.isArray("sagar")); false

// 3-Array.of //////////////////////////////////////////////////

// it convert object to Array

// let val=['foo', 2, 'bar', true]
// console.log(Array.of(val));

// let res="sagar"
// console.log(Array.of(res));

// console.log(Array.of());

// 4-at method

// at method allow us to access each element of array

// let arry=[1,20,30,50,90,150,300]
// console.log(arry.at(2)); //30
// console.log(arry.at(-2));//150

// 5-concat method

// concat method are use to merge the multiple array

// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8]
// let arr3=[9,10,11]
// let mer=arr1.concat(arr2,arr3)
// console.log(mer);

// 6-every method

// this method return boolen value if all element satisfy the condition then return true
// else one element not satisfy contion then return false

// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let res=arr1.every(fin=> fin<10)
// console.log(res);

// 7-fill method
// fill method replace Element in the array, this method have thiree parameter first is
// replace element ,second is staring index and third is end index

// let arr1=[1,2,3,4,5,6,7,8,9]
// let res=arr1.fill(9,3,9)
// console.log(res);
// let res1=arr1.fill(9,3)
// console.log(res1);
// let res2=arr1.fill(9)
// console.log(res2);

// 8-filter method
// filter method iterate each element of array if condition is satisfy then create new array

// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let res=arr1.filter((asd)=>{
//     if(asd%2===0){
//         return asd
//     }
// })
// console.log(res);

// 9-map
// this method  itetare the each element of tha array
// and return a new Array

// let arr1=[1,2,3,4,5,6,7,8,9,10]

// let res=arr1.map(cv=>cv*2)
// console.log(res);

// 10-find

// find method return value of first element in the array that passes all the test

// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let res=arr1.find(ele=>ele>8)
// console.log(res);

// 11-findIndex

// findIndex return index of first element in the array that passes all the test else -1

// let arr1=[1,2,3,4,5,6,7,8,9,10]

// let res=arr1.findIndex(cv=>cv>6)
// console.log(res);

// 12-flat method

// flat method convert nested array to single array

// const arr2 = [0, 1, [2, [3, [4, 5]]]]

// let res=arr2.flat(Infinity)
// console.log(res);

// 13-foreach method

// foreach method provied a function each element of array
// foreach method return undefine

// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let cv=arr1.forEach((res,i)=>{
//     console.log(`${i+1}:-${res} `);

// })

// 14-includes
// includes method check element present or not if present return true else return false

// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let fin=arr1.includes(2)
// console.log(fin);

// 15-indexOf
// indexOf method check element presnt or not if presnt then return index of element
// elese -1

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// let res=beasts.indexOf("any")
// console.log(res);

// 16-join
// join method used to modify the element of Array

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// let fin=beasts.join("-")
// console.log(fin);

// 17-key method

// key method return index of each element of Array
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// let res=beasts.keys()
// for(let id of res){
//     console.log(id);

// }

// 18-lastIndexOf
// this mathod return  index of reverse Element

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(animals.lastIndexOf('Dodo'));

// 19-pop method

// pop method remove the last element of the Array

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// let fin=plants.pop()
// console.log(fin);// 'tomato'
// console.log(plants);

// 20-push method

// push method add last element of Array

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// let fin=plants.push("sagar")
// console.log(fin);
// console.log(plants);

// 21-shift

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// // shift method remove the first element of array
// let cv=plants.shift()
// console.log(plants);

// 22-unshift

// unshift method add the first element of Array

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// let cv=plants.unshift("sagar")
// console.log(cv);
// console.log(plants);

// 23-reduce

// reduce method execute reduce function each element of Array and get output
// single value in accumulator.reduce method have two parameter accumulator and
// previous value
// let arr1=[1,2,3,4,5,56,6,7,9]
// let red=arr1.reduce((acc,pre)=>{
//     return acc+pre
// })
// console.log(red);

// 24-reverse

// reverse method reverse the element of Array

// let arr1=[1,2,3,4,5,56,6,7,9]
// let fin=arr1.reverse()
// console.log(fin);

// 25-slice

// slice method is used to remove the Element from Array.slice method have two
// parameter starting index and end index

// let arr1=[1,2,3,4,5,56,6,7,9]
// let res=arr1.slice(1,6)
// console.log(res);
// console.log(arr1);

// 26-splice
// let arr1=[1,2,3,4,5,56,6,7,9]
// splice method are used to add and remove the element of Array
// splice method have n number of parameter first parameter is start index second
// index is how many index is deleted apart from two parameter other element is  add
// in index

// let res=arr1.splice(2,1,99,101,102)
// console.log(res);
// console.log(arr1);

// 27-some
// some method return Boolean value if one element satify the condition
// then retun true else return false

// let arr1=[1,2,3,4,5,59,6,8,9]

// let fin=arr1.some(res=>res%2===0)
// console.log(fin);

// 28-sort
// sort method sort the element from asending to decending

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// let res=months.sort()
// console.log(months);

// 29-toString

// toString convert array to String
// const months = ['March', 'Jan', 'Feb', 'Dec'];

// let fin=months.toString()
// console.log(fin)

// ////////OBJECT METHOD //////////////////////////////////////////////

// 1-charAt method
// charAt method access to each element of string
// let str="sagar"
// let res=str.charAt(0)
// console.log(res);

// 2-match
// match  method return index of element with convert to array
// let str="my Name is Sagar"

// let res=str.match("is")
// console.log(res);

// 3-matchAll

// console.log(...str.matchAll("is"))

// 4-repeat

// repeat method repeat string how much i want
// const mood = 'Happy! ';
// console.log(`i feel ${mood.repeat(3)}`);

// 5-replace

// replace method replace element in the string
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's","my"));

// 6-/replaceAll
// replaceAll replace the multiple string
// const paragraph = "I think Ruth's dog is cuter than your dog!";
// let res=paragraph.replaceAll("dog","monkey")
// console.log(res);

// 7-toLowerCase
// it ic convert uppercase to lowercase

// let srt="My Name Is Sagar"
// let res=srt.toLowerCase()
// console.log(res);

// 8-toUpperCase
// it convert to lower case to upper case
// let str="my name is sagar"

// let res=str.toUpperCase()
// console.log(res);

// 9-toString

// it is convert string to Array
// let arr1=["my","name","is","sagar"]
// let res=arr1.toString()
// console.log(res);

// 10-trim
// trim method remove empty space /white space from both end of String
// const greeting = '   Hello world!   ';

// let res=greeting.trim()
// console.log(res);

// 11-trimEnd
// trimEnd method remove empty space /white space from end of this string and return new string ,without modify
// const greeting = '   Hello world!   ';
// let res=greeting.trimEnd()
// console.log(res);

// 12-trimStart
// trimStart method remove empty space /white space from start of this string and return new string ,without modify
// const greeting = '   Hello world!   ';
// let res=greeting.trimStart()
// console.log(res);

/////////////////////////////////OBJECT/////////////////////////////////////////////

// 1-Object.assign()
// Object.assign() method is used to merge the multiple array and create a shallow copy of the object

// let obj1 = {
//   name: "sagar",
//   roll: 21,
//   city: "bhubaneswar",
// };
// let obj2 = {
//   name: "sipu",
//   roll: 1601201039,
//   city: "biso",
//   bloodGroup:"o+"
// };

// let res = Object.assign({}, obj1); // here we have create a shallow copy of obj1,
//becase object copy of memory location
// res.name = "any";
// console.log(res);
// console.log(obj1);

// let mer=Object.assign(obj1,obj2)
// console.log(mer);

// 2-Object create
// it create a Object
// let res=Object.create({
//     name:"sagar",
//     roll:21,
//     place:"bisoi"
// })
// delete res.name
// console.log(res);

// 3-Object.keys
// Object.keys method return object proparty name with array

// const object1 = {
//     a: 'somestring',
//     b: 42,
//   };
//   let res=Object.keys(object1)
//   console.log(res);

//   4-Object.values
// Object.value return object propaty name with Array
// let obj1={
//     name:"sagar",
//     roll:21,
//     surename:"mohapatra"
// }

// let res=Object.values(obj1)
// console.log(res);


// 5-Object.freeze

// object freeze method freeze object so we unable change object proparty and delete the proparty of object
// const obj = {
//     roll: 42,
//     name:"sagar"
//   };

//   let res=Object.freeze(obj)
  
//   console.log(res);
  
  
// 6-Object.entries
// object method convert multiple array of object proparty in array

// const object1 = {
//     a: 'somestring',
//     b: 42,
//   };
//   let res=Object.entries(object1)
//   console.log(res);
  

// 7-fromEntries
// it convert (entries)array to object
// const entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 42],
//   ]);

//   let res=Object.fromEntries(entries)
//   console.log(res);

// 7-Object.hasOwn
// Object.hasown propaty return boolen value they search object propaty name if do not find 
// then return false else true
// let obj1={
//     name:"sagar",
//     roll:21,
//     surename:"mohapatra"
// }
// let res=Object.hasOwn(obj1,"any")
// console.log(res);


