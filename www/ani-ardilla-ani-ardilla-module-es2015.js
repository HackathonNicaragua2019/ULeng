(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ani-ardilla-ani-ardilla-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ani-ardilla/ani-ardilla.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ani-ardilla/ani-ardilla.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"background\">\n    <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\n      <img src=\"/assets/img/animales/ardilla.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px;\">\n    </div>\n  \n    <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\n      <img src=\"/assets/img/gif_animales/Ardilla.gif\" alt=\"Enviar\" style= \"width: 160px; height: 260px;\">\n    </div>\n\n    <button ion-button block (click)=\"accion()\">Ver Instrucciones...</button>\n    <ion-card *ngIf=\"ocultar\" color=\"interfaz\">\n      <h6>Colocar la mano cerrada a excepción del dedo pulgar.</h6>\n    </ion-card>\n\n</ion-content>\n  \n  <ion-footer>\n      <ion-toolbar color=\"rosa\">\n        <ion-buttons slot=\"start\" style=\"margin-left: 10px;\">\n          <ion-button><ion-icon name=\"arrow-dropleft-circle\"></ion-icon></ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\" style=\"margin-left: 35px;\">\n          <ion-button (click)='siguiente()'><ion-icon name=\"arrow-dropright-circle\"></ion-icon></ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\" style=\"margin-right: 35px;\">\n          <ion-button (click)='home()'><ion-icon name=\"home\"></ion-icon></ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\" style=\"margin-right: 10px;\">\n          <ion-button (click)='regresar_categoria()'><ion-icon name=\"exit\"></ion-icon></ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-footer>\n"

/***/ }),

/***/ "./src/app/ani-ardilla/ani-ardilla.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ani-ardilla/ani-ardilla.module.ts ***!
  \***************************************************/
/*! exports provided: AniArdillaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AniArdillaPageModule", function() { return AniArdillaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ani_ardilla_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ani-ardilla.page */ "./src/app/ani-ardilla/ani-ardilla.page.ts");







const routes = [
    {
        path: '',
        component: _ani_ardilla_page__WEBPACK_IMPORTED_MODULE_6__["AniArdillaPage"]
    }
];
let AniArdillaPageModule = class AniArdillaPageModule {
};
AniArdillaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ani_ardilla_page__WEBPACK_IMPORTED_MODULE_6__["AniArdillaPage"]]
    })
], AniArdillaPageModule);



/***/ }),

/***/ "./src/app/ani-ardilla/ani-ardilla.page.scss":
/*!***************************************************!*\
  !*** ./src/app/ani-ardilla/ani-ardilla.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background:url(\"/assets/img/interfaz.png\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pLWFyZGlsbGEvQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxBcHBcXFVMZW5nL3NyY1xcYXBwXFxhbmktYXJkaWxsYVxcYW5pLWFyZGlsbGEucGFnZS5zY3NzIiwic3JjL2FwcC9hbmktYXJkaWxsYS9hbmktYXJkaWxsYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvRUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYW5pLWFyZGlsbGEvYW5pLWFyZGlsbGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1nL2ludGVyZmF6LnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59IiwiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDp1cmwoXCIvYXNzZXRzL2ltZy9pbnRlcmZhei5wbmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/ani-ardilla/ani-ardilla.page.ts":
/*!*************************************************!*\
  !*** ./src/app/ani-ardilla/ani-ardilla.page.ts ***!
  \*************************************************/
/*! exports provided: AniArdillaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AniArdillaPage", function() { return AniArdillaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AniArdillaPage = class AniArdillaPage {
    constructor(router) {
        this.router = router;
        this.ocultar = false;
    }
    home() {
        this.router.navigate(["/categorias"]);
    }
    regresar_categoria() {
        this.router.navigate(["/cat-animales"]);
    }
    siguiente() {
        this.router.navigate(["/ani-caballo"]);
    }
    accion() {
        this.ocultar = !this.ocultar;
    }
};
AniArdillaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AniArdillaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ani-ardilla',
        template: __webpack_require__(/*! raw-loader!./ani-ardilla.page.html */ "./node_modules/raw-loader/index.js!./src/app/ani-ardilla/ani-ardilla.page.html"),
        styles: [__webpack_require__(/*! ./ani-ardilla.page.scss */ "./src/app/ani-ardilla/ani-ardilla.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AniArdillaPage);



/***/ })

}]);
//# sourceMappingURL=ani-ardilla-ani-ardilla-module-es2015.js.map