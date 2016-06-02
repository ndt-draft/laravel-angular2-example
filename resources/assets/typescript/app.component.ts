import { Component } from '@angular/core';

import { MyNgInclude } from './myNgInclude.component';

declare var App: any;
declare var Layout: any;

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html',
  directives: [MyNgInclude]
})
export class AppComponent { }

App.initHeader();
Layout.initBaseLayout();
