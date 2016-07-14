// import what we need from any 3rd party library, our modules or angular
import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';

@Component({
  // decorator
    selector: 'pm-app',
    template:`
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
    ` ,
    directives: [ProductListComponent]
})

// Create a class with code to support the view
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
