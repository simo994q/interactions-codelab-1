

/*opgave 1 plus minus*/
let myButtonValue = 0;
const myButtonResult = document.getElementById('buttonResult');
const myAddButton = document.getElementById('addButton');
const mySubButton = document.getElementById('subtractButton');


//skriv event listners her
myAddButton.addEventListener('click', () => {
    myButtonValue++
    console.log(myButtonValue);
    showResult(myButtonValue, myButtonResult)
})
mySubButton.addEventListener('click', () => {
    myButtonValue--
    console.log(myButtonValue);
    showResult(myButtonValue, myButtonResult)
})
function showResult (value, result) {
    result.innerHTML = value
};








/* opgave 2 dice*/
const myDiceRes = document.getElementById('diceResult');
const diceButton = document.getElementById('rollDiceOne');


//skriv event listners her

diceButton.addEventListener('click', () => {
    let diceRoll = getRandomNumber(1, 7);
    // myDiceRes.innerHTML = diceRoll
    showResult(diceRoll)
})

function getRandomNumber (min, max) {
    Math.floor(Math.random() * min) + max;
};
function showResult (res) {
    myDiceRes.innerHTML = res
};
function showResult (res) {
    myDiceRes.innerHTML = res
};










/* opgave 3 key event */

const myLiveText = document.getElementById('myLiveText');
let myLiveTextResult = document.getElementById('tasteResult');

//skriv event listners her
myLiveText.addEventListener('keyup', () => {
    myLiveTextResult.innerHTML = myLiveText.value
})






/* support functions-------------------------------------------------------------------------------*/

/* view code*/
/* viser data i et DOM element, kræver to parametre: data til at vise og elementet det skal vises i.*/
// function showResult(myData, myElement) {
//     myElement.innerHTML = myData;
// }




/* random function. skal bruge en min værdi og en max værdi.
returnerer et tilfældigt tal mellem min og max værdierne*/

// function getRandomNumber(min, max) {
//     let myMin = Math.ceil(min);
//     let myMax = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

