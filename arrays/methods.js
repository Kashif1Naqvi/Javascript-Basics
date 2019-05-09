// forEach cannot return any thing

const programmers  = ['sir murtza','Hizqeel','sadaif','kashif','muzmil','nisar']

programmers.forEach((item,index,object)=>{
  console.log(item,index,object)
})

// array.Every can be return answer in the form of boolean.let's understand it woith example.every  check all the array if any one greater
// then the given number then show false

let number = [1,2,3,4,5,6,7,8,9];
let res = number.every(nums =>nums<10)
console.log(res);

// output: true

let num = [0,1,256,3,4,5,6,7];
let re = num.every(nums =>nums < 10)
console.log(re);

// output: false

// Array.some cannot be return false any case like every,it can also provide the answer in the form of boolean

let nume = [25,1,3,4,5,6,7];
let ree = nume.some(nums =>nums < 10)
console.log(ree);
