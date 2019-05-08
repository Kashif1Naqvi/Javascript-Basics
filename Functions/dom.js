var button  = document.getElementById('button');
var input   =document.getElementById('text');

button.addEventListener('click',function (){
      console.log('click')
});

button.addEventListener('click',function (){
    console.log('another click')
    input.setAttribute('value','Hello wolrd')
});
