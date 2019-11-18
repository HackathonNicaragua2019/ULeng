(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["num-num-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/num/num.page.html":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/num/num.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>num</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/num/num.module.ts":
/*!***********************************!*\
  !*** ./src/app/num/num.module.ts ***!
  \***********************************/
/*! exports provided: NumPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumPageModule", function() { return NumPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _num_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./num.page */ "./src/app/num/num.page.ts");







const routes = [
    {
        path: '',
        component: _num_page__WEBPACK_IMPORTED_MODULE_6__["NumPage"]
    }
];
let NumPageModule = class NumPageModule {
};
NumPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_num_page__WEBPACK_IMPORTED_MODULE_6__["NumPage"]]
    })
], NumPageModule);



/***/ }),

/***/ "./src/app/num/num.page.scss":
/*!***********************************!*\
  !*** ./src/app/num/num.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251bS9udW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/num/num.page.ts":
/*!*********************************!*\
  !*** ./src/app/num/num.page.ts ***!
  \*********************************/
/*! exports provided: NumPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumPage", function() { return NumPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumPage = class NumPage {
    constructor() { }
    ngOnInit() {
    }
};
NumPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-num',
        template: __webpack_require__(/*! raw-loader!./num.page.html */ "./node_modules/raw-loader/index.js!./src/app/num/num.page.html"),
        styles: [__webpack_require__(/*! ./num.page.scss */ "./src/app/num/num.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NumPage);



/***/ })

}]);
//# sourceMappingURL=num-num-module-es2015.js.map