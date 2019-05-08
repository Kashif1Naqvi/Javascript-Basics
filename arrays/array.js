// array in simple word is array is the list of object that is use to store multiple values in a single variable


// var a = ['kashif',['program','logic'],function(a){return a*a;},true]
//
// var double = a[2]
//
// console.log(double(89))
//
// console.log(a.length);
//
// console.log(a[2]);
//
// console.log(a[3]=false);
//
// console.log(a[length]='this is the new string');

/*

array method are so important to solve the logical problems in our data
push is use for pushing data into the array
pop is use for removing the last element in the array
unshift is similar to push,unshift is use to adding the values from right side of the array
shift is similar to the pop that is use to removing the element from right side in the array.
toString() is use to display data in the form of string
the main difrence in poping and shifting is poping remove values from right sides and pop removing values from right sides
*/

a = [1,2,3,4,5]

console.log(a.toString())
console.log('pushing',a.push(3))

console.log(a.toString())

console.log('poping',a.pop())
console.log(a.toString())

console.log('unshifting',a.unshift(3))
console.log(a.toString())

console.log('shifting',a.shift())
console.log(a.toString())
