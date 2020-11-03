import { dataQuotes} from './constants.js';
import { nbTheme} from './constants.js';
import { nbQuotes} from './constants.js';

export function main(selectTheme,selectNumbers) {  
    selectTheme = parseInt(selectTheme);
    selectNumbers = parseInt(selectNumbers);
    let generatedQuote = [],
        numberRand,
        quotes = dataQuotes(),
        noRepeatQuote;

    function generateRandomNumber(num) {
        return Math.floor((Math.random() * num));
    }
 
    function generateQuote() {
        for(let i = 0; i < selectNumbers; i++) {     
            generatedQuote[i] = [];
            for(let n = 0; n <quotes[selectTheme].length; n++) {
                numberRand = generateRandomNumber(quotes[selectTheme][n].length);
                noRepeatQuote = quotes[selectTheme][n].splice(numberRand,1);  
                generatedQuote[i].push(noRepeatQuote);
            }            
        }
        return generatedQuote;
    }

    if(selectTheme <0 | selectNumbers <0 | selectTheme > nbTheme.length -1   | selectNumbers > nbQuotes.length) {
        return generatedQuote;
    } else {
        return generateQuote();
    }
}
