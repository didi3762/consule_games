import { Component, OnInit } from '@angular/core';
import { SignService } from '../../../servicees/sign.service';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent implements OnInit {

  constructor(private signSvc:SignService) { }

  deck

  ngOnInit(): void {

    this.deck = this.createDeck()
    this.isGuarding = false;
    console.log(this.deck);
    
  }

  // constant variables 
 constants = {
 rows : 3,
 columns :6,
 numMatches :(3 * 6) / 2,
  getRows : function() { return 3},
  getColumns : function() { return 6 },
  getNumMatches :function() { return (3 * 6) / 2 },
};

// Global Variables

 

// this function creates deck of cards that returns an object of cards 
// to the caller
createDeck() {
var rows = this.constants.getRows();
var cols = this.constants.getColumns();
var key = this.createRandom();
var deck = {};
deck['rows'] = [];

// create each row
for(var i = 0; i < rows; i++) {
  var row = {};
  row['cards'] = [];
  let cards = []
  
  // creat each card in the row
  for (var j = 0; j < cols; j++) {
    let card = {};
    card['isFaceUp'] = false;
    
    card['item'] = key.pop();
    
    cards.push(card);
  }
  deck['rows'].push(cards);
}

return deck;
}

// used to remove something form an array by index
removeByIndex(arr, index) {
  arr.splice(index, 1);
}

insertByIndex(arr, index, item) {
  arr.splice(index, 0, item);
}

// creates a random array of items that contain matches
// for example: [1, 5, 6, 5, 1, 6]
createRandom() {
var matches = this.constants.getNumMatches();
var pool = [];
var answers = [];
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'
        , 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'
        , 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];

var hiragana = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח'
        , 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע'
        , 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
// set what kind of item to display
var items = hiragana;

// create the arrays for random numbers and item holder
for (var i = 0; i < matches * 2; i++) {
  pool.push(i); // random numbers
}

// generate an array with the random items
for (var n = 0; n < matches; n++) {
  // grab random letter from array and remove that letter from the
  // original array
  var randLetter = Math.floor((Math.random() * items.length));
  var letter = items[randLetter];
  this.removeByIndex(items, randLetter);
  // generate two random placements for each item
  var randPool = Math.floor((Math.random() * pool.length));
  
  // remove the placeholder from answers and insert the letter into 
  // random slot
  this.insertByIndex(answers, pool[randPool], letter);
  
  // remove random number from pool
  this.removeByIndex(pool, randPool);
  
  // redo this process for the second placement
  randPool = Math.floor((Math.random() * pool.length));
  this.insertByIndex(answers, pool[randPool], letter);

  // remove rand number from pool
  this.removeByIndex(pool, randPool);
}
return answers;
} 

timer = null;
timeLimit = 60000;
isCritical = false;
isGuarding = false;
inGame = false;
$timeout
currentSessionOpen = false;
previousCard = null;
numPairs = 0;


check = function(card) {
  if (this.currentSessionOpen && this.previousCard != card && this.previousCard.item == card.item && !card.isFaceUp) {
    card.isFaceUp = true;
    this.previousCard = null;
    this.currentSessionOpen = false;
    this.numPairs++;
    this.signSvc.updateSum(this.numPairs) 
  } else if(this.currentSessionOpen && this.previousCard != card && this.previousCard.item != card.item && !card.isFaceUp) {
    this.isGuarding = true;
    card.isFaceUp = true;
    this.currentSessionOpen = false;	
    setTimeout(() => {
      card.isFaceUp = false
      this.previousCard.isFaceUp = false;
      this.previousCard = null;
      this.isGuarding = this.timeLimit ? false : true;
    }, 1000);
  } else {
    card.isFaceUp = true;
    this.currentSessionOpen = true;
    this.previousCard = card;
  }	

  if (this.numPairs == this.constants.getNumMatches()) {
    this.stopTimer();
  }
} 

start(){
  this.deck = this.createDeck();
  this.numPairs = 0;
  this.timeLimit = 60000;
  this.isGuarding = false;
  this.inGame = true;

  this.startTimer()
  
}	

 startTimer(){
  this.timeLimit -= 1000;
  this.isCritical = this.timeLimit <= 10000 ? true : false;
  
  this.timer = setTimeout(()=> this.startTimer(), 1000);
  if (this.timeLimit === 0) {
    this.stopTimer();
    this.isGuarding = true;
  }
}

// function to stop the timer
stopTimer() {
  clearTimeout(this.timer);
  this.inGame = false;
  this.previousCard = null;
  this.currentSessionOpen = false;
  this.numPairs = 0;
}

// }); 

}
