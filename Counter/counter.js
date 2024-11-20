let countDisplay=document.getElementById('count');
let IncrementBtn=document.getElementById('inc');
let DecrementBtn=document.getElementById('dec');
let ResetBtn=document.getElementById('res');

let counter=0

const updateDisplay=()=>{
    countDisplay.textContent=counter;
}

IncrementBtn.addEventListener("click",() =>{
    counter++;
    updateDisplay();
})

DecrementBtn.addEventListener("click",() =>{
    if (counter==0) exit;
    else{
    counter--;}
    updateDisplay();
})

ResetBtn.addEventListener("click",() =>{
    counter=0;
    updateDisplay();
})

