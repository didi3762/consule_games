import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../servicees/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  game_list_ob:Observable<any>;
  game_list:any;

  constructor(public gameSvc:GameService) { 
    this.gameSvc.getGames();
    this.game_list_ob = this.gameSvc.games_list
    this.game_list_ob.subscribe(res=>{
      console.log(res);
      
      this.game_list = res;

      console.log(this.game_list);
      
      
      
    });
  }

  ngOnInit(): void {
    
  }


  delate_item(game_id){
      this.gameSvc.delate_game(game_id);
  }

}
