import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicees/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignService } from 'src/app/servicees/sign.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registered = false;
	submitted = false;
	userForm: FormGroup;
	guid: string;
	serviceErrors:any = {};

  constructor(private formBuilder: FormBuilder,private http:HttpClient, private router:Router, public signSvc: SignService, public authService:AuthService) {
        
   }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
  		first_name: ['', [Validators.required, Validators.maxLength(50)]],
		  password: ['', [Validators.required, Validators.minLength(5)
			// , Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
		]],
  	});
  }

  invalidFirstName()
  {
  	return (this.submitted && (this.serviceErrors.first_name != null || this.userForm.controls.first_name.errors != null));
  }

  invalidPassword()
  {
  	return (this.submitted && (this.serviceErrors.password != null || this.userForm.controls.password.errors != null));
  }

  onSubmit(){
    
        this.signSvc.registerUser(this.userForm.invalid,this.userForm.value)
        this.registered = true;
  
  }

}
