import {Component} from 'angular2/core';
import {Heroe} from "./heroe.entity";
import {HEROES} from "./mock-heroes";
import {HeroeDetailComponent} from "./heroe-detail.component";
require('./style/style.css');

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [HeroeDetailComponent]
})

export class AppComponent {
    title= 'Tour of Heroes';
    selectedHeroe: Heroe;
    heroes:Heroe[] = HEROES;
    
    onSelect(heroe: Heroe){
        this.selectedHeroe = heroe;
    }
}
