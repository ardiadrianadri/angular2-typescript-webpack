import {setStatusBarColors} from "./utils/status-bar-util";
import {AppComponent} from "./app.component";
import {nativeScriptBootstrap} from "nativescript-angular/application";

setStatusBarColors();
nativeScriptBootstrap(AppComponent);
