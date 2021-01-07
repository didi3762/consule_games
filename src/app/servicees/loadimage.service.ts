import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class LoadimageService {
  api_url: string;

  constructor(private http:HttpClient,) {
    this.api_url = environment.backendUrl
   }

  uploadFile(file): Observable<any> {
    
    const formData = new FormData();
    const new_file = {uploadfile: file.data}
    
    formData.append('uploadfile', file.data);
    file.inProgress = true;
    let pothoUrl = ''
     return this.uploadHeaderImage(formData)
    // .pipe(
    // //   map((event) => {
    // //     switch (event.type) {
    // //       case HttpEventType.UploadProgress:
    // //         file.progress = Math.round(event.loaded * 100 / event.total);
    // //         break;
    // //       case HttpEventType.Response:
    // //         return event;
    // //     }
    // //   }),
    //   catchError((error: HttpErrorResponse) => {
    //     file.inProgress = false;
    //     return of('Upload failed');
    //   }))
    //   .subscribe((res: any) => {
    //     if(typeof (res) === 'object') {
    //       this.user_game =  JSON.parse(localStorage.getItem('user'));
    //       console.log(res);
          
    //       return  res;
    //       console.log(pothoUrl);
          
    //     }
    //   })
      
  }

  loatUserImage(file): Observable<any> {
    
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    // this.http.post(this.api_url + 'uploadaws' , formData).subscribe(res=>console.log(res)
    // )
    return this.http.post(this.api_url + 'users/uploadaws' , formData)
    
      
  }

 

  uploadHeaderImage(new_file): Observable<any> {
    return this.http.post(this.api_url + 'games/uploadaws' , new_file);
  }
}
