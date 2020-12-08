import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import  * as io from "socket.io-client";
import { SignService } from './sign.service';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  private context: any;
  public socket: any;

  messages: Subject<any>;

  constructor(private signSvc:SignService) { 
    // this.messages = <Subject<any>>this
    //   .connect()
      // .map((response: any): any => {
      //   return response;
      // })
  }

  ngOnInit(): void {
      this.created()
  }


  ngAfterViewInit(): void {
   
    
  }

  created() {
    this.socket = io('http://localhost:3001')
    this.socket.on('msgToClient', (message) => {
      console.log(message);
      
    //  this.receivedMessage(message)
    })
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
