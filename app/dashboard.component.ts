import {Component, OnInit} from "angular2/core";
import {Heroe} from "./heroe.entity";
import {HeroeService} from "./heroe.service";
import {Router} from "angular2/router";

@Component({
    selector:'my-dashboard',
    templateUrl:'app/dashboard.component.html',
    styleUrls:['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    heroes: Heroe[];

    constructor(
        private _heroeService: HeroeService,
        private _router: Router
    ){}
    
    ngOnInit(){
        this._heroeService.getHeroes().then(heroes=>this.heroes = heroes.slice(1,5), error=>console.error(JSON.stringify(error)));
    }
    
    gotoDetail(heroe: Heroe){
        this._router.navigate(['HeroDetail',{id:heroe.id}]);
    }
    
}
