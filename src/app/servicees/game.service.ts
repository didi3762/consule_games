import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Game } from '../interfacees/game';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map, tap } from 'rxjs/operators';
import { LoadimageService } from './loadimage.service';

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
  headers:HttpHeaders

  constructor(private http:HttpClient,private rout:Router,private loadImage:LoadimageService,) { 
    this.api_url = 'http://localhost:3000/games/'
     
  }

  async create_game(forminValid,formValue,file)
  {
    this.user_game =  JSON.parse(localStorage.getItem('user'));
    const token = this.user_game['token']

  	if(forminValid == true)
  	{
  		return;
  	}
  	else
  	{
      if (file.data!= null) {
        this.loadImage.uploadFile(file).pipe(

          map((event) => {
                
            return  event= Object.assign(
              formValue,
              {user_email:this.user_game.email},
              {photo_url:event.filename}
              );
                
              }),
          tap(event=> this.sendPost(event,token)),
  
        ).subscribe();
      }else{

       const event= Object.assign(
          formValue,
          {user_email:this.user_game.email},
          {photo_url:"dafult42c1bd30-2828-4d33-8431-4578c66205c6.jpg"},
          );
          this.sendPost(event,token)

      }	}
  }

  sendPost(data,auth_token){
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${auth_token}`
    })
    this.http.post(this.api_url, data,{ headers: this.headers }).subscribe((res:any) => {
     this.getGames();
      this.rout.navigate(['admin/games'])

}, error =>
{
  this.serviceErrors = error.error
  console.log(this.serviceErrors);
  return window.alert(`${this.serviceErrors.message}`);
  });

  }


 

 

  getGames(){
    this.getImage()
     this.user_game =  JSON.parse(localStorage.getItem('user'));
      this.http.get(this.api_url).subscribe(res=>{
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
             this.games_list.next(res)
           },
           error => {
            return window.confirm(`${error.message}`);
          });
  }

  delate_game(game_id){
    this.user_game =  JSON.parse(localStorage.getItem('user'));
    let user: any = Object.assign({ token :this.user_game['token']});
    const auth_token = this.user_game['token']
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${auth_token}`
    })
    
      this.http.delete(this.api_url + game_id,{ headers: this.headers }).subscribe(res=>{
        console.log(res);
        this.getGames()
        
      }, error =>
      {
        this.serviceErrors = error.error
        return window.alert(`${this.serviceErrors.message}`);
        })
  }

  async search(value){
    this.searc_list.next(value);
    this.getGamesSearch()
  }


  getGamesSearch() {
    const obsNoCharacters = of<Game[]>([]);
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
