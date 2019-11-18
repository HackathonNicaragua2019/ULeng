(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["letra-n1-letra-n1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/letra-n1/letra-n1.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/letra-n1/letra-n1.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"background\">\r\n    <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\r\n      <img src=\"/assets/img/abecedario/ñ.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px;\">\r\n    </div>\r\n  \r\n    <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\r\n      <img src=\"/assets/img/gif_abecedario/Ñ.gif\" alt=\"Enviar\" style= \"width: 160px; height: 260px;\">\r\n    </div>\r\n\r\n    <button ion-button block (click)=\"accion()\">Ver Instrucciones...</button>\r\n    <ion-card *ngIf=\"ocultar\" color=\"interfaz\">\r\n      <h6>Colocar los dedos índice y medio hacia abajo rectos, los demás colocarlos debajo de los 2 dedos y mover la mano hacia los lados.</h6>\r\n    </ion-card>\r\n</ion-content>\r\n  \r\n  <ion-footer>\r\n      <ion-toolbar color=\"rosa\">\r\n        <ion-buttons slot=\"start\" style=\"margin-left: 10px;\">\r\n          <ion-button (click)='anterior()'><ion-icon name=\"arrow-dropleft-circle\"></ion-icon></ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"start\" style=\"margin-left: 35px;\">\r\n          <ion-button (click)='siguiente()'><ion-icon name=\"arrow-dropright-circle\"></ion-icon></ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\" style=\"margin-right: 35px;\">\r\n          <ion-button (click)='home()'><ion-icon name=\"home\"></ion-icon></ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\" style=\"margin-right: 10px;\">\r\n          <ion-button (click)='regresar_categoria()'><ion-icon name=\"exit\"></ion-icon></ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-footer>"

/***/ }),

/***/ "./src/app/letra-n1/letra-n1.module.ts":
/*!*********************************************!*\
  !*** ./src/app/letra-n1/letra-n1.module.ts ***!
  \*********************************************/
/*! exports provided: LetraN1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetraN1PageModule", function() { return LetraN1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _letra_n1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./letra-n1.page */ "./src/app/letra-n1/letra-n1.page.ts");







var routes = [
    {
        path: '',
        component: _letra_n1_page__WEBPACK_IMPORTED_MODULE_6__["LetraN1Page"]
    }
];
var LetraN1PageModule = /** @class */ (function () {
    function LetraN1PageModule() {
    }
    LetraN1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_letra_n1_page__WEBPACK_IMPORTED_MODULE_6__["LetraN1Page"]]
        })
    ], LetraN1PageModule);
    return LetraN1PageModule;
}());



/***/ }),

/***/ "./src/app/letra-n1/letra-n1.page.scss":
/*!*********************************************!*\
  !*** ./src/app/letra-n1/letra-n1.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background:url(\"/assets/img/interfaz.png\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV0cmEtbjEvQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxBcHBcXFVMZW5nL3NyY1xcYXBwXFxsZXRyYS1uMVxcbGV0cmEtbjEucGFnZS5zY3NzIiwic3JjL2FwcC9sZXRyYS1uMS9sZXRyYS1uMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvRUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGV0cmEtbjEvbGV0cmEtbjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1nL2ludGVyZmF6LnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59IiwiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDp1cmwoXCIvYXNzZXRzL2ltZy9pbnRlcmZhei5wbmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/letra-n1/letra-n1.page.ts":
/*!*******************************************!*\
  !*** ./src/app/letra-n1/letra-n1.page.ts ***!
  \*******************************************/
/*! exports provided: LetraN1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetraN1Page", function() { return LetraN1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LetraN1Page = /** @class */ (function () {
    function LetraN1Page(router) {
        this.router = router;
        this.ocultar = false;
    }
    LetraN1Page.prototype.home = function () {
        this.router.navigate(["/categorias"]);
    };
    LetraN1Page.prototype.regresar_categoria = function () {
        this.router.navigate(["/cat-abecedario"]);
    };
    LetraN1Page.prototype.siguiente = function () {
        this.router.navigate(["/letra-o"]);
    };
    LetraN1Page.prototype.anterior = function () {
        this.router.navigate(["/letra-n"]);
    };
    LetraN1Page.prototype.accion = function () {
        this.ocultar = !this.ocultar;
    };
    LetraN1Page.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LetraN1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-letra-n1',
            template: __webpack_require__(/*! raw-loader!./letra-n1.page.html */ "./node_modules/raw-loader/index.js!./src/app/letra-n1/letra-n1.page.html"),
            styles: [__webpack_require__(/*! ./letra-n1.page.scss */ "./src/app/letra-n1/letra-n1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LetraN1Page);
    return LetraN1Page;
}());



/***/ })

}]);
//# sourceMappingURL=letra-n1-letra-n1-module-es5.js.map