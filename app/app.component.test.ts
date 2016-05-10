import {AppComponent} from "./app.component";
import {describe, beforeEach, it} from 'angular2/testing'

describe('Test karma config',function(){

    beforeEach(function () {
        this.app = new AppComponent();
    });

    it('Testing the basic karma configuration', function () {
        expect(true).toBe(true)
    });
});
