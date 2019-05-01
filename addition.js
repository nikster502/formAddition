
const formAddition = document.querySelector('.formAddition');

formAddition.addEventListener('click',()=>{
    const inputOne = document.querySelector('#inputOne');
    const inputTwo = document.querySelector('#inputTwo');
    inputOne.className = isNumeric(inputOne.value)? '' : 'error';
    inputTwo.className = isNumeric(inputTwo.value)? '' : 'error';

if (inputOne.className !== 'error'|| inputTwo.className !== 'error'){
    alert((+inputOne.value + (+inputTwo.value)).toFixed(1));
}
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}