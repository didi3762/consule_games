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
import { SudokuCellComponent } from './comps/games/sudoku/sudoku-cell/sudoku-cell.component';
import { AdminComponent } from './comps/admin/admin.component';
import { CreateComponent } from './comps/admin/create/create.component';
import { SocketioComponent } from './comps/games/socketio/socketio.component';
import { TetrisComponent } from './comps/games/tetris/tetris.component';
import { MemoryGameComponent } from './comps/games/memory-game/memory-game.component';
import { SnakeComponent } from './comps/games/snake/snake.component';
import { AdminGuard } from './shared/guard/admin.guard';
import { GamesComponent } from './comps/admin/games/games.component';
import { ListComponent } from './comps/admin/list/list.component';


const routes: Routes = [
  {path:'home' , component:HomeComponent},
  // {path:'home/game-page' , component:GameComponent},
  {path:'html_url' , component:MainTrivyaComponent , canActivate: [AuthGuard]},
  {path:'home/users' , component:UsersListComponent},
  {path:'admin' , component:AdminComponent,
  //  canActivate: [AuthGuard,AdminGuard],
  children: [
    {path:'admin/create' , component:CreateComponent},
    {path:'games' , component:GamesComponent},
    {path:'users' , component:ListComponent},
  ]},
  {path:'sign' , component:SignComponent
  //  ,canActivate: [SecureInnerPagesGuard]
  },
  // { path: 'inputuser', component: InputUserComponent},
  {path: 'tetris', component: TetrisComponent,canActivate: [AuthGuard]},
  {path: 'memory', component: MemoryGameComponent,canActivate: [AuthGuard]},
  {path: 'snake', component: SnakeComponent,canActivate: [AuthGuard]},
  {path:'card-user' , component:CardUserComponent,canActivate: [AuthGuard] },
  {path:'home/suduko' , component:SudokuCellComponent,canActivate: [AuthGuard]},
  {path:'socket' , component:SocketioComponent,canActivate: [AuthGuard]},
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
