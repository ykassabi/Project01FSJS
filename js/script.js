
/////////////////////////////////////////////////////////////////////// Variables
//1/ Creating an array of objects(key/value pair) to hold the data for quotes(8).
//2/ quote has those keys : quote - source - citation - year - tags
//extra/ array of background color, I picked the color just to keep a good contract with font color/
var quotes = [
  {
    quote: "Dwell on the beauty of life. Watch the stars, and see yourself running with them." ,
    source: "Marcus Aurelius",
    citation: "Meditation",
    year: "BC",
    tags: "_ Wisdom",
  },
  {
    quote: "The happiness of your life depends upon the quality of your thoughts." ,
    source: "Marcus Aurelius",
    citation: "Meditation",
    year: "",
    tags: " _ Happiness"
  },
  {
    quote: "The unexamined life is not worth living." ,
    source: "Socrates",
    citation: "",
    year: "",
    tags: "_ Wisdom"
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    source: "Dr. Seuss",
    citation: "",
    year: "",
    tags: "_ Love"
  },
  {
    quote: "That which does not kill us makes us stronger." ,
    source: "Friedrich Nietzsche",
    citation: "",
    year: "",
    tags:"_ Wisdom",
  },
  {
    quote: "Don’t walk in front of me… I may not follow...Don’t walk behind me… I may not lead...Walk beside me… just be my friend",
    source: "Albert Camus",
    citation: "",
    year: "",
    tags: "_ Relationship"
  },
  {
    quote: "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
    source: "Albert Camus",
    citation: "",
    year: "",
    tags: "_ Happiness"
  },
  {
    quote: "And, when you want something, all the universe conspires in helping you to achieve it.",
    source: "Paulo Coelho",
    citation: "The Alchemist",
    year: "",
    tags: "_ inspiration"
  }
];

var background = ["#0085ff","#0000aa", "#020428","#09c6f9","#3f11dd", "#00aaaa", "#36b55c"  ];


///////////////////////////////////////////////////////////////////////Functions
//3/ Create a function named getRandomQuote, it return an array with [one object and one color in hex.]

function getRandomQuote(){
  var randomNumberQuote = Math.round(Math.random() * quotes.length);
  var randomNumberBackground = Math.round(Math.random() * background.length);
  var quoteBackground = [quotes[randomNumberQuote], background[randomNumberBackground]];
  return quoteBackground;
}


//4/ Create a function named printQuote
// it called getRandomQuote to pick a new quote form the quotes array and color
// by using the DOM, and .innerHTML we write the quote to html file.

function printQuote(){
  getRandomQuote();
  var currentQuote = getRandomQuote()[0];
  var currentBackgroundColor = getRandomQuote()[1];


// the output fonction filters the quotes with or without citation or date

  function output(){
    var message = ("<p class='quote'>" + currentQuote.quote + "</p> <p class='source'>" + currentQuote.source)

    if(currentQuote.citation == true){
      message += "<span class='citation'>"+ currentQuote.citation +"</span>"
    }

    if(currentQuote.year == true){
      message += " <span class='year'>"+ currentQuote.year +"</span> <span>"+ currentQuote.tags +"</span></p>"
    }
    else{
      message += "<span>"+ currentQuote.tags +"</span></p>"
    }

    return message;
  }

    document.getElementById('quote-box').innerHTML =  output();
    document.body.style.background = currentBackgroundColor;
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);




////////////////////////extras
// a timer to change the quotes.
// to stop the timer an event listener on the only button.

// picking up a quote on the load of the page
document.onload = printQuote();

//the timer
var timerQuote = setInterval(function(){ printQuote(); }, 7000);//7 seconds

var stopTimer = function stopTimer() {
    clearInterval(timerQuote);
};
//to stop the timer just when mouse hover over the button.
document.getElementById('loadQuote').addEventListener("mouseover", stopTimer, false);
