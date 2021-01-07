import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { auth } from 'firebase';
import { UserInfoModel } from '../interfacees/user-info-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any;
  api_url:string;

  constructor(
    private http: HttpClient,
    // public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { 
    this.api_url = environment.backendUrl

    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     console.log(this.userData);
        
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // })
    
  }

  SignIn(email, password) {
    // return this.afAuth.signInWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     this.ngZone.run(() => {
    //       this.router.navigate(['dashboard']);
    //     });
    //     this.SetUserData(result.user);
    //   }).catch((error) => {
    //     window.alert(error.message)
    //   })
  }

  SignUp(email, password) {
    // return this.afAuth.createUserWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     /* Call the SendVerificaitonMail() function when new user sign 
    //     up and returns promise */
    //     // this.SendVerificationMail();
    //     this.SetUserData(result.user);
    //     this.router.navigate(['/sign']);
    //   }).catch((error) => {
    //     window.alert(error.message)
    //   })
  }

  // Sign in with Google
  GoogleAuth() {
    console.log('try to google');
    const headers = new HttpHeaders();
    headers.set('Access', '*')
    this.http.get(this.api_url + 'auth/google').subscribe(res =>
      console.log(res)
      
    )
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    // return this.afAuth.signInWithPopup(provider)
    // .then((result) => {
    //    this.ngZone.run(() => {
    //       this.router.navigate(['dashboard']);
    //     })
    //   this.SetUserData(result.user);
    // }).catch((error) => {
    //   window.alert(error)
    // })
  }

   // Send email verfificaiton when new user sign up
   async SendVerificationMail() {
    // return (await this.afAuth.currentUser).sendEmailVerification()
    // .then(() => {
    //   this.router.navigate(['verify-email-address']);
    // })
  }

  FacebookAuth(){}

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    // return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    // .then(() => {
    //   window.alert('Password reset email sent, check your inbox.');
    // }).catch((error) => {
    //   window.alert(error)
    // })
  }

  public getToken(){
    const user = JSON.parse(localStorage.getItem('user'));
    return user? user['token'] as string: " "
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  

  

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    // const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: UserInfoModel =
      {guid: "D21ds12x", 
    customerUid: "cust2dsa12dsa", 
    first_name: "John", 
    last_name: "Doe", 
    email: "email@email.com", 
    zipcode: "10283",
    password: "Idasn2x2#",
    pothoUrl:"assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png",
    scores:[],
        sum_score:0
      }
    // return userRef.set(userData, {
    //   merge: true
    // })
  }

  // loadImage(){
  //   const formdata = new FormDada()
  //   return this.http.post('/api/',,{

  //   })
  // }

  // Sign out 
  SignOut() {
    // return this.afAuth.signOut().then(() => {
    //   localStorage.removeItem('user');
    //   this.router.navigate(['sign-in']);
    // })
  }
}
