import { Component, OnInit } from '@angular/core';
import { SignService } from 'src/app/servicees/sign.service';
import { Observable, Subject } from 'rxjs';
import { TrivyaSvcService } from 'src/app/servicees/trivya-svc.service';
import { GameService } from '../../servicees/game.service';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

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
      console.log(value);
      this.gameSvc.search(value)
  }

}
