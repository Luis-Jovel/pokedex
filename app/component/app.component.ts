import {Component} from '@angular/core';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonGenerationsComponent } from './pokemon-generations.component';
import './rxjs-extensions';

@Component({
    selector: 'my-app',
    template: `
    	<a [routerLink]="['/']" class='pokedex pokefont'>
    		PokéDex!
    	</a>
    	<p class='developed-by'>Developed by <a target='_blank' href='http://luisjovel.portfoliobox.net'>Luis Jovel</a></p>
    	<pokemon-generations></pokemon-generations>
    	<router-outlet></router-outlet>
    `,
    directives: [PokemonListComponent, PokemonGenerationsComponent]
})
export class AppComponent { }