import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignService } from 'src/app/servicees/sign.service';
import { AuthService } from 'src/app/servicees/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

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
  		last_name: ['', [Validators.required, Validators.maxLength(50)]],
  		email: ['', [Validators.required, Validators.email, Validators.maxLength(75)]],
		  zipcode: ['', [Validators.required,  Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
		  password: ['', [Validators.required, Validators.minLength(5)
			// , Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
		]],
  	});
  }

  invalidFirstName()
  {
  	return (this.submitted && (this.serviceErrors.first_name != null || this.userForm.controls.first_name.errors != null));
  }

  invalidLastName()
  {
  	return (this.submitted && (this.serviceErrors.last_name != null || this.userForm.controls.last_name.errors != null));
  }

  invalidEmail()
  {
  	return (this.submitted && (this.serviceErrors.email != null || this.userForm.controls.email.errors != null));
  }

  invalidZipcode()
  {
  	return (this.submitted && (this.serviceErrors.zipcode != null || this.userForm.controls.zipcode.errors != null));
  }

  invalidPassword()
  {
  	return (this.submitted && (this.serviceErrors.password != null || this.userForm.controls.password.errors != null));
  }

  onSubmit(){
    
      this.signSvc.SignIn(this.userForm.value)
  
  }

}
