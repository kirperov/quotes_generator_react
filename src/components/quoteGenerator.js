import { dataQuotes} from './constants.js';


export function main(selectTheme,selectNumbers) {  
    selectTheme = parseInt(selectTheme);
    selectNumbers = parseInt(selectNumbers);
    let generatedQuote = [];
    let numberRand;
    let quotes =dataQuotes();

    function generateRandomNumber(num) {
        return Math.floor((Math.random() * num));
    }
 
    for(let i = 0; i < selectNumbers; i++) {     
        generatedQuote[i] = [];
        for(let n = 0; n <quotes[selectTheme].length; n++) {
            numberRand = generateRandomNumber(quotes[selectTheme][n].length);
            let noRepeatQuote = quotes[selectTheme][n].splice(numberRand,1);  
            generatedQuote[i].push(noRepeatQuote);
        }               
    }
    return generatedQuote;
}
