import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FulWord, Word, CureentGame } from '../interfacees/ful-word';
import { HttpClient } from '@angular/common/http';
import { SignService } from './sign.service';

@Injectable({
  providedIn: 'root'
})
export class TrivyaSvcService {

  public urlsJeson = {
    jsonA:"https://raw.githubusercontent.com/didi3762/ajax/master/ajax4.json",
  }

  current_user;
  current_game:CureentGame= new CureentGame();
  current_game_bh = new BehaviorSubject<any>(this.current_game);

  constructor(private myHttp:HttpClient, public signSvc: SignService) { 

    this.current_user =  JSON.parse(localStorage.getItem('user'));
    

    console.log(this.wordsArr,this.randArr,this.HebWords);

    this.httpGet<FulWord>(this.urlsJeson.jsonA)
    .subscribe(result => {
      this.fullResponse = result
      this.words = this.fullResponse.words 
      this.HebWords = this.words[0].HebWords
      this.englishWords = this.words[0].englishWords
      this.wordsSum = this.fullResponse.persons[0].score
      this.rand()
      this.addRand(this.randArr)
      
    })


  }

  httpGet<T>(url:string) :Observable<T>{
    return this.myHttp.get<T>(url)
  }


  fullResponse:FulWord
  words:Word[]
  HebWords:string[] = []
  englishWords:string[] = []
  wordsArr:string[] = []
  wordHeb:string
  wordEng:string
  randArr:number[] = [1,2,3,4,5,6]
  wordsSum:number
  resTex:string
  sum:number
  cureent_sum:number
  succussful:boolean
  fail:boolean
  

  rand(){
    for (let i = 0; i < this.randArr.length; i++) {
      let rand = Math.floor(Math.random() * Math.floor(40));
      this.randArr[i]= rand;
    }
    let rand4 = Math.floor(Math.random() * Math.floor(4));
    this.randArr[5] = rand4;
 }
 
  addRand(event){
    console.log(event);
    
     let engIndex = this.englishWords.indexOf(this.wordEng)
    if(this.wordEng==''||this.wordEng==null){
      console.log(this.sum);
      this.sum = 0
    }
    else if(event[6] == engIndex){
        this.sum++
        this.cureent_sum = 1
        // this.wordsSum[event[6]]++
        this.succussful = true
        this.fail = false
    }else{
      console.log(this.sum);
      this.sum--
      this.fail = true
      this.succussful = false
      this.cureent_sum = -1
    }
    this.wordEng = this.englishWords[event[0]]
     this.signSvc.updateSum(this.cureent_sum) 
     this.current_game.cureent_sum = this.sum;
     this.current_game.cureent_word = this.wordEng;
     this.current_game.cureent_sucusseful = this.succussful;
     this.current_game.cureent_fail = this.fail;
     this.current_game_bh.next(this.current_game)
    
    this.wordsArr[0] = this.HebWords[event[1]];
    this.wordsArr[1] = this.HebWords[event[2]];
    this.wordsArr[2] = this.HebWords[event[3]];
    this.wordsArr[3] = this.HebWords[event[4]];
    this.wordsArr[event[5]] = this.HebWords[event[0]]
    this.resTex = this.sum.toString()
  }
}
