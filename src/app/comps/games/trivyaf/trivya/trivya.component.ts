import { Component, OnInit, Input } from '@angular/core';
import { TrivyaSvcService } from 'src/app/servicees/trivya-svc.service';
import { UserInfoModel } from 'src/app/interfacees/user-info-model';
import { CureentGame } from 'src/app/interfacees/ful-word';

@Component({
  selector: 'board',
  templateUrl: './trivya.component.html',
  styleUrls: ['./trivya.component.css']
})
export class TrivyaComponent implements OnInit {

  @Input() wordRand:string = ''
  @Input() arrLange:number 
  current_game:CureentGame;

  constructor(public wordsSV:TrivyaSvcService) { }

  ngOnInit(): void {

    // this.current_user =  JSON.parse(localStorage.getItem('user'));
    this.wordsSV.current_game_bh.subscribe(res=>{
      this.current_game = res
      console.log(this.current_game);
      
  })
  }

}
