import {Component} from 'angular2/core'
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {HTTP_PROVIDERS} from 'angular2/http'

@Component({
    selector:'my-app',
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, NS_ROUTER_PROVIDERS],
    template:'<TextField>{{msg}}</TextField>'
})
export class AppComponent {
    msg="Hello World";
}