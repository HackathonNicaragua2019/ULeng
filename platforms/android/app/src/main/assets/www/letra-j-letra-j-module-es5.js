(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["letra-j-letra-j-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/letra-j/letra-j.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/letra-j/letra-j.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"background\">\r\n    <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\r\n      <img src=\"/assets/img/abecedario/j.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px;\">\r\n    </div>\r\n  \r\n    <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\r\n      <img src=\"/assets/img/gif_abecedario/J.gif\" alt=\"Enviar\" style= \"width: 160px; height: 260px;\">\r\n    </div>\r\n\r\n    <button ion-button block (click)=\"accion()\">Ver Instrucciones...</button>\r\n    <ion-card *ngIf=\"ocultar\" color=\"interfaz\">\r\n      <h6>Con el dedo meñique y los demás dedos juntos, girar la mano (si es diestro a la derecha, si es zurdo a la izquierda) formando la letra \"J\".</h6>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n  \r\n  <ion-footer>\r\n      <ion-toolbar color=\"rosa\">\r\n        <ion-buttons slot=\"start\" style=\"margin-left: 10px;\">\r\n          <ion-button (click)='anterior()'><ion-icon name=\"arrow-dropleft-circle\"></ion-icon></ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"start\" style=\"margin-left: 35px;\">\r\n          <ion-button (click)='siguiente()'><ion-icon name=\"arrow-dropright-circle\"></ion-icon></ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\" style=\"margin-right: 35px;\">\r\n          <ion-button (click)='home()'><ion-icon name=\"home\"></ion-icon></ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\" style=\"margin-right: 10px;\">\r\n          <ion-button (click)='regresar_categoria()'><ion-icon name=\"exit\"></ion-icon></ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-footer>"

/***/ }),

/***/ "./src/app/letra-j/letra-j.module.ts":
/*!*******************************************!*\
  !*** ./src/app/letra-j/letra-j.module.ts ***!
  \*******************************************/
/*! exports provided: LetraJPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetraJPageModule", function() { return LetraJPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _letra_j_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./letra-j.page */ "./src/app/letra-j/letra-j.page.ts");







var routes = [
    {
        path: '',
        component: _letra_j_page__WEBPACK_IMPORTED_MODULE_6__["LetraJPage"]
    }
];
var LetraJPageModule = /** @class */ (function () {
    function LetraJPageModule() {
    }
    LetraJPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_letra_j_page__WEBPACK_IMPORTED_MODULE_6__["LetraJPage"]]
        })
    ], LetraJPageModule);
    return LetraJPageModule;
}());



/***/ }),

/***/ "./src/app/letra-j/letra-j.page.scss":
/*!*******************************************!*\
  !*** ./src/app/letra-j/letra-j.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background:url(\"/assets/img/interfaz.png\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV0cmEtai9DOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXEFwcFxcVUxlbmcvc3JjXFxhcHBcXGxldHJhLWpcXGxldHJhLWoucGFnZS5zY3NzIiwic3JjL2FwcC9sZXRyYS1qL2xldHJhLWoucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0VBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xldHJhLWovbGV0cmEtai5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9pbWcvaW50ZXJmYXoucG5nJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOnVybChcIi9hc3NldHMvaW1nL2ludGVyZmF6LnBuZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/letra-j/letra-j.page.ts":
/*!*****************************************!*\
  !*** ./src/app/letra-j/letra-j.page.ts ***!
  \*****************************************/
/*! exports provided: LetraJPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetraJPage", function() { return LetraJPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LetraJPage = /** @class */ (function () {
    function LetraJPage(router) {
        this.router = router;
        this.ocultar = false;
    }
    LetraJPage.prototype.home = function () {
        this.router.navigate(["/categorias"]);
    };
    LetraJPage.prototype.regresar_categoria = function () {
        this.router.navigate(["/cat-abecedario"]);
    };
    LetraJPage.prototype.siguiente = function () {
        this.router.navigate(["/letra-k"]);
    };
    LetraJPage.prototype.anterior = function () {
        this.router.navigate(["/letra-i"]);
    };
    LetraJPage.prototype.accion = function () {
        this.ocultar = !this.ocultar;
    };
    LetraJPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LetraJPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-letra-j',
            template: __webpack_require__(/*! raw-loader!./letra-j.page.html */ "./node_modules/raw-loader/index.js!./src/app/letra-j/letra-j.page.html"),
            styles: [__webpack_require__(/*! ./letra-j.page.scss */ "./src/app/letra-j/letra-j.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LetraJPage);
    return LetraJPage;
}());



/***/ })

}]);
//# sourceMappingURL=letra-j-letra-j-module-es5.js.map