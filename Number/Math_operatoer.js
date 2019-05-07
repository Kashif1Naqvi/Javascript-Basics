
//  Math.random every time genrate the random numbers
var a = Math.random(22)
console.log("random:",a)
//  output: random: 0.334242424532 change every time when refresh the page

//  Math.floor() is from floor so accept the less than value of given ponted values

var b = Math.floor(2.7)
console.log("floor is:",b)
//  output: floor is: 2

//  Math.ceil() is from ceil so accept the greater than value of given ponted values

var c = Math.ceil(2.4)
console.log("ceil is:",c)

//  output: ceil is: 3

var max = Math.max(2,4)
console.log('maximum:',max)

// output:maximum:4


var min = Math.min(2,4)
console.log('minimum:',min)

// output:minimum:2

function sqr(a,b){
   console.log("rounding the number:",Math.round(Math.random()*10));
   console.log("squre:",Math.sqrt(a));
   console.log('powers finding',Math.pow(a,b))
}
sqr(2,5)
