/*

splice is so much important concept in javascript that is use for adding removing elements from the arrays following using specifix indexes
target the values of select index to many values
if i use a = [1,2,3]  then use delete a[1] in this case show me output [1,,3] it's not a good practise for doing work in programming
so i can use if a=[1,2,3] then a.splice(select index of array where i start to do opertation,select how many characters removing from the selected array)

we understand it using example
*/

var a = [1,2,3,4,5,6,7]

// delete a[3]

console.log(a.toString())

// output:1,2,3,,5,6,7 becasue i'm using delete and show me commas it's not a good to do propgramming

console.log('splicing',a.splice(2,1))

console.log(a)

// output: [1, 2, 4, 5, 6, 7]

var b = ['k','a','s','h','i','f']
var result = b.toString()
var splice = b.splice(6,0,'N','a','q','v','i')
console.log(b.toString())

// output:k,a,s,h,i,f,N,a,q,v,i
