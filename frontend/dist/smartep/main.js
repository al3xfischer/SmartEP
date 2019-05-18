(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <table class=\"shadow-lg p-3 mg-3 bg-white\">\r\n    <thead>\r\n      <th colspan=\"2\">\r\n        <h1>\r\n          Sold Items\r\n        </h1>\r\n      </th>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td colspan=\"2\" class=\"text-center\">\r\n          <h4>\r\n            Revenue: {{revenue}}\r\n          </h4>\r\n          <span>\r\n            Tax: {{taxes}}\r\n          </span>\r\n          <h3>\r\n            Profit: {{profit}}\r\n          </h3>\r\n        </td>\r\n      </tr>\r\n      <tr *ngFor=\"let t of this.items\">\r\n        <td class=\"pic-column\">\r\n          <div id=\"pic-container\">\r\n            <img [src]=\"t.path + '?bearer=' + token\" />\r\n          </div>\r\n        </td>\r\n        <!-- <td>\r\n          <div id=\"text-container\">\r\n            <h3>\r\n              {{t.title}}\r\n            </h3>\r\n            <h5>\r\n              Price: {{t.price}}\r\n            </h5>\r\n            <h6>\r\n              Tax: {{(t.price * 0.13) | roundToTwo}}\r\n            </h6>\r\n          </div>\r\n        </td> -->\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding-top: 5%;\n  padding-bottom: 2%; }\n\ntable {\n  border: 1px solid black;\n  margin: auto; }\n\ntable thead {\n    text-align: center; }\n\ntable thead th {\n      -webkit-column-span: all;\n         -moz-column-span: all;\n              column-span: all; }\n\ntable tr {\n    border: 1px solid black;\n    border-radius: 0.5em; }\n\ntable tr td {\n      border: 1px solid black;\n      min-width: 14em; }\n\ntable tr td h3, table tr td h5, table tr td h6 {\n        margin: auto;\n        display: block; }\n\ntable tr td #text-container {\n        padding: 1em; }\n\ntable tr td #pic-container {\n        width: 20em;\n        margin: auto;\n        padding: 0.5em; }\n\ntable tr td img {\n        width: 100%;\n        border-radius: 0.3em; }\n\n@media only screen and (max-width: 800px) {\n  .container-fluid {\n    padding-top: 10%; } }\n\n@media only screen and (max-width: 450px) {\n  .container-fluid {\n    padding-top: 20%; }\n  .pic-column {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vQzpcXFVzZXJzXFxBbGV4XFxEb2N1bWVudHNcXGZoXFw0X3NlbWVzdGVyXFxzZWN1cml0eVxcU21hcnRFUFxcZnJvbnRlbmQvc3JjXFxhcHBcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx1QkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUZoQjtJQUtRLGtCQUFrQixFQUFBOztBQUwxQjtNQVFZLHdCQUFnQjtTQUFoQixxQkFBZ0I7Y0FBaEIsZ0JBQWdCLEVBQUE7O0FBUjVCO0lBYVEsdUJBQXVCO0lBQ3ZCLG9CQUFvQixFQUFBOztBQWQ1QjtNQWlCWSx1QkFBdUI7TUFDdkIsZUFBZSxFQUFBOztBQWxCM0I7UUFxQmdCLFlBQVk7UUFDWixjQUFjLEVBQUE7O0FBdEI5QjtRQTBCZ0IsWUFBWSxFQUFBOztBQTFCNUI7UUE4QmdCLFdBQVc7UUFDWCxZQUFZO1FBQ1osY0FBYyxFQUFBOztBQWhDOUI7UUFvQ2dCLFdBQVc7UUFDWCxvQkFBb0IsRUFBQTs7QUFNcEM7RUFDSTtJQUNJLGdCQUFnQixFQUFBLEVBQ25COztBQUdMO0VBQ0k7SUFDSSxnQkFBZ0IsRUFBQTtFQUdwQjtJQUNJLGFBQWEsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICB0aGVhZHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHRoe1xyXG4gICAgICAgICAgICBjb2x1bW4tc3BhbjogYWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuXHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE0ZW07XHJcblxyXG4gICAgICAgICAgICBoMyxoNSxoNiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI3RleHQtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjcGljLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMGVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5waWMtY29sdW1ue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(auth) {
        this.auth = auth;
    }
    AdminComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _services_roleguard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/roleguard.service */ "./src/app/services/roleguard.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devices/devices.component */ "./src/app/devices/devices.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'devices',
        component: _devices_devices_component__WEBPACK_IMPORTED_MODULE_7__["DevicesComponent"],
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_4__["AuthguardService"]]
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        canActivate: [_services_roleguard_service__WEBPACK_IMPORTED_MODULE_5__["RoleguardService"]],
        data: {
            expectedRole: 'admin'
        }
    },
    {
        path: '**',
        component: _devices_devices_component__WEBPACK_IMPORTED_MODULE_7__["DevicesComponent"],
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_4__["AuthguardService"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin-top: 5.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBbGV4XFxEb2N1bWVudHNcXGZoXFw0X3NlbWVzdGVyXFxzZWN1cml0eVxcU21hcnRFUFxcZnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDUuNXJlbTtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'smartep';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, getToken, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./devices/devices.component */ "./src/app/devices/devices.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            swipe: { velocity: 0.4, threshold: 20 } // override default settings
        };
        return _this;
    }
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"]));

function getToken() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _devices_devices_component__WEBPACK_IMPORTED_MODULE_13__["DevicesComponent"],
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: getToken
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__["JwtHelperService"],
                {
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                    useClass: MyHammerConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/devices/devices.component.html":
/*!************************************************!*\
  !*** ./src/app/devices/devices.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col align-self-center\">\n      <table mat-table [dataSource]=\"devices\" matSort class=\"mat-elevation-z8 center\">\n        \n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n          <td mat-cell *matCellDef=\"let device\"> {{device.name}} </td>\n        </ng-container>\n        \n        <ng-container matColumnDef=\"actual\">\n          <th mat-header-cell *matHeaderCellDef > Actual value </th>\n          <td mat-cell *matCellDef=\"let device\"> {{device.sensor.value}} </td>\n        </ng-container>\n        \n        <ng-container matColumnDef=\"set\">\n          <th mat-header-cell *matHeaderCellDef > Nominal value </th>\n          <td mat-cell *matCellDef=\"let device\"> {{device.actor.value}} </td>\n        </ng-container>\n        \n        <tr mat-header-row *matHeaderRowDef=\"columnNames\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: columnNames;\"></tr>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/devices/devices.component.scss":
/*!************************************************!*\
  !*** ./src/app/devices/devices.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlcy9DOlxcVXNlcnNcXEFsZXhcXERvY3VtZW50c1xcZmhcXDRfc2VtZXN0ZXJcXHNlY3VyaXR5XFxTbWFydEVQXFxmcm9udGVuZC9zcmNcXGFwcFxcZGV2aWNlc1xcZGV2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RldmljZXMvZGV2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/devices/devices.component.ts":
/*!**********************************************!*\
  !*** ./src/app/devices/devices.component.ts ***!
  \**********************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(deviceService) {
        this.deviceService = deviceService;
        this.ngOnInit.bind(this);
        this.columnNames = ['name', 'actual', 'set'];
    }
    DevicesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deviceService.getDevices()];
                    case 1:
                        data = _a.sent();
                        this.devices = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
                        this.devices.sort = this.sort;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DevicesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"])
    ], DevicesComponent.prototype, "devices", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DevicesComponent.prototype, "columnNames", void 0);
    DevicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-devices',
            template: __webpack_require__(/*! ./devices.component.html */ "./src/app/devices/devices.component.html"),
            styles: [__webpack_require__(/*! ./devices.component.scss */ "./src/app/devices/devices.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <form>\r\n        <div class=\"row justify-content-center\">\r\n          <img alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n        </div>\r\n        <div id=\"form-container\">\r\n          <div class=\"row justify-content-center\">\r\n            <label><b>Username</b></label>\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <input [(ngModel)]='username' name=\"user\" type=\"text\" placeholder=\"Enter Username\" required maxlength=\"30\" />\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <label><b>Password</b></label>\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <input type=\"password\" [(ngModel)]='keyword' name=\"pw\" placeholder=\"Enter Passowrd\" required maxlength=\"100\" />\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <input type=\"submit\" (click)=\"login()\" value=\"Login\" class=\"btn bg-success\" />\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <a [routerLink]=\"['/register']\">Register as a new user</a>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 150px; }\n\nform {\n  border-radius: 1em;\n  text-align: center;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  margin: auto;\n  margin-top: 8%;\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 black;\n  height: 30em;\n  width: 18em; }\n\nform #form-container {\n    margin-top: 20px; }\n\nform .row {\n    margin-top: 0.5em;\n    padding: 3px; }\n\nform input[type=\"text\"], form input[type=\"password\"] {\n    border: 1px solid grey; }\n\nform input[type=\"submit\"] {\n    border-radius: 0.7em;\n    width: 40%; }\n\n@media only screen and (max-width: 800px) {\n  form {\n    width: 20em;\n    margin-top: 20%; }\n    form #form-container {\n      height: 80%; }\n  input[type=\"text\"], input[type=\"password\"] {\n    width: 60%;\n    font-size: 20px; }\n  input[type=\"submit\"] {\n    font-size: 20px; } }\n\n@media only screen and (max-width: 450px) {\n  form {\n    margin-top: 25%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxBbGV4XFxEb2N1bWVudHNcXGZoXFw0X3NlbWVzdGVyXFxzZWN1cml0eVxcU21hcnRFUFxcZnJvbnRlbmQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDhEQUE4RDtFQUM5RCxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQVRmO0lBWVEsZ0JBQWdCLEVBQUE7O0FBWnhCO0lBZ0JRLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7O0FBakJwQjtJQXFCUSxzQkFBc0IsRUFBQTs7QUFyQjlCO0lBeUJRLG9CQUFvQjtJQUNwQixVQUFVLEVBQUE7O0FBSWxCO0VBRUk7SUFDSSxXQUFXO0lBQ1gsZUFBZSxFQUFBO0lBRm5CO01BS1EsV0FBVyxFQUFBO0VBSW5CO0lBQ0ksVUFBVTtJQUNWLGVBQWUsRUFBQTtFQUduQjtJQUNJLGVBQWUsRUFBQSxFQUNsQjs7QUFHTDtFQUNJO0lBQ0ksZUFBZSxFQUFBLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAzMGVtO1xyXG4gICAgd2lkdGg6IDE4ZW07XHJcblxyXG4gICAgI2Zvcm0tY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvd3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXXtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC43ZW07XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxufSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuXHJcbiAgICBmb3Jte1xyXG4gICAgICAgIHdpZHRoOiAyMGVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcclxuXHJcbiAgICAgICAgI2Zvcm0tY29udGFpbmVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXXtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.username = '';
        this.keyword = '';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._authService.login(this.username, this.keyword)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this._router.navigate(['pictures']);
                        }
                        else {
                            alert('Wrong username or password!');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "username", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "keyword", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow mb-2\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/pictures']\">\r\n    <img alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n  </a>\r\n  <div class=\"collapse navbar-collapse\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/pictures']\">Home</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"dropdown d-lg-none float-right\">\r\n    <button type=\"button\" class=\"bg-transparent border-0\" data-toggle=\"dropdown\">\r\n      <i class=\"material-icons\">\r\n        dehaze\r\n      </i>\r\n    </button>\r\n    <div class=\"dropdown-menu bg-dark\">\r\n      <a class=\"dropdown-item nav-link bg-dark text-light\" *ngIf=\"showLogin\" [routerLink]=\"['/login']\">Login</a>\r\n      <a class=\"dropdown-item nav-link bg-dark text-light\" *ngIf=\"!showLogin\" (click)=\"logout()\" [routerLink]=\"['/login']\">Logout</a>\r\n      <a class=\"dropdown-item nav-link bg-dark text-light\" *ngIf=\"showAdmin\" [routerLink]=\"['/admin']\">Admin</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-none d-lg-block\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" *ngIf=\"showLogin\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!showLogin\">\r\n        <a class=\"nav-link\" (click)=\"logout()\" [routerLink]=\"['/login']\">Logout</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"showAdmin\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\nnav a img {\n  width: 50px; }\n\n.material-icons {\n  color: white;\n  font-size: 40px;\n  padding: 0; }\n\n.nav-link {\n  font-size: 18px; }\n\n#amount {\n  border-radius: 100%;\n  background-color: orangered;\n  font-size: 12px;\n  color: black;\n  padding: 4px; }\n\n#amountSpan {\n  position: absolute;\n  text-align: center;\n  padding-left: 1.7em;\n  padding-top: -3em; }\n\n#mobile {\n  visibility: none; }\n\n#cart {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcQWxleFxcRG9jdW1lbnRzXFxmaFxcNF9zZW1lc3Rlclxcc2VjdXJpdHlcXFNtYXJ0RVBcXGZyb250ZW5kL3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdEI7RUFDRyxXQUFXLEVBQUE7O0FBR2Q7RUFDSSxZQUFXO0VBQ1osZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHWjtFQUNHLGVBQWUsRUFBQTs7QUFHbEI7RUFDRyxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0csZ0JBQWdCLEVBQUE7O0FBR25CO0VBQ0csWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbm5hdiBhIGltZ3tcclxuICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29uc3tcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICBmb250LXNpemU6IDQwcHg7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiB9XHJcblxyXG4gLm5hdi1saW5re1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gfVxyXG5cclxuICNhbW91bnR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gfVxyXG5cclxuICNhbW91bnRTcGFue1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxLjdlbTtcclxuICAgICBwYWRkaW5nLXRvcDogLTNlbTtcclxuIH1cclxuXHJcbiAjbW9iaWxle1xyXG4gICAgdmlzaWJpbGl0eTogbm9uZTtcclxuIH1cclxuXHJcbiAjY2FydHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuIH1cclxuXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgLy8gI21vYmlsZXtcclxuICAgLy8gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgLy8gfVxyXG5cclxuICAgLy8gI2Rlc2t0b3B7XHJcbiAgIC8vICAgIC5kZXNrdG9we1xyXG4gICAvLyAgICAgICB2aXNpYmlsaXR5OiBub25lO1xyXG4gICAvLyAgICB9XHJcbiAgIC8vIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_authService) {
        var _this = this;
        this._authService = _authService;
        this.amount = 0;
        this.showLogin = !_authService.isLoggedIn();
        this.showAdmin = _authService.isAdmin();
        this._authService.loggedIn.subscribe(function (loggedIn) {
            _this.showLogin = !loggedIn;
            _this.showAdmin = _this._authService.isAdmin();
        });
    }
    NavbarComponent.prototype.logout = function () {
        this._authService.logout();
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <form (ngSubmit)=\"register()\">\r\n        <div class=\"row justify-content-center\">\r\n          <img alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n        </div>\r\n        <div id=\"form-container\">\r\n          <div class=\"row justify-content-center\">\r\n            <label>Username:</label>\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <input type=\"text\" autocomplete=\"name\" [(ngModel)]='name' name=\"user\" placeholder=\"Username\" />\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <label>Password:</label>\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <input type=\"password\" autocomplete=\"new-password\" [(ngModel)]='phraseOne' name=\"phraseOne\" placeholder=\"Password\" />\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <label>Repeat Password:</label>\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <input type=\"password\" autocomplete=\"new-password\" [(ngModel)]='phraseTwo' name=\"phraseTwo\" placeholder=\"Password\" />\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <input [disabled]=\"disableSubmit()\" class=\"btn bg-success\" type=\"submit\" value=\"Register\" >\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 150px; }\n\nform {\n  border-radius: 1em;\n  text-align: center;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  margin: auto;\n  margin-top: 8%;\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 black;\n  height: 30em;\n  width: 18em; }\n\nform .row {\n    margin-top: 0.2em;\n    padding: 3px; }\n\nform input[type=\"text\"], form input[type=\"password\"] {\n    border: 1px solid grey; }\n\nform input[type=\"submit\"] {\n    border-radius: 0.7em;\n    width: 40%; }\n\nform input[tpye=\"submit\"]:disabled {\n    background-color: red !important;\n    color: black !important; }\n\n@media only screen and (max-width: 800px) {\n  form {\n    width: 20em;\n    margin-top: 20%; }\n    form #form-container {\n      height: 80%; }\n  input[type=\"text\"], input[type=\"password\"] {\n    width: 60%;\n    font-size: 20px; }\n  input[type=\"submit\"] {\n    font-size: 20px; } }\n\n@media only screen and (max-width: 450px) {\n  form {\n    margin-top: 25%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxBbGV4XFxEb2N1bWVudHNcXGZoXFw0X3NlbWVzdGVyXFxzZWN1cml0eVxcU21hcnRFUFxcZnJvbnRlbmQvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDhEQUE4RDtFQUM5RCxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQVRmO0lBWVEsaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTs7QUFicEI7SUFrQlEsc0JBQXNCLEVBQUE7O0FBbEI5QjtJQXNCUSxvQkFBb0I7SUFDcEIsVUFBVSxFQUFBOztBQXZCbEI7SUEyQlEsZ0NBQWdDO0lBQ2hDLHVCQUF1QixFQUFBOztBQUkvQjtFQUVJO0lBQ0ksV0FBVztJQUNYLGVBQWUsRUFBQTtJQUZuQjtNQUtRLFdBQVcsRUFBQTtFQUluQjtJQUNJLFVBQVU7SUFDVixlQUFlLEVBQUE7RUFHbkI7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBR0w7RUFDSTtJQUNJLGVBQWUsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCBibGFjaztcclxuICAgIGhlaWdodDogMzBlbTtcclxuICAgIHdpZHRoOiAxOGVtO1xyXG5cclxuICAgIC5yb3d7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC4yZW07XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJde1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjdlbTtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3RweWU9XCJzdWJtaXRcIl06ZGlzYWJsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IFxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cclxuICAgIGZvcm17XHJcbiAgICAgICAgd2lkdGg6IDIwZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG5cclxuICAgICAgICAjZm9ybS1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJde1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("register");
                        return [4 /*yield*/, this.auth.register(this.name, this.phraseOne)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.router.navigate(["login"]);
                        }
                        else {
                            alert("Username is already taken.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.prototype.disableSubmit = function () {
        return !(this.phraseOne &&
            this.phraseTwo &&
            this.phraseOne === this.phraseTwo &&
            this.name.trim() !== '');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RegisterComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RegisterComponent.prototype, "phraseOne", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RegisterComponent.prototype, "phraseTwo", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper) {
        this.jwtHelper = jwtHelper;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthService.prototype.register = function (name, phrase) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(location.origin + "/api/register", {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': this.getToken()
                            },
                            body: JSON.stringify({ name: name, keyword: phrase })
                        })];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        if (response.status === 200) {
                            return [2 /*return*/, true];
                        }
                        else
                            return [2 /*return*/, false];
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.login = function (name, word) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.jwtHelper.tokenGetter() !== null) {
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        return [4 /*yield*/, fetch(location.origin + "/api/login", {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'Authorization': this.getToken()
                                },
                                body: JSON.stringify({ user: name, pw: word })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        localStorage.setItem('token', data);
                        this.loggedIn.emit(true);
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn.emit(false);
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        if (token) {
            return !this.jwtHelper.isTokenExpired(token);
        }
        else {
            return false;
        }
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.getRole = function () {
        var token = localStorage.getItem('token');
        if (token) {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token).role;
        }
        return null;
    };
    AuthService.prototype.isAdmin = function () {
        return this.getRole() === 'admin';
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardService = /** @class */ (function () {
    function AuthguardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['login']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthguardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/services/device.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/device.service.ts ***!
  \********************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceService = /** @class */ (function () {
    function DeviceService(auth) {
        this.auth = auth;
        this._items = {};
        this._devices = [];
    }
    DeviceService.prototype.getDevices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._devices.length > 0) {
                resolve(_this._devices.slice(0, 20));
            }
            fetch(location.origin + '/api/devices', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: _this.auth.getToken()
                }
            })
                .then(function (res) {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    return null;
                }
            })
                .then(function (data) {
                if (data) {
                    _this._devices = data;
                    resolve(data);
                }
            })
                .catch(function (err) { return console.log(err); });
        });
    };
    DeviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], DeviceService);
    return DeviceService;
}());



/***/ }),

/***/ "./src/app/services/roleguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/roleguard.service.ts ***!
  \***********************************************/
/*! exports provided: RoleguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleguardService", function() { return RoleguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleguardService = /** @class */ (function () {
    function RoleguardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RoleguardService.prototype.canActivate = function (route) {
        var expectedRole = route.data.expectedRole;
        var role = this.auth.getRole();
        if (!this.auth.isLoggedIn() || !role || role !== expectedRole) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    RoleguardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleguardService);
    return RoleguardService;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hammer_timejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammer-timejs */ "./node_modules/hammer-timejs/hammer-time.js");
/* harmony import */ var hammer_timejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammer_timejs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alex\Documents\fh\4_semester\security\SmartEP\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map