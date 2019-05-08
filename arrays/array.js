// array in simple word is array is the list of object that is use to store multiple values in a single variable


var a = ['kashif',['program','logic'],function(a){return a*a;},true]

var double = a[2]

console.log(double(89))

console.log(a.length);

console.log(a[2]);

console.log(a[3]=false);

console.log(a[length]='this is the new string');

/*

array method are so important to solve the logical problems in our data
push is use for pushing data into the array
pop is use for removing the last element in the array
unshift is similar to push,unshift is use to adding the values from right side of the array
shift is similar to the pop that is use to removing the element from right side in the array.
toString() is use to display data in the form of string
concate is use for concatenate two more arrays
reverse are use to reverse the arrays
sort are use for sorting the array
slice are use for add beginin and endging on some busines logics
join are use for joining the  two arrays
the main difrence in poping and shifting is poping remove values from right sides and pop removing values from right sides
*/

a = [15,243,45,4,5]

console.log(a.toString())
console.log('pushing',a.push(3))

console.log(a.toString())

console.log('poping',a.pop())
console.log(a.toString())

console.log('unshifting',a.unshift(3))
console.log(a.toString())

console.log('shifting',a.shift())
console.log(a.toString())


var result = a.sort()
console.log(result.toString())

var result2 = a.reverse()
console.log('result',result2)

var result3 = a.slice(2,5)
console.log('slicing',result3)

var x = [8,9,6,4,2,2]
var result4 = a.concat(x)
console.log('concatenating:>',result4.toString())

var string  = ['A' ,'wiseMen', 'can' ,'say', 'something', 'but a fool always be say something']
console.log('trick of join convert array into string and also add space between them using single qutes' string.join(' '))
