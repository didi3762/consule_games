import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { MainTrivyaComponent } from './comps/games/trivyaf/main-trivya/main-trivya.component';
import { SignComponent } from './comps/user/sign/sign.component';
import { SudokuComponent } from './comps/games/sudoku/sudoku.component';
import { UsersListComponent } from './comps/user/users-list/users-list.component';
import { CardUserComponent } from './comps/user/card-user/card-user.component';
import { SignUpComponent } from './comps/user/sign-up/sign-up.component';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  {path:'home' , component:HomeComponent},
  // {path:'home/game-page' , component:GameComponent},
  {path:'trivya' , component:MainTrivyaComponent , canActivate: [AuthGuard]},
  {path:'home/users' , component:UsersListComponent},
  {path:'sign' , component:SignComponent
  //  ,canActivate: [SecureInnerPagesGuard]
  },
  // { path: 'inputuser', component: InputUserComponent},
  // {path: 'user/:uid', component: DisplayUserDataComponent},
  {path:'card-user' , component:CardUserComponent,canActivate: [AuthGuard] },
  {path:'home/suduko' , component:SudokuComponent},
  { path: 'register-user', component: SignUpComponent 
  // , canActivate: [SecureInnerPagesGuard]
},
  // { path: 'dashboard', component: DashboardComponent
  //  , canActivate: [AuthGuard] 
  // },
  // { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  // { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path:'',          redirectTo:'home', pathMatch: 'full'},
  { path:'**',        redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
