import { Component, OnInit } from '@angular/core';
import { SignService } from 'src/app/servicees/sign.service';
import { Observable, Subject, config } from 'rxjs';
import { TrivyaSvcService } from 'src/app/servicees/trivya-svc.service';
import { GameService } from '../../servicees/game.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  api_url=''
  navbarOpen = false;
  registeredOb:Observable<any>;
  registered;
  corrent_user;
  corrent_user_check;
  enter = 'כניסה'
  exit = 'יציאה'

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(public signSvc:SignService,private gameSvc:GameService) {

    this.api_url = environment.backendUrl + 'users/get_upload/'
   }

  ngOnInit(): void {

   this.signSvc.registeredBh.subscribe( res => {
      console.log(res);
      
      this.registered = res
    })

    this.corrent_user =  JSON.parse(localStorage.getItem('user'));
    console.log(this.corrent_user);
    
    this.signSvc.user_game_bh.subscribe(res=>{
      // this.corrent_user =  res;
      this.corrent_user_check =  JSON.parse(localStorage.getItem('user'));
      if (this.corrent_user_check!=undefined) {
        return this.corrent_user = this.corrent_user_check
      }
      this.corrent_user = res
    console.log(this.corrent_user);
      
  })
    
  }


  onSubmit(v){
    console.log('submited',v.search);
    
    
  }

   search(value){
    if (value.length<=1) {
      console.log(value.length);
     
      
    }
      this.gameSvc.search(value)
  }

}
