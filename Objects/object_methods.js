/*
object.assign is shallow copy that is use to copt the object
JSON.parse()is use for deep copy it cannot copy the functions
Object.create() are use for creating the object and inserting the values in run time
Object.entries are use to identify the object and converted it to the arrays
Objet.keys are use to displaying the keys in the objects
Object.values are use to displaying the values in the object
Object.freeze() is use to freeze the object no data you can inserted it
*/
const obj = {}
obj.name = "kashif"
obj.program = "BSCS"
obj.level   ="medium level developer"
obj.intrest ="programming and religion islam"
obj.speack=function(){ return console.log(`Hello my name is ${this.name} and my program is ${this.program} and my level of study is ${this.level} and finally my intrest is ${this.intrest} `)}

const newObj = obj
const object = Object.assign({},newObj)
object.name = "Kashif Naqvi"

console.log("object assign programming logics",object)

console.log('-----------------------------------------------------------')
console.log(object.speack())
/*
output:
  Hello my name is Kashif Naqvi and my program is BSCS and my level of study is medium level developer
  and finally my intrest is programming and religion islam
*/

//  deep copy is use just copy only properties not the functions

let deepCopy = JSON.parse(JSON.stringify(obj))
console.log("deep copy is:",deepCopy);

// -------------------------------------------------------------------------------------------------------------------


// Object.create are use to create an object

const createObj = Object.create(obj)
console.log(createObj)
console.log(createObj.name = "Kashif shah shb")
console.log(createObj)

/*
output:
{}
 Kashif shah shb
{name: "Kashif shah shb"}
*/


/*Object.entries use for counting the object how many object are use to modify the programs
it is use to convert object in to arrays*/

let Person = {name:"kashif",program:"BSCS",country:'Pakistan'}
let objentry = Object.entries(Person)
console.log("Object entries are:",objentry)
/*

(3) [Array(2), Array(2), Array(2)]
0: (2) ["name", "kashif"]1: (2) ["program", "BSCS"]2: (2) ["country", "Pakistan"]
Object entries are:

*/

// Object.keys are use to for showing only keys of the object let's we understand with example

let keys = Object.keys(Person)
console.log("keys",keys);

//keys (3) ["name", "program", "country"]

//Object.values() are use to showing values of the object

let values = Object.values(Person)
console.log('values',values)
/*
output:
      values (3) ["kashif", "BSCS", "Pakistan"]
*/



// Object.freeze() freez the object for furture changes

let freeze = Object.freeze(Person)
freeze.code = "coding" //if i type freeze.code then cannot update the objects
console.log("freeze",freeze)

/* output:
 freeze {name: "kashif", program: "BSCS", country: "Pakistan"}
*/
