import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { SignService } from 'src/app/servicees/sign.service';
import { GameService } from 'src/app/servicees/game.service';



@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  

  usersListOb:Observable<any>;
  gamesList:any;
  
  constructor(public gameSvc:GameService) { }

  ngOnInit(): void {
  }

 



}
