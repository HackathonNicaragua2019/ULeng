(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cat-animales-cat-animales-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cat-animales/cat-animales.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cat-animales/cat-animales.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"rosa\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)='regresar_categoria()'><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>Animales!</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)='home()'><ion-icon name=\"home\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"background\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"item item-body\">\r\n      <img class=\"full-image\"src=\"/assets/img/animales/portadaAnimal.png\" >\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\r\n    <a href=\"ani-ardilla\"><img src=\"/assets/img/animales/ardilla.png\" alt=\"Enviar\" style= \"width: 80px; height: 80px; margin-left: 5px;\"></a>\r\n    <a href=\"ani-caballo\"><img src=\"/assets/img/animales/caballo.png\" alt=\"Enviar\" style= \"width: 80px; height: 80px; margin-left: 5px;\"></a>\r\n    <a href=\"ani-cerdo\"><img src=\"/assets/img/animales/cerdo.png\" alt=\"Enviar\" style= \"width: 80px; height: 80px; margin-left: 5px;\"></a>\r\n    <a href=\"ani-conejo\"><img src=\"/assets/img/animales/conejo.png\" alt=\"Enviar\" style= \"width: 80px; height: 80px; margin-left: 5px;\"></a>\r\n    <a href=\"ani-gallina\"><img src=\"/assets/img/animales/gallina.png\" alt=\"Enviar\" style= \"width: 80px; height: 80px; margin-left: 5px;\"></a>\r\n    <a href=\"ani-gallo\"><img src=\"/assets/img/animales/gallo.png\" alt=\"Enviar\" style= \"width: 80px; height: 80px; margin-left: 5px;\"></a>\r\n    <a href=\"ani-gato\"><img src=\"/assets/img/animales/gato.png\" alt=\"Enviar\" style= \"width: 80px; height: 80px; margin-left: 5px;\"></a>\r\n    <a href=\"ani-mono\"><img src=\"/assets/img/animales/mono.png\" alt=\"Enviar\" style= \"width: 80px; height: 80px; margin-left: 5px;\"></a>\r\n    <a href=\"ani-perro\"><img src=\"/assets/img/animales/perro.png\" alt=\"Enviar\" style= \"width: 80px; height: 80px; margin-left: 5px;\"></a>\r\n    <a href=\"ani-vaca\"><img src=\"/assets/img/animales/vaca.png\" alt=\"Enviar\" style= \"width: 80px; height: 80px; margin-left: 5px;\"></a>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/cat-animales/cat-animales.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cat-animales/cat-animales.module.ts ***!
  \*****************************************************/
/*! exports provided: CatAnimalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatAnimalesPageModule", function() { return CatAnimalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cat_animales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cat-animales.page */ "./src/app/cat-animales/cat-animales.page.ts");







var routes = [
    {
        path: '',
        component: _cat_animales_page__WEBPACK_IMPORTED_MODULE_6__["CatAnimalesPage"]
    }
];
var CatAnimalesPageModule = /** @class */ (function () {
    function CatAnimalesPageModule() {
    }
    CatAnimalesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cat_animales_page__WEBPACK_IMPORTED_MODULE_6__["CatAnimalesPage"]]
        })
    ], CatAnimalesPageModule);
    return CatAnimalesPageModule;
}());



/***/ }),

/***/ "./src/app/cat-animales/cat-animales.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/cat-animales/cat-animales.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background:url(\"/assets/img/interfaz.png\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0LWFuaW1hbGVzL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcQXBwXFxVTGVuZy9zcmNcXGFwcFxcY2F0LWFuaW1hbGVzXFxjYXQtYW5pbWFsZXMucGFnZS5zY3NzIiwic3JjL2FwcC9jYXQtYW5pbWFsZXMvY2F0LWFuaW1hbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9FQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXQtYW5pbWFsZXMvY2F0LWFuaW1hbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2ltZy9pbnRlcmZhei5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufSIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6dXJsKFwiL2Fzc2V0cy9pbWcvaW50ZXJmYXoucG5nXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cat-animales/cat-animales.page.ts":
/*!***************************************************!*\
  !*** ./src/app/cat-animales/cat-animales.page.ts ***!
  \***************************************************/
/*! exports provided: CatAnimalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatAnimalesPage", function() { return CatAnimalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CatAnimalesPage = /** @class */ (function () {
    function CatAnimalesPage(router) {
        this.router = router;
    }
    CatAnimalesPage.prototype.regresar_categoria = function () {
        this.router.navigate(["/categorias"]);
    };
    CatAnimalesPage.prototype.home = function () {
        this.router.navigate(["/home"]);
    };
    CatAnimalesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CatAnimalesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cat-animales',
            template: __webpack_require__(/*! raw-loader!./cat-animales.page.html */ "./node_modules/raw-loader/index.js!./src/app/cat-animales/cat-animales.page.html"),
            styles: [__webpack_require__(/*! ./cat-animales.page.scss */ "./src/app/cat-animales/cat-animales.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CatAnimalesPage);
    return CatAnimalesPage;
}());



/***/ })

}]);
//# sourceMappingURL=cat-animales-cat-animales-module-es5.js.map