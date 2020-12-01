import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
// import { Observable } from 'rxjs/Observable';
// import * as Rx from 'rxjs/Rx';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocketioService } from '../../../servicees/socketio.service';

@Component({
  selector: 'app-socketio',
  templateUrl: './socketio.component.html',
  styleUrls: ['./socketio.component.css']
})
export class SocketioComponent implements OnInit {

  @ViewChild('game')
  private gameCanvas: ElementRef;

  private context: any;
  private socket: any;

  messages: Subject<any>;

  constructor(private socketService: SocketioService) { 
    
    // if (!this.socket) {
  //   this.socket = io("http://localhost:3001", {
  //     reconnection: false
  // })
  // console.log(this.socket.emit());
  //   this.socket.emit('move',this.context)

  //   this.socket.on('disconnect', function() {
  //     this.socket.socket.reconnect();
  // })
    // }

    
  }




  ngOnInit(): void {
    
  }


  ngAfterViewInit(): void {
    this.context = this.gameCanvas.nativeElement.getContext('2d');
    this.context.fillRect(20, 20, 20, 20);
    
    
    // this.socket.on('position', position=> {
    //   this.context.clearRect(
    //     0,
    //     0,
    //     this.gameCanvas.nativeElement.width,
    //     this.gameCanvas.nativeElement.height,
    //   )
    //   this.context.fillRect(position.x ,position.y,20,20);
    // })
    
  }

  async move( direction: string){
    // console.log(this.socket.emit());
    await this.socket.emit('move', direction, function(test) {
      console.log("acckk received")
  })
  }

}
