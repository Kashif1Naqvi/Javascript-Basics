let c = 0

mark: for(let   i=0; i<5; i++){
  inner:for(let j=0; j<5; j++){
    c++;
    if(i==2){
      break mark;
    }
  }
}
console.log(c)
let d = 0

mark: for(let i = 0;   i < 5; i++){
  inner:for(let j = 0; j < 5; j++){
    d++;
    if(j==2){
      break inner;
    }
  }
}
console.log(d)

let f = 0
for(let i = 0; i<5; i++){
  for(let j = 0; j<=5; j++){
    if(i==2){
      break
    }
    console.log(i,j)
  }
}
console.log(f)




// for of loop is rescue when cannot now the number of iterations with genrator it can be execute the yield in one time with ansynchronous way,it can be execute the next yield statement in one time

function name(name){
  console.log("hello my name is",name)
}

function* genrator(){
  yield name("kashif naqvi");
  yield 2;
  yield 3;
}
for(let value of genrator() ){
  console.log(value)
}

//----------------------------------------------------------
let string = "Kashif naqvi"

for(let i of string){
  console.log(i)
}

// for of loop with array

arr = ['code','is','art']
for(let i of arr){
  console.log(i)
}
console.log('----------------for of loop-----------------------------------')

//for of loop is only work for iterable cannot iterable the object .but some method of object make object iterable like object.entries
// for of loop only accept iterable


let enums = {name:'Kashif Naqvi',method:()=>{console.log("call method")}}
for(let entry of Object.entries(enums)){
  console.log(entry)
}
console.log('---------------------------------------------------')

for(let key of Object.keys(enums) ){
  console.log("this can be display keys:",key)
}
console.log('---------------------------------------------------')
for(let values of Object.values(enums)){
  console.log("this can be display the values",values)
}



console.log('-----------------------------------For in loop------------------------------------')


// for of loop accept only iterable but for in loop display enumerable properties


let object = {a:1,b:2,c:3,d:4,method:()=>{console.log("welcome to the for in loop")}}

for(let values in object){
  console.log(values,object[values])
}

let insitute = {
  name:"NCBA",
  programs:['BSCS','BS-HONS','MSC','MBA','M.COM','B.COM IT','MA ENGLISH','MA ISLAMIYAT'],
  requirments:'Intermediate degree'
}

for(let i in insitute){
  console.log(i+':'+insitute[i])
}

console.log('-------------------------------WHILE LOOP----------------------------------')

// while is repeate and repeat again till the specific condition will be true

let x = 0
while (x<10) {
  console.log("the value of x is",x)
  x++
}
