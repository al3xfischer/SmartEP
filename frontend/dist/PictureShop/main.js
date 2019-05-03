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

/***/ "./src/app/adminpage/adminpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/adminpage/adminpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n  <div *ngFor=\"let item of this.soldItems\">\r\n    <app-solditem [item]=item></app-solditem>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"fixed-bottom\">\r\n  <p>Turnover: {{turnover}}€     Tax: {{tax}}€    Net-income: {{netIncome}}€</p>\r\n</div>"

/***/ }),

/***/ "./src/app/adminpage/adminpage.component.scss":
/*!****************************************************!*\
  !*** ./src/app/adminpage/adminpage.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  -webkit-column-count: 5;\n     -moz-column-count: 5;\n          column-count: 5;\n  -webkit-column-gap: 0px;\n     -moz-column-gap: 0px;\n          column-gap: 0px; }\n\n.flex-container div {\n  display: inline-block;\n  width: 100%;\n  height: auto;\n  -webkit-column-break-inside: avoid;\n     -moz-column-break-inside: avoid;\n          break-inside: avoid-column; }\n\n@media (max-width: 1200px) {\n  .flex-container {\n    -webkit-column-count: 4;\n       -moz-column-count: 4;\n            column-count: 4; } }\n\n@media (max-width: 1000px) {\n  .flex-container {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3; } }\n\n@media (max-width: 800px) {\n  .flex-container {\n    -webkit-column-count: 2;\n       -moz-column-count: 2;\n            column-count: 2; } }\n\n@media (max-width: 400px) {\n  .flex-container {\n    -webkit-column-count: 1;\n       -moz-column-count: 1;\n            column-count: 1; } }\n\n.fixed-bottom {\n  text-align: center;\n  background: darkgray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYWdlL0M6XFxVc2Vyc1xcU2lsZW5jZVxcSW5mb3JtYXRpa1xcS2V2aW5cXFNlbWVzdGVyNFxcSVRTZWN1cml0eVxcU21hcnRFUFxcZnJvbnRlbmQvc3JjXFxhcHBcXGFkbWlucGFnZVxcYWRtaW5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQXVCO0tBQXZCLG9CQUF1QjtVQUF2QixlQUF1QjtFQUN2Qix1QkFBeUI7S0FBekIsb0JBQXlCO1VBQXpCLGVBQXlCLEVBQUE7O0FBRzdCO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQTBCO0tBQTFCLCtCQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSTtJQUNBLHVCQUF1QjtPQUF2QixvQkFBdUI7WUFBdkIsZUFBdUIsRUFBQSxFQUN0Qjs7QUFHTDtFQUNJO0lBQ0EsdUJBQXVCO09BQXZCLG9CQUF1QjtZQUF2QixlQUF1QixFQUFBLEVBQ3RCOztBQUdMO0VBQ0k7SUFDQSx1QkFBdUI7T0FBdkIsb0JBQXVCO1lBQXZCLGVBQXVCLEVBQUEsRUFDdEI7O0FBR0w7RUFDSTtJQUNBLHVCQUF1QjtPQUF2QixvQkFBdUI7WUFBdkIsZUFBdUIsRUFBQSxFQUN0Qjs7QUFHTDtFQUNJLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFnZS9hZG1pbnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHBzOi8vY3NzLXRyaWNrcy5jb20vc2VhbWxlc3MtcmVzcG9uc2l2ZS1waG90by1ncmlkL1xyXG5cclxuLmZsZXgtY29udGFpbmVyIHsgICAgXHJcbiAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgNTtcclxuICAgIGNvbHVtbi1nYXA6ICAgICAgICAgICAwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciBkaXYgeyAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYnJlYWstaW5zaWRlOiBhdm9pZC1jb2x1bW47XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgNDtcclxuICAgIH1cclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgY29sdW1uLWNvdW50OiAgICAgICAgIDM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgY29sdW1uLWNvdW50OiAgICAgICAgIDI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbi5maXhlZC1ib3R0b20ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogZGFya2dyYXk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/adminpage/adminpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adminpage/adminpage.component.ts ***!
  \**************************************************/
/*! exports provided: AdminpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpageComponent", function() { return AdminpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");



var AdminpageComponent = /** @class */ (function () {
    function AdminpageComponent(loginService) {
        this.loginService = loginService;
        this.turnover = '0';
        this.tax = '0';
        this.netIncome = '0';
    }
    AdminpageComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('http://localhost:4200/api/admin', {
                            method: 'GET',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': this.loginService.token
                            }
                        })
                            .then(function (res) {
                            if (res.status == 200) {
                                return res.json();
                            }
                        })
                            .then(function (data) {
                            if (data) {
                                _this.soldItems = data;
                                var turnover_1 = 0;
                                _this.soldItems.forEach(function (item) {
                                    turnover_1 += item.price;
                                });
                                var tax = ((turnover_1 / 100) * 11.5);
                                _this.turnover = turnover_1.toFixed(2);
                                _this.tax = tax.toFixed(2);
                                _this.netIncome = (turnover_1 - tax).toFixed(2);
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminpage',
            template: __webpack_require__(/*! ./adminpage.component.html */ "./src/app/adminpage/adminpage.component.html"),
            styles: [__webpack_require__(/*! ./adminpage.component.scss */ "./src/app/adminpage/adminpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AdminpageComponent);
    return AdminpageComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shoppingarea_shoppingarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shoppingarea/shoppingarea.component */ "./src/app/shoppingarea/shoppingarea.component.ts");
/* harmony import */ var _artdetails_artdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artdetails/artdetails.component */ "./src/app/artdetails/artdetails.component.ts");
/* harmony import */ var _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shoppingcart/shoppingcart.component */ "./src/app/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var _loginscreen_loginscreen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginscreen/loginscreen.component */ "./src/app/loginscreen/loginscreen.component.ts");
/* harmony import */ var _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminpage/adminpage.component */ "./src/app/adminpage/adminpage.component.ts");








var routes = [
    { path: 'info/:name', component: _artdetails_artdetails_component__WEBPACK_IMPORTED_MODULE_4__["ArtdetailsComponent"] },
    { path: 'page/:number', component: _shoppingarea_shoppingarea_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingareaComponent"] },
    { path: 'login', component: _loginscreen_loginscreen_component__WEBPACK_IMPORTED_MODULE_6__["LoginscreenComponent"] },
    { path: 'shoppingcart', component: _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingcartComponent"] },
    { path: 'admin', component: _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_7__["AdminpageComponent"] },
    { path: '**', component: _loginscreen_loginscreen_component__WEBPACK_IMPORTED_MODULE_6__["LoginscreenComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<app-mynavbar></app-mynavbar>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PictureShop';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mynavbar_mynavbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mynavbar/mynavbar.component */ "./src/app/mynavbar/mynavbar.component.ts");
/* harmony import */ var _shoppingarea_shoppingarea_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shoppingarea/shoppingarea.component */ "./src/app/shoppingarea/shoppingarea.component.ts");
/* harmony import */ var _artitem_artitem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./artitem/artitem.component */ "./src/app/artitem/artitem.component.ts");
/* harmony import */ var _artdetails_artdetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./artdetails/artdetails.component */ "./src/app/artdetails/artdetails.component.ts");
/* harmony import */ var _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shoppingcart/shoppingcart.component */ "./src/app/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var _shoppingcartitem_shoppingcartitem_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shoppingcartitem/shoppingcartitem.component */ "./src/app/shoppingcartitem/shoppingcartitem.component.ts");
/* harmony import */ var _loginscreen_loginscreen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loginscreen/loginscreen.component */ "./src/app/loginscreen/loginscreen.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adminpage/adminpage.component */ "./src/app/adminpage/adminpage.component.ts");
/* harmony import */ var _solditem_solditem_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./solditem/solditem.component */ "./src/app/solditem/solditem.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _mynavbar_mynavbar_component__WEBPACK_IMPORTED_MODULE_6__["MynavbarComponent"],
                _shoppingarea_shoppingarea_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingareaComponent"],
                _artitem_artitem_component__WEBPACK_IMPORTED_MODULE_8__["ArtitemComponent"],
                _artdetails_artdetails_component__WEBPACK_IMPORTED_MODULE_9__["ArtdetailsComponent"],
                _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingcartComponent"],
                _shoppingcartitem_shoppingcartitem_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingcartitemComponent"],
                _loginscreen_loginscreen_component__WEBPACK_IMPORTED_MODULE_12__["LoginscreenComponent"],
                _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_14__["AdminpageComponent"],
                _solditem_solditem_component__WEBPACK_IMPORTED_MODULE_15__["SolditemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artItemInfo.ts":
/*!********************************!*\
  !*** ./src/app/artItemInfo.ts ***!
  \********************************/
/*! exports provided: ArtItemInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtItemInfo", function() { return ArtItemInfo; });
var ArtItemInfo = /** @class */ (function () {
    function ArtItemInfo(name, imgSource, description, price) {
        this.name = name;
        this.imgSource = imgSource;
        this.description = description;
        this.price = price;
    }
    return ArtItemInfo;
}());



/***/ }),

/***/ "./src/app/artdetails/artdetails.component.html":
/*!******************************************************!*\
  !*** ./src/app/artdetails/artdetails.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" [@pictureChange]=\"state\" (@pictureChange.done)=\"onDone($event)\">\r\n    <div class=\"text\">\r\n      <h1>{{art.name}}</h1>\r\n    </div>\r\n    <div>\r\n      <img id=\"image\" [src]=art.imgSource [alt]=art.name />\r\n    </div>\r\n    <div class=\"text\">\r\n      <p>{{art.description}}</p>\r\n    </div>\r\n    <div class=\"text\">\r\n      <p>{{art.price}}€</p>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/artdetails/artdetails.component.scss":
/*!******************************************************!*\
  !*** ./src/app/artdetails/artdetails.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  text-align: center;\n  word-wrap: break-word; }\n\n#container {\n  max-width: 80%;\n  height: 50%;\n  padding: 0.5em;\n  border-radius: 0.5em;\n  border: 3px solid black;\n  box-sizing: border-box;\n  margin: auto;\n  text-align: center; }\n\n#image {\n  max-width: 100%;\n  max-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0ZGV0YWlscy9DOlxcVXNlcnNcXFNpbGVuY2VcXEluZm9ybWF0aWtcXEtldmluXFxTZW1lc3RlcjRcXElUU2VjdXJpdHlcXFNtYXJ0RVBcXGZyb250ZW5kL3NyY1xcYXBwXFxhcnRkZXRhaWxzXFxhcnRkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcnRkZXRhaWxzL2FydGRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNpbWFnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/artdetails/artdetails.component.ts":
/*!****************************************************!*\
  !*** ./src/app/artdetails/artdetails.component.ts ***!
  \****************************************************/
/*! exports provided: ArtdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtdetailsComponent", function() { return ArtdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_art_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/art.service */ "./src/app/services/art.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var ArtdetailsComponent = /** @class */ (function () {
    function ArtdetailsComponent(artService) {
        var _this = this;
        this.artService = artService;
        document.onkeydown = function (key) {
            if (key.keyCode === 37) {
                _this.previousPicture();
            }
            else if (key.keyCode == 39) {
                _this.nextPicture();
            }
        };
        this.state = 'visible';
    }
    ArtdetailsComponent.prototype.ngOnInit = function () {
        this.art = this.artService.getSpecificArt(document.URL.split('/')[document.URL.split('/').length - 1]);
    };
    ArtdetailsComponent.prototype.nextPicture = function () {
        this.wantedFunction = 'next';
        this.animate();
    };
    ArtdetailsComponent.prototype.previousPicture = function () {
        this.wantedFunction = 'previous';
        this.animate();
    };
    ArtdetailsComponent.prototype.onDone = function ($event) {
        if (this.state == 'invisible') {
            this.state = 'visible';
            if (this.wantedFunction == 'next') {
                this.art = this.artService.nextArt(this.art);
            }
            else {
                this.art = this.artService.previousArt(this.art);
            }
        }
    };
    ArtdetailsComponent.prototype.animate = function () {
        this.state = this.state == 'visible' ? 'invisible' : 'visible';
    };
    ArtdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artdetails',
            template: __webpack_require__(/*! ./artdetails.component.html */ "./src/app/artdetails/artdetails.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('pictureChange', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('invisible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visible => invisible', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('invisible => visible', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s')
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./artdetails.component.scss */ "./src/app/artdetails/artdetails.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_art_service__WEBPACK_IMPORTED_MODULE_2__["ArtService"]])
    ], ArtdetailsComponent);
    return ArtdetailsComponent;
}());



/***/ }),

/***/ "./src/app/artitem/artitem.component.html":
/*!************************************************!*\
  !*** ./src/app/artitem/artitem.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <div class=\"text\">\r\n    <p>{{art.name}}</p>\r\n  </div>\r\n  <div>\r\n    <img id=\"image\" (click)=\"showDetails()\" [src]=art.imgSource [alt]=art.name />\r\n  </div>\r\n  <div class=\"text\">\r\n    <p>{{art.price}}€</p>\r\n  </div>\r\n  <div id=\"button-container\">\r\n    <button class=\"button btn-secondary\" (click)=\"addToShoppingCart()\">Add to shopping cart</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/artitem/artitem.component.scss":
/*!************************************************!*\
  !*** ./src/app/artitem/artitem.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  text-align: center; }\n\n.button {\n  width: 80%;\n  height: 30px;\n  align-content: center;\n  border-radius: 0.5em; }\n\n#button-container {\n  text-align: center; }\n\n#container {\n  margin: 1em;\n  max-width: 26em;\n  padding: 0.5em;\n  border-radius: 2em;\n  border: 3px solid black;\n  box-sizing: border-box; }\n\n#image {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXRlbS9DOlxcVXNlcnNcXFNpbGVuY2VcXEluZm9ybWF0aWtcXEtldmluXFxTZW1lc3RlcjRcXElUU2VjdXJpdHlcXFNtYXJ0RVBcXGZyb250ZW5kL3NyY1xcYXBwXFxhcnRpdGVtXFxhcnRpdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcnRpdGVtL2FydGl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG59XHJcblxyXG4jYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBtYXgtd2lkdGg6IDI2ZW07XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI2ltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/artitem/artitem.component.ts":
/*!**********************************************!*\
  !*** ./src/app/artitem/artitem.component.ts ***!
  \**********************************************/
/*! exports provided: ArtitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtitemComponent", function() { return ArtitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _artItemInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artItemInfo */ "./src/app/artItemInfo.ts");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");





var ArtitemComponent = /** @class */ (function () {
    function ArtitemComponent(router, shoppingCartSerive) {
        this.router = router;
        this.shoppingCartSerive = shoppingCartSerive;
    }
    ArtitemComponent.prototype.ngOnInit = function () {
    };
    ArtitemComponent.prototype.showDetails = function () {
        this.router.navigate(["info/" + this.art.name]);
    };
    ArtitemComponent.prototype.addToShoppingCart = function () {
        this.shoppingCartSerive.addItem(this.art);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _artItemInfo__WEBPACK_IMPORTED_MODULE_3__["ArtItemInfo"])
    ], ArtitemComponent.prototype, "art", void 0);
    ArtitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artitem',
            template: __webpack_require__(/*! ./artitem.component.html */ "./src/app/artitem/artitem.component.html"),
            styles: [__webpack_require__(/*! ./artitem.component.scss */ "./src/app/artitem/artitem.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingcartService"]])
    ], ArtitemComponent);
    return ArtitemComponent;
}());



/***/ }),

/***/ "./src/app/loginscreen/loginscreen.component.html":
/*!********************************************************!*\
  !*** ./src/app/loginscreen/loginscreen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n    <div class=\"text\">\r\n        <h1>Login</h1>\r\n    </div>\r\n\r\n    <form>\r\n      <div class=\"text\">\r\n        <p><b>Username</b></p>\r\n      </div>\r\n      <input type=\"text\" [(ngModel)]='username' name=\"username\" placeholder=\"Username\"/>\r\n      <div class=\"text\">\r\n        <p><b>Password</b></p>\r\n      </div>        \r\n      <input type=\"text\" [(ngModel)]='password' name=\"password\" placeholder=\"Password\"/>\r\n      <div id=\"button-container\">\r\n        <button class=\"button btn-secondary\" (click)=\"login()\"><b>Login</b></button>\r\n      </div>\r\n    </form>      \r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/loginscreen/loginscreen.component.scss":
/*!********************************************************!*\
  !*** ./src/app/loginscreen/loginscreen.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  text-align: center;\n  font-size: 2em; }\n\n.button {\n  width: 30%;\n  height: 50px;\n  align-content: center;\n  border-radius: 0.5em;\n  margin-top: 1em; }\n\n#button-container {\n  text-align: center; }\n\n#container {\n  margin: auto;\n  margin-top: 10%;\n  max-width: 20em;\n  padding: 0.5em;\n  border-radius: 2em;\n  border: 3px solid black;\n  box-sizing: border-box;\n  text-align: center; }\n\nh1 {\n  font-size: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5zY3JlZW4vQzpcXFVzZXJzXFxTaWxlbmNlXFxJbmZvcm1hdGlrXFxLZXZpblxcU2VtZXN0ZXI0XFxJVFNlY3VyaXR5XFxTbWFydEVQXFxmcm9udGVuZC9zcmNcXGFwcFxcbG9naW5zY3JlZW5cXGxvZ2luc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQ0osRUFBQTs7QUFFQTtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luc2NyZWVuL2xvZ2luc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyZW1cclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbiNidXR0b24tY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87ICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/loginscreen/loginscreen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/loginscreen/loginscreen.component.ts ***!
  \******************************************************/
/*! exports provided: LoginscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginscreenComponent", function() { return LoginscreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginscreenComponent = /** @class */ (function () {
    function LoginscreenComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.username = "";
        this.password = "";
    }
    LoginscreenComponent.prototype.ngOnInit = function () {
    };
    LoginscreenComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loginService.login(this.username, this.password)];
                    case 1:
                        if (_a.sent()) {
                            this.router.navigate(['']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoginscreenComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoginscreenComponent.prototype, "password", void 0);
    LoginscreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginscreen',
            template: __webpack_require__(/*! ./loginscreen.component.html */ "./src/app/loginscreen/loginscreen.component.html"),
            styles: [__webpack_require__(/*! ./loginscreen.component.scss */ "./src/app/loginscreen/loginscreen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginscreenComponent);
    return LoginscreenComponent;
}());



/***/ }),

/***/ "./src/app/mynavbar/mynavbar.component.html":
/*!**************************************************!*\
  !*** ./src/app/mynavbar/mynavbar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\">\r\n    <img [routerLink]=\"['']\" alt=\"Shop Logo\" src=\"favicon.ico\">  \r\n  </a>\r\n  <div class=\"collapse navbar-collapse\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['']\">Home</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"navbar-nav\">\r\n    <p>Pages:</p>\r\n    <ol class=\"navbar-nav\" id=\"pageList\" *ngFor = \"let page of pages\">\r\n      <li class=\"nav-item\">\r\n       <a routerLink = \"/page/{{page.toString()}}\">{{page.toString()}}</a>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n  <div>\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" *ngIf=\"getIsAdmin()\">\r\n        <a [routerLink]=\"['/admin']\">Admin Page</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"getLogedIn()\">\r\n        <p>{{getUsername()}}</p>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!getLogedIn()\">\r\n        <a [routerLink]=\"['/login']\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"getLogedIn()\">\r\n        <a [routerLink]=\"['/login']\" (click)=\"logout()\">Logout</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['/shoppingcart']\">Shopping cart</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/mynavbar/mynavbar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mynavbar/mynavbar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0; }\n\na {\n  color: white; }\n\np {\n  color: white; }\n\ndiv {\n  padding-left: 5px; }\n\nli {\n  margin-left: 5px; }\n\n.navbar {\n  margin-bottom: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXluYXZiYXIvQzpcXFVzZXJzXFxTaWxlbmNlXFxJbmZvcm1hdGlrXFxLZXZpblxcU2VtZXN0ZXI0XFxJVFNlY3VyaXR5XFxTbWFydEVQXFxmcm9udGVuZC9zcmNcXGFwcFxcbXluYXZiYXJcXG15bmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUyxFQUFBOztBQUdiO0VBQ0ksWUFDSixFQUFBOztBQUVBO0VBQ0ksWUFDSixFQUFBOztBQUVBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9teW5hdmJhci9teW5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiogeyAgICBcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufVxyXG5cclxucCB7ICAgIFxyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbmRpdiB7ICAgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7ICAgIFxyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mynavbar/mynavbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/mynavbar/mynavbar.component.ts ***!
  \************************************************/
/*! exports provided: MynavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MynavbarComponent", function() { return MynavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_art_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/art.service */ "./src/app/services/art.service.ts");





var MynavbarComponent = /** @class */ (function () {
    function MynavbarComponent(loginService, artService) {
        this.loginService = loginService;
        this.artService = artService;
    }
    MynavbarComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, _a, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.pages = [];
                        i = 0;
                        _d.label = 1;
                    case 1:
                        _a = i;
                        _c = (_b = Math).ceil;
                        return [4 /*yield*/, this.artService.getArtAmout()];
                    case 2:
                        if (!(_a < _c.apply(_b, [(_d.sent()) / 15]))) return [3 /*break*/, 4];
                        this.pages.push(i + 1);
                        _d.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MynavbarComponent.prototype.getLogedIn = function () {
        return this.loginService.token ? true : false;
    };
    MynavbarComponent.prototype.getIsAdmin = function () {
        if (this.loginService.token) {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(this.loginService.token).role == 'admin';
        }
        else {
            return false;
        }
    };
    MynavbarComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    MynavbarComponent.prototype.getUsername = function () {
        return this.loginService.userName;
    };
    MynavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mynavbar',
            template: __webpack_require__(/*! ./mynavbar.component.html */ "./src/app/mynavbar/mynavbar.component.html"),
            styles: [__webpack_require__(/*! ./mynavbar.component.scss */ "./src/app/mynavbar/mynavbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _services_art_service__WEBPACK_IMPORTED_MODULE_4__["ArtService"]])
    ], MynavbarComponent);
    return MynavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/art.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/art.service.ts ***!
  \*****************************************/
/*! exports provided: ArtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtService", function() { return ArtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");



var ArtService = /** @class */ (function () {
    function ArtService(loginService) {
        this.loginService = loginService;
        this.artItems = [];
    }
    ArtService.prototype.setup = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('http://localhost:4200/api/artItems')
                            .then(function (res) {
                            if (res.status == 200) {
                                return res.json();
                            }
                        })
                            .then(function (data) {
                            if (data) {
                                _this.artItems = data;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArtService.prototype.getArtAmout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.artItems.length == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setup()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.artItems.length];
                }
            });
        });
    };
    ArtService.prototype.getArt = function (startIndex, amount) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.artItems.length == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setup()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.artItems.slice(startIndex, startIndex + amount)];
                }
            });
        });
    };
    ArtService.prototype.removeArt = function (art) {
        var index = this.artItems.findIndex(function (i) { return i.name == art.name; });
        if (index != -1) {
            this.artItems.splice(index, 1);
        }
    };
    ArtService.prototype.getSpecificArt = function (name) {
        return this.artItems.find(function (element) {
            return element.name == name;
        });
    };
    ArtService.prototype.nextArt = function (art) {
        var index = this.artItems.findIndex(function (artitem) { return artitem == art; });
        var newIndex = index + 1 % this.artItems.length;
        return this.artItems[newIndex];
    };
    ArtService.prototype.previousArt = function (art) {
        var index = this.artItems.findIndex(function (artitem) { return artitem == art; });
        var newIndex = index - 1 % this.artItems.length;
        return this.artItems[newIndex];
    };
    ArtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], ArtService);
    return ArtService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js/sha256 */ "./node_modules/crypto-js/sha256.js");
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js_sha256__WEBPACK_IMPORTED_MODULE_2__);



var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.login = function (userName, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var passwordHash, response, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passwordHash = crypto_js_sha256__WEBPACK_IMPORTED_MODULE_2___default()(password);
                        return [4 /*yield*/, fetch('http://localhost:4200/api/login', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'Authorization': this.token
                                },
                                body: JSON.stringify({ user: userName, password: passwordHash.toString() })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.token = data.token;
                        this.userName = userName;
                        return [2 /*return*/, true];
                    case 3:
                        this.token = null;
                        alert('Wrong username or password');
                        return [2 /*return*/, false];
                }
            });
        });
    };
    LoginService.prototype.logout = function () {
        this.token = null;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/shoppingcart.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/shoppingcart.service.ts ***!
  \**************************************************/
/*! exports provided: ShoppingcartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartService", function() { return ShoppingcartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShoppingcartService = /** @class */ (function () {
    function ShoppingcartService() {
        this.artItems = [];
        this.totalValue = 0;
    }
    ShoppingcartService.prototype.addItem = function (artItem) {
        if (!this.artItems.some(function (i) { return i.name == artItem.name; })) {
            this.artItems.push(artItem);
            this.totalValue += artItem.price;
        }
    };
    ShoppingcartService.prototype.removeItem = function (artItem) {
        this.artItems.splice(this.artItems.indexOf(artItem), 1);
        this.totalValue -= artItem.price;
    };
    ShoppingcartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingcartService);
    return ShoppingcartService;
}());



/***/ }),

/***/ "./src/app/shoppingarea/shoppingarea.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shoppingarea/shoppingarea.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n  <div *ngFor=\"let art of this.artItems\">\r\n    <app-artitem [art]=art></app-artitem>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shoppingarea/shoppingarea.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shoppingarea/shoppingarea.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  -webkit-column-count: 5;\n     -moz-column-count: 5;\n          column-count: 5;\n  -webkit-column-gap: 0px;\n     -moz-column-gap: 0px;\n          column-gap: 0px; }\n\n.flex-container div {\n  display: inline-block;\n  width: 100%;\n  height: auto;\n  -webkit-column-break-inside: avoid;\n     -moz-column-break-inside: avoid;\n          break-inside: avoid-column; }\n\n@media (max-width: 1200px) {\n  .flex-container {\n    -webkit-column-count: 4;\n       -moz-column-count: 4;\n            column-count: 4; } }\n\n@media (max-width: 1000px) {\n  .flex-container {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3; } }\n\n@media (max-width: 800px) {\n  .flex-container {\n    -webkit-column-count: 2;\n       -moz-column-count: 2;\n            column-count: 2; } }\n\n@media (max-width: 400px) {\n  .flex-container {\n    -webkit-column-count: 1;\n       -moz-column-count: 1;\n            column-count: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmdhcmVhL0M6XFxVc2Vyc1xcU2lsZW5jZVxcSW5mb3JtYXRpa1xcS2V2aW5cXFNlbWVzdGVyNFxcSVRTZWN1cml0eVxcU21hcnRFUFxcZnJvbnRlbmQvc3JjXFxhcHBcXHNob3BwaW5nYXJlYVxcc2hvcHBpbmdhcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQXVCO0tBQXZCLG9CQUF1QjtVQUF2QixlQUF1QjtFQUN2Qix1QkFBeUI7S0FBekIsb0JBQXlCO1VBQXpCLGVBQXlCLEVBQUE7O0FBRzdCO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQTBCO0tBQTFCLCtCQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSTtJQUNBLHVCQUF1QjtPQUF2QixvQkFBdUI7WUFBdkIsZUFBdUIsRUFBQSxFQUN0Qjs7QUFHTDtFQUNJO0lBQ0EsdUJBQXVCO09BQXZCLG9CQUF1QjtZQUF2QixlQUF1QixFQUFBLEVBQ3RCOztBQUdMO0VBQ0k7SUFDQSx1QkFBdUI7T0FBdkIsb0JBQXVCO1lBQXZCLGVBQXVCLEVBQUEsRUFDdEI7O0FBR0w7RUFDSTtJQUNBLHVCQUF1QjtPQUF2QixvQkFBdUI7WUFBdkIsZUFBdUIsRUFBQSxFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nYXJlYS9zaG9wcGluZ2FyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHBzOi8vY3NzLXRyaWNrcy5jb20vc2VhbWxlc3MtcmVzcG9uc2l2ZS1waG90by1ncmlkL1xyXG5cclxuLmZsZXgtY29udGFpbmVyIHsgICAgXHJcbiAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgNTtcclxuICAgIGNvbHVtbi1nYXA6ICAgICAgICAgICAwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciBkaXYgeyAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYnJlYWstaW5zaWRlOiBhdm9pZC1jb2x1bW47XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgNDtcclxuICAgIH1cclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgY29sdW1uLWNvdW50OiAgICAgICAgIDM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgY29sdW1uLWNvdW50OiAgICAgICAgIDI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgMTtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/shoppingarea/shoppingarea.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoppingarea/shoppingarea.component.ts ***!
  \********************************************************/
/*! exports provided: ShoppingareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingareaComponent", function() { return ShoppingareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_art_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/art.service */ "./src/app/services/art.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ShoppingareaComponent = /** @class */ (function () {
    function ShoppingareaComponent(artService, route) {
        this.artService = artService;
        this.route = route;
        this.artItems = [];
    }
    ShoppingareaComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.route.params.subscribe(function (params) {
                    if (document.URL.split('/')[document.URL.split('/').length - 2] == 'page') {
                        try {
                            _this.page = Number(document.URL.split('/')[document.URL.split('/').length - 1]);
                        }
                        catch (_a) {
                            _this.page = 1;
                        }
                    }
                    else {
                        _this.page = 1;
                    }
                    _this.getArt();
                });
                if (document.URL.split('/')[document.URL.split('/').length - 2] == 'page') {
                    try {
                        this.page = Number(document.URL.split('/')[document.URL.split('/').length - 1]);
                    }
                    catch (_b) {
                        this.page = 1;
                    }
                }
                else {
                    this.page = 1;
                }
                this.getArt();
                return [2 /*return*/];
            });
        });
    };
    ShoppingareaComponent.prototype.getArt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.artService.getArt((this.page - 1) * 15, 15)];
                    case 1:
                        _a.artItems = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoppingarea',
            template: __webpack_require__(/*! ./shoppingarea.component.html */ "./src/app/shoppingarea/shoppingarea.component.html"),
            styles: [__webpack_require__(/*! ./shoppingarea.component.scss */ "./src/app/shoppingarea/shoppingarea.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_art_service__WEBPACK_IMPORTED_MODULE_2__["ArtService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ShoppingareaComponent);
    return ShoppingareaComponent;
}());



/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n    <div *ngFor=\"let art of this.artItems\">\r\n      <app-shoppingcartitem [art]=art></app-shoppingcartitem>\r\n    </div>\r\n</div>\r\n<div class=\"fixed-bottom\">\r\n  <div id=\"button-container\">\r\n    <button class=\"button btn-secondary\" (click)=\"buyItems()\">Buy Items   Price: {{getTotalValue()}}€</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  -webkit-column-count: 5;\n     -moz-column-count: 5;\n          column-count: 5;\n  -webkit-column-gap: 0px;\n     -moz-column-gap: 0px;\n          column-gap: 0px; }\n\n.flex-container div {\n  display: inline-block;\n  width: 100%;\n  height: auto;\n  -webkit-column-break-inside: avoid;\n     -moz-column-break-inside: avoid;\n          break-inside: avoid-column; }\n\n@media (max-width: 1200px) {\n  .flex-container {\n    -webkit-column-count: 4;\n       -moz-column-count: 4;\n            column-count: 4; } }\n\n@media (max-width: 1000px) {\n  .flex-container {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3; } }\n\n@media (max-width: 800px) {\n  .flex-container {\n    -webkit-column-count: 2;\n       -moz-column-count: 2;\n            column-count: 2; } }\n\n@media (max-width: 400px) {\n  .flex-container {\n    -webkit-column-count: 1;\n       -moz-column-count: 1;\n            column-count: 1; } }\n\n.button {\n  width: 80%;\n  height: 30px;\n  align-content: center;\n  border-radius: 0.5em; }\n\n#button-container {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmdjYXJ0L0M6XFxVc2Vyc1xcU2lsZW5jZVxcSW5mb3JtYXRpa1xcS2V2aW5cXFNlbWVzdGVyNFxcSVRTZWN1cml0eVxcU21hcnRFUFxcZnJvbnRlbmQvc3JjXFxhcHBcXHNob3BwaW5nY2FydFxcc2hvcHBpbmdjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQXVCO0tBQXZCLG9CQUF1QjtVQUF2QixlQUF1QjtFQUN2Qix1QkFBeUI7S0FBekIsb0JBQXlCO1VBQXpCLGVBQXlCLEVBQUE7O0FBRzdCO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQTBCO0tBQTFCLCtCQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSTtJQUNBLHVCQUF1QjtPQUF2QixvQkFBdUI7WUFBdkIsZUFBdUIsRUFBQSxFQUN0Qjs7QUFHTDtFQUNJO0lBQ0EsdUJBQXVCO09BQXZCLG9CQUF1QjtZQUF2QixlQUF1QixFQUFBLEVBQ3RCOztBQUdMO0VBQ0k7SUFDQSx1QkFBdUI7T0FBdkIsb0JBQXVCO1lBQXZCLGVBQXVCLEVBQUEsRUFDdEI7O0FBR0w7RUFDSTtJQUNBLHVCQUF1QjtPQUF2QixvQkFBdUI7WUFBdkIsZUFBdUIsRUFBQSxFQUN0Qjs7QUFHTDtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zZWFtbGVzcy1yZXNwb25zaXZlLXBob3RvLWdyaWQvXHJcblxyXG4uZmxleC1jb250YWluZXIgeyAgICBcclxuICAgIGNvbHVtbi1jb3VudDogICAgICAgICA1O1xyXG4gICAgY29sdW1uLWdhcDogICAgICAgICAgIDBweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIGRpdiB7ICAgIFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBicmVhay1pbnNpZGU6IGF2b2lkLWNvbHVtbjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGNvbHVtbi1jb3VudDogICAgICAgICA0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgMztcclxuICAgIH1cclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgMjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGNvbHVtbi1jb3VudDogICAgICAgICAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG59XHJcblxyXG4jYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.ts ***!
  \********************************************************/
/*! exports provided: ShoppingcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartComponent", function() { return ShoppingcartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_art_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/art.service */ "./src/app/services/art.service.ts");





var ShoppingcartComponent = /** @class */ (function () {
    function ShoppingcartComponent(shoppingCartService, loginService, artService) {
        this.shoppingCartService = shoppingCartService;
        this.loginService = loginService;
        this.artService = artService;
        this.artItems = [];
    }
    ShoppingcartComponent.prototype.ngOnInit = function () {
        this.artItems = this.shoppingCartService.artItems;
        this.artItems.forEach(function (item) {
        });
    };
    ShoppingcartComponent.prototype.buyItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('http://localhost:4200/api/buy', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': this.loginService.token
                            },
                            body: JSON.stringify(this.artItems)
                        })
                            .then(function (res) {
                            if (res.status == 200) {
                                alert("Items bought!");
                                var artItemsClone = Object.assign([], _this.artItems);
                                for (var i = 0; i < artItemsClone.length; i++) {
                                    _this.artService.removeArt(artItemsClone[i]);
                                    _this.shoppingCartService.removeItem(artItemsClone[i]);
                                }
                                ;
                            }
                            else {
                                alert("You need to be logged in as user to buy items");
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingcartComponent.prototype.getTotalValue = function () {
        return this.shoppingCartService.totalValue;
    };
    ShoppingcartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoppingcart',
            template: __webpack_require__(/*! ./shoppingcart.component.html */ "./src/app/shoppingcart/shoppingcart.component.html"),
            styles: [__webpack_require__(/*! ./shoppingcart.component.scss */ "./src/app/shoppingcart/shoppingcart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingcartService"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _services_art_service__WEBPACK_IMPORTED_MODULE_4__["ArtService"]])
    ], ShoppingcartComponent);
    return ShoppingcartComponent;
}());



/***/ }),

/***/ "./src/app/shoppingcartitem/shoppingcartitem.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shoppingcartitem/shoppingcartitem.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <div class=\"text\">\r\n    <p>{{art.name}}</p>\r\n  </div>\r\n  <div>\r\n    <img id=\"image\" [src]=art.imgSource [alt]=art.name />\r\n  </div>\r\n  <div class=\"text\">\r\n    <p>{{art.price}}€</p>\r\n  </div>\r\n  <div id=\"button-container\">\r\n    <button class=\"button btn-secondary\" (click)=\"removefromShoppingCart()\">Remove from shopping cart</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shoppingcartitem/shoppingcartitem.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shoppingcartitem/shoppingcartitem.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  text-align: center; }\n\n.button {\n  width: 80%;\n  height: 30px;\n  align-content: center;\n  border-radius: 0.5em; }\n\n#button-container {\n  text-align: center; }\n\n#container {\n  margin: 1em;\n  max-width: 26em;\n  padding: 0.5em;\n  border-radius: 2em;\n  border: 3px solid black;\n  box-sizing: border-box; }\n\n#image {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmdjYXJ0aXRlbS9DOlxcVXNlcnNcXFNpbGVuY2VcXEluZm9ybWF0aWtcXEtldmluXFxTZW1lc3RlcjRcXElUU2VjdXJpdHlcXFNtYXJ0RVBcXGZyb250ZW5kL3NyY1xcYXBwXFxzaG9wcGluZ2NhcnRpdGVtXFxzaG9wcGluZ2NhcnRpdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZ2NhcnRpdGVtL3Nob3BwaW5nY2FydGl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG59XHJcblxyXG4jYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBtYXgtd2lkdGg6IDI2ZW07XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI2ltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shoppingcartitem/shoppingcartitem.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shoppingcartitem/shoppingcartitem.component.ts ***!
  \****************************************************************/
/*! exports provided: ShoppingcartitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartitemComponent", function() { return ShoppingcartitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _artItemInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artItemInfo */ "./src/app/artItemInfo.ts");





var ShoppingcartitemComponent = /** @class */ (function () {
    function ShoppingcartitemComponent(router, shoppingCartSerive) {
        this.router = router;
        this.shoppingCartSerive = shoppingCartSerive;
    }
    ShoppingcartitemComponent.prototype.ngOnInit = function () {
    };
    ShoppingcartitemComponent.prototype.removefromShoppingCart = function () {
        this.shoppingCartSerive.removeItem(this.art);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _artItemInfo__WEBPACK_IMPORTED_MODULE_4__["ArtItemInfo"])
    ], ShoppingcartitemComponent.prototype, "art", void 0);
    ShoppingcartitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoppingcartitem',
            template: __webpack_require__(/*! ./shoppingcartitem.component.html */ "./src/app/shoppingcartitem/shoppingcartitem.component.html"),
            styles: [__webpack_require__(/*! ./shoppingcartitem.component.scss */ "./src/app/shoppingcartitem/shoppingcartitem.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingcartService"]])
    ], ShoppingcartitemComponent);
    return ShoppingcartitemComponent;
}());



/***/ }),

/***/ "./src/app/solditem/solditem.component.html":
/*!**************************************************!*\
  !*** ./src/app/solditem/solditem.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <div class=\"text\">\r\n    <p>{{item.name}}</p>\r\n  </div>\r\n  <div>\r\n    <img id=\"image\" [src]=item.imgSource [alt]=item.name />\r\n  </div>\r\n  <div class=\"text\">\r\n    <p>{{item.price}}€</p>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/solditem/solditem.component.scss":
/*!**************************************************!*\
  !*** ./src/app/solditem/solditem.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  text-align: center; }\n\n#container {\n  margin: 1em;\n  max-width: 26em;\n  padding: 0.5em;\n  border-radius: 2em;\n  border: 3px solid black;\n  box-sizing: border-box; }\n\n#image {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29sZGl0ZW0vQzpcXFVzZXJzXFxTaWxlbmNlXFxJbmZvcm1hdGlrXFxLZXZpblxcU2VtZXN0ZXI0XFxJVFNlY3VyaXR5XFxTbWFydEVQXFxmcm9udGVuZC9zcmNcXGFwcFxcc29sZGl0ZW1cXHNvbGRpdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zb2xkaXRlbS9zb2xkaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIG1heC13aWR0aDogMjZlbTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4jaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/solditem/solditem.component.ts":
/*!************************************************!*\
  !*** ./src/app/solditem/solditem.component.ts ***!
  \************************************************/
/*! exports provided: SolditemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolditemComponent", function() { return SolditemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _artItemInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../artItemInfo */ "./src/app/artItemInfo.ts");



var SolditemComponent = /** @class */ (function () {
    function SolditemComponent() {
    }
    SolditemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _artItemInfo__WEBPACK_IMPORTED_MODULE_2__["ArtItemInfo"])
    ], SolditemComponent.prototype, "item", void 0);
    SolditemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-solditem',
            template: __webpack_require__(/*! ./solditem.component.html */ "./src/app/solditem/solditem.component.html"),
            styles: [__webpack_require__(/*! ./solditem.component.scss */ "./src/app/solditem/solditem.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SolditemComponent);
    return SolditemComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Silence\Informatik\Kevin\Semester4\ITSecurity\SmartEP\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map