
// declare important variables
let input1 = document.querySelector('.input-1');
let input2 = document.querySelector('.input-2');
let theAnswer = document.querySelector('.answer');
let reset = document.querySelector('.reset');


//button operator
let addBtn = document.querySelector('.add-btn');
let minusBtn = document.querySelector('.minus-btn');
let multiBtn =document.querySelector('.multiply-btn');
let divideBtn =document.querySelector('.divide-btn');



addBtn.addEventListener('click', () => {
    let total = Number(input1.value)+ Number(input2.value);
    console.log(total);
    let jawapan = document.createTextNode(`the sum answer is ${total}`);
    let div = document.createElement('div');
    div.setAttribute('id', 'answer-new');
    div.appendChild(jawapan)
    theAnswer.appendChild(div);
    
});

minusBtn.addEventListener('click', () => {
    let total = Number(input1.value) - Number(input2.value);
    console.log(total);
    let jawapan = document.createTextNode(`the minus answer is ${total}`);
    let div = document.createElement('div');
    div.setAttribute('id', 'answer-new');
    div.appendChild(jawapan)
    theAnswer.appendChild(div);
    
});


multiBtn.addEventListener('click', () => {
    let total = Number(input1.value) * Number(input2.value);
    console.log(total);
    let jawapan = document.createTextNode(`the multiplication answer is ${total}`);
    let div = document.createElement('div');
    div.setAttribute('id', 'answer-new');
    div.appendChild(jawapan)
    theAnswer.appendChild(div);
    
});

divideBtn.addEventListener('click', () => {
    let total = Number(input1.value) / Number(input2.value);
    console.log(total);
    let jawapan = document.createTextNode(`the division answer is ${total}`);
    let div = document.createElement('div');
    div.setAttribute('id', 'answer-new');
    div.appendChild(jawapan)
    theAnswer.appendChild(div);
    
});

reset.addEventListener('click', () => {
    document.getElementById('answer-new').remove();
});






let test = 1 + 2;
console.log(test);

let numara1 = 3;
let numara2 = 4;
let total = numara1 + numara2;
console.log(total); 