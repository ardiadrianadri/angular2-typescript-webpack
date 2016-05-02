import {Component} from 'angular2/core';
import {Heroe} from "./heroe.entity";
import {HEROES} from "./mock-heroes";
require('./style/style.css');

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    title= 'Tour of Heroes';
    selectedHeroe: Heroe;
    heroes:Heroe[] = HEROES;
    
    onSelect(heroe: Heroe){
        this.selectedHeroe = heroe;
    }
}
