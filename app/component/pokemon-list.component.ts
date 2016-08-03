import {Component, OnInit, OnDestroy} from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Router, ActivatedRoute, Event, NavigationStart , NavigationEnd }       from '@angular/router';
import { PokemonGenerationsComponent } from './pokemon-generations.component';

@Component({
	selector: 'pokemon-list',
	templateUrl: 'app/component/views/pokemon-list.component.html',
	directives: [PokemonGenerationsComponent],
	providers: [PokemonService],
	styles: [`
	img {
		width: 100%;
		image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
	    image-rendering: -moz-crisp-edges;          /* Firefox                        */
	    image-rendering: -o-crisp-edges;            /* Opera                          */
	    image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
	    image-rendering: pixelated; /* Chrome */
	    image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
	    -ms-interpolation-mode: nearest-neighbor;   /* IE8+                           */
	}
	`]
})

export class PokemonListComponent implements OnInit{
	loading: boolean;
	pokemons: any;
	generation : string;
	error: any;
	private sub : any;
	constructor(private pokemonService: PokemonService,
		private route : ActivatedRoute,
		private router : Router) {
		router.events.subscribe((event : Event) => {
			if(event instanceof NavigationEnd && this.generation){
				this.getPokemons(this.generation);
			}
		});
	}
	ngOnInit() {
		this.loading = true;
		this.sub = this.route.params.subscribe(params => {
			this.generation = params["generation"] ? params["generation"] : "generation-i";
		});
		this.getPokemons(this.generation);
	}
	ngOnDestroy() {
		this.sub.unsubscribe();
	}
	getPokemons(generation : string) {
		this.pokemonService.getPokemons(generation)
			.subscribe(
				pokemons => {
					this.pokemons = pokemons;
					this.loading = false;
				},
				error => this.error = <any>error);
	}
}