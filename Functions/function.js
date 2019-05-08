// function is the block of code that is use for solving specific type of problem and reuse in the program many times

function name(program,number){

  // console.log('hello world')

  if(typeof number==='undefined'){
    number = 390344342
    program = 'BSCS'
  }

  console.log(program + ' AND ' + number)

}

name('BS-HOUNS')
name('BS-HOUNS','90390239')
name('BS','12345')



/*
IN THE ABOVE FUNCTION WHEN CANNOT PASEE TWO PARAMETERS THEN SHOW ME CUSTOM MESSAGES typeof USE FOR SPECIFY THE TYPE OF VAROABLES


so that scope is so muchimportant where access the functions is accessable

three types of variables const var let const and let value cannot be changed but the var value can be change
the life of let is in the block of function
*/

let names = "Kashif"
function scopes(){
  let names   = 'Naqvi'
  console.log(names)
}
scopes()
console.log(names)
