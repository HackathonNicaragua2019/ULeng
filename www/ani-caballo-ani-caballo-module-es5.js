(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ani-caballo-ani-caballo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ani-caballo/ani-caballo.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ani-caballo/ani-caballo.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"background\">\n    <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\n      <img src=\"/assets/img/animales/caballo.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px;\">\n    </div>\n  \n    <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\n      <img src=\"/assets/img/gif_animales/Caballo.gif\" alt=\"Enviar\" style= \"width: 160px; height: 260px;\">\n    </div>\n\n    <button ion-button block (click)=\"accion()\">Ver Instrucciones...</button>\n    <ion-card *ngIf=\"ocultar\" color=\"interfaz\">\n      <h6>Colocar la mano cerrada a excepción del dedo pulgar.</h6>\n    </ion-card>\n\n</ion-content>\n  \n  <ion-footer>\n      <ion-toolbar color=\"rosa\">\n        <ion-buttons slot=\"start\" style=\"margin-left: 10px;\">\n          <ion-button><ion-icon name=\"arrow-dropleft-circle\"></ion-icon></ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\" style=\"margin-left: 35px;\">\n          <ion-button (click)='siguiente()'><ion-icon name=\"arrow-dropright-circle\"></ion-icon></ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\" style=\"margin-right: 35px;\">\n          <ion-button (click)='home()'><ion-icon name=\"home\"></ion-icon></ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\" style=\"margin-right: 10px;\">\n          <ion-button (click)='regresar_categoria()'><ion-icon name=\"exit\"></ion-icon></ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-footer>\n\n"

/***/ }),

/***/ "./src/app/ani-caballo/ani-caballo.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ani-caballo/ani-caballo.module.ts ***!
  \***************************************************/
/*! exports provided: AniCaballoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AniCaballoPageModule", function() { return AniCaballoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ani_caballo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ani-caballo.page */ "./src/app/ani-caballo/ani-caballo.page.ts");







var routes = [
    {
        path: '',
        component: _ani_caballo_page__WEBPACK_IMPORTED_MODULE_6__["AniCaballoPage"]
    }
];
var AniCaballoPageModule = /** @class */ (function () {
    function AniCaballoPageModule() {
    }
    AniCaballoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ani_caballo_page__WEBPACK_IMPORTED_MODULE_6__["AniCaballoPage"]]
        })
    ], AniCaballoPageModule);
    return AniCaballoPageModule;
}());



/***/ }),

/***/ "./src/app/ani-caballo/ani-caballo.page.scss":
/*!***************************************************!*\
  !*** ./src/app/ani-caballo/ani-caballo.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaS1jYWJhbGxvL2FuaS1jYWJhbGxvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ani-caballo/ani-caballo.page.ts":
/*!*************************************************!*\
  !*** ./src/app/ani-caballo/ani-caballo.page.ts ***!
  \*************************************************/
/*! exports provided: AniCaballoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AniCaballoPage", function() { return AniCaballoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AniCaballoPage = /** @class */ (function () {
    function AniCaballoPage(router) {
        this.router = router;
        this.ocultar = false;
    }
    AniCaballoPage.prototype.home = function () {
        this.router.navigate(["/categorias"]);
    };
    AniCaballoPage.prototype.regresar_categoria = function () {
        this.router.navigate(["/cat-animales"]);
    };
    AniCaballoPage.prototype.siguiente = function () {
        this.router.navigate(["/ani-cerdo"]);
    };
    AniCaballoPage.prototype.accion = function () {
        this.ocultar = !this.ocultar;
    };
    AniCaballoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AniCaballoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ani-caballo',
            template: __webpack_require__(/*! raw-loader!./ani-caballo.page.html */ "./node_modules/raw-loader/index.js!./src/app/ani-caballo/ani-caballo.page.html"),
            styles: [__webpack_require__(/*! ./ani-caballo.page.scss */ "./src/app/ani-caballo/ani-caballo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AniCaballoPage);
    return AniCaballoPage;
}());



/***/ })

}]);
//# sourceMappingURL=ani-caballo-ani-caballo-module-es5.js.map