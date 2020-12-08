import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import  * as io from "socket.io-client";

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './comps/modal/modal.component';
import { ShowmodalComponent } from './comps/showmodal/showmodal.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { HomeComponent } from './comps/home/home.component';
import { CaruselaComponent } from './comps/carusela/carusela.component';
import { SignComponent } from './comps/user/sign/sign.component';
import { SudokuComponent } from './comps/games/sudoku/sudoku.component';
import { HederTrvyaComponent } from './comps/games/trivyaf/heder-trvya/heder-trvya.component';
import { MainTrivyaComponent } from './comps/games/trivyaf/main-trivya/main-trivya.component';
import { TrivyaComponent } from './comps/games/trivyaf/trivya/trivya.component';
import { CardUserComponent } from './comps/user/card-user/card-user.component';
import { UsersListComponent } from './comps/user/users-list/users-list.component';
import { SignUpComponent } from './comps/user/sign-up/sign-up.component';

import { environment } from 'src/environments/environment';
import { RandomDirective } from './directives/random.directive';
import { SudokuCellComponent } from './comps/games/sudoku/sudoku-cell/sudoku-cell.component';
import { AdminComponent } from './comps/admin/admin.component';
import { CreateComponent } from './comps/admin/create/create.component';
import { SocketioComponent } from './comps/games/socketio/socketio.component';
import { TetrisComponent } from './comps/games/tetris/tetris.component';
import { MemoryGameComponent } from './comps/games/memory-game/memory-game.component';
import { SnakeComponent } from './comps/games/snake/snake.component';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './comps/admin/games/games.component';
import { ListComponent } from './comps/admin/list/list.component';
import { AuthInterceptor } from './shared/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ShowmodalComponent,
    NavbarComponent,
    HomeComponent,
    CaruselaComponent,
    SignComponent,
    SudokuComponent,
    HederTrvyaComponent,
    TrivyaComponent,
    MainTrivyaComponent,
    CardUserComponent,
    UsersListComponent,
    SignUpComponent,
    RandomDirective,
    SudokuCellComponent,
    AdminComponent,
    CreateComponent,
    SocketioComponent,
    TetrisComponent,
    MemoryGameComponent,
    SnakeComponent,
    GamesComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    
    // NgbModule,
    NgbCarouselModule,
    // NgBootstrapModule,
    // AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule, FormsModule
  ],
  providers: [
    // {
    //   provide : HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi   : true,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
