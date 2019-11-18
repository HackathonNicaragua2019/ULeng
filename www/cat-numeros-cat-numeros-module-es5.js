(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cat-numeros-cat-numeros-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cat-numeros/cat-numeros.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cat-numeros/cat-numeros.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"rosa\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)='regresar_categoria()'><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>Números!</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)='home()'><ion-icon name=\"home\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"background\">\r\n\r\n  <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\r\n    <a href=\"1\"><img src=\"/assets/img/numeros/1.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"2\"><img src=\"/assets/img/numeros/2.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"3\"><img src=\"/assets/img/numeros/3.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"4\"><img src=\"/assets/img/numeros/4.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"5\"><img src=\"/assets/img/numeros/5.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"6\"><img src=\"/assets/img/numeros/6.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"7\"><img src=\"/assets/img/numeros/7.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"8\"><img src=\"/assets/img/numeros/8.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"9\"><img src=\"/assets/img/numeros/9.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"10\"><img src=\"/assets/img/numeros/10.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"11\"><img src=\"/assets/img/numeros/11.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"12\"><img src=\"/assets/img/numeros/12.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"13\"><img src=\"/assets/img/numeros/13.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"14\"><img src=\"/assets/img/numeros/14.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"15\"><img src=\"/assets/img/numeros/15.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"16\"><img src=\"/assets/img/numeros/16.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"17\"><img src=\"/assets/img/numeros/17.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"18\"><img src=\"/assets/img/numeros/18.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"19\"><img src=\"/assets/img/numeros/19.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"20\"><img src=\"/assets/img/numeros/20.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/cat-numeros/cat-numeros.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cat-numeros/cat-numeros.module.ts ***!
  \***************************************************/
/*! exports provided: CatNumerosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatNumerosPageModule", function() { return CatNumerosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cat_numeros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cat-numeros.page */ "./src/app/cat-numeros/cat-numeros.page.ts");







var routes = [
    {
        path: '',
        component: _cat_numeros_page__WEBPACK_IMPORTED_MODULE_6__["CatNumerosPage"]
    }
];
var CatNumerosPageModule = /** @class */ (function () {
    function CatNumerosPageModule() {
    }
    CatNumerosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cat_numeros_page__WEBPACK_IMPORTED_MODULE_6__["CatNumerosPage"]]
        })
    ], CatNumerosPageModule);
    return CatNumerosPageModule;
}());



/***/ }),

/***/ "./src/app/cat-numeros/cat-numeros.page.scss":
/*!***************************************************!*\
  !*** ./src/app/cat-numeros/cat-numeros.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background:url(\"/assets/img/interfaz.png\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0LW51bWVyb3MvQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxBcHBcXFVMZW5nL3NyY1xcYXBwXFxjYXQtbnVtZXJvc1xcY2F0LW51bWVyb3MucGFnZS5zY3NzIiwic3JjL2FwcC9jYXQtbnVtZXJvcy9jYXQtbnVtZXJvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvRUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2F0LW51bWVyb3MvY2F0LW51bWVyb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1nL2ludGVyZmF6LnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59IiwiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDp1cmwoXCIvYXNzZXRzL2ltZy9pbnRlcmZhei5wbmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/cat-numeros/cat-numeros.page.ts":
/*!*************************************************!*\
  !*** ./src/app/cat-numeros/cat-numeros.page.ts ***!
  \*************************************************/
/*! exports provided: CatNumerosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatNumerosPage", function() { return CatNumerosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CatNumerosPage = /** @class */ (function () {
    function CatNumerosPage(router) {
        this.router = router;
    }
    CatNumerosPage.prototype.regresar_categoria = function () {
        this.router.navigate(["/categorias"]);
    };
    CatNumerosPage.prototype.home = function () {
        this.router.navigate(["/home"]);
    };
    CatNumerosPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CatNumerosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cat-numeros',
            template: __webpack_require__(/*! raw-loader!./cat-numeros.page.html */ "./node_modules/raw-loader/index.js!./src/app/cat-numeros/cat-numeros.page.html"),
            styles: [__webpack_require__(/*! ./cat-numeros.page.scss */ "./src/app/cat-numeros/cat-numeros.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CatNumerosPage);
    return CatNumerosPage;
}());



/***/ })

}]);
//# sourceMappingURL=cat-numeros-cat-numeros-module-es5.js.map