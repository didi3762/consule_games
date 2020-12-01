import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SignService } from 'src/app/servicees/sign.service';
import { UserInfoModel } from 'src/app/interfacees/user-info-model';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  user_game: UserInfoModel = new UserInfoModel(
		{guid: "D21ds12x", 
	customerUid: "cust2dsa12dsa", 
	first_name: "John", 
	last_name: "Doe", 
	email: "email@email.com", 
	zipcode: "",
	password: "Idasn2x2#",
	pothoUrl:"assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png",
		  sudoko_score:0,
		  trivya_score:0,
		  currenr_score:0,
		  sum_score:0
    });

  private subscriber: any;


  constructor(private http: HttpClient, private route: ActivatedRoute,public signSvc:SignService) { }

  ngOnInit(): void {

    this.user_game =  JSON.parse(localStorage.getItem('user'));

    console.log(this.user_game);
    
  }

}
