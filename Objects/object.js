//  object is so much important that is use to store value in the key value form,all data in the form is objects
// spread operator are use for copying the vaues of the files
var kashif = {
  name:"syed kashif",
  skills:['javascript','php','learning about religions'],
  "my favorite collor":'grey'
}
console.log('my favorite color is:',kashif["my favorite collor"])

console.log('\n')

console.log('my sklls are:',kashif.skills.toString())

console.log('\n')

console.log('my name is:',kashif.name )



const arr = ['a','b','c','d','e']

const name = (...myarray) => {
  return myarray;
}
console.log(name(arr));



const data = () => {
    return new Promise((resolve,reject)=>{
      resolve("HI the promise execute successfully")
    })
}
console.log(data())

//output: Promise {<resolved>: "HI the promise execute successfully"}
