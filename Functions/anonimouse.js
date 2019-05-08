var myFunction = (name,program,dateOfBirh)=>{
  name()
  program()
  dateOfBirh()
}

  myFunction(
    ()=>{
          var marks = 600;
          var obtainedMarks =500
          var persentage = Math.round(500/600 * 100)
          console.log("my overall persentage in my marks is:"+persentage+"%")
        },
        ()=>{
              var a = prompt('write one program do you like')
              console.log('my favorite program is:',a)
            },
        ()=>{
              var enterAge = prompt('write the year of date of birth like 1995')
              var year =new Date()
              var avrgYear = year.getFullYear()
              var myAge    =enterAge
              var calculateAge = avrgYear - myAge
              console.log("my age is:",calculateAge);
            }
    )
