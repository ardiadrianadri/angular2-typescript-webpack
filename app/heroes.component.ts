import {Component, OnInit} from "angular2/core";
import {Heroe} from "./heroe.entity";
import {HeroeService} from "./heroe.service";
import {Router} from "angular2/router";

@Component({
    selector:'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Heroe[];
    selectedHeroe: Heroe;

    constructor(
        private _heroesService: HeroeService,
        private _router: Router
    ){}

    ngOnInit(){
        this._heroesService.getHeroes().then(heroes=>this.heroes = heroes, error=>console.error(JSON.stringify(error)));
    }

    onSelect(heroe:Heroe){
        this.selectedHeroe = heroe;
    }

    gotoDetail(heroe:Heroe){
        this._router.navigate(['HeroDetail',{id:heroe.id}]);
    }
}