generatedQuote = [],
nbThemeLength = selectTheme.length,
nbQuotesLength = selectNumbers.length,
numberRand;
 
function generateRandomNumber(num) {
  return Math.floor((Math.random() * num));
}

function generateRandomQuotes(themeChoice) {
  quotesLength = containerQuotes.childNodes.length;
  if(themeChoice >= 0 && themeChoice <= nbThemeLength && numberQuotes > 0 && numberQuotes <= nbQuotesLength) {
        divAlertError.remove();
        for(let i = 0; i < numberQuotes; i++) {
              let newQuote = document.createElement("p");
              newQuote.setAttribute("id", "quote"+i);
              containerQuotes.appendChild(newQuote);
              document.getElementById("quote"+i).replaceWith(newQuote);
              for(let n = 0; n <quotes[themeChoice].length; n++) {
                    numberRand = generateRandomNumber(quotes[themeChoice][n].length);
                    noRepeatQuote = quotes[themeChoice][n].splice(numberRand,1);           
                    generatedQuote.push(noRepeatQuote);
              }               

              generatedQuote = generatedQuote.join(' ');
              newQuote.innerText = i+1 +") "+ generatedQuote; 
              generatedQuote = [];
        } 
  } else {
        containerQuotes.innerHTML = "";
        divAlertError.className = "text-danger";
        divAlertError.innerText = "Saisie incorrecte, veillez réessayer";
        containerQuotes.appendChild(divAlertError);
  }
   
  if(quotesLength > numberQuotes) {
      let newNumber = quotesLength - numberQuotes;
      for(let i = 0; i < newNumber; i++) {
            containerQuotes.removeChild(containerQuotes.lastChild);
      }
  }
}


