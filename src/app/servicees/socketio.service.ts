import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import  * as io from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  private context: any;
  private socket: any;

  messages: Subject<any>;

  constructor() { 
    // this.messages = <Subject<any>>this
    //   .connect()
      // .map((response: any): any => {
      //   return response;
      // })
  }

  ngOnInit(): void {
//       if (!this.socket) {
//     this.socket = io("http://localhost:3001", {
//       reconnection: false
//   })
// }
  }


  ngAfterViewInit(): void {
    // this.context = this.gameCanvas.nativeElement.getContext('2d');
    // this.context.fillRect(20, 20, 20, 20);
    
    
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

  

  // connect(): Subject<MessageEvent> {
  //   // If you aren't familiar with environment variables then
  //   // you can hard code `environment.ws_url` as `http://localhost:5000`
  //   // this.socket = io("http://localhost:3001");

  //   // We define our observable which will observe any incoming messages
  //   // from our socket.io server.
  //   let observable = new Observable(observer => {
  //       this.socket.on('message', (data) => {
  //         console.log("Received message from Websocket Server")
  //         observer.next(data);
  //       })
  //       return () => {
  //         this.socket.disconnect();
  //       }
  //   });

  //   // We define our Observer which will listen to messages
  //   // from our other components and send messages back to our
  //   // socket server whenever the `next()` method is called.
  //   let observer = {
  //       next: (data: Object) => {
  //           this.socket.emit('message', JSON.stringify(data));
  //       },
  //   };

  //   // we return our Rx.Subject which is a combination
  //   // of both an observer and observable.
  //   return Subject.create(observer, observable);
  // }
}
