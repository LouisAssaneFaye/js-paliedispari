const UserWord = prompt('Type a word');

if (isWordPalindrom(UserWord)){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function isWordPalindrom(word){
    for (let i = 0; i < (word.length / 2 ) + 1 ; i = i + 1){
        if ( word[i] === word[word.length - i]){
            console.log(' la lettera numero' + i + ' ' + 'è uguale alla lettera numero' + (word.length - i)); 
             return true;
        } else {
            console.log(' la lettera numero' + i + ' ' + 'non è uguale alla lettera numero' + (word.length - i)); 
             return false;        
        }
    }
}