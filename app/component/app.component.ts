import {Component} from '@angular/core';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonGenerationsComponent } from './pokemon-generations.component';
import './rxjs-extensions';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Pokedex!</h1>
    	<pokemon-generations></pokemon-generations>
    	<router-outlet></router-outlet>
    `,
    directives: [PokemonListComponent, PokemonGenerationsComponent]
})
export class AppComponent { }