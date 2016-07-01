import { Component } from "@angular/core";

import { MyNgInclude } from "./myNgInclude.component";

import { Dashboard } from "./dashboard";

declare var App: any;
declare var Layout: any;

@Component({
    selector: "body",
    templateUrl: "partials/app.html",
    directives: [MyNgInclude, Dashboard]
})
export class AppComponent { }

// App.initHeader();
// Layout.initBody();
// Layout.initBaseLayout();
