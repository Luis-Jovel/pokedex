import {Component} from '@angular/core';
import { PokemonListComponent } from './pokemon-list.component';
import './rxjs-extensions';

@Component({
    selector: 'my-app',
    template: `
    	<h1>My First Angular 2 App</h1>
    	<pokemon-list></pokemon-list>
    `,
    directives: [PokemonListComponent]
})
export class AppComponent { }