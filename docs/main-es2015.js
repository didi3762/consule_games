(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/home/home.component */ "./src/app/comps/home/home.component.ts");
/* harmony import */ var _comps_games_trivyaf_main_trivya_main_trivya_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/games/trivyaf/main-trivya/main-trivya.component */ "./src/app/comps/games/trivyaf/main-trivya/main-trivya.component.ts");
/* harmony import */ var _comps_user_sign_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/user/sign/sign.component */ "./src/app/comps/user/sign/sign.component.ts");
/* harmony import */ var _comps_user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/user/users-list/users-list.component */ "./src/app/comps/user/users-list/users-list.component.ts");
/* harmony import */ var _comps_user_card_user_card_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/user/card-user/card-user.component */ "./src/app/comps/user/card-user/card-user.component.ts");
/* harmony import */ var _comps_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/user/sign-up/sign-up.component */ "./src/app/comps/user/sign-up/sign-up.component.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _comps_games_sudoku_sudoku_cell_sudoku_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/games/sudoku/sudoku-cell/sudoku-cell.component */ "./src/app/comps/games/sudoku/sudoku-cell/sudoku-cell.component.ts");
/* harmony import */ var _comps_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/admin/admin.component */ "./src/app/comps/admin/admin.component.ts");
/* harmony import */ var _comps_admin_create_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/admin/create/create.component */ "./src/app/comps/admin/create/create.component.ts");
/* harmony import */ var _comps_games_socketio_socketio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/games/socketio/socketio.component */ "./src/app/comps/games/socketio/socketio.component.ts");
/* harmony import */ var _comps_games_tetris_tetris_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/games/tetris/tetris.component */ "./src/app/comps/games/tetris/tetris.component.ts");
/* harmony import */ var _comps_games_memory_game_memory_game_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/games/memory-game/memory-game.component */ "./src/app/comps/games/memory-game/memory-game.component.ts");
/* harmony import */ var _comps_games_snake_snake_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comps/games/snake/snake.component */ "./src/app/comps/games/snake/snake.component.ts");
/* harmony import */ var _shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/guard/admin.guard */ "./src/app/shared/guard/admin.guard.ts");
/* harmony import */ var _comps_admin_games_games_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comps/admin/games/games.component */ "./src/app/comps/admin/games/games.component.ts");
/* harmony import */ var _comps_admin_list_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comps/admin/list/list.component */ "./src/app/comps/admin/list/list.component.ts");





















const routes = [
    { path: 'home', component: _comps_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    // {path:'home/game-page' , component:GameComponent},
    { path: 'html_url', component: _comps_games_trivyaf_main_trivya_main_trivya_component__WEBPACK_IMPORTED_MODULE_3__["MainTrivyaComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'home/users', component: _comps_user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__["UsersListComponent"] },
    { path: 'admin', component: _comps_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]],
        children: [
            { path: 'admin/create', component: _comps_admin_create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"] },
            { path: 'games', component: _comps_admin_games_games_component__WEBPACK_IMPORTED_MODULE_17__["GamesComponent"] },
            { path: 'users', component: _comps_admin_list_list_component__WEBPACK_IMPORTED_MODULE_18__["ListComponent"] },
        ] },
    { path: 'sign', component: _comps_user_sign_sign_component__WEBPACK_IMPORTED_MODULE_4__["SignComponent"]
        //  ,canActivate: [SecureInnerPagesGuard]
    },
    // { path: 'inputuser', component: InputUserComponent},
    { path: 'tetris', component: _comps_games_tetris_tetris_component__WEBPACK_IMPORTED_MODULE_13__["TetrisComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'memory', component: _comps_games_memory_game_memory_game_component__WEBPACK_IMPORTED_MODULE_14__["MemoryGameComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'snake', component: _comps_games_snake_snake_component__WEBPACK_IMPORTED_MODULE_15__["SnakeComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'card-user', component: _comps_user_card_user_card_user_component__WEBPACK_IMPORTED_MODULE_6__["CardUserComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'home/suduko', component: _comps_games_sudoku_sudoku_cell_sudoku_cell_component__WEBPACK_IMPORTED_MODULE_9__["SudokuCellComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'socket', component: _comps_games_socketio_socketio_component__WEBPACK_IMPORTED_MODULE_12__["SocketioComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'register-user', component: _comps_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"]
        // , canActivate: [SecureInnerPagesGuard]
    },
    // { path: 'dashboard', component: DashboardComponent
    //  , canActivate: [AuthGuard] 
    // },
    // { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
    // { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/navbar/navbar.component */ "./src/app/comps/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'gameproj';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "my-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/modal/modal.component */ "./src/app/comps/modal/modal.component.ts");
/* harmony import */ var _comps_showmodal_showmodal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/showmodal/showmodal.component */ "./src/app/comps/showmodal/showmodal.component.ts");
/* harmony import */ var _comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/navbar/navbar.component */ "./src/app/comps/navbar/navbar.component.ts");
/* harmony import */ var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/home/home.component */ "./src/app/comps/home/home.component.ts");
/* harmony import */ var _comps_carusela_carusela_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/carusela/carusela.component */ "./src/app/comps/carusela/carusela.component.ts");
/* harmony import */ var _comps_user_sign_sign_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/user/sign/sign.component */ "./src/app/comps/user/sign/sign.component.ts");
/* harmony import */ var _comps_games_sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/games/sudoku/sudoku.component */ "./src/app/comps/games/sudoku/sudoku.component.ts");
/* harmony import */ var _comps_games_trivyaf_heder_trvya_heder_trvya_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/games/trivyaf/heder-trvya/heder-trvya.component */ "./src/app/comps/games/trivyaf/heder-trvya/heder-trvya.component.ts");
/* harmony import */ var _comps_games_trivyaf_main_trivya_main_trivya_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comps/games/trivyaf/main-trivya/main-trivya.component */ "./src/app/comps/games/trivyaf/main-trivya/main-trivya.component.ts");
/* harmony import */ var _comps_games_trivyaf_trivya_trivya_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comps/games/trivyaf/trivya/trivya.component */ "./src/app/comps/games/trivyaf/trivya/trivya.component.ts");
/* harmony import */ var _comps_user_card_user_card_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comps/user/card-user/card-user.component */ "./src/app/comps/user/card-user/card-user.component.ts");
/* harmony import */ var _comps_user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comps/user/users-list/users-list.component */ "./src/app/comps/user/users-list/users-list.component.ts");
/* harmony import */ var _comps_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./comps/user/sign-up/sign-up.component */ "./src/app/comps/user/sign-up/sign-up.component.ts");
/* harmony import */ var _directives_random_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/random.directive */ "./src/app/directives/random.directive.ts");
/* harmony import */ var _comps_games_sudoku_sudoku_cell_sudoku_cell_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./comps/games/sudoku/sudoku-cell/sudoku-cell.component */ "./src/app/comps/games/sudoku/sudoku-cell/sudoku-cell.component.ts");
/* harmony import */ var _comps_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./comps/admin/admin.component */ "./src/app/comps/admin/admin.component.ts");
/* harmony import */ var _comps_admin_create_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./comps/admin/create/create.component */ "./src/app/comps/admin/create/create.component.ts");
/* harmony import */ var _comps_games_socketio_socketio_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./comps/games/socketio/socketio.component */ "./src/app/comps/games/socketio/socketio.component.ts");
/* harmony import */ var _comps_games_tetris_tetris_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./comps/games/tetris/tetris.component */ "./src/app/comps/games/tetris/tetris.component.ts");
/* harmony import */ var _comps_games_memory_game_memory_game_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./comps/games/memory-game/memory-game.component */ "./src/app/comps/games/memory-game/memory-game.component.ts");
/* harmony import */ var _comps_games_snake_snake_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./comps/games/snake/snake.component */ "./src/app/comps/games/snake/snake.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _comps_admin_games_games_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./comps/admin/games/games.component */ "./src/app/comps/admin/games/games.component.ts");
/* harmony import */ var _comps_admin_list_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./comps/admin/list/list.component */ "./src/app/comps/admin/list/list.component.ts");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_28__["CommonModule"],
            // NgbModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"],
            // NgBootstrapModule,
            // AngularFireModule.initializeApp(environment.firebase),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _comps_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
        _comps_showmodal_showmodal_component__WEBPACK_IMPORTED_MODULE_8__["ShowmodalComponent"],
        _comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _comps_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _comps_carusela_carusela_component__WEBPACK_IMPORTED_MODULE_11__["CaruselaComponent"],
        _comps_user_sign_sign_component__WEBPACK_IMPORTED_MODULE_12__["SignComponent"],
        _comps_games_sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_13__["SudokuComponent"],
        _comps_games_trivyaf_heder_trvya_heder_trvya_component__WEBPACK_IMPORTED_MODULE_14__["HederTrvyaComponent"],
        _comps_games_trivyaf_trivya_trivya_component__WEBPACK_IMPORTED_MODULE_16__["TrivyaComponent"],
        _comps_games_trivyaf_main_trivya_main_trivya_component__WEBPACK_IMPORTED_MODULE_15__["MainTrivyaComponent"],
        _comps_user_card_user_card_user_component__WEBPACK_IMPORTED_MODULE_17__["CardUserComponent"],
        _comps_user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_18__["UsersListComponent"],
        _comps_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__["SignUpComponent"],
        _directives_random_directive__WEBPACK_IMPORTED_MODULE_20__["RandomDirective"],
        _comps_games_sudoku_sudoku_cell_sudoku_cell_component__WEBPACK_IMPORTED_MODULE_21__["SudokuCellComponent"],
        _comps_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"],
        _comps_admin_create_create_component__WEBPACK_IMPORTED_MODULE_23__["CreateComponent"],
        _comps_games_socketio_socketio_component__WEBPACK_IMPORTED_MODULE_24__["SocketioComponent"],
        _comps_games_tetris_tetris_component__WEBPACK_IMPORTED_MODULE_25__["TetrisComponent"],
        _comps_games_memory_game_memory_game_component__WEBPACK_IMPORTED_MODULE_26__["MemoryGameComponent"],
        _comps_games_snake_snake_component__WEBPACK_IMPORTED_MODULE_27__["SnakeComponent"],
        _comps_admin_games_games_component__WEBPACK_IMPORTED_MODULE_29__["GamesComponent"],
        _comps_admin_list_list_component__WEBPACK_IMPORTED_MODULE_30__["ListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_28__["CommonModule"],
        // NgbModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"],
        // NgBootstrapModule,
        // AngularFireModule.initializeApp(environment.firebase),
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _comps_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
                    _comps_showmodal_showmodal_component__WEBPACK_IMPORTED_MODULE_8__["ShowmodalComponent"],
                    _comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                    _comps_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _comps_carusela_carusela_component__WEBPACK_IMPORTED_MODULE_11__["CaruselaComponent"],
                    _comps_user_sign_sign_component__WEBPACK_IMPORTED_MODULE_12__["SignComponent"],
                    _comps_games_sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_13__["SudokuComponent"],
                    _comps_games_trivyaf_heder_trvya_heder_trvya_component__WEBPACK_IMPORTED_MODULE_14__["HederTrvyaComponent"],
                    _comps_games_trivyaf_trivya_trivya_component__WEBPACK_IMPORTED_MODULE_16__["TrivyaComponent"],
                    _comps_games_trivyaf_main_trivya_main_trivya_component__WEBPACK_IMPORTED_MODULE_15__["MainTrivyaComponent"],
                    _comps_user_card_user_card_user_component__WEBPACK_IMPORTED_MODULE_17__["CardUserComponent"],
                    _comps_user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_18__["UsersListComponent"],
                    _comps_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__["SignUpComponent"],
                    _directives_random_directive__WEBPACK_IMPORTED_MODULE_20__["RandomDirective"],
                    _comps_games_sudoku_sudoku_cell_sudoku_cell_component__WEBPACK_IMPORTED_MODULE_21__["SudokuCellComponent"],
                    _comps_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"],
                    _comps_admin_create_create_component__WEBPACK_IMPORTED_MODULE_23__["CreateComponent"],
                    _comps_games_socketio_socketio_component__WEBPACK_IMPORTED_MODULE_24__["SocketioComponent"],
                    _comps_games_tetris_tetris_component__WEBPACK_IMPORTED_MODULE_25__["TetrisComponent"],
                    _comps_games_memory_game_memory_game_component__WEBPACK_IMPORTED_MODULE_26__["MemoryGameComponent"],
                    _comps_games_snake_snake_component__WEBPACK_IMPORTED_MODULE_27__["SnakeComponent"],
                    _comps_admin_games_games_component__WEBPACK_IMPORTED_MODULE_29__["GamesComponent"],
                    _comps_admin_list_list_component__WEBPACK_IMPORTED_MODULE_30__["ListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_28__["CommonModule"],
                    // NgbModule,
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"],
                    // NgBootstrapModule,
                    // AngularFireModule.initializeApp(environment.firebase),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comps/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_servicees_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicees/game.service */ "./src/app/servicees/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AdminComponent {
    constructor(gameSvc) {
        this.gameSvc = gameSvc;
    }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["admin"]], decls: 48, vars: 0, consts: [["id", "page-container", 1, "main-admin"], [1, "side-bar"], [1, "side-bar-links"], [1, "side-bar-logo", "text-center", "py-3"], ["src", "", 1, "img-fluid", "rounded-circle", "border", "bg-secoundry", "mb-3"], [1, "navbar-nav"], [1, "nav-item"], ["href", "#", 1, "nav-links", "d-block"], [1, "fa", "fa-home", "pr-2"], [1, "side-bar-icons"], [1, "icons", "d-flex", "flex-column", "align-items-center"], ["href", "#", 1, "set-width", "text-center", "display-inline-block", "my-1"], [1, "fa", "fa-home"], ["routerLink", "users", 1, "set-width", "text-center", "display-inline-block", "my-1"], [1, "fa", "fa-users"], [1, "fa", "fa-list"], ["routerLink", "games", 1, "set-width", "text-center", "display-inline-block", "my-1"], [1, "fa", "fa-gamepad"], [1, "fa", "fa-file-text"], [1, "fa", "fa-sticky-note-o"], [1, "fa", "fa-database"], ["dir", "rtl", 1, "main-body-content", "w-100", "ets-pt"], ["type", "button", "routerLink", "admin/create", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-plus"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".main-admin[_ngcontent-%COMP%]{\r\n    direction: rtl;\r\n}\r\n.navbar.bg-light[_ngcontent-%COMP%]{\r\n    \r\n    transition: ease 0.5s;\r\n}\r\n.user-profile[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: #f1f1f1;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 10px;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top:50%;\r\n    width:30px;\r\n    height: 2px;\r\n    background-color: #fff;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: -8px;\r\n    width: 100%;\r\n    height: 2px;\r\n    background-color: #fff;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    top:-8px;\r\n    width: 100%;\r\n    height: 2px;\r\n    background-color: #fff;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   li.nav-item.ets-right-0[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{\r\n    left: auto;\r\n    right: 0;\r\n    position: absolute;\r\n}\r\n.side-bar[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top:181px;\r\n    left:0;\r\n    padding: 15px;\r\n    display: inline-block;\r\n    width: 100px;\r\n    background-color: #fff;\r\n    box-shadow: 0px 0px 8px #ccc;\r\n    height: 100vh;\r\n    transition: ease 0.5s; \r\n    overflow-y: auto;\r\n}\r\n.main-body-content[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding: 15px;\r\n    background-color:#eef4fb;\r\n    height: 100vh;\r\n    padding-left: 100px;\r\n    transition: ease 0.5s; \r\n}\r\n.ets-pt[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\n}\r\n.main-admin.show-menu[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n}\r\n.main-admin.show-menu[_ngcontent-%COMP%]   .main-body-content[_ngcontent-%COMP%]{\r\n    \r\n}\r\n.main-admin.show-menu[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]{\r\n    width: 15px;\r\n}\r\n.main-admin.show-menu[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]::after{\r\n    width: 10px;\r\n}\r\n.main-admin.show-menu[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]::before{\r\n    width: 25px;\r\n}\r\n.main-admin.show-menu[_ngcontent-%COMP%]   .side-bar-links[_ngcontent-%COMP%]{\r\n    opacity: 1;\r\n}\r\n.main-admin.show-menu[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-bar-icons[_ngcontent-%COMP%]{\r\n    opacity: 0;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-bar-links[_ngcontent-%COMP%]{\r\n    opacity: 0;\r\n    transition:  ease 0.5s;\r\n}\r\n.side-bar[_ngcontent-%COMP%]   .side-bar-links[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    color: #000;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n}\r\n.side-bar[_ngcontent-%COMP%]   .side-bar-links[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size:20px;\r\n    color: #8ac1f6;\r\n}\r\n.side-bar[_ngcontent-%COMP%]   .side-bar-links[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .side-bar-links[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{\r\n    text-decoration: none;\r\n    background-color: #8ac1f6;\r\n    color:#fff;\r\n}\r\n.side-bar[_ngcontent-%COMP%]   .side-bar-links[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\r\n    color:#fff;\r\n}\r\n.side-bar[_ngcontent-%COMP%]   .side-bar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.side-bar[_ngcontent-%COMP%]   .side-bar-icons[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top:20px;\r\n    right:0;\r\n    width: 100px;\r\n    opacity: 1;\r\n    transition: ease 0.5s;\r\n}\r\n.side-bar[_ngcontent-%COMP%]   .side-bar-icons[_ngcontent-%COMP%]   .side-bar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.side-bar[_ngcontent-%COMP%]   .side-bar-icons[_ngcontent-%COMP%]   .side-bar-logo[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n}\r\n.side-bar[_ngcontent-%COMP%]   .side-bar-icons[_ngcontent-%COMP%]   .set-width[_ngcontent-%COMP%]{\r\n    color: #000;\r\n    font-size: 32px;\r\n}\r\n.side-bar[_ngcontent-%COMP%]   .side-bar-icons[_ngcontent-%COMP%]   .set-width[_ngcontent-%COMP%]:hover, .side-bar[_ngcontent-%COMP%]   .side-bar-icons[_ngcontent-%COMP%]   .set-width[_ngcontent-%COMP%]:focus{\r\n    color: #8ac1f6;\r\n    text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsTUFBTTtJQUNOLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQSxzQkFBc0I7QUFDdEI7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWFkbWlue1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuLm5hdmJhci5iZy1saWdodHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDsgKi9cclxuICAgIHRyYW5zaXRpb246IGVhc2UgMC41cztcclxufVxyXG4udXNlci1wcm9maWxle1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcbi5uYXZiYXIgLm1lbnUtYmFye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5hdmJhciAubWVudS1iYXIgLmJhcnN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgd2lkdGg6MzBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4ubmF2YmFyIC5tZW51LWJhciAuYmFyczo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLm5hdmJhciAubWVudS1iYXIgLmJhcnM6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6LThweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5uYXZiYXIgdWwubmF2YmFyLW5hdiBsaS5uYXYtaXRlbS5ldHMtcmlnaHQtMCAuZHJvcGRvd24tbWVudXtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufSBcclxuLnNpZGUtYmFye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjE4MXB4O1xyXG4gICAgbGVmdDowO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjY2NjO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRyYW5zaXRpb246IGVhc2UgMC41czsgXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5tYWluLWJvZHktY29udGVudHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWY0ZmI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIHRyYW5zaXRpb246IGVhc2UgMC41czsgXHJcbn1cclxuLmV0cy1wdHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4ubWFpbi1hZG1pbi5zaG93LW1lbnUgLnNpZGUtYmFye1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4ubWFpbi1hZG1pbi5zaG93LW1lbnUgLm1haW4tYm9keS1jb250ZW50e1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAyNjVweDsgKi9cclxufVxyXG4ubWFpbi1hZG1pbi5zaG93LW1lbnUgLm5hdmJhciAubWVudS1iYXIgLmJhcnN7XHJcbiAgICB3aWR0aDogMTVweDtcclxufVxyXG4ubWFpbi1hZG1pbi5zaG93LW1lbnUgLm5hdmJhciAubWVudS1iYXIgLmJhcnM6OmFmdGVye1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbn1cclxuLm1haW4tYWRtaW4uc2hvdy1tZW51IC5uYXZiYXIgLm1lbnUtYmFyIC5iYXJzOjpiZWZvcmV7XHJcbiAgICB3aWR0aDogMjVweDtcclxufVxyXG4ubWFpbi1hZG1pbi5zaG93LW1lbnUgLnNpZGUtYmFyLWxpbmtze1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4ubWFpbi1hZG1pbi5zaG93LW1lbnUgLnNpZGUtYmFyIC5zaWRlLWJhci1pY29uc3tcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLyoqKiogZW5kIGVmZmFjdHMgKioqKi9cclxuLnNpZGUtYmFyIC5zaWRlLWJhci1saW5rc3tcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAgZWFzZSAwLjVzO1xyXG59XHJcbi5zaWRlLWJhciAuc2lkZS1iYXItbGlua3MgdWwubmF2YmFyLW5hdiBsaSBhe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uc2lkZS1iYXIgLnNpZGUtYmFyLWxpbmtzIHVsLm5hdmJhci1uYXYgbGkgYSBpe1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBjb2xvcjogIzhhYzFmNjtcclxufVxyXG4uc2lkZS1iYXIgLnNpZGUtYmFyLWxpbmtzIHVsLm5hdmJhci1uYXYgbGkgYTpob3ZlciwgLnNpZGUtYmFyLWxpbmtzIHVsLm5hdmJhci1uYXYgbGkgYTpmb2N1c3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YWMxZjY7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5zaWRlLWJhciAuc2lkZS1iYXItbGlua3MgdWwubmF2YmFyLW5hdiBsaSBhOmhvdmVyIGl7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5zaWRlLWJhciAuc2lkZS1iYXItbG9nbyBpbWd7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5zaWRlLWJhciAuc2lkZS1iYXItaWNvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MjBweDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xyXG59XHJcbi5zaWRlLWJhciAuc2lkZS1iYXItaWNvbnMgLnNpZGUtYmFyLWxvZ28gaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uc2lkZS1iYXIgLnNpZGUtYmFyLWljb25zIC5zaWRlLWJhci1sb2dvIGg1e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5zaWRlLWJhciAuc2lkZS1iYXItaWNvbnMgLnNldC13aWR0aHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcbi5zaWRlLWJhciAuc2lkZS1iYXItaWNvbnMgLnNldC13aWR0aDpob3Zlciwuc2lkZS1iYXIgLnNpZGUtYmFyLWljb25zIC5zZXQtd2lkdGg6Zm9jdXN7XHJcbiAgICBjb2xvcjogIzhhYzFmNjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: src_app_servicees_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/admin/create/create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comps/admin/create/create.component.ts ***!
  \********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_servicees_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicees/game.service */ "./src/app/servicees/game.service.ts");
/* harmony import */ var src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicees/sign.service */ "./src/app/servicees/sign.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["fileUpload"];
function CreateComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.serviceErrors.first_name || ctx_r1.message_erros["full_name_erros"]);
} }
function CreateComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.serviceErrors.first_name || ctx_r3.message_erros["description_erros"]);
} }
function CreateComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.serviceErrors.first_name || ctx_r5.message_erros["html_url_erros"]);
} }
function CreateComponent_p_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.serviceErrors.first_name || ctx_r7.message_erros["loat_image_erros"]);
} }
const _c1 = function (a0) { return { "has-error": a0 }; };
const _c2 = function (a0) { return { "is-invalid": a0 }; };
class CreateComponent {
    constructor(formBuilder, gameSvc, signSvc) {
        this.formBuilder = formBuilder;
        this.gameSvc = gameSvc;
        this.signSvc = signSvc;
        this.file = {
            data: null,
            inProgress: false,
            progress: 0
        };
        this.registered = false;
        this.submitted = false;
        this.serviceErrors = {};
        this.message_erros = {
            name_erros: '',
            description_erros: '',
            email_erros: '',
            password_erros: '',
            html_url_erros: '',
        };
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            html_url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    invalidFulltName() {
        if (this.userForm.controls.name.errors != null) {
            if (this.userForm.controls.name.hasError('required')) {
                this.message_erros.name_erros = 'שם משחק חובה';
            }
        }
        return (this.submitted &&
            (
            // this.serviceErrors.first_name != null || 
            this.userForm.controls.name.errors != null));
    }
    invalidUserName() {
        if (this.userForm.controls.description.errors != null) {
            if (this.userForm.controls.description.hasError('required')) {
                this.message_erros.description_erros = 'תיאור חובה';
            }
        }
        return (this.submitted &&
            (
            // this.serviceErrors.last_name != null || 
            this.userForm.controls.description.errors != null));
    }
    invalidUrl() {
        if (this.userForm.controls.html_url.errors != null) {
            if (this.userForm.controls.html_url.hasError('required')) {
                this.message_erros.html_url_erros = 'כתובת URL חובה';
            }
        }
        return (this.submitted &&
            (
            // this.serviceErrors.last_name != null || 
            this.userForm.controls.html_url.errors != null));
    }
    loadFile() {
        const fileInput = this.fileUpload.nativeElement;
        fileInput.click();
        fileInput.onchange = () => {
            this.file = {
                data: fileInput.files[0],
                inProgress: false,
                progress: 0
            };
        };
        console.log(this.file);
    }
    onSubmit() {
        this.fileUpload.nativeElement.value = '';
        this.submitted = true;
        this.gameSvc.create_game(this.userForm.invalid, this.userForm.value, this.file);
        this.registered = true;
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_3__["SignService"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
    } }, decls: 37, vars: 14, consts: [[1, "bodylogin"], [1, "container"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "card-body"], ["type", "submit", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "input-group", "form-group", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "formControlName", "name", "placeholder", "\u05E9\u05DD", 1, "form-control"], ["userName", ""], ["id", "full_name_error", "class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "description", "placeholder", "\u05EA\u05D9\u05D0\u05D5\u05E8", 1, "form-control"], ["id", "user_name_error", "class", "text-danger", 4, "ngIf"], [1, "fa", "fa-html5"], ["type", "text", "formControlName", "html_url", "placeholder", "\u05DB\u05EA\u05D5\u05D1\u05EA HTML", 1, "form-control"], ["type", "file", "name", "fileUpload", "accept", "image/*", 2, "display", "none"], ["fileUpload", ""], [1, "form-group", "has-error"], ["type", "submit", "value", "\u05E9\u05DE\u05D5\u05E8", 1, "btn", "float-right", "login_btn"], ["id", "full_name_error", 1, "text-danger"], ["id", "user_name_error", 1, "text-danger"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05E9\u05D7\u05E7 \u05D7\u05D3\u05E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_8_listener() { return ctx.loadFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05D4\u05D5\u05E1\u05E3 \u05EA\u05DE\u05D5\u05E0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateComponent_p_17_Template, 2, 1, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateComponent_p_24_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CreateComponent_p_31_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CreateComponent_p_34_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.invalidFulltName()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidFulltName());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx.invalidUserName()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidUserName());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx.invalidUrl()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidUrl());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidUrl());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".bodylogin[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\nbackground-size: cover;\r\nbackground-repeat: no-repeat;\r\nheight: 100vh;\r\nfont-family: 'Numans', sans-serif;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n\r\nalign-content: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n\r\nmargin-top: auto;\r\nmargin-bottom: auto;\r\nwidth: 400px;\r\nbackground-color: rgba(0,0,0,0.5) !important;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nfont-size: 60px;\r\nmargin-left: 10px;\r\ncolor: #1dd2ff;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\r\ncolor: white;\r\ncursor: pointer;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]{\r\nposition: absolute;\r\nright: 20px;\r\ntop: -45px;\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nwidth: 50px;\r\nbackground-color:  #1dd2ff;\r\ncolor: black;\r\nborder:0 !important;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\noutline: 0 0 0 0  !important;\r\nbox-shadow: 0 0 0 0 !important;\r\n\r\n}\r\n\r\n.remember[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\r\n{\r\nwidth: 20px;\r\nheight: 20px;\r\nmargin-left: 15px;\r\nmargin-right: 5px;\r\n}\r\n\r\n.login_btn[_ngcontent-%COMP%]{\r\ncolor: black;\r\nbackground-color:  #1dd2ff;\r\nwidth: 100px;\r\n}\r\n\r\n.login_btn[_ngcontent-%COMP%]:hover{\r\ncolor: black;\r\nbackground-color: white;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\nmargin-left: 4px;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]{\r\n    border-color:red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWRtaW4vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQzs7QUFFckMsbUVBQW1FOztBQUVuRTtJQUNJLGtCQUFrQjtBQUN0QixzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLGFBQWE7QUFDYixpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsY0FBYztBQUNkOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGVBQWU7QUFDZjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsVUFBVTtBQUNWOztBQUVBO0FBQ0EsV0FBVztBQUNYLDBCQUEwQjtBQUMxQixZQUFZO0FBQ1osbUJBQW1CO0FBQ25COztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLDBCQUEwQjtBQUMxQixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvYWRtaW4vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFkZSB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltKi9cclxuXHJcbi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7ICovXHJcblxyXG4uYm9keWxvZ2lue1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6IDEwMHZoO1xyXG5mb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbi8qIGhlaWdodDogMTAwJTsgKi9cclxuYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZHtcclxuLyogaGVpZ2h0OiAzNzBweDsgKi9cclxubWFyZ2luLXRvcDogYXV0bztcclxubWFyZ2luLWJvdHRvbTogYXV0bztcclxud2lkdGg6IDQwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW57XHJcbmZvbnQtc2l6ZTogNjBweDtcclxubWFyZ2luLWxlZnQ6IDEwcHg7XHJcbmNvbG9yOiAjMWRkMmZmO1xyXG59XHJcblxyXG4uc29jaWFsX2ljb24gc3Bhbjpob3ZlcntcclxuY29sb3I6IHdoaXRlO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBoM3tcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc29jaWFsX2ljb257XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxucmlnaHQ6IDIwcHg7XHJcbnRvcDogLTQ1cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW57XHJcbndpZHRoOiA1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAgIzFkZDJmZjtcclxuY29sb3I6IGJsYWNrO1xyXG5ib3JkZXI6MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1c3tcclxub3V0bGluZTogMCAwIDAgMCAgIWltcG9ydGFudDtcclxuYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLnJlbWVtYmVye1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yZW1lbWJlciBpbnB1dFxyXG57XHJcbndpZHRoOiAyMHB4O1xyXG5oZWlnaHQ6IDIwcHg7XHJcbm1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmxvZ2luX2J0bntcclxuY29sb3I6IGJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAgIzFkZDJmZjtcclxud2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubG9naW5fYnRuOmhvdmVye1xyXG5jb2xvcjogYmxhY2s7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlua3N7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpbmtzIGF7XHJcbm1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5oYXMtZXJyb3J7XHJcbiAgICBib3JkZXItY29sb3I6cmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_servicees_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }, { type: src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_3__["SignService"] }]; }, { fileUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["fileUpload", { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/admin/games/games.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comps/admin/games/games.component.ts ***!
  \******************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicees_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicees/game.service */ "./src/app/servicees/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function GamesComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_tr_9_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const game_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.delate_item(game_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/games/image/", game_r1.photo_url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class GamesComponent {
    constructor(gameSvc) {
        this.gameSvc = gameSvc;
        this.gameSvc.getGames();
        this.game_list_ob = this.gameSvc.games_list;
        this.game_list_ob.subscribe(res => {
            console.log(res);
            this.game_list = res;
            console.log(this.game_list);
        });
    }
    ngOnInit() {
    }
    delate_item(game_id) {
        this.gameSvc.delate_game(game_id);
    }
}
GamesComponent.ɵfac = function GamesComponent_Factory(t) { return new (t || GamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicees_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
GamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamesComponent, selectors: [["app-games"]], decls: 10, vars: 1, consts: [[1, "table-responsive", "bg-light"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "cel_image"], ["alt", "", 1, "img-fluid", "mx-auto", "d-block", 3, "src"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"]], template: function GamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05DE\u05E9\u05D7\u05E7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05D4\u05D5\u05E8\u05D0\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05EA\u05DE\u05D5\u05E0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GamesComponent_tr_9_Template, 11, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.game_list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".cel_image[_ngcontent-%COMP%]{\r\n   max-width: 100px;\r\n    max-height:100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWRtaW4vZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGdCQUFnQjtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2FkbWluL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VsX2ltYWdle1xyXG4gICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LWhlaWdodDoxMDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-games',
                templateUrl: './games.component.html',
                styleUrls: ['./games.component.css']
            }]
    }], function () { return [{ type: _servicees_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/admin/list/list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comps/admin/list/list.component.ts ***!
  \****************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicees/sign.service */ "./src/app/servicees/sign.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ListComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05E9\u05DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u05E1\u05DA \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u05D8\u05E8\u05D5\u05D9\u05D9\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05D8\u05D8\u05E8\u05D9\u05E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u05E1'\u05E0\u05D9\u05D9\u05E7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D1\u05D5\u05E0\u05D5\u05E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u05EA\u05DE\u05D5\u05E0\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.sum_score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.sum_score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.sum_score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.sum_score);
} }
class ListComponent {
    constructor(signSvc) {
        this.signSvc = signSvc;
    }
    ngOnInit() {
        this.signSvc.getUsers();
        this.game_list_ob = this.signSvc.users_list;
        this.game_list_ob.subscribe(res => {
            this.users_list = res;
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_1__["SignService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 2, vars: 1, consts: [[1, "table-responsive", "bg-light"], ["class", "table", 4, "ngFor", "ngForOf"], [1, "table"], ["src", "http://localhost:3000/games/image/image(7)cdf820b9-fdbd-4171-8a0b-d3e6de3cca8f.png", "alt", ""]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_table_1_Template, 29, 5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users_list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2FkbWluL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_1__["SignService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/carusela/carusela.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comps/carusela/carusela.component.ts ***!
  \******************************************************/
/*! exports provided: CaruselaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaruselaComponent", function() { return CaruselaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _servicees_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicees/game.service */ "./src/app/servicees/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = ["myCarousel"];
const _c1 = function (a0) { return { "active": a0 }; };
function CaruselaComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, i_r4 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slide-to", i_r4);
} }
function CaruselaComponent_figure_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", game_r5.html_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r1.api_url, "", game_r5.photo_url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CaruselaComponent_div_12_figure_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r6.api_url, "", game_r7.photo_url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CaruselaComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaruselaComponent_div_12_figure_1_Template, 3, 2, "figure", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.game_list == null ? null : ctx_r2.game_list.slice(6, 12));
} }
class CaruselaComponent {
    constructor(config, gameSvc) {
        this.gameSvc = gameSvc;
        this.game_list = [];
        this.api_url = 'http://localhost:3000/games/image/';
        this.game_list_duble = [];
        this.images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
        config.interval = 20000;
        config.keyboard = true;
        config.pauseOnHover = true;
        this.gameSvc.getGames();
        this.game_list_ob = this.gameSvc.games_list;
        this.game_list_ob
            .subscribe(res => {
            this.game_list = res;
            let k = 0;
            let game_b = [];
            this.game_list_duble = this.game_list.reduce((sum, el, i) => {
                game_b.push(el);
                if ((i + 1) % 6 == 0 || i == this.game_list.length - 1) {
                    sum.push(game_b);
                    game_b = [];
                }
                return sum;
            }, []);
            console.log(this.game_list_duble);
        });
    }
    ngOnInit() {
    }
}
CaruselaComponent.ɵfac = function CaruselaComponent_Factory(t) { return new (t || CaruselaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicees_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
CaruselaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaruselaComponent, selectors: [["carusela"]], viewQuery: function CaruselaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myCarousel = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])], decls: 13, vars: 3, consts: [["id", "myCarousel", "data-ride", "carousel", 1, "carousel", "slide", "carousel-multi-item", "mr-auto"], [1, "controls-top", "text-center"], ["href", "#myCarousel", "data-slide", "prev", 1, "btn-floating", "btn-secondary"], [1, "fa", "fa-chevron-left"], ["href", "#myCarousel", "data-slide", "next", 1, "btn-floating", "btn-secondary"], [1, "fa", "fa-chevron-right"], [1, "carousel-indicators"], [4, "ngFor", "ngForOf"], ["role", "listbox", 1, "carousel-inner", "mdb-lightbox"], ["id", "mdb-lightbox-ui"], [1, "carousel-item", "active", "text-center"], ["class", "col-md-4 d-md-inline-block", 4, "ngFor", "ngForOf"], ["class", " carousel-item text-center", 4, "ngIf"], ["data-target", "#myCarousel", 1, "secondary-color", 3, "ngClass"], [1, "col-md-4", "d-md-inline-block"], ["data-size", "1600x1067", 3, "routerLink"], [1, "img-fluid", 3, "src"], [1, "carousel-item", "text-center"], ["routerLink", "/trivya", "data-size", "1600x1067"]], template: function CaruselaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CaruselaComponent_ng_container_7_Template, 2, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CaruselaComponent_figure_11_Template, 3, 3, "figure", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CaruselaComponent_div_12_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.game_list_duble == null ? null : ctx.game_list_duble.slice(0, 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.game_list == null ? null : ctx.game_list.slice(0, 6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game_list[6]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["ngb-carousel[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 0;\r\n    padding-top: 55%;\r\n    margin-top: 10px;\r\n     \r\n  }\r\n  \r\n  ngb-carousel[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FydXNlbGEvY2FydXNlbGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtLQUNmLGtDQUFrQztFQUNyQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0VBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXJ1c2VsYS9jYXJ1c2VsYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmdiLWNhcm91c2VsIC53cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmctdG9wOiA1NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgIC8qIEtlZXAgcmF0aW8gZm9yIDkwMHg1MDAgaW1hZ2VzICovXHJcbiAgfVxyXG4gIFxyXG4gIG5nYi1jYXJvdXNlbCAud3JhcHBlcj5pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaruselaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'carusela',
                templateUrl: './carusela.component.html',
                styleUrls: ['./carusela.component.css'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"] }, { type: _servicees_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, { myCarousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myCarousel']
        }] }); })();


/***/ }),

/***/ "./src/app/comps/games/memory-game/memory-game.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/comps/games/memory-game/memory-game.component.ts ***!
  \******************************************************************/
/*! exports provided: MemoryGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryGameComponent", function() { return MemoryGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicees_sign_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicees/sign.service */ "./src/app/servicees/sign.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MemoryGameComponent_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemoryGameComponent_tr_9_td_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const card_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.isGuarding || ctx_r4.check(card_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card_container ", !card_r3["isFaceUp"] ? "" : "flip", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r3["item"], " ");
} }
function MemoryGameComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemoryGameComponent_tr_9_td_1_Template, 7, 4, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
class MemoryGameComponent {
    constructor(signSvc) {
        this.signSvc = signSvc;
        // constant variables 
        this.constants = {
            rows: 3,
            columns: 6,
            numMatches: (3 * 6) / 2,
            getRows: function () { return 3; },
            getColumns: function () { return 6; },
            getNumMatches: function () { return (3 * 6) / 2; },
        };
        this.timer = null;
        this.timeLimit = 60000;
        this.isCritical = false;
        this.isGuarding = false;
        this.inGame = false;
        this.currentSessionOpen = false;
        this.previousCard = null;
        this.numPairs = 0;
        this.check = function (card) {
            if (this.currentSessionOpen && this.previousCard != card && this.previousCard.item == card.item && !card.isFaceUp) {
                card.isFaceUp = true;
                this.previousCard = null;
                this.currentSessionOpen = false;
                this.numPairs++;
                this.signSvc.updateSum(this.numPairs);
            }
            else if (this.currentSessionOpen && this.previousCard != card && this.previousCard.item != card.item && !card.isFaceUp) {
                this.isGuarding = true;
                card.isFaceUp = true;
                this.currentSessionOpen = false;
                setTimeout(() => {
                    card.isFaceUp = false;
                    this.previousCard.isFaceUp = false;
                    this.previousCard = null;
                    this.isGuarding = this.timeLimit ? false : true;
                }, 1000);
            }
            else {
                card.isFaceUp = true;
                this.currentSessionOpen = true;
                this.previousCard = card;
            }
            if (this.numPairs == this.constants.getNumMatches()) {
                this.stopTimer();
            }
        };
    }
    ngOnInit() {
        this.deck = this.createDeck();
        this.isGuarding = false;
        console.log(this.deck);
    }
    // Global Variables
    // this function creates deck of cards that returns an object of cards 
    // to the caller
    createDeck() {
        var rows = this.constants.getRows();
        var cols = this.constants.getColumns();
        var key = this.createRandom();
        var deck = {};
        deck['rows'] = [];
        // create each row
        for (var i = 0; i < rows; i++) {
            var row = {};
            row['cards'] = [];
            let cards = [];
            // creat each card in the row
            for (var j = 0; j < cols; j++) {
                let card = {};
                card['isFaceUp'] = false;
                card['item'] = key.pop();
                cards.push(card);
            }
            deck['rows'].push(cards);
        }
        return deck;
    }
    // used to remove something form an array by index
    removeByIndex(arr, index) {
        arr.splice(index, 1);
    }
    insertByIndex(arr, index, item) {
        arr.splice(index, 0, item);
    }
    // creates a random array of items that contain matches
    // for example: [1, 5, 6, 5, 1, 6]
    createRandom() {
        var matches = this.constants.getNumMatches();
        var pool = [];
        var answers = [];
        var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
        var hiragana = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח',
            'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע',
            'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
        // set what kind of item to display
        var items = hiragana;
        // create the arrays for random numbers and item holder
        for (var i = 0; i < matches * 2; i++) {
            pool.push(i); // random numbers
        }
        // generate an array with the random items
        for (var n = 0; n < matches; n++) {
            // grab random letter from array and remove that letter from the
            // original array
            var randLetter = Math.floor((Math.random() * items.length));
            var letter = items[randLetter];
            this.removeByIndex(items, randLetter);
            // generate two random placements for each item
            var randPool = Math.floor((Math.random() * pool.length));
            // remove the placeholder from answers and insert the letter into 
            // random slot
            this.insertByIndex(answers, pool[randPool], letter);
            // remove random number from pool
            this.removeByIndex(pool, randPool);
            // redo this process for the second placement
            randPool = Math.floor((Math.random() * pool.length));
            this.insertByIndex(answers, pool[randPool], letter);
            // remove rand number from pool
            this.removeByIndex(pool, randPool);
        }
        return answers;
    }
    start() {
        this.deck = this.createDeck();
        this.numPairs = 0;
        this.timeLimit = 60000;
        this.isGuarding = false;
        this.inGame = true;
        this.startTimer();
    }
    startTimer() {
        this.timeLimit -= 1000;
        this.isCritical = this.timeLimit <= 10000 ? true : false;
        this.timer = setTimeout(() => this.startTimer(), 1000);
        if (this.timeLimit === 0) {
            this.stopTimer();
            this.isGuarding = true;
        }
    }
    // function to stop the timer
    stopTimer() {
        clearTimeout(this.timer);
        this.inGame = false;
        this.previousCard = null;
        this.currentSessionOpen = false;
        this.numPairs = 0;
    }
}
MemoryGameComponent.ɵfac = function MemoryGameComponent_Factory(t) { return new (t || MemoryGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicees_sign_service__WEBPACK_IMPORTED_MODULE_1__["SignService"])); };
MemoryGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemoryGameComponent, selectors: [["app-memory-game"]], decls: 13, vars: 10, consts: [["ng-controller", "CardController", 1, "cntr"], ["id", "aBorder"], ["id", "sBorder"], ["id", "sum"], [1, "table-top"], [4, "ngFor", "ngForOf"], [1, "startbtn"], ["type", "button", 1, "btn", "btn-default", "btn-lg", 3, "disabled", "click"], [3, "click"], [1, "card", "shadow"], [1, "front", "face"], [1, "back", "face", "text-center", "pagination-center"]], template: function MemoryGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MemoryGameComponent_tr_9_Template, 2, 1, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemoryGameComponent_Template_button_click_11_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("timer ", ctx.isCritical ? "critical" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 7, ctx.timeLimit, "m:ss"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.numPairs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.deck.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.inGame == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".card_container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 1px auto;\r\n    padding: 3px;\r\n    width: 9em;\r\n    height: 12em;\r\n    line-height: 12em;\r\n    z-index: 1;\r\n  }\r\n  .card_container[_ngcontent-%COMP%] {\r\n    perspective: 1000;\r\n  }\r\n  .card[_ngcontent-%COMP%] {\r\n    background-color: #68c39f;\r\n    width: 100%;\r\n    height: 100%;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    box-shadow: 0.5px 2.5px #ccc;\r\n    transform-style: preserve-3d;\r\n    transition: all .25s linear;\r\n    -webkit-backface-visibility: hidden; \r\n    backface-visibility: hidden; \r\n  }\r\n  .flip[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n    transform: rotateY(180deg);\r\n  }\r\n  .face[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden; \r\n    backface-visibility: hidden; \r\n  }\r\n  .face.back[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: white;\r\n    font-size: 7.5em;\r\n    background-color: #FFCC66;\r\n    border-radius: 3px;\r\n    transform: rotateY(180deg);\r\n    box-sizing: border-box;\r\n  }\r\n  table[_ngcontent-%COMP%] {\r\n      margin: 0px auto;\r\n  }\r\n  .timer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 10px auto;\r\n    position: relative;\r\n    width: 150px;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    background-color: #fff;\r\n    border-radius: 25px;\r\n    border: 2px solid #1abc9c;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    color: #999;\r\n  }\r\n  .startbtn[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 10px auto;\r\n    position: relative;\r\n    text-align: center;\r\n  }\r\n  .critical[_ngcontent-%COMP%] {\r\n    color: red;\r\n  }\r\n  .cntr[_ngcontent-%COMP%] {\r\n    margin: 15px auto;\r\n  }\r\n  .points[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n  }\r\n  #aBorder[_ngcontent-%COMP%]{\r\n\r\n    display: flex;\r\n    position: relative; width: 30px; height: 30px;\r\n    margin: auto; margin-top: 10px; \r\n    text-align: center; \r\n    justify-content: center;\r\n    \r\n}\r\n  #sum[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: green;\r\n}\r\n  #sBorder[_ngcontent-%COMP%]{\r\n\r\n    margin: auto;\r\n    height: 100%; \r\n    width: 100%;\r\n    box-sizing: border-box; \r\n    border: 2px green solid;\r\n    border-radius: 50px;\r\n     box-shadow: 0 0 10px #4feb1f, inset 10px 10px 20px #6aeb1f; \r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2FtZXMvbWVtb3J5LWdhbWUvbWVtb3J5LWdhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjtFQUNBO0lBR0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBR2Ysa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUc1Qiw0QkFBNEI7SUFHNUIsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQywyQkFBMkI7RUFDN0I7RUFDQTtJQUdFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUdsQiwwQkFBMEI7SUFHMUIsc0JBQXNCO0VBQ3hCO0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLFVBQVU7RUFDWjtFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7RUFFQTs7SUFFRSxhQUFhO0lBQ2Isa0JBQWtCLEVBQUUsV0FBVyxFQUFFLFlBQVk7SUFDN0MsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixrQkFBa0I7SUFDbEIsdUJBQXVCOztBQUUzQjtFQUVFO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtFQUVBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0tBQ2xCLDBEQUEwRDs7QUFFL0QiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9nYW1lcy9tZW1vcnktZ2FtZS9tZW1vcnktZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB3aWR0aDogOWVtO1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEyZW07XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAuY2FyZF9jb250YWluZXIge1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTAwMDtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDA7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMDtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4YzM5ZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IDAuNXB4IDIuNXB4ICNjY2M7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjI1cyBsaW5lYXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGxpbmVhcjtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyBcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgXHJcbiAgfVxyXG4gIC5mbGlwIC5jYXJke1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICB9XHJcbiAgLmZhY2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgXHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IFxyXG4gIH1cclxuICAuZmFjZS5iYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA3LjVlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNDNjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAudGltZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWFiYzljO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGFydGJ0biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY3JpdGljYWwge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmNudHIge1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5wb2ludHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgI2FCb3JkZXJ7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogYXV0bzsgbWFyZ2luLXRvcDogMTBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuICAjc3Vte1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbiNzQm9yZGVye1xyXG5cclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgYm9yZGVyOiAycHggZ3JlZW4gc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM0ZmViMWYsIGluc2V0IDEwcHggMTBweCAyMHB4ICM2YWViMWY7IFxyXG4gICAgXHJcbn0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemoryGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-memory-game',
                templateUrl: './memory-game.component.html',
                styleUrls: ['./memory-game.component.css']
            }]
    }], function () { return [{ type: _servicees_sign_service__WEBPACK_IMPORTED_MODULE_1__["SignService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/games/snake/snake.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comps/games/snake/snake.component.ts ***!
  \******************************************************/
/*! exports provided: SnakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeComponent", function() { return SnakeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_interfacees_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfacees/game */ "./src/app/interfacees/game.ts");
/* harmony import */ var src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicees/sign.service */ "./src/app/servicees/sign.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["name"];
function SnakeComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnakeComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.pauseGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SnakeComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnakeComponent_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.pauseGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SnakeComponent {
    constructor(el, signSvc) {
        this.el = el;
        this.signSvc = signSvc;
        this.title = 'ng-Snake';
        this.isPaused = false;
        this.keys = [];
        this.snake_game = new src_app_interfacees_game__WEBPACK_IMPORTED_MODULE_1__["Score"]({ game_name: "ס'נייק", user_score: 0 });
        this.w = 450;
        this.h = 450;
        //Lets save the cell width in a variable for easy control
        this.cw = 10;
        this.score = 0;
        this.lives = 3;
    }
    onkeyup(e) {
        this.keys[e.keyCode] = false;
    }
    onkeydown(e) {
        this.keys[e.keyCode] = true;
        var key = e.which;
        //We will add another clause to prevent reverse gear
        if (key == "37" && this.d != "right")
            this.d = "left";
        else if (key == "38" && this.d != "down")
            this.d = "up";
        else if (key == "39" && this.d != "left")
            this.d = "right";
        else if (key == "40" && this.d != "up")
            this.d = "down";
        switch (e.keyCode) {
            case 37:
            case 39:
            case 38:
            case 40: // Arrow keys
            case 32:
                e.preventDefault();
                break; // Space
            default: break; // do not block other keys
        }
    }
    ngOnInit() {
        this.current_user = JSON.parse(localStorage.getItem('user'));
        let find = this.current_user.scores.find(el => el.game_name == this.snake_game.game_name);
        console.log(this.current_user);
        if (find) {
            console.log("continue");
        }
        else {
            console.log('push');
            this.current_user.scores.push(this.snake_game);
            localStorage.setItem('user', JSON.stringify(this.current_user));
        }
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.w = this.canvas.width;
        this.h = this.canvas.height;
        // begin game
        this.init();
    }
    openMyDialog() {
        let myDialog = document.getElementById("modalDialog");
        myDialog.showModal();
    }
    closeDialog() {
        let myDialog = document.getElementById("modalDialog");
        myDialog.close('cancelling');
    }
    pauseGame() {
        console.log("pausing game", this.isPaused);
        if (this.isPaused) {
            this.isPaused = false;
        }
        else {
            this.isPaused = true;
        }
    }
    startGame() {
        // this.score = 0;
        // this.lives = 3;
        this.isPaused = false;
        this.init();
    }
    init() {
        this.d = "right"; //default direction
        this.create_snake();
        this.create_food(); //Now we can see the food particle
        //finally lets display the score
        //Lets move the snake now using a timer which will trigger the paint function
        //every 60ms
        if (typeof this.game_loop != "undefined")
            clearInterval(this.game_loop);
        this.game_loop = setInterval(() => {
            this.paint();
        }, 100);
        console.log(this.game_loop);
    }
    //this.init();
    create_snake() {
        var length = 5; //Length of the snake
        this.snake_array = []; //Empty array to start with
        for (var i = length - 1; i >= 0; i--) {
            //This will create a horizontal snake starting from the top left
            this.snake_array.push({
                x: i,
                y: 0
            });
        }
    }
    //Lets create the food now
    create_food() {
        this.food = {
            x: Math.round(Math.random() * (this.w - this.cw) / this.cw),
            y: Math.round(Math.random() * (this.h - this.cw) / this.cw),
        };
        //This will create a cell with x/y between 0-44
        //Because there are 45(450/10) positions accross the rows and columns
    }
    //Lets paint the snake now
    paint() {
        if (this.isPaused) {
            return;
        }
        else {
            //To avoid the snake trail we need to paint the BG on every frame
            //Lets paint the canvas now
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(0, 0, this.w, this.h);
            this.ctx.strokeStyle = "black";
            this.ctx.strokeRect(0, 0, this.w, this.h);
            //The movement code for the snake to come here.
            //The logic is simple
            //Pop out the tail cell and place it infront of the head cell
            var nx = this.snake_array[0].x;
            var ny = this.snake_array[0].y;
            //These were the position of the head cell.
            //We will increment it to get the new head position
            //Lets add proper direction based movement now
            if (this.d == "right")
                nx++;
            else if (this.d == "left")
                nx--;
            else if (this.d == "up")
                ny--;
            else if (this.d == "down")
                ny++;
            //Lets add the code for body collision
            //Now if the head of the snake bumps into its body, the game will restart
            if (nx == -1 || nx == this.w / this.cw || ny == -1 || ny == this.h / this.cw || this.check_collision(nx, ny, this.snake_array)) {
                if (this.lives === 0) {
                    this.openMyDialog();
                    this.pauseGame();
                    return;
                }
                else {
                    this.pauseGame();
                    this.lives--;
                    return;
                }
            }
            //Lets write the code to make the snake eat the food
            //The logic is simple
            //If the new head position matches with that of the food,
            //Create a new head instead of moving the tail
            if (nx == this.food.x && ny == this.food.y) {
                var tail = {
                    x: nx,
                    y: ny
                };
                this.score++;
                //Create new food
                this.create_food();
            }
            else {
                var tail = this.snake_array.pop(); //pops out the last cell
                tail.x = nx;
                tail.y = ny;
            }
            //The snake can now eat the food.
            this.snake_array.unshift(tail); //puts back the tail as the first cell
            for (var i = 0; i < this.snake_array.length; i++) {
                var c = this.snake_array[i];
                //Lets paint 10px wide cells
                this.paint_cell(c.x, c.y);
            }
            //Lets paint the food
            this.paint_cell(this.food.x, this.food.y);
            if (this.score % 10 == 0 && this.score > 0) {
                this.pauseGame();
                this.openMyDialog();
                this.signSvc.updateSum(this.score, this.snake_game.game_name);
            }
        }
    }
    //Lets first create a generic function to paint on canvas the food
    // paint_food i am looking at getting svg painted into the cell for added UI
    paint_food(x, y) {
        var img = new Image();
        img.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==";
        img.height = 5;
        img.width = 5;
        this.ctx.drawImage(img, x, y);
    }
    paint_cell(x, y) {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(x * this.cw, y * this.cw, this.cw, this.cw);
        this.ctx.strokeStyle = "white";
        this.ctx.strokeRect(x * this.cw, y * this.cw, this.cw, this.cw);
    }
    check_collision(x, y, array) {
        //This function will check if the provided x/y coordinates exist
        //in an array of cells or not
        for (var i = 0; i < array.length; i++) {
            if (array[i].x == x && array[i].y == y)
                return true;
        }
        return false;
    }
}
SnakeComponent.ɵfac = function SnakeComponent_Factory(t) { return new (t || SnakeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_2__["SignService"])); };
SnakeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnakeComponent, selectors: [["app-snake"]], viewQuery: function SnakeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.name = _t.first);
    } }, hostBindings: function SnakeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SnakeComponent_keyup_HostBindingHandler($event) { return ctx.onkeyup($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function SnakeComponent_keydown_HostBindingHandler($event) { return ctx.onkeydown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 32, vars: 6, consts: [[1, "container"], [2, "text-align", "center"], [1, "title"], ["id", "modalDialog", 1, "site-dialog"], [1, "dialog-header"], [1, "dialog-content"], [2, "float", "left", "width", "48%"], [2, "float", "right", "width", "48%"], [1, "btn-group", "cf"], ["id", "cancel", 1, "btn", "btn-cancel", 3, "click"], ["id", "game-container"], ["id", "canvas", "width", "450", "height", "450", 2, "padding", "5px"], [1, "score-banner"], [2, "left", "5%", "position", "relative"], [2, "left", "75%", "position", "relative"], [1, "high-scores"], [2, "margin-top", "50px"], [1, "pause", "btn", 3, "click"], ["class", "pause btn", 3, "click", 4, "ngIf"]], template: function SnakeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "dialog", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Great Job!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3 \u05D4\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D4\u05EA\u05D5\u05D5\u05E1\u05E4\u05D5 \u05DC\u05DE\u05D0\u05D2\u05E8 \u05E9\u05DC\u05DA! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnakeComponent_Template_button_click_15_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u05D4\u05DE\u05E9\u05DA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnakeComponent_Template_button_click_28_listener() { return ctx.startGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SnakeComponent_button_30_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SnakeComponent_button_31_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your Score: ", ctx.score, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", ctx.score, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lives: ", ctx.lives, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPaused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPaused);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".title[_ngcontent-%COMP%] {\r\n    opacity: 0.4;\r\n}\r\n#game-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align:center;\r\n }\r\ncanvas[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    box-shadow:         4px 2px 10px 0px rgba(126, 50, 50, 0.45);\r\n }\r\n.score-banner[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    width: 450px;\r\n}\r\n.score-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: inline-flex;\r\n    opacity: 0.8;\r\n    color: darkgrey\r\n}\r\n.high-scores[_ngcontent-%COMP%] {\r\n    top: 150px;\r\n    left: 5px;\r\n    position: absolute;\r\n    width: 35%;\r\n    padding: 5px;\r\n    display: inline-block;\r\n}\r\n\r\n.cf[_ngcontent-%COMP%]:before, .cf[_ngcontent-%COMP%]:after {\r\n  display: table;\r\n  content: ' ';\r\n}\r\n.cf[_ngcontent-%COMP%]:after {\r\n  clear: both;\r\n}\r\n.cf[_ngcontent-%COMP%] {\r\n  *zoom: 1;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-backdrop {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n  }\r\n[_ngcontent-%COMP%]::backdrop {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n  }\r\n.site-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: #196e76;\r\n  }\r\n.site-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .site-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n.site-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    margin: 0;\r\n  }\r\n.site-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    display: block;\r\n    text-decoration: none;\r\n    background-color: #10474c;\r\n  }\r\n.boxed-group[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    max-width: 680px;\r\n    margin-top: 50px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n.boxed-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .boxed-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    margin: 0;\r\n  }\r\n.boxed-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    padding: 12px 20px;\r\n    color: #fff;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n    background-color: #434a54;\r\n  }\r\n.boxed-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #555;\r\n  }\r\n.boxed-group[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n    padding: 30px 20px;\r\n  }\r\n.boxed-group[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:first-child {\r\n    border-bottom: 1px solid #e6e9ed;\r\n  }\r\n.boxed-group[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:only-of-type, .boxed-group[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:only-child {\r\n    border-bottom: 0;\r\n  }\r\n.boxed-group[_ngcontent-%COMP%]   .boxed-group-inner[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    color: #aaa;\r\n    border-width: 0 1px 1px;\r\n    border-style: solid;\r\n    border-color: #e6e9ed;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    background-color: #fff;\r\n  }\r\n.boxed-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-left: 20px;\r\n  }\r\n.site-dialog[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    width: 95%;\r\n    max-width: 500px;\r\n    padding: 0;\r\n    border-width: 0;\r\n    border-radius: 5px;\r\n    background: transparent;\r\n    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);\r\n  }\r\n.site-dialog[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    margin: 0;\r\n    color: #fff;\r\n  }\r\n.site-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n.site-dialog[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%] {\r\n    padding: 12px 20px;\r\n    background-color: #434a54;\r\n  }\r\n.site-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%] {\r\n    padding: 30px 20px;\r\n    color: #555;\r\n    background-color: #fff;\r\n  }\r\n.site-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type, .site-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:only-child {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n  }\r\n.close[_ngcontent-%COMP%] {\r\n\tbackground: #606061;\r\n\tcolor: #FFFFFF;\r\n\tline-height: 25px;\r\n\tposition: absolute;\r\n\tright: -12px;\r\n\ttext-align: center;\r\n\ttop: -10px;\r\n\twidth: 24px;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tborder-radius: 12px;\r\n\tbox-shadow: 1px 1px 3px #000;\r\n}\r\n.close[_ngcontent-%COMP%]:hover { background: #00d9ff; }\r\n.btn[_ngcontent-%COMP%] {\r\n    background: #428bca;\r\n    border: #357ebd solid 1px;\r\n    border-radius: 3px;\r\n    color: #fff;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    padding: 8px 15px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    min-width: 60px;\r\n    position: relative;\r\n    transition: color .1s ease;\r\n  }\r\n.btn[_ngcontent-%COMP%]:hover {\r\n    background: #357ebd;\r\n  }\r\n.btn.btn-big[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    padding: 15px 20px;\r\n    min-width: 100px;\r\n  }\r\n.btn-close[_ngcontent-%COMP%] {\r\n    color: #aaa;\r\n    font-size: 30px;\r\n    text-decoration: none;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 0;\r\n  }\r\n.btn-close[_ngcontent-%COMP%]:hover {\r\n    color: #919191;\r\n  }\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    padding-top: 100px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2FtZXMvc25ha2Uvc25ha2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7QUFFQTtJQUNHLGVBQWU7SUFHZiw0REFBNEQ7Q0FDL0Q7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWjtBQUNKO0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUVBLGlCQUFpQjtBQUNqQjs7RUFFRSxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtHQUNFLE9BQVE7QUFDVjtBQUNBO0lBQ0ksb0NBQW9DO0VBQ3RDO0FBRkY7SUFDSSxvQ0FBb0M7RUFDdEM7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7QUFDQTs7SUFFRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtBQUNBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7RUFDWDtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLGdCQUFnQjtJQUNoQixTQUFTO0VBQ1g7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBQ0E7O0lBRUUsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDRDQUE0QztFQUM5QztBQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztFQUNiO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHNCQUFzQjtFQUN4QjtBQUNBOztJQUVFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFFRjtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUdqQixtQkFBbUI7Q0FHbkIsNEJBQTRCO0FBQzdCO0FBRUEsZUFBZSxtQkFBbUIsRUFBRTtBQUdwQztJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCO0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07RUFDUjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGtCQUFrQixFQUFFLHdCQUF3QjtJQUM1QyxPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0FBQzVEO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dhbWVzL3NuYWtlL3NuYWtlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLnRpdGxlIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufVxyXG4jZ2FtZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuIH1cclxuIFxyXG4gY2FudmFzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNHB4IDJweCAxMHB4IDBweCByZ2JhKDEyNiwgNTAsIDUwLCAwLjQ1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogICAgNHB4IDJweCAxMHB4IDBweCByZ2JhKDEyNiwgNTAsIDUwLCAwLjQ1KTtcclxuICAgIGJveC1zaGFkb3c6ICAgICAgICAgNHB4IDJweCAxMHB4IDBweCByZ2JhKDEyNiwgNTAsIDUwLCAwLjQ1KTtcclxuIH1cclxuXHJcbi5zY29yZS1iYW5uZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbn1cclxuLnNjb3JlLWJhbm5lciBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBjb2xvcjogZGFya2dyZXlcclxufVxyXG5cclxuLmhpZ2gtc2NvcmVzIHtcclxuICAgIHRvcDogMTUwcHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKiBNb2RhbCBTdHlsZXMgKi9cclxuLmNmOmJlZm9yZSxcclxuLmNmOmFmdGVyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjb250ZW50OiAnICc7XHJcbn1cclxuLmNmOmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4uY2Yge1xyXG4gICp6b29tOiAxO1xyXG59XHJcbjo6YmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgLnNpdGUtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTZlNzY7XHJcbiAgfVxyXG4gIC5zaXRlLWhlYWRlciBoMSxcclxuICAuc2l0ZS1oZWFkZXIgYSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuc2l0ZS1oZWFkZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAuc2l0ZS1oZWFkZXIgYSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA0NzRjO1xyXG4gIH1cclxuICAuYm94ZWQtZ3JvdXAge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNjgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG4gIC5ib3hlZC1ncm91cCBoMyxcclxuICAuYm94ZWQtZ3JvdXAgaDQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLmJveGVkLWdyb3VwIGgzIHtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzRhNTQ7XHJcbiAgfVxyXG4gIC5ib3hlZC1ncm91cCBoNCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICB9XHJcbiAgLmJveGVkLWdyb3VwIHNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gIH1cclxuICAuYm94ZWQtZ3JvdXAgc2VjdGlvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTllZDtcclxuICB9XHJcbiAgLmJveGVkLWdyb3VwIHNlY3Rpb246b25seS1vZi10eXBlLFxyXG4gIC5ib3hlZC1ncm91cCBzZWN0aW9uOm9ubHktY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmJveGVkLWdyb3VwIC5ib3hlZC1ncm91cC1pbm5lciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMXB4IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNlNmU5ZWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmJveGVkLWdyb3VwIC5idG4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5zaXRlLWRpYWxvZyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbiAgLnNpdGUtZGlhbG9nIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLnNpdGUtZGlhbG9nIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuc2l0ZS1kaWFsb2cgLmRpYWxvZy1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGE1NDtcclxuICB9XHJcbiAgLnNpdGUtZGlhbG9nIC5kaWFsb2ctY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5zaXRlLWRpYWxvZyAuZGlhbG9nLWNvbnRlbnQgcDpsYXN0LW9mLXR5cGUsXHJcbiAgLnNpdGUtZGlhbG9nIC5kaWFsb2ctY29udGVudCBwOm9ubHktY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuLmNsb3NlIHtcclxuXHRiYWNrZ3JvdW5kOiAjNjA2MDYxO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogLTEycHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRvcDogLTEwcHg7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDEycHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHQtbW96LWJveC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDA7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAjMDAwO1xyXG5cdGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDA7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlciB7IGJhY2tncm91bmQ6ICMwMGQ5ZmY7IH1cclxuXHJcblxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MjhiY2E7XHJcbiAgICBib3JkZXI6ICMzNTdlYmQgc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xcyBlYXNlO1xyXG4gIH1cclxuICAuYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzNTdlYmQ7XHJcbiAgfVxyXG4gIC5idG4uYnRuLWJpZyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICAuYnRuLWNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLmJ0bi1jbG9zZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzkxOTE5MTtcclxuICB9XHJcbiAgLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnakeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-snake',
                templateUrl: './snake.component.html',
                styleUrls: ['./snake.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_2__["SignService"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['name']
        }], onkeyup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup', ['$event']]
        }], onkeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/games/socketio/socketio.component.ts":
/*!************************************************************!*\
  !*** ./src/app/comps/games/socketio/socketio.component.ts ***!
  \************************************************************/
/*! exports provided: SocketioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketioComponent", function() { return SocketioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicees_socketio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicees/socketio.service */ "./src/app/servicees/socketio.service.ts");




const _c0 = ["game"];
class SocketioComponent {
    constructor(socketService) {
        //   if (!this.socket) {
        //   this.socket = io("http://localhost:3001", {
        //     reconnection: false
        // })
        // console.log(this.socket.emit());
        //   this.socket.emit('move',this.context)
        this.socketService = socketService;
        //   this.socket.on('disconnect', function() {
        //     this.socket.socket.reconnect();
        // })
        //   }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.context = this.gameCanvas.nativeElement.getContext('2d');
        this.context.fillRect(20, 20, 20, 20);
        // this.socket.on('position', position=> {
        //   this.context.clearRect(
        //     0,
        //     0,
        //     this.gameCanvas.nativeElement.width,
        //     this.gameCanvas.nativeElement.height,
        //   )
        //   this.context.fillRect(position.x ,position.y,20,20);
        // })
    }
    move(direction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.socket.emit());
            yield this.socket.emit('move', direction, function (test) {
                console.log("acckk received");
            });
        });
    }
}
SocketioComponent.ɵfac = function SocketioComponent_Factory(t) { return new (t || SocketioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicees_socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketioService"])); };
SocketioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SocketioComponent, selectors: [["app-socketio"]], viewQuery: function SocketioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.gameCanvas = _t.first);
    } }, decls: 29, vars: 0, consts: [["width", "640", "height", "480", 2, "border", "1px solid black"], ["game", ""], [3, "click"], ["id", "app", 1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-sm-12"], [1, "text-center"], ["id", "status"], ["id", "chat"], ["type", "text", "v-model", "name", "id", "username", "placeholder", "Enter name...", 1, "form-control"], [1, "card"], ["id", "messages", 1, "card-block"], ["v-for", "message of messages"], ["id", "textarea", "v-model", "text", "placeholder", "Enter message...", 1, "form-control"], ["id", "send", 1, "btn"]], template: function SocketioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SocketioComponent_Template_button_click_3_listener() { return ctx.move("Right"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SocketioComponent_Template_button_click_5_listener() { return ctx.move("Left"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SocketioComponent_Template_button_click_7_listener() { return ctx.move("Up"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SocketioComponent_Template_button_click_9_listener() { return ctx.move("Down"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dhbWVzL3NvY2tldGlvL3NvY2tldGlvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocketioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-socketio',
                templateUrl: './socketio.component.html',
                styleUrls: ['./socketio.component.css']
            }]
    }], function () { return [{ type: _servicees_socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketioService"] }]; }, { gameCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['game']
        }] }); })();


/***/ }),

/***/ "./src/app/comps/games/sudoku/sudoku-cell/sudoku-cell.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/comps/games/sudoku/sudoku-cell/sudoku-cell.component.ts ***!
  \*************************************************************************/
/*! exports provided: SudokuCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuCellComponent", function() { return SudokuCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sudoku_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sudoku.component */ "./src/app/comps/games/sudoku/sudoku.component.ts");



class SudokuCellComponent {
    constructor() { }
    ngOnInit() {
    }
}
SudokuCellComponent.ɵfac = function SudokuCellComponent_Factory(t) { return new (t || SudokuCellComponent)(); };
SudokuCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SudokuCellComponent, selectors: [["app-sudoku-cell"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "row", "flex"], [1, "col-md-3"]], template: function SudokuCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "sudoku-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sudoku_component__WEBPACK_IMPORTED_MODULE_1__["SudokuComponent"]], styles: [".flex[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2FtZXMvc3Vkb2t1L3N1ZG9rdS1jZWxsL3N1ZG9rdS1jZWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dhbWVzL3N1ZG9rdS9zdWRva3UtY2VsbC9zdWRva3UtY2VsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXh7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SudokuCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sudoku-cell',
                templateUrl: './sudoku-cell.component.html',
                styleUrls: ['./sudoku-cell.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/games/sudoku/sudoku.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comps/games/sudoku/sudoku.component.ts ***!
  \********************************************************/
/*! exports provided: SudokuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuComponent", function() { return SudokuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_servicees_sudoku_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicees/sudoku.service */ "./src/app/servicees/sudoku.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SudokuComponent_tbody_1_td_2_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SudokuComponent_tbody_1_td_2_input_1_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const e_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onKey($event.target.value, e_r4, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", y_r6.num);
} }
function SudokuComponent_tbody_1_td_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r6.num);
} }
const _c0 = function (a0, a1, a2) { return { "table-primary": a0, "table-warning": a1, "table-danger": a2 }; };
function SudokuComponent_tbody_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function SudokuComponent_tbody_1_td_2_Template_td_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const y_r6 = ctx.$implicit; const i_r7 = ctx.index; const e_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.edit_cell(y_r6.primary, y_r6.updated, e_r4, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SudokuComponent_tbody_1_td_2_input_1_Template, 1, 1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SudokuComponent_tbody_1_td_2_span_2_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, y_r6.primary, y_r6.updated, y_r6.wrong));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", y_r6.input);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !y_r6.input);
} }
function SudokuComponent_tbody_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SudokuComponent_tbody_1_td_2_Template, 3, 7, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", x_r3);
} }
function SudokuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05DE\u05E2\u05D5\u05DC\u05D4!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u05E4\u05EA\u05E8\u05EA \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4 \u05E0\u05D5\u05E1\u05E4\u05D5 \u05DC\u05DA 25 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SudokuComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05D7\u05D1\u05DC! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05EA \u05D4\u05E4\u05E2\u05DD \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D1\u05E4\u05E2\u05DD \u05D4\u05D1\u05D0\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SudokuComponent {
    constructor(sudosSV) {
        this.sudosSV = sudosSV;
        this.success_slove = false;
        this.fail_slove = false;
        this.updated = false;
    }
    ngOnInit() {
        this.sudosSV.current_game_bh.subscribe(res => {
            this.updated = res.updated;
            this.sudoku_long = res;
            console.log(this.sudoku_long);
        });
    }
    isNumber(value) {
        return Number.isNaN(value);
    }
    submit_suodoku() {
        if (this.sudosSV.submit_suodoku(this.sudoku_long)) {
            this.success_slove = true;
            this.fail_slove = false;
        }
        else {
            this.success_slove = false;
            this.fail_slove = true;
        }
    }
    onKey(ev, e, i) {
        if (ev < 1 || ev > 9) {
            return window.confirm('אפשר להכניס מספר בטווח 1-9 בלבד');
        }
        this.sudosSV.updateCell(ev, e, i);
    }
    edit_cell(is_primary, is_updated, e, i) {
        console.log(is_primary);
        if (is_primary) {
            return window.confirm('אין אפשרות לערוך תא זה!');
        }
        //  if (is_updated) {
        this.sudosSV.updateEdit(e, i);
        //  }
    }
}
SudokuComponent.ɵfac = function SudokuComponent_Factory(t) { return new (t || SudokuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_sudoku_service__WEBPACK_IMPORTED_MODULE_1__["SudokuService"])); };
SudokuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SudokuComponent, selectors: [["sudoku-table"]], decls: 7, vars: 3, consts: [[1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-warning", "send-sudoku", 3, "click"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger ", 4, "ngIf"], [3, "ngClass", "dblclick", 4, "ngFor", "ngForOf"], [3, "ngClass", "dblclick"], ["type", "number", "class", "input-group", 3, "value", "keyup.enter", 4, "ngIf"], [4, "ngIf"], ["type", "number", 1, "input-group", 3, "value", "keyup.enter"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"]], template: function SudokuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SudokuComponent_tbody_1_Template, 3, 1, "tbody", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SudokuComponent_Template_button_click_2_listener() { return ctx.submit_suodoku(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05E1\u05D9\u05D9\u05DE\u05EA\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SudokuComponent_div_5_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SudokuComponent_div_6_Template, 4, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sudoku_long);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success_slove);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fail_slove);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".table[_ngcontent-%COMP%]{\r\n    \r\n    top:50%;\r\n    left:50%;\r\n    \r\n    \r\n    \r\n    background:#fff;\r\n    box-shadow:0 20px 50px rgba(0,0,0,.1);\r\n    border-radius:10px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2FtZXMvc3Vkb2t1L3N1ZG9rdS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxRQUFRO0lBQ1Isb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2FtZXMvc3Vkb2t1L3N1ZG9rdS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xyXG4gICAgLyogcG9zaXRpb246YWJzb2x1dGU7ICovXHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICAvKiB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7ICovXHJcbiAgICAvKiB3aWR0aDo2MDBweDsgKi9cclxuICAgIC8qIG1pbi1oZWlnaHQ6NDAwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBib3gtc2hhZG93OjAgMjBweCA1MHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgLyogdHJhbnNpdGlvbjowLjVzOyAqL1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SudokuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sudoku-table',
                templateUrl: './sudoku.component.html',
                styleUrls: ['./sudoku.component.css']
            }]
    }], function () { return [{ type: src_app_servicees_sudoku_service__WEBPACK_IMPORTED_MODULE_1__["SudokuService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/games/tetris/tetris.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comps/games/tetris/tetris.component.ts ***!
  \********************************************************/
/*! exports provided: TetrisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrisComponent", function() { return TetrisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../interfacees/tetris */ "./src/app/interfacees/tetris.ts");
/* harmony import */ var src_app_interfacees_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfacees/game */ "./src/app/interfacees/game.ts");
/* harmony import */ var _servicees_tetris_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicees/tetris.service */ "./src/app/servicees/tetris.service.ts");
/* harmony import */ var src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicees/sign.service */ "./src/app/servicees/sign.service.ts");






const _c0 = ["board"];
const _c1 = ["next"];
class TetrisComponent {
    constructor(service, signSvc) {
        this.service = service;
        this.signSvc = signSvc;
        this.moves = {
            [_interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["KEY"].LEFT]: (p) => (Object.assign(Object.assign({}, p), { x: p.x - 1 })),
            [_interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["KEY"].RIGHT]: (p) => (Object.assign(Object.assign({}, p), { x: p.x + 1 })),
            [_interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["KEY"].DOWN]: (p) => (Object.assign(Object.assign({}, p), { y: p.y + 1 })),
            [_interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["KEY"].SPACE]: (p) => (Object.assign(Object.assign({}, p), { y: p.y + 1 })),
            [_interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["KEY"].UP]: (p) => this.service.rotate(p)
        };
        this.tetris_game = new src_app_interfacees_game__WEBPACK_IMPORTED_MODULE_2__["Score"]({ game_name: 'טטריס', user_score: 0 });
    }
    keyEvent(event) {
        if (event.keyCode === _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["KEY"].ESC) {
            this.gameOver();
        }
        else if (this.moves[event.keyCode]) {
            event.preventDefault();
            // Get new state
            let p = this.moves[event.keyCode](this.piece);
            if (event.keyCode === _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["KEY"].SPACE) {
                // Hard drop
                while (this.service.valid(p, this.board)) {
                    this.points += _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["POINTS"].HARD_DROP;
                    this.piece.move(p);
                    p = this.moves[_interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["KEY"].DOWN](this.piece);
                }
            }
            else if (this.service.valid(p, this.board)) {
                this.piece.move(p);
                if (event.keyCode === _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["KEY"].DOWN) {
                    this.points += _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["POINTS"].SOFT_DROP;
                }
            }
        }
    }
    ngOnInit() {
        this.current_user = JSON.parse(localStorage.getItem('user'));
        let find = this.current_user.scores.find(el => el.game_name == this.tetris_game.game_name);
        console.log(this.current_user);
        if (find) {
            console.log("continue");
        }
        else {
            console.log('push');
            this.current_user.scores.push(this.tetris_game);
            localStorage.setItem('user', JSON.stringify(this.current_user));
        }
        this.initBoard();
        this.initNext();
        this.resetGame();
    }
    initBoard() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        // Calculate size of canvas from constants.
        this.ctx.canvas.width = _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["COLS"] * _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
        this.ctx.canvas.height = _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["ROWS"] * _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
        // Scale so we don't need to give size on every draw.
        this.ctx.scale(_interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"]);
    }
    initNext() {
        this.ctxNext = this.canvasNext.nativeElement.getContext('2d');
        // Calculate size of canvas from constants.
        this.ctxNext.canvas.width = 4 * _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
        this.ctxNext.canvas.height = 4 * _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
        this.ctxNext.scale(_interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"]);
    }
    play() {
        this.resetGame();
        this.next = new _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["Piece"](this.ctx);
        this.piece = new _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["Piece"](this.ctx);
        this.next.drawNext(this.ctxNext);
        this.time.start = performance.now();
        // If we have an old game running a game then cancel the old
        if (this.requestId) {
            cancelAnimationFrame(this.requestId);
        }
        this.animate();
    }
    resetGame() {
        this.points = 0;
        this.lines = 0;
        this.level = 0;
        this.board = this.getEmptyBoard();
        this.time = { start: 0, elapsed: 0, level: _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["LEVEL"][this.level] };
    }
    animate(now = 0) {
        this.time.elapsed = now - this.time.start;
        if (this.time.elapsed > this.time.level) {
            this.time.start = now;
            if (!this.drop()) {
                this.gameOver();
                return;
            }
        }
        this.draw();
        this.requestId = requestAnimationFrame(this.animate.bind(this));
    }
    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.piece.draw();
        this.drawBoard();
    }
    drop() {
        let p = this.moves[_interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["KEY"].DOWN](this.piece);
        if (this.service.valid(p, this.board)) {
            this.piece.move(p);
        }
        else {
            this.freeze();
            this.clearLines();
            if (this.piece.y === 0) {
                // Game over
                return false;
            }
            this.piece = this.next;
            this.next = new _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["Piece"](this.ctx);
            this.next.drawNext(this.ctxNext);
        }
        return true;
    }
    clearLines() {
        let lines = 0;
        this.board.forEach((row, y) => {
            if (row.every(value => value !== 0)) {
                lines++;
                this.board.splice(y, 1);
                this.board.unshift(Array(_interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["COLS"]).fill(0));
            }
        });
        if (lines > 0) {
            this.points += this.service.getLinesClearedPoints(lines, this.level);
            this.lines += lines;
            if (this.lines >= _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["LINES_PER_LEVEL"]) {
                this.level++;
                this.signSvc.updateSum(this.lines, this.tetris_game.game_name);
                this.lines -= _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["LINES_PER_LEVEL"];
                this.time.level = _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["LEVEL"][this.level];
            }
        }
    }
    freeze() {
        this.piece.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.board[y + this.piece.y][x + this.piece.x] = value;
                }
            });
        });
    }
    drawBoard() {
        this.board.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillStyle = _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["COLORS"][value];
                    this.ctx.fillRect(x, y, 1, 1);
                }
            });
        });
    }
    gameOver() {
        cancelAnimationFrame(this.requestId);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(1, 3, 8, 1.2);
        this.ctx.font = '1px Arial';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText('GAME OVER', 1.8, 4);
    }
    getEmptyBoard() {
        return Array.from({ length: _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["ROWS"] }, () => Array(_interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["COLS"]).fill(0));
    }
}
TetrisComponent.ɵfac = function TetrisComponent_Factory(t) { return new (t || TetrisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicees_tetris_service__WEBPACK_IMPORTED_MODULE_3__["TetrisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__["SignService"])); };
TetrisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TetrisComponent, selectors: [["app-tetris"]], viewQuery: function TetrisComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasNext = _t.first);
    } }, hostBindings: function TetrisComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TetrisComponent_keydown_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 17, vars: 3, consts: [[1, "grid"], [1, "game-board"], ["board", ""], [1, "right-column"], [1, "next"], ["next", ""], [1, "play-button", 3, "click"]], template: function TetrisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TETRIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "canvas", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TetrisComponent_Template_button_click_15_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", ctx.points, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lines: ", ctx.lines, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level: ", ctx.level, "");
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: 'Press Start 2P', cursive;\r\n  }\r\n  \r\n  .grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 320px 200px;\r\n  }\r\n  \r\n  .right-column[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .game-board[_ngcontent-%COMP%] {\r\n    border: solid 2px;\r\n  }\r\n  \r\n  .play-button[_ngcontent-%COMP%] {\r\n    background-color: #4caf50;\r\n    font-size: 16px;\r\n    padding: 15px 30px;\r\n    cursor: pointer;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2FtZXMvdGV0cmlzL3RldHJpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dhbWVzL3RldHJpcy90ZXRyaXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAucmlnaHQtY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICBcclxuICAuZ2FtZS1ib2FyZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweDtcclxuICB9XHJcbiAgXHJcbiAgLnBsYXktYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TetrisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tetris',
                templateUrl: './tetris.component.html',
                styleUrls: ['./tetris.component.css']
            }]
    }], function () { return [{ type: _servicees_tetris_service__WEBPACK_IMPORTED_MODULE_3__["TetrisService"] }, { type: src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__["SignService"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['board', { static: true }]
        }], canvasNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['next', { static: true }]
        }], keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/games/trivyaf/heder-trvya/heder-trvya.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/comps/games/trivyaf/heder-trvya/heder-trvya.component.ts ***!
  \**************************************************************************/
/*! exports provided: HederTrvyaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HederTrvyaComponent", function() { return HederTrvyaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_servicees_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicees/trivya-svc.service */ "./src/app/servicees/trivya-svc.service.ts");



class HederTrvyaComponent {
    constructor(wordsSV) {
        this.wordsSV = wordsSV;
        this.wordEng = "";
    }
    ngOnInit() {
        // this.current_user =  JSON.parse(localStorage.getItem('user'));
        this.wordsSV.current_game_bh.subscribe(res => {
            this.current_game = res;
        });
    }
}
HederTrvyaComponent.ɵfac = function HederTrvyaComponent_Factory(t) { return new (t || HederTrvyaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"])); };
HederTrvyaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HederTrvyaComponent, selectors: [["heder-trivya"]], decls: 9, vars: 2, consts: [["id", "design"], ["id", "rotatedBorder"], ["id", "header"], ["id", "aBorder"], ["id", "sBorder"], ["id", "circle"], ["id", "sum"]], template: function HederTrvyaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.current_game.cureent_word);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.current_game.cureent_sum);
    } }, styles: ["#design[_ngcontent-%COMP%] {\r\n    position: relative; width: 300px; height: 50px;\r\n    margin: auto; margin-top: 100px; \r\n    display: flex;   \r\n}\r\n\r\n#rotatedBorder[_ngcontent-%COMP%] {\r\n\r\n    display: flex;\r\n\r\n    \r\n    height: 100%; \r\n    width: 100%;\r\n    box-sizing: border-box; \r\n    border: 5px gray solid;\r\n    box-shadow: 0 0 10px #eb311f, inset 0 0 20px #eb311f;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: brown;\r\n}\r\n\r\n#aBorder[_ngcontent-%COMP%]{\r\n\r\n    display: flex;\r\n    position: relative; width: 30px; height: 30px;\r\n    margin: auto; margin-top: 10px; \r\n    text-align: center; \r\n    justify-content: center;\r\n    \r\n}\r\n\r\n#sBorder[_ngcontent-%COMP%]{\r\n\r\n    margin: auto;\r\n    height: 100%; \r\n    width: 100%;\r\n    box-sizing: border-box; \r\n    border: 2px green solid;\r\n    border-radius: 50px;\r\n     box-shadow: 0 0 10px #4feb1f, inset 10px 10px 20px #6aeb1f; \r\n    \r\n}\r\n\r\n#circle[_ngcontent-%COMP%]{\r\n\r\n}\r\n\r\n#sum[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2FtZXMvdHJpdnlhZi9oZWRlci10cnZ5YS9oZWRlci10cnZ5YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFlBQVk7SUFDOUMsWUFBWSxFQUFFLGlCQUFpQjtJQUMvQixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGFBQWE7O0lBRWIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvREFBb0Q7SUFDcEQsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBQ0E7O0lBRUksYUFBYTtJQUNiLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxZQUFZO0lBQzdDLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7QUFFM0I7O0FBQ0E7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7S0FDbEIsMERBQTBEOztBQUUvRDs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9nYW1lcy90cml2eWFmL2hlZGVyLXRydnlhL2hlZGVyLXRydnlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVzaWduIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87IG1hcmdpbi10b3A6IDEwMHB4OyBcclxuICAgIGRpc3BsYXk6IGZsZXg7ICAgXHJcbn1cclxuXHJcbiNyb3RhdGVkQm9yZGVyIHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuICAgIGJvcmRlcjogNXB4IGdyYXkgc29saWQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZWIzMTFmLCBpbnNldCAwIDAgMjBweCAjZWIzMTFmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNoZWFkZXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBicm93bjtcclxufVxyXG4jYUJvcmRlcntcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvOyBtYXJnaW4tdG9wOiAxMHB4OyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbiNzQm9yZGVye1xyXG5cclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgYm9yZGVyOiAycHggZ3JlZW4gc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM0ZmViMWYsIGluc2V0IDEwcHggMTBweCAyMHB4ICM2YWViMWY7IFxyXG4gICAgXHJcbn0gXHJcblxyXG4jY2lyY2xle1xyXG5cclxufVxyXG5cclxuI3N1bXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HederTrvyaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'heder-trivya',
                templateUrl: './heder-trvya.component.html',
                styleUrls: ['./heder-trvya.component.css']
            }]
    }], function () { return [{ type: src_app_servicees_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/games/trivyaf/main-trivya/main-trivya.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/comps/games/trivyaf/main-trivya/main-trivya.component.ts ***!
  \**************************************************************************/
/*! exports provided: MainTrivyaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTrivyaComponent", function() { return MainTrivyaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_interfacees_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfacees/game */ "./src/app/interfacees/game.ts");
/* harmony import */ var _heder_trvya_heder_trvya_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../heder-trvya/heder-trvya.component */ "./src/app/comps/games/trivyaf/heder-trvya/heder-trvya.component.ts");
/* harmony import */ var _trivya_trivya_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trivya/trivya.component */ "./src/app/comps/games/trivyaf/trivya/trivya.component.ts");
/* harmony import */ var _directives_random_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../directives/random.directive */ "./src/app/directives/random.directive.ts");






class MainTrivyaComponent {
    constructor() {
        this.trivya_game = new src_app_interfacees_game__WEBPACK_IMPORTED_MODULE_1__["Score"]();
    }
    ngOnInit() {
    }
}
MainTrivyaComponent.ɵfac = function MainTrivyaComponent_Factory(t) { return new (t || MainTrivyaComponent)(); };
MainTrivyaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainTrivyaComponent, selectors: [["app-main-trivya"]], decls: 4, vars: 0, consts: [[1, "home"], [1, "board"], ["Random", ""]], template: function MainTrivyaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "heder-trivya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "board", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_heder_trvya_heder_trvya_component__WEBPACK_IMPORTED_MODULE_2__["HederTrvyaComponent"], _trivya_trivya_component__WEBPACK_IMPORTED_MODULE_3__["TrivyaComponent"], _directives_random_directive__WEBPACK_IMPORTED_MODULE_4__["RandomDirective"]], styles: [".home[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.board[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2FtZXMvdHJpdnlhZi9tYWluLXRyaXZ5YS9tYWluLXRyaXZ5YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9nYW1lcy90cml2eWFmL21haW4tdHJpdnlhL21haW4tdHJpdnlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYm9hcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainTrivyaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-trivya',
                templateUrl: './main-trivya.component.html',
                styleUrls: ['./main-trivya.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/games/trivyaf/trivya/trivya.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comps/games/trivyaf/trivya/trivya.component.ts ***!
  \****************************************************************/
/*! exports provided: TrivyaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrivyaComponent", function() { return TrivyaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_servicees_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicees/trivya-svc.service */ "./src/app/servicees/trivya-svc.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_random_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../directives/random.directive */ "./src/app/directives/random.directive.ts");





function TrivyaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getRand", function TrivyaComponent_div_1_Template_div_getRand_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.wordsSV.addRand($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wordHeb", x_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r3, " ");
} }
function TrivyaComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05DE\u05E2\u05D5\u05DC\u05D4!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u05E4\u05EA\u05E8\u05EA \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4 \u05E0\u05D5\u05E1\u05E4\u05D4 \u05DC\u05DA \u05E0\u05E7\u05D5\u05D3\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrivyaComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05D7\u05D1\u05DC! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05EA \u05D4\u05E4\u05E2\u05DD! \u05D9\u05E8\u05D3\u05D4 \u05DC\u05DA \u05E0\u05E7\u05D5\u05D3\u05D4 \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D1\u05E4\u05E2\u05DD \u05D4\u05D1\u05D0\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TrivyaComponent {
    constructor(wordsSV) {
        this.wordsSV = wordsSV;
        this.wordRand = '';
    }
    ngOnInit() {
        // this.current_user =  JSON.parse(localStorage.getItem('user'));
        this.wordsSV.current_game_bh.subscribe(res => {
            this.current_game = res;
        });
    }
}
TrivyaComponent.ɵfac = function TrivyaComponent_Factory(t) { return new (t || TrivyaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"])); };
TrivyaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrivyaComponent, selectors: [["board"]], inputs: { wordRand: "wordRand", arrLange: "arrLange" }, decls: 7, vars: 3, consts: [["id", "design"], ["id", "rotatedBorder", "Random", "", 3, "wordHeb", "getRand", 4, "ngFor", "ngForOf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger ", 4, "ngIf"], ["id", "rotatedBorder", "Random", "", 3, "wordHeb", "getRand"], ["id", "word"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"]], template: function TrivyaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrivyaComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TrivyaComponent_div_5_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TrivyaComponent_div_6_Template, 4, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wordsSV.wordsArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_game.cureent_sucusseful);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_game.cureent_fail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _directives_random_directive__WEBPACK_IMPORTED_MODULE_3__["RandomDirective"]], styles: ["#design[_ngcontent-%COMP%] {\r\n    position: relative; width: 100%; height: 150px;\r\n    margin: auto; margin-top: 100px; \r\n    text-align: center; \r\n    display: flex; \r\n    justify-content: space-evenly;\r\n\r\n}\r\n\r\n#rotatedBorder[_ngcontent-%COMP%] {\r\n    position: relative; \r\n    height: 100%; \r\n    width: 100%;\r\n    margin: auto;\r\n    box-sizing: border-box; \r\n    border: 15px violet solid;\r\n    \r\n    box-shadow: 0 0 10px #eb311f, inset 0 0 20px #eb311f;\r\n    display: flex;\r\n}\r\n\r\n#word[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2FtZXMvdHJpdnlhZi90cml2eWEvdHJpdnlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsYUFBYTtJQUM5QyxZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixvREFBb0Q7SUFDcEQsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9nYW1lcy90cml2eWFmL3RyaXZ5YS90cml2eWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZXNpZ24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogYXV0bzsgbWFyZ2luLXRvcDogMTAwcHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG59XHJcblxyXG4jcm90YXRlZEJvcmRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICBib3JkZXI6IDE1cHggdmlvbGV0IHNvbGlkO1xyXG4gICAgLyogdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ViMzExZiwgaW5zZXQgMCAwIDIwcHggI2ViMzExZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiN3b3Jke1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrivyaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'board',
                templateUrl: './trivya.component.html',
                styleUrls: ['./trivya.component.css']
            }]
    }], function () { return [{ type: src_app_servicees_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"] }]; }, { wordRand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrLange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicees_socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicees/socketio.service */ "./src/app/servicees/socketio.service.ts");
/* harmony import */ var _carusela_carusela_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carusela/carusela.component */ "./src/app/comps/carusela/carusela.component.ts");




class HomeComponent {
    constructor(s) {
        this.s = s;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicees_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketioService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[1, "view", "align-items-center"], [1, "mask", "rgba-black-light", "align-items-center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "carusela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_carusela_carusela_component__WEBPACK_IMPORTED_MODULE_2__["CaruselaComponent"]], styles: [".view[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    height: 100vh;\r\n    \r\n    background-color: cornflowerblue;\r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    background-position: center center;\r\n    position: relative;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLyogbWFyZ2luLXRvcDogLTIwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _servicees_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/modal/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/modal/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class ModalComponent {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        // we added this so that when the backdrop is clicked the modal is closed.
        this.el.nativeElement.addEventListener('click', () => {
            this.close();
        });
    }
    close() {
        this.el.nativeElement.classList.remove('sshow');
        this.el.nativeElement.classList.add('hhidden');
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "mmodal"], [1, "mmodal-body"], [1, "mmodal-background"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    } }, styles: [".sshow[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.hhidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.mmodal[_ngcontent-%COMP%] {\r\n    \r\n    z-index: 1000;\r\n    position: fixed;\r\n    top: 30px;\r\n    bottom: 0;\r\n    left: 300px;\r\n    width: 500px;\r\n}\r\n.mmodal-body[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    margin: 40px;\r\n    padding: 20px;\r\n}\r\n\r\n.mmodal-background[_ngcontent-%COMP%] {\r\n    \r\n    z-index: 900;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #000;\r\n    \r\n    opacity: 0.95;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFDckM7SUFDSSxjQUFjO0FBQ2xCO0FBQ0EsK0NBQStDO0FBQy9DO0lBQ0ksYUFBYTtBQUNqQjtBQUNBLCtDQUErQztBQUMvQztJQUNJLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBLHNCQUFzQjtBQUN0QjtJQUNJLCtEQUErRDtJQUMvRCxZQUFZO0lBQ1osZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxzQkFBc0I7SUFDdEIscURBQXFEO0lBQ3JELGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLy8gdGhpcyBtYWtlcyB0aGUgLm1vZGFsIHZpc2libGUgKi9cclxuLnNzaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi8qIC8vIHRoaXMgbWFrZXMgdGhlIGVsZW1lbnQgaGlkZGVuL2ludmlzaWJsZSAqL1xyXG4uaGhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIC8vIHRoaXMgaG9sZHMgdGhlIENTUyBkaXNwbGF5IG9mIHRoZSBtb2RhbCAqL1xyXG4ubW1vZGFsIHtcclxuICAgIC8qIC8vIG1ha2VzIGl0IGhvdmVyIGFib3ZlIGFsbCBlbGVtZW50cyAqL1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbi5tbW9kYWwtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4vKiAvLyBiYWNrZHJvcCBjb2xvciAqL1xyXG4ubW1vZGFsLWJhY2tncm91bmQge1xyXG4gICAgLyogLy8gc2hvdWxkIGJlIGJlbG93IHRoZSAubW9kYWwgYnV0IGFib3ZlIGFsbCBvdGhlciBlbGVtZW50cyAqL1xyXG4gICAgei1pbmRleDogOTAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIC8qIC8vIG1ha2VzIHRoZSBiZWxvdyBlbGVtZW50cyB2aXNpYmxlIHRvIGEgZGVncmVlLiAqL1xyXG4gICAgb3BhY2l0eTogMC45NTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicees/sign.service */ "./src/app/servicees/sign.service.ts");
/* harmony import */ var _servicees_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicees/game.service */ "./src/app/servicees/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function NavbarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05DE\u05DE\u05E9\u05E7 \u05E0\u05D9\u05D4\u05D5\u05DC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05DB\u05E0\u05D9\u05E1\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.signSvc.SignOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05D9\u05E6\u05D9\u05D0\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.corrent_user.user_name);
} }
function NavbarComponent_a_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05DB\u05E0\u05D9\u05E1\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_32_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_32_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.signSvc.SignOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05D9\u05E6\u05D9\u05D0\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "show": a0 }; };
class NavbarComponent {
    constructor(signSvc, gameSvc) {
        this.signSvc = signSvc;
        this.gameSvc = gameSvc;
        this.navbarOpen = false;
        this.enter = 'כניסה';
        this.exit = 'יציאה';
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    ngOnInit() {
        this.signSvc.registeredBh.subscribe(res => {
            console.log(res);
            this.registered = res;
        });
        this.corrent_user = JSON.parse(localStorage.getItem('user'));
        console.log(this.corrent_user);
        this.signSvc.user_game_bh.subscribe(res => {
            // this.corrent_user =  res;
            this.corrent_user_check = JSON.parse(localStorage.getItem('user'));
            if (this.corrent_user_check != undefined) {
                return this.corrent_user = this.corrent_user_check;
            }
            this.corrent_user = res;
            console.log(this.corrent_user);
        });
    }
    onSubmit(v) {
        console.log('submited', v.search);
    }
    search(value) {
        if (value.length <= 1) {
            console.log(value.length);
        }
        this.gameSvc.search(value);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_1__["SignService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicees_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["my-navbar"]], decls: 33, vars: 10, consts: [[1, "navbar", "navbar-header", "navbar-expand-md", "navbar-dark", "bg-dark"], ["type", "button", "data-toggle", "collapse", 1, "navbar-toggler", 3, "click"], [1, "icon", "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", "show", 3, "ngClass"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "home", 1, "nav-link"], ["href", "/socket", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], [1, "span12", "nav-item"], [1, "form-search", "form-horizontal", "pull-right", 3, "ngSubmit"], ["searchform", "ngForm"], [1, "input-append", "span12"], ["type", "text", "name", "search", "placeholder", "Search", 1, "form-control", "search-query", "mac-style", 3, "keyup"], ["searchBox", ""], [1, "nav-item", "avatar", "dropdown", "navbar-nav", "flex-column"], ["type", "button", "data-toggle", "dropdown", 1, "pp", "dropdown-toggle"], ["src", "assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png", "alt", "placeholder", 1, "img-fluid", "rounded-circle", "z-depth-0"], ["role", "menu", 1, "dropdown-menu", "dropdown-menu-right"], ["class", "dropdown-item waves-light", "href", "/sign", 4, "ngIf"], ["class", "dropdown-item waves-light", 3, "click", 4, "ngIf"], ["href", "/card-user", 1, "dropdown-item", "waves-light"], ["class", "navbar-text", 4, "ngIf"], [1, "navbar-text"], [1, "fa", "fa-trophy"], ["class", "navbar-text", "href", "/sign", 4, "ngIf"], ["class", "navbar-text", 3, "click", 4, "ngIf"], ["href", "admin", 1, "nav-link"], ["href", "/sign", 1, "dropdown-item", "waves-light"], [1, "dropdown-item", "waves-light", 3, "click"], ["href", "/sign", 1, "navbar-text"], [1, "navbar-text", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_2_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05E8\u05D0\u05E9\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u05D7\u05D3\u05E8 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_li_12_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavbarComponent_Template_form_ngSubmit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NavbarComponent_Template_input_keyup_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx.search(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavbarComponent_a_23_Template, 2, 0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavbarComponent_a_24_Template, 2, 0, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u05D4\u05E4\u05E8\u05D5\u05E4\u05D9\u05DC \u05E9\u05DC\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_span_27_Template, 2, 1, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavbarComponent_a_31_Template, 2, 0, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NavbarComponent_a_32_Template, 2, 0, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.navbarOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.corrent_user.role == "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.registered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.corrent_user.sum_score, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.registered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registered);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    \r\n    margin: 0;\r\n}\r\n\r\n.navbar-text[_ngcontent-%COMP%]{\r\n    color: #1dd2ff;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.pp[_ngcontent-%COMP%]{\r\n    \r\n    height: 60px;\r\n    width: 60px;\r\n}\r\n\r\n#custom-search-form[_ngcontent-%COMP%] {\r\n    margin:0;\r\n    margin-top: 5px;\r\n    padding: 0;\r\n}\r\n\r\n#custom-search-form[_ngcontent-%COMP%]   .search-query[_ngcontent-%COMP%] {\r\n    padding-right: 3px;\r\n    padding-right: 4px \\9;\r\n    padding-left: 3px;\r\n    padding-left: 4px \\9;\r\n    \r\n\r\n    margin-bottom: 0;\r\n    border-radius: 3px;\r\ntransition: width  0.2s ease-in-out;\r\n}\r\n\r\n#custom-search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: none;\r\n    \r\n    padding: 2px 5px;\r\n    margin-top: 2px;\r\n    position: relative;\r\n    left: -28px;\r\n    \r\n    margin-bottom: 0;\r\n    border-radius: 3px;\r\n}\r\n\r\n.search-query[_ngcontent-%COMP%]:focus    + button[_ngcontent-%COMP%] {\r\n    z-index: 3;   \r\n}\r\n\r\n.search-query[_ngcontent-%COMP%]:focus{\r\n    width: 260px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrRUFBa0U7O0lBRWxFLGdCQUFnQjtJQUdoQixrQkFBa0I7QUFJdEIsbUNBQW1DO0FBQ25DOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtFQUFrRTtJQUNsRSxnQkFBZ0I7SUFHaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5uYXZiYXItdGV4dHtcclxuICAgIGNvbG9yOiAjMWRkMmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wcHtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiNjdXN0b20tc2VhcmNoLWZvcm0ge1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jY3VzdG9tLXNlYXJjaC1mb3JtIC5zZWFyY2gtcXVlcnkge1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4IFxcOTtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHggXFw5O1xyXG4gICAgLyogSUU3LTggZG9lc24ndCBoYXZlIGJvcmRlci1yYWRpdXMsIHNvIGRvbid0IGluZGVudCB0aGUgcGFkZGluZyAqL1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAgMC4ycyBlYXNlLWluLW91dDtcclxuLW1vei10cmFuc2l0aW9uOndpZHRoICAwLjJzIGVhc2UtaW4tb3V0O1xyXG4tby10cmFuc2l0aW9uOiB3aWR0aCAgMC4ycyBlYXNlLWluLW91dDtcclxudHJhbnNpdGlvbjogd2lkdGggIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNjdXN0b20tc2VhcmNoLWZvcm0gYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAvKiogYmVsb3dzIHN0eWxlcyBhcmUgd29ya2luZyBnb29kICovXHJcbiAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTI4cHg7XHJcbiAgICAvKiBJRTctOCBkb2Vzbid0IGhhdmUgYm9yZGVyLXJhZGl1cywgc28gZG9uJ3QgaW5kZW50IHRoZSBwYWRkaW5nICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnNlYXJjaC1xdWVyeTpmb2N1cyArIGJ1dHRvbiB7XHJcbiAgICB6LWluZGV4OiAzOyAgIFxyXG59ICAgXHJcbi5zZWFyY2gtcXVlcnk6Zm9jdXN7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbn0gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'my-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_1__["SignService"] }, { type: _servicees_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/showmodal/showmodal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comps/showmodal/showmodal.component.ts ***!
  \********************************************************/
/*! exports provided: ShowmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowmodalComponent", function() { return ShowmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["modal_1"];
const _c1 = ["vc"];
function ShowmodalComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " This Modal title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add some text here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowmodalComponent_ng_template_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ShowmodalComponent {
    showDialog() {
        let view = this.modal_1.createEmbeddedView(null);
        this.vc.insert(view);
        this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
        this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add('modal-open');
        this.modal_1.elementRef.nativeElement.previousElementSibling.style.display = 'block';
        this.backdrop = document.createElement('DIV');
        this.backdrop.className = 'modal-backdrop';
        document.body.appendChild(this.backdrop);
    }
    closeDialog() {
        this.vc.clear();
        document.body.removeChild(this.backdrop);
    }
}
ShowmodalComponent.ɵfac = function ShowmodalComponent_Factory(t) { return new (t || ShowmodalComponent)(); };
ShowmodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowmodalComponent, selectors: [["showmodal"]], viewQuery: function ShowmodalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal_1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.vc = _t.first);
    } }, decls: 8, vars: 0, consts: [[1, "btn", "btn-primary", "btn-lg", 3, "click"], ["vc", ""], ["modal_1", ""], ["id", "myModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], ["id", "myModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 3, "click"]], template: function ShowmodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Creating Modals with Twitter Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowmodalComponent_Template_button_click_2_listener() { return ctx.showDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Launch Modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShowmodalComponent_ng_template_6_Template, 13, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3Nob3dtb2RhbC9zaG93bW9kYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowmodalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'showmodal',
                templateUrl: './showmodal.component.html',
                styleUrls: ['./showmodal.component.css']
            }]
    }], null, { modal_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modal_1']
        }], vc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['vc', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/user/card-user/card-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comps/user/card-user/card-user.component.ts ***!
  \*************************************************************/
/*! exports provided: CardUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardUserComponent", function() { return CardUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_interfacees_user_info_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfacees/user-info-model */ "./src/app/interfacees/user-info-model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicees/sign.service */ "./src/app/servicees/sign.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function CardUserComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", game_r3.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r3.user_score);
} }
function CardUserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CardUserComponent_div_0_div_13_Template, 5, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u05E1\u05D4\"\u05DB :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r1.pothoUrl ? user_r1.pothoUrl : "assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.sum_score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05E9\u05D9\u05D7\u05E7\u05EA \u05D1: ", user_r1.scores.length, " \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", user_r1.games);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.sum_score);
} }
class CardUserComponent {
    constructor(http, route, signSvc) {
        this.http = http;
        this.route = route;
        this.signSvc = signSvc;
        this.user_game = new src_app_interfacees_user_info_model__WEBPACK_IMPORTED_MODULE_1__["UserInfoModel"]({ guid: "D21ds12x",
            customerUid: "cust2dsa12dsa",
            first_name: "John",
            last_name: "Doe",
            email: "email@email.com",
            zipcode: "",
            password: "Idasn2x2#",
            pothoUrl: "assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png",
            sudoko_score: 0,
            trivya_score: 0,
            currenr_score: 0,
            sum_score: 0
        });
    }
    ngOnInit() {
        this.user_game = JSON.parse(localStorage.getItem('user'));
        console.log(this.user_game);
    }
}
CardUserComponent.ɵfac = function CardUserComponent_Factory(t) { return new (t || CardUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__["SignService"])); };
CardUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardUserComponent, selectors: [["app-card-user"]], decls: 1, vars: 1, consts: [["class", "body-card", 4, "ngIf"], [1, "body-card"], [1, "card"], [1, "box"], [1, "img"], [3, "src"], [1, "navbar-text"], [1, "fa", "fa-trophy"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xs-6", "col-form-label"], [1, "col-xs-6"]], template: function CardUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardUserComponent_div_0_Template, 19, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user_game);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".body-card[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    background-repeat: no-repeat; \r\n    height: 100vh;\r\n    background-image: url('photo-1569517282132-25d22f4573e6.jpg');\r\n    font-family:sans-serif;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform:translate(-50%,-50%);\r\n    width:300px;\r\n    min-height:400px;\r\n    background:#fff;\r\n    box-shadow:0 20px 50px rgba(0,0,0,.1);\r\n    border-radius:10px;\r\n    transition:0.5s;\r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n    box-shadow:0 30px 70px rgba(0,0,0,.2);\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    top:50%;\r\n    left:0;\r\n    transform:translateY(-50%);\r\n    text-align:center;\r\n    padding:20px;\r\n    box-sizing:border-box;\r\n    width:100%;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n    width:120px;\r\n    height:120px;\r\n    margin:0 auto;\r\n    border-radius:50%;\r\n    overflow:hidden;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    height:100%;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size:20px;\r\n    color:#262626;\r\n    margin:20px auto;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size:14px;\r\n    background:#e91e63;\r\n    color:#fff;\r\n    display:inline-block;\r\n    padding:4px 10px;\r\n    border-radius:15px;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color:#262626;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display:inline-flex;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin:0;\r\n    padding:0;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style:none;\r\n    float:left;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display:block;\r\n    color:#aaa;\r\n    margin:0 10px;\r\n    font-size:20px;\r\n    transition:0.5s;\r\n    text-align:center;\r\n}\r\n.card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n    color:#e91e63;\r\n    transform:rotateY(360deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdXNlci9jYXJkLXVzZXIvY2FyZC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FO0lBQ0ksc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsNkRBQTRFO0lBQzVFLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLE1BQU07SUFDTiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvdXNlci9jYXJkLXVzZXIvY2FyZC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpOyAqL1xyXG4uYm9keS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL3Bob3RvLTE1Njk1MTcyODIxMzItMjVkMjJmNDU3M2U2LmpwZycpO1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgbWluLWhlaWdodDo0MDBweDtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGJveC1zaGFkb3c6MCAyMHB4IDUwcHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOjAuNXM7XHJcbn1cclxuLmNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzowIDMwcHggNzBweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG4uY2FyZCAuYm94IHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi5jYXJkIC5ib3ggLmltZyB7XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIGhlaWdodDoxMjBweDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG4uY2FyZCAuYm94IC5pbWcgaW1nIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG4uY2FyZCAuYm94IGgyIHtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgY29sb3I6IzI2MjYyNjtcclxuICAgIG1hcmdpbjoyMHB4IGF1dG87XHJcbn1cclxuLmNhcmQgLmJveCBoMiBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgYmFja2dyb3VuZDojZTkxZTYzO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzo0cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxufVxyXG4uY2FyZCAuYm94IHAge1xyXG4gICAgY29sb3I6IzI2MjYyNjtcclxufVxyXG4uY2FyZCAuYm94IHNwYW4ge1xyXG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcclxufVxyXG4uY2FyZCAuYm94IHVsIHtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG59XHJcbi5jYXJkIC5ib3ggdWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxufVxyXG4uY2FyZCAuYm94IHVsIGxpIGEge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGNvbG9yOiNhYWE7XHJcbiAgICBtYXJnaW46MCAxMHB4O1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOjAuNXM7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uY2FyZCAuYm94IHVsIGxpOmhvdmVyIGEge1xyXG4gICAgY29sb3I6I2U5MWU2MztcclxuICAgIHRyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZyk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-user',
                templateUrl: './card-user.component.html',
                styleUrls: ['./card-user.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__["SignService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/user/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/comps/user/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicees/sign.service */ "./src/app/servicees/sign.service.ts");
/* harmony import */ var src_app_servicees_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicees/auth.service */ "./src/app/servicees/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function SignUpComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.serviceErrors.first_name || ctx_r1.message_erros["full_name_erros"]);
} }
function SignUpComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.serviceErrors.first_name || ctx_r3.message_erros["user_name_erros"]);
} }
function SignUpComponent_p_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.serviceErrors.first_name || ctx_r5.message_erros["email_erros"]);
} }
function SignUpComponent_p_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.serviceErrors.password || ctx_r7.message_erros["password_erros"]);
} }
function SignUpComponent_p_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.serviceErrors.password || ctx_r9.message_erros["conf_pass_erros"]);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class SignUpComponent {
    constructor(formBuilder, http, router, signSvc, authService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.signSvc = signSvc;
        this.authService = authService;
        this.registered = false;
        this.submitted = false;
        this.serviceErrors = {};
        this.message_erros = {
            full_name_erros: '',
            user_name_erros: '',
            email_erros: '',
            password_erros: '',
            conf_pass_erros: '',
        };
    }
    ngOnInit() {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.userForm = this.formBuilder.group({
            full_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            user_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(75)]],
            // zipcode: ['', [Validators.required,  Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                ]],
            conf_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]],
        }, { validator: this.validateAreEqual });
    }
    validateAreEqual(frm) {
        return frm.controls['password'].value === frm.controls['conf_password'].value ?
            null : { 'mismatch': true };
    }
    invalidFulltName() {
        if (this.userForm.controls.full_name.errors != null) {
            if (this.userForm.controls.full_name.hasError('required')) {
                this.message_erros.full_name_erros = 'שם מלא חובה';
            }
        }
        return (this.submitted &&
            (
            // this.serviceErrors.first_name != null || 
            this.userForm.controls.full_name.errors != null));
    }
    invalidUserName() {
        if (this.userForm.controls.password.errors != null) {
            if (this.userForm.controls.user_name.hasError('required')) {
                this.message_erros.user_name_erros = 'שם משתמש חובה';
            }
        }
        return (this.submitted &&
            (
            // this.serviceErrors.last_name != null || 
            this.userForm.controls.user_name.errors != null));
    }
    invalidEmail() {
        const email_control = this.userForm.controls.email;
        if (email_control.errors != null) {
            if (email_control.hasError('required')) {
                this.message_erros.email_erros = 'דואר אלקטרוני חובה';
            }
            else if (email_control.hasError('email')) {
                this.message_erros.email_erros = 'ניתן להכניס כתובת מייל בלבד';
            }
        }
        return (this.submitted &&
            (
            // this.serviceErrors.email != null || 
            email_control.errors != null));
    }
    invalidPassword() {
        const password_control = this.userForm.controls.password;
        if (password_control.errors != null) {
            if (password_control.hasError('required')) {
                this.message_erros.password_erros = 'סיסמא חובה';
            }
            else if (password_control.hasError('minlength')) {
                this.message_erros.password_erros = 'על הסיסמא להכיל לפחות 5 תווים';
            }
        }
        return (this.submitted &&
            (
            // this.serviceErrors.password != null || 
            this.userForm.controls.password.errors != null));
    }
    invalidConfPassword() {
        var _a, _b;
        let config = true;
        const password_control = this.userForm.controls.password;
        const conf_password_control = this.userForm.controls.conf_password;
        if (conf_password_control.hasError('required')) {
            this.message_erros.password_erros = 'אימות סיסמא חובה';
        }
        else if ((_a = this.userForm.errors) === null || _a === void 0 ? void 0 : _a.mismatch) {
            this.message_erros.conf_pass_erros = 'אימות סיסמא נכשל';
        }
        return (this.submitted &&
            (((_b = this.userForm.errors) === null || _b === void 0 ? void 0 : _b.mismatch) ||
                // this.serviceErrors.password != null || 
                conf_password_control.errors != null));
    }
    onSubmit() {
        this.submitted = true;
        this.signSvc.registerUser(this.userForm.invalid, this.userForm.value);
        this.registered = true;
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__["SignService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 63, vars: 21, consts: [[1, "bodylogin"], [1, "container"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "d-flex", "justify-content-end", "social_icon"], [1, "fa", "fa-facebook-square", 3, "click"], [1, "fa", "fa-google-plus-square", 3, "click"], [1, "fa", "fa-twitter-square"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "input-group", "form-group", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "formControlName", "full_name", "placeholder", "\u05E9\u05DD \u05DE\u05DC\u05D0", 1, "form-control"], ["userName", ""], ["id", "full_name_error", "class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "user_name", "placeholder", "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9", 1, "form-control"], ["id", "user_name_error", "class", "text-danger", 4, "ngIf"], [1, "fa", "fa-paper-plane"], ["type", "text", "formControlName", "email", "placeholder", "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9", 1, "form-control"], ["id", "first_name_error", "class", "text-danger", 4, "ngIf"], [1, "fa", "fa-key"], ["type", "password", "formControlName", "password", "placeholder", "\u05E1\u05D9\u05E1\u05DE\u05D0", 1, "form-control"], ["userPassword", ""], ["id", "password_error", "class", "text-danger", 4, "ngIf"], [1, "fa", "fa-check"], ["type", "password", "formControlName", "conf_password", "placeholder", "\u05D0\u05D9\u05DE\u05D5\u05EA \u05E1\u05D9\u05E1\u05DE\u05D0", 1, "form-control"], ["confPassword", ""], [1, "row", "align-items-center", "remember"], ["type", "checkbox"], [1, "form-group", "has-error"], ["type", "submit", "value", "\u05E9\u05DE\u05D5\u05E8", 1, "btn", "float-right", "login_btn"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], ["routerLink", "/sign-in", 1, "redirect"], ["id", "full_name_error", 1, "text-danger"], ["id", "user_name_error", 1, "text-danger"], ["id", "first_name_error", 1, "text-danger"], ["id", "password_error", 1, "text-danger"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05D4\u05E8\u05E9\u05DE\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_i_click_9_listener() { return ctx.authService.FacebookAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_i_click_11_listener() { return ctx.authService.GoogleAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignUpComponent_p_22_Template, 2, 1, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SignUpComponent_p_29_Template, 2, 1, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 21, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SignUpComponent_p_36_Template, 2, 1, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SignUpComponent_p_43_Template, 2, 1, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SignUpComponent_p_51_Template, 2, 1, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u05D6\u05DB\u05D5\u05E8 \u05D0\u05D5\u05EA\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u05D4\u05DB\u05E0\u05E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u05DB\u05D1\u05E8 \u05D9\u05E9 \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF \u05DE\u05E9\u05EA\u05DE\u05E9? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.invalidFulltName()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidFulltName());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.invalidUserName()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidUserName());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.invalidEmail()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidEmail());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.invalidPassword()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidPassword());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.invalidConfPassword()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidConfPassword());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".bodylogin[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\nbackground-image: url('photo-1569517282132-25d22f4573e6.jpg');\r\nbackground-size: cover;\r\nbackground-repeat: no-repeat;\r\nheight: 100vh;\r\nfont-family: 'Numans', sans-serif;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n\r\nalign-content: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n\r\nmargin-top: auto;\r\nmargin-bottom: auto;\r\nwidth: 400px;\r\nbackground-color: rgba(0,0,0,0.5) !important;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nfont-size: 60px;\r\nmargin-left: 10px;\r\ncolor: #1dd2ff;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\r\ncolor: white;\r\ncursor: pointer;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]{\r\nposition: absolute;\r\nright: 20px;\r\ntop: -45px;\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nwidth: 50px;\r\nbackground-color:  #1dd2ff;\r\ncolor: black;\r\nborder:0 !important;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\noutline: 0 0 0 0  !important;\r\nbox-shadow: 0 0 0 0 !important;\r\n\r\n}\r\n\r\n.remember[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\r\n{\r\nwidth: 20px;\r\nheight: 20px;\r\nmargin-left: 15px;\r\nmargin-right: 5px;\r\n}\r\n\r\n.login_btn[_ngcontent-%COMP%]{\r\ncolor: black;\r\nbackground-color:  #1dd2ff;\r\nwidth: 100px;\r\n}\r\n\r\n.login_btn[_ngcontent-%COMP%]:hover{\r\ncolor: black;\r\nbackground-color: white;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\nmargin-left: 4px;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]{\r\n    border-color:red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7O0FBRXJDLG1FQUFtRTs7QUFFbkU7SUFDSSxrQkFBa0I7QUFDdEIsNkRBQTRFO0FBQzVFLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1osNENBQTRDO0FBQzVDOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osZUFBZTtBQUNmOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsMEJBQTBCO0FBQzFCLFlBQVk7QUFDWixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUIsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTs7QUFFQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxZQUFZO0FBQ1osMEJBQTBCO0FBQzFCLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWix1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFkZSB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltKi9cclxuXHJcbi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7ICovXHJcblxyXG4uYm9keWxvZ2lue1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL3Bob3RvLTE1Njk1MTcyODIxMzItMjVkMjJmNDU3M2U2LmpwZycpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6IDEwMHZoO1xyXG5mb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbi8qIGhlaWdodDogMTAwJTsgKi9cclxuYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZHtcclxuLyogaGVpZ2h0OiAzNzBweDsgKi9cclxubWFyZ2luLXRvcDogYXV0bztcclxubWFyZ2luLWJvdHRvbTogYXV0bztcclxud2lkdGg6IDQwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW57XHJcbmZvbnQtc2l6ZTogNjBweDtcclxubWFyZ2luLWxlZnQ6IDEwcHg7XHJcbmNvbG9yOiAjMWRkMmZmO1xyXG59XHJcblxyXG4uc29jaWFsX2ljb24gc3Bhbjpob3ZlcntcclxuY29sb3I6IHdoaXRlO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBoM3tcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc29jaWFsX2ljb257XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxucmlnaHQ6IDIwcHg7XHJcbnRvcDogLTQ1cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW57XHJcbndpZHRoOiA1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAgIzFkZDJmZjtcclxuY29sb3I6IGJsYWNrO1xyXG5ib3JkZXI6MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1c3tcclxub3V0bGluZTogMCAwIDAgMCAgIWltcG9ydGFudDtcclxuYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLnJlbWVtYmVye1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yZW1lbWJlciBpbnB1dFxyXG57XHJcbndpZHRoOiAyMHB4O1xyXG5oZWlnaHQ6IDIwcHg7XHJcbm1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmxvZ2luX2J0bntcclxuY29sb3I6IGJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAgIzFkZDJmZjtcclxud2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubG9naW5fYnRuOmhvdmVye1xyXG5jb2xvcjogYmxhY2s7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlua3N7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpbmtzIGF7XHJcbm1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5oYXMtZXJyb3J7XHJcbiAgICBib3JkZXItY29sb3I6cmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__["SignService"] }, { type: src_app_servicees_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/user/sign/sign.component.ts":
/*!***************************************************!*\
  !*** ./src/app/comps/user/sign/sign.component.ts ***!
  \***************************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicees/sign.service */ "./src/app/servicees/sign.service.ts");
/* harmony import */ var src_app_servicees_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicees/auth.service */ "./src/app/servicees/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function SignComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.serviceErrors.first_name || ctx_r1.message_erros["email_erros"]);
} }
function SignComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.serviceErrors.password || ctx_r3.message_erros["password_erros"]);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class SignComponent {
    constructor(formBuilder, http, router, signSvc, authService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.signSvc = signSvc;
        this.authService = authService;
        this.registered = false;
        this.submitted = false;
        this.serviceErrors = {};
        this.message_erros = {
            full_name_erros: '',
            user_name_erros: '',
            email_erros: '',
            password_erros: '',
            conf_pass_erros: '',
        };
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            // full_name: ['', [Validators.required, Validators.maxLength(50)]],
            // user_name: ['', [Validators.required, Validators.maxLength(50)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(75)]],
            // zipcode: ['', [Validators.required,  Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
                    // , Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ]],
        });
    }
    invalidEmail() {
        const email_control = this.userForm.controls.email;
        if (email_control.errors != null) {
            if (email_control.hasError('required')) {
                this.message_erros.email_erros = 'דואר אלקטרוני חובה';
            }
            else if (email_control.hasError('email')) {
                this.message_erros.email_erros = 'ניתן להכניס כתובת מייל בלבד';
            }
        }
        return (this.submitted &&
            (
            // this.serviceErrors.email != null || 
            email_control.errors != null));
    }
    invalidPassword() {
        const password_control = this.userForm.controls.password;
        if (password_control.errors != null) {
            if (password_control.hasError('required')) {
                this.message_erros.password_erros = 'סיסמא חובה';
            }
            else if (password_control.hasError('minlength')) {
                this.message_erros.password_erros = 'על הסיסמא להכיל לפחות 5 תווים';
            }
        }
        return (this.submitted &&
            (
            // this.serviceErrors.password != null || 
            this.userForm.controls.password.errors != null));
    }
    onSubmit() {
        this.submitted = true;
        this.signSvc.SignIn(this.userForm.invalid, this.userForm.value);
    }
}
SignComponent.ɵfac = function SignComponent_Factory(t) { return new (t || SignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__["SignService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
SignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignComponent, selectors: [["app-sign"]], decls: 43, vars: 9, consts: [[1, "bodylogin"], [1, "container"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "d-flex", "justify-content-end", "social_icon"], [1, "fa", "fa-facebook-square"], [1, "fa", "fa-google-plus-square", 3, "click"], [1, "fa", "fa-twitter-square"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "input-group", "form-group", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-paper-plane"], ["type", "text", "formControlName", "email", "placeholder", "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9", 1, "form-control"], ["userName", ""], ["id", "first_name_error", "class", "text-danger", 4, "ngIf"], [1, "fa", "fa-key"], ["type", "password", "formControlName", "password", "placeholder", "\u05E1\u05D9\u05E1\u05DE\u05D0", 1, "form-control"], ["userPassword", ""], ["id", "password_error", "class", "text-danger", 4, "ngIf"], [1, "row", "align-items-center", "remember"], ["type", "checkbox"], [1, "form-group"], ["type", "submit", "value", "\u05D4\u05DB\u05E0\u05E1", 1, "btn", "float-right", "login_btn"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], ["routerLink", "/register-user"], [1, "d-flex", "justify-content-center"], ["routerLink", "/forgot-password"], ["id", "first_name_error", 1, "text-danger"], ["id", "password_error", 1, "text-danger"]], template: function SignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05DB\u05E0\u05D9\u05E1\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignComponent_Template_i_click_11_listener() { return ctx.authService.GoogleAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignComponent_Template_form_ngSubmit_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignComponent_p_22_Template, 2, 1, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SignComponent_p_29_Template, 2, 1, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u05D6\u05DB\u05D5\u05E8 \u05D0\u05D5\u05EA\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u05E2\u05D3\u05D9\u05D9\u05DF \u05D0\u05D9\u05DF \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF \u05DE\u05E9\u05EA\u05DE\u05E9?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u05D4\u05E8\u05E9\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u05E9\u05DB\u05D7\u05EA \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D0 \u05E9\u05DC\u05DA?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.invalidEmail()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidEmail());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.invalidPassword()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidPassword());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".bodylogin[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\nbackground-image: url('photo-1569517282132-25d22f4573e6.jpg');\r\nbackground-size: cover;\r\nbackground-repeat: no-repeat;\r\nheight: 100vh;\r\nfont-family: 'Numans', sans-serif;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n\r\nalign-content: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n\r\nmargin-top: auto;\r\nmargin-bottom: auto;\r\nwidth: 400px;\r\nbackground-color: rgba(0,0,0,0.5) !important;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nfont-size: 60px;\r\nmargin-left: 10px;\r\ncolor:  #1dd2ff;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\r\ncolor: white;\r\ncursor: pointer;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.social_icon[_ngcontent-%COMP%]{\r\nposition: absolute;\r\nright: 20px;\r\ntop: -45px;\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nwidth: 50px;\r\nbackground-color:  #1dd2ff;\r\ncolor: black;\r\nborder:0 !important;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\noutline: 0 0 0 0  !important;\r\nbox-shadow: 0 0 0 0 !important;\r\n\r\n}\r\n\r\n.remember[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\r\n{\r\nwidth: 20px;\r\nheight: 20px;\r\nmargin-left: 15px;\r\nmargin-right: 5px;\r\n}\r\n\r\n.login_btn[_ngcontent-%COMP%]{\r\ncolor: black;\r\nbackground-color:  #1dd2ff;\r\nwidth: 100px;\r\n}\r\n\r\n.login_btn[_ngcontent-%COMP%]:hover{\r\ncolor: black;\r\nbackground-color: white;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]{\r\ncolor: white;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\nmargin-left: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdXNlci9zaWduL3NpZ24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7O0FBRXJDLG1FQUFtRTs7QUFFbkU7SUFDSSxrQkFBa0I7QUFDdEIsNkRBQTRFO0FBQzVFLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1osNENBQTRDO0FBQzVDOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7O0FBRUE7QUFDQSxZQUFZO0FBQ1osZUFBZTtBQUNmOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsMEJBQTBCO0FBQzFCLFlBQVk7QUFDWixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUIsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTs7QUFFQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxZQUFZO0FBQ1osMEJBQTBCO0FBQzFCLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWix1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy91c2VyL3NpZ24vc2lnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFkZSB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltKi9cclxuXHJcbi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7ICovXHJcblxyXG4uYm9keWxvZ2lue1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL3Bob3RvLTE1Njk1MTcyODIxMzItMjVkMjJmNDU3M2U2LmpwZycpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6IDEwMHZoO1xyXG5mb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbi8qIGhlaWdodDogMTAwJTsgKi9cclxuYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZHtcclxuLyogaGVpZ2h0OiAzNzBweDsgKi9cclxubWFyZ2luLXRvcDogYXV0bztcclxubWFyZ2luLWJvdHRvbTogYXV0bztcclxud2lkdGg6IDQwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW57XHJcbmZvbnQtc2l6ZTogNjBweDtcclxubWFyZ2luLWxlZnQ6IDEwcHg7XHJcbmNvbG9yOiAgIzFkZDJmZjtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXJ7XHJcbmNvbG9yOiB3aGl0ZTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDN7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNvY2lhbF9pY29ue1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnJpZ2h0OiAyMHB4O1xyXG50b3A6IC00NXB4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFue1xyXG53aWR0aDogNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogICMxZGQyZmY7XHJcbmNvbG9yOiBibGFjaztcclxuYm9yZGVyOjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXN7XHJcbm91dGxpbmU6IDAgMCAwIDAgICFpbXBvcnRhbnQ7XHJcbmJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5yZW1lbWJlcntcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucmVtZW1iZXIgaW5wdXRcclxue1xyXG53aWR0aDogMjBweDtcclxuaGVpZ2h0OiAyMHB4O1xyXG5tYXJnaW4tbGVmdDogMTVweDtcclxubWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5sb2dpbl9idG57XHJcbmNvbG9yOiBibGFjaztcclxuYmFja2dyb3VuZC1jb2xvcjogICMxZGQyZmY7XHJcbndpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmxvZ2luX2J0bjpob3ZlcntcclxuY29sb3I6IGJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpbmtze1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rcyBhe1xyXG5tYXJnaW4tbGVmdDogNHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign',
                templateUrl: './sign.component.html',
                styleUrls: ['./sign.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_4__["SignService"] }, { type: src_app_servicees_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/user/users-list/users-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/comps/user/users-list/users-list.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicees/sign.service */ "./src/app/servicees/sign.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function UsersListComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "time", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u05E1\u05D4\"\u05DB \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.pothoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r1.pothoUrl ? user_r1.pothoUrl : "assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.sum_score);
} }
class UsersListComponent {
    constructor(route, signSvc) {
        this.route = route;
        this.signSvc = signSvc;
    }
    ngOnInit() {
        this.signSvc.getUsers();
        this.usersListOb = this.signSvc.users_list;
        this.usersListOb.subscribe(res => {
            this.usersList = res;
            console.log(this.usersList);
        });
        console.log(this.signSvc.users_list);
    }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_2__["SignService"])); };
UsersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["app-users-list"]], decls: 6, vars: 1, consts: [[1, "body-users"], [1, "container"], [1, "row"], [1, "[", "col-xs-12", "col-sm-offset-2", "col-sm-8", "]"], [1, "event-list"], [4, "ngFor", "ngForOf"], ["datetime", "2014-07-20"], [1, "day"], [1, "month"], [1, "year"], [1, "time"], ["alt", "Independence Day", 3, "src"], [1, "info"], [1, "title"], [1, "desc"], [1, "social"], [1, "facebook", 2, "width", "33%"], ["href", "#facebook"], [1, "fa", "fa-facebook"], [1, "twitter", 2, "width", "34%"], ["href", "#twitter"], [1, "fa", "fa-twitter"], [1, "google-plus", 2, "width", "33%"], ["href", "#google-plus"], [1, "fa", "fa-google-plus"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UsersListComponent_li_5_Template, 27, 6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".body-users[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    padding: 60px 0px;\r\n    background-color: rgb(220, 220, 220);\r\n}\r\n.event-list[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    font-family: 'Lato', sans-serif;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 0px 0px 5px rgb(51, 51, 51);\r\n    box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);\r\n    padding: 0px;\r\n    margin: 0px 0px 20px;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > time[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgb(197, 44, 102);\r\n    padding: 5px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(even)    > time[_ngcontent-%COMP%] {\r\n    background-color: rgb(165, 82, 167);\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > time[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > time[_ngcontent-%COMP%]    > .day[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 56pt;\r\n    font-weight: 100;\r\n    line-height: 1;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]    > .month[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 24pt;\r\n    font-weight: 900;\r\n    line-height: 1;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n    text-align: center;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\r\n    font-size: 17pt;\r\n    font-weight: 700;\r\n    margin: 0px;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > .desc[_ngcontent-%COMP%] {\r\n    font-size: 13pt;\r\n    font-weight: 300;\r\n    margin: 0px;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%], .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .social[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n    display: table;\r\n    list-style: none;\r\n    margin: 10px 0px 0px;\r\n    padding: 0px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .social[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .social[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    cursor: pointer;\r\n    color: rgb(30, 30, 30);\r\n    font-size: 11pt;\r\n    font-weight: 300;\r\n    padding: 3px 0px;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    color: rgb(30, 30, 30);\r\n    text-decoration: none;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .social[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {    \r\n    padding: 0px;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .social[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 3px 0px;\r\n}\r\n.event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover, .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .social[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\r\n    color: rgb(30, 30, 30);\r\n    background-color: rgb(200, 200, 200);\r\n}\r\n.facebook[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .google-plus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    color: rgb(75, 110, 168) !important;\r\n}\r\n.twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgb(79, 213, 248) !important;\r\n}\r\n.google-plus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgb(221, 75, 57) !important;\r\n}\r\n.facebook[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 255) !important;\r\n    background-color: rgb(75, 110, 168) !important;\r\n}\r\n.twitter[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 255) !important;\r\n    background-color: rgb(79, 213, 248) !important;\r\n}\r\n.google-plus[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 255) !important;\r\n    background-color: rgb(221, 75, 57) !important;\r\n}\r\n@media (min-width: 768px) {\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        display: block;\r\n        width: 100%;\r\n        height: 120px;\r\n        padding: 0px;\r\n    }\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > time[_ngcontent-%COMP%], .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]  {\r\n        display: inline-block;\r\n    }\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > time[_ngcontent-%COMP%], .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n        width: 120px;\r\n        float: left;\r\n    }\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%] {\r\n        background-color: rgb(245, 245, 245);\r\n        overflow: hidden;\r\n    }\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > time[_ngcontent-%COMP%], .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n        width: 120px;\r\n        height: 120px;\r\n        padding: 0px;\r\n        margin: 0px;\r\n    }\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        height: 120px;\r\n        text-align: left;\r\n        padding-right: 40px;\r\n    }\t\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%], .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > .desc[_ngcontent-%COMP%] {\r\n        padding: 0px 10px;\r\n    }\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        left: 0px;\r\n        bottom: 0px;\r\n    }\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .social[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 0px;\r\n        right: 0px;\r\n        display: block;\r\n        width: 40px;\r\n    }\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .social[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n        border-left: 1px solid rgb(230, 230, 230);\r\n    }\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .social[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\t\t\t\r\n        display: block;\r\n        padding: 0px;\r\n    }\r\n    .event-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .social[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 40px;\r\n        padding: 10px 0px 9px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdXNlci91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTttRkFDbUY7QUFDbkY7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4QztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2Qyw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7O0lBRUksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBOztJQUVJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7QUFDQTs7O0lBR0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsNkNBQTZDO0FBQ2pEO0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsV0FBVztRQUNYLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0lBQ0E7O1FBRUkscUJBQXFCO0lBQ3pCO0lBQ0E7O1FBRUksWUFBWTtRQUNaLFdBQVc7SUFDZjtJQUNBO1FBQ0ksb0NBQW9DO1FBQ3BDLGdCQUFnQjtJQUNwQjtJQUNBOztRQUVJLFlBQVk7UUFDWixhQUFhO1FBQ2IsWUFBWTtRQUNaLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7O1FBRUksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixVQUFVO1FBQ1YsY0FBYztRQUNkLFdBQVc7SUFDZjtJQUNBO1FBQ0kseUNBQXlDO0lBQzdDO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksY0FBYztRQUNkLFdBQVc7UUFDWCxxQkFBcUI7SUFDekI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3VzZXIvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IHVybChcImh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MTAwLDMwMCw0MDAsNzAwLDkwMCw0MDBpdGFsaWNcIik7XHJcbkBpbXBvcnQgdXJsKFwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4xLjAvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIik7ICovXHJcbi5ib2R5LXVzZXJzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDYwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xyXG59XHJcblxyXG4uZXZlbnQtbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiKDUxLCA1MSwgNTEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSg1MSwgNTEsIDUxLCAwLjcpO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IHRpbWUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgNDQsIDEwMik7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGk6bnRoLWNoaWxkKGV2ZW4pID4gdGltZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCA4MiwgMTY3KTtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gdGltZSA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gdGltZSA+IC5kYXkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDU2cHQ7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSB0aW1lID4gLm1vbnRoIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyNHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTdwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiAuZGVzYyB7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gdWwsXHJcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsID4gbGksXHJcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBwYWRkaW5nOiAzcHggMHB4O1xyXG59XHJcbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsID4gbGkgPiBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogcmdiKDMwLCAzMCwgMzApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59IFxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGkgeyAgICBcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4uZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsID4gbGkgPiBhIHtcclxuICAgIHBhZGRpbmc6IDNweCAwcHg7XHJcbn0gXHJcbi5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyA+IHVsID4gbGk6aG92ZXIsXHJcbi5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDMwLCAzMCwgMzApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xyXG59XHJcbi5mYWNlYm9vayBhLFxyXG4udHdpdHRlciBhLFxyXG4uZ29vZ2xlLXBsdXMgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHJnYig3NSwgMTEwLCAxNjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuLnR3aXR0ZXIgYSB7XHJcbiAgICBjb2xvcjogcmdiKDc5LCAyMTMsIDI0OCkgIWltcG9ydGFudDtcclxufVxyXG4uZ29vZ2xlLXBsdXMgYSB7XHJcbiAgICBjb2xvcjogcmdiKDIyMSwgNzUsIDU3KSAhaW1wb3J0YW50O1xyXG59XHJcbi5mYWNlYm9vazpob3ZlciBhIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgMTEwLCAxNjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuLnR3aXR0ZXI6aG92ZXIgYSB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzksIDIxMywgMjQ4KSAhaW1wb3J0YW50O1xyXG59XHJcbi5nb29nbGUtcGx1czpob3ZlciBhIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDc1LCA1NykgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZXZlbnQtbGlzdCA+IGxpIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZXZlbnQtbGlzdCA+IGxpID4gdGltZSxcclxuICAgIC5ldmVudC1saXN0ID4gbGkgPiBpbWcgIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuZXZlbnQtbGlzdCA+IGxpID4gdGltZSxcclxuICAgIC5ldmVudC1saXN0ID4gbGkgPiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuZXZlbnQtbGlzdCA+IGxpID4gdGltZSxcclxuICAgIC5ldmVudC1saXN0ID4gbGkgPiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC5ldmVudC1saXN0ID4gbGkgPiAuaW5mbyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgfVx0XHJcbiAgICAuZXZlbnQtbGlzdCA+IGxpID4gLmluZm8gPiAudGl0bGUsIFxyXG4gICAgLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gLmRlc2Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmV2ZW50LWxpc3QgPiBsaSA+IC5pbmZvID4gdWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuZXZlbnQtbGlzdCA+IGxpID4gLnNvY2lhbCA+IHVsIHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIH1cclxuICAgIC5ldmVudC1saXN0ID4gbGkgPiAuc29jaWFsID4gdWwgPiBsaSB7XHRcdFx0XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLmV2ZW50LWxpc3QgPiBsaSA+IC5zb2NpYWwgPiB1bCA+IGxpID4gYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggOXB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-list',
                templateUrl: './users-list.component.html',
                styleUrls: ['./users-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_servicees_sign_service__WEBPACK_IMPORTED_MODULE_2__["SignService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/random.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/random.directive.ts ***!
  \************************************************/
/*! exports provided: RandomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomDirective", function() { return RandomDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicees_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicees/trivya-svc.service */ "./src/app/servicees/trivya-svc.service.ts");



class RandomDirective {
    constructor(elRef, wordsSV) {
        this.elRef = elRef;
        this.wordsSV = wordsSV;
        this.sum = 0;
        this.HebWords = [];
        this.englishWords = [];
        this.WordsArr = [];
        this.wordHeb = '';
        this.getwordHeb = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getHebWords = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getenglishWords = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getWord = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getRandInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getRand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.randArr = [1, 2, 3, 4, 5, 6, 7];
        this.el = elRef.nativeElement;
    }
    rnd() {
        console.log('clicked');
        this.rand();
        this.getWord.emit(this.wordHeb);
        this.getRand.emit(this.randArr);
    }
    rand() {
        for (let i = 0; i < this.randArr.length; i++) {
            let rand = Math.floor(Math.random() * Math.floor(40));
            this.randArr[i] = rand;
        }
        let rand4 = Math.floor(Math.random() * Math.floor(4));
        this.randArr[5] = rand4;
        console.log(this.wordHeb);
        let HebIndex = this.wordsSV.HebWords.indexOf(this.wordHeb);
        this.randArr[6] = HebIndex;
    }
    ngOnInit() {
        console.log("init", this.wordHeb);
        this.wordsSV.wordHeb = this.wordHeb;
    }
}
RandomDirective.ɵfac = function RandomDirective_Factory(t) { return new (t || RandomDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicees_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"])); };
RandomDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RandomDirective, selectors: [["", "Random", ""]], hostBindings: function RandomDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RandomDirective_click_HostBindingHandler() { return ctx.rnd(); });
    } }, inputs: { HebWords: "HebWords", englishWords: "englishWords", WordsArr: "WordsArr", wordHeb: "wordHeb", arrLange: "arrLange" }, outputs: { getwordHeb: "getwordHeb", getHebWords: "getHebWords", getenglishWords: "getenglishWords", getWord: "getWord", getRandInit: "getRandInit", getRand: "getRand" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RandomDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[Random]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _servicees_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"] }]; }, { HebWords: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], englishWords: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], WordsArr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], wordHeb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrLange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], getwordHeb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getHebWords: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getenglishWords: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getWord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getRandInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getRand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/interfacees/ful-word.ts":
/*!*****************************************!*\
  !*** ./src/app/interfacees/ful-word.ts ***!
  \*****************************************/
/*! exports provided: FulWord, Person, Word, CureentGame, Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FulWord", function() { return FulWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return Word; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CureentGame", function() { return CureentGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
class FulWord {
}
class Person {
    constructor(obj = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }
    }
}
class Word {
}
class CureentGame {
}
class Cell {
}


/***/ }),

/***/ "./src/app/interfacees/game.ts":
/*!*************************************!*\
  !*** ./src/app/interfacees/game.ts ***!
  \*************************************/
/*! exports provided: Score, Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
class Score {
    constructor(obj = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }
    }
}
class Game {
    constructor(obj = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }
    }
}


/***/ }),

/***/ "./src/app/interfacees/tetris.ts":
/*!***************************************!*\
  !*** ./src/app/interfacees/tetris.ts ***!
  \***************************************/
/*! exports provided: COLS, ROWS, BLOCK_SIZE, LINES_PER_LEVEL, COLORS, SHAPES, KEY, POINTS, LEVEL, Piece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLS", function() { return COLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROWS", function() { return ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_SIZE", function() { return BLOCK_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINES_PER_LEVEL", function() { return LINES_PER_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPES", function() { return SHAPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTS", function() { return POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL", function() { return LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Piece", function() { return Piece; });
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const LINES_PER_LEVEL = 10;
const COLORS = [
    'none',
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
];
const SHAPES = [
    [],
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
    [[0, 0, 3], [3, 3, 3], [0, 0, 0]],
    [[4, 4], [4, 4]],
    [[0, 5, 5], [5, 5, 0], [0, 0, 0]],
    [[0, 6, 0], [6, 6, 6], [0, 0, 0]],
    [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
];
class KEY {
}
KEY.ESC = 27;
KEY.SPACE = 32;
KEY.LEFT = 37;
KEY.UP = 38;
KEY.RIGHT = 39;
KEY.DOWN = 40;
class POINTS {
}
POINTS.SINGLE = 100;
POINTS.DOUBLE = 300;
POINTS.TRIPLE = 500;
POINTS.TETRIS = 800;
POINTS.SOFT_DROP = 1;
POINTS.HARD_DROP = 2;
class LEVEL {
}
LEVEL[0] = 800;
LEVEL[1] = 720;
LEVEL[2] = 630;
LEVEL[3] = 550;
LEVEL[4] = 470;
LEVEL[5] = 380;
LEVEL[6] = 300;
LEVEL[7] = 220;
LEVEL[8] = 130;
LEVEL[9] = 100;
LEVEL[10] = 80;
LEVEL[11] = 80;
LEVEL[12] = 80;
LEVEL[13] = 70;
LEVEL[14] = 70;
LEVEL[15] = 70;
LEVEL[16] = 50;
LEVEL[17] = 50;
LEVEL[18] = 50;
LEVEL[19] = 30;
LEVEL[20] = 30;
class Piece {
    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
    }
    spawn() {
        const typeId = this.randomizeTetrominoType(COLORS.length - 1);
        this.shape = SHAPES[typeId];
        this.color = COLORS[typeId];
        this.x = typeId === 4 ? 4 : 3;
        this.y = 0;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }
    drawNext(ctxNext) {
        ctxNext.clearRect(0, 0, ctxNext.canvas.width, ctxNext.canvas.height);
        ctxNext.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    ctxNext.fillRect(x, y, 1, 1);
                }
            });
        });
    }
    move(p) {
        this.x = p.x;
        this.y = p.y;
        this.shape = p.shape;
    }
    randomizeTetrominoType(noOfTypes) {
        return Math.floor(Math.random() * noOfTypes + 1);
    }
}


/***/ }),

/***/ "./src/app/interfacees/user-info-model.ts":
/*!************************************************!*\
  !*** ./src/app/interfacees/user-info-model.ts ***!
  \************************************************/
/*! exports provided: UserInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoModel", function() { return UserInfoModel; });
class UserInfoModel {
    constructor(obj = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }
    }
}


/***/ }),

/***/ "./src/app/servicees/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicees/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AuthService {
    constructor(http, 
    // public afAuth: AngularFireAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        // this.afAuth.authState.subscribe(user => {
        //   if (user) {
        //     this.userData = user;
        //     console.log(this.userData);
        this.http = http;
        this.router = router;
        this.ngZone = ngZone;
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
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Access', '*');
        this.http.get('http://localhost:3000/auth/google').subscribe(res => console.log(res));
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
    SendVerificationMail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // return (await this.afAuth.currentUser).sendEmailVerification()
            // .then(() => {
            //   this.router.navigate(['verify-email-address']);
            // })
        });
    }
    FacebookAuth() { }
    // Reset Forggot password
    ForgotPassword(passwordResetEmail) {
        // return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
        // .then(() => {
        //   window.alert('Password reset email sent, check your inbox.');
        // }).catch((error) => {
        //   window.alert(error)
        // })
    }
    // Returns true when user is looged in and email is verified
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user) {
        // const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const userData = { guid: "D21ds12x",
            customerUid: "cust2dsa12dsa",
            first_name: "John",
            last_name: "Doe",
            email: "email@email.com",
            zipcode: "10283",
            password: "Idasn2x2#",
            pothoUrl: "assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png",
            scores: [],
            sum_score: 0
        };
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
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servicees/game.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicees/game.service.ts ***!
  \*******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class GameService {
    constructor(http, rout) {
        this.http = http;
        this.rout = rout;
        this.serviceErrors = {};
        this.games_listn = { games: [{ name: "fffff" }] };
        this.games_list = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.games_listn.games);
        this.searc_list = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.showProgress = false;
        this.api_url = 'http://localhost:3000/games/';
    }
    create_game(forminValid, formValue, file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (forminValid == true) {
                return;
            }
            else {
                this.user_game = JSON.parse(localStorage.getItem('user'));
                if (file.data != null) {
                    this.uploadFile(file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
                        return event = Object.assign(formValue, { user_email: this.user_game.email }, { photo_url: event.filename });
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(event => this.sendPost(event))).subscribe(res => {
                        console.log(res);
                    });
                }
                else {
                    const event = Object.assign(formValue, { user_email: this.user_game.email }, { photo_url: "dafult42c1bd30-2828-4d33-8431-4578c66205c6.jpg" });
                    this.sendPost(event);
                }
                console.log(forminValid, formValue, file);
            }
        });
    }
    sendPost(data) {
        this.http.post(this.api_url, data).subscribe((res) => {
            console.log(data);
            this.getGames();
            this.rout.navigate(['admin/games']);
        }, error => {
            this.serviceErrors = error.error.error;
            console.log(this.serviceErrors);
            // this.router.navigate(['card-user']);
            return window.alert(`${this.serviceErrors}`);
        });
    }
    uploadFile(file) {
        const formData = new FormData();
        const new_file = { uploadfile: file.data };
        formData.append('uploadfile', file.data);
        file.inProgress = true;
        let pothoUrl = '';
        return this.uploadHeaderImage(formData);
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
    uploadHeaderImage(new_file) {
        return this.http.post('http://localhost:3000/games/upload', new_file);
    }
    getGames() {
        this.getImage();
        this.user_game = JSON.parse(localStorage.getItem('user'));
        this.http.get(this.api_url).subscribe(res => {
            console.log(res);
            this.games_list.next(res);
        }, error => {
            return window.confirm(`${error.message}`);
        });
    }
    getGamesByS(term) {
        this.user_game = JSON.parse(localStorage.getItem('user'));
        const options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('startsWith', term);
        console.log(options);
        this.http.get(this.api_url + 'search', { params: options }).subscribe(res => {
            console.log(res);
            this.games_list.next(res);
        }, error => {
            return window.confirm(`${error.message}`);
        });
    }
    delate_game(game_id) {
        console.log(game_id);
        this.http.delete(this.api_url + game_id).subscribe(res => {
            console.log(res);
            this.getGames();
        });
    }
    search(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.searc_list.next(value);
            this.getGamesSearc();
        });
    }
    getGamesSearc() {
        const obsNoCharacters = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        this.games = this.searc_list;
        this.games.subscribe(res => {
            this.getGamesByS(res);
        });
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
    getImage() {
        //  this.http.get(this.api_url+'image/'+ 'image(7)cdf820b9-fdbd-4171-8a0b-d3e6de3cca8f.png').subscribe(res=>console.log(res)
        // );
    }
    indexAll(page, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('page', String(page));
        params = params.append('limit', String(limit));
        return this.http.get('/api/blog-entries', { params });
    }
    indexByUser(userId, page, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('page', String(page));
        params = params.append('limit', String(limit));
        return this.http.get('/api/blog-entries/user/' + String(userId), { params });
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servicees/sign.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicees/sign.service.ts ***!
  \*******************************************/
/*! exports provided: SignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignService", function() { return SignService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfacees_user_info_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfacees/user-info-model */ "./src/app/interfacees/user-info-model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


// import { AngularFireAuth } from '@angular/fire/auth';




class SignService {
    constructor(http, router, route, 
    // public afAuth: AngularFireAuth,
    ngZone) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.ngZone = ngZone;
        this.noregistered = true;
        this.registered = false;
        this.registeredBh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.registered);
        this.submitted = false;
        this.serviceErrors = {};
        this.user_game = new _interfacees_user_info_model__WEBPACK_IMPORTED_MODULE_1__["UserInfoModel"]({ guid: "",
            customerUid: "",
            first_name: "לא התבצעה כניסה",
            last_name: "",
            email: "",
            zipcode: "",
            password: "",
            pothoUrl: "assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png",
            scores: [],
            sum_score: 0
        });
        this.user_game_bh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.user_game);
        this.users_listn = { users: [] };
        this.users_list = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.users_listn);
        this.api_url = 'http://localhost:3000/users/';
        const user = JSON.parse(localStorage.getItem('user'));
        if (user != null) {
            this.registered = true;
            this.registeredBh.next(this.registered);
        }
    }
    SignIn(forminvalid, formValue) {
        if (forminvalid) {
            console.log(forminvalid);
            return;
        }
        else {
            console.log(formValue);
            let data = Object.assign({ password: formValue.password, email: formValue.email });
            const qu = `login?email=${data.email}&password=${data.password}`;
            this.http.get(this.api_url + qu).subscribe((res) => {
                if (res) {
                    console.log(res);
                    localStorage.setItem('user', JSON.stringify(new _interfacees_user_info_model__WEBPACK_IMPORTED_MODULE_1__["UserInfoModel"](res)));
                    this.user_game_bh.next(this.user_game);
                    this.registered = true;
                    this.registeredBh.next(this.registered);
                    this.ngZone.run(() => {
                        this.router.navigate(['card-user']);
                    });
                }
                else {
                    return window.alert('משתמש לא קיים במערכת !  בדוק אם כל הנתונים שהכנסת נכונים או הרשם עכשיו');
                }
            }, error => {
                return window.alert(`${error.message}`);
            });
        }
    }
    registerUser(forminValid, formValue) {
        console.log(forminValid, formValue);
        this.submitted = true;
        if (forminValid == true) {
            return;
        }
        else {
            let data = Object.assign(formValue, { pothoUrl: "" }, { scores: [] });
            this.http.post('http://localhost:3000/users', data).subscribe((res) => {
                console.log(res);
                this.user_game = new _interfacees_user_info_model__WEBPACK_IMPORTED_MODULE_1__["UserInfoModel"](res);
                localStorage.setItem('user', JSON.stringify(this.user_game));
                this.router.navigate(['card-user']);
            }, error => {
                this.serviceErrors = error.error.error;
                console.log(this.serviceErrors);
                // this.router.navigate(['card-user']);
                return window.alert(`${this.serviceErrors}`);
            });
        }
    }
    uploadFile(file) {
        const formData = new FormData();
        const new_file = { uploadfile: file.data };
        formData.append('uploadfile', file.data);
        file.inProgress = true;
        console.log(formData, new_file);
        this.uploadHeaderImage(formData)
            // .pipe(
            //   map((event) => {
            //     switch (event.type) {
            //       case HttpEventType.UploadProgress:
            //         file.progress = Math.round(event.loaded * 100 / event.total);
            //         break;
            //       case HttpEventType.Response:
            //         return event;
            //     }
            //   }),
            //   catchError((error: HttpErrorResponse) => {
            //     file.inProgress = false;
            //     return of('Upload failed');
            //   }))
            .subscribe((res) => {
            if (typeof (res) === 'object') {
                this.user_game = JSON.parse(localStorage.getItem('user'));
                console.log(res);
                this.user_game.pothoUrl = res.filename;
            }
        });
    }
    uploadHeaderImage(new_file) {
        return this.http.post('http://localhost:3000/games/upload', new_file);
    }
    updateSum(up_sum, game_name) {
        this.user_game = JSON.parse(localStorage.getItem('user'));
        console.log(this.user_game, up_sum);
        // this.user_game.sum_score = 0;
        if (up_sum != undefined) {
            let ind = this.user_game.scores.findIndex(el => el.game_name == game_name);
            console.log(ind);
            if (ind >= 0) {
                console.log('ind here');
                this.user_game.sum_score += up_sum;
                this.user_game['scores'][ind].user_score += up_sum;
            }
            localStorage.setItem('user', JSON.stringify(this.user_game));
            this.user_game_bh.next(this.user_game);
        }
    }
    getUsers() {
        this.http.get(this.api_url).subscribe((data) => {
            console.log(data);
            this.users_list.next(data);
        }, error => {
            return window.confirm(`${error.message}`);
        });
    }
    isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }
    SignOut() {
        this.user_game = JSON.parse(localStorage.getItem('user'));
        let data = Object.assign({ scores: this.user_game['scores'], sum_score: this.user_game.sum_score });
        this.http.put(this.api_url + this.user_game.email, data).subscribe((res) => {
            console.log(res);
        }, error => {
            this.serviceErrors = error.error.error;
        });
        localStorage.removeItem('user');
        this.registered = false;
        this.user_game = new _interfacees_user_info_model__WEBPACK_IMPORTED_MODULE_1__["UserInfoModel"]({ guid: "",
            customerUid: "",
            first_name: "לא התבצעה כניסה",
            last_name: "",
            email: "",
            zipcode: "",
            password: "",
            pothoUrl: "assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png",
            scores: [],
            sum_score: 0
        });
        this.user_game_bh.next(this.user_game);
        this.registeredBh.next(this.registered);
        this.router.navigate(['home']);
    }
}
SignService.ɵfac = function SignService_Factory(t) { return new (t || SignService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
SignService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignService, factory: SignService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servicees/socketio.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicees/socketio.service.ts ***!
  \***********************************************/
/*! exports provided: SocketioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketioService", function() { return SocketioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class SocketioService {
    constructor() {
        // this.messages = <Subject<any>>this
        //   .connect()
        // .map((response: any): any => {
        //   return response;
        // })
    }
    ngOnInit() {
        // if (!this.socket) {
        //   this.socket = io("http://localhost:3001", {
        //     reconnection: false
        // })
        console.log(this.socket);
        // }
    }
    ngAfterViewInit() {
        // this.context = this.gameCanvas.nativeElement.getContext('2d');
        // this.context.fillRect(20, 20, 20, 20);
        // this.socket.on('position', position=> {
        //   this.context.clearRect(
        //     0,
        //     0,
        //     this.gameCanvas.nativeElement.width,
        //     this.gameCanvas.nativeElement.height,
        //   )
        //   this.context.fillRect(position.x ,position.y,20,20);
        // })
    }
    move(direction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.socket.emit());
            yield this.socket.emit('move', direction, function (test) {
                console.log("acckk received");
            });
        });
    }
}
SocketioService.ɵfac = function SocketioService_Factory(t) { return new (t || SocketioService)(); };
SocketioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SocketioService, factory: SocketioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocketioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/servicees/sudoku.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicees/sudoku.service.ts ***!
  \*********************************************/
/*! exports provided: SudokuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuService", function() { return SudokuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfacees_ful_word__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfacees/ful-word */ "./src/app/interfacees/ful-word.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class SudokuService {
    constructor() {
        this.updated = false;
        this.sudoku_long = [];
        //  [[{ primary:true,  num:5,   updated:false,  input:false },{ primary:true,  num:3,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true } ,{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:7,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true }],
        // [{ primary:true,  num:6,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:1,   updated:false,  input:false },{ primary:true,  num:9,   updated:false,  input:false },{ primary:true,  num:5,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true }],
        // [{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:9,   updated:false,  input:false },{ primary:true,  num:8,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:6,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true }],
        // [{ primary:true,  num:8,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:6,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:3,   updated:false,  input:false }],
        // [{ primary:true,  num:4,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:8,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:3,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:1,   updated:false,  input:false }],
        // [{ primary:true,  num:7,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:2,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:6,   updated:false,  input:false }],
        // [{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:6,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:2,   updated:false,  input:false },{ primary:true,  num:8,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true }],
        // [{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:4,   updated:false,  input:false },{ primary:true,  num:1,   updated:false,  input:false },{ primary:true,  num:9,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:5,   updated:false,  input:false }],
        // [{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:8,   updated:false,  input:false },{ primary:false,  num:"",   updated:false,  input:true },{ primary:false,  num:"",   updated:false,  input:true },{ primary:true,  num:7,   updated:false,  input:false },{ primary:true,  num:9,   updated:false,  input:false }]]
        this.sudoku_m = [[5, 3, "", "", 7, "", "", "", ""],
            [6, "", "", 1, 9, 5, "", "", ""],
            ["", 9, 8, "", "", "", "", 6, ""],
            [8, "", "", "", 6, "", "", "", 3],
            [4, "", "", 8, "", 3, "", "", 1],
            [7, "", "", "", 2, "", "", "", 6],
            ["", 6, "", "", "", "", 2, 8, ""],
            ["", "", "", 4, 1, 9, "", "", 5],
            ["", "", "", "", 8, "", "", 7, 9]];
        this.sudoku_basic = [[0, 5, 6, 1, 4, 7, 3, 8, 2]];
        this.sudoku_check = [];
        this.cells_checkes = [];
        this.current_game = new _interfacees_ful_word__WEBPACK_IMPORTED_MODULE_1__["CureentGame"]();
        this.current_game_bh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.sudoku_long);
        this.sudoku_long = this.create_table();
        this.current_game_bh.next(this.sudoku_long);
    }
    ngOnInit() {
    }
    updateCell(ev, e, i) {
        console.log(ev, e, i);
        let cell = this.sudoku_long[e][i];
        cell.num = parseInt(ev);
        cell.updated = true;
        cell.input = false;
        // this.sudoku_long[e][i] = cell;
        this.current_game_bh.next(this.sudoku_long);
    }
    updateEdit(e, i) {
        let cell = new _interfacees_ful_word__WEBPACK_IMPORTED_MODULE_1__["Cell"]();
        cell = this.sudoku_long[e][i];
        cell.input = true;
        // this.cell.place_holder = this.cell.num;
        // this.cell.num = "";
        this.sudoku_long[e][i] = cell;
        this.current_game_bh.next(this.sudoku_long);
    }
    create_table() {
        let s = 0;
        let c = 0;
        let araay_9 = [];
        const sudoku_table = [];
        //  for (let i = 0; i < 9; i++) {
        //    for (let j = 0; j < 9; j++) {
        //     s++;
        //     s%9===0 ?  c = 9 :c = s%9
        //     let reg = Math.ceil((c)/3)+((Math.ceil((i+1)/3)-1)*3);
        //     let cell = new Cell();
        //     cell.col = j;
        //     cell.row = i;
        //     cell.num = this.sudoku_m[i][j]
        //     cell.reg = reg;
        //       cell.primary = false;
        //       cell.updated = false;
        //       // cell.num = "";
        //       cell.input= true;
        //       cell.wrong = false;
        //       araay_9.push(cell)
        //    }
        //    sudoku_table.push(araay_9);
        //    araay_9 = []
        //  }
        let nineArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let k = 0; k < nineArray.length; k++) {
            const element = nineArray[k];
            for (let i = 0; i < 9; i++) {
                const nine = Math.ceil(Math.random() * Math.floor(9));
                const element = sudoku_table[i][nine - 1];
                console.log(nineArray[k], i, nine - 1, element['reg']);
                let sum = 0;
                if (element.num == "") {
                    const checkB = this.get_nyne_num(sudoku_table, nineArray[k], i, nine - 1, element['reg']);
                    if (checkB) {
                        element.primary = true;
                        element.updated = false;
                        element.input = false;
                        element.num = nineArray[k];
                    }
                    else {
                        i--;
                    }
                }
            }
        }
        //  let sudoku_table2 = this.sudokoCheck(sudoku_table)
        //  for (let i = 0; i < sudoku_table.length; i++) {
        //   const nine = Math.ceil(Math.random() * Math.floor(9));
        //   const araay_3 = this.get_three_num()
        //   let s = 0;
        //   for (let j = 0; j < 9; j++) {
        //         const element = sudoku_table[i][j]
        //         const checkB = this.get_nyne_num(sudoku_table,nine,i,j,element['reg']);
        //         console.log(checkB,element);
        //           if(checkB){
        //             console.log("true to compare",sudoku_table,nine,i,j,element['reg']);
        //             element.primary = true;
        //             element.updated = false;
        //             element.num = nine;
        //             element.input= false;
        //           }else{
        //             console.log("false to compare",sudoku_table,nine,i,j,element['reg']);
        //             // j--
        //           }
        //    }
        // }
        //  console.log(sudoku_table);
        return sudoku_table;
    }
    get_three_num() {
        const araay_3 = [];
        for (let i = 0; i < 3; i++) {
            const rand9 = Math.floor(Math.random() * Math.floor(9));
            if (!araay_3.includes(rand9)) {
                araay_3.push(rand9);
            }
            else {
                i--;
            }
        }
        return araay_3;
    }
    get_nyne_num(sudoku_table, num, row, col, reg) {
        let check = true;
        for (let i = 0; i < sudoku_table.length; i++) {
            for (let j = 0; j < sudoku_table.length; j++) {
                const element = sudoku_table[i][j];
                if (element["row"] == row || element["col"] == col || element["reg"] == reg) {
                    if (element["num"] == num) {
                        // console.log(element);
                        if (i == row && j == col) {
                            continue;
                        }
                        else {
                            return false;
                        }
                    }
                }
                ;
            }
        }
        return true;
    }
    sudokoCheck(sudoku_table) {
        let s = 0;
        let c = 0;
        let p = sudoku_table.reduce((sum, arr) => {
            arr.forEach(el => {
                sum.push(el);
            });
            return sum;
        }, []);
        console.log(p);
        for (let j = 0; j < p.length; j++) {
            let chek = p.reduce((sum, el) => {
                if (el["row"] == p[j]["row"] || el["reg"] == p[j]["reg"] || el["col"] == p[j]["col"]) {
                    if (el["num"] != 0 && p[j]["num"] == 0) {
                        sum.push(el.num);
                    }
                }
                ;
                return sum;
            }, []);
            let nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            if (chek.length > 0) {
                let chekB = nine.filter((el, i) => {
                    return !chek.includes(el);
                });
                if (chekB.length == 1) {
                    p[j]["num"] = chekB[0];
                    j = (-1);
                }
            }
        }
        let x = 0;
        let w = [];
        //  return p;
        return p.reduce((sum, el, i) => {
            x++;
            w.push(el);
            if (x % 9 === 0) {
                sum.push(w);
                w = [];
            }
            return sum;
        }, []);
    }
    submit_suodoku(sudoku_array) {
        let suucussfull = true;
        // this.cells_checkes = []
        //  const sudoku_check_in = this.sudokoCheck()
        //  console.log(sudoku_check_in,sudoku_array);
        //   for (let i = 0; i < sudoku_check_in.length; i++) {
        //   for (let j = 0; j < sudoku_check_in.length; j++) {
        //     let cell = new Cell();
        //     cell = this.sudoku_long[i][j] 
        //     cell.num= sudoku_check_in[i][j];
        //     sudoku_array[i][j] = cell;
        //     this.sudoku_check.push(sudoku_check_in[i][j]) ;
        //   }
        //   this.cells_checkes.push(this.sudoku_check)
        //   this.sudoku_check = []
        //   }
        //   console.log(this.cells_checkes);
        //   this.current_game_bh.next(sudoku_array)
        //   for (let i = 0; i < sudoku_check_in.length; i++) {
        //     for (let j = 0; j < sudoku_check_in.length; j++) {
        //       if(sudoku_array[i][j].num != sudoku_check_in[i][j] ){
        //         return false;
        //         }
        //     }
        //     }
        for (let i = 0; i < sudoku_array.length; i++) {
            for (let j = 0; j < sudoku_array.length; j++) {
                const element = sudoku_array[i][j];
                const check = this.get_nyne_num(sudoku_array, element['num'], element['row'], element['col'], element['reg']);
                console.log(element, check);
                if (!check) {
                    suucussfull = false;
                    element.wrong = true;
                    this.current_game_bh.next(sudoku_array);
                }
            }
        }
        return suucussfull;
    }
}
SudokuService.ɵfac = function SudokuService_Factory(t) { return new (t || SudokuService)(); };
SudokuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SudokuService, factory: SudokuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SudokuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/servicees/tetris.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicees/tetris.service.ts ***!
  \*********************************************/
/*! exports provided: TetrisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrisService", function() { return TetrisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfacees/tetris */ "./src/app/interfacees/tetris.ts");



class TetrisService {
    constructor() { }
    valid(p, board) {
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = p.x + dx;
                let y = p.y + dy;
                return (this.isEmpty(value) ||
                    (this.insideWalls(x) &&
                        this.aboveFloor(y) &&
                        this.notOccupied(board, x, y)));
            });
        });
    }
    isEmpty(value) {
        return value === 0;
    }
    insideWalls(x) {
        return x >= 0 && x < _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["COLS"];
    }
    aboveFloor(y) {
        return y <= _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["ROWS"];
    }
    notOccupied(board, x, y) {
        return board[y] && board[y][x] === 0;
    }
    rotate(piece) {
        let p = JSON.parse(JSON.stringify(piece));
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
            }
        }
        p.shape.forEach(row => row.reverse());
        return p;
    }
    getLinesClearedPoints(lines, level) {
        const lineClearPoints = lines === 1
            ? _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["POINTS"].SINGLE
            : lines === 2
                ? _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["POINTS"].DOUBLE
                : lines === 3
                    ? _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["POINTS"].TRIPLE
                    : lines === 4
                        ? _interfacees_tetris__WEBPACK_IMPORTED_MODULE_1__["POINTS"].TETRIS
                        : 0;
        return (level + 1) * lineClearPoints;
    }
}
TetrisService.ɵfac = function TetrisService_Factory(t) { return new (t || TetrisService)(); };
TetrisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TetrisService, factory: TetrisService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TetrisService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/servicees/trivya-svc.service.ts":
/*!*************************************************!*\
  !*** ./src/app/servicees/trivya-svc.service.ts ***!
  \*************************************************/
/*! exports provided: TrivyaSvcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrivyaSvcService", function() { return TrivyaSvcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfacees_ful_word__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfacees/ful-word */ "./src/app/interfacees/ful-word.ts");
/* harmony import */ var _interfacees_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfacees/game */ "./src/app/interfacees/game.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _sign_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign.service */ "./src/app/servicees/sign.service.ts");







class TrivyaSvcService {
    constructor(myHttp, signSvc) {
        this.myHttp = myHttp;
        this.signSvc = signSvc;
        this.urlsJeson = {
            jsonA: "https://raw.githubusercontent.com/didi3762/ajax/master/ajax4.json",
        };
        this.current_game = new _interfacees_ful_word__WEBPACK_IMPORTED_MODULE_2__["CureentGame"]();
        this.current_game_bh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.current_game);
        this.trivya_game = new _interfacees_game__WEBPACK_IMPORTED_MODULE_3__["Score"]({ game_name: 'טרוייה', user_score: 0 });
        this.HebWords = [];
        this.englishWords = [];
        this.wordsArr = [];
        this.randArr = [1, 2, 3, 4, 5, 6];
        this.current_user = JSON.parse(localStorage.getItem('user'));
        let find = this.current_user.scores.find(el => el.game_name == this.trivya_game.game_name);
        console.log(this.current_user);
        if (find) {
            console.log("continue");
        }
        else {
            console.log('push');
            this.current_user.scores.push(this.trivya_game);
            localStorage.setItem('user', JSON.stringify(this.current_user));
        }
        console.log(this.wordsArr, this.randArr, this.HebWords);
        this.httpGet(this.urlsJeson.jsonA)
            .subscribe(result => {
            this.fullResponse = result;
            this.words = this.fullResponse.words;
            this.HebWords = this.words[0].HebWords;
            this.englishWords = this.words[0].englishWords;
            this.wordsSum = this.fullResponse.persons[0].score;
            this.rand();
            this.addRand(this.randArr);
        });
    }
    httpGet(url) {
        return this.myHttp.get(url);
    }
    rand() {
        for (let i = 0; i < this.randArr.length; i++) {
            let rand = Math.floor(Math.random() * Math.floor(40));
            this.randArr[i] = rand;
        }
        let rand4 = Math.floor(Math.random() * Math.floor(4));
        this.randArr[5] = rand4;
    }
    addRand(event) {
        console.log(event);
        let engIndex = this.englishWords.indexOf(this.wordEng);
        if (this.wordEng == '' || this.wordEng == null) {
            console.log(this.sum);
            this.sum = 0;
        }
        else if (event[6] == engIndex) {
            this.sum++;
            this.cureent_sum = 1;
            // this.wordsSum[event[6]]++
            this.succussful = true;
            this.fail = false;
        }
        else {
            console.log(this.sum);
            this.sum--;
            this.fail = true;
            this.succussful = false;
            this.cureent_sum = -1;
        }
        this.wordEng = this.englishWords[event[0]];
        this.signSvc.updateSum(this.cureent_sum, this.trivya_game.game_name);
        this.current_game.cureent_sum = this.sum;
        this.current_game.cureent_word = this.wordEng;
        this.current_game.cureent_sucusseful = this.succussful;
        this.current_game.cureent_fail = this.fail;
        this.current_game_bh.next(this.current_game);
        this.wordsArr[0] = this.HebWords[event[1]];
        this.wordsArr[1] = this.HebWords[event[2]];
        this.wordsArr[2] = this.HebWords[event[3]];
        this.wordsArr[3] = this.HebWords[event[4]];
        this.wordsArr[event[5]] = this.HebWords[event[0]];
        this.resTex = this.sum.toString();
    }
}
TrivyaSvcService.ɵfac = function TrivyaSvcService_Factory(t) { return new (t || TrivyaSvcService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sign_service__WEBPACK_IMPORTED_MODULE_5__["SignService"])); };
TrivyaSvcService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrivyaSvcService, factory: TrivyaSvcService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrivyaSvcService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _sign_service__WEBPACK_IMPORTED_MODULE_5__["SignService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/guard/admin.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guard/admin.guard.ts ***!
  \*********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AdminGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user == null) {
            this.router.navigate(['home']);
            return window.confirm('אינך רשום עדיין! על מנת לבצע כניסה עליך לבצע כניסה ');
        }
        else if (user.role != 'admin') {
            this.router.navigate(['home']);
            window.confirm('כניסת מנהל בלבד');
            return false;
        }
        return true;
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user == null) {
            this.router.navigate(['home']);
            return window.confirm('אינך רשום עדיין! על מנת לבצע כניסה עליך לבצע כניסה ');
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // SOCKET_ENDPOINT: 'http://localhost:3000',
    firebase: {
        apiKey: "AIzaSyBu7Yu-Go7W3zYjxyYnzQmkRUfj-8mW9MM",
        authDomain: "gameproj-52368.firebaseapp.com",
        databaseURL: "https://gameproj-52368.firebaseio.com",
        projectId: "gameproj-52368",
        storageBucket: "gameproj-52368.appspot.com",
        messagingSenderId: "1015368361132",
        appId: "1:1015368361132:web:566db18e06ea55e979eb09",
        measurementId: "G-SWH9TLBSN9"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stu\Desktop\nodeJs\gameproj\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map