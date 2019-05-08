// indexOf is use for finding position of the index  values start from 0
// lastIndexOf is use for finding postion of the index values but start with ending of the string
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
console.log(program.toUpperCase() +" "+ program.toLowerCase())

// substr mean substring, that is use to find letter string in to string
// substr(start,length)
console.log(program.substr(1,9))

// output is:  ello wor1




// compare diffrent strings
var x = "hello"
var y ="Hello"

if(x.toLowerCase()===y.toLowerCase())
{
  console.log("values are equal");
}
else
{
  console.log("values are not eqal to each other");
}



function compare(a,b){
    if(a < b ){
        console.log(a +"<"+ b +":", a < b);
    }
    else if(a > b)
    {
        console.log(a +">"+ b +":", a > b)
    }
    else if(a >=b)
    {
        console.log(a +">="+ b +":", a >= b)
    }
    else if(a <=b)
    {
        console.log(a +"<="+ b +":", a <= b)
    }
}

compare('a','b')
compare('a','a')
