// null and undefined is falsy value that is use for checking the conditions true or Not
// null and undefined is similar to each other.if we declear a variable then cannot pass any value then show a message undefined
// if value in variable truely value then show message null ,mean no value store in the variable.let's understand from examples


var undefined;
console.log("undefined is?", undefined)

// output: undefined


if(undefined){
    console.log('IF true then run if block')
}else{
    console.log("IF fasle then run else block")
}

// output:IF fasle then run else block


if(undefined == undefined){
    console.log('IF true then run if block')
}else{
    console.log("IF fasle then run else block")
}

// output:IF true then run if block

// == check the eqality but not exactly


// null is truley.null is also the value

var name = 21321

console.log("name is :",typeof(name))

