import { Component } from "@angular/core";

import { MyNgInclude } from "./myNgInclude.component";

import { Dashboard } from "./dashboard";

let App = require('../js/app.js');
let Layout = require('../js/layout.js');

@Component({
    selector: "body",
    templateUrl: "partials/app.html",
    directives: [MyNgInclude, Dashboard],
    styles: []
})
export class AppComponent { }

App.initHeader();
Layout.initBody();
Layout.initBaseLayout();
