// when the two variables is same name then show Shadowing.it's important concept when declare any variable then work in their scope
// if cannot declare in given scope then show error in example i think you clearly understand it

// shadowing effet more than programming if any mistake then show bug in to your ConvolverNode.you be atentive when use shadwing

var myColor = "grey";

function myFun(){
    var myColor = "red"
    console.log("myColor inside the myFun is",myColor)
}
myFun()

console.log("myColor outside the myFun is",myColor)


// output is :
// myColor inside the myFun is red
// myColor outside the myFun is grey
 

// every variable have scope if i can remove var in myFun() variable myColor then automaticaly javascript compiler read it as a global variable then
// the color name insite the function overite the global variable myColor=grey
// output is :
// myColor inside the myFun is red
// myColor outside the myFun is grey

// for example

var color = "red"
function Color(){
    // if not define data tyoe automaticaly convert it to gloable variable,overWrite the value balck to red
    color = "black"
    console.log("my color inside the Color() is:",color)
}
Color()
console.log("my color outside the Color() is:",color)

// output is:
// my color inside the Color() is: black
// Shadowing.js:26 my color outside the Color() is: black