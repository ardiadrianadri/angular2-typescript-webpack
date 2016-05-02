import {Component, Input} from "angular2/core";
import {Heroe} from "./heroe.entity";

@Component({
    selector: 'my-heroe-detail',
    templateUrl: 'app/heroe-detail.component.html'
})
export class HeroeDetailComponent{
    @Input()
    heroe: Heroe
}