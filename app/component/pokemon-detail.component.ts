import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { PokemonService } from '../service/pokemon.service';
import { PokemonEvolutionsComponent } from './pokemon-evolutions.component';

@Component({
	selector: 'pokemon-detail',
	templateUrl: 'app/component/views/pokemon-detail.component.html',
	directives: [PokemonEvolutionsComponent],
	providers: [PokemonService]
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
	pokemon : any;
	species : any;
	id : number;
	private sub : any;
	error : any;
	loading_pokemon : boolean;
	loading_species : boolean;
	constructor(private pokemonService : PokemonService,
		private route : ActivatedRoute,
		private router : Router) {}

	ngOnInit() {
		this.loading_pokemon = true;
		this.loading_species = true;
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			if(this.id < 1 || isNaN(+params['id'])) {
				this.router.navigate(['/']);
			}
		});
		this.getPokemon(this.id);
		this.getPokemonSpecies(this.id);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
	getPokemon(id : number){
		this.pokemonService.getPokemon(id)
			.subscribe(
				pokemon => {
					this.pokemon = pokemon; 
					this.loading_pokemon = false;
				},
				error => this.error = <any>error);
	}
	getPokemonSpecies(id : number){
		this.pokemonService.getPokemonSpecies(this.id)
			.subscribe(
				species => {
					this.species = species;
					this.loading_species = false;					
				},
				error => this.error = <any>error );
	}
}
	