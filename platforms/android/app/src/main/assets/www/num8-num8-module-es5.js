(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["num8-num8-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/num8/num8.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/num8/num8.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>num8</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/num8/num8.module.ts":
/*!*************************************!*\
  !*** ./src/app/num8/num8.module.ts ***!
  \*************************************/
/*! exports provided: Num8PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Num8PageModule", function() { return Num8PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _num8_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./num8.page */ "./src/app/num8/num8.page.ts");







var routes = [
    {
        path: '',
        component: _num8_page__WEBPACK_IMPORTED_MODULE_6__["Num8Page"]
    }
];
var Num8PageModule = /** @class */ (function () {
    function Num8PageModule() {
    }
    Num8PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_num8_page__WEBPACK_IMPORTED_MODULE_6__["Num8Page"]]
        })
    ], Num8PageModule);
    return Num8PageModule;
}());



/***/ }),

/***/ "./src/app/num8/num8.page.scss":
/*!*************************************!*\
  !*** ./src/app/num8/num8.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251bTgvbnVtOC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/num8/num8.page.ts":
/*!***********************************!*\
  !*** ./src/app/num8/num8.page.ts ***!
  \***********************************/
/*! exports provided: Num8Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Num8Page", function() { return Num8Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Num8Page = /** @class */ (function () {
    function Num8Page() {
    }
    Num8Page.prototype.ngOnInit = function () {
    };
    Num8Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-num8',
            template: __webpack_require__(/*! raw-loader!./num8.page.html */ "./node_modules/raw-loader/index.js!./src/app/num8/num8.page.html"),
            styles: [__webpack_require__(/*! ./num8.page.scss */ "./src/app/num8/num8.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Num8Page);
    return Num8Page;
}());



/***/ })

}]);
//# sourceMappingURL=num8-num8-module-es5.js.map