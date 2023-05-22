const userChoice = prompt(' scrivi "pari" o "dispari" ');
console.log('utente ha scelto' , userChoice);
const userNumber = prompt('scegli un numero da 1 a 5');
console.log('utente ha scelto' , userNumber);
let randomNumber;
console.log('il computer ha scelto ',randomInt(1,5));
document.getElementById('risultato').innerHTML= 'il computer ha scelto ' + randomNumber;


if ( sum( randomNumber , userNumber)){
    if(userChoice === 'pari'){
        console.log('utente ha vinto');
        document.getElementById('risultato2').innerHTML= 'hai vinto';
    } else {
        console.log('computer ha vinto');
        document.getElementById('risultato2').innerHTML='hai perso';
    }
} else {
    if(userChoice === 'pari'){
        console.log('computer ha vinto');
        document.getElementById('risultato2').innerHTML='hai perso'
    } else {
        console.log('utente ha vinto');
        document.getElementById('risultato2').innerHTML='hai vinto';
    }

}

function randomInt(minumNumber, maximumNumber){
    randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);
    return randomNumber;
} 

function sum (randomNumber , number){
    const total = parseInt(randomNumber) + parseInt(number) ;
    console.log('la somma del numero scelto da utente e da computer è ', total)
    if (total % 2 === 0){
        console.log('la somma è pari');
        return true;
    } else {
        console.log('la somma è dispari');
        return false;
    } 
} 
