import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
// import { Observable } from 'rxjs/Observable';
import  * as io from "socket.io-client";
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocketioService } from '../../../servicees/socketio.service';
import useSocket from 'use-socket.io-client';
import { Vue } from 'src/app/interfacees/file';
import { SignService } from '../../../servicees/sign.service';
import { GameService } from '../../../../app/servicees/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socketio',
  templateUrl: './socketio.component.html',
  styleUrls: ['./socketio.component.css']
})
export class SocketioComponent implements OnInit {

  @ViewChild('game') 
  private gameCanvas: ElementRef;

  private context:any;

  my_api= environment.backendUrl + 'users/get_upload/'

  public socket = {chat: null , alerts:null}

  activeRoom = 'general';
  // isMemberOfActiveRoom
  alerts = [
    {invitation: false}
  ]
  username
  messages = {
    general: [],
    typescript: [],
    nestjs: []
  }
  rooms = {
    general: false,
    typescript: false,
    nestjs: false
  }
  text

  usersListOb:Observable<any>;
  usersList:any;
  game_list_ob:Observable<any>;
  game_list:any = [];
  private subscriber: any;
  is_join_ob:Observable<any>;
  curennt_user
  host: boolean;
  guest
  


  constructor(
    private signSvc:SignService,
    private socketsvc:SocketioService,
    public gameSvc:GameService, 
    public router: Router) { }

  deck
  

  ngOnInit(): void {
    this.created()
    this.signSvc.getUsers();
    this.usersListOb = this.signSvc.users_list
    this.usersListOb.subscribe(res=>{
      this.usersList = res;
      });

      this.curennt_user = JSON.parse(localStorage.getItem('user'));
    if (this.curennt_user) {
      this.socket.chat.emit('joinRoom' ,this.curennt_user.email)
      // this.activeRoom = this.curennt_user.email;
      // this.rooms[this.activeRoom] = true;
      this.messages[this.activeRoom] = []
     }
    
   
    

    
    // this.deck = this.createDefoult()

    
    // this.createRandom()
    
    // this.isGuarding = true;

   

    // this.socket.on('start_client', (key) => {
    //   console.log(key);
      
    //    this.start()
    // })

    // this.socket.on('sendcard', (_card) => {
    //   console.log(_card);
      
    //    this.check(_card)
    // })
    
    
  }

 



  created() {
    // this.username = prompt('Enter your username')
    this.socket.chat = io('http://localhost:3001')
    this.socket.chat.on('chatToClient', (msg) => {
      console.log(msg);
      
      this.receiveChattMessage(msg)
    })
    this.socket.chat.on('coonect', () => {
        this.toggleRoomMembership()
    })
    this.socket.chat.on('joinedRoom',(room) => {
      
       this.rooms[room] = true;
       console.log(room,this.rooms);
       
    })
    this.socket.chat.on('leftRoom',(room) => {
       this.rooms[room] = false;
    })
    this.socket.chat.on('invite_to_frinde',(host) => {
      
      this.alerts[0]['invitation'] = true
      this.host = host;
      console.log(host,this.rooms);
      
   })

    this.socket.chat.on('conf_to_frinde',(message) => {
      if (message.conf) {
        this.socket.chat.emit('join_room_tow',{room:message.room})
      }
      
   })
    this.socket.chat.on('joined_tow_frindes',(msg) => {
      console.log(msg);
      
      this.activeRoom = msg.room;
      this.rooms[this.activeRoom] = true;
      this.messages[this.activeRoom] = this.activeRoom
      this.messages[this.activeRoom] = []
      // this.messages[this.activeRoom][msg.guest] = []
      if (this.curennt_user.email==msg.guest) {
         this.guest = msg.host
      }
      
   })
    this.socket.alerts = io('http://localhost:3001/alert')
    this.socket.alerts.on('alertToClient', (msg) => {
         this.receiveAlertMessage(msg)
    })
    this.socket.chat.on('selected_game',url_game =>{
        this.router.navigate([url_game])
    })
   }

  invite_frinde(frinde){
     this.guest = frinde
      this.socket.chat.emit('invite_frinde' ,{host:this.curennt_user.email,guest:this.guest.email})
      // this.activeRoom = this.curennt_user.email;
      // this.rooms[this.activeRoom] = true;
      // this.messages[this.activeRoom] = []

  }
  
  get_frined(_conf:string){
    let __conf = false;
    if(_conf=='true'){
       __conf = true
    }
    this.socket.chat.emit('conf_frinde' ,{ conf:__conf, host:this.host,guest:this.curennt_user.email})
    
  }

  // created() {
  //   this.socket = io('http://localhost:3001')
  //   this.socket.on('create_dic', (key) => {
  //     console.log(key);
      
  //     this.deck = this.createDeck(key)

  //     console.log(this.deck);
  //   })
  //  }

  // constant variables 
//  constants = {
//  rows : 3,
//  columns :6,
//  numMatches :(3 * 6) / 2,
//   getRows : function() { return 3},
//   getColumns : function() { return 6 },
//   getNumMatches :function() { return (3 * 6) / 2 },
// };

sendChatMessage(v){
  console.log(v);
  
  if (this.isMemberOfActiveRoom()) {
    this.socket.chat.emit('chatToServer', {sender:this.curennt_user.user_name, messages: v,room:this.activeRoom,photo_url:this.curennt_user.photo_url,email:this.curennt_user.email})
    this.text = '';
  }else{
    alert('You must be a member of the active room to send messages!')
  }
}


toggleRoomMembership(){
  if (this.isMemberOfActiveRoom()) {
     this.socket.chat.emit('leaveRoom' ,this.activeRoom)
  }else{
    this.socket.chat.emit('joinRoom' ,this.activeRoom)
  }

}

receiveChattMessage(msg){
  this.messages[msg.room].push(msg)
  console.log(this.curennt_user);
  
}

receiveAlertMessage(msg){
    this.alerts.push(msg)
}

isMemberOfActiveRoom(){
  console.log(this.rooms,this.activeRoom);
  
  return this.rooms[this.activeRoom]
}


select_games(){
  this.gameSvc.getGames();
    this.game_list_ob = this.gameSvc.games_list
    this.game_list_ob
    .subscribe(res=>  this.game_list = res)
    
}
select_game(url_game){
 this.socket.chat.emit('select_game',{url:url_game,room:this.activeRoom})
    
}

// Global Variables

 

// this function creates deck of cards that returns an object of cards 
// to the caller
// createDeck(key ) {
// var rows = this.constants.getRows();
// var cols = this.constants.getColumns();
// // let key = this.createRandom();
// var deck = {};
// deck['rows'] = [];

// // create each row
// for(var i = 0; i < rows; i++) {
//   var row = {};
//   row['cards'] = [];
//   let cards = []
  
//   // creat each card in the row
//   for (var j = 0; j < cols; j++) {
//     let card = {};
//     card['isFaceUp'] = false;
    
//     card['item'] = key.pop();
    
//     cards.push(card);
//   }
//   deck['rows'].push(cards);
// }

// return deck;
// }

// // used to remove something form an array by index
// removeByIndex(arr, index) {
//   arr.splice(index, 1);
// }

// insertByIndex(arr, index, item) {
//   arr.splice(index, 0, item);
// }

// // creates a random array of items that contain matches
// // for example: [1, 5, 6, 5, 1, 6]
// createRandom() {
// var matches = this.constants.getNumMatches();
// var pool = [];
// var answers = [];
// var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'
//         , 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'
//         , 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];

// var hiragana = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח'
//         , 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע'
//         , 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
// // set what kind of item to display
// var items = hiragana;

// // create the arrays for random numbers and item holder
// for (var i = 0; i < matches * 2; i++) {
//   pool.push(i); // random numbers
// }

// // generate an array with the random items
// for (var n = 0; n < matches; n++) {
//   // grab random letter from array and remove that letter from the
//   // original array
//   var randLetter = Math.floor((Math.random() * items.length));
//   var letter = items[randLetter];
//   this.removeByIndex(items, randLetter);
//   // generate two random placements for each item
//   var randPool = Math.floor((Math.random() * pool.length));
  
//   // remove the placeholder from answers and insert the letter into 
//   // random slot
//   this.insertByIndex(answers, pool[randPool], letter);
  
//   // remove random number from pool
//   this.removeByIndex(pool, randPool);
  
//   // redo this process for the second placement
//   randPool = Math.floor((Math.random() * pool.length));
//   this.insertByIndex(answers, pool[randPool], letter);

//   // remove rand number from pool
//   this.removeByIndex(pool, randPool);
// }

// // this.socket.emit('create_ansowers', answers) 
// return answers;
// } 


// createDefoult() {
// var matches = this.constants.getNumMatches();
// var pool = [];
// var answers = [];
// var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'
//         , 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'
//         , 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];

// var hiragana = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח'
//         , 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע'
//         , 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
// // set what kind of item to display
// var items = hiragana;

// // create the arrays for random numbers and item holder
// for (var i = 0; i < matches * 2; i++) {
//   pool.push(i); // random numbers
// }

// // generate an array with the random items
// for (var n = 0; n < matches; n++) {
//   // grab random letter from array and remove that letter from the
//   // original array
//   var randLetter = Math.floor((Math.random() * items.length));
//   var letter = items[randLetter];
//   this.removeByIndex(items, randLetter);
//   // generate two random placements for each item
//   var randPool = Math.floor((Math.random() * pool.length));
  
//   // remove the placeholder from answers and insert the letter into 
//   // random slot
//   this.insertByIndex(answers, pool[randPool], letter);
  
//   // remove random number from pool
//   this.removeByIndex(pool, randPool);
  
//   // redo this process for the second placement
//   randPool = Math.floor((Math.random() * pool.length));
//   this.insertByIndex(answers, pool[randPool], letter);

//   // remove rand number from pool
//   this.removeByIndex(pool, randPool);
// }
// return answers;
// } 

// timer = null;
// timeLimit = 60000;
// isCritical = false;
// isGuarding = false;
// inGame = false;
// $timeout
// currentSessionOpen = false;
// previousCard = null;
// numPairs = 0;

// emit_card(card){

//   // this.socket.emit('card',card)

// }


// check(_card) {
//   let card = this.deck['rows'][_card['a']][_card['b']]
//   if (this.currentSessionOpen && this.previousCard != card && this.previousCard.item == card.item && !card.isFaceUp) {
//     card.isFaceUp = true;
//     this.previousCard = null;
//     this.currentSessionOpen = false;
//     this.numPairs++;
//     this.signSvc.updateSum(this.numPairs,'זכרון') 
//   } else if(this.currentSessionOpen && this.previousCard != card && this.previousCard.item != card.item && !card.isFaceUp) {
//     this.isGuarding = true;
//     card.isFaceUp = true;
//     this.currentSessionOpen = false;	
//     setTimeout(() => {
//       card.isFaceUp = false
//       this.previousCard.isFaceUp = false;
//       this.previousCard = null;
//       this.isGuarding = this.timeLimit ? false : true;
//     }, 1000);
//   } else {
//     card.isFaceUp = true;
//     this.currentSessionOpen = true;
//     this.previousCard = card;
//   }	

//   if (this.numPairs == this.constants.getNumMatches()) {
//     this.stopTimer();
//   }
// } 

// emit_start(){
//   // this.socket.emit('start')
// }

// start(){
//   this.createRandom()
//   this.numPairs = 0;
//   this.timeLimit = 60000;
//   this.isGuarding = false;
//   this.inGame = true;

//   this.startTimer()
  
// }	

//  startTimer(){
//   this.timeLimit -= 1000;
//   this.isCritical = this.timeLimit <= 10000 ? true : false;
  
//   this.timer = setTimeout(()=> this.startTimer(), 1000);
//   if (this.timeLimit === 0) {
//     this.stopTimer();
//     this.isGuarding = true;
//   }
// }

// // function to stop the timer
// stopTimer() {
//   clearTimeout(this.timer);
//   this.inGame = false;
//   this.previousCard = null;
//   this.currentSessionOpen = false;
//   this.numPairs = 0;
// }

}
