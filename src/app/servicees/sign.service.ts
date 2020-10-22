import { Injectable, NgZone } from '@angular/core';
import { UserInfoModel } from '../interfacees/user-info-model';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

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
	
		  sudoko_score:0,
		  trivya_score:0,
		  currenr_score:0,
		  sum_score:0
    });
    
    user_game_bh = new BehaviorSubject<any>(this.user_game);
    users_listn= {users:[]};
    users_list = new BehaviorSubject<any>(this.users_listn);

	  private subscriber: any;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute,public afAuth: AngularFireAuth,public ngZone: NgZone) { 

    const user = JSON.parse(localStorage.getItem('user'));
    if (user!=null) {
      this.registered = true;
      this.registeredBh.next(this.registered)
    }
    
    this.http.get('http://localhost:3000/api/v1/generate_uid').subscribe((data:any) => {
      this.guid = data.guid;
      console.log(this.guid);
      }, error => {
          console.log("There was an error generating the proper GUID on the server", error);
	  });
  }


  SignIn(formValue) {
         console.log(formValue);

    this.http.get('http://localhost:3000/api/v1/customer/' + formValue.first_name + "/" + formValue.password).subscribe((res:any) => {
  
      console.log(res);
		     
        if (res.current_user.length>=1) {
          
          
            localStorage.setItem('user', JSON.stringify(new UserInfoModel(res.current_user[0])));
           this.user_game_bh.next(this.user_game)
            
            this.registered = true;
            this.registeredBh.next(this.registered)
            
               this.ngZone.run(() => {
                this.router.navigate(['card-user']);
              });
        }else{
          return window.confirm('משתמש לא קיים במערכת !  בדוק אם כל הנתונים שהכנסת נכונים או הרשם עכשיו');
        }
			 
	   });
  }

  registerUser(forminValid,formValue)
  {

    console.log(forminValid,formValue);
    
	  this.submitted = true;
	  

  	// if(forminValid == true)
  	// {
  	// 	return;
  	// }
  	// else
  	// {
      let data: any = Object.assign({guid: this.guid}, formValue,{pothoUrl:"assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png"
      ,sudoko_score:0, trivya_score:0, currenr_score:0, sum_score:0});

  		this.http.post('http://localhost:3000/api/v1/customer', data).subscribe((res:any) => {

        console.log(res);
        this.user_game = new UserInfoModel(res);
            localStorage.setItem('user', JSON.stringify(this.user_game));
            

	      this.router.navigate(['card-user']);
	    }, error =>
	    {
	    	this.serviceErrors = error.error.error;
        });

  		

  	// }
  }

  updateSum(trivya_sum){

    this.user_game =  JSON.parse(localStorage.getItem('user'));
    console.log(this.user_game,this.user_game.sum_score,trivya_sum);
    // this.user_game.sum_score = 0;
    if (trivya_sum!=undefined) {
      this.user_game.sum_score+=trivya_sum;
    localStorage.setItem('user', JSON.stringify(this.user_game));
    this.user_game_bh.next(this.user_game)
    }
    
    
  }

  getUsers(){
    this.http.get('http://localhost:3000/api/v1/users').subscribe((data:any) => {
    
    
      console.log(data);
      
         this.users_list.next(data)
       });
    }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  SignOut() {
    this.user_game =  JSON.parse(localStorage.getItem('user'));
     let data: any = Object.assign({guid: this.user_game.guid, sum_score :this.user_game.sum_score});
    this.http.put('http://localhost:3000/api/v1/customer/' + data.guid,data).subscribe((res:any) => {

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
      
          sudoko_score:0,
          trivya_score:0,
          currenr_score:0,
          sum_score:0
        });
      this.user_game_bh.next(this.user_game)
      this.registeredBh.next(this.registered)
      this.router.navigate(['home']);
  }

}
