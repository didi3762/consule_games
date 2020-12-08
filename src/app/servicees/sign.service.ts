import { Injectable, NgZone } from '@angular/core';
import { UserInfoModel } from '../interfacees/user-info-model';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { LoadimageService } from './loadimage.service';
import { SocketioService } from './socketio.service';
import  * as io from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SignService {

  

  noregistered = true;
  registered = false;
  registeredBh = new BehaviorSubject<any>(this.registered);
	submitted = false;
	guid: string;
	serviceErrors:any = {};
	userData:any;
	user_game: UserInfoModel = new UserInfoModel(
		{guid: "", 
	customerUid: "", 
	first_name: "לא התבצעה כניסה",  
	last_name: "", 
	email: "", 
	zipcode: "",
	password: "",
	pothoUrl:"assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png",
	scores:[],
		  sum_score:0
    });

    api_url:string
    
    user_game_bh = new BehaviorSubject<any>(this.user_game);
    users_listn= {users:[]};
    users_list = new BehaviorSubject<any>(this.users_listn);

    private subscriber: any;
    
    private socket: any;
    is_join:boolean = false;
    is_join_b = new BehaviorSubject<any>(this.is_join);

  constructor(private http:HttpClient,
     private router:Router, private route:ActivatedRoute,
    private loadImage:LoadimageService,
    public ngZone: NgZone) { 

    this.api_url = 'http://localhost:3000/users/'
    const user = JSON.parse(localStorage.getItem('user'));
    if (user!=null) {
      this.registered = true;
      this.registeredBh.next(this.registered)
    }
    
  }


  SignIn(forminvalid,formValue) {
    if (forminvalid) {
      return
    }else{
      let data: any = Object.assign({password: formValue.password, email :formValue.email});
      const qu = `login?email=${data.email}&password=${data.password}`
 this.http.get(this.api_url+qu).subscribe(
   (res:any) => {
   if (res) {
     console.log(res);
        localStorage.setItem('user', JSON.stringify(new UserInfoModel(res)));
        const user = JSON.parse(localStorage.getItem('user'));
        this.user_game_bh.next(user)
        this.createuser()
        console.log(user.email);
        
        this.socket.emit('joinRoom' ,user.email)
         
         this.registered = true;
         this.registeredBh.next(this.registered)
         
            this.ngZone.run(() => {
             this.router.navigate(['card-user']);
           });

      
     }else{
       return window.alert('משתמש לא קיים במערכת !  בדוק אם כל הנתונים שהכנסת נכונים או הרשם עכשיו');
     }
    
  },
  error => {
   return window.alert(`${error.message}`);
 });
    }
        
  }

  createuser() {
    // this.username = prompt('Enter your username')
    this.socket = io('http://localhost:3001')
    this.socket.on('joinedRoom',(room) => {
      
      this.is_join = true;
      this.is_join_b.next(this.is_join)
      console.log(room);
      
   })
    // this.socket.chat.on('coonect', () => {
    //     this.toggleRoomMembership()
    // })
    // this.socket.chat.on('joinedRoom',(room) => {
    //    this.rooms[room] = true;
    // })
    // this.socket.chat.on('leftRoom',(room) => {
    //    this.rooms[room] = false;
    // })
    // this.socket.alerts = io('http://localhost:3001/alert')
    // this.socket.alerts.on('alertToClient', (msg) => {
    //      this.receiveAlertMessage(msg)
    // })
   }

  user_aded(user){
    return user
  }

  registerUser(forminValid,formValue,file)
  {

    console.log(forminValid,formValue);
    
	  this.submitted = true;
	  

  	if(forminValid == true)
  	{
  		return;
  	}
  	else
  	{
      this.user_game =  JSON.parse(localStorage.getItem('user'));
      if (file.data!= null) {
        this.loadImage.uploadFile(file).pipe(

          map((event) => {
                
            return  event= Object.assign(
              formValue,
              {photo_url:event.filename}
              );
                
              }),
          tap(event=> this.sendPost(event)),
  
        ).subscribe(res=>{
         console.log(res)
          });
      }else{

       const event= Object.assign(
          formValue,
          {photo_url:'הורדה803c6222-bb97-4002-8798-cb1cc943aa22.jpg'},
          {scores:[]}
          );
          this.sendPost(event)

      }
	}
  }

  sendPost(data){

    this.http.post('http://localhost:3000/users', data).subscribe((res:any) => {
      console.log(res);
      
        this.user_game = new UserInfoModel(res);
        this.registered= true;
          localStorage.setItem('user', JSON.stringify(this.user_game));
          this.user_game_bh.next(this.user_game)
          this.registeredBh.next(this.registered)
          this.router.navigate(['card-user']);

}, error =>
{
  this.serviceErrors = error.error
	    	return window.alert(`${this.serviceErrors.message}`);
  });

  }

  updateSum(up_sum,game_name){

    this.user_game =  JSON.parse(localStorage.getItem('user'));
    console.log(this.user_game,up_sum);
    // this.user_game.sum_score = 0;
    if (up_sum!=undefined) {
     let ind =  this.user_game.scores.findIndex(el=> el.game_name==game_name)
     console.log(ind);
     
     if (ind>=0) {
       console.log('ind here');
       this.user_game.sum_score += up_sum;
      this.user_game['scores'][ind].user_score+=up_sum;
      let data: any = Object.assign({ scores :this.user_game['scores'],sum_score:this.user_game.sum_score});
      this.http.put(this.api_url + this.user_game.email,data).subscribe((res:any) => {

        console.log(res);
        this.user_game = res
	    }, error =>
	    {
	    	this.serviceErrors = error.error.error;
        });
     }
      
    localStorage.setItem('user', JSON.stringify(this.user_game));
    this.user_game_bh.next(this.user_game)
    }
    
    
  }

  getUsers(){
    this.http.get(this.api_url).subscribe((data:any) => {
    
    
      console.log(data);
      
         this.users_list.next(data)
       },
       error => {
        return window.confirm(`${error.message}`);
      });
    }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  SignOut() {
    this.user_game =  JSON.parse(localStorage.getItem('user'));
    this.http.get(this.api_url+ 'sign_out/' + this.user_game.email).subscribe((res:any) => {

        console.log(res);
        this.user_game = new UserInfoModel(res);
          this.user_game_bh.next(this.user_game)
	    }, error =>
	    {
	    	this.serviceErrors = error.error.error;
        });
      localStorage.removeItem('user');
      this.registered = false;
      // this.user_game = new UserInfoModel(
      //   {guid: "", 
      // customerUid: "", 
      // first_name: "לא התבצעה כניסה", 
      // last_name: "", 
      // email: "", 
      // zipcode: "",
      // password: "",
      // pothoUrl:"assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png",
      // scores:[],
      //     sum_score:0
      //   });
      // this.user_game_bh.next(this.user_game)
      this.registeredBh.next(this.registered)
      this.router.navigate(['home']);
  }

}
