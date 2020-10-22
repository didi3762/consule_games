import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

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
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RandomDirective } from './directives/random.directive';
import { SudokuCellComponent } from './comps/games/sudoku/sudoku-cell/sudoku-cell.component';



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
    SudokuCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
