const newQuote =document.getElementById("new-quote");
const quoteHTML = document.getElementById("quote");
const author = document.getElementById("author");
const quoteContainer = document.querySelector(".quote-container");
const loader = document.getElementById("loader");

let quoteData = [];

const loading = ()=> {
    loader.hidden = false;
    quoteContainer.hidden = true;
};

const dataShow = ()=> {
    loader.hidden = true;
    quoteContainer.hidden = false;
};

const randomQuote = () => {

   const quote = quoteData[ Math.floor(Math.random() * quoteData.length)];
   quoteHTML.textContent = quote.text;
    
   if (quote.author){
     author.textContent = quote.author;
   }else{
    author.textContent = "Anonymous";
   }

   if (quote.text.length > 50){
    quoteHTML.classList.add("long-quote");
  }else{
    quoteHTML.classList.remove("long-quote");
  }
  dataShow();
};

newQuote.addEventListener("click",randomQuote);

async function quoteGenerator(){
    loading();
    const apiUrl = "https://type.fit/api/quotes"
    try {
        const response = await fetch(apiUrl);
        quoteData = await response.json();
        randomQuote();
    } catch (error) {
        console.log(error);
    }
}
quoteGenerator();