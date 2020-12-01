import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Game } from '../interfacees/game';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  api_url:string
  serviceErrors:any = {};
  games_listn= {games:[{name:"fffff"}]};
  games_list:BehaviorSubject<any> = new BehaviorSubject<any>(this.games_listn.games);
  searc_list:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  games: Observable<any>;
  showProgress = false;
  user_game

  constructor(private http:HttpClient,private rout:Router) { 
    this.api_url = 'http://localhost:3000/games/'
  }

  async create_game(forminValid,formValue,file)
  {


  	if(forminValid == true)
  	{
  		return;
  	}
  	else
  	{
      this.user_game =  JSON.parse(localStorage.getItem('user'));
      if (file.data!= null) {
        this.uploadFile(file).pipe(

          map((event) => {
                
            return  event= Object.assign(
              formValue,
              {user_email:this.user_game.email},
              {photo_url:event.filename}
              );
                
              }),
          tap(event=> this.sendPost(event)),
  
        ).subscribe(res=>{
         console.log(res)
          });
      }else{

       const event= Object.assign(
          formValue,
          {user_email:this.user_game.email},
          {photo_url:"dafult42c1bd30-2828-4d33-8431-4578c66205c6.jpg"},
          );
          this.sendPost(event)

      }
      
      console.log(forminValid,formValue,file);
      

  		

  		

  	}
  }

  sendPost(data){

    this.http.post(this.api_url, data).subscribe((res:any) => {

        console.log(data);
        
      this.getGames();
      this.rout.navigate(['admin/games'])

}, error =>
{
  this.serviceErrors = error.error.error
  console.log(this.serviceErrors);
  // this.router.navigate(['card-user']);
  return window.alert(`${this.serviceErrors}`);
  });

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

  uploadHeaderImage(new_file): Observable<any> {
    return this.http.post('http://localhost:3000/games/upload' , new_file);
  }

  getGames(){
    this.getImage()
     this.user_game =  JSON.parse(localStorage.getItem('user'));
      this.http.get(this.api_url).subscribe(res=>{
    
    
          console.log(res);
          
             this.games_list.next(res)
           },
           error => {
            return window.confirm(`${error.message}`);
          });
  }


  getGamesByS(term){
     this.user_game =  JSON.parse(localStorage.getItem('user'));
     const options = new HttpParams().set('startsWith', term);
     console.log(options);
     
      this.http.get(this.api_url+'search', {params: options}).subscribe(res=>{
    
    
          console.log(res);
          
             this.games_list.next(res)
           },
           error => {
            return window.confirm(`${error.message}`);
          });
  }

  delate_game(game_id){
    console.log(game_id);
    
      this.http.delete(this.api_url + game_id).subscribe(res=>{
        console.log(res);
        this.getGames()
        
      })
  }

  search(value){
    this.searc_list.next(value);
    this.getGamesSearc()
  }


  getGamesSearc() {
    const obsNoCharacters = of<Game[]>([]);
    this.rout.navigate(['*']);
    this.games = this.searc_list
    this.games.subscribe(res=>{
      this.getGamesByS(res)
      
    })
    // .pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap(term => {
    //     if (term) {
    //       this.showProgress = true;
    //       return this.getGamesByS(term);
    //     } else {
    //       return obsNoCharacters;
    //     }
    //   }),
    //   switchMap(heroes => {
    //     this.showProgress = false;
    //     return of(heroes);
    //   }),
    //   catchError(() => {
    //     this.showProgress = false;
    //     return obsNoCharacters;
    //   })
    // );
  }

  getImage(){
    //  this.http.get(this.api_url+'image/'+ 'image(7)cdf820b9-fdbd-4171-8a0b-d3e6de3cca8f.png').subscribe(res=>console.log(res)
    // );
  }

  indexAll(page: number, limit: number): Observable<Game> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(limit));

    return this.http.get<Game>('/api/blog-entries', {params});
  }

  indexByUser(userId: number, page: number, limit: number): Observable<Game> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(limit));

    return this.http.get<Game>('/api/blog-entries/user/' + String(userId), {params});
  }



}
