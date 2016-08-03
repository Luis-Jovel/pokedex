import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
	selector: 'pokemon-evolutions',
	templateUrl: 'app/component/views/pokemon-evolutions.component.html',
	providers: [PokemonService]
})
export class PokemonEvolutionsComponent implements OnInit {
	@Input() evolution_url : string;
	evolution_chain : any;
	loading_evolution : boolean;
	error : any;
	constructor(private pokemonService : PokemonService) {}
	ngOnInit() {
		this.loading_evolution = true;
		this.getEvolutionChain(this.evolution_url);
	}
	getEvolutionChain(url : string){
		this.pokemonService.getEvolutionChain(url)
			.subscribe(
				evolution_chain => {
					this.evolution_chain = evolution_chain;
					this.loading_evolution = false;
					console.log(evolution_chain);
				},
				error => this.error = <any>error);
	}
}
	