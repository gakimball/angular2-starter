/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, Directive, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  template: '<content></content>'
})
class App {

}

bootstrap(App);
