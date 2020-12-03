import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GameService } from 'src/app/servicees/game.service';
import { File } from '../../../interfacees/file';
import { SignService } from '../../../servicees/sign.service';
import { LoadimageService } from '../../../servicees/loadimage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;

  file: File = { 
    data: null,
    inProgress: false,
    progress: 0
  };

  registered = false;
	submitted = false;
	userForm: FormGroup;
	guid: string;
  serviceErrors:any = {};
  message_erros = {
    name_erros:'',
    description_erros:'',
    email_erros:'',
    password_erros:'',
    html_url_erros:'',
  }

  constructor(private formBuilder: FormBuilder,
    private gameSvc:GameService,
    
    private signSvc:SignService) {
        
   }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
  		name: ['', [Validators.required]],
      description: ['', [Validators.required ]],
      html_url: ['', [Validators.required ]]
  	});
  }

  invalidFulltName()
  {
    if (this.userForm.controls.name.errors != null) {
      if (this.userForm.controls.name.hasError('required')) {
        this.message_erros.name_erros ='שם משחק חובה'
      }
    }
    return (
      this.submitted && 
      (
      // this.serviceErrors.first_name != null || 
      this.userForm.controls.name.errors != null));
  }

  invalidUserName()
  {
    if (this.userForm.controls.description.errors != null) {
      if (this.userForm.controls.description.hasError('required')) {
        this.message_erros.description_erros = 'תיאור חובה'
      }
    }
  	return (
      this.submitted && 
      (
        // this.serviceErrors.last_name != null || 
        this.userForm.controls.description.errors != null));
  }

  invalidUrl()
  {
    if (this.userForm.controls.html_url.errors != null) {
      if (this.userForm.controls.html_url.hasError('required')) {
        this.message_erros.html_url_erros = 'כתובת URL חובה'
      }
    }
  	return (
      this.submitted && 
      (
        // this.serviceErrors.last_name != null || 
        this.userForm.controls.html_url.errors != null));
  }

  loadFile(){
    const fileInput = this.fileUpload.nativeElement;
    fileInput.click();
    fileInput.onchange = () => {
      this.file = {
        data: fileInput.files[0],
        inProgress: false,
        progress: 0
      };
  }
  
}

  

  onSubmit(){
  
        this.fileUpload.nativeElement.value = '';
 
      
    
    this.submitted = true;
    this.gameSvc.create_game(this.userForm.invalid,this.userForm.value,this.file)
        this.registered = true;
  
  }

}
