webpackJsonp(["no-decorators-form-example.module"],{

/***/ "../../../../../src/app/no-decorators-form-example/no-decorators-form-example.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>No Decorators Form</h3>\n<div fxLayout=\"row\" class=\"grid--hor--2\">\n  <div fxFlex=\"2 0 400px\" class=\"grid__el\">\n    <form lazyForm [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n      <lazy-selector [value]=\"value\" [metadata]=\"metadata\"></lazy-selector>\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.invalid\">Submit</button>\n    </form>\n  </div>\n  <div fxFlex=\"0.5 0 300px\" class=\"grid__el\">\n<pre class=\"height-100pct\" [ngClass]=\"{'invalid': form.invalid, 'valid': form.valid}\">\n<b>model value:</b> {{value | json}}\n<b>form value:</b> {{form.value | json}}\n</pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/no-decorators-form-example/no-decorators-form-example.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/no-decorators-form-example/no-decorators-form-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoDecoratorsFormExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__external_default_control_default_control_component__ = __webpack_require__("../../../../../src/app/_external/default-control/default-control.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoDecoratorsFormExampleComponent = (function () {
    function NoDecoratorsFormExampleComponent() {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({});
        this.value = 'Populated value';
        this.metadata = new __WEBPACK_IMPORTED_MODULE_2__external_default_control_default_control_component__["b" /* DefaultControlMetadata */]({
            key: 'sampleField',
            label: 'Sample Label',
            required: true,
        });
    }
    NoDecoratorsFormExampleComponent.prototype.onSubmit = function () {
        console.log(this.form.value);
    };
    NoDecoratorsFormExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-no-decorators-form-example',
            template: __webpack_require__("../../../../../src/app/no-decorators-form-example/no-decorators-form-example.component.html"),
            styles: [__webpack_require__("../../../../../src/app/no-decorators-form-example/no-decorators-form-example.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoDecoratorsFormExampleComponent);
    return NoDecoratorsFormExampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/no-decorators-form-example/no-decorators-form-example.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDecoratorsFormExampleModule", function() { return NoDecoratorsFormExampleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__no_decorators_form_example_component__ = __webpack_require__("../../../../../src/app/no-decorators-form-example/no-decorators-form-example.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NoDecoratorsFormExampleModule = (function () {
    function NoDecoratorsFormExampleModule() {
    }
    NoDecoratorsFormExampleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([{ path: '', component: __WEBPACK_IMPORTED_MODULE_3__no_decorators_form_example_component__["a" /* NoDecoratorsFormExampleComponent */] }])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__no_decorators_form_example_component__["a" /* NoDecoratorsFormExampleComponent */],
            ],
        })
    ], NoDecoratorsFormExampleModule);
    return NoDecoratorsFormExampleModule;
}());



/***/ })

});
//# sourceMappingURL=no-decorators-form-example.module.chunk.js.map