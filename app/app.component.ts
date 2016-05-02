import {Component, OnInit} from 'angular2/core';
import {Heroe} from "./heroe.entity";
import {HeroeDetailComponent} from "./heroe-detail.component";
import {HeroeService} from "./heroe.service";
require('./style/style.css');

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [HeroeDetailComponent],
    providers: [HeroeService]
})

export class AppComponent implements OnInit{
    title= 'Tour of Heroes';
    selectedHeroe: Heroe;
    heroes:Heroe[];

    constructor(
        private _heroeService:HeroeService
    ){}

    ngOnInit(){
        this._heroeService.getHeroes().then(heroes=>this.heroes = heroes, error=>console.error(JSON.stringify(error)));
    }
    
    onSelect(heroe: Heroe){
        this.selectedHeroe = heroe;
    }
}
