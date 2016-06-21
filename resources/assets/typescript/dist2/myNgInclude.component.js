"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var MyNgInclude = (function () {
    function MyNgInclude(componentResolver) {
        this.componentResolver = componentResolver;
    }
    MyNgInclude.prototype.ngOnInit = function () {
        var _this = this;
        var dynamicComponent = this.createContentComponent(this.templateUrl);
        this.componentResolver.resolveComponent(dynamicComponent)
            .then(function (factory) { return _this.contentTarget.createComponent(factory); });
    };
    MyNgInclude.prototype.createContentComponent = function (templateUrl) {
        var MyNgIncludeContent = (function () {
            function MyNgIncludeContent() {
            }
            MyNgIncludeContent = __decorate([
                core_1.Component({
                    selector: 'my-ng-include-content',
                    templateUrl: templateUrl,
                    directives: common_1.FORM_DIRECTIVES,
                }), 
                __metadata('design:paramtypes', [])
            ], MyNgIncludeContent);
            return MyNgIncludeContent;
        }());
        return MyNgIncludeContent;
    };
    __decorate([
        core_1.Input('src'), 
        __metadata('design:type', String)
    ], MyNgInclude.prototype, "templateUrl", void 0);
    __decorate([
        core_1.ViewChild('myNgIncludeContent', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], MyNgInclude.prototype, "contentTarget", void 0);
    MyNgInclude = __decorate([
        core_1.Component({
            selector: 'my-ng-include',
            template: '<div #myNgIncludeContent></div>'
        }), 
        __metadata('design:paramtypes', [core_1.ComponentResolver])
    ], MyNgInclude);
    return MyNgInclude;
}());
exports.MyNgInclude = MyNgInclude;

//# sourceMappingURL=myNgInclude.component.js.map
