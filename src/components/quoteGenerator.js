import {quotes} from './constants.js';
 
export function main(selectTheme,selectNumbers) {   
   let generatedQuote = [],
    numberRand;
    function generateRandomNumber(num) {
        return Math.floor((Math.random() * num));
    }
 
    for(let i = 0; i < selectNumbers; i++) {
        for(let n = 0; n <quotes[selectTheme].length; n++) {
            numberRand = generateRandomNumber(quotes[selectTheme][n].length);
            let noRepeatQuote = quotes[selectTheme][n].splice(numberRand,1);       
            generatedQuote.push(noRepeatQuote);
            console.log(generatedQuote);
        }               

        generatedQuote = generatedQuote.join(' ');
        // generatedQuote = [];
        return generatedQuote;
    }
}




