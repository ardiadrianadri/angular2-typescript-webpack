import {Component, OnInit} from 'angular2/core';
import {Heroe} from "./heroe.entity";
import {HeroeService} from "./heroe.service";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroeDetailComponent} from "./heroe-detail.component";
require('./style/style.css');

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroeService, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path:'/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },{
        path:'/dashboard',
        name:'Dashboard',
        component: DashboardComponent,
        useAsDefault:true
    },{
        path:'/detail/:id',
        name:'HeroDetail',
        component:HeroeDetailComponent
    }
])
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
