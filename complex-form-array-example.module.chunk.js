webpackJsonp(["complex-form-array-example.module"],{

/***/ "../../../../../src/app/complex-form-array-example/complex-form-array-example.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Complex Form Array Example</h3>\n<div fxLayout=\"row\" class=\"grid--hor--2\">\n  <div fxFlex=\"2 0 400px\" class=\"grid__el\">\n    <form lazyForm [formGroup]=\"form\" novalidate>\n      <lazy-selector [value]=\"model.title\" [metadata]=\"model.metadata('title')\"></lazy-selector>\n      <lazy-selector [value]=\"model.array\" [metadata]=\"model.metadata('array')\"></lazy-selector>\n    </form>\n  </div>\n  <div fxFlex=\"0.5 0 300px\" class=\"grid__el\">\n<pre class=\"height-100pct\" [ngClass]=\"{'invalid': form.invalid, 'valid': form.valid}\">\n<b>model value:</b> {{model | json}}\n<b>form value:</b> {{form.value | json}}\n</pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/complex-form-array-example/complex-form-array-example.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/complex-form-array-example/complex-form-array-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexFormArrayExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__decorators_form_example_model__ = __webpack_require__("../../../../../src/app/decorators-form-example/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model__ = __webpack_require__("../../../../../src/app/complex-form-array-example/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComplexFormArrayExampleComponent = (function () {
    function ComplexFormArrayExampleComponent() {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({});
        this.model = new __WEBPACK_IMPORTED_MODULE_3__model__["a" /* ComplexFormArrayExampleModel */]({ array: [new __WEBPACK_IMPORTED_MODULE_2__decorators_form_example_model__["a" /* UserModel */]({ firstName: 'Test Name' })] });
    }
    ComplexFormArrayExampleComponent.prototype.ngOnInit = function () {
    };
    ComplexFormArrayExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-complex-form-array-example',
            template: __webpack_require__("../../../../../src/app/complex-form-array-example/complex-form-array-example.component.html"),
            styles: [__webpack_require__("../../../../../src/app/complex-form-array-example/complex-form-array-example.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComplexFormArrayExampleComponent);
    return ComplexFormArrayExampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/complex-form-array-example/complex-form-array-example.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexFormArrayExampleModule", function() { return ComplexFormArrayExampleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complex_form_array_example_component__ = __webpack_require__("../../../../../src/app/complex-form-array-example/complex-form-array-example.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComplexFormArrayExampleModule = (function () {
    function ComplexFormArrayExampleModule() {
    }
    ComplexFormArrayExampleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([{ path: '', component: __WEBPACK_IMPORTED_MODULE_3__complex_form_array_example_component__["a" /* ComplexFormArrayExampleComponent */] }])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__complex_form_array_example_component__["a" /* ComplexFormArrayExampleComponent */]]
        })
    ], ComplexFormArrayExampleModule);
    return ComplexFormArrayExampleModule;
}());



/***/ }),

/***/ "../../../../../src/app/complex-form-array-example/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexFormArrayExampleModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__external_complex_form_array_control_complex_form_array_control_component__ = __webpack_require__("../../../../../src/app/_external/complex-form-array-control/complex-form-array-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__external_default_control_default_control_component__ = __webpack_require__("../../../../../src/app/_external/default-control/default-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__external_metadata_models__ = __webpack_require__("../../../../../src/app/_external/metadata.models.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComplexFormArrayExampleModel = (function (_super) {
    __extends(ComplexFormArrayExampleModel, _super);
    function ComplexFormArrayExampleModel(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.array = options['array'] || [];
        return _this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__external_metadata_models__["c" /* metadata */])(new __WEBPACK_IMPORTED_MODULE_1__external_default_control_default_control_component__["b" /* DefaultControlMetadata */]({
            label: 'Label for Title',
            placeholder: 'My placeholder'
        })),
        __metadata("design:type", String)
    ], ComplexFormArrayExampleModel.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__external_metadata_models__["c" /* metadata */])(new __WEBPACK_IMPORTED_MODULE_0__external_complex_form_array_control_complex_form_array_control_component__["b" /* ComplexFormArrayControlMetadata */]({ minLength: 4 })),
        __metadata("design:type", Array)
    ], ComplexFormArrayExampleModel.prototype, "array", void 0);
    return ComplexFormArrayExampleModel;
}(__WEBPACK_IMPORTED_MODULE_2__external_metadata_models__["b" /* MetadataAccessor */]));



/***/ })

});
//# sourceMappingURL=complex-form-array-example.module.chunk.js.map