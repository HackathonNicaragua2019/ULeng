(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorias-categorias-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/categorias/categorias.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categorias/categorias.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"rosa\">\r\n    <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)='home()'><ion-icon name=\"home\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>Categorias!</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-button></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"background\">\r\n\r\n  <div style=\"text-align: center; align-content:center; align-self:center; margin-top: 10px;\">\r\n    <a href=\"cat-abecedario\"><img src=\"/assets/img/categorias/abecedario.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px; margin-left: 20px; margin-top: 5px;\"></a>\r\n    <a href=\"cat-animales\"><img src=\"/assets/img/categorias/animales.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px; margin-left: 20px; margin-top: 5px;\"></a>\r\n    <a href=\"cat-bebidas\"><img src=\"/assets/img/categorias/bebidas.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px; margin-left: 20px; margin-top: 5px;\"></a>\r\n    <a href=\"cat-colores\"><img src=\"/assets/img/categorias/colores.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px; margin-left: 20px; margin-top: 5px;\"></a>\r\n    <a href=\"cat-comidas\"><img src=\"/assets/img/categorias/comidas.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px; margin-left: 20px; margin-top: 5px;\"></a>\r\n    <a href=\"cat-departamentos\"><img src=\"/assets/img/categorias/departamentos.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px; margin-left: 20px; margin-top: 5px;\"></a>\r\n    <a href=\"cat-emociones\"><img src=\"/assets/img/categorias/emociones.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px; margin-left: 20px; margin-top: 5px;\"></a>\r\n    <a href=\"cat-familia\"><img src=\"/assets/img/categorias/familia.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px; margin-left: 20px; margin-top: 5px;\"></a>\r\n    <a href=\"cat-numeros\"><img src=\"/assets/img/categorias/numeros.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px; margin-left: 20px; margin-top: 5px;\"></a>\r\n    <a href=\"cat-saludos\"><img src=\"/assets/img/categorias/saludos.png\" alt=\"Enviar\" style= \"width: 100px; height: 100px; margin-left: 20px; margin-top: 5px;\"></a>\r\n  </div>\r\n\r\n  <ion-button color=\"rosa\" size=\"small\" (click)=\"onLogout()\">Cerrar Sesión</ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/categorias/categorias.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categorias/categorias.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function() { return CategoriasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias.page */ "./src/app/categorias/categorias.page.ts");







const routes = [
    {
        path: '',
        component: _categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]
    }
];
let CategoriasPageModule = class CategoriasPageModule {
};
CategoriasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]]
    })
], CategoriasPageModule);



/***/ }),

/***/ "./src/app/categorias/categorias.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categorias/categorias.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background:url(\"/assets/img/interfaz.png\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmlhcy9DOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXEFwcFxcVUxlbmcvc3JjXFxhcHBcXGNhdGVnb3JpYXNcXGNhdGVnb3JpYXMucGFnZS5zY3NzIiwic3JjL2FwcC9jYXRlZ29yaWFzL2NhdGVnb3JpYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0VBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9pbWcvaW50ZXJmYXoucG5nJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOnVybChcIi9hc3NldHMvaW1nL2ludGVyZmF6LnBuZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/categorias/categorias.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categorias/categorias.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPage", function() { return CategoriasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let CategoriasPage = class CategoriasPage {
    constructor(authSvc, router, afAuth) {
        this.authSvc = authSvc;
        this.router = router;
        this.afAuth = afAuth;
    }
    home() {
        this.router.navigate(["/home"]);
    }
    onLogout() {
        console.log('Salir!');
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('/login');
    }
};
CategoriasPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
CategoriasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias',
        template: __webpack_require__(/*! raw-loader!./categorias.page.html */ "./node_modules/raw-loader/index.js!./src/app/categorias/categorias.page.html"),
        styles: [__webpack_require__(/*! ./categorias.page.scss */ "./src/app/categorias/categorias.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
], CategoriasPage);



/***/ })

}]);
//# sourceMappingURL=categorias-categorias-module-es2015.js.map