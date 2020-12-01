import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignService } from 'src/app/servicees/sign.service';
import { Observable } from 'rxjs';
import { UserInfoModel } from 'src/app/interfacees/user-info-model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor( private route: ActivatedRoute,public signSvc:SignService) { }

  usersListOb:Observable<any>;
  usersList:any;
  private subscriber: any;

  ngOnInit(): void {


    this.signSvc.getUsers();
    this.usersListOb = this.signSvc.users_list
    this.usersListOb.subscribe(res=>{
      this.usersList = res;
      console.log( this.usersList);
      
      
    });

    console.log(this.signSvc.users_list);
    
  
  }

}
