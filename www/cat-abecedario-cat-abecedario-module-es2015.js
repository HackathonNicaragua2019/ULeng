(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cat-abecedario-cat-abecedario-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cat-abecedario/cat-abecedario.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cat-abecedario/cat-abecedario.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"rosa\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)='regresar_categoria()'><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>Abecedario!</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)='home()'><ion-icon name=\"home\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"background\">\r\n\r\n  <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\r\n    <a href=\"letra-a\"><img src=\"/assets/img/abecedario/a.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-b\"><img src=\"/assets/img/abecedario/b.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-c\"><img src=\"/assets/img/abecedario/c.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-ch\"><img src=\"/assets/img/abecedario/ch.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-d\"><img src=\"/assets/img/abecedario/d.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-e\"><img src=\"/assets/img/abecedario/e.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-f\"><img src=\"/assets/img/abecedario/f.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-g\"><img src=\"/assets/img/abecedario/g.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-h\"><img src=\"/assets/img/abecedario/h.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-i\"><img src=\"/assets/img/abecedario/i.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-j\"><img src=\"/assets/img/abecedario/j.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-k\"><img src=\"/assets/img/abecedario/k.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-l\"><img src=\"/assets/img/abecedario/l.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-ll\"><img src=\"/assets/img/abecedario/ll.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-m\"><img src=\"/assets/img/abecedario/m.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-n\"><img src=\"/assets/img/abecedario/n.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-n1\"><img src=\"/assets/img/abecedario/ñ.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-o\"><img src=\"/assets/img/abecedario/o.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-p\"><img src=\"/assets/img/abecedario/p.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-q\"><img src=\"/assets/img/abecedario/q.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-r\"><img src=\"/assets/img/abecedario/r.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-rr\"><img src=\"/assets/img/abecedario/rr.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-s\"><img src=\"/assets/img/abecedario/s.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-t\"><img src=\"/assets/img/abecedario/t.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-u\"><img src=\"/assets/img/abecedario/u.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-v\"><img src=\"/assets/img/abecedario/v.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-w\"><img src=\"/assets/img/abecedario/w.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-x\"><img src=\"/assets/img/abecedario/x.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-y\"><img src=\"/assets/img/abecedario/y.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n    <a href=\"letra-z\"><img src=\"/assets/img/abecedario/z.png\" alt=\"Enviar\" style= \"width: 70px; height: 70px; margin-left: 5px;\"></a>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/cat-abecedario/cat-abecedario.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/cat-abecedario/cat-abecedario.module.ts ***!
  \*********************************************************/
/*! exports provided: CatAbecedarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatAbecedarioPageModule", function() { return CatAbecedarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cat_abecedario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cat-abecedario.page */ "./src/app/cat-abecedario/cat-abecedario.page.ts");







const routes = [
    {
        path: '',
        component: _cat_abecedario_page__WEBPACK_IMPORTED_MODULE_6__["CatAbecedarioPage"]
    }
];
let CatAbecedarioPageModule = class CatAbecedarioPageModule {
};
CatAbecedarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cat_abecedario_page__WEBPACK_IMPORTED_MODULE_6__["CatAbecedarioPage"]]
    })
], CatAbecedarioPageModule);



/***/ }),

/***/ "./src/app/cat-abecedario/cat-abecedario.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/cat-abecedario/cat-abecedario.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background:url(\"/assets/img/interfaz.png\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0LWFiZWNlZGFyaW8vQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxBcHBcXFVMZW5nL3NyY1xcYXBwXFxjYXQtYWJlY2VkYXJpb1xcY2F0LWFiZWNlZGFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9jYXQtYWJlY2VkYXJpby9jYXQtYWJlY2VkYXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvRUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2F0LWFiZWNlZGFyaW8vY2F0LWFiZWNlZGFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1nL2ludGVyZmF6LnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59IiwiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDp1cmwoXCIvYXNzZXRzL2ltZy9pbnRlcmZhei5wbmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/cat-abecedario/cat-abecedario.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/cat-abecedario/cat-abecedario.page.ts ***!
  \*******************************************************/
/*! exports provided: CatAbecedarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatAbecedarioPage", function() { return CatAbecedarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CatAbecedarioPage = class CatAbecedarioPage {
    constructor(router) {
        this.router = router;
    }
    regresar_categoria() {
        this.router.navigate(["/categorias"]);
    }
    home() {
        this.router.navigate(["/home"]);
    }
};
CatAbecedarioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CatAbecedarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cat-abecedario',
        template: __webpack_require__(/*! raw-loader!./cat-abecedario.page.html */ "./node_modules/raw-loader/index.js!./src/app/cat-abecedario/cat-abecedario.page.html"),
        styles: [__webpack_require__(/*! ./cat-abecedario.page.scss */ "./src/app/cat-abecedario/cat-abecedario.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CatAbecedarioPage);



/***/ })

}]);
//# sourceMappingURL=cat-abecedario-cat-abecedario-module-es2015.js.map