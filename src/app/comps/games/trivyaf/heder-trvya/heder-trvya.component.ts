import { Component, OnInit } from '@angular/core';
import { TrivyaSvcService } from 'src/app/servicees/trivya-svc.service';
import { CureentGame } from 'src/app/interfacees/ful-word';

@Component({
  selector: 'heder-trivya',
  templateUrl: './heder-trvya.component.html',
  styleUrls: ['./heder-trvya.component.css']
})
export class HederTrvyaComponent implements OnInit {

  wordEng:string = ""
  current_game:CureentGame;

  constructor(public wordsSV:TrivyaSvcService) { }

  ngOnInit(): void {

    // this.current_user =  JSON.parse(localStorage.getItem('user'));
    this.wordsSV.current_game_bh.subscribe(res=>{
      this.current_game = res
      
  })
  }

}
