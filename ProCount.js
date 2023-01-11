var decbutton= document.querySelector('.decrement');
var incbutton= document.querySelector('.increment');
var resetbutton = document.querySelector ('.reset');
var number= document.querySelector('#number');
var numberf= isNaN(number) ? 0 : number;

incbutton.addEventListener('click', ()=>{
    numberf++
    number.innerText=numberf;
})

decbutton.addEventListener('click', ()=>{
    if(number.innerText==0){
        number.innerText=0;
    }
    else{
        numberf--;
        number.innerText=numberf;
    }
})
resetbutton.addEventListener('click', ()=>{
    number.innerText="0";
})