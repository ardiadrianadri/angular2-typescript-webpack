import {Component, Input, OnInit} from "angular2/core";
import {Heroe} from "./heroe.entity";
import {HeroeService} from "./heroe.service";
import {RouteParams} from "angular2/router";

@Component({
    selector: 'my-heroe-detail',
    templateUrl: 'app/heroe-detail.component.html',
    styleUrls: ['app/heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit{
    @Input()
    heroe: Heroe
    
    constructor(
        private _heroService: HeroeService,
        private _routeParams: RouteParams
    ){}
    
    ngOnInit(){
        this._heroService.getHeroes(Number(this._routeParams.get('id'))).then(heroe=>this.heroe=heroe, error=>console.error(JSON.stringify(error)));
    }
    
    goBack(){
        window.history.back();
    }
}