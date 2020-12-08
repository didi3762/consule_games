import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../servicees/game.service';
import { SignService } from 'src/app/servicees/sign.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  game_list_ob
  users_list
  my_api='http://localhost:3000/users/get_upload/'

  constructor(public signSvc:SignService) { }

  ngOnInit(): void {
    this.signSvc.getUsers();
    this.game_list_ob = this.signSvc.users_list
    this.game_list_ob.subscribe(res=>{
      this.users_list = res;
      
      
    });
  }

}
