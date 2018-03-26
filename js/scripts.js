$(document).ready(function(event) {
  $("form#deck-of-cards").submit(function(event){

    event.preventDefault();
    var numbers = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"]
    var suits = ["hearts", "spades", "diamonds", "clubs"]

    var deckOfCards = numbers.forEach(function(number) {
      suits.forEach(function(suit) {
        $("#results").append(number + " of " + suit + "<br>")
      });


    });

  });
});
