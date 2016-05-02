import {Component} from 'angular2/core';
import {Heroe} from "./heroe.entity";
require('./style/style.css');

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    title= 'Tour of Heroes';
    hero: Heroe = {
        id:1,
        name:'Windstorm'
    }
}
