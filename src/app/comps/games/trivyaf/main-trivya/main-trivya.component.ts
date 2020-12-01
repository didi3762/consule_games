import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/interfacees/game';

@Component({
  selector: 'app-main-trivya',
  templateUrl: './main-trivya.component.html',
  styleUrls: ['./main-trivya.component.css']
})
export class MainTrivyaComponent implements OnInit {

  current_user;
  trivya_game = new Score()

  constructor() { }

  ngOnInit(): void {
  }

}
