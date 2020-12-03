import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../../servicees/socketio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private s:SocketioService) { }

  ngOnInit(): void {
  }

}
