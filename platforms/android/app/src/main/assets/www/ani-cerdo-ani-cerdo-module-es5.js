(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ani-cerdo-ani-cerdo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ani-cerdo/ani-cerdo.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ani-cerdo/ani-cerdo.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"background\">\n    <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\n      <img src=\"/assets/img/animales/cerdo.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px;\">\n    </div>\n  \n    <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\n      <img src=\"/assets/img/gif_animales/Cerdo.gif\" alt=\"Enviar\" style= \"width: 160px; height: 260px;\">\n    </div>\n\n    <button ion-button block (click)=\"accion()\">Ver Instrucciones...</button>\n    <ion-card *ngIf=\"ocultar\" color=\"interfaz\">\n      <h6>Colocar la mano cerrada a excepción del dedo pulgar.</h6>\n    </ion-card>\n\n</ion-content>\n  \n  <ion-footer>\n      <ion-toolbar color=\"rosa\">\n        <ion-buttons slot=\"start\" style=\"margin-left: 10px;\">\n          <ion-button><ion-icon name=\"arrow-dropleft-circle\"></ion-icon></ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\" style=\"margin-left: 35px;\">\n          <ion-button (click)='siguiente()'><ion-icon name=\"arrow-dropright-circle\"></ion-icon></ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\" style=\"margin-right: 35px;\">\n          <ion-button (click)='home()'><ion-icon name=\"home\"></ion-icon></ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\" style=\"margin-right: 10px;\">\n          <ion-button (click)='regresar_categoria()'><ion-icon name=\"exit\"></ion-icon></ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-footer>"

/***/ }),

/***/ "./src/app/ani-cerdo/ani-cerdo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ani-cerdo/ani-cerdo.module.ts ***!
  \***********************************************/
/*! exports provided: AniCerdoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AniCerdoPageModule", function() { return AniCerdoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ani_cerdo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ani-cerdo.page */ "./src/app/ani-cerdo/ani-cerdo.page.ts");







var routes = [
    {
        path: '',
        component: _ani_cerdo_page__WEBPACK_IMPORTED_MODULE_6__["AniCerdoPage"]
    }
];
var AniCerdoPageModule = /** @class */ (function () {
    function AniCerdoPageModule() {
    }
    AniCerdoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ani_cerdo_page__WEBPACK_IMPORTED_MODULE_6__["AniCerdoPage"]]
        })
    ], AniCerdoPageModule);
    return AniCerdoPageModule;
}());



/***/ }),

/***/ "./src/app/ani-cerdo/ani-cerdo.page.scss":
/*!***********************************************!*\
  !*** ./src/app/ani-cerdo/ani-cerdo.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background:url(\"/assets/img/interfaz.png\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pLWNlcmRvL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcQXBwXFxVTGVuZy9zcmNcXGFwcFxcYW5pLWNlcmRvXFxhbmktY2VyZG8ucGFnZS5zY3NzIiwic3JjL2FwcC9hbmktY2VyZG8vYW5pLWNlcmRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9FQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hbmktY2VyZG8vYW5pLWNlcmRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2ltZy9pbnRlcmZhei5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufSIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6dXJsKFwiL2Fzc2V0cy9pbWcvaW50ZXJmYXoucG5nXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ani-cerdo/ani-cerdo.page.ts":
/*!*********************************************!*\
  !*** ./src/app/ani-cerdo/ani-cerdo.page.ts ***!
  \*********************************************/
/*! exports provided: AniCerdoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AniCerdoPage", function() { return AniCerdoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AniCerdoPage = /** @class */ (function () {
    function AniCerdoPage(router) {
        this.router = router;
        this.ocultar = false;
    }
    AniCerdoPage.prototype.home = function () {
        this.router.navigate(["/categorias"]);
    };
    AniCerdoPage.prototype.regresar_categoria = function () {
        this.router.navigate(["/cat-animales"]);
    };
    AniCerdoPage.prototype.siguiente = function () {
        this.router.navigate(["/ani-conejo"]);
    };
    AniCerdoPage.prototype.anterior = function () {
        this.router.navigate(["/ani-caballo"]);
    };
    AniCerdoPage.prototype.accion = function () {
        this.ocultar = !this.ocultar;
    };
    AniCerdoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AniCerdoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ani-cerdo',
            template: __webpack_require__(/*! raw-loader!./ani-cerdo.page.html */ "./node_modules/raw-loader/index.js!./src/app/ani-cerdo/ani-cerdo.page.html"),
            styles: [__webpack_require__(/*! ./ani-cerdo.page.scss */ "./src/app/ani-cerdo/ani-cerdo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AniCerdoPage);
    return AniCerdoPage;
}());



/***/ })

}]);
//# sourceMappingURL=ani-cerdo-ani-cerdo-module-es5.js.map