// loop is use iterater the values in many times as you wish


for(let i=0; ; i++){
  console.log("value of  i = ",i)
  if(i>5){
    break;
  }
}


// use multiple statements


let counter = 0
function inc(){
  counter++;
}
for(let i = 0; i<10; i++,inc());
console.log(counter)


// output ; 10

// nested for loop is loop into loop

for(let i = 0; i<=2; i++){
    for(let j = 0; j<=2; j++){
      console.log(i,j)
    }
}

// loop with continue statement

for(let i = 0; i<3; i++){
  let code = "code is art";
  if(i===1){
    continue;
  }
  console.log(code)
}
