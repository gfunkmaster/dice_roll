
const diceTriggerEl = document.querySelector('.dice__trigger');
const diceImageEl = document.querySelector('.dice__image');

console.log(diceImageEl);


//Formula for random number beetween 1 to 6, plus 1 becuase javascript is zero based
//Math.floor(Math.random() * 6) + 1; 
/* 
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rollDice = () => getRandomNumber(1, 6);

let diceRoll = Math.floor(Math.random() * 6) + 1;

console.log(diceRoll);
 */

//create a random number genaratior 
const getRandomNumber = () => {
    return  Math.floor(Math.random() * 6) + 1;
}

//function for trigger the button 
const showDice = () =>{
    diceTriggerEl.addEventListener('click', () => {

        let myRandomNumber = getRandomNumber();
        
        diceImageEl.src = `images/dice${myRandomNumber}.jfif`
    })
}





showDice()