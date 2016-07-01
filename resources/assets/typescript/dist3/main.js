var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("myNgInclude.component", ["@angular/core", "@angular/common"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1;
    var MyNgInclude;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            MyNgInclude = (function () {
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
            exports_1("MyNgInclude", MyNgInclude);
        }
    }
});
System.register("dashboard", ['@angular/core'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2;
    var Dashboard;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard() {
                }
                Dashboard = __decorate([
                    core_2.Component({
                        selector: 'app-content',
                        templateUrl: 'partials/content/dashboard.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Dashboard);
                return Dashboard;
            }());
            exports_2("Dashboard", Dashboard);
        }
    }
});
System.register("app.component", ['@angular/core', "myNgInclude.component", "dashboard"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3, myNgInclude_component_1, dashboard_1;
    var AppComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (myNgInclude_component_1_1) {
                myNgInclude_component_1 = myNgInclude_component_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_3.Component({
                        selector: 'body',
                        templateUrl: 'partials/app.html',
                        directives: [myNgInclude_component_1.MyNgInclude, dashboard_1.Dashboard]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_3("AppComponent", AppComponent);
            App.initHeader();
            Layout.initBody();
            Layout.initBaseLayout();
        }
    }
});
System.register("main", ['@angular/platform-browser-dynamic', "app.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var platform_browser_dynamic_1, app_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
        }
    }
});

//# sourceMappingURL=main.js.map
