import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicees/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
    this.userForm = new FormGroup({});
    this.userForm = this.formBuilder.group({
  		full_name: ['', [Validators.required]],
      user_name: ['', [Validators.required ]],
  		email: ['', [Validators.required, Validators.email, Validators.maxLength(75)]],
		  // zipcode: ['', [Validators.required,  Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
		  password: ['', [Validators.required, Validators.minLength(5), 
      // , Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    ]],
     conf_password: ['', [Validators.required, ]],
    },
    {validator: this.validateAreEqual}
    );
  }

  private validateAreEqual(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['conf_password'].value ?
     null : {'mismatch': true};
}

  invalidFulltName()
  {
    if (this.userForm.controls.full_name.errors != null) {
      if (this.userForm.controls.full_name.hasError('required')) {
        this.message_erros.full_name_erros ='שם מלא חובה'
      }
    }
    return (
      this.submitted && 
      (
      // this.serviceErrors.first_name != null || 
      this.userForm.controls.full_name.errors != null));
  }

  invalidUserName()
  {
    if (this.userForm.controls.password.errors != null) {
      if (this.userForm.controls.user_name.hasError('required')) {
        this.message_erros.user_name_erros = 'שם משתמש חובה'
      }
    }
  	return (
      this.submitted && 
      (
        // this.serviceErrors.last_name != null || 
        this.userForm.controls.user_name.errors != null));
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

  invalidConfPassword()
  {
    let config = true
    const password_control = this.userForm.controls.password
    const conf_password_control = this.userForm.controls.conf_password
       if (conf_password_control.hasError('required')) {
        this.message_erros.password_erros ='אימות סיסמא חובה'
      }else if(this.userForm.errors?.mismatch){
         this.message_erros.conf_pass_erros ='אימות סיסמא נכשל'
      }
  	return (
      this.submitted && 
      (
        this.userForm.errors?.mismatch||
        // this.serviceErrors.password != null || 
        conf_password_control.errors != null));
  }

  onSubmit(){
    
    this.submitted = true;
    this.signSvc.registerUser(this.userForm.invalid,this.userForm.value)
        this.registered = true;
  
  }

}
