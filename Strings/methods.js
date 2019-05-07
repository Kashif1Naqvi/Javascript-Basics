// indexOf is use for finding value of the index 
// CharAt() use for finding leters of thw given index
// length is use for finding a length
// toUpperCase() use for capital leter 
// toLowerCase() are use for small later

var a = "Hello my name is syed kashif naqvi";

console.log(a.length)
// output: 34

// show the index value of the variable string

console.log(a.charAt(0))

// output: H

// indexOf is use for finding the the letter or words for the given index


console.log(a.indexOf('my'))
// output: 6

if(a.indexOf('kashsif') !==1 )

{
    console.log("kashif exist in the string")
}

else

{
    console.log("kashif not exist in the string")
}

// output:kashif exsits in the string

var program = "Hello world";

// substr mean substring, that is use to find letter string in to string

console.log(program.substr(1,9))

// output is:  ello wor1
