import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../servicees/game.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  game_list_ob:Observable<any>;
  game_list:any;
  api_url: string;

  constructor(public gameSvc:GameService) { 
    this.gameSvc.getGames();
    this.game_list_ob = this.gameSvc.games_list
    this.game_list_ob.subscribe(res=>{
      
      this.game_list = res;

      
      
      
    });
  }

  ngOnInit(): void {

    this.api_url = 'https://consulegame.s3.eu-west-2.amazonaws.com/'
    
  }


  delate_item(game_id){
      this.gameSvc.delate_game(game_id);
  }

}
