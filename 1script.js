//learn javascript
// var arr = [1,2,3,4];
// arr.forEach(function(val){
//   console.log(val+" hello");
// })


//map => agr hum apne die hue arr se ek aur arr create krna chahte hai tb map use hota hai
// var arr = [1,2,3,4]; //apne jis arr pe map chlaya hai map aapko ek new arr return krke dega
// var ans = arr.map(function(val){
//     // return 13;
//     return val*3;
// })
// console.log(ans);

//filter =>The filter() method in JavaScript is an array method used to create a new array containing only the elements from the original array that satisfy a specific condition. 
// It does not modify the original array.
// var arr = [1,2,3,4];
// var ans = arr.filter(function(val){
//     if(val>=3) return true;
//     else return false;
// })
// console.log(ans);


//find - used to search an element 
//agr ismein do 2 hote toh pehla wala hi return hoga
var arr = [1,2,3,4];
// var ans =  arr.find(function(val){
//     if(val == 2) return val;
// })
// console.log(ans);

console.log(arr.indexOf(12)); //agr nhi hai toh return -1
console.log(arr.indexOf(3));

//BACKEND.....