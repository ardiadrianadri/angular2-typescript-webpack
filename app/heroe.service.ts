import {Injectable} from "angular2/core";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroeService{
    getHeroes(id?:number){
        let result:any = null;
        
        if (id){
            result = HEROES.filter(heroe=>heroe.id === id)[0];
        } else {
            result = HEROES;
        }
        
        return Promise.resolve(result);
    }
}