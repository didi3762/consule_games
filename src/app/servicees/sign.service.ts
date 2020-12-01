import { Injectable, NgZone } from '@angular/core';
import { UserInfoModel } from '../interfacees/user-info-model';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute,
    // public afAuth: AngularFireAuth,
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
      console.log(forminvalid);
      return
    }else{
      console.log(formValue);
      let data: any = Object.assign({password: formValue.password, email :formValue.email});
      const qu = `login?email=${data.email}&password=${data.password}`
 this.http.get(this.api_url+qu).subscribe(
   (res:any) => {
   if (res) {
     console.log(res);
       
         localStorage.setItem('user', JSON.stringify(new UserInfoModel(res)));
        this.user_game_bh.next(this.user_game)
         
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

  registerUser(forminValid,formValue)
  {

    console.log(forminValid,formValue);
    
	  this.submitted = true;
	  

  	if(forminValid == true)
  	{
  		return;
  	}
  	else
  	{
      let data: any = Object.assign(
        formValue,
        {pothoUrl:""},
        {scores:[]}
        );

  		this.http.post('http://localhost:3000/users', data).subscribe((res:any) => {

        console.log(res);
        this.user_game = new UserInfoModel(res);
            localStorage.setItem('user', JSON.stringify(this.user_game));
            

	      this.router.navigate(['card-user']);
	    }, error =>
	    {
        this.serviceErrors = error.error.error
        console.log(this.serviceErrors);
        // this.router.navigate(['card-user']);
	    	return window.alert(`${this.serviceErrors}`);
        });

  		

  	}
  }

  uploadFile(file) {
    
    const formData = new FormData();
    const new_file = {uploadfile: file.data}
    
    formData.append('uploadfile', file.data);
    file.inProgress = true;
    console.log(formData,new_file);
    this.uploadHeaderImage(formData)
    // .pipe(
    //   map((event) => {
    //     switch (event.type) {
    //       case HttpEventType.UploadProgress:
    //         file.progress = Math.round(event.loaded * 100 / event.total);
    //         break;
    //       case HttpEventType.Response:
    //         return event;
    //     }
    //   }),
    //   catchError((error: HttpErrorResponse) => {
    //     file.inProgress = false;
    //     return of('Upload failed');
    //   }))
      .subscribe((res: any) => {
        if(typeof (res) === 'object') {
          this.user_game =  JSON.parse(localStorage.getItem('user'));
          console.log(res);
          
          this.user_game.pothoUrl= res.filename;
        }
      })
  }

  uploadHeaderImage(new_file): Observable<any> {
    return this.http.post('http://localhost:3000/games/upload' , new_file);
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
     let data: any = Object.assign({ scores :this.user_game['scores'],sum_score:this.user_game.sum_score});
    this.http.put(this.api_url + this.user_game.email,data).subscribe((res:any) => {

        console.log(res);
	    }, error =>
	    {
	    	this.serviceErrors = error.error.error;
        });
      localStorage.removeItem('user');
      this.registered = false;
      this.user_game = new UserInfoModel(
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
      this.user_game_bh.next(this.user_game)
      this.registeredBh.next(this.registered)
      this.router.navigate(['home']);
  }

}
