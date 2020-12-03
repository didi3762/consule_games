import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoadimageService {

  constructor(private http:HttpClient,) { }

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

  uploadHeaderImage(new_file): Observable<any> {
    return this.http.post('http://localhost:3000/games/upload' , new_file);
  }
}
