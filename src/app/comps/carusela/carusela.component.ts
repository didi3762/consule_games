import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { GameService } from '../../servicees/game.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'carusela',
  templateUrl: './carusela.component.html',
  styleUrls: ['./carusela.component.css'],
  providers: [NgbCarouselConfig]
})
export class CaruselaComponent implements OnInit {

  @ViewChild('myCarousel') myCarousel: NgbCarouselConfig;

  game_list_ob:Observable<any>;
  game_list:any = [];
  api_url:string = '';
  num_arr:number
  game_list_duble=[]

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig,public gameSvc:GameService) { 

    this.api_url = environment.backendUrl + 'games/image/'
    
    config.interval = 20000;
    config.keyboard = true;
    config.pauseOnHover = true;
  
    this.gameSvc.getGames();
    this.game_list_ob = this.gameSvc.games_list
    this.game_list_ob
    .subscribe(res=>{
    
    
      this.game_list = res;
      let k = 0
      let game_b = []
      this.game_list_duble= this.game_list.reduce((sum,el,i)=>{
        game_b.push(el)
        if ((i+1)%6==0||i==this.game_list.length-1) {
          sum.push(game_b)
          game_b = []
        }
        
         return sum 
      },[])

      console.log(this.game_list_duble);
      
      
      
    });
  }

  ngOnInit(): void {
  }

}
