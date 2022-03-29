/* You can get the Nth character, or letter, from a string by writing "string"[N]. 
The returned value will be a string containing only one character (for example, "b"). 
The first character has position 0, which causes the last one to be found at position string.length - 1. 
In other words, a two-character string has length 2, and its characters have positions 0 and 1.
*/

var countBs = string => {
    let stringArr = string.split('');
    let addB = 0;
    
    for(let counter=0; counter<stringArr.length; counter++){
        if(stringArr[counter]==='B'){
            addB +=1;
        }
    }

    return addB;
}

var countChar = (str, character) => {
    let stringArr = str.split('');
    let addChar = 0;
    for(let counter=0; counter<stringArr.length; counter++){
        if(stringArr[counter]===character){
            addChar +=1;
        }
    }
    return addChar;
}


console.log(countBs('cool'));
console.log(countBs('BaBoon'));
console.log(countChar("kakkerlak", "k"));
