// This program will randomly display a quote every time the "Show another quote" button is clicked

var quotes = [
{quote : 'And so it goes...', source : 'Kurt Vonnegut', citation : 'Slaughterhouse-Five', year : '1972', tag : 'Books'},
{quote : 'Your body is not a temple, it\'s an amusement park. Enjoy the ride.', source : 'Anthony Bourdain', citation : 'Kitchen Confidential: Adventures in the Culinary Underbelly', year : '2000', tag : 'Books'},
{quote : 'Books are a poor substitute for female companionship, but they are easier to find.', source : 'Patrick Rothfuss', citation : 'The Name of the Wind', year : '2007', tag : 'Books'},
{quote : 'That\'s what she said.', source : 'Michael Scott', citation : 'The Office', tag : "TV Shows"},
{quote : 'The best gift you can give anyone is a well-lived life of your own', source : 'Tig Notaro', citation : 'I\'m Just a Person', year : '2016', tag : 'Books'},
{quote : 'Wubba lubba dub dub!', source : 'Rick Sanchez', citation : 'Rick and Morty', tag : 'TV Shows'},
{quote : 'Winter is coming.', source : 'Eddard Stark', citation : 'Game of Thrones', tag : 'TV Shows'}
];
var intervalID = window.setInterval(printQuote, 30000);

// selects random quote object from quote array and returns
function getRandomQuote(){
  return randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
}

//Displays random color each time quote changes
function randomRGB() {
    return Math.floor(Math.random() * 100);
}

// calls getRandomQuote and stores return quote in variable
// constructs a string containing properties of quote and displays in index.html when called
function printQuote(){
  var randomQuote = getRandomQuote();
  var rgbColor = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';
  var quote = ' ';
  quote += '<p class="quote">' + randomQuote.quote + '</p>' +
              '<p class="source">' + randomQuote.source;
  if (randomQuote.citation !== undefined) {
    quote += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year !== undefined) {
    quote += '<span class="citation">' + randomQuote.year + '</span>';
  }
  quote += '<span class="tag">' + randomQuote.tag + '</span>'+'</p>';
  document.body.style.backgroundColor = rgbColor;
  document.getElementById('quote-box').innerHTML = quote;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
