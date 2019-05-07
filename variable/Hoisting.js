// hoisting is useing a variable with out defining them.in example

// use a variable before it's defination is hoisting

// console.log('----------------------------------------------------------------------')
// doSomething(true)
// console.log('----------------------------------------------------------------------')
// doSomething(false)
// console.log('----------------------------------------------------------------------')
// function doSomething(doit){
//     var color = "red"
//     if(doit){
//         var color = "blue"
//         console.log("color in if is:",color)
//     }
//     console.log("color outside the if is:",color)
// }

// output:

// color in if is: blue
// color outside the if is: blue


function gpa(){
    var eng = 90 , math=90 , phsychology=80,computerscience=86,opp=90,systemProgramming=80
    var teng = 100 , tmath=100 , tphsychology=100,tcomputerscience=100,topp=100,tsystemProgramming=100
    var obtained_marks = eng + math + phsychology + computerscience + opp + systemProgramming
    function count(obtained_marks){
        var totalMarks = 600
        var countPersent = obtained_marks/totalMarks  * 100
        function persantageResult(countPersent){
            console.log(`
            I got ${obtained_marks} marks from ${totalMarks} 
            now in English i got ${eng} marks from ${teng}
            And in Math i got ${math} marks from ${tmath}
            And in Phsychology i got ${phsychology} marks from ${tphsychology}
            And in coputer science i got ${computerscience} marks from ${tcomputerscience}
            And in OPP i got ${opp} marks from ${topp}
            finaly in System Programming i got ${systemProgramming} marks from ${tsystemProgramming}
            
            my persentage of whole marks is ${countPersent}%

            `)
        }
        persantageResult(countPersent)  
    }
    count(obtained_marks)
}
gpa()