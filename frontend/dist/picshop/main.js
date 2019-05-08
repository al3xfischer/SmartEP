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

module.exports = "<div class=\"container-fluid\">\r\n  <table class=\"shadow-lg p-3 mg-3 bg-white\">\r\n    <thead>\r\n      <th colspan=\"2\">\r\n        <h1>\r\n          Sold Items\r\n        </h1>\r\n      </th>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td colspan=\"2\" class=\"text-center\">\r\n          <h4>\r\n            Revenue: {{revenue}}\r\n          </h4>\r\n          <span>\r\n            Tax: {{taxes}}\r\n          </span>\r\n          <h3>\r\n            Profit: {{profit}}\r\n          </h3>\r\n        </td>\r\n      </tr>\r\n      <tr *ngFor=\"let t of this.items\">\r\n        <td class=\"pic-column\">\r\n          <div id=\"pic-container\">\r\n            <img [src]=\"t.path + '?bearer=' + token\" />\r\n          </div>\r\n        </td>\r\n        <td>\r\n          <div id=\"text-container\">\r\n            <h3>\r\n              {{t.title}}\r\n            </h3>\r\n            <h5>\r\n              Price: {{t.price}}\r\n            </h5>\r\n            <h6>\r\n              Tax: {{(t.price * 0.13) | roundToTwo}}\r\n            </h6>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

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
/* harmony import */ var _services_picture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/picture.service */ "./src/app/services/picture.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function AdminComponent(_picService, auth) {
        this._picService = _picService;
        this.auth = auth;
        this.items = [];
    }
    Object.defineProperty(AdminComponent.prototype, "token", {
        get: function () {
            return this.auth.getToken();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminComponent.prototype, "revenue", {
        get: function () {
            return this.items.map(function (i) { return i.price; }).reduce(function (prev, next) { return prev + next; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminComponent.prototype, "taxes", {
        get: function () {
            return (this.revenue * 0.13).toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminComponent.prototype, "profit", {
        get: function () {
            return (this.revenue - parseFloat(this.taxes)).toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    AdminComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._picService.getSold()];
                    case 1:
                        _a.items = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_picture_service__WEBPACK_IMPORTED_MODULE_1__["PictureService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pictures/pictures.component */ "./src/app/pictures/pictures.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _picdetails_picdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./picdetails/picdetails.component */ "./src/app/picdetails/picdetails.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _services_roleguard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/roleguard.service */ "./src/app/services/roleguard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'pictures',
        component: _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_2__["PicturesComponent"],
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthguardService"]]
    },
    {
        path: 'shoppingcart',
        component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartComponent"],
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthguardService"]]
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    {
        path: 'details/:hash',
        component: _picdetails_picdetails_component__WEBPACK_IMPORTED_MODULE_5__["PicdetailsComponent"],
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthguardService"]]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
        canActivate: [_services_roleguard_service__WEBPACK_IMPORTED_MODULE_8__["RoleguardService"]],
        data: {
            expectedRole: 'admin'
        }
    },
    {
        path: '**',
        component: _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_2__["PicturesComponent"],
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthguardService"]]
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

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'picshop';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pictures/pictures.component */ "./src/app/pictures/pictures.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart-item/cart-item.component */ "./src/app/cart-item/cart-item.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _picdetails_picdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./picdetails/picdetails.component */ "./src/app/picdetails/picdetails.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _pipes_round_to_two_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/round-to-two.pipe */ "./src/app/pipes/round-to-two.pipe.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"],
                _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_7__["PicturesComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_9__["CartItemComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _picdetails_picdetails_component__WEBPACK_IMPORTED_MODULE_11__["PicdetailsComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                _pipes_round_to_two_pipe__WEBPACK_IMPORTED_MODULE_14__["RoundToTwoPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: getToken
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtHelperService"],
                {
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                    useClass: MyHammerConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            exports: [_pipes_round_to_two_pipe__WEBPACK_IMPORTED_MODULE_14__["RoundToTwoPipe"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container shadow p-3 mb-3\">\r\n  <div class=\"row justify-content-center pic-container\">\r\n    <img  [src]=\"path + '?bearer=' + token\" [alt]=\"title\" />\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-8 text-left\">\r\n      <h6>{{title}}</h6>\r\n    </div>\r\n    <div class=\"col-3 text-right\">\r\n      <h6>\r\n       {{price}}$\r\n      </h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <input type=\"button\" (click)=\"details()\" class=\"btn col-5 bg-secondary\" value=\"Details\" />\r\n    <input type=\"button\" (click)=\"buy()\" class=\"btn col-5 bg-success\" value=\"Buy\" />\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 1em;\n  border-radius: 0.5em;\n  padding-bottom: 0.5em;\n  max-width: 17em;\n  height: 16.5em;\n  background-color: white; }\n\n.pic-container {\n  height: 60%;\n  margin: auto;\n  margin-top: 0.5em; }\n\nimg {\n  width: 100%;\n  height: 100%;\n  border-radius: 0.5em; }\n\n.btn {\n  background-color: cornflowerblue;\n  margin: 0.5em;\n  margin-bottom: 0px; }\n\n.row {\n  width: 100%;\n  margin: auto;\n  vertical-align: middle;\n  padding: 0px; }\n\n.col-3, .col-8 {\n  padding: 0px; }\n\nh6 {\n  display: block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9DOlxcVXNlcnNcXEFsZXhcXERvY3VtZW50c1xcZmhcXDRfc2VtZXN0ZXJcXHNlY3VyaXR5XFxTbWFydEVQXFxmcm9udGVuZC9zcmNcXGFwcFxcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsdUJBQXVCLEVBQUE7O0FBRzNCO0VBRUksV0FBVztFQUNYLFlBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQWEsRUFBQTs7QUFHakI7RUFDSSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgbWF4LXdpZHRoOiAxN2VtO1xyXG4gICAgaGVpZ2h0OiAxNi41ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBpYy1jb250YWluZXJcclxue1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXJnaW46ICBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5jb2wtMywgLmNvbC04e1xyXG4gICAgcGFkZGluZzogIDBweDtcclxufVxyXG5cclxuaDZ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _classes_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/item */ "./src/app/classes/item.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_picture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/picture.service */ "./src/app/services/picture.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardComponent = /** @class */ (function () {
    function CardComponent(router, cartService, picService, auth) {
        this.router = router;
        this.cartService = cartService;
        this.picService = picService;
        this.auth = auth;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CardComponent.prototype, "price", {
        get: function () {
            return this.item.price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "title", {
        get: function () {
            return this.item.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "token", {
        get: function () {
            return this.auth.getToken();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "path", {
        get: function () {
            return this.item.path;
        },
        enumerable: true,
        configurable: true
    });
    CardComponent.prototype.buy = function () {
        this.cartService.addItem(this.item);
    };
    CardComponent.prototype.details = function () {
        var hash = this.picService.getHash(this.item).toString();
        this.router.navigate(["details/" + hash]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"])
    ], CardComponent.prototype, "item", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"],
            _services_picture_service__WEBPACK_IMPORTED_MODULE_4__["PictureService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/cart-item/cart-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/cart-item/cart-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container shadow p-3 mb-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-xs-0\">\r\n      <img [src]=\"path\" />\r\n    </div>\r\n    <div class=\"col-md-4 col-xs-12\" id=\"picture-text\">\r\n      <div>\r\n        <h4>{{title}}</h4>\r\n      </div>\r\n      <div id=\"picture-description\">\r\n        <span>{{description}}</span>\r\n      </div>\r\n      <div>\r\n        <h5>\r\n          {{price}}$\r\n        </h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-xs-12  text-right\">\r\n      <input type=\"button\" (click)=\"delete()\" class=\"btn col-5 bg-danger\" value=\"Delete\" />\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cart-item/cart-item.component.scss":
/*!****************************************************!*\
  !*** ./src/app/cart-item/cart-item.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  border-radius: 0.2em;\n  background-color: white; }\n\nimg {\n  max-width: 100%;\n  height: 14em; }\n\ninput {\n  position: absolute;\n  bottom: 0;\n  right: 1em; }\n\n#picture-text h4 {\n  display: block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n#picture-text #picture-description {\n  height: 70%;\n  display: block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n@media only screen and (max-width: 450px) {\n  img {\n    width: 0;\n    height: 0; }\n  input {\n    position: relative;\n    right: 0.1em;\n    float: right; }\n  #picture-description {\n    height: 40%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC1pdGVtL0M6XFxVc2Vyc1xcQWxleFxcRG9jdW1lbnRzXFxmaFxcNF9zZW1lc3Rlclxcc2VjdXJpdHlcXFNtYXJ0RVBcXGZyb250ZW5kL3NyY1xcYXBwXFxjYXJ0LWl0ZW1cXGNhcnQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFvQjtFQUNwQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdkO0VBR1EsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBTnhCO0VBVVEsV0FBVztFQUNYLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJO0lBQ0ksUUFBUTtJQUNSLFNBQVMsRUFBQTtFQUdiO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZLEVBQUE7RUFHaEI7SUFDSSxXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNGVtO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbiNwaWN0dXJlLXRleHR7XHJcblxyXG4gICAgaDR7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICNwaWN0dXJlLWRlc2NyaXB0aW9ue1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6IDAuMWVtO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAjcGljdHVyZS1kZXNjcmlwdGlvbntcclxuICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cart-item/cart-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cart-item/cart-item.component.ts ***!
  \**************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _classes_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/item */ "./src/app/classes/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartItemComponent = /** @class */ (function () {
    function CartItemComponent(cartService) {
        this.cartService = cartService;
    }
    Object.defineProperty(CartItemComponent.prototype, "path", {
        get: function () {
            return this.product.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartItemComponent.prototype, "title", {
        get: function () {
            return this.product.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartItemComponent.prototype, "price", {
        get: function () {
            return this.product.price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartItemComponent.prototype, "description", {
        get: function () {
            return this.product.description;
        },
        enumerable: true,
        configurable: true
    });
    CartItemComponent.prototype.delete = function () {
        this.cartService.removeItem(this.product);
    };
    CartItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"])
    ], CartItemComponent.prototype, "product", void 0);
    CartItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-item',
            template: __webpack_require__(/*! ./cart-item.component.html */ "./src/app/cart-item/cart-item.component.html"),
            styles: [__webpack_require__(/*! ./cart-item.component.scss */ "./src/app/cart-item/cart-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], CartItemComponent);
    return CartItemComponent;
}());



/***/ }),

/***/ "./src/app/classes/item.ts":
/*!*********************************!*\
  !*** ./src/app/classes/item.ts ***!
  \*********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(title, description, price, path) {
        this._title = title;
        this._description = description;
        this._price = price;
        this._path = path;
    }
    Object.defineProperty(Item.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    Item.Equals = function (first, second) {
        if ((!first && second) || (first && !second)) {
            return false;
        }
        return first.path === second.path
            && first.title === second.title
            && first.description === second.description
            && first.price === second.price;
    };
    return Item;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <form>\r\n        <div class=\"row justify-content-center\">\r\n          <img alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n        </div>\r\n        <div id=\"form-container\">\r\n          <div class=\"row justify-content-center\">\r\n            <label><b>Username</b></label>\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <input [(ngModel)]='username' name=\"user\" type=\"text\" placeholder=\"Enter Username\" required maxlength=\"30\" />\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <label><b>Password</b></label>\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <input type=\"password\" [(ngModel)]='keyword' name=\"pw\" placeholder=\"Enter Passowrd\" required maxlength=\"100\" />\r\n          </div>\r\n          <div class=\"row justify-content-center\">\r\n            <input type=\"submit\" (click)=\"login()\" value=\"Login\" class=\"btn bg-success\" />\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 150px; }\n\n.container-fluid {\n  padding-top: 5%; }\n\nform {\n  border-radius: 1em;\n  text-align: center;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  margin: auto;\n  margin-top: 8%;\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 black;\n  height: 30em;\n  width: 18em; }\n\nform #form-container {\n    margin-top: 20px; }\n\nform .row {\n    margin-top: 0.5em;\n    padding: 3px; }\n\nform input[type=\"text\"], form input[type=\"password\"] {\n    border: 1px solid grey; }\n\nform input[type=\"submit\"] {\n    border-radius: 0.7em;\n    width: 40%; }\n\n@media only screen and (max-width: 800px) {\n  form {\n    width: 20em;\n    margin-top: 20%; }\n    form #form-container {\n      height: 80%; }\n  input[type=\"text\"], input[type=\"password\"] {\n    width: 60%;\n    font-size: 20px; }\n  input[type=\"submit\"] {\n    font-size: 20px; } }\n\n@media only screen and (max-width: 450px) {\n  form {\n    margin-top: 25%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxBbGV4XFxEb2N1bWVudHNcXGZoXFw0X3NlbWVzdGVyXFxzZWN1cml0eVxcU21hcnRFUFxcZnJvbnRlbmQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw4REFBOEQ7RUFDOUQsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFUZjtJQVlRLGdCQUFnQixFQUFBOztBQVp4QjtJQWdCUSxpQkFBaUI7SUFDakIsWUFBWSxFQUFBOztBQWpCcEI7SUFxQlEsc0JBQXNCLEVBQUE7O0FBckI5QjtJQXlCUSxvQkFBb0I7SUFDcEIsVUFBVSxFQUFBOztBQUlsQjtFQUVJO0lBQ0ksV0FBVztJQUNYLGVBQWUsRUFBQTtJQUZuQjtNQUtRLFdBQVcsRUFBQTtFQUluQjtJQUNJLFVBQVU7SUFDVixlQUFlLEVBQUE7RUFHbkI7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBR0w7RUFDSTtJQUNJLGVBQWUsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCBibGFjaztcclxuICAgIGhlaWdodDogMzBlbTtcclxuICAgIHdpZHRoOiAxOGVtO1xyXG5cclxuICAgICNmb3JtLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3d7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl17XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuN2VtO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblxyXG4gICAgZm9ybXtcclxuICAgICAgICB3aWR0aDogMjBlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcblxyXG4gICAgICAgICNmb3JtLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl17XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIGZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgfVxyXG59Il19 */"

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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow mb-2\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/pictures']\">\r\n    <img alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n  </a>\r\n  <div class=\"collapse navbar-collapse\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/pictures']\">Home</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"dropdown d-lg-none float-right\">\r\n    <button type=\"button\" class=\"bg-transparent border-0\" data-toggle=\"dropdown\">\r\n      <i class=\"material-icons\">\r\n        dehaze\r\n      </i>\r\n    </button>\r\n    <div class=\"dropdown-menu bg-dark\">\r\n      <a class=\"dropdown-item nav-link bg-dark text-light\" *ngIf=\"showLogin\" [routerLink]=\"['/login']\">Login</a>\r\n      <a class=\"dropdown-item nav-link bg-dark text-light\" *ngIf=\"!showLogin\" (click)=\"logout()\" [routerLink]=\"['/login']\">Logout</a>\r\n      <a class=\"dropdown-item nav-link bg-dark text-light\" *ngIf=\"showAdmin\" [routerLink]=\"['/admin']\">Admin</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-none d-lg-block\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" *ngIf=\"showLogin\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!showLogin\">\r\n        <a class=\"nav-link\" (click)=\"logout()\" [routerLink]=\"['/login']\">Logout</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"showAdmin\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div>\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <div *ngIf=\"!showAmount; else biggerZero\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/shoppingcart']\">\r\n            <i class=\"material-icons\">\r\n              shopping_cart\r\n            </i>\r\n          </a>\r\n        </div>\r\n        <ng-template #biggerZero>\r\n          <a class=\"nav-link\" [routerLink]=\"['/shoppingcart']\">\r\n            <span>\r\n              <span id=\"amountSpan\">\r\n                <i id=\"amount\">\r\n                  {{amount}}\r\n                </i>\r\n              </span>\r\n              <i class=\"material-icons\">\r\n                shopping_cart\r\n              </i>\r\n            </span>\r\n          </a>\r\n        </ng-template>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

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
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function NavbarComponent(_cartService, _authService) {
        var _this = this;
        this._cartService = _cartService;
        this._authService = _authService;
        this.amount = 0;
        this.showLogin = !_authService.isLoggedIn();
        this.showAdmin = _authService.isAdmin();
        this._cartService.countChanged.subscribe(function (count, err) {
            _this.amount = count;
            _this.showAmount = count > 0;
        });
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
        __metadata("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/picdetails/picdetails.component.html":
/*!******************************************************!*\
  !*** ./src/app/picdetails/picdetails.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"close\"><i (click)=\"close()\" class=\"material-icons\"> close </i></div>\r\n<div class=\"navigation\">\r\n  <i (click)=\"before()\" id=\"left\" class=\"material-icons\"> navigate_before </i>\r\n  <i (click)=\"next()\" id=\"right\" class=\"material-icons\"> navigate_next </i>\r\n</div>\r\n<div class=\"container-fluid\" (swipeleft)=\"next()\" (swiperight)=\"before()\">\r\n  <div class=\"text-container\">\r\n    <p class=\"d-md-none text-danger\">Swipe left or right to switch between images</p>\r\n    <h2>{{ currentTitle }}</h2>\r\n    <span>{{ currentDescription }}</span>\r\n  </div>\r\n  <div class=\"pic-container\" [@fade]=\"state\" (@fade.done)=\"onDone($event)\">\r\n    <img\r\n      [src]=\"this.currentSource\"\r\n      [alt]=\"this.currentTitle\"\r\n      class=\"shadow-lg p-3 mb-5 bg-white rounded\"\r\n    />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/picdetails/picdetails.component.scss":
/*!******************************************************!*\
  !*** ./src/app/picdetails/picdetails.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  width: 100%;\n  height: 90%;\n  padding-top: 4em; }\n  .container-fluid .text-container {\n    text-align: center;\n    margin-bottom: 2em; }\n  .container-fluid .pic-container {\n    width: 100%;\n    height: 95%;\n    display: flex;\n    margin: auto;\n    justify-content: center; }\n  img {\n  max-height: 80%;\n  width: auto;\n  display: block;\n  padding: 1em;\n  background-color: white; }\n  .navigation {\n  position: absolute;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 28%;\n  width: 100%; }\n  .navigation i {\n    cursor: -webkit-grab;\n    font-size: 8em; }\n  .navigation #left {\n    z-index: 31;\n    float: left; }\n  .navigation #right {\n    z-index: 30;\n    float: right; }\n  #close {\n  float: right;\n  margin-top: 5%;\n  top: 15;\n  width: 50px;\n  height: 50px;\n  color: white;\n  background-color: #606060;\n  z-index: 30; }\n  #close i {\n    font-size: 48px;\n    cursor: -webkit-grab; }\n  @media only screen and (max-width: 800px) {\n  #close {\n    margin-top: 10%; }\n  .pic-container {\n    width: 40%; }\n  img {\n    max-height: 35%; } }\n  @media only screen and (max-width: 450px) {\n  .pic-container {\n    width: 35%; }\n  img {\n    max-height: 30%; }\n  #close {\n    margin-top: 16%; }\n  .navigation {\n    visibility: hidden; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljZGV0YWlscy9DOlxcVXNlcnNcXEFsZXhcXERvY3VtZW50c1xcZmhcXDRfc2VtZXN0ZXJcXHNlY3VyaXR5XFxTbWFydEVQXFxmcm9udGVuZC9zcmNcXGFwcFxccGljZGV0YWlsc1xccGljZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFIcEI7SUFNUSxrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7RUFQMUI7SUFXUSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCLEVBQUE7RUFJL0I7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7RUFHM0I7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVyxFQUFBO0VBTGY7SUFRUSxvQkFBb0I7SUFDcEIsY0FBYyxFQUFBO0VBVHRCO0lBYVEsV0FBVztJQUNYLFdBQVcsRUFBQTtFQWRuQjtJQWtCUSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBSXBCO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTtFQVJmO0lBV1EsZUFBZTtJQUNmLG9CQUFvQixFQUFBO0VBSTVCO0VBQ0k7SUFDSSxlQUFlLEVBQUE7RUFHbkI7SUFDTSxVQUFVLEVBQUE7RUFHaEI7SUFDSSxlQUFlLEVBQUEsRUFDbEI7RUFHTDtFQUVJO0lBQ0ksVUFBVSxFQUFBO0VBR2Q7SUFDQSxlQUFlLEVBQUE7RUFHZjtJQUNJLGVBQWUsRUFBQTtFQUduQjtJQUNJLGtCQUFrQixFQUFBLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGljZGV0YWlscy9waWNkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDRlbTtcclxuICAgIFxyXG4gICAgLnRleHQtY29udGFpbmVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBpYy1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIG1heC1oZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdmlnYXRpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDI4JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGl7XHJcbiAgICAgICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XHJcbiAgICAgICAgZm9udC1zaXplOiA4ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNsZWZ0e1xyXG4gICAgICAgIHotaW5kZXg6IDMxO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjcmlnaHR7XHJcbiAgICAgICAgei1pbmRleDogMzA7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4jY2xvc2V7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIHRvcDogMTU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XHJcbiAgICB6LWluZGV4OiAzMDtcclxuICAgIFxyXG4gICAgaXtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICNjbG9zZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBpYy1jb250YWluZXJ7XHJcbiAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGltZ3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuXHJcbiAgICAucGljLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgfVxyXG5cclxuICAgIGltZ3tcclxuICAgIG1heC1oZWlnaHQ6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAjY2xvc2V7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTYlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9ue1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/picdetails/picdetails.component.ts":
/*!****************************************************!*\
  !*** ./src/app/picdetails/picdetails.component.ts ***!
  \****************************************************/
/*! exports provided: PicdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicdetailsComponent", function() { return PicdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_picture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/picture.service */ "./src/app/services/picture.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
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




var PicdetailsComponent = /** @class */ (function () {
    function PicdetailsComponent(_Activatedroute, _router, _pictureService, cd) {
        var _this = this;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this._pictureService = _pictureService;
        this.cd = cd;
        this.state = 'in';
        this.counter = 0;
        this.enableAnimation = false;
        document.onkeydown = function (e) {
            if (e.key === 'left arrow') {
                _this.before();
            }
            else if (e.key === 'right arrow') {
                _this.next();
            }
        };
    }
    Object.defineProperty(PicdetailsComponent.prototype, "currentTitle", {
        get: function () {
            return this._currentItem.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicdetailsComponent.prototype, "currentDescription", {
        get: function () {
            return this._currentItem.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicdetailsComponent.prototype, "currentSource", {
        get: function () {
            return this._currentItem.path;
        },
        enumerable: true,
        configurable: true
    });
    PicdetailsComponent.prototype.ngOnInit = function () {
        var id = this._Activatedroute.snapshot.params['hash'];
        this._currentItem = this._pictureService.getPicture(id);
        this.isVisible = true;
    };
    PicdetailsComponent.prototype.close = function () {
        this._router.navigate(['pictures']);
    };
    PicdetailsComponent.prototype.next = function () {
        this._direction = 'next';
        this.startAnimation();
    };
    PicdetailsComponent.prototype.before = function () {
        this._direction = 'before';
        this.startAnimation();
    };
    PicdetailsComponent.prototype.toggleImg = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this._direction === 'next')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this._pictureService.getNext(this._currentItem)];
                    case 1:
                        _a._currentItem = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if (this._direction === 'before') {
                            this._currentItem = this._pictureService.getPrevious(this._currentItem);
                        }
                        _b.label = 3;
                    case 3:
                        this._direction = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    PicdetailsComponent.prototype.startAnimation = function () {
        this.enableAnimation = true;
        this.counter = 0;
        this.toggleState();
    };
    PicdetailsComponent.prototype.onDone = function ($event) {
        if (this.enableAnimation) {
            if (this.counter === 1) {
                this.toggleImg();
            }
            this.toggleState();
        }
    };
    PicdetailsComponent.prototype.toggleState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.counter < 2) {
                    this.state = this.state === 'in' ? 'out' : 'in';
                    this.cd.detectChanges();
                    this.counter++;
                }
                return [2 /*return*/];
            });
        });
    };
    PicdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-picdetails',
            template: __webpack_require__(/*! ./picdetails.component.html */ "./src/app/picdetails/picdetails.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '1' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(100)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(500)])
                ])
            ],
            styles: [__webpack_require__(/*! ./picdetails.component.scss */ "./src/app/picdetails/picdetails.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_picture_service__WEBPACK_IMPORTED_MODULE_1__["PictureService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PicdetailsComponent);
    return PicdetailsComponent;
}());



/***/ }),

/***/ "./src/app/pictures/pictures.component.html":
/*!**************************************************!*\
  !*** ./src/app/pictures/pictures.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container center\">\r\n  <div *ngFor=\"let item of this.items\">\r\n    <app-card [item]='item'></app-card>\r\n  </div>\r\n  <div *ngIf=\"this.showMoreVisible\" class=\"text-center w-100 m-3 mb-4\">\r\n    <input type=\"button\" class=\"btn bg-dark text-light\" value=\"Show more\" (click)=\"loadMore()\" />\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pictures/pictures.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pictures/pictures.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100%;\n  padding-top: 5%; }\n\n@media only screen and (max-width: 800px) {\n  .flex-container {\n    padding-top: 8%; } }\n\n@media only screen and (max-width: 450px) {\n  .flex-container {\n    padding-top: 13%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljdHVyZXMvQzpcXFVzZXJzXFxBbGV4XFxEb2N1bWVudHNcXGZoXFw0X3NlbWVzdGVyXFxzZWN1cml0eVxcU21hcnRFUFxcZnJvbnRlbmQvc3JjXFxhcHBcXHBpY3R1cmVzXFxwaWN0dXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0k7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBR0w7RUFDSTtJQUNJLGdCQUFnQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGljdHVyZXMvcGljdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuZmxleC1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDglO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC5mbGV4LWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTMlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pictures/pictures.component.ts":
/*!************************************************!*\
  !*** ./src/app/pictures/pictures.component.ts ***!
  \************************************************/
/*! exports provided: PicturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturesComponent", function() { return PicturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_picture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/picture.service */ "./src/app/services/picture.service.ts");
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


var PicturesComponent = /** @class */ (function () {
    function PicturesComponent(pictureService) {
        this.pictureService = pictureService;
        this.items = [];
        this.showMoreVisible = true;
    }
    PicturesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.pictureService.getPictures()];
                    case 1:
                        _a.items = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PicturesComponent.prototype.loadMore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var batch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pictureService.getBatch()];
                    case 1:
                        batch = _a.sent();
                        this.showMoreVisible = batch.length > 0 && batch.length === 20;
                        this.items = this.items.concat(batch);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PicturesComponent.prototype, "items", void 0);
    PicturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pictures',
            template: __webpack_require__(/*! ./pictures.component.html */ "./src/app/pictures/pictures.component.html"),
            styles: [__webpack_require__(/*! ./pictures.component.scss */ "./src/app/pictures/pictures.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_picture_service__WEBPACK_IMPORTED_MODULE_1__["PictureService"]])
    ], PicturesComponent);
    return PicturesComponent;
}());



/***/ }),

/***/ "./src/app/pipes/round-to-two.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/round-to-two.pipe.ts ***!
  \********************************************/
/*! exports provided: RoundToTwoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundToTwoPipe", function() { return RoundToTwoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundToTwoPipe = /** @class */ (function () {
    function RoundToTwoPipe() {
    }
    RoundToTwoPipe.prototype.transform = function (value) {
        return parseFloat(value.toFixed(2));
    };
    RoundToTwoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'roundToTwo'
        })
    ], RoundToTwoPipe);
    return RoundToTwoPipe;
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
    AuthService.prototype.login = function (name, word) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.jwtHelper.tokenGetter() !== null) {
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        console.log(location.origin + "/api/login");
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
            console.log(token);
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

/***/ "./src/app/services/picture.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/picture.service.ts ***!
  \*********************************************/
/*! exports provided: PictureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureService", function() { return PictureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/item */ "./src/app/classes/item.ts");
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



var PictureService = /** @class */ (function () {
    function PictureService(auth) {
        this.auth = auth;
        this._items = {};
        this._pictures = [];
        this._lastBatchCounter = 0;
    }
    PictureService.prototype.getPictures = function () {
        var _this = this;
        console.log("get pics");
        return new Promise(function (resolve, reject) {
            if (_this._pictures.length > 0) {
                resolve(_this._pictures.slice(0, 20));
            }
            fetch(location.origin + '/api/products', {
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
                    _this._pictures = data;
                    resolve(data);
                    _this._lastBatchCounter = 0;
                    _this.createDict(data);
                }
            })
                .catch(function (err) { return reject(err); });
        });
    };
    PictureService.prototype.getBatch = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fetch(location.origin +
                ("/api/products?batch=" + ++_this._lastBatchCounter), {
                headers: {
                    Authorization: _this.auth.getToken()
                }
            })
                .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, res.json()];
                });
            }); })
                .then(function (data) {
                _this._pictures = _this._pictures.concat(data);
                _this.createDict(data);
                resolve(data);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    PictureService.prototype.getSold = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fetch(location.origin + '/api/soldproducts', {
                headers: {
                    Authorization: _this.auth.getToken()
                }
            })
                .then(function (res) {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    return new Array();
                }
            })
                .then(function (data) {
                resolve(data);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    PictureService.prototype.getHash = function (item) {
        var json = JSON.stringify(item);
        var hash = 0;
        var i = 0;
        var len = json.length;
        while (i < len) {
            // tslint:disable-next-line
            hash = ((hash << 5) - hash + json.charCodeAt(i++)) << 0;
        }
        return hash * -1;
    };
    PictureService.prototype.getPicture = function (hash) {
        return this._items[hash];
    };
    PictureService.prototype.getNext = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var currentIndex, batchItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentIndex = this._pictures.findIndex(function (i) { return _classes_item__WEBPACK_IMPORTED_MODULE_1__["Item"].Equals(i, item); });
                        if (!(currentIndex + 1 === this._pictures.length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getBatch()];
                    case 1:
                        batchItems = _a.sent();
                        this._lastBatchCounter -= 1;
                        if (batchItems.length === 0) {
                            currentIndex = -1;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, this._pictures[currentIndex + 1]];
                }
            });
        });
    };
    PictureService.prototype.getPrevious = function (item) {
        var currentIndex = this._pictures.findIndex(function (i) { return _classes_item__WEBPACK_IMPORTED_MODULE_1__["Item"].Equals(i, item); });
        if (currentIndex === 0) {
            currentIndex = this._pictures.length;
        }
        return this._pictures[currentIndex - 1];
    };
    PictureService.prototype.createDict = function (items) {
        var _this = this;
        items.forEach(function (i) { return (_this._items[_this.getHash(i).toString()] = i); });
    };
    PictureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PictureService);
    return PictureService;
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

/***/ "./src/app/services/shopping-cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shopping-cart.service.ts ***!
  \***************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/item */ "./src/app/classes/item.ts");
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



var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(auth) {
        this.auth = auth;
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._items = [];
    }
    Object.defineProperty(ShoppingCartService.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCartService.prototype.addItem = function (item) {
        if (!this._items.some(function (i) { return _classes_item__WEBPACK_IMPORTED_MODULE_1__["Item"].Equals(i, item); })) {
            this._items.push(item);
        }
        this.countChanged.emit(this._items.length);
    };
    ShoppingCartService.prototype.removeItem = function (item) {
        var currentCount = this.items.length;
        this._items = this._items.filter(function (i) { return !_classes_item__WEBPACK_IMPORTED_MODULE_1__["Item"].Equals(i, item); });
        if (currentCount !== this.items.length) {
            this.countChanged.emit(this.items.length);
        }
    };
    ShoppingCartService.prototype.buy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(location.origin + '/api/buy', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': this.auth.getToken()
                            },
                            body: JSON.stringify(this.items)
                        }).then(function (res) { return res.json(); })];
                    case 1:
                        data = _a.sent();
                        this._items = [];
                        this.countChanged.emit(this._items.length);
                        console.log(JSON.stringify(data));
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"items\">\r\n  <div *ngFor=\"let product of this.items\">\r\n    <app-cart-item [product]=\"product\"></app-cart-item>\r\n  </div>\r\n</div>\r\n<div class=\"fixed-bottom bg-light container-fluid\">\r\n  <div class=\"row h-100 text-center\">\r\n    <div class=\"col-md-6 col-lg-3 offset-1\">\r\n      <h3>Total ({{count}} Item/s): {{total}}$</h3>\r\n    </div>\r\n    <div class=\"col-md-2 col-xs-12 text-center\">\r\n      <input type=\"button\" [disabled]=\"disableBuy\" (click)=\"buyItems()\" class=\"btn\" value=\"Buy\" />\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 100px; }\n\nh3 {\n  margin: 0; }\n\n.container-fluid {\n  height: 11%; }\n\n.row {\n  padding-top: 2%;\n  box-shadow: 0 -15px 0px -15px #333; }\n\n#items {\n  padding-top: 6%;\n  padding-bottom: 8%; }\n\ninput[type=\"button\"] {\n  color: black;\n  background-color: #5cb85c; }\n\ninput[type=\"button\"]:disabled {\n  color: transparent;\n  background-color: transparent; }\n\n@media only screen and (max-width: 800px) {\n  #items {\n    padding-top: 10%;\n    padding-bottom: 15%; } }\n\n@media only screen and (max-width: 450px) {\n  #items {\n    padding-top: 17%;\n    padding-bottom: 21%;\n    padding-left: 4%;\n    padding-right: 4%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC9DOlxcVXNlcnNcXEFsZXhcXERvY3VtZW50c1xcZmhcXDRfc2VtZXN0ZXJcXHNlY3VyaXR5XFxTbWFydEVQXFxmcm9udGVuZC9zcmNcXGFwcFxcc2hvcHBpbmctY2FydFxcc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxTQUFTLEVBQUE7O0FBR2I7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlO0VBQ2Ysa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0k7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUEsRUFDdEI7O0FBR0w7RUFDSTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgaGVpZ2h0OiAxMSU7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBib3gtc2hhZG93OiAwIC0xNXB4IDBweCAtMTVweCAjMzMzO1xyXG59XHJcblxyXG4jaXRlbXN7XHJcbiAgICBwYWRkaW5nLXRvcDogNiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl17XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmRpc2FibGVke1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICNpdGVtc3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICNpdGVtc3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTclO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMSU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0JTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
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


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(cartService) {
        var _this = this;
        this.cartService = cartService;
        this.items = this.cartService.items;
        this.cartService.countChanged.subscribe(function (count) {
            _this.items = _this.cartService.items;
        });
    }
    ShoppingCartComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ShoppingCartComponent.prototype, "total", {
        get: function () {
            return this.items.map(function (i) { return i.price; }).reduce(function (prev, cur) { return prev + cur; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCartComponent.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCartComponent.prototype, "disableBuy", {
        get: function () {
            return this.items.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCartComponent.prototype.buyItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var notBought;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cartService.buy()];
                    case 1:
                        notBought = _a.sent();
                        if (notBought.length > 0) {
                            alert('The following products could not be purchased.\nThey are already assigned. \n Items:' +
                                notBought.map(function (p) { return p.title; }).join(', '));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Array)
    ], ShoppingCartComponent.prototype, "items", void 0);
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/shopping-cart/shopping-cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
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