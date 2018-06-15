// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quotes = [
{quote : 'And so it goes...', source : 'Kurt Vonnegut', citation : 'Slaughterhouse-Five', year : '1972'},
{quote : 'Your body is not a temple, it\'s an amusement park. Enjoy the ride.', source : 'Anthony Bourdain', citation : 'Kitchen Confidential: Adventures in the Culinary Underbelly', year : '2000'},
{quote : 'Books are a poor substitute for female companionship, but they are easier to find.', source : 'Patrick Rothfuss', citation : 'The Name of the Wind', year : '2007'},
{quote : 'That\'s what she said.', source : 'Michael Scott', citation : 'The Office'},
{quote : 'The best gift you can give anyone is a well-lived life of your own', source : 'Tig Notaro', citation : 'I\'m Just a Person', year : '2016'},
{quote : 'Wubba lubba dub dub!', source : 'Rick Sanchez', citation : 'Rick and Morty'},
{quote : 'Winter is coming.', source : 'Eddard Stark', citation : 'Game of Thrones'}
];

// selects random quote object from quote array and returns
function getRandomQuote(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

// calls getRandomQuote and stores return quote in variable
// constructs a string containing properties of quote
function printQuote(){
  var randomQuote = getRandomQuote();
  var quote = '<p class="quote">' + randomQuote.quote + '</p>' +
              '<p class="source">' + randomQuote.source +
              '<span class="citation">' + randomQuote.citation + '</span>' +
              '<span class="year">' + randomQuote.year + '</span>'+
              '</p>';
  if (randomQuote.citation === undefined) {
    return '<p class="quote">' + randomQuote.quote + '</p>' +
                '<p class="source">' + randomQuote.source +
                '<span class="citation">' + randomQuote.citation + '</span>'+
                '</p>';
    } else if (randomQuote.year === undefined){
    return '<p class="quote">' + randomQuote.quote + '</p>' +
            '<p class="source">' + randomQuote.source + '</p>';
  }
  document.getElementById('quote-box').innerHTML = printQuote();
  return quote;

}
