const Kashif = {
  name:'kashif',
  program:'programming team players',
  greet:function(){
    console.log('hello i am',this.name,this.program)
  }
}
const Wajjhat = {
  name:'Wajjhat',
  program:'Programming',
  greet:Kashif.greet
}
const Shehraz = {
  name:'Shehraz',
  program:'Programming',
  greet:Kashif.greet
}
const Shahzad = {
  name:'Shahzad',
  program:'Programming',
  greet:Kashif.greet
}
const Shahbaz = {
  name:'Shahbaz',
  program:'Programming',
  greet:Kashif.greet
}
Kashif.greet()
Wajjhat.greet()
Shehraz.greet()
Shahzad.greet()
Shahbaz.greet()

const obj = {}
obj.name = "Kashif shah"
obj.hobby="learning"
obj.rules="don't cheat others"
obj.intrest="programming"
obj.method = "character is matter when meet other then meet with good way he meet with u again and again "
obj.say    =function(){
  return console.log(`${this.name} hobby is ${this.hobby}  and rules ${this.rules} his intrest is ${this.intrest} his method
    is when meeting with others ${this.method}... :)
  } `)
}
console.log("simnple object",obj)

const assign =Object.assign({},obj)
assign.population = 9000
console.log("object assign",assign)

const create = Object.create(assign)
create.typography = "logical rules"
console.log(create)

const entries = Object.entries(create)
create.sale = "500 times fast"
console.log(entries)

const deepCopy = JSON.parse(JSON.stringify(entries))
console.log("deep copy is",deepCopy)

const keys = Object.keys(obj);
console.log(keys)

const values  = Object.values(create)
console.log(values)

const freeze = Object.freeze(obj)
if(freeze){
  console.log("freeze",freeze)
}else{
  freeze.name = "hassan naqvi"
  console.log(freeze.name )
}
