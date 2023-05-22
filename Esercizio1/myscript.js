const UserWord = prompt('Type a word');

let array = [];

if (isWordPalindrom(UserWord)){
    console.log(' la parola è palindroma');
    document.getElementById('prova').innerHTML=' la parola è palindroma'
} else {
    console.log(' la parola non è palindroma');
    document.getElementById('prova').innerHTML=' la parola non è palindroma'
}

function isWordPalindrom(word){
    for (let i = 0; i < (word.length / 2 ) ; i = i + 1){
        if ( word.charAt(i) === word.charAt(word.length - 1 - i)){
            console.log(' la lettera numero ' + i + ' ' + 'è uguale alla lettera numero ' + ' ' + (word.length - 1 - i));
            console.log(word.charAt(i), word.charAt(word.length - 1 - i)  );
            array.push(i);
            console.log(array);
            
        } else {
            console.log(' la lettera numero ' + i + ' ' + 'non è uguale alla lettera numero ' + (word.length - 1 - i));
            console.log(word.charAt(i), word.charAt(word.length - 1 - i) ); 
                 
        }
    }
   
    
    if ( word.length % 2 === 0 ){
        if (array.length === (word.length / 2)){
            console.log('la parola è palindroma');
            return true;
        } else {
            console.log('la parola non è palindroma');
            return false;
        }
    } else {
        if (array.length === (word.length / 2 - 0.5 + 1)){
            console.log('la parola è palindroma');
            return true;
        } else {
            console.log('la parola non è palindroma');
            return false;
        }
    }




}
