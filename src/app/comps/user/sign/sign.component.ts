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
  message_erros = {
    full_name_erros:'',
    user_name_erros:'',
    email_erros:'',
    password_erros:'',
    conf_pass_erros:'',
  }

  constructor(private formBuilder: FormBuilder,private http:HttpClient, private router:Router, public signSvc: SignService, public authService:AuthService) {
        
   }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
  		// full_name: ['', [Validators.required, Validators.maxLength(50)]],
  		// user_name: ['', [Validators.required, Validators.maxLength(50)]],
  		email: ['', [Validators.required, Validators.email, Validators.maxLength(75)]],
		  // zipcode: ['', [Validators.required,  Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
		  password: ['', [Validators.required, Validators.minLength(5)
			// , Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
		]],
  	});
  }

  invalidEmail()
  {
    const email_control = this.userForm.controls.email
    if (email_control.errors != null) {
      if (email_control.hasError('required')) {
        this.message_erros.email_erros ='דואר אלקטרוני חובה'
      }else if(email_control.hasError('email')){
        this.message_erros.email_erros ='ניתן להכניס כתובת מייל בלבד'
      }
    }
  	return (
      this.submitted && 
      (
        // this.serviceErrors.email != null || 
        email_control.errors != null));
  }

  invalidPassword()
  {
    const password_control = this.userForm.controls.password
    if (password_control.errors != null) {
      if (password_control.hasError('required')) {
        this.message_erros.password_erros ='סיסמא חובה'
      }else if(password_control.hasError('minlength')){
        this.message_erros.password_erros ='על הסיסמא להכיל לפחות 5 תווים'
      }
    }
  	return (
      this.submitted && 
      (
        // this.serviceErrors.password != null || 
        this.userForm.controls.password.errors != null));
  }

  onSubmit(){
      this.submitted = true
      this.signSvc.SignIn(this.userForm.invalid,this.userForm.value)
  
  }

}
