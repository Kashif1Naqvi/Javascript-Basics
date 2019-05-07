// scope is defined that what is the range or where use this things
// if accessable globaly evey where we can   use it it's important concept for understanding the logics 
// i clear you about from examples
// if you have any query the email me at |naqvishah582@gmail.com|


// if write variable and function name is same then also show error so the variable name and function name is not write the same name.



function names(name){

    var firstName = "Syed"
    
    function inner(program,insitute){
        console.log("my name is"+firstName+name+"i'm studing in"+ program+" from "+insitute)
            function coding(){
                console.log("code is art after few year later i'm father of programming :) ")
            }
            coding()
    }
    
    inner("BSCS","NCBA&Ecc")
}

names("Kashif Naqvi")